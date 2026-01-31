import { useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';
import { 
  createInitializeMintInstruction, 
  getMinimumBalanceForRentExemptMint, 
  MINT_SIZE, 
  TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  createMintToInstruction
} from '@solana/spl-token';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Rocket, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  symbol: string;
  description: string;
  imageUrl: string;
  initialSupply: string;
  decimals: string;
}

export const CreateTokenForm = () => {
  const { connected, publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mintAddress, setMintAddress] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    symbol: '',
    description: '',
    imageUrl: '',
    initialSupply: '1000000000',
    decimals: '9',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!connected || !publicKey) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet first",
        variant: "destructive",
      });
      return;
    }

    // Validate form
    if (!formData.name.trim() || formData.name.length > 32) {
      toast({
        title: "Invalid name",
        description: "Token name is required and must be 32 characters or less",
        variant: "destructive",
      });
      return;
    }

    if (!formData.symbol.trim() || formData.symbol.length > 10) {
      toast({
        title: "Invalid symbol",
        description: "Token symbol is required and must be 10 characters or less",
        variant: "destructive",
      });
      return;
    }

    const decimals = parseInt(formData.decimals);
    if (isNaN(decimals) || decimals < 0 || decimals > 9) {
      toast({
        title: "Invalid decimals",
        description: "Decimals must be between 0 and 9",
        variant: "destructive",
      });
      return;
    }

    const initialSupply = parseInt(formData.initialSupply);
    if (isNaN(initialSupply) || initialSupply <= 0) {
      toast({
        title: "Invalid supply",
        description: "Initial supply must be greater than 0",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setSuccess(false);
    setMintAddress(null);

    try {
      // Create new mint keypair
      const mintKeypair = Keypair.generate();
      const lamports = await getMinimumBalanceForRentExemptMint(connection);

      // Create mint account
      const createMintAccountIx = SystemProgram.createAccount({
        fromPubkey: publicKey,
        newAccountPubkey: mintKeypair.publicKey,
        space: MINT_SIZE,
        lamports,
        programId: TOKEN_PROGRAM_ID,
      });

      // Initialize mint
      const initializeMintIx = createInitializeMintInstruction(
        mintKeypair.publicKey,
        decimals,
        publicKey,
        publicKey,
        TOKEN_PROGRAM_ID
      );

      // Get associated token account address
      const associatedTokenAccount = await getAssociatedTokenAddress(
        mintKeypair.publicKey,
        publicKey
      );

      // Create associated token account
      const createATAIx = createAssociatedTokenAccountInstruction(
        publicKey,
        associatedTokenAccount,
        publicKey,
        mintKeypair.publicKey
      );

      // Mint initial supply to the associated token account
      const mintToIx = createMintToInstruction(
        mintKeypair.publicKey,
        associatedTokenAccount,
        publicKey,
        BigInt(initialSupply) * BigInt(10 ** decimals)
      );

      // Build transaction
      const transaction = new Transaction().add(
        createMintAccountIx,
        initializeMintIx,
        createATAIx,
        mintToIx
      );

      // Get recent blockhash
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;

      // Sign with mint keypair (partial sign)
      transaction.partialSign(mintKeypair);

      // Send and confirm transaction
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'confirmed');

      const newMintAddress = mintKeypair.publicKey.toBase58();

      // Store token info in database
      const { error: dbError } = await supabase.from('tokens').insert({
        name: formData.name.trim(),
        symbol: formData.symbol.trim().toUpperCase(),
        description: formData.description.trim() || null,
        image_url: formData.imageUrl.trim() || null,
        initial_supply: initialSupply,
        decimals: decimals,
        mint_address: newMintAddress,
        creator_wallet: publicKey.toBase58(),
      });

      if (dbError) {
        console.error('Database error:', dbError);
        // Still show success since token was created on-chain
      }

      setMintAddress(newMintAddress);
      setSuccess(true);
      toast({
        title: "Token Created!",
        description: `Your token ${formData.symbol.toUpperCase()} has been created successfully!`,
      });

      // Reset form
      setFormData({
        name: '',
        symbol: '',
        description: '',
        imageUrl: '',
        initialSupply: '1000000000',
        decimals: '9',
      });
    } catch (error: any) {
      console.error('Error creating token:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to create token. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!connected) {
    return (
      <div className="glass-card p-8 rounded-xl text-center">
        <AlertCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-xl font-semibold mb-2">Connect Your Wallet</h3>
        <p className="text-muted-foreground">
          Please connect your Solana wallet to create a token
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <Rocket className="w-6 h-6 text-primary" />
        Create Token
      </h2>

      {success && mintAddress && (
        <div className="mb-6 p-4 rounded-lg bg-accent/50 border border-primary/30">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold text-primary">Token Created Successfully!</p>
              <p className="text-sm text-muted-foreground mt-1">Mint Address:</p>
              <code className="text-xs text-primary break-all">{mintAddress}</code>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Token Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="My Awesome Token"
              maxLength={32}
              required
              className="bg-muted/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="symbol">Symbol *</Label>
            <Input
              id="symbol"
              name="symbol"
              value={formData.symbol}
              onChange={handleChange}
              placeholder="MAT"
              maxLength={10}
              required
              className="bg-muted/50 uppercase"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your token..."
            rows={3}
            className="bg-muted/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            name="imageUrl"
            type="url"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/token-logo.png"
            className="bg-muted/50"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="initialSupply">Initial Supply *</Label>
            <Input
              id="initialSupply"
              name="initialSupply"
              type="number"
              value={formData.initialSupply}
              onChange={handleChange}
              placeholder="1000000000"
              min="1"
              required
              className="bg-muted/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="decimals">Decimals *</Label>
            <Input
              id="decimals"
              name="decimals"
              type="number"
              value={formData.decimals}
              onChange={handleChange}
              placeholder="9"
              min="0"
              max="9"
              required
              className="bg-muted/50"
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating Token...
              </>
            ) : (
              <>
                <Rocket className="w-5 h-5" />
                Create Token
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Creating a token requires a small amount of SOL for transaction fees (~0.002 SOL on devnet)
        </p>
      </form>
    </div>
  );
};

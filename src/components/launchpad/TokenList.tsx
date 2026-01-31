import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Coins, ExternalLink, Clock, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Token {
  id: string;
  name: string;
  symbol: string;
  description: string | null;
  image_url: string | null;
  initial_supply: number;
  decimals: number;
  mint_address: string | null;
  creator_wallet: string;
  created_at: string;
}

export const TokenList = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTokens();
  }, []);

  const fetchTokens = async () => {
    try {
      const { data, error } = await supabase
        .from('tokens')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setTokens(data || []);
    } catch (error) {
      console.error('Error fetching tokens:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="glass-card p-8 rounded-xl">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
          <Coins className="w-5 h-5 text-primary" />
          Recent Tokens
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-20 bg-muted/50 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (tokens.length === 0) {
    return (
      <div className="glass-card p-8 rounded-xl text-center">
        <Coins className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-xl font-semibold mb-2">No Tokens Yet</h3>
        <p className="text-muted-foreground">
          Be the first to create a token on XTrial Launchpad!
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 rounded-xl">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
        <Coins className="w-5 h-5 text-primary" />
        Recent Tokens
      </h2>
      
      <div className="space-y-4">
        {tokens.map((token) => (
          <div
            key={token.id}
            className="p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              {token.image_url ? (
                <img
                  src={token.image_url}
                  alt={token.name}
                  className="w-12 h-12 rounded-lg object-cover bg-muted"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Coins className="w-6 h-6 text-primary" />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold truncate">{token.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary font-mono">
                    ${token.symbol}
                  </span>
                </div>
                
                {token.description && (
                  <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                    {token.description}
                  </p>
                )}
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {token.creator_wallet.slice(0, 4)}...{token.creator_wallet.slice(-4)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formatDistanceToNow(new Date(token.created_at), { addSuffix: true })}
                  </span>
                  {token.mint_address && (
                    <a
                      href={`https://explorer.solana.com/address/${token.mint_address}?cluster=devnet`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View on Explorer
                    </a>
                  )}
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Supply</p>
                <p className="font-mono text-sm">
                  {token.initial_supply.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

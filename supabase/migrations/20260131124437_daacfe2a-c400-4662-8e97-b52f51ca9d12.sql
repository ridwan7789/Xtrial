-- Create tokens table to store created tokens
CREATE TABLE public.tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  symbol TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  initial_supply BIGINT NOT NULL DEFAULT 1000000000,
  decimals INTEGER NOT NULL DEFAULT 9,
  mint_address TEXT,
  creator_wallet TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.tokens ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read tokens (public launchpad)
CREATE POLICY "Anyone can view tokens"
ON public.tokens
FOR SELECT
USING (true);

-- Allow anyone to create tokens (by wallet address)
CREATE POLICY "Anyone can create tokens"
ON public.tokens
FOR INSERT
WITH CHECK (true);

-- Allow creators to update their own tokens
CREATE POLICY "Creators can update their tokens"
ON public.tokens
FOR UPDATE
USING (creator_wallet = creator_wallet);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_tokens_updated_at
BEFORE UPDATE ON public.tokens
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
# Quick Setup Guide for Creating Pages

## Step 1: Get Your Shopify API Token

1. Go to: https://pffykd-mz.myshopify.com/admin/settings/apps
2. Click "Allow legacy custom app development" (in the "Build legacy custom apps" section)
3. Click "Create an app"
4. Name it "Page Creator" (or any name)
5. Configure Admin API access scopes:
   - Enable: `read_content`
   - Enable: `write_content`
6. Click "Save"
7. Click "Install app"
8. Click "Reveal token once" and copy the token (starts with `shpat_`)

## Step 2: Set Environment Variables

Run these commands in your terminal (replace `YOUR_TOKEN_HERE` with the actual token):

See `.env` for secrets

Or use the helper script:
```bash
source scripts/setup-shopify-env.sh
```

## Step 3: Run the Page Creation Script

```bash
node scripts/create-access-pages.js
```

## Step 4: Create Required Products (for paywall pages)

After creating pages, you'll need to create these products in Shopify Admin:
- `paywall-product-1` (for Premium Content 1)
- `paywall-product-2` (for Premium Content 2)
- `paywall-product-3` (for Premium Content 3)

Go to: Products → Add product
- Set the handle exactly as shown above
- Make them digital products (no shipping)
- Set prices

## Making Environment Variables Permanent

To avoid setting them every time, add to your `~/.zshrc`:

```bash
echo 'export SHOPIFY_STORE=pffykd-mz.myshopify.com' >> ~/.zshrc
echo 'export SHOPIFY_TOKEN=YOUR_TOKEN_HERE' >> ~/.zshrc
source ~/.zshrc
```


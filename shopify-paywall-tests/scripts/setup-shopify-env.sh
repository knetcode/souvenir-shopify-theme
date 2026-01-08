#!/bin/bash
# Helper script to set up Shopify environment variables

echo "🔧 Shopify API Setup Helper"
echo "============================"
echo ""

# Check if store is already set
if [ -z "$SHOPIFY_STORE" ]; then
  echo "Enter your Shopify store domain (e.g., pffykd-mz.myshopify.com):"
  read -r store_input
  export SHOPIFY_STORE="$store_input"
  echo "✅ SHOPIFY_STORE set to: $SHOPIFY_STORE"
else
  echo "✅ SHOPIFY_STORE already set to: $SHOPIFY_STORE"
fi

echo ""
echo "Enter your Shopify Admin API access token:"
read -rs token_input
export SHOPIFY_TOKEN="$token_input"
echo "✅ SHOPIFY_TOKEN set (hidden for security)"
echo ""

echo "📝 To make these permanent, add to your ~/.zshrc:"
echo "   export SHOPIFY_STORE=\"$SHOPIFY_STORE\""
echo "   export SHOPIFY_TOKEN=\"$SHOPIFY_TOKEN\""
echo ""
echo "Or run this script with 'source' to set for current session:"
echo "   source scripts/setup-shopify-env.sh"
echo ""


#!/bin/bash
# Quick script to publish your development theme

echo "🚀 Publishing your development theme to live..."
echo ""
echo "This will replace the current 'Horizon' theme with your development theme."
echo "Press Ctrl+C to cancel, or Enter to continue..."
read

shopify theme push --live --theme=154687733986 --store=pffykd-mz.myshopify.com

echo ""
echo "✅ Done! Your theme should now be live."


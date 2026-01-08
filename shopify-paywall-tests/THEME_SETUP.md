# 🎨 Theme Setup Guide

## The Issue

When you run `shopify theme dev`, it creates a **development theme** that's separate from your store's current theme. Your changes are in the dev theme, but your store is still showing the old theme (Horizon).

## ✅ Solution: Publish Your Development Theme

You have two options:

### Option 1: Publish via CLI (Recommended)

In your terminal where `shopify theme dev` is running, you can:

1. **List your themes** to see the development theme ID:
   ```bash
   shopify theme list
   ```
   Look for a theme with "Development" in the name or the theme ID from your terminal output (e.g., `154687733986`)

2. **Publish the development theme**:
   ```bash
   shopify theme push --unpublished --theme=154687733986
   ```
   Then in Shopify Admin, go to Themes and click "Publish" on your development theme.

   OR directly publish:
   ```bash
   shopify theme push --live
   ```
   ⚠️ **Warning**: This will replace your current live theme!

### Option 2: Publish via Shopify Admin

1. **Go to Themes page** (you're already there!)
   - In the screenshot, you can see "Horizon" is the current theme
   - Scroll down or look for your development theme

2. **Find your development theme**
   - It might be named something like "Development theme" or have a different name
   - Look for the theme ID from your terminal: `154687733986`

3. **Publish it**
   - Click the three-dot menu (⋯) on your development theme
   - Select "Publish"
   - Confirm

### Option 3: Use Preview URL (For Testing)

If you just want to test without publishing:

1. **Use the preview URL** from your terminal:
   ```
   https://pffykd-mz.myshopify.com/?preview_theme_id=154687733986
   ```

2. **Or use the local preview**:
   ```
   http://127.0.0.1:9292
   ```

   This shows your development theme without changing the live store.

## 🔍 Finding Your Development Theme

Your terminal output showed:
```
Preview your theme (t)
  • http://127.0.0.1:9292

Share your theme preview (p) 
  [1] https://pffykd-mz.myshopify.com/?preview_theme_id=154687733986
```

The theme ID is: `154687733986`

In Shopify Admin → Themes, look for a theme with this ID or check the URL when you hover over a theme.

## 🚀 Recommended Workflow

For development, I recommend:

1. **Keep using `shopify theme dev`** - it auto-syncs your changes
2. **Test using the preview URL** - `http://127.0.0.1:9292` or the preview link
3. **Publish when ready** - Use `shopify theme push --live` or publish via admin

This way you can develop and test without affecting your live store until you're ready!

## 📝 Quick Commands

```bash
# Start development (creates/uses dev theme)
shopify theme dev --store=pffykd-mz.myshopify.com

# List all themes
shopify theme list

# Push to a specific theme
shopify theme push --theme=THEME_ID

# Push and publish as live theme
shopify theme push --live
```

## ⚠️ Important Notes

- **Development themes** are temporary and can be deleted
- **Published themes** are permanent
- Always test in preview before publishing to live
- The theme you see in admin (Horizon) is the current **published** theme
- Your development theme is separate until you publish it


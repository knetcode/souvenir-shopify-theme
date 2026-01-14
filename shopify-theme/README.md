# Souvenir Shopify Theme

A Shopify theme converted from the Next.js version, featuring a modern design for a travel brand focused on creative parents.

## Structure

- `layout/` - Theme layout files
- `templates/` - Page templates (homepage, pages, collections, products, articles)
- `sections/` - Reusable sections for the theme editor
- `snippets/` - Reusable Liquid snippets
- `assets/` - CSS, JavaScript, and image files
- `config/` - Theme configuration files
- `locales/` - Translation files

## Key Features

- Responsive design with mobile-first approach
- Customizable sections via Shopify theme editor
- Support for collections (Itineraries, Shop)
- Blog support for Articles and Interviews
- Product pages with variant selection
- Newsletter signup in footer
- Membership promotion section
- **Paywall system** (currently disabled, can be re-enabled - see `RE_ENABLE_PAYWALL.md`)
  - Login-protected pages
  - One-off paywall (product purchase required)
  - Membership-protected content

## Setup

1. Upload this theme to your Shopify store via the theme editor or Shopify CLI
2. Configure navigation menus:
   - Main menu: Itineraries, Editions, People, About
   - Footer menu: Subscriptions, Contact, Advertising, Privacy, Shipping & Returns, Terms of Service
3. Create collections:
   - "Itineraries" collection
   - "Shop" or "Souvenirs" collection
4. Create blogs:
   - "Food, Culture, Life" blog for articles
   - "The Interview" blog for interviews
5. Create pages:
   - About page (use template `page.about`)
   - Editions page (use template `page.editions`)
6. Customize colors, fonts, and content via the theme customizer

**Note:** Paywall functionality is currently disabled. All content is public. To re-enable paywalls later, see `RE_ENABLE_PAYWALL.md`.

## Templates

- `index.json` - Homepage
- `page.about.json` - About page
- `page.editions.json` - Editions page
- `page.paywall.json` - Paywall-protected pages (disabled - see `RE_ENABLE_PAYWALL.md`)
- `page.login.json` - Login-protected pages (disabled - see `RE_ENABLE_PAYWALL.md`)
- `page.membership.json` - Membership-protected pages (disabled - see `RE_ENABLE_PAYWALL.md`)
- `collection.itineraries.json` - Itineraries collection
- `product.json` - Product pages
- `product.itinerary.json` - Itinerary products (paywall disabled - see `RE_ENABLE_PAYWALL.md`)
- `blog.json` - Blog listing
- `article.json` - Article/blog post pages

## Sections

The theme includes many customizable sections that can be added, removed, and reordered via the theme editor.

## Development

Use Shopify CLI to develop locally:

```bash
shopify theme dev
```

Or upload via the Shopify admin theme editor.

## 📚 Setup Guides

**New to Shopify?** Start here:

1. **`COMPLETE_SETUP_GUIDE.md`** - Comprehensive step-by-step guide from zero to live
   - Perfect for React developers new to Shopify
   - Covers everything: upload, content, testing
   - Includes troubleshooting
   - **Note:** Paywall steps removed (currently disabled)

2. **`QUICK_START.md`** - Condensed checklist version
   - Quick reference for experienced developers
   - Checklist format for fast setup

3. **`RE_ENABLE_PAYWALL.md`** - How to re-enable paywall system
   - Quick guide to restore paywall functionality
   - All paywall code is preserved, just needs to be activated

4. **`PAYWALL_SETUP.md`** - Detailed paywall configuration (for when re-enabled)
   - How to set up access control
   - Testing paywalls
   - Membership setup

## 🚀 Getting Started

1. Read `COMPLETE_SETUP_GUIDE.md` for full instructions
2. Or use `QUICK_START.md` for a quick checklist
3. Refer to `PAYWALL_SETUP.md` when configuring access control

**⚠️ Browser Note:** The Shopify theme editor ("Edit theme") does **not work in Firefox**. Use Chrome


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse purus augue, sodales a aliquet a, maximus ut lorem. Nunc metus metus, sollicitudin sed auctor ac, tempus at erat. Aliquam est diam, tempus non rhoncus sed, consequat id augue. Quisque varius sollicitudin risus, ac aliquam urna vulputate tincidunt. Proin sit amet lacus nec felis pharetra malesuada et non neque. Fusce sed porttitor diam. Integer ac bibendum est. Nunc luctus ullamcorper arcu, eget tincidunt tortor laoreet vitae. Sed dictum mauris at tristique vehicula.
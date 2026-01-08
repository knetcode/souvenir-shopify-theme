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
- **Paywall system** for premium content (itineraries, articles, etc.)
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
6. **Set up paywall system** (see `PAYWALL_SETUP.md` for detailed instructions):
   - Create paywall products for itineraries
   - Create membership product
   - Configure access control settings
7. Customize colors, fonts, and content via the theme customizer

## Templates

- `index.json` - Homepage
- `page.about.json` - About page
- `page.editions.json` - Editions page
- `page.paywall.json` - Paywall-protected pages
- `page.login.json` - Login-protected pages
- `page.membership.json` - Membership-protected pages
- `collection.itineraries.json` - Itineraries collection
- `product.json` - Product pages
- `product.itinerary.json` - Itinerary products with paywall
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
   - Covers everything: upload, content, paywalls, testing
   - Includes troubleshooting

2. **`QUICK_START.md`** - Condensed checklist version
   - Quick reference for experienced developers
   - Checklist format for fast setup

3. **`PAYWALL_SETUP.md`** - Detailed paywall configuration
   - How to set up access control
   - Testing paywalls
   - Membership setup

## 🚀 Getting Started

1. Read `COMPLETE_SETUP_GUIDE.md` for full instructions
2. Or use `QUICK_START.md` for a quick checklist
3. Refer to `PAYWALL_SETUP.md` when configuring access control

# Souvenir

A Shopify theme for editorial and travel content.

## Features

- **Itinerary Products** - Custom product templates for travel itineraries with accordion layouts
- **Blog & Articles** - Grid and carousel layouts for editorial content
- **Editions** - Mini magazine format with carousel articles
- **Flexible Sections** - Image/text blocks, testimonials, video embeds, and more
- **Smart Pricing** - Displays "FREE" instead of $0.00 for free products
- **Product Accordions** - Use `<h5>` tags in product descriptions to auto-generate accordion sections

## Structure

```
├── assets/          # CSS and static files
├── config/          # Theme settings schema
├── layout/          # Base theme layout
├── locales/         # Translations
├── sections/        # Theme sections
├── snippets/        # Reusable components (cards, etc.)
└── templates/       # Page templates (JSON)
```

## Setup

1. Upload to Shopify via Online Store > Themes
2. Configure colors and typography in Theme Settings

## Development

```bash
shopify theme dev --store your-store.myshopify.com
```

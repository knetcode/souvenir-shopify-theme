# Quick Start Checklist

A condensed checklist for getting the theme live. See `COMPLETE_SETUP_GUIDE.md` for detailed instructions.

**⚠️ Important:** The Shopify theme editor does **not work in Firefox**. Use Chrome

## 🚀 Setup (30 min)

- [ ] Install Shopify CLI: `npm install -g @shopify/cli @shopify/theme`
- [ ] Login: `shopify auth login`
- [ ] Navigate to theme: `cd shopify-theme`
- [ ] Start dev server: `shopify theme dev --store=STORE_NAME.myshopify.com`
- [ ] Note the preview URL from terminal

## 📦 Create Structure (1 hour)

### Collections
- [ ] Create "Itineraries" collection
- [ ] Create "Shop" collection

### Blogs
- [ ] Go to **Content** → **Blog posts** → **Manage blogs** (or `/admin/blogs`)
- [ ] Create "Food, Culture, Life" blog
- [ ] Create "The Interview" blog

### Navigation
- [ ] Go to **Content** → **Menus** (or `/admin/menus`)
- [ ] Create/Edit **Main menu** (Itineraries, Editions, People, About)
- [ ] Create/Edit **Footer menu** (all footer links)

### Pages
- [ ] Create About page (template: `page.about`)
- [ ] Create Editions page (template: `page.editions`)
- [ ] Create other pages (Contact, Privacy, etc.)

## 🛍️ Add Products (2 hours)

### Itinerary Products
For each itinerary from PDF:
- [ ] Create product (title, description, price, digital product)
- [ ] Add to "Itineraries" collection
- [ ] Set template to `product.itinerary` in theme customizer
- [ ] Add full content in "Itinerary Paywall" section
- [ ] Add day-by-day blocks if needed

### Shop Products
- [ ] Create shop products
- [ ] Add to "Shop" collection
- [ ] Add images, variants, descriptions

## 📝 Add Content (1 hour)

### Blog Posts
- [ ] Go to **Content** → **Blog posts** → **Add blog post** (or `/admin/blogs`)
- [ ] Add articles to "Food, Culture, Life" blog
- [ ] Add interviews to "The Interview" blog
- [ ] Add featured images

### Homepage
- [ ] Customize → Configure Hero Featured section
- [ ] Configure Welcome section
- [ ] Configure Edition Featured section
- [ ] Add testimonials
- [ ] Configure categories
- [ ] Configure membership promo

## 🔒 Paywalls (Currently Disabled)

**Note:** Paywall functionality is currently disabled. All content is public.

To re-enable paywalls later, see `RE_ENABLE_PAYWALL.md`.

## ✅ Final Steps (30 min)

- [ ] Test all pages load
- [ ] Test all links work
- [ ] Test mobile responsive
- [ ] Publish theme (Themes → Actions → Publish)
- [ ] Configure theme settings (colors, fonts)
- [ ] Set store preferences

## 📋 Client Handoff

- [ ] Show client how to:
  - [ ] Edit homepage (Themes → Edit theme)
  - [ ] Add products (Products → Add product)
  - [ ] Add blog posts (Content → Blog posts → Add blog post)
  - [ ] Manage orders (Orders → View orders)
- [ ] Provide simple documentation

## 🎯 Total Time: ~5-6 hours

---

## Key Commands

```bash
# Start development
shopify theme dev --store=STORE.myshopify.com

# Push theme
shopify theme push --live

# List themes
shopify theme list
```

## Important Locations

- **Admin:** `https://STORE.myshopify.com/admin`
- **Theme Customizer:** Admin → Online Store → Themes → Customize
- **Products:** Admin → Products
- **Collections:** Admin → Products → Collections
- **Pages:** Admin → Online Store → Pages
- **Blogs:** Admin → Content → Blog posts (or `/admin/blogs`)

## Common Tasks

**Add Itinerary:**
1. Products → Add product
2. Fill details, set as digital
3. Add to "Itineraries" collection
4. Add all content in product description (paywall disabled, so all content is public)
5. Optional: Change template to `product.itinerary` for different layout

**Edit Homepage:**
1. Themes → Edit theme (or "..." → Edit default theme content)
2. Click any section to edit
3. Save (top right)

**Note:** Paywall testing not needed - paywalls are disabled. All content is public.

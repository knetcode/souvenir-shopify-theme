# Quick Start Checklist

A condensed checklist for getting the theme live. See `COMPLETE_SETUP_GUIDE.md` for detailed instructions.

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
- [ ] Create "Food, Culture, Life" blog
- [ ] Create "The Interview" blog

### Navigation
- [ ] Set up Main menu (Itineraries, Editions, People, About)
- [ ] Set up Footer menu (all footer links)

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

## 🔒 Configure Paywalls (30 min)

### Test Setup
- [ ] Create test customer
- [ ] Create test order with itinerary product
- [ ] Mark order as Paid & Fulfilled
- [ ] Test: Log out → Visit itinerary → See preview
- [ ] Test: Log in → Visit itinerary → See full content

### Membership (if using)
- [ ] Create membership product
- [ ] Tag test customer with `member-active`
- [ ] Test membership-protected pages

## ✅ Final Steps (30 min)

- [ ] Test all pages load
- [ ] Test all links work
- [ ] Test mobile responsive
- [ ] Publish theme (Themes → Actions → Publish)
- [ ] Configure theme settings (colors, fonts)
- [ ] Set store preferences

## 📋 Client Handoff

- [ ] Show client how to:
  - [ ] Edit homepage (Themes → Customize)
  - [ ] Add products (Products → Add product)
  - [ ] Add blog posts (Blog posts → Add blog post)
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
- **Blogs:** Admin → Online Store → Blog posts

## Common Tasks

**Add Itinerary:**
1. Products → Add product
2. Fill details, set as digital
3. Add to "Itineraries" collection
4. Themes → Customize → Product page → Change template to `product.itinerary`
5. Add full content in "Itinerary Paywall" section

**Edit Homepage:**
1. Themes → Customize
2. Click any section to edit
3. Save

**Test Paywall:**
1. Create order with product
2. Assign to customer
3. Mark Paid & Fulfilled
4. Log in as customer
5. Visit product page

# How to Re-Enable Paywall Functionality

This guide explains how to re-enable the paywall system that was temporarily disabled.

## Quick Re-Enable Steps

### 1. Enable Product Paywall Template

Edit `templates/product.json`:

**Change from:**
```json
{
  "sections": {
    "product": {
      "type": "product-main",
      "settings": {}
    },
    "product_related": {
      "type": "product-related",
      "settings": {}
    }
  },
  "order": ["product", "product_related"]
}
```

**Change to:**
```json
{
  "sections": {
    "product": {
      "type": "product-main",
      "settings": {}
    },
    "product_paywall": {
      "type": "product-paywall-content",
      "settings": {
        "heading": "Full Itinerary"
      }
    },
    "product_related": {
      "type": "product-related",
      "settings": {}
    }
  },
  "order": ["product", "product_paywall", "product_related"]
}
```

**Steps:**
1. Add the `product_paywall` section to the `sections` object
2. Add `"product_paywall"` to the `order` array (between `product` and `product_related`)

### 2. Enable Itinerary Paywall Template

Edit `templates/product.itinerary.json`:

**Change from:**
```json
{
  "sections": {
    "product": {
      "type": "product-main",
      "settings": {}
    },
    "product_related": {
      "type": "product-related",
      "settings": {}
    }
  },
  "order": ["product", "product_related"]
}
```

**Change to:**
```json
{
  "sections": {
    "product": {
      "type": "product-main",
      "settings": {}
    },
    "itinerary_paywall": {
      "type": "itinerary-paywall",
      "settings": {
        "heading": "Full Itinerary"
      }
    },
    "product_related": {
      "type": "product-related",
      "settings": {}
    }
  },
  "order": ["product", "itinerary_paywall", "product_related"]
}
```

**Steps:**
1. Add the `itinerary_paywall` section to the `sections` object
2. Add `"itinerary_paywall"` to the `order` array (between `product` and `product_related`)

### 3. Verify Paywall Files Exist

All paywall files are still in the theme:
- ✅ `snippets/access-control.liquid` - Core logic
- ✅ `sections/page-paywall.liquid` - Paywall pages
- ✅ `sections/page-login.liquid` - Login pages
- ✅ `sections/page-membership.liquid` - Membership pages
- ✅ `sections/product-paywall-content.liquid` - Product paywall
- ✅ `sections/itinerary-paywall.liquid` - Itinerary paywall
- ✅ `templates/page.paywall.json` - Paywall page template
- ✅ `templates/page.login.json` - Login page template
- ✅ `templates/page.membership.json` - Membership template

### 4. Test Paywall

1. Create a test customer
2. Create a test order with paywall product
3. Mark order as Paid & Fulfilled
4. Test access control

## Full Setup Guide

Once re-enabled, follow `PAYWALL_SETUP.md` for complete configuration instructions.

## What Was Disabled

- Product paywall sections removed from product template `order` arrays
- Paywall sections still exist in code (just not included in templates)
- All paywall files preserved for easy re-enable

## Notes

- Paywall sections are still in the theme files, just not activated in templates
- Simply add the section to the template JSON and include in order array to re-enable
- No code changes needed - just template configuration
- All paywall logic (`snippets/access-control.liquid`) is intact and ready to use

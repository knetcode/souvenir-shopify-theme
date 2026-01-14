# Enabling Payments (Disabling Free Mode)

This guide explains how to enable payments for itineraries after the MVP launch.

## Quick Steps

1. Go to **Online Store** → **Themes** → Click **Edit theme**
2. Navigate to a product page (or edit the Product Main section)
3. In the left sidebar, find the **Product Main** section
4. Uncheck the **"Free Mode (MVP)"** checkbox
5. Click **Save** in the top right

## What Changes

**Before (Free Mode):**
- Price shows as: ~~£25.00~~ **FREE**
- No "Add to Cart" button
- No quantity selector
- Message: "This itinerary is currently available for free during our MVP launch."

**After (Payments Enabled):**
- Price shows normally: £25.00
- "Add to Cart" button appears
- Quantity selector appears
- Variant selector appears (if product has variants)

## Per-Product vs Global

- **Per-Product:** Edit each product page individually to control free mode per product
- **Global:** If you edit the section settings globally, it affects all products using that section

## Re-enabling Free Mode

If you need to temporarily disable payments again:
- Simply check the **"Free Mode (MVP)"** checkbox again
- All products will revert to free mode

## Next Steps After Enabling Payments

1. Test the checkout flow
2. Set up payment providers in Shopify Settings → Payments
3. Test with a real transaction (use Shopify's test mode)
4. Consider re-enabling paywall functionality (see `RE_ENABLE_PAYWALL.md`)

# Marvel Luxe Fashion Store 🛍️

Mini e-commerce website for online vendors. Product catalog with direct pricing + one-click WhatsApp checkout. Built with vanilla JS - no backend, no payment gateway needed.


**Live Demo**: https://marvel-luxe.netlify.app  

---

### Overview
Online fashion vendors struggle with DM orders on Instagram/WhatsApp. Built Marvel Luxe so customers can see products + prices upfront, add to cart, and checkout directly to WhatsApp. Order details are formatted cleanly so vendors get everything they need without asking "price?" or "size available?" 10 times.

### Key Features
- **Product Catalog**: Grid layout showing images, names, and prices directly
- **WhatsApp Checkout**: One-click button opens WhatsApp with pre-filled order message
- **Cart System**: Add/remove items + live total calculation with vanilla JavaScript
- **Order Formatting**: Structured message with customer info, items, quantities, total, delivery address
- **Mobile First**: Optimized for mobile since 90% of traffic comes from WhatsApp/Instagram
- **No Backend**: Pure HTML/CSS/JS. Host anywhere for free on Netlify/Vercel

### Tech Stack
`HTML5` `CSS3` `Vanilla JavaScript` `WhatsApp API` `Responsive Design`

### Result
Vendor now receives complete orders on WhatsApp instantly. Example message format:

Hello MARVEL LUXE,

I want to order:

Can Wipes
Quantity: 1
Price: ₦2,000

Glove Sponge
Quantity: 2
Price: ₦2,000

Hair Clip
Quantity: 1
Price: ₦4,000

Lip Mask
Quantity: 1
Price: ₦500

Total Amount: ₦8,500

No backend costs, no payment gateway setup. Perfect for vendors starting out on social media.

### What I Learned
- **WhatsApp API**: Used `https://wa.me/234XXXXXXXXXXX?text=` to open pre-filled chat
- **Cart Logic**: Built add/remove + quantity + total calculation without frameworks
- **Message Formatting**: Used `encodeURIComponent()` + `%0A` for line breaks to keep messages clean
- **Client-side State**: Managed cart in localStorage so items persist on refresh
- **Next**: Add product search + category filters for larger catalogs

### Setup & Run Locally
```bash
git clone https://github.com/youngimmortal-p/marvel-luxe.git
cd marvel-luxe

# Update vendor WhatsApp number in js/app.js line 12
const VENDOR_WHATSAPP = "234XXXXXXXXXXX";

# Open index.html in browser

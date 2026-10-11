# Reverie Nails and Spa — Website

A warm, luxurious, community-focused static website for Reverie Nails and Spa in Saginaw, TX.

**Live site will be hosted via GitHub Pages (or Netlify) after deployment.**

## Quick Start (Local Preview)

1. Open the folder in File Explorer.
2. Double-click `index.html` (or `menu.html`).
3. For best results, open in Chrome/Edge and hard refresh (Ctrl + Shift + R) after any changes.

## How to Update Content (No Coding Needed)

### Photos (Hero, Gallery, Specials, Philosophy)
Photos are the WebP files in `assets/img/`. Add a new one there, then add it to the list:

- **Hero** → `assets/Hero/hero-data.js`
- **Gallery** → `assets/Moments at Reverie/gallery-data.js`
- **Current special** → `image` on that special in `assets/Current Specials/specials-data.js`
- **Philosophy** → `assets/Our Philosophy/philosophy-data.js`

### Switch the Current Special
Edit `assets/Current Specials/specials-data.js`:
- Change `current: "basic"` to the key you want.
- Add new specials with their own folder if desired.

### Menu
Edit `assets/menu-data.js` (prices, services, descriptions).

### Text & Copy
Main content lives directly in:
- `index.html` (homepage sections, FAQ, etc.)
- `menu.html`
- `booking.html`

## Deployment (GitHub + Hosting)

This site is fully static — no server or database needed.

### Recommended: GitHub + GitHub Pages (free)

1. Create a GitHub account at github.com (if you don't have one).
2. Create a new **public** repository named something clean like `reverie-nails-and-spa`.
3. Push this entire folder to that repository (using GitHub Desktop or drag-and-drop on the web).
4. In the repo on GitHub:
   - Go to **Settings → Pages**
   - Source: "Deploy from a branch"
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
   - Save
5. Wait 1–2 minutes. Your site will be live at:
   `https://YOUR_USERNAME.github.io/reverie-nails-and-spa`

### Alternative Hosting (still use GitHub for code)
- Connect the same GitHub repo to [Netlify](https://app.netlify.com) or [Vercel](https://vercel.com) for even easier custom domains and previews.

## Updating the Live Site

After changes:
- Use GitHub Desktop (or git) → Commit + Push
- Or simply re-upload changed files/folders via GitHub web
- GitHub Pages (or Netlify) will automatically rebuild and deploy in ~1 minute.

## Project Structure

```
reverie-nails/
├── index.html          # Homepage
├── menu.html           # Full menu
├── booking.html        # Redirects to https://book.reverienailstx.com/book
├── assets/
│   ├── Current Specials/
│   ├── Hero/
│   ├── Moments at Reverie/   # Gallery
│   ├── menu-data.js
│   └── ...
├── llms.txt            # AI/search optimization
└── README.md
```

## Notes

- Uses Tailwind CSS via CDN + Font Awesome + custom fonts.
- All photo loading is automatic (no manual lists needed for most updates).
- Booking page is currently a design placeholder.
- Schema markup and llms.txt included for better search/AI visibility.

## Next Steps After Launch

- Buy a custom domain (reverienailspa.com or similar) and point it at GitHub Pages or Netlify.
- Replace placeholder booking with a real system (Booksy, Vagaro, etc.).
- Add more real client photos and testimonials.

---

Built for Reverie Nails and Spa. Easy photo updates forever. 🚀

## Local Development Tip

Just edit files and refresh the browser. No build step required.

# 5514 Doyle Street Unit 5 - Condo Website

A modern, responsive website for showcasing and selling the condo at 5514 Doyle Street Unit 5.

## Features

- 📸 **Photo Gallery** - Interactive lightbox gallery for property photos
- 📝 **Contact Form** - Easy way for interested buyers to reach out
- 📱 **Fully Responsive** - Looks great on desktop, tablet, and mobile
- ⚡ **Fast & Simple** - Pure HTML/CSS/JS, no build tools required
- 🎨 **Modern Design** - Clean, professional appearance

## Setup

1. **Add Your Photos**
   - Place your condo photos in the `images/` folder
   - Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
   - Add a hero image: `hero.jpg` (this will be the main banner)
   - Recommended size: 1920x1280px for best quality

2. **Customize Content**
   - Edit `index.html` to update:
     - Property details (bedrooms, bathrooms, size, price)
     - Features and amenities
     - Neighborhood information
     - Your contact preferences

3. **Configure Contact Form**
   - The form currently shows a success message without sending emails
   - To enable email sending, sign up for [Formspree](https://formspree.io) (free)
   - Add your Formspree endpoint in `script.js` (see comments)
   - Alternative: Use Google Forms or other form services

## Deployment to GitHub Pages

### Option 1: Manual Upload
1. Create a new repository at https://github.com/new
   - Name: `5514-doyle-street-unit5-website`
   - Make it public
   - Don't initialize with README (we already have one)

2. Connect and push:
   ```bash
   cd /Users/ahendlish/Documents/Projects/5514-doyle-street-unit5-website
   git add .
   git commit -m "Initial commit: condo website"
   git remote add origin https://github.com/abelish/5514-doyle-street-unit5-website.git
   git branch -M main
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `root`
   - Save

4. Your site will be live at: `https://abelish.github.io/5514-doyle-street-unit5-website`

### Option 2: Custom Domain (Optional)
1. In your repository Settings → Pages
2. Add your custom domain (e.g., `5514doyle.com`)
3. Update your domain's DNS settings:
   - Add CNAME record pointing to `abelish.github.io`
   - Or A records pointing to GitHub's IPs

## Local Development

To test locally, use any simple HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have npx)
npx serve

# Or just open index.html in your browser
```

Then visit: http://localhost:8000

## Customization Tips

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
}
```

### Layout
- All sections can be rearranged by moving the `<section>` blocks in `index.html`
- To remove a section, just delete it
- To add more photos, add more `.gallery-item` divs

### SEO
- Update the `<meta name="description">` in the `<head>`
- Change the `<title>` tag
- Add more meta tags for social sharing if needed

## File Structure

```
5514-doyle-street-unit5-website/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # Interactive features
├── images/            # Your property photos
│   ├── hero.jpg       # Main banner image
│   ├── photo1.jpg     # Gallery photos
│   ├── photo2.jpg
│   └── ...
└── README.md          # This file
```

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Questions?

Need help customizing or deploying? Check the comments in the code files for guidance.

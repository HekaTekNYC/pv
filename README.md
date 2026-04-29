# PerfectView Window Treatment Website

This repository contains the source code for a custom website built for PerfectView LLC. The website provides service information, showcases capabilities, and allows customers to request an estimate. The website emphasizes clean UI, fast performance, responsive design, and SEO best practices.

---

## Project Overview

The website serves as a digital presence for the business and includes:

- Overview of window-treatment installation services
- Step-by-step process section
- Highlighted features and value propositions
- Responsive layouts for mobile, tablet, and desktop
- Contact and estimate request functionality
- Image optimization for fast loading

---

## Tech Stack

- **Framework:** Astro.js
- **Runtime:** Vite
- **Styling:** CSS
- **Components:** Astro components + islands
- **Images:** Cloudinary (responsive and optimized)
- **Forms:** Netlify Forms / Formspree / Custom Backend (replace as needed)
- **Deployment:** Netlify

---

## Project Structure

/src
/components → Reusable UI components (Hero, Services, Process, Gallery, Nav, Footer)
/layouts → Base layout(s)
/pages → Page files (index.astro, services.astro, gallery.astro, contact.astro)
/data → Service data, process steps, images, and structured content
/styles → Global SCSS, variables, mixins, component styles
/public
→ Static assets (icons, fallback images)

---

## Content Management

Content such as service descriptions, process steps, and hero text is stored in the `/src/data` directory.

To update text or images:

1. Edit the relevant data file (JSON/JS).
2. Update Cloudinary image IDs if replacing images.
3. Rebuild and redeploy the site.

---

## Image Handling

All images are served via Cloudinary for optimal performance.

- Upload or replace images in Cloudinary
- Update public IDs in the image data files
- Images are automatically responsive and compressed
- Avoid uploading large files directly to `/public` unless necessary

---

## Contact

Created by Hekatek

Email: hekatek@hekateknyc.com

Website: https://hekateknyc.com

---

## Installation & Development

To run the project locally:

bash
npm install
npm run dev

---

## Build for Production

To run the project locally:

bash
npm install
npm run dev


# Attractive Portfolio Webpage

This is a modern, responsive portfolio website built with React, Vite, and Tailwind CSS. It features a dark/light theme toggle, dynamic content sections, and a highly polished UI.

## Features

- **Dynamic Theme Changer**: Toggle between Dark and Light modes.
- **Hero Section**: Includes a dynamic image placeholder with a "Fresher" badge.
- **Skills Showcase**: Grid layout displaying technical skills with hover effects.
- **Projects Gallery**: Tabbed interface for filtering Frontend and Backend projects.
- **Responsive Design**: Fully responsive layout for all devices.

## Personalization

### Update Your Image
1. Open `src/components/Hero.jsx`.
2. Locate the `img` tag inside the "Image Content" section.
3. Replace the `src` attribute with the URL to your photo.

### Add/Remove Skills
1. Open `src/data/skills.js`.
2. Add or remove objects from the `techSkills` array.
3. Use Devicon class names for icons (e.g., `devicon-python-plain`).

### Add/Update Projects
1. Open `src/data/projects.js`.
2. Update the `projectsData` array with your project details, images, and links.

## Technologies Used

- React
- Vite
- Tailwind CSS
- Lucide React (optional icons)
- Devicon (for tech skill icons)
- Google Fonts (Outfit)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

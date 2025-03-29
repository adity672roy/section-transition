# Scroll Perspective with Smooth Scrolling

## Overview
This project is a Next.js application that implements a smooth scrolling effect with `Lenis` and section transitions using `framer-motion`. The effect creates a perspective illusion as the user scrolls, making the UI more interactive and visually appealing.

## Features
- **Smooth Scrolling**: Implemented using the `Lenis` library for a fluid scrolling experience.
- **Section Transitions**: Sections animate based on scroll progress using `framer-motion`.
- **Sticky and Perspective Effects**: The first section scales and rotates while scrolling.
- **Image Display**: The second section contains a full-screen background image that rotates and scales.

## Technologies Used
- **Next.js**: React framework for SSR and static site generation.
- **Lenis**: Smooth scrolling library for enhanced UX.
- **Framer Motion**: Animation library for creating scroll-based transformations.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/adity672roy/section-transition.git
   cd section-transition
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

## Usage
- Scroll down the page to see the smooth scrolling effect and transitions.
- The section scale and rotates as you scroll. 

## Customization 
- Modify animation parameters in `useTransform` for different effects.
- Adjust styles using Tailwind CSS classes.

## Dependencies
- `next`
- `react`
- `react-dom`
- `lenis`
- `framer-motion`
- `tailwindcss`
 
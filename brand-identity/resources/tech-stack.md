# Tech Stack Guidelines

## Core Stack
- **HTML5:** Semantic HTML for structure and accessibility.
- **Vanilla CSS:** Custom styling using CSS Grid/Flexbox and CSS Variables mapped from `design-tokens.json`.
- **Vanilla JavaScript:** For DOM manipulation and interactivity without heavy frameworks.

## Libraries
- **Animations:** GSAP (GreenSock Animation Platform) for smooth scroll effects, fade-ins, and complex animations.
- **Icons:** Phosphor Icons or FontAwesome (via CDN).
- **Fonts:** Google Fonts (Playfair Display, Montserrat, Cormorant Garamond).

## Project Structure
```text
/
├── index.html
├── css/
│   ├── style.css
│   └── animations.css
├── js/
│   ├── main.js
│   └── gsap-animations.js
└── assets/
    ├── images/
    └── icons/
```

## Best Practices
- **Mobile-First:** Always ensure the design is fully responsive starting from mobile layout.
- **Aesthetic First:** Prioritize a premium look with glassmorphism, slow fade-up animations, and cinematic imagery.
- **Performance:** Defer non-critical scripts and optimize images.

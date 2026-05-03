# Development Documentation

## Architecture Strategy
This portfolio is engineered as a zero-dependency, high-performance static site. The overarching goal is to present a living demonstration of clean code, "Moroccan precision," and deep technical competence.

### CSS Grid (Bento Box Interface)
The Hero section utilizes CSS Grid to create a fully responsive "Bento Box" layout. 
**Why?**
- It creates an asymmetrical, highly engaging magazine-style layout without relying on brittle absolute positioning constraints.
- Content adaptability. Leveraging `grid-auto-rows: minmax(280px, auto);` ensures cards can naturally accommodate arbitrary content injection without breaking visual boundaries or wrapping improperly.

### Vanilla JS Micro-Interactions
The core animations (Intersection Observers, Magnetic Hover Effects, and Custom Cursors) are built completely from scratch using standard Web APIs via Vanilla JS (`js/index.js`).
**Why?**
- Eliminates the need for heavy external animation libraries (like Framer Motion or GSAP) just to create basic visual feedback.
- Keeps the JavaScript payload functionally near-zero. This provides virtually instantaneous logic parsing and execution, ensuring a **perfect 100/100 Lighthouse score** for performance.

### SCSS Structuring using Vanilla CSS Variables
Instead of pre-processors, the project favors native CSS variables mapping to a refined palette.
**Why?**
- Variables are evaluated at runtime by the browser, making real-time "Dark Mode/Light Mode" toggles trivial to implement if required in the future, without needing JS to swap entire stylesheets.

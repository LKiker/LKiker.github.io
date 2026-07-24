# Landrey Kiker — Portfolio

An ocean-themed personal portfolio built with Astro. Scrolling simulates a descent through open water into the deep, with the visual language, motion, and pacing all built around that metaphor.

**Live site:** [https://lkiker.github.io](https://lkiker.github.io)

## Overview

The site has two experiences:

- **Immersive main page** (`/`) — a raymarched WebGL seascape shader in the hero, GSAP-driven scroll animations, floating project cards with pointer-based 3D tilt, a live depth gauge, and layered particle effects that simulate descending through the water column.
- **Simple view** (`/simple/`) — a minimal, fast, static alternative aimed at recruiters or anyone who just wants the content without the animation overhead. Mobile visitors are automatically redirected here, since the full experience is desktop-first by design.

Performance and mobile-friendliness were treated as first-class constraints throughout, not an afterthought, given how many concurrent animations the immersive page runs.

## Tech Stack

- **Framework:** [Astro](https://astro.build) (static site generation, scoped component styles)
- **Animation:** [GSAP](https://gsap.com) with ScrollTrigger and ScrollSmoother
- **Graphics:** Hand-written WebGL fragment shaders (no Three.js), plus Blender-rendered stills for static geometry
- **Fonts:** Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (utility and readouts)
- **Hosting:** GitHub Pages, deployed via GitHub Actions

## Key Features

- **Raymarched seascape shader** in the hero, adapted from a CC BY-NC-SA 3.0 licensed ShaderToy scene (see Credits below), gated behind an IntersectionObserver so it only renders while in view, with a single-frame fallback for reduced-motion preferences.
- **Alternating project cards** with pointer-based 3D tilt, a floating idle animation, and scroll-driven blur and dimming so each card reads as "coming into focus" as it nears the center of the viewport.
- **Live depth gauge** that tracks scroll position and converts it into a fictional depth reading in meters, pausing in sync with any scroll holds via a small virtual scroll state module.
- **Blender-rendered sandbed footer**, used instead of a runtime shader since the footer is static geometry and didn't need the cost of a live raymarch.
- **Custom loading screen** with a bubble animation that clears once fonts and page load are ready, capped at a hard ceiling so it never stalls indefinitely on a slow connection.
- **Mobile-first fallback**, redirecting to the simple view under an 800px breakpoint so mobile visitors never pay the cost of the WebGL and GSAP-heavy experience.

## Project Structure

# Agent Instructions — Portfolio Flávia Letícia

## Project Overview
- **Stack**: React + Vite + TypeScript + Tailwind CSS 4 (`@tailwindcss/vite`)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Special Gothic Condensed One, Raleway, (Google Fonts)
- **Build command**: `npm.cmd run build` (Windows environment)
- **Dev command**: `npm.cmd run dev`

## Design Preferences
- **Style**: Clean, minimalista, elegante
- **Layout**: Assimétrico — texto à esquerda, foto à direita no Hero
- **Typography**: 
  - Títulos: Special Gothic Condensed One (bold, condensed)
  - Body: Inter
  - Motion phrases: Raleway bold
- **Motion**: Subtle, fluido, sem exageros. Fade + slide up/down suave.
- **Timing**: Loop a cada 3 segundos, transição 0.5s easeInOut

## Color Palette (Motion Phrases)
| Phrase | Color |
|--------|-------|
| crio experiências visuais | #7A9B3A |
| crio identidades marcantes | #B7A7E6 |
| crio campanhas criativas | #FFBC65 |
| crio ilustrações autorais | #7C93B6 |
| crio motion designs | #D98C7C |

## Assets
- Hero image: `/images/image-hero.png` (transparent background, saturated 90%)
- No floating PNGs or decorative geometric elements on Hero

## Sources & References
- **Profile PDF**: `c:\Users\flavi\Downloads\Profile.pdf` — contém informações importantes sobre o portfólio
- **Behance**: https://www.behance.net/flavialetc — portfólio online de projetos

## Important Notes
- Always use `npm.cmd` on Windows (PowerShell blocks `npm.ps1`)
- Do NOT add SaaS boilerplate, auth, database, or Stripe
- Keep the codebase lightweight
- Build and preview after major Hero changes

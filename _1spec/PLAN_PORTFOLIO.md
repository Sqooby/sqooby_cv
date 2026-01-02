# 🎯 Plan Projektu - Portfolio Modern Dark Theme

## 📋 Informacje Podstawowe

**Styl:** Modern Dark Theme
**Stack Technologiczny:** Next.js + Vite + Tailwind CSS
**Hosting:** Cloudflare Pages
**Data rozpoczęcia:** 2026-01-02

---

## 🛠️ Stack Technologiczny

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Build Tool:** Vite (dla szybszego developmentu)
- **Styling:** Tailwind CSS v3+
- **Animacje:** Framer Motion
- **Ikony:** Lucide React / Heroicons
- **Typografia:** Google Fonts (Inter, JetBrains Mono)

### Dodatkowe Biblioteki
- **Formularze:** React Hook Form + Zod
- **Email:** EmailJS lub Resend
- **SEO:** Next SEO
- **Analytics:** Cloudflare Web Analytics (opcjonalnie)

### Deployment
- **Hosting:** Cloudflare Pages
- **CI/CD:** GitHub Actions → Cloudflare
- **Domena:** Custom domain (opcjonalnie)

---

## 🎨 Design System - Modern Dark Theme

### Paleta Kolorów

```css
/* Primary Colors */
--bg-primary: #0a0a0f (prawie czarny)
--bg-secondary: #13131a (ciemny granatowy)
--bg-card: #1a1a24 (karty)

/* Accent Colors */
--accent-primary: #3b82f6 (niebieski)
--accent-secondary: #8b5cf6 (fioletowy)
--accent-tertiary: #06b6d4 (cyjan)

/* Gradients */
--gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
--gradient-neon: linear-gradient(90deg, #00f5ff, #00ff9f)

/* Text */
--text-primary: #f8fafc
--text-secondary: #94a3b8
--text-muted: #64748b

/* Effects */
--glow-blue: 0 0 20px rgba(59, 130, 246, 0.5)
--glow-purple: 0 0 20px rgba(139, 92, 246, 0.5)
```

### Typografia

```
Headings: Inter (700, 800)
Body: Inter (400, 500, 600)
Code/Mono: JetBrains Mono (400, 500)
```

### Efekty Wizualne
- **Glassmorphism:** Przezroczyste karty z backdrop-blur
- **Neon Glow:** Świecące obramowania i cienie
- **Gradient Borders:** Animowane gradienty na kartach
- **Particles:** Subtelne cząsteczki w tle (opcjonalnie)
- **Parallax:** Efekt głębi przy scrollu
- **Smooth Scroll:** Płynne przechodzenie między sekcjami

---

## 📁 Struktura Projektu

```
sqooby_cv/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── projects/
│   │   └── technologies/
│   ├── cv/
│   │   └── CV_Michal.pdf
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── metadata.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Input.tsx
│   │   │   └── GlassCard.tsx
│   │   └── effects/
│   │       ├── ParticlesBackground.tsx
│   │       ├── GradientBlob.tsx
│   │       └── ScrollProgress.tsx
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── utils.ts
│   │   └── animations.ts
│   ├── types/
│   │   └── index.ts
│   └── data/
│       ├── projects.ts
│       ├── skills.ts
│       └── experience.ts
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🎯 Sekcje Strony

### 1. Header / Navigation
**Funkcjonalności:**
- Fixed navbar z blur effect
- Logo / imię
- Menu nawigacyjne (smooth scroll)
- Theme toggle (opcjonalny light mode)
- Hamburger menu (mobile)
- Scroll progress indicator

**Komponenty:**
- `Header.tsx`
- `Navigation.tsx`
- `MobileMenu.tsx`

---

### 2. Hero Section
**Zawartość:**
- Animowane powitanie (typed effect)
- Imię i nazwisko (duży, bold)
- Tytuł/rola (np. "Full Stack Developer")
- Krótki tagline
- CTA buttons (Zobacz projekty, Kontakt)
- Animowane tło (gradient blobs/particles)
- Social links (GitHub, LinkedIn, Email)

**Efekty:**
- Fade in animations
- Floating elements
- Gradient text effect
- Neon glow na przyciskach

**Komponenty:**
- `Hero.tsx`
- `TypedText.tsx`
- `SocialLinks.tsx`

---

### 3. About / O mnie
**Zawartość:**
- Zdjęcie profilowe (z neon border)
- Opis - kim jestem, czym się zajmuję
- Moje wartości / podejście do pracy
- Zainteresowania poza IT
- Download CV button

**Layout:**
- Grid 2 kolumny (desktop)
- Zdjęcie po lewej, tekst po prawej
- Glass card effect

**Komponenty:**
- `About.tsx`
- `ProfileImage.tsx`

---

### 4. Skills / Umiejętności
**Zawartość:**
- Technologie pogrupowane (Frontend, Backend, Tools, etc.)
- Ikony technologii z neon glow
- Skill bars z animacją (opcjonalnie)
- Hover effects z opisami

**Kategorie:**
- Frontend (React, Next.js, Tailwind, etc.)
- Backend (Node.js, Python, etc.)
- Database (PostgreSQL, MongoDB, etc.)
- DevOps & Tools (Git, Docker, etc.)

**Efekty:**
- Fade in on scroll
- Hover scale + glow
- Staggered animation

**Komponenty:**
- `Skills.tsx`
- `SkillCard.tsx`
- `TechIcon.tsx`

---

### 5. Projects / Projekty
**Zawartość:**
- Grid projektów (3-6 najlepszych)
- Screenshot/mockup projektu
- Tytuł i krótki opis
- Użyte technologie (badges)
- Linki (Live Demo, GitHub)
- Hover effect (odkrywa więcej info)

**Layout:**
- Grid responsive (1 col mobile, 2-3 desktop)
- Glass cards z gradient borders
- Image overlay on hover

**Dane każdego projektu:**
```typescript
{
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
```

**Komponenty:**
- `Projects.tsx`
- `ProjectCard.tsx`
- `TechBadge.tsx`

---

### 6. Experience / Doświadczenie
**Zawartość:**
- Timeline kariery zawodowej
- Edukacja
- Certyfikaty (opcjonalnie)

**Format Timeline:**
- Vertical timeline z neon line
- Cards dla każdej pozycji
- Data, stanowisko, firma
- Kluczowe osiągnięcia (bullet points)
- Ikony / loga firm

**Efekty:**
- Scroll-triggered animations
- Active state indicator
- Gradient connecting line

**Komponenty:**
- `Experience.tsx`
- `Timeline.tsx`
- `TimelineItem.tsx`

---

### 7. Contact / Kontakt
**Zawartość:**
- Nagłówek z CTA
- Formularz kontaktowy (imię, email, wiadomość)
- Alternatywne metody kontaktu
- Social media links
- Email, telefon (opcjonalnie)

**Formularz:**
- Walidacja (Zod + React Hook Form)
- Toast notifications
- Loading state
- Success/error feedback
- Integracja z EmailJS/Resend

**Layout:**
- Centered form z glass effect
- Neon focus states
- Animated submit button

**Komponenty:**
- `Contact.tsx`
- `ContactForm.tsx`
- `SocialLinks.tsx`

---

### 8. Footer
**Zawartość:**
- Copyright
- Social links (powtórzone)
- Quick navigation
- "Made with ❤️ by [Name]"
- Back to top button

**Komponenty:**
- `Footer.tsx`
- `BackToTop.tsx`

---

## ⚙️ Funkcjonalności Techniczne

### 1. Responsywność
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Hamburger menu na mobile
- Touch-friendly UI elements

### 2. Animacje
**Framer Motion:**
- Page transitions
- Scroll-triggered animations
- Hover interactions
- Stagger children animations
- Parallax effects

**Przykłady:**
```typescript
// Fade in on scroll
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

### 3. Performance
- Image optimization (Next.js Image)
- Lazy loading
- Code splitting
- Font optimization
- Minimalizacja bundle size

### 4. SEO
- Meta tags (Open Graph, Twitter Card)
- Structured data (JSON-LD)
- Sitemap
- robots.txt
- Semantic HTML

### 5. Accessibility
- ARIA labels
- Keyboard navigation
- Focus states
- Alt texts
- Color contrast (WCAG AA)

---

## 🚀 Setup i Inicjalizacja

### Krok 1: Inicjalizacja projektu z Vite

```bash
# Utworzenie projektu Next.js z Vite
npm create vite@latest . -- --template react-ts
npm install

# Instalacja Next.js w projekcie Vite (alternatywnie)
# LUB bezpośrednio Next.js:
npx create-next-app@latest . --typescript --tailwind --app

# Instalacja zależności
npm install framer-motion lucide-react clsx tailwind-merge
npm install react-hook-form zod @hookform/resolvers
npm install next-themes # dla dark/light mode toggle
```

### Krok 2: Konfiguracja Tailwind

**tailwind.config.ts:**
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#13131a',
        'bg-card': '#1a1a24',
        'accent-blue': '#3b82f6',
        'accent-purple': '#8b5cf6',
        'accent-cyan': '#06b6d4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
        'neon-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

### Krok 3: Struktura folderów

```bash
mkdir -p src/{components/{layout,sections,ui,effects},lib,types,data}
mkdir -p public/{images/{projects,technologies},cv}
```

### Krok 4: Environment Variables

**.env.local:**
```
NEXT_PUBLIC_SITE_URL=https://yoursite.pages.dev
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📊 Plan Implementacji (Fazy)

### FAZA 1: Setup i Podstawy (Dzień 1)
- [x] Inicjalizacja projektu
- [ ] Konfiguracja Tailwind CSS
- [ ] Struktura folderów
- [ ] Podstawowe typy TypeScript
- [ ] Layout (Header, Footer)
- [ ] Navigation
- [ ] Podstawowe komponenty UI (Button, Card)

### FAZA 2: Sekcje Główne (Dzień 2-3)
- [ ] Hero Section + animacje
- [ ] About Section
- [ ] Skills Section z ikonami
- [ ] Przygotowanie danych (projects.ts, skills.ts)

### FAZA 3: Projekty i Doświadczenie (Dzień 4)
- [ ] Projects Section z grid
- [ ] ProjectCard z hover effects
- [ ] Experience Section z Timeline
- [ ] Efekty glassmorphism

### FAZA 4: Kontakt i Interakcje (Dzień 5)
- [ ] Formularz kontaktowy
- [ ] Integracja EmailJS/Resend
- [ ] Walidacja formularza
- [ ] Toast notifications
- [ ] Social links

### FAZA 5: Efekty i Animacje (Dzień 6)
- [ ] Framer Motion animations
- [ ] Scroll progress indicator
- [ ] Parallax effects
- [ ] Particles/gradient blobs background
- [ ] Smooth scroll
- [ ] Back to top button

### FAZA 6: Content i Media (Dzień 7)
- [ ] Pisanie treści (copy)
- [ ] Optymalizacja zdjęć
- [ ] Screenshots projektów
- [ ] CV PDF
- [ ] Favicon i logo

### FAZA 7: Optymalizacja (Dzień 8)
- [ ] SEO meta tags
- [ ] Performance optimization
- [ ] Image optimization
- [ ] Accessibility audit
- [ ] Mobile testing
- [ ] Cross-browser testing

### FAZA 8: Deployment (Dzień 9)
- [ ] Konfiguracja Cloudflare Pages
- [ ] GitHub repository setup
- [ ] CI/CD pipeline
- [ ] Environment variables w Cloudflare
- [ ] Custom domain (opcjonalnie)
- [ ] SSL/HTTPS

---

## 🌐 Deployment na Cloudflare Pages

### Przygotowanie

1. **Zbuduj projekt:**
```bash
npm run build
```

2. **Output directory:** `.next` (Next.js) lub `dist` (Vite)

### Konfiguracja Cloudflare

**Metoda 1: GitHub Integration (Rekomendowana)**

1. Połącz repo GitHub z Cloudflare Pages
2. Build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
   - **Environment variables:** Dodaj wszystkie z `.env.local`

**Metoda 2: Wrangler CLI**

```bash
npm install -g wrangler
wrangler login
wrangler pages project create sqooby-portfolio
wrangler pages publish .next
```

### Konfiguracja Custom Domain (Opcjonalnie)

1. Cloudflare Pages → Custom domains
2. Dodaj swoją domenę
3. Ustaw DNS records (automatyczne)

---

## 🎨 Inspiracje Design

### Przykładowe Portfolio (Dark Theme):
- https://brittanychiang.com (clean, minimal)
- https://jacekjeznach.com (glassmorphism)
- https://bruno-simon.com (interactive)
- https://caferati.me (neon effects)

### Komponenty UI:
- Aceternity UI (dark components)
- Magic UI
- Tailwind UI

### Color Tools:
- https://uicolors.app
- https://coolors.co
- https://gradient.page

---

## ✅ Checklist Końcowy

### Przed Deployment
- [ ] Wszystkie sekcje ukończone
- [ ] Responsywność sprawdzona (mobile, tablet, desktop)
- [ ] Formularze działają
- [ ] Linki sprawdzone
- [ ] Obrazy zoptymalizowane
- [ ] SEO meta tags dodane
- [ ] Accessibility OK (minimum WCAG AA)
- [ ] Performance score > 90 (Lighthouse)
- [ ] Cross-browser tested (Chrome, Firefox, Safari)

### Po Deployment
- [ ] SSL działa
- [ ] Custom domain skonfigurowana (jeśli dotyczy)
- [ ] Analytics podłączone
- [ ] Formularz testowany na produkcji
- [ ] Social media share preview sprawdzone
- [ ] Google Search Console dodane
- [ ] Backup kodu na GitHub

---

## 📝 Notatki

### Potencjalne Rozszerzenia (Przyszłość)
- [ ] Blog sekcja (MDX)
- [ ] Multilang (PL/EN switcher)
- [ ] Theme toggle (dark/light)
- [ ] Projekt filtering (kategorie)
- [ ] Testimonials sekcja
- [ ] Stats/achievements section
- [ ] Newsletter signup
- [ ] 3D elements (Three.js/React Three Fiber)

### Uwagi Techniczne
- Next.js App Router (nie Pages Router)
- TypeScript strict mode
- ESLint + Prettier
- Commitizen dla commit messages
- Semantic versioning

---

## 🎯 Cel Finalny

Stworzenie nowoczesnego, profesjonalnego portfolio w stylu Modern Dark Theme, które:
- Wyróżnia się wizualnie
- Jest szybkie i responsywne
- Prezentuje umiejętności i projekty
- Konwertuje odwiedzających w kontakty
- Jest łatwe w utrzymaniu i aktualizacji

**Estimated Time:** 7-10 dni (w zależności od czasu pracy dziennie)
**Difficulty Level:** Medium-Advanced
**Final Result:** Production-ready portfolio website hosted on Cloudflare Pages

---

*Plan stworzony: 2026-01-02*
*Ostatnia aktualizacja: 2026-01-02*

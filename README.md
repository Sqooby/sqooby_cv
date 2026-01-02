# Modern Portfolio - Dark Theme

A stunning, modern portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion featuring a distinctive dark theme design.

## Features

- **Modern Dark Theme** - Beautiful dark UI with neon accents and glassmorphism effects
- **Fully Responsive** - Optimized for all devices from mobile to desktop
- **Smooth Animations** - Powered by Framer Motion for delightful user experience
- **Interactive Sections** - Hero, About, Skills, Projects, Experience, and Contact
- **Contact Form** - Functional form with validation using React Hook Form and Zod
- **SEO Optimized** - Meta tags and semantic HTML for better search engine visibility
- **Type Safe** - Built with TypeScript for reliability and better DX

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/Sqooby/sqooby_cv.git
cd sqooby_cv
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the data files in the \`data/\` directory:

- \`data/skills.ts\` - Your technical skills
- \`data/projects.ts\` - Your portfolio projects
- \`data/experience.ts\` - Your work experience

### Contact Information

Edit contact details in:
- \`components/sections/Contact.tsx\` - Update email, phone, location
- \`components/sections/Hero.tsx\` - Update social media links
- \`components/layout/Footer.tsx\` - Update footer social links

### Images

Add your images to the \`public/images/\` directory:
- \`public/images/profile.jpg\` - Your profile photo
- \`public/images/projects/\` - Project screenshots
- \`public/cv/CV_Michal.pdf\` - Your CV/resume PDF

### Colors & Theme

Customize colors in \`tailwind.config.js\`:
\`\`\`js
colors: {
  'bg-primary': '#0a0a0f',
  'bg-secondary': '#13131a',
  'accent-blue': '#3b82f6',
  'accent-purple': '#8b5cf6',
  // ... more colors
}
\`\`\`

## Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint

## Deployment

### Cloudflare Pages

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Configure build settings:
   - **Build command**: \`npm run build\`
   - **Build output directory**: \`.next\`
   - **Framework preset**: Next.js

### Vercel (Alternative)

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Project Structure

\`\`\`
sqooby_cv/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   ├── ui/                # Reusable UI components
│   └── effects/           # Visual effects
├── data/                  # Data files
├── lib/                   # Utilities
└── public/                # Static assets
\`\`\`

## License

ISC License

## Author

Michal - [GitHub](https://github.com/Sqooby)

---

Built with ❤️ using Next.js and Tailwind CSS

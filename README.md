# Suresh Kumar S - Portfolio Website

A premium, cinematic portfolio website showcasing 5+ years of front-end development expertise in React, TypeScript, and modern web technologies.

## 🚀 Features

- **Motion-Heavy Animations**: Powered by Motion (Framer Motion)
- **Scroll-Based Animations**: Smooth parallax and fade effects on scroll
- **Glassmorphism Design**: Modern glass effects with gradient borders
- **3D Transformations**: Card flips, rotations, and depth effects
- **Typing Animation**: Dynamic role display in hero section
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Tabler Icons**: Consistent iconography throughout
- **Performance Optimized**: Smooth 60fps animations

## 🎨 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **TailwindCSS v4** - Utility-first styling
- **Motion** - Advanced animations
- **Tabler Icons** - Beautiful icon library

## 📦 Installation

1. **Clone or download the project**

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 🎯 Project Structure

```
├── src/
│   └── main.tsx          # React entry point
├── components/
│   ├── Navigation.tsx    # Sticky navigation bar
│   ├── Hero.tsx          # Hero section with typing effect
│   ├── About.tsx         # About me section
│   ├── Experience.tsx    # Work experience timeline
│   ├── TechStack.tsx     # Technology showcase
│   ├── Projects.tsx      # Key projects display
│   ├── Achievements.tsx  # Animated statistics
│   ├── Education.tsx     # Educational background
│   ├── Contact.tsx       # Contact form and info
│   └── Footer.tsx        # Footer with social links
├── styles/
│   └── globals.css       # Global styles and utilities
├── App.tsx               # Main app component
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies

```

## 🎨 Color Palette

- **Navy Background**: `#0F172A` - Soft navy for main background
- **Indigo Primary**: `#6366F1` - Primary brand color
- **Neon Cyan**: `#22D3EE` - Accent and highlights
- **Pastel Purple**: `#A5B4FC` - Glow effects
- **Snow White**: `#F1F5F9` - Primary text color

## 🌟 Key Sections

### 1. Hero Section
- Animated gradient background with floating particles
- Typing effect for role cycling
- 3D floating tech icons
- Magnetic button interactions
- Scroll indicator animation

### 2. About Me
- Glass-effect content cards
- Highlight cards with 3D rotation
- Hover interactions with gradient glows

### 3. Experience
- Animated vertical timeline
- Company cards with achievements
- Scroll-triggered animations
- Alternating layout for visual interest

### 4. Tech Stack
- Category-based skill grouping
- 3D card flip animations
- Individual skill tag animations
- Rotating icon effects

### 5. Projects
- Cinematic project cards
- Sparkle effects on hover
- Technology tag displays
- Gradient border animations

### 6. Achievements
- Animated number counters
- Pulsing glow effects
- Statistical highlights
- Icon animations

### 7. Education
- Floating decorative elements
- 3D rotation effects
- Glass-effect card design
- Timeline information

### 8. Contact
- Interactive contact form
- Social media links
- Resume download option
- Form field animations

## 🛠️ Customization

### Update Personal Information

Edit the content in each component file to match your details:

- **Hero.tsx**: Name, roles, and introduction
- **About.tsx**: Bio and highlights
- **Experience.tsx**: Work history and achievements
- **TechStack.tsx**: Technologies and skills
- **Projects.tsx**: Portfolio projects
- **Education.tsx**: Educational background
- **Contact.tsx**: Email and social links

### Modify Colors

Update colors in `/styles/globals.css`:

```css
@theme {
  --color-navy: #0F172A;
  --color-indigo: #6366F1;
  --color-cyan: #22D3EE;
  --color-purple: #A5B4FC;
  --color-snow: #F1F5F9;
}
```

### Adjust Animations

Modify animation parameters in component files using Motion props:

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
/>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format for better compression
2. **Lazy Loading**: Components animate on scroll (already implemented)
3. **Code Splitting**: Vite handles automatic code splitting
4. **Production Build**: Always build for production before deployment

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Suresh Kumar S**
- Front-End Developer
- 5+ Years Experience
- React | TypeScript | Modern Web Technologies

---

Built with ❤️ using React, TypeScript, and Motion

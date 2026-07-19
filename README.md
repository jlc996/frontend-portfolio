# Frontend Developer Portfolio

## Project Overview

This project is a modern **Frontend Developer Portfolio** built with **React and Vite**. The application is designed as a responsive Single Page Application (SPA) that showcases my development skills, projects, professional experience, certifications, technical stack, and contact information.

The portfolio demonstrates modern frontend development practices including:

- Component-based React architecture
- React Router navigation
- Reusable UI components
- Context API for theme management
- Dynamic data rendering
- Custom React hooks
- Responsive layouts
- Organized asset management
- Modular CSS styling

---

# Live Demo

🔗 Portfolio Website: (https://jlc996.github.io/frontend-portfolio/)

---

# Technologies Used

## Frontend

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router DOM

## Development Tools

- Visual Studio Code
- Git & GitHub
- npm
- Vite Development Server

## Libraries

- React Router DOM
- Custom React Hooks
- Context API

---

# Features

## Responsive Portfolio Website

The application is designed to work across:

- Desktop computers
- Tablets
- Mobile devices

---

## Single Page Application (SPA)

The portfolio uses React Router for client-side navigation.

Available routes:

```
/
├── Home
│
├── /projects
│   └── Project Showcase
│
├── /experience
│   └── Experience, Certifications, Badges
│
└── /contact
    └── Contact Form
```

---

# Portfolio Sections

## Home Page

The home page introduces:

- Developer profile
- Professional summary
- Hero section
- Technical highlights
- Skills overview
- Technology stack

---

## Projects Page

The projects section displays completed applications and development work.

Features:

- Dynamic project cards
- GitHub repository integration
- Search functionality
- Project details pages

---

## Experience Page

The experience section displays:

- Professional experience
- Development journey
- Certifications
- Completion certificates
- Technical achievements

Experience information is managed through a centralized data file:

```
src/data/experienceData.js
```

---

## Contact Page

The contact page provides:

- Contact form
- User input fields
- Professional communication section

---

## Project Architecture

```text
frontend-portfolio/
│
├── dist/                          # Production build output
├── node_modules/                  # Project dependencies
├── public/                        # Static public assets
│
├── src/
│   ├── assets/
│   │   ├── badges/
│   │   │   ├── css-badge.png
│   │   │   ├── html-badge.png
│   │   │   └── javascript-badge.png
│   │   │
│   │   ├── certificates/
│   │   │   ├── html-css-cert.png
│   │   │   └── javascript-cert.png
│   │   │
│   │   ├── profile/
│   │   │   └── profile.png
│   │   │
│   │   └── logo.png
│   │
│   ├── components/
│   │   ├── CertificationCard.jsx
│   │   ├── CertificationSection.jsx
│   │   ├── CompletionCertificateCard.jsx
│   │   ├── CompletionCertificateSection.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HighlightCard.jsx
│   │   ├── HighlightSection.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── MetricCard.jsx
│   │   ├── Metrics.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SkillCard.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── TechCard.jsx
│   │   ├── TechStack.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Timeline.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── data/
│   │   └── experienceData.js
│   │
│   ├── hooks/
│   │   └── useFetch.js
│   │
│   ├── pages/
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   ├── ProjectDetails.jsx
│   │   └── Projects.jsx
│   │
│   ├── styles/
│   │   ├── App.css
│   │   ├── CertificationCard.css
│   │   ├── CertificationSection.css
│   │   ├── CompletionCertificateCard.css
│   │   ├── CompletionCertificateSection.css
│   │   ├── Contact.css
│   │   ├── ContactForm.css
│   │   ├── Experience.css
│   │   ├── Footer.css
│   │   ├── Hero.css
│   │   ├── HighlightCard.css
│   │   ├── HighlightSection.css
│   │   ├── Home.css
│   │   ├── Metrics.css
│   │   ├── Navbar.css
│   │   ├── ProjectDetails.css
│   │   ├── Projects.css
│   │   ├── SkillCard.css
│   │   ├── SkillsSection.css
│   │   ├── TechCard.css
│   │   ├── TechStack.css
│   │   ├── Theme.css
│   │   └── Timeline.css
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── oxlintrc.json
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

# React Component Architecture

The application follows a reusable component structure.

Example:

```
Page
 |
 ├── Section Component
 |
 └── Card Component
```

Examples:

```
Experience.jsx

        |
        ↓

ExperienceData.js

        |
        ↓

CertificationSection.jsx

        |
        ↓

CertificationCard.jsx
```

This approach keeps the application:

- Maintainable
- Scalable
- Easy to update
- Reusable

---

# Data Management

Portfolio information is separated from presentation logic.

Example:

```
src/data/experienceData.js
```

Stores:

- Work experience
- Certifications
- Achievements
- Technical accomplishments

Components import the data and dynamically render content.

Benefits:

- Cleaner components
- Easier updates
- Improved organization

---

# Theme System

The portfolio includes a custom theme system using React Context API.

Implementation:

```
src/context/ThemeContext.jsx
```

Features:

- Light mode
- Dark mode
- Global theme state
- Persistent styling changes

---

# Custom Hooks

Reusable application logic is separated into custom hooks.

Example:

```
src/hooks/useFetch.js
```

Used for:

- API requests
- Data loading
- Error handling
- Loading states

---

# Asset Management

All images and portfolio resources are organized inside:

```
src/assets/
```

Structure:

```
assets/

├── badges/
│   ├── css-badge.png
│   ├── html-badge.png
│   └── javascript-badge.png
│
├── certificates/
│   ├── html-css-cert.png
│   └── javascript-cert.png
│
├── profile/
│   └── profile.png
│
└── logo.png
```

This keeps project resources organized and easy to reference.

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/jlc996/frontend-portfolio.git
```

---

## Navigate Into Project

```bash
cd frontend-portfolio
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

The application will run locally using the Vite development server.

---

# Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# Development Practices

This project follows modern frontend standards:

✅ Component-driven development  
✅ Separation of concerns  
✅ Reusable components  
✅ Organized file structure  
✅ Data-driven rendering  
✅ Clean CSS architecture  
✅ Responsive design principles  
✅ Version control with Git  

---

# Future Improvements

Possible future enhancements:

- Backend contact form integration
- CMS-powered project management
- Additional animations
- Improved accessibility features
- Blog section
- More interactive project demonstrations

---

# Author

**Joshua Craven**

Frontend Developer

GitHub:
https://github.com/jlc996

---

# License

This project is for educational and portfolio purposes.
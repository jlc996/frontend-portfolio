# Frontend Developer Portfolio

## Project Overview

This project is a modern **Frontend Developer Portfolio** built with **React and Vite**.

The portfolio is designed as a responsive **Single Page Application (SPA)** that showcases my development skills, projects, professional experience, certifications, technical stack, and contact information.

The application demonstrates modern frontend development practices including:

* Component-based React architecture
* React Router navigation
* Reusable UI components
* Context API for theme management
* CSS Modules for component-level styling
* Dynamic GitHub repository data
* Custom React hooks
* Responsive layouts
* Organized asset management
* Modular and maintainable CSS
* Web3Forms contact form integration
* Vercel deployment

---

# Live Demo

### Vercel Deployment

🔗 https://joshua-craven-portfolio-ikcb4mcq9-jlc996s-projects.vercel.app/

### GitHub Pages

🔗 https://jlc996.github.io/frontend-portfolio/

---

# Technologies Used

## Frontend

* React
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3
* React Router DOM

## Development Tools

* Visual Studio Code
* Git
* GitHub
* npm
* Vite Development Server
* Vercel

## APIs and Services

* GitHub REST API
* Web3Forms

## React Features

* React Context API
* React Hooks
* Custom Hooks
* Dynamic Component Rendering

---

# Features

## Responsive Portfolio Website

The portfolio is designed to work across:

* Desktop computers
* Laptops
* Tablets
* Mobile devices

Responsive CSS layouts are used throughout the application to provide a consistent experience across different screen sizes.

---

# Single Page Application

The portfolio uses **React Router DOM** for client-side navigation.

Available routes:

```text
/
├── Home
│
├── /projects
│   ├── Project Showcase
│   └── /projects/:id
│       └── Project Details
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

* Developer profile
* Professional summary
* Hero section
* Technical highlights
* Skills overview
* Technology stack
* Portfolio introduction

---

## Projects Page

The projects section dynamically retrieves repositories from the GitHub REST API.

Features include:

* Dynamic project cards
* GitHub repository integration
* Project search
* Search by project name
* Search by description
* Search by programming language
* Search by GitHub topics
* Project details pages
* GitHub repository links
* Live demo links when available
* Repository statistics

---

## Project Details

Each project can have its own details page.

Project details include:

* Project name
* Project description
* GitHub topics
* Primary programming language
* Stars
* Forks
* Open issues
* Repository visibility
* Repository size
* Default branch
* License
* Repository creation date
* Last updated date
* GitHub repository link
* Live demo link when available

Project information is retrieved dynamically from GitHub.

---

## Experience Page

The experience section displays:

* Professional experience
* Development journey
* Certifications
* Completion certificates
* Technical skills
* Technical achievements
* Development highlights

Experience information is managed through a centralized data file:

```text
src/data/experienceData.js
```

This keeps portfolio content separate from presentation logic.

---

## Contact Page

The contact page provides a professional contact form.

The form includes:

* Name
* Email
* Message
* Client-side validation
* Validation feedback
* Submission status
* Error handling
* Loading state

### Web3Forms Integration

The contact form uses **Web3Forms** to process submissions without requiring a custom backend server.

Form submissions are sent securely using a Vite environment variable:

```text
VITE_WEB3FORMS_ACCESS_KEY
```

The access key is not hard-coded into the source code.

---

# Project Architecture

```text
frontend-portfolio/
│
├── public/
│   └── Static public assets
│
├── src/
│   │
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
│   │   ├── ProjectTopics.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SkillCard.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── TechCard.jsx
│   │   ├── TechStack.jsx
│   │   ├── ThemeToggle.jsx
│   │   │
│   │   └── projects/
│   │       └── projectDetails/
│   │           ├── ProjectActions.jsx
│   │           ├── ProjectHeader.jsx
│   │           └── ProjectInfoCard.jsx
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
│   │   ├── Contact.css
│   │   ├── ContactForm.css
│   │   ├── Experience.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── Navbar.css
│   │   │
│   │   └── projects/
│   │       ├── Projects.module.css
│   │       ├── ProjectCard.module.css
│   │       ├── SearchBar.module.css
│   │       │
│   │       └── projectDetails/
│   │           ├── ProjectDetails.module.css
│   │           ├── ProjectActions.module.css
│   │           ├── ProjectHeader.module.css
│   │           ├── ProjectInfoCard.module.css
│   │           └── ProjectTopics.module.css
│   │
│   ├── App.jsx
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

---

# React Component Architecture

The application follows a reusable component-based architecture.

General structure:

```text
Page
 |
 ├── Section Component
 │
 └── Card Component
```

For example:

```text
Projects.jsx
     |
     ├── SearchBar.jsx
     |
     └── ProjectCard.jsx
             |
             └── Project Details
```

The Project Details page follows a similar structure:

```text
ProjectDetails.jsx
       |
       ├── ProjectHeader.jsx
       │       └── ProjectTopics.jsx
       │
       ├── ProjectInfoCard.jsx
       │
       └── ProjectActions.jsx
```

This approach keeps components:

* Reusable
* Maintainable
* Focused
* Easier to test
* Easier to update
* Easier to scale

---

# CSS Architecture

The project uses a combination of global CSS and **CSS Modules**.

CSS Modules are used for component-specific styling to prevent class-name conflicts and improve component isolation.

Example:

```text
src/styles/projects/
│
├── Projects.module.css
├── ProjectCard.module.css
├── SearchBar.module.css
│
└── projectDetails/
    ├── ProjectDetails.module.css
    ├── ProjectActions.module.css
    ├── ProjectHeader.module.css
    ├── ProjectInfoCard.module.css
    └── ProjectTopics.module.css
```

A component imports its CSS Module directly:

```javascript
import styles from "../../styles/projects/SearchBar.module.css";
```

Then styles are applied through the generated module class:

```jsx
<div className={styles.searchBar}>
```

This provides better style encapsulation and reduces the possibility of global CSS conflicts.

---

# Data Management

Portfolio information is separated from presentation logic.

Example:

```text
src/data/experienceData.js
```

This file stores:

* Work experience
* Certifications
* Achievements
* Technical accomplishments

Components import the data and dynamically render the appropriate sections.

Benefits include:

* Cleaner components
* Easier content updates
* Improved organization
* Separation of concerns
* Reusable data structures

---

# GitHub API Integration

The Projects page uses the GitHub REST API to retrieve repository information.

API endpoint:

```text
https://api.github.com/users/jlc996/repos
```

The custom `useFetch` hook manages:

* API requests
* Loading state
* Error handling
* Retrieved data

Repository information is then passed into reusable project components.

This allows the portfolio to automatically reflect changes made to public GitHub repositories.

---

# Theme System

The portfolio includes a custom theme system using the React Context API.

Implementation:

```text
src/context/ThemeContext.jsx
```

The theme system provides:

* Light mode
* Dark mode
* Global theme state
* Theme toggle functionality
* CSS variable-based colors

Theme variables are managed through the global application stylesheet.

Example:

```css
.light-theme {
    --bg-color: #cccccc;
    --text-color: #1f2937;
    --card-color: #bfc0c0;
    --accent-color: #2563eb;
}

.dark-theme {
    --bg-color: #111827;
    --text-color: #f9fafb;
    --card-color: #1f2937;
    --accent-color: #60a5fa;
}
```

Components use these variables to maintain consistent styling across themes.

---

# Custom Hooks

Reusable application logic is separated into custom hooks.

Example:

```text
src/hooks/useFetch.js
```

The `useFetch` hook is used for:

* API requests
* Data loading
* Error handling
* Managing fetched data

This keeps API logic separate from UI components.

---

# Contact Form Management

The portfolio uses **Web3Forms** to process contact form submissions.

The form performs client-side validation before sending the request.

Validation includes:

* Required name
* Minimum name length
* Valid email format
* Required message
* Minimum message length

The Web3Forms access key is provided through an environment variable:

```text
VITE_WEB3FORMS_ACCESS_KEY
```

This prevents the access key from being directly stored in the source code.

---

# Environment Variables

Create a local `.env` file for development:

```text
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Do not commit `.env` files containing private configuration values to GitHub.

For production deployment, the environment variable should be configured through the hosting provider.

---

# Vercel Deployment

The portfolio is deployed using **Vercel**.

Production deployment:

```text
https://joshua-craven-portfolio-ikcb4mcq9-jlc996s-projects.vercel.app/
```

Vercel provides automated deployment from the GitHub repository.

Typical deployment workflow:

```text
GitHub Repository
       |
       ↓
     Vercel
       |
       ↓
Production Build
       |
       ↓
Live Portfolio
```

The project is built using:

```bash
npm run build
```

---

# Asset Management

Portfolio images and resources are organized inside:

```text
src/assets/
```

Structure:

```text
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

## Configure Environment Variables

Create a `.env` file in the project root:

```text
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Replace the placeholder with your Web3Forms access key.

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

This project follows modern frontend development practices:

* Component-driven development
* Separation of concerns
* Reusable components
* CSS Modules
* Data-driven rendering
* Custom React hooks
* Context API
* Responsive design
* API integration
* Client-side validation
* Environment variable management
* Organized asset structure
* Version control with Git
* GitHub integration
* Vercel deployment

---

# AI Use Disclaimer

AI-assisted development tools were used during the development of this portfolio.

AI was used as a development support tool for tasks such as:

* Troubleshooting errors
* Explaining programming concepts
* Reviewing code structure
* Suggesting improvements
* Assisting with documentation
* Generating development suggestions

All generated suggestions were reviewed, tested, modified, and integrated as appropriate.

The project remains the responsibility of the developer, including the final implementation, design decisions, testing, and deployment.

AI assistance does not replace the developer's understanding of the technologies used in this project.

---

# Future Improvements

Possible future enhancements include:

* Backend contact form integration
* CMS-powered project management
* Additional animations
* Improved accessibility features
* Blog section
* Additional interactive project demonstrations
* Expanded project filtering
* Performance optimization
* Automated testing

---

# Author

**Joshua Craven**

Frontend Developer

GitHub:

https://github.com/jlc996

---

# License

This project is for educational and portfolio purposes.

# Frontend Developer Portfolio

## Project Overview

This project is a modern **Frontend Developer Portfolio** built with **React and Vite**. The application is designed as a responsive Single Page Application (SPA) that showcases my development skills, projects, professional experience, certifications, technical stack, and contact information.

The portfolio demonstrates modern frontend development practices including:

* Component-based React architecture
* React Router navigation
* Reusable UI components
* Context API for theme management
* Dynamic data rendering
* Custom React hooks
* Responsive layouts
* Organized asset management
* CSS Modules
* API integration
* Third-party form management
* Vercel deployment

---

# Live Demo

🔗 **Portfolio Website:**

https://joshua-craven-portfolio-ikcb4mcq9-jlc996s-projects.vercel.app/

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
* Git & GitHub
* npm
* Vite Development Server
* Chrome DevTools
* Vercel

## Libraries & Services

* React Router DOM
* React Context API
* Custom React Hooks
* Web3Forms

---

# Features

## Responsive Portfolio Website

The application is designed to work across:

* Desktop computers
* Tablets
* Mobile devices

Responsive layouts are implemented using CSS media queries and flexible Grid and Flexbox layouts.

---

# Single Page Application

The portfolio uses React Router for client-side navigation.

Available routes:

```text
/
├── Home
│
├── /projects
│   └── Project Showcase
│
├── /projects/:id
│   └── Project Details
│
├── /experience
│   └── Experience, Certifications, and Achievements
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
* Featured live project demonstration
* Technical highlights
* Portfolio metrics
* Core technology stack

The Home page is composed of reusable components including:

* `Hero`
* `LiveDemo`
* `TechStack`
* `TechCard`
* `Metrics`
* `MetricCard`

---

## Projects Page

The Projects page displays repositories retrieved dynamically from the GitHub API.

Features include:

* Dynamic project cards
* GitHub repository integration
* Search functionality
* Project filtering
* Project details pages
* Repository links
* Technology information

The application retrieves repositories using a reusable custom `useFetch` hook.

---

## Project Details

Individual project pages are generated dynamically using React Router URL parameters.

Example:

```text
/projects/Digital_Timekeeper
```

Project information is retrieved from the GitHub API and displayed using reusable components.

The project details page includes:

* Project title
* Project description
* Repository information
* GitHub source link
* Navigation back to projects

---

## Experience Page

The Experience page showcases my development journey and technical accomplishments.

It includes:

* Technical skills
* Certifications
* Completion certificates
* Development timeline
* Highlights and achievements

Experience information is separated into centralized data files.

Example:

```text
src/data/experienceData.js
```

This keeps portfolio content separate from presentation logic.

---

## Contact Page

The Contact page provides a professional contact form for visitors to send messages.

The form includes:

* Name field
* Email field
* Message field
* Client-side validation
* Validation feedback
* Submission loading state
* Success messaging
* Error handling
* Web3Forms integration

---

# Web3Forms Contact Management

The contact form uses **Web3Forms** to process and deliver submitted messages without requiring a custom backend server.

The form sends submissions to the Web3Forms API using the Fetch API.

The implementation includes:

* Environment variable configuration
* JSON-based form submission
* Client-side validation
* Submission loading state
* Success handling
* Error handling
* Form reset after successful submission

The Web3Forms access key is stored as an environment variable rather than being hard-coded into the component.

Example environment variable:

```text
VITE_WEB3FORMS_ACCESS_KEY=your_access_key
```

The environment file should not be committed to GitHub.

The contact form accesses the environment variable using:

```javascript
import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
```

This keeps configuration separate from the application's source code.

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
│   │   │
│   │   ├── experience/
│   │   │   ├── CertificationCard.jsx
│   │   │   ├── CertificationSection.jsx
│   │   │   ├── CompletionCertificateCard.jsx
│   │   │   ├── CompletionCertificateSection.jsx
│   │   │   ├── HighlightCard.jsx
│   │   │   ├── HighlightSection.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   └── Timeline.jsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── LiveDemo.jsx
│   │   │   ├── MetricCard.jsx
│   │   │   ├── Metrics.jsx
│   │   │   ├── TechCard.jsx
│   │   │   └── TechStack.jsx
│   │   │
│   │   ├── projects/
│   │   │   ├── ErrorMessage.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── projectDetails/
│   │   │       ├── ProjectActions.jsx
│   │   │       ├── ProjectHeader.jsx
│   │   │       └── ProjectInfoCard.jsx
│   │   │
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── data/
│   │   ├── experienceData.js
│   │   └── homeData.js
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
│   │   ├── ContactForm.css
│   │   ├── Footer.css
│   │   ├── Navbar.css
│   │   │
│   │   ├── components/
│   │   │   ├── MetricCard.module.css
│   │   │   ├── Metrics.module.css
│   │   │   ├── TechCard.module.css
│   │   │   └── TechStack.module.css
│   │   │
│   │   └── pages/
│   │       ├── Contact.module.css
│   │       ├── Experience.module.css
│   │       ├── Home.module.css
│   │       ├── ProjectDetails.module.css
│   │       └── Projects.module.css
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

Example:

```text
Experience.jsx
       |
       ↓
SkillsSection.jsx
       |
       ↓
SkillCard.jsx
```

Another example:

```text
Home.jsx
   |
   ├── Hero.jsx
   │
   ├── LiveDemo.jsx
   │
   ├── TechStack.jsx
   │       |
   │       └── TechCard.jsx
   │
   └── Metrics.jsx
           |
           └── MetricCard.jsx
```

This architecture keeps the application:

* Maintainable
* Scalable
* Reusable
* Easier to debug
* Easier to update

---

# Data Management

Portfolio information is separated from presentation logic.

Home page data is stored in:

```text
src/data/homeData.js
```

This includes information such as:

* Portfolio metrics
* Technology stack

Experience information is stored in:

```text
src/data/experienceData.js
```

This includes:

* Skills
* Certifications
* Completion certificates
* Timeline information
* Highlights

Components import the data and dynamically render the appropriate UI.

Benefits include:

* Cleaner components
* Easier content updates
* Improved organization
* Reduced duplication
* Better separation of concerns

---

# CSS Architecture

The project uses CSS Modules where component-specific styling benefits from locally scoped class names.

Examples:

```text
MetricCard.module.css
Metrics.module.css
TechCard.module.css
TechStack.module.css
```

Page-specific styling also uses CSS Modules where appropriate.

Global application styles are handled through:

```text
src/styles/App.css
```

Global styles include:

* CSS reset
* Theme variables
* Application layout
* Global typography
* Global link styling
* Global image behavior

This approach keeps global styles centralized while allowing individual components to maintain isolated styling.

---

# Theme System

The portfolio includes a custom light and dark theme system using the React Context API.

Implementation:

```text
src/context/ThemeContext.jsx
```

Features include:

* Light mode
* Dark mode
* Global theme state
* Theme toggle control
* Dynamic CSS variables

Theme variables are defined in `App.css`.

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

Components use these variables to automatically adapt to the selected theme.

---

# Custom Hooks

Reusable application logic is separated into custom React hooks.

Example:

```text
src/hooks/useFetch.js
```

The `useFetch` hook is used for:

* API requests
* Data loading
* Error handling
* Loading states
* Dynamic GitHub repository data

This prevents API-fetching logic from being duplicated across components.

---

# API Integration

The portfolio integrates with the GitHub REST API to dynamically retrieve repository information.

GitHub API endpoint:

```text
https://api.github.com/users/jlc996/repos
```

The application uses the returned repository data to populate project cards and project detail pages.

Search functionality can filter projects using:

* Repository name
* Description
* Programming language
* GitHub repository topics

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

This keeps project resources organized and easy to reference from React components.

---

# Environment Variables

Environment variables are used for configuration values that should not be hard-coded into the application.

The contact form uses:

```text
VITE_WEB3FORMS_ACCESS_KEY
```

Example `.env` file:

```text
VITE_WEB3FORMS_ACCESS_KEY=your_access_key
```

The `.env` file should remain local and should not be committed to GitHub.

A `.env.example` file can be used to document required environment variables without exposing the actual access key.

Example:

```text
VITE_WEB3FORMS_ACCESS_KEY=
```

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
VITE_WEB3FORMS_ACCESS_KEY=your_access_key
```

Replace `your_access_key` with the access key provided by Web3Forms.

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

# Deployment

The portfolio is deployed using **Vercel**.

Vercel provides continuous deployment through the GitHub repository, allowing updates to the portfolio to be automatically built and deployed when changes are pushed.

Live deployment:

https://joshua-craven-portfolio-ikcb4mcq9-jlc996s-projects.vercel.app/

The application is configured as a Vite React application and deployed through Vercel.

---

# Development Practices

This project follows modern frontend development practices:

* Component-driven development
* Separation of concerns
* Reusable components
* Data-driven rendering
* Custom React hooks
* Context API
* API integration
* Environment variable configuration
* CSS Modules
* Responsive design principles
* Accessible form controls
* Client-side form validation
* Version control with Git
* GitHub repository integration
* Continuous deployment with Vercel

---

# AI Use Disclaimer

AI-assisted development tools were used during the development of this portfolio as a supplemental resource for learning, debugging, documentation, code review, and development guidance.

AI assistance was used to help:

* Explain programming concepts
* Troubleshoot errors
* Review and improve code structure
* Suggest development approaches
* Assist with documentation
* Improve readability and organization

The project was developed, reviewed, tested, and adapted by **Joshua Craven**.

AI-generated suggestions were reviewed and modified as necessary to fit the project's requirements, architecture, functionality, and coding practices.

The purpose of using AI assistance was to support the development and learning process rather than replace the developer's understanding or decision-making.

---

# Future Improvements

Possible future enhancements include:

* Backend contact form integration
* CMS-powered project management
* Additional animations
* Improved accessibility features
* Blog section
* More interactive project demonstrations
* Additional portfolio projects
* Expanded API integrations
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

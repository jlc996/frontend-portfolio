// Import React Router components for client-side navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import reusable layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import page components
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

// Import the Theme Provider to manage dark/light mode
import { ThemeProvider } from "./context/ThemeContext";

// Import global application styles
import "./styles/App.css";

// Main application component
function App() {
  return (
    // Wrap the entire application with the Theme Context
    <ThemeProvider>

      {/* Enable client-side routing */}
      <BrowserRouter>

        {/* Main application wrapper */}
        <div className="app">

          {/* Persistent navigation displayed on every page */}
          <Navbar />

          {/* Main content area where routed pages are rendered */}
          <main className="main-content">

            {/* Define all application routes */}
            <Routes>

              {/* Home page */}
              <Route
                path="/"
                element={<Home />}
              />

              {/* Projects page */}
              <Route
                path="/projects"
                element={<Projects />}
              />

              {/* Dynamic project details page using a route parameter */}
              <Route
                path="/projects/:id"
                element={<ProjectDetails />}
              />

              {/* Experience & Skills page */}
              <Route
                path="/experience"
                element={<Experience />}
              />

              {/* Contact page */}
              <Route
                path="/contact"
                element={<Contact />}
              />

            </Routes>

          </main>

          {/* Persistent footer displayed on every page */}
          <Footer />

        </div>

      </BrowserRouter>

    </ThemeProvider>
  );
}

// Export the App component
export default App;
import Header from "./components/header.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;

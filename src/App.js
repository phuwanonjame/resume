import "./App.css";
import About from "./component/about";
import Contact from "./component/contact";
import Education from "./component/education";
import Main from "./component/main";
import Navbar from "./component/navbar";
import Portfolio from "./component/portfolio";
import Skills from "./component/skills";

function App() {
  return (
    <div className="App h-screen">
      <Navbar />
      <Main />
      <About />
      <Education />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

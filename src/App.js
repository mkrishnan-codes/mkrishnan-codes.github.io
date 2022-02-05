import './App.css';
import { useState } from "react"
import Contentsection from './components/ContentSection';
import Navigationbar from './components/NavigationBar';

function App() {
  const [section, setSection] = useState("");
  return (
    <div className="s-layout">
      <Navigationbar onClick={(href) => setSection(href)}></Navigationbar>
      <Contentsection selectedSection={section}></Contentsection>
    </div>
  );
}

export default App;

import './App.css';
import Contentsection from './components/ContentSection';
import Navigationbar from './components/NavigationBar';

function App() {
  return (
    <div class="s-layout">
      <Navigationbar></Navigationbar>
      <Contentsection></Contentsection>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/navbar.jsx'
import Section from './components/section.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section bgcolor="#FFA9A3" />
      <Section bgcolor="#5C95FF" />
      <Section bgcolor="#F87575" />
      <Footer bgcolor="#7E6C6C" />
    </div>
  );
}

export default App;

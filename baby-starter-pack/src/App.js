import './App.css';
import Navbar from './components/navbar.jsx'
import Section from './components/section.jsx'
import Footer from './components/footer.jsx'
import './stylesheets/navbar.css'
import './stylesheets/section.css'
import './stylesheets/footer.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section bgcolor="#FFA9A3" />
      <Section bgcolor="#5C95FF" />
      <Section bgcolor="#F87575" />
      <Footer bgcolor="#7E6C6C" iconHeight="60px" paddingTop="30px" />
    </div>
  );
}

export default App;
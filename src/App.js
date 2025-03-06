import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Hero from './Home';
import Features from './Features';
import Footer from './Footer';
import CTA from './Cta';
import Products from './Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Products/>
      <Features />
      <CTA/>
      <Footer />
    </div>
  );
}

export default App;

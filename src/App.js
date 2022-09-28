import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Business from "./components/Business";
import Billing from "./components/Billing";
import CardDetail from "./components/CardDetail";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Business />
      <Billing />
      <CardDetail />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

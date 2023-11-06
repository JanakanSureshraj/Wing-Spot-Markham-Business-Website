import Header from "./components/header/header";
import Hero from "./components/herosection/hero";
import Companies from "./components/companies/companies"
import Residencies from "./components/residencies/residencies";
import Deals from "./components/deals/deals";
import Dailydeals from "./components/dailyDeals/dailydeals";
import Contact from "./components/contact/contact"
/*import Values from "./components/values/values";
import Contact from "./components/contact/contact"
import GetStarted from "./components/getstarted/getstarted";
import Footer from "./components/footer/footer";*/
import "./App.css"

function App() {
  return(
    <div className="app">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <div>
        <Companies/>
        <Residencies/>
        <Deals/>
        <Dailydeals/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

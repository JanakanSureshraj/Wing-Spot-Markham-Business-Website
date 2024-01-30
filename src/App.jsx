//components
import Header from "./components/header/header";
import Hero from "./components/herosection/hero";
import Companies from "./components/companies/companies"
import Menu from "./components/menu/menu";
import Deals from "./components/deals/deals";
import Dailydeals from "./components/dailyDeals/dailydeals";
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer";

//css
import "./App.css"

//seo
import { Helmet } from 'react-helmet';
import ogImage from "../public/logo.jpg";

function App() {
  return(
    <div className="app">

      <Helmet>
        <title>The Wing Spot Markham</title>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="The Wing Spot Markham" />
        <meta name="description" content="Chicken wings restaurant in Markham, Ontario. Known for wings, wraps, chilli onion fries and more!" />
        <meta name="keywords" content="chicken wings, fries, restaurant, Markham, Ontario" />
        <meta property="og:title" content="The Wing Spot Markham" />
        <meta property="og:description" content="Chicken wings restaurant in Markham, Ontario. Known for wings, wraps, chilli onion fries and more!" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content="https://www.thewingspotmarkham.com/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="./favicon.ico" />
      </Helmet>

      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <div>
        <Companies/>
        <Menu/>
        <Deals/>
        <Dailydeals/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

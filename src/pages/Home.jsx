import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Item from "../components/Item";
import HeroBanner from "../components/HeroBanner";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Product from "../components/Product";

function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const sectionToScroll = query.get("scrollTo");

    switch (sectionToScroll) {
      case "about":
        scrollToSection(aboutRef);
        break;
      case "contact":
        scrollToSection(contactRef);
        break;
      default:
        break;
    }
  }, [location]);
  return (
    <div className="flex flex-col">
      <div>
        <HeroBanner />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div>
        <Item />
      </div>
      <div>
        <Product/>
      </div>
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;

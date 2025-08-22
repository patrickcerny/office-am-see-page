import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import * as Modules from "./Modules";
import Datenschutz from "./Pages/Datenschutz/Datenschutz";
import Impressum from "./Pages/Impressum/Impressum";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

function App() {
  return (
    <>
      <BrowserRouter>
        <Header
          forceColor={false}
          mobileBreakpoint={1150}
          navItems={[
            { text: "Home", to: "" },
            { text: "Über Uns", to: "#aboutUs" },
            { text: "Services", to: "#services" },
            { text: "Kontakt", to: "#contact" },
          ]}
        ></Header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Modules.LandingImage></Modules.LandingImage>
                <Modules.AboutUs></Modules.AboutUs>
                <Modules.OurTeam></Modules.OurTeam>
                <Modules.Quote
                  quote={
                    "Zahlen im Griff, Erfolg im Blick. Ihr Partner für Buchhaltung und Büroorganisation."
                  }
                ></Modules.Quote>
                <Modules.Services></Modules.Services>
                <Modules.Workflow></Modules.Workflow>
                <Modules.Contact></Modules.Contact>
              </>
            }
          />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/dsgvo" element={<Datenschutz />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/About/AboutPage";
import ServicePressureCheck from "./pages/Service/ServicePressureCheck";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";
import Faq from "./pages/Page/Faq";
import PrivacyPolicy from "./pages/Page/Privacy-policy";
import TermConditions from "./pages/Page/Term-conditions";
import ButtonScrollTop from "./components/Button/ButtonScrollTop";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./static/css/responsive.css";
import ServiceSuspensionService from "./pages/Service/ServiceSuspensionService";
import ServiceBrakeService from "./pages/Service/ServiceBrakeService";
import ServiceWheelAlignment from "./pages/Service/ServiceWheelAlignment";
import ServiceTyreBalancing from "./pages/Service/ServiceTyreBalancing";
import ServiceEngineOil from "./pages/Service/ServiceEngineOil";
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";
import Verify from "./pages/LoginRegister/Verify";
import PhoneNumber from "./pages/LoginRegister/PhoneNumber";

export * from "./components";

function App() {
  const [userEmail, setUserEmail] = useState("");

  return (
    <Router>
      <HeaderWrapper />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-pn" element={<PhoneNumber />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/verifyEmail" element={<Verify />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" />
        <Route
          path="/services/pressure-check"
          element={<ServicePressureCheck />}
        />
        <Route
          path="/services/suspension-service"
          element={<ServiceSuspensionService />}
        />
        <Route
          path="/services/wheel-alignment"
          element={<ServiceWheelAlignment />}
        />
        <Route
          path="/services/brake-service"
          element={<ServiceBrakeService />}
        />
        <Route
          path="/services/tyre-balancing"
          element={<ServiceTyreBalancing />}
        />
        <Route
          path="/services/engine-oil-service"
          element={<ServiceEngineOil />}
        />
        <Route path="/products/:carBrand?" element={<Product />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/pages" />
        <Route path="/pages/faq" element={<Faq />} />
        <Route path="/pages/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/pages/term-conditions" element={<TermConditions />} />
      </Routes>
      <Footer />
      {/* <ButtonTheme /> */}
      <ButtonScrollTop />
    </Router>
  );

  function HeaderWrapper() {
    const location = useLocation();
    const { pathname } = location;
    const isHomepage = pathname === "/";

    // Define props with different styles based on the current page
    const headerProps = isHomepage
      ? {
          background: "transparent",
          top: "30px",
          hideFirstDiv: false,
          logoHeight: false,
        }
      : {
          background: "black",
          hideFirstDiv: true,
          logoHeight: true,
        };

    return <Header props={headerProps} />;
  }
}
export default App;

import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./component/Navber/Navber";
import Footer from "./component/Footer/Footer";
import Home from "./page/Home";
import About from "./component/About/About";
import Products from "./component/Products/Products";

import Impact from "./component/Impact/Impact";
import Recommendations from "./component/Recommendations/Recommendations";
import Knowledge from "./component/Knowledge/Knowledge";
import ConsultEngineer from "./component/ConsultEngineer/ConsultEngineer";
import NotFound from "./component/NotFound/NotFound";

import { useLanguage } from "./component/Context/languge";

// Scroll to top whenever the page changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

// Temporary pages until their content is ready
function PlaceholderPage({ title }) {
  const { isArabic } = useLanguage();

  return (
    <section className="flex min-h-[75vh] items-center justify-center px-6 py-32 text-center">
      <div className="max-w-2xl">
        <span className="mb-5 inline-block rounded-full bg-[#A4D561]/20 px-5 py-2 text-sm font-bold text-[#11341B]">
          Vermi Valley
        </span>

        <h1 className="mb-5 text-3xl font-extrabold text-[#11341B] sm:text-5xl">
          {title}
        </h1>

        <p className="text-base leading-8 text-[#11341B]/65 sm:text-lg">
          {isArabic
            ? "نعمل على تجهيز هذا القسم ليقدم لكم تجربة مميزة. ترقبوا المزيد قريبًا."
            : "We are preparing this section to offer you a better experience. Stay tuned for more."}
        </p>
      </div>
    </section>
  );
}

function App() {
  const { isArabic } = useLanguage();

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#F2EEDF]"
    >
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Products */}
        <Route path="/products" element={<Products />} />

        {/* Recommendations */}
        <Route
          path="/recommendations"
          element={<Recommendations />}
        />

        {/* Impact */}
        <Route path="/impact" element={<Impact />} />

        {/* Knowledge */}
        <Route path="/knowledge" element={<Knowledge />} />

        {/* Consult Engineer */}
        <Route
          path="/consult-engineer"
          element={<ConsultEngineer />}
        />

        {/* Experiences & Results */}
        <Route
          path="/results"
          element={
            <PlaceholderPage
              title={isArabic ? "التجارب والنتائج" : "Experiences & Results"}
            />
          }
        />

        {/* Partners */}
        <Route
          path="/partners"
          element={
            <PlaceholderPage
              title={isArabic ? "شركاء النجاح" : "Our Partners"}
            />
          }
        />

        {/* Recognition */}
        <Route
          path="/recognition"
          element={
            <PlaceholderPage
              title={isArabic ? "الجوائز والفعاليات" : "Awards & Events"}
            />
          }
        />

        {/* Innovation */}
        <Route
          path="/innovation"
          element={
            <PlaceholderPage
              title={isArabic ? "الابتكار" : "Innovation"}
            />
          }
        />

        {/* Investment */}
        <Route
          path="/investment"
          element={
            <PlaceholderPage
              title={isArabic ? "الاستثمار والشراكات" : "Investment & Partnerships"}
            />
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <PlaceholderPage
              title={isArabic ? "تواصل معنا" : "Contact Us"}
            />
          }
        />

        {/* Not Found - 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
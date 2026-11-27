
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import { useLanguage } from "../../component/Context/languge";
import { WHATSAPP_NUMBER } from "../../component/Data/translations";

import logoArabic from "../../assets/imge/logo ar v1 dark.svg";
import logoEnglish from "../../assets/imge/logo en v1 dark.svg";

const navItems = [
  {
    id: "home",
    ar: "الرئيسية",
    en: "Home",
    href: "/",
  },
  {
    id: "about",
    ar: "عن فيرمي",
    en: "About Vermi",
    href: "/about",
  },
  {
    id: "knowledge",
    ar: "تعلّم من فيرمي",
    en: "Learn from Vermi",
    href: "/knowledge",
  },
  {
    id: "consult",
    ar: "استشر مهندسًا",
    en: "Consult an Engineer",
    href: "/consult-engineer",
  },
  {
    id: "products",
    ar: "المنتجات والأسعار",
    en: "Products & Prices",
    href: "/products",
  },
];

export default function Navber() {
  const { isArabic, toggleLanguage } = useLanguage();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = location.pathname === "/";
  const isFloating = isScrolled || !isHome;

  const logo = isArabic ? logoArabic : logoEnglish;

  const phoneNumber = String(WHATSAPP_NUMBER).replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Active route detection
  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === href ||
      location.pathname.startsWith(`${href}/`)
    );
  };

  // Handle navigation
  const handleNavClick = (href) => {
    setMobileOpen(false);

    if (location.pathname === href) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      dir={isArabic ? "rtl" : "ltr"}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed left-1/2 z-50
        -translate-x-1/2
        transition-all duration-500 ease-in-out

        ${
          isFloating
            ? `
              top-3
              w-[calc(100%-1.5rem)]
              max-w-7xl
              rounded-2xl
              bg-[#F2EEDF]/95
              px-4 py-2.5
              shadow-[0_8px_30px_rgba(17,52,27,0.10)]
              backdrop-blur-2xl
              sm:w-[calc(100%-2rem)]
              sm:px-6
            `
            : `
              top-0
              w-full
              max-w-none
              rounded-none
              bg-transparent
              px-5 py-4
              sm:px-10 sm:py-5
            `
        }
      `}
    >
      <div className="flex items-center justify-between gap-5">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleNavClick("/")}
          className="flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4D561]"
        >
          <img
            src={logo}
            alt="Vermi Valley"
            className={`
              w-auto object-contain transition-all duration-300
              ${isFloating ? "h-10 sm:h-11" : "h-12 sm:h-14"}
            `}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 xl:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.id}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                aria-current={active ? "page" : undefined}
                className={`
                  group relative whitespace-nowrap
                  rounded-md py-2 text-sm font-bold
                  transition-colors duration-300
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4D561]
                  ${
                    active
                      ? "text-[#668F3B]"
                      : "text-[#11341B] hover:text-[#668F3B]"
                  }
                `}
              >
                {isArabic ? item.ar : item.en}

                {/* Active underline */}
                <motion.span
                  initial={false}
                  animate={{
                    scaleX: active ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="
                    absolute bottom-0 left-0
                    h-[2px] w-full origin-center
                    rounded-full bg-[#668F3B]
                  "
                />

                {/* Hover underline */}
                {!active && (
                  <span
                    className="
                      absolute bottom-0 left-0
                      h-[2px] w-full origin-center
                      scale-x-0 rounded-full
                      bg-[#A4D561]
                      transition-transform duration-300
                      group-hover:scale-x-100
                    "
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 xl:flex">

          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-full bg-[#11341B]
              px-6 py-3
              text-sm font-bold text-[#F2EEDF]
              shadow-[0_6px_16px_rgba(17,52,27,0.18)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-[#254E2D]
              active:translate-y-0
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4D561] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2EEDF]
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
            </svg>

            {isArabic ? "اطلب أو استفسر" : "Order or Ask"}
          </a>

          {/* Language */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={isArabic ? "Switch to English" : "التغيير إلى العربية"}
            className="
              flex h-11 min-w-[46px] items-center justify-center
              rounded-full border border-[#11341B]/20
              bg-[#11341B]
              px-4
              text-xs font-extrabold text-[#F2EEDF]
              transition-all duration-300
              hover:bg-[#254E2D]
              active:scale-95
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4D561]
            "
          >
            {isArabic ? "EN" : "AR"}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 xl:hidden">

          {/* Language */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={isArabic ? "Switch to English" : "التغيير إلى العربية"}
            className="
              flex h-11 min-w-[48px] items-center justify-center
              rounded-xl
              bg-[#11341B]
              px-3
              text-xs font-extrabold text-[#F2EEDF]
              shadow-[0_2px_10px_rgba(17,52,27,0.15)]
              transition-all duration-300
              hover:bg-[#254E2D]
              active:scale-95
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4D561]
            "
          >
            {isArabic ? "EN" : "AR"}
          </button>

          {/* Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label={isArabic ? "فتح القائمة" : "Toggle menu"}
            aria-expanded={mobileOpen}
            className="
              flex h-11 w-11 items-center justify-center
              rounded-xl
              bg-[#F2EEDF]
              text-[#11341B]
              shadow-[0_2px_10px_rgba(17,52,27,0.15)]
              transition-all duration-300
              hover:bg-[#E7E1CC]
              active:scale-95
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#11341B]
            "
          >
            {mobileOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`
              mt-3 overflow-hidden
              rounded-2xl
              bg-[#F2EEDF]
              xl:hidden
              ${isFloating ? "" : "shadow-[0_12px_30px_rgba(17,52,27,0.15)]"}
            `}
          >
            <div
              className="
                flex max-h-[75vh] flex-col gap-1.5
                overflow-y-auto
                bg-[#F2EEDF]
                p-3
              "
            >
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    aria-current={active ? "page" : undefined}
                    className={`
                      flex items-center justify-between
                      rounded-xl px-4 py-3.5
                      text-sm font-bold
                      transition-all duration-300
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4D561]
                      ${
                        active
                          ? "bg-[#A4D561]/25 text-[#668F3B]"
                          : "text-[#11341B] hover:bg-[#A4D561]/15"
                      }
                    `}
                  >
                    {isArabic ? item.ar : item.en}

                    {active && (
                      <span className="h-2 w-2 rounded-full bg-[#668F3B]" />
                    )}
                  </Link>
                );
              })}

              {/* Mobile WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="
                  mt-1.5 flex items-center justify-center gap-2
                  rounded-xl bg-[#11341B]
                  px-5 py-4
                  text-sm font-bold text-[#F2EEDF]
                  transition-colors hover:bg-[#254E2D]
                  active:scale-[0.98]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4D561]
                "
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
                </svg>

                {isArabic ? "اطلب أو استفسر" : "Order or Ask"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

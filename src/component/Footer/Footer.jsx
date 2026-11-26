import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../Context/languge";
import { WHATSAPP_NUMBER } from "../Data/translations";
import pattern from "../../assets/imge/vv pattern 1.png";

const PHONE = "01282111101";
const FACEBOOK_URL = "https://www.facebook.com/vermivalley/";
const LINKEDIN_URL = "https://www.linkedin.com/company/vermi-valley/";

const CONTENT = {
  ar: {
    brand: "Vermi Valley",
    about:
      "شركة من الوادي الجديد بننتج الفيرمي كومبوست ومنتجات حيوية من معالجة المخلفات العضوية، علشان تربة أصح وزراعة مستدامة.",
    ctaTitle: "عندك استفسار عن أرضك أو محصولك؟",
    ctaText: "كلمنا على واتساب ونوجّه سؤالك للمختص.",
    ctaButton: "تواصل معنا عبر واتساب",
    whatsappMessage: "مرحباً، أريد معرفة المزيد عن شركة Vermi Valley.",
    linksTitle: "روابط سريعة",
    links: [
      { label: "الرئيسية", to: "/" },
      { label: "من نحن", to: "/about" },
      { label: "المنتجات", to: "/products" },
      { label: "استشر مهندس", to: "/consult" },
    ],
    contactTitle: "تواصل معنا",
    phoneLabel: "الموبايل",
    addressLabel: "العنوان",
    address: "الوادي الجديد، مركز الخارجة، الدائري الشرقي، شمال مصنع الجريد",
    mapLabel: "افتح الموقع على الخريطة",
    followTitle: "تابعنا",
    rights: "جميع الحقوق محفوظة",
  },
  en: {
    brand: "Vermi Valley",
    about:
      "A company from New Valley producing vermicompost and bio-based products from organic waste, for healthier soil and sustainable farming.",
    ctaTitle: "Have a question about your land or crop?",
    ctaText: "Message us on WhatsApp and we'll direct your question to a specialist.",
    ctaButton: "Contact us on WhatsApp",
    whatsappMessage: "Hello, I would like to know more about Vermi Valley.",
    linksTitle: "Quick Links",
    links: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Products", to: "/products" },
      { label: "Consult an Engineer", to: "/consult" },
    ],
    contactTitle: "Contact Us",
    phoneLabel: "Mobile",
    addressLabel: "Address",
    address:
      "El Kharga, New Valley, Eastern Ring Road, north of Al-Gareed Factory",
    mapLabel: "Open location on map",
    followTitle: "Follow Us",
    rights: "All rights reserved",
  },
};

/* ---------- أيقونات ---------- */

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M26.5 15.5a10.5 10.5 0 0 1-15.4 9.3L5 26.5l1.8-5.8A10.5 10.5 0 1 1 26.5 15.5Z" />
      <path d="M11.5 10.5c.3-.7.7-.7 1-.7h.8c.3 0 .5.1.7.6l1 2.2c.1.3.1.5-.1.8l-.8 1c-.2.2-.2.4 0 .7.5.9 1.3 1.7 2.2 2.2.3.2.5.2.7 0l1-1c.2-.2.5-.2.8-.1l2.2 1c.5.2.6.4.6.7v.8c0 .3 0 .7-.7 1-1 .5-2.4.5-4.4-.4-2.1-.9-4-2.7-5-4.8-.9-2-.9-3.4-.4-4.4Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3h2A1.5 1.5 0 0 1 10 4.2l.7 3a1.5 1.5 0 0 1-.7 1.6l-1.4.9a14 14 0 0 0 5.7 5.7l.9-1.4a1.5 1.5 0 0 1 1.6-.7l3 .7a1.5 1.5 0 0 1 1.2 1.5v2A1.5 1.5 0 0 1 19.5 19C10.4 19 5 13.6 5 4.5Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function IconBox({ children }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#A4D561]/40 bg-[#A4D561]/10 text-[#A4D561]">
      {children}
    </span>
  );
}

/* ---------- الفوتر ---------- */

export default function Footer() {
  const { isArabic } = useLanguage();
  const t = isArabic ? CONTENT.ar : CONTENT.en;

  const whatsappNumber = String(WHATSAPP_NUMBER).replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    t.whatsappMessage
  )}`;
  const phoneLink = `tel:+2${PHONE}`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTENT.ar.address
  )}`;

  const socials = [
    { name: "Facebook", href: FACEBOOK_URL, icon: <FacebookIcon /> },
    { name: "LinkedIn", href: LINKEDIN_URL, icon: <LinkedInIcon /> },
  ];

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-[#11341B] text-[#F2EEDF]"
    >
      {/* باترن البراند */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage: `url("${pattern}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "380px",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 pt-16 md:px-10 md:pt-20">
        {/* بانر الدعوة للتواصل */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#A4D561] p-7 text-[#11341B] md:flex-row md:items-center md:p-10"
        >
          <div className="max-w-xl">
            <h2 className="text-2xl font-black leading-[1.4] md:text-3xl">
              {t.ctaTitle}
            </h2>
            <p className="mt-2 leading-8 text-[#11341B]/80">{t.ctaText}</p>
          </div>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#11341B] px-7 py-4 font-bold text-[#F2EEDF] transition-colors duration-300 hover:bg-[#315B27]"
          >
            <WhatsAppIcon />
            {t.ctaButton}
          </motion.a>
        </motion.div>

        {/* الأعمدة */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.3fr] lg:gap-16 lg:py-16">
          {/* عن الشركة */}
          <div>
            <Link
              to="/"
              className="text-3xl font-black text-[#F2EEDF]"
              aria-label={t.brand}
            >
              Vermi <span className="text-[#A4D561]">Valley</span>
            </Link>

            <p className="mt-5 max-w-sm leading-8 text-[#F2EEDF]/75">
              {t.about}
            </p>

            <div className="mt-7">
              <h3 className="mb-4 text-sm font-black text-[#A4D561]">
                {t.followTitle}
              </h3>
              <div className="flex items-center gap-3">
                {socials.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F2EEDF]/25 text-[#F2EEDF] transition-colors duration-300 hover:border-[#A4D561] hover:bg-[#A4D561] hover:text-[#11341B]"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="mb-5 text-sm font-black text-[#A4D561]">
              {t.linksTitle}
            </h3>
            <ul className="space-y-3">
              {t.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-block text-[#F2EEDF]/80 transition duration-300 hover:text-[#A4D561]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* بيانات التواصل */}
          <div>
            <h3 className="mb-5 text-sm font-black text-[#A4D561]">
              {t.contactTitle}
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <IconBox>
                  <PhoneIcon />
                </IconBox>
                <div>
                  <span className="block text-sm text-[#F2EEDF]/60">
                    {t.phoneLabel}
                  </span>
                  <a
                    href={phoneLink}
                    dir="ltr"
                    className="mt-1 inline-block font-semibold text-[#F2EEDF] transition-colors duration-300 hover:text-[#A4D561]"
                  >
                    0128 211 1101
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <IconBox>
                  <PinIcon />
                </IconBox>
                <div>
                  <span className="block text-sm text-[#F2EEDF]/60">
                    {t.addressLabel}
                  </span>
                  <p className="mt-1 max-w-xs leading-7 text-[#F2EEDF]">
                    {t.address}
                  </p>
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#A4D561] transition-opacity duration-300 hover:opacity-80"
                  >
                    {t.mapLabel}
                    <span aria-hidden="true">{isArabic ? "←" : "→"}</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* الحقوق */}
        <div className="border-t border-[#F2EEDF]/15 py-6 text-center text-sm text-[#F2EEDF]/60">
          © {new Date().getFullYear()} Vermi Valley. {t.rights}.
        </div>
      </div>
    </footer>
  );
}
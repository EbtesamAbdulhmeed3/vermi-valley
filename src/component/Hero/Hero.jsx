import { motion } from "motion/react";
import { useLanguage } from "../Context/languge";
import heroImage from "../../assets/imge/imge hero.jpeg";
import {
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE,
} from "../Data/translations";

const CREAM = "#F2EEDF";
const DARK = "#11341B";
const ACCENT_TEXT = "#5E9A2A";
const SHOW_EXTRAS = true;

function AnimatedWords({ words, startDelay = 0, className = "" }) {
  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: startDelay + index * 0.16,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {word}
          {index !== words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 19C5 10 10 5 19 5c0 9-5 14-14 14Z" />
      <path d="M5 19 13 11" />
    </svg>
  );
}

function FeatureItem({ label }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-sm font-medium leading-6"
      style={{ color: `${DARK}E6` }}
    >
      <span style={{ color: ACCENT_TEXT }}>
        <LeafIcon />
      </span>
      {label}
    </span>
  );
}

function Hero() {
  const { isArabic } = useLanguage();
  const phoneNumber = String(WHATSAPP_NUMBER).replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  const imageSide = isArabic ? "left-0" : "right-0";
  const fadeDir = isArabic ? "to left" : "to right";
  const desktopMask = `linear-gradient(${fadeDir}, transparent 0%, rgba(0,0,0,0.35) 14%, #000 42%)`;
  const desktopFadeDown =
    "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.5) 80%, transparent 100%)";

  const features = isArabic
    ? [
        { label: "حلول مستدامة" },
        { label: "إعادة تدوير عضوي" },
        { label: "تربة صحية" },
      ]
    : [
        { label: "Sustainable Solutions" },
        { label: "Organic Recycling" },
        { label: "Healthy Soil" },
      ];

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      style={{ backgroundColor: CREAM, color: DARK }}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[43%] overflow-hidden lg:hidden"
      >
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[32%]"
          style={{
            background: `linear-gradient(to bottom, transparent, ${CREAM})`,
          }}
        />
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 ${imageSide} -z-10 hidden w-full lg:block lg:w-[62%]`}
        style={{
          WebkitMaskImage: `${desktopMask}, ${desktopFadeDown}`,
          maskImage: `${desktopMask}, ${desktopFadeDown}`,
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover object-[70%_center]"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-[6] hidden h-[34%] lg:block"
        style={{
          background: `linear-gradient(to bottom, ${CREAM}00 0%, ${CREAM}B3 55%, ${CREAM} 100%)`,
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 items-center px-5 pb-32 pt-[44svh] sm:px-10 sm:pt-[44svh] lg:px-16 lg:pb-40 lg:pt-36 xl:px-20">
        <div className="flex w-full min-w-0 flex-col items-start lg:max-w-[58%]">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-[clamp(2.2rem,5.4vw,4.6rem)] font-extrabold leading-[1.25] tracking-tight"
            style={{ color: DARK }}
          >
            {isArabic ? "من الأرض يبدأ المستقبل" : "The Future Starts from the Earth"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            className="mt-5 max-w-lg text-sm leading-8 sm:mt-7 sm:text-base sm:leading-9 lg:text-lg"
            style={{ color: `${DARK}E6` }}
          >
            {isArabic
              ? "إحنا فيرمي فالي، شركة من الوادي الجديد بننتج الفيرمي كومبوست ومنتجات حيوية من معالجة المخلفات العضوية باستخدام الديدان."
              : "We are Vermi Valley, a company from New Valley producing vermicompost and bio-based products through organic waste processing using worms."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="mt-7 flex w-full flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
          >
            <motion.a
              href="#products"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{ backgroundColor: DARK, color: CREAM }}
              className="group inline-flex min-h-12 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-black/15 transition-colors hover:!bg-[#315B27] sm:px-8 sm:py-4 sm:text-base"
            >
              {isArabic ? "اكتشف منتجاتنا" : "Explore Our Products"}
              <span
                className={`text-lg transition-transform duration-300 ${
                  isArabic
                    ? "group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              >
                {isArabic ? "←" : "→"}
              </span>
            </motion.a>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{ borderColor: DARK, color: DARK }}
              className="inline-flex min-h-12 items-center gap-2 rounded-full border bg-transparent px-6 py-3 text-sm font-semibold transition-colors hover:!bg-[#11341B] hover:!text-[#F2EEDF] sm:px-8 sm:py-4 sm:text-base"
            >
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </motion.a>
          </motion.div>
        </div>
      </div>

      {SHOW_EXTRAS && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="absolute bottom-[18%] z-10 hidden w-full px-5 sm:block sm:bottom-[20%] sm:px-10 lg:bottom-[11%] lg:px-16 xl:px-20"
        >
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4 lg:gap-x-9">
            {features.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-x-7 lg:gap-x-9"
              >
                <FeatureItem label={item.label} />
                {index !== features.length - 1 && (
                  <span
                    className="h-9 w-px"
                    style={{ backgroundColor: `${DARK}25` }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Hero;
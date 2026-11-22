
import { motion } from "motion/react";

import { useLanguage } from "../Context/languge";
import heroImage from "../../assets/imge/imge hero.jpeg";

import {
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE,
} from "../Data/translations";

/* =========================
   WORD ANIMATION
========================= */

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

/* =========================
   HERO VIDEO PREVIEW
========================= */

function HeroVideoPanel({ isArabic }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isArabic ? -25 : 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.55,
        ease: "easeOut",
      }}
      className="mx-auto w-full min-w-0 max-w-[500px]"
    >
      {/* Video Preview */}

      <div className="relative isolate aspect-video w-full overflow-hidden rounded-2xl border border-[#F2EEDF]/35 bg-[#11341B] shadow-[0_22px_55px_rgba(0,0,0,0.28)] sm:rounded-3xl">

        {/* Temporary Video Background */}

        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#315B27] via-[#11341B] to-[#081D10]" />

          <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#A4D561]/15" />

          <div className="absolute -right-5 -top-12 h-48 w-48 rounded-full border border-[#A4D561]/20" />

          <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full border border-[#A4D561]/15" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[clamp(4rem,10vw,7rem)] font-extrabold text-[#A4D561]/10">
              VV
            </span>
          </div>
        </div>

        {/* Video Information */}

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">

          <span className="mb-3 rounded-full border border-[#A4D561]/35 bg-[#A4D561]/10 px-3 py-1 text-[10px] font-bold tracking-wider text-[#C5E69B] sm:text-xs">
            {isArabic ? "فيرمي فالي" : "VERMI VALLEY"}
          </span>

          <h3 className="text-lg font-extrabold text-[#F2EEDF] sm:text-2xl">
            {isArabic
              ? "نتائج حقيقية في الأرض"
              : "Real Results in the Field"}
          </h3>

          <p className="mt-2 max-w-[85%] text-xs leading-6 text-[#F2EEDF]/75 sm:text-sm">
            {isArabic
              ? "تجارب المزارعين والنتائج قبل وبعد"
              : "Farmers' experiences and before & after results"}
          </p>

          {/* Temporary Play Icon */}

          <div
            aria-hidden="true"
            className="mt-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#F2EEDF]/50 bg-[#A4D561] text-lg text-[#11341B] shadow-lg sm:h-14 sm:w-14 sm:text-xl"
          >
            ▶
          </div>

          <span className="mt-3 text-[10px] font-semibold text-[#C5E69B]/80 sm:text-xs">
            {isArabic ? "الفيديو قريبًا" : "Video coming soon"}
          </span>
        </div>
      </div>

      {/* Video Caption */}

      <div className="mt-3 flex items-center justify-between gap-3 px-1">
        <span className="text-xs font-semibold text-[#F2EEDF] sm:text-sm">
          {isArabic ? "شاهد النتائج والتجارب" : "Watch Results & Experiences"}
        </span>

        <span className="shrink-0 rounded-full border border-[#F2EEDF]/30 px-3 py-1 text-[10px] text-[#F2EEDF]/80 sm:text-xs">
          {isArabic ? "قبل وبعد" : "Before & After"}
        </span>
      </div>
    </motion.div>
  );
}

/* =========================
   MAIN HERO COMPONENT
========================= */

function Hero() {
  const { isArabic } = useLanguage();

  /* WhatsApp Link */

  const phoneNumber = String(WHATSAPP_NUMBER).replace(/\D/g, "");

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#11341B] text-[#F2EEDF]"
    >
      {/* =========================
          BACKGROUND IMAGE
      ========================= */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt={
            isArabic
              ? "الطبيعة والتربة والحياة الزراعية"
              : "Nature, soil and agricultural life"
          }
          className="h-full w-full object-cover object-[62%_center] sm:object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* =========================
          MAIN CONTENT GRID
      ========================= */}

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 items-center px-5 py-28 sm:px-10 sm:py-32 lg:px-16 xl:px-20">

        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">

          {/* =========================
              TEXT CONTENT
          ========================= */}

          <div className="flex w-full min-w-0 flex-col items-start">

            {/* Main Heading */}

            <h1 className="max-w-2xl text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.4] tracking-tight text-[#F2EEDF] drop-shadow-[0_3px_12px_rgba(0,0,0,0.65)]">

              {isArabic ? (
                <>
                  <AnimatedWords words={["من", "الأرض"]} />

                  <span className="mt-1 block text-[#A4D561]">
                    <AnimatedWords
                      words={["ننشىء", "المستقبل"]}
                      startDelay={0.35}
                    />
                  </span>
                </>
              ) : (
                <>
                  <AnimatedWords words={["From", "the", "Earth,"]} />

                  <span className="mt-1 block text-[#A4D561]">
                    <AnimatedWords
                      words={["We", "Create", "the", "Future"]}
                      startDelay={0.5}
                    />
                  </span>
                </>
              )}
            </h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.15,
              }}
              className="mt-5 max-w-xl text-sm leading-8 text-[#F2EEDF] drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] sm:mt-6 sm:text-base sm:leading-9 lg:text-lg"
            >
              {isArabic
                ? "نحوّل المخلفات العضوية إلى قيمة تغذي التربة، وتعزز نمو النباتات، وتساهم في بناء مستقبل زراعي أكثر استدامة."
                : "We transform organic waste into value that nourishes the soil, supports plant growth, and builds a more sustainable agricultural future."}
            </motion.p>

            {/* CTA Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.4,
              }}
              className="mt-7 flex w-full flex-wrap items-center gap-3 sm:mt-8 sm:gap-4"
            >
              {/* Products Button */}

              <motion.a
                href="#products"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#A4D561] px-5 py-3 text-sm font-bold text-[#11341B] shadow-lg shadow-black/20 transition-colors hover:bg-[#F2EEDF] sm:px-7 sm:py-4 sm:text-base"
              >
                {isArabic ? "اكتشف منتجاتنا" : "Explore Our Products"}

                <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                  {isArabic ? "←" : "→"}
                </span>
              </motion.a>

              {/* WhatsApp Button */}

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#F2EEDF]/70 bg-[#11341B] px-5 py-3 text-sm font-bold text-[#F2EEDF] shadow-lg shadow-black/20 transition-colors hover:border-[#A4D561] hover:bg-[#315B27] sm:px-7 sm:py-4 sm:text-base"
              >
                {isArabic ? "تواصل معنا" : "Contact Us"}

                <span aria-hidden="true">↗</span>
              </motion.a>
            </motion.div>
          </div>

          {/* =========================
              VIDEO PREVIEW
          ========================= */}

          <HeroVideoPanel isArabic={isArabic} />
        </div>
      </div>

      {/* =========================
          SCROLL INDICATOR
      ========================= */}

      <motion.a
        href="#about"
        aria-label={isArabic ? "اكتشف المزيد" : "Discover more"}
        initial={{ opacity: 0, y: 6 }}
        animate={{
          opacity: 1,
          y: [0, 5, 0],
        }}
        transition={{
          opacity: {
            delay: 1.6,
            duration: 0.7,
          },
          y: {
            delay: 1.6,
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative z-10 mx-auto mb-5 flex shrink-0 flex-col items-center gap-2 px-4 text-[#F2EEDF] drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] sm:mb-7"
      >
        <span className="text-[10px] font-semibold tracking-[0.18em] sm:text-xs">
          {isArabic ? "اكتشف المزيد" : "SCROLL TO EXPLORE"}
        </span>

        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-[#A4D561] p-1 sm:h-9 sm:w-6">
          <span className="h-2 w-1 rounded-full bg-[#A4D561]" />
        </span>
      </motion.a>

      {/* =========================
          BOTTOM ACCENT
      ========================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#A4D561]/80 to-transparent" />
    </section>
  );
}

export default Hero;

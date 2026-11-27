
import { motion } from "motion/react";
import { useLanguage } from "../component/Context/languge";
import Hero from "../component/Hero/Hero";
import OurStory from "../component/OurStor/OurStor";
import ProductionJourney from "../component/ProductionJourney/ProductionJourney";
import HomeIntro from "../component/HomeIntro/HomeIntro";
// Images
import pattern from "../assets/imge/vv pattern 1.png";
import recycleIcon from "../assets/imge/recycle.svg";
import soilIcon from "../assets/imge/element -2.svg";
import globeIcon from "../assets/imge/globe.svg";
import supportIcon from "../assets/imge/support.svg";
import compostIcon from "../assets/imge/element -2.svg";
import wormIcon from "../assets/imge/worm.svg";

// Arabic and English logos
import vermiLogoArabic from "../assets/imge/logo ar v1 dark.svg";
import vermiLogoEnglish from "../assets/imge/logo en v1 dark.svg";

// Animation variants
const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const headingWord = {
  hidden: {
    opacity: 0,
    y: -18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animated heading
function AnimatedHeading({ text, featured = false, className = "" }) {
  const words = text.split(" ");

  return (
    <motion.h2
      variants={headingContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      aria-label={text}
      className={className}
    >
      {words.map((word, index) => {
        const highlighted = featured && index >= words.length - 2;

        return (
          <motion.span
            key={`${word}-${index}`}
            variants={headingWord}
            aria-hidden="true"
            className={`inline-block ${
              highlighted ? "text-[#668F3B]" : ""
            }`}
          >
            {word}
            {index !== words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        );
      })}
    </motion.h2>
  );
}

// Animated description
function AnimatedDescription({ children, className = "" }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className={className}
    >
      {children}
    </motion.p>
  );
}

// Section title
function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
  featured = false,
}) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 block text-sm font-bold tracking-widest text-[#668F3B]"
        >
          {eyebrow}
        </motion.span>
      )}

      <AnimatedHeading
        text={title}
        featured={featured}
        className={`text-3xl font-extrabold leading-relaxed sm:text-4xl lg:text-5xl ${
          light ? "text-[#F2EEDF]" : "text-[#11341B]"
        }`}
      />

      {description && (
        <AnimatedDescription
          className={`mt-5 text-base leading-8 ${
            light ? "text-[#F2EEDF]/70" : "text-[#526457]"
          }`}
        >
          {description}
        </AnimatedDescription>
      )}
    </div>
  );
}

// Light moving background pattern
function PatternBackground({ className = "" }) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.12 }}
      viewport={{ once: true }}
      animate={{
        backgroundPosition: ["0px 0px", "80px 50px"],
      }}
      transition={{
        backgroundPosition: {
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        },
        opacity: {
          duration: 1,
        },
      }}
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `url("${pattern}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "280px",
      }}
    />
  );
}

// Water drop icon
function WaterDropIcon() {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      className="h-16 w-16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d="M32 6C32 6 12 29 12 42C12 53.046 20.954 58 32 58C43.046 58 52 53.046 52 42C52 29 32 6 32 6Z"
        stroke="#A4D561"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 42C22 47.523 26.477 51 32 51"
        stroke="#A4D561"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

// Hero branches - adjusted size and darker colors
function HeroBranches({ ar }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-full z-20 h-20 sm:h-28 lg:h-36"
    >
      <motion.svg
        viewBox="0 0 1400 220"
        preserveAspectRatio="none"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`absolute inset-0 h-full w-full ${
          ar ? "-scale-x-100" : ""
        }`}
      >
        {/* Light green branch near the image */}
        <path
          d="M1090 0 L1440 0 L1440 150 C1340 170 1240 140 1170 90 C1140 66 1115 36 1090 0 Z"
          fill="#668F3B"
        />

        {/* Dark green branch near the text */}
        <path
          d="M0 0 L500 0 C460 45 400 85 320 110 C220 140 110 128 0 165 Z"
          fill="#11341B"
        />
      </motion.svg>
    </div>
  );
}

function Home() {
  const { isArabic } = useLanguage();
  const ar = isArabic;

  const lightGreenFilter =
    "brightness(0) saturate(100%) invert(78%) sepia(25%) saturate(650%) hue-rotate(42deg) brightness(95%)";

  const impactItems = [
    {
      icon: recycleIcon,
      lightIcon: true,
      title: ar ? "إعادة التدوير" : "Recycling",
      text: ar
        ? "تحويل المخلفات العضوية إلى قيمة."
        : "Turning organic waste into value.",
    },
    {
      icon: soilIcon,
      lightIcon: false,
      title: ar ? "خصوبة التربة" : "Soil Health",
      text: ar
        ? "تقديم منتجات حيوية تخدم التربة."
        : "Bio-based products for the soil.",
    },
    {
      icon: globeIcon,
      lightIcon: true,
      title: ar ? "الاستدامة" : "Sustainability",
      text: ar
        ? "دعم ممارسات أكثر استدامة."
        : "Supporting sustainable practices.",
    },
    {
      icon: supportIcon,
      lightIcon: true,
      title: ar ? "دعم المجتمع" : "Community",
      text: ar
        ? "دعم الأفكار والمشروعات الناشئة."
        : "Supporting emerging ideas and projects.",
    },
  ];

  const products = [
    {
      name: "Vermi Compost",
      desc: ar ? "فيرمي كومبوست" : "Organic soil amendment",
      icon: compostIcon,
    },
    {
      name: "Vermi Tea",
      desc: ar ? "مخصب حيوي سائل" : "Liquid biofertilizer",
      icon: null,
    },
    {
      name: ar ? "ديدان الفيرمي" : "Vermi Worms",
      desc: ar
        ? "ديدان متخصصة في المعالجة"
        : "Specialized composting worms",
      icon: wormIcon,
    },
  ];

  return (
    <main dir={ar ? "rtl" : "ltr"} className="overflow-hidden">
      {/* 1. HERO + BRANCHES */}
      <div className="relative">
        <Hero />
        <HomeIntro />
        <HeroBranches ar={ar} />
      </div>

      {/* 2. OUR STORY */}
      <OurStory />

      {/* 3. PRODUCTION JOURNEY */}
      <ProductionJourney />

      {/* 4. OUR IMPACT */}
      <section className="relative overflow-hidden bg-[#F2EEDF] px-5 py-24 sm:px-10 lg:px-20">
        <PatternBackground />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <SectionTitle
            title={
              ar
                ? "أثر يبدأ من التربة ويمتد للمجتمع"
                : "An Impact That Goes Beyond Soil"
            }
            description={
              ar
                ? "نؤمن أن الاستدامة تبدأ من الاستخدام الأفضل للموارد، وتمتد إلى دعم الزراعة والمجتمع."
                : "We believe sustainability begins with better resource use and extends to agriculture and communities."
            }
          />

          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.13,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 text-start sm:grid-cols-2 lg:grid-cols-4"
          >
            {impactItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardAnimation}
                whileHover={{
                  y: -9,
                  scale: 1.025,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-[#D9DEC9] bg-white/90 p-7 transition-colors duration-300 hover:border-[#A4D561]"
              >
                <div className="mb-5 flex h-16 items-center">
                  <motion.img
                    src={item.icon}
                    alt=""
                    className="h-14 w-14 object-contain"
                    style={{
                      filter: item.lightIcon
                        ? lightGreenFilter
                        : "none",
                    }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.25,
                    }}
                  />
                </div>

                <h3 className="mb-3 text-xl font-extrabold text-[#11341B]">
                  {item.title}
                </h3>

                <p className="leading-7 text-[#526457]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. PRODUCTS */}
      <section
        id="products"
        className="relative overflow-hidden bg-[#F2EEDF] px-5 py-24 sm:px-10 lg:px-20"
      >
        <PatternBackground />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={ar ? "منتجاتنا" : "OUR PRODUCTS"}
            title={
              ar
                ? "حلول حيوية تبدأ من الطبيعة"
                : "Bio-based Solutions from Nature"
            }
            description={
              ar
                ? "اكتشف منتجات Vermi Valley وتعرّف على الخيارات المتاحة لخدمة أرضك."
                : "Explore Vermi Valley products and discover options for your land."
            }
            featured
          />

          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                variants={cardAnimation}
                whileHover={{
                  y: -10,
                  scale: 1.025,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-[#D9DEC9] bg-white/90 p-8 transition-colors duration-300 hover:border-[#A4D561]"
              >
                <div className="mb-8 flex h-16 items-center">
                  {product.icon ? (
                    <motion.img
                      src={product.icon}
                      alt=""
                      className="h-16 w-16 object-contain"
                      style={{ filter: lightGreenFilter }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    />
                  ) : (
                    <WaterDropIcon />
                  )}
                </div>

                <h3 className="text-2xl font-extrabold text-[#11341B]">
                  {product.name}
                </h3>

                <p className="mt-3 text-[#526457]">
                  {product.desc}
                </p>

                <a
                  href="/products"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-[#668F3B] transition hover:text-[#11341B]"
                >
                  {ar ? "اعرف المزيد" : "Learn More"} ←
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="relative overflow-hidden bg-[#A4D561] px-5 py-24 text-center sm:px-10">
        <PatternBackground />

        <div className="relative z-10 mx-auto max-w-3xl">
          <motion.img
            src={ar ? vermiLogoArabic : vermiLogoEnglish}
            alt="Vermi Valley"
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-8 h-20 w-auto object-contain"
          />

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm font-extrabold tracking-widest text-[#11341B]"
          >
            VERMI VALLEY
          </motion.span>

          <AnimatedHeading
            text={
              ar
                ? "رحلتنا مستمرة... ونحب تكون جزء منها"
                : "Our Journey Continues. Be Part of It."
            }
            className="mt-5 text-3xl font-extrabold leading-relaxed text-[#11341B] sm:text-5xl"
          />

          <AnimatedDescription className="mt-5 leading-8 text-[#11341B]">
            {ar
              ? "تعرّف على منتجاتنا، شاهد التجارب، أو تواصل مع فريقنا."
              : "Explore our products, discover our work, or get in touch."}
          </AnimatedDescription>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="/products"
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl bg-[#11341B] px-8 py-4 font-bold text-[#F2EEDF] transition hover:bg-[#315B27]"
            >
              {ar ? "اكتشف المنتجات" : "Explore Products"}
            </motion.a>

            <motion.a
              href="https://wa.me/201282111101"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl border-2 border-[#11341B] px-8 py-4 font-bold text-[#11341B] transition hover:bg-white/40"
            >
              {ar ? "تواصل معنا" : "Contact Us"}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Home;

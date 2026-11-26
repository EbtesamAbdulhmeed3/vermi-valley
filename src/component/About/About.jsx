import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useLanguage } from "../../component/Context/languge";
import { WHATSAPP_NUMBER } from "../../component/Data/translations";
import heroPattern from "../../assets/imge/vv pattern 1.png";

// تحميل الصور المحلية تلقائيًا مهما كان امتدادها
const localImages = import.meta.glob("../../assets/imge/*", {
  eager: true,
  import: "default",
});

function getLocalImage(imageName) {
  const found = Object.entries(localImages).find(([path]) => {
    const fileName = path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "")
      .toLowerCase();
    return fileName === imageName.toLowerCase();
  });
  return found ? found[1] : null;
}

const galleryImages = Array.from({ length: 10 }, (_, index) => ({
  src: getLocalImage(`loction${index + 1}`),
}));

const managerImage = getLocalImage("manager");

// محتوى الصفحة بالعربي والإنجليزي
const CONTENT = {
  ar: {
    eyebrow: "تعرف على فيرمي فالي",
    title: "من الأرض ننشئ المستقبل",
    location: "مركز الخارجة، الوادي الجديد",
    intro:
      "فيرمي فالي لإنتاج الفيرمي كومبوست شركة مقرها مركز الخارجة بمحافظة الوادي الجديد، تعمل على تحويل المخلفات العضوية إلى منتجات وحلول حيوية تخدم خصوبة التربة والزراعة المستدامة.",
    story:
      "بدأت رحلتنا من أرض زراعية وتجربة واقعية مع تحديات التربة والأسمدة. ومن هنا جاءت الفكرة: كيف يمكن تحويل المخلفات العضوية إلى قيمة حقيقية تخدم الأرض والمزارع والبيئة؟",
    story2:
      "يتجاوز توجه الشركة إنتاج السماد العضوي إلى بناء منظومة تجمع بين إعادة تدوير المخلفات، ودعم الزراعة النظيفة، ونشر المعرفة الزراعية، وتهيئة بيئة تساعد الأفكار والشركات الناشئة في الوادي الجديد على النمو.",
    imageLabel: "الزراعة المستدامة تبدأ من الأرض",

    beliefEyebrow: "ما الذي نؤمن به؟",
    beliefTitle: "قيمنا هي أساس كل خطوة",
    beliefText:
      "نعمل وفق رؤية واضحة تجمع بين حماية البيئة، ودعم المزارع، وتحقيق قيمة حقيقية من الموارد المتاحة.",
    vision: "رؤيتنا",
    visionText:
      "الوصول إلى أفضل استخدام ممكن للمخلفات بأقل تأثير سلبي على البيئة.",
    mission: "رسالتنا",
    missionText:
      "نشر ثقافة إعادة تدوير المخلفات والوعي بأهمية الزراعة العضوية والزراعات المستدامة، وتوفير الأسمدة العضوية بأسعار مناسبة ومنافسة للأسمدة الكيميائية.",
    goal: "هدفنا",
    goalText:
      "توفير احتياجات المزارعين من الأسمدة العضوية، ونشر ثقافة الزراعة المستدامة، ورفع المستوى الصحي والمعيشي للمزارعين، وتقليل استخدام الأسمدة الكيميائية.",

    previous: "السابق",
    next: "التالي",
    journeyEyebrow: "خطوات نحو المستقبل",
    journey: "رحلتنا في تطور مستمر",
    journeyText:
      "من الفكرة إلى العمل على أرض الواقع، محطات متتابعة من التعلم والتطوير وبناء الشراكات.",
    stages: [
      {
        number: "01",
        title: "الجوائز والتكريمات",
        desc: "الجوائز والمراكز والاختيارات الرسمية التي تعكس تطور الشركة.",
      },
      {
        number: "02",
        title: "بناء القدرات",
        desc: "التدريب والدعم الفني وتطوير الأعمال والمهارات.",
      },
      {
        number: "03",
        title: "المعارض والمشاركات",
        desc: "الحضور الميداني وعرض المنتجات والتواصل مع شركاء القطاع.",
      },
      {
        number: "04",
        title: "التوسع والنمو",
        desc: "محطات تطور الشركة ونمو المشروع وبناء فرص جديدة.",
      },
    ],

    siteEyebrow: "من قلب موقعنا",
    siteTitle: "رحلة العمل على أرض الواقع",
    siteText:
      "لقطات حقيقية من مراحل تجهيز موقع فيرمي فالي واستقبال المعدات وتجهيز وحدات التشغيل والاستعداد للإطلاق التجريبي.",
    galleryLabel: [
      "تجهيز الموقع وتهيئة مناطق التشغيل",
      "إنزال وتركيب معدات تجهيز المخلفات",
      "تجهيز هياكل الصوب بالموقع",
      "استقبال وتجهيز المخلفات العضوية",
      "تجميع المخلفات تمهيدًا للمعالجة",
      "عمليات تجهيز الموقع والمخلفات",
      "زيارة وفد جسر وGIZ للموقع الرئيسي",
      "إنزال المعدات وتجهيزها للتشغيل",
      "تجهيز وحدات التشغيل والصوب",
      "الاستعدادات الميدانية للإطلاق التجريبي",
    ],
    temporary: "من مراحل تجهيز الموقع",

    managementEyebrow: "الأشخاص وراء الرؤية",
    management: "رؤية تقود التوسع",
    managementLabel: "إدارة الشركة",
    manager: "محمد أبو عقيل",
    role: "مدير شركة فيرمي فالي لإنتاج الفيرمي كومبوست",
    managerText:
      "يقود توجه Vermi Valley نحو التوسع من نشاط إنتاج الفيرمي كومبوست إلى منظومة أشمل تربط إدارة المخلفات بالزراعة المستدامة ودعم ريادة الأعمال في الوادي الجديد.",
    expansion:
      "تعمل الشركة حاليًا على تطوير موقعها الجديد بمساحة 21 ألف متر مربع، مع تخصيص نحو 5 آلاف متر مربع لمنطقة مبانٍ تستهدف استيعاب ما بين 7 و10 شركات ناشئة، وتوفير أماكن لها مجانًا لمدة عام ضمن توجه الشركة لدعم رواد الأعمال بالمحافظة.",
    area: "مساحة الموقع الجديد",
    buildings: "مساحة منطقة المباني",
    startups: "شركات ناشئة مستهدفة",
    support: "دعم مجاني لمدة",
    year: "عام",

    ctaEyebrow: "لنصنع أثرًا معًا",
    cta: "المستقبل يبدأ بخطوة",
    ctaText:
      "سواء كنت مزارعًا أو شريكًا أو صاحب فكرة، يسعدنا التواصل معك والتعرف على ما يمكننا تحقيقه معًا.",
    whatsapp: "تواصل معنا عبر واتساب",
    call: "اتصل بنا",
    whatsappMessage: "مرحباً، أريد معرفة المزيد عن شركة Vermi Valley.",
  },

  en: {
    eyebrow: "Get to know Vermi Valley",
    title: "From Earth, We Create the Future",
    location: "El Kharga, New Valley",
    intro:
      "Vermi Valley is based in El Kharga, New Valley Governorate. The company transforms organic waste into biological products and solutions that support soil fertility and sustainable agriculture.",
    story:
      "Our journey began with agricultural land and real experience with soil and fertilizer challenges. This raised an important question: how can organic waste become real value for the land, farmers, and the environment?",
    story2:
      "Our vision goes beyond producing organic fertilizer. We are building an ecosystem that combines waste recycling, clean agriculture, agricultural knowledge, and an environment that helps startups and ideas grow in New Valley.",
    imageLabel: "Sustainable agriculture starts with the soil",

    beliefEyebrow: "What we believe",
    beliefTitle: "Our Values Shape Every Step",
    beliefText:
      "We work with a clear vision that brings together environmental protection, farmer support, and the responsible use of resources.",
    vision: "Our Vision",
    visionText:
      "Achieving the best possible use of waste with the least negative environmental impact.",
    mission: "Our Mission",
    missionText:
      "Promoting waste recycling and awareness of organic and sustainable agriculture, while providing organic fertilizers at suitable and competitive prices.",
    goal: "Our Goal",
    goalText:
      "Meeting farmers' organic fertilizer needs, promoting sustainable agriculture, improving farmers' well-being, and reducing reliance on chemical fertilizers.",

    previous: "Previous",
    next: "Next",
    journeyEyebrow: "Our milestones",
    journey: "A Journey of Continuous Growth",
    journeyText:
      "From an idea to real-world operations, a series of milestones in learning, development, and partnerships.",
    stages: [
      {
        number: "01",
        title: "Awards & Recognition",
        desc: "Awards, rankings, and official recognition reflecting the company's progress.",
      },
      {
        number: "02",
        title: "Capacity Building",
        desc: "Training, technical support, business development, and skills.",
      },
      {
        number: "03",
        title: "Exhibitions & Events",
        desc: "Field presence, product showcases, and industry networking.",
      },
      {
        number: "04",
        title: "Expansion & Growth",
        desc: "Company milestones, project growth, and new opportunities.",
      },
    ],

    siteEyebrow: "Behind the scenes",
    siteTitle: "Our Work on the Ground",
    siteText:
      "Real moments from Vermi Valley's site preparation, equipment installation, operating units, and preparations for the pilot launch.",
    galleryLabel: [
      "Preparing the site and operating areas",
      "Installing waste-processing equipment",
      "Preparing greenhouse structures",
      "Receiving and preparing organic waste",
      "Collecting waste before processing",
      "Site and waste preparation operations",
      "Jisr and GIZ delegation visit",
      "Preparing equipment for operation",
      "Preparing operating units and greenhouses",
      "Field preparations for the pilot launch",
    ],
    temporary: "Our work in progress",

    managementEyebrow: "The people behind the vision",
    management: "A Vision for Growth",
    managementLabel: "Company management",
    manager: "Mohamed Abu Aqeel",
    role: "Manager of Vermi Valley",
    managerText:
      "He leads Vermi Valley's expansion from vermicompost production towards a broader ecosystem connecting waste management, sustainable agriculture, and entrepreneurship support in New Valley.",
    expansion:
      "The company is developing a new 21,000 m² site, including around 5,000 m² for buildings designed to accommodate 7 to 10 startups, offering them free space for one year to support local entrepreneurs.",
    area: "New site area",
    buildings: "Building area",
    startups: "Target startups",
    support: "Free support for",
    year: "year",

    ctaEyebrow: "Let's make an impact",
    cta: "The Future Starts with One Step",
    ctaText:
      "Whether you are a farmer, partner, or entrepreneur, we would love to hear from you and explore what we can achieve together.",
    whatsapp: "Contact us on WhatsApp",
    call: "Call us",
    whatsappMessage: "Hello, I would like to know more about Vermi Valley.",
  },
};

/* ---------- عناصر مساعدة ---------- */

function Reveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ملاحظة: لا نستخدم tracking/uppercase مع العربي لأنه بيفصل الحروف المتصلة
function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center text-sm font-black ${
        light ? "text-[#A4D561]" : "text-[#5D852E]"
      }`}
    >
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, text, light = false, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-5 text-3xl font-extrabold leading-[1.35] md:text-5xl md:leading-[1.3] ${
          light ? "text-[#F2EEDF]" : "text-[#11341B]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-5 leading-9 ${
            light ? "text-[#F2EEDF]/75" : "text-[#11341B]/70"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function CountUp({ to, duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (reduce) {
      setValue(to);
      return;
    }
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("en-US")}
    </span>
  );
}

/* ---------- معرض الصور: صورة رئيسية + شريط مصغرات ---------- */

function Gallery({ items, isArabic, t }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const rootRef = useRef(null);
  const thumbsRef = useRef(null);
  const thumbRefs = useRef([]);
  const count = items.length;
  const reduce = useReducedMotion();

  // التشغيل التلقائي بيشتغل بس لما المعرض ظاهر على الشاشة
  const inView = useInView(rootRef, { amount: 0.4 });

  useEffect(() => {
    if (reduce || isPaused || !inView || count < 2) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 4500);
    return () => clearInterval(timer);
  }, [count, isPaused, inView, reduce]);

  // تحريك شريط المصغرات أفقيًا فقط (بدون scrollIntoView عشان ما يسحبش الصفحة)
  useEffect(() => {
    const container = thumbsRef.current;
    const el = thumbRefs.current[index];
    if (!container || !el) return;
    const c = container.getBoundingClientRect();
    const e = el.getBoundingClientRect();
    const delta = e.left + e.width / 2 - (c.left + c.width / 2);
    container.scrollBy({ left: delta, behavior: reduce ? "auto" : "smooth" });
  }, [index, reduce]);

  if (!count) return null;

  const go = (step) => setIndex((c) => (c + step + count) % count);
  const dir = isArabic ? -1 : 1;
  const current = items[index];

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") go(isArabic ? -1 : 1);
    if (e.key === "ArrowLeft") go(isArabic ? 1 : -1);
  };

  const arrowBtn =
    "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#11341B]/70 text-2xl text-[#F2EEDF] backdrop-blur-sm transition-colors hover:bg-[#A4D561] hover:text-[#11341B]";

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      role="group"
      aria-roledescription="carousel"
      className="rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-[#A4D561]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#315B27]/40 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:aspect-[16/9]">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={current.src}
            alt={current.label}
            draggable={false}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              const d = info.offset.x * dir;
              if (d < -60) go(1);
              else if (d > 60) go(-1);
            }}
            className="absolute inset-0 h-full w-full cursor-grab touch-pan-y object-cover active:cursor-grabbing"
          />
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#11341B]/90 via-[#11341B]/10 to-transparent" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 md:p-8">
          <div className="max-w-xl">
            <span className="text-sm font-bold text-[#A4D561]">
              {t.temporary}
            </span>
            <h3 className="mt-2 text-xl font-extrabold leading-8 text-[#F2EEDF] md:text-3xl md:leading-[1.4]">
              {current.label}
            </h3>
          </div>
          <span className="shrink-0 rounded-full bg-[#11341B]/60 px-3 py-1 text-sm font-bold tabular-nums text-[#F2EEDF] backdrop-blur-sm">
            {index + 1} / {count}
          </span>
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={t.previous}
          className={`${arrowBtn} start-3`}
        >
          {isArabic ? "→" : "←"}
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={t.next}
          className={`${arrowBtn} end-3`}
        >
          {isArabic ? "←" : "→"}
        </button>
      </div>

      <div
        ref={thumbsRef}
        className="mt-4 flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, k) => (
          <button
            key={k}
            type="button"
            ref={(el) => (thumbRefs.current[k] = el)}
            onClick={() => setIndex(k)}
            aria-label={item.label}
            aria-current={k === index}
            className={`relative h-16 w-24 shrink-0 snap-start overflow-hidden rounded-xl transition-all duration-300 md:h-20 md:w-32 ${
              k === index
                ? "opacity-100 ring-2 ring-[#A4D561]"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            <img
              src={item.src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- الصفحة ---------- */

function About() {
  const { isArabic } = useLanguage();
  const t = isArabic ? CONTENT.ar : CONTENT.en;
  const direction = isArabic ? "rtl" : "ltr";
  const reduce = useReducedMotion();

  const [activePillar, setActivePillar] = useState(0);

  // أول ما الصفحة تفتح تبدأ من فوق
  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const goTop = () =>
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    goTop();
    const frame = requestAnimationFrame(goTop);

    return () => {
      cancelAnimationFrame(frame);
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  // Parallax خفيف لصورة المقدمة (على عنصر منفصل عن أنيميشن الظهور)
  const introImageRef = useRef(null);
  const { scrollYProgress: introProgress } = useScroll({
    target: introImageRef,
    offset: ["start end", "end start"],
  });
  const introImageY = useTransform(introProgress, [0, 1], ["-5%", "5%"]);

  // خط الرحلة بيترسم مع التمرير
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"],
  });
  const lineScale = useTransform(timelineProgress, [0, 1], [0, 1]);

  const phoneNumber = String(WHATSAPP_NUMBER).replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    t.whatsappMessage
  )}`;
  const phoneLink = `tel:${phoneNumber}`;

  const pillars = [
    { title: t.vision, desc: t.visionText },
    { title: t.mission, desc: t.missionText },
    { title: t.goal, desc: t.goalText },
  ];

  const galleryItems = galleryImages
    .map((image, index) => ({ ...image, label: t.galleryLabel[index] }))
    .filter((image) => image.src);

  const stats = [
    { id: "area", node: <CountUp to={21000} />, suffix: "m²", label: t.area },
    { id: "buildings", node: <CountUp to={5000} />, suffix: "m²", label: t.buildings },
    {
      id: "startups",
      node: (
        <>
          <CountUp to={7} />–<CountUp to={10} />
        </>
      ),
      suffix: "",
      label: t.startups,
    },
    { id: "support", node: <CountUp to={1} />, suffix: t.year, label: t.support },
  ];

  return (
    <main
      id="about"
      dir={direction}
      className="relative isolate overflow-hidden bg-[#F2EEDF] text-[#11341B]"
    >
      {/* Brand Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-1] opacity-[0.09]"
        style={{
          backgroundImage: `url("${heroPattern}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "480px",
          backgroundPosition: "center top",
        }}
      />

      {/* 1) INTRO */}
      <section className="px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <Reveal>
              <Eyebrow>{t.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.3] md:text-6xl md:leading-[1.25]">
                {t.title}
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#5D852E]/30 bg-[#A4D561]/30 px-4 py-2 text-sm font-bold text-[#315B27]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                {t.location}
              </span>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-8 max-w-xl text-lg font-semibold leading-9 text-[#11341B]">
                {t.intro}
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 max-w-xl space-y-5 border-s-2 border-[#A4D561] ps-6">
                <p className="leading-9 text-[#11341B]/80">{t.story}</p>
                <p className="leading-9 text-[#11341B]/80">{t.story2}</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -end-4 h-full w-full rounded-[32px] border-2 border-[#A4D561]"
              />
              <div
                ref={introImageRef}
                className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#315B27] shadow-[0_24px_70px_rgba(17,52,27,0.22)]"
              >
                {galleryImages[0].src ? (
                  <motion.img
                    src={galleryImages[0].src}
                    alt={t.imageLabel}
                    style={reduce ? undefined : { y: introImageY, scale: 1.12 }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center font-bold text-[#F2EEDF]">
                    Vermi Valley
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#11341B]/85 via-transparent to-transparent" />

                <p className="absolute inset-x-0 bottom-0 p-6 text-xl font-extrabold leading-8 text-[#F2EEDF] md:p-8 md:text-2xl">
                  {t.imageLabel}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2) VISION / MISSION / GOAL — الثلاثة ظاهرين، والنص بيتفتح عند الاختيار */}
      <section className="bg-[#11341B] px-5 py-20 text-[#F2EEDF] md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow light>{t.beliefEyebrow}</Eyebrow>
            <h2 className="mt-6 text-3xl font-extrabold leading-[1.3] md:text-5xl">
              {t.beliefTitle}
            </h2>
            <p className="mt-6 max-w-md leading-9 text-[#F2EEDF]/80">
              {t.beliefText}
            </p>
          </Reveal>

          <div role="list">
            {pillars.map((pillar, i) => {
              const open = activePillar === i;
              return (
                <div
                  key={pillar.title}
                  role="listitem"
                  className="border-t border-[#F2EEDF]/20 last:border-b"
                >
                  <button
                    type="button"
                    onClick={() => setActivePillar(i)}
                    aria-expanded={open}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-start"
                  >
                    <span
                      className={`text-3xl font-extrabold transition-colors duration-300 md:text-5xl ${
                        open
                          ? "text-[#A4D561]"
                          : "text-[#F2EEDF]/55 group-hover:text-[#F2EEDF]"
                      }`}
                    >
                      {pillar.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-2xl leading-none transition-all duration-300 ${
                        open
                          ? "rotate-45 border-[#A4D561] bg-[#A4D561] text-[#11341B]"
                          : "border-[#F2EEDF]/40 text-[#F2EEDF] group-hover:border-[#A4D561]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 text-lg leading-9 text-[#F2EEDF]/90">
                          {pillar.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3) JOURNEY — خط عمودي بيترسم مع التمرير */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <SectionHead
              eyebrow={t.journeyEyebrow}
              title={t.journey}
              text={t.journeyText}
            />
          </Reveal>

          <div ref={timelineRef} className="relative">
            <div className="absolute bottom-0 start-6 top-0 w-px bg-[#5D852E]/25" />
            <motion.div
              style={{ scaleY: reduce ? 1 : lineScale, transformOrigin: "top" }}
              className="absolute bottom-0 start-6 top-0 w-px bg-[#5D852E]"
            />

            <ol className="space-y-8">
              {t.stages.map((stage) => (
                <li key={stage.number} className="relative ps-20">
                  <motion.span
                    initial={reduce ? false : { backgroundColor: "#F2EEDF" }}
                    whileInView={{ backgroundColor: "#A4D561" }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="absolute start-0 top-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#5D852E] text-sm font-extrabold text-[#11341B]"
                  >
                    {stage.number}
                  </motion.span>

                  <Reveal>
                    <div className="rounded-2xl border border-[#11341B]/10 bg-[#FAF8F1] p-6 shadow-[0_10px_30px_rgba(17,52,27,0.06)]">
                      <h3 className="text-xl font-extrabold text-[#315B27] md:text-2xl">
                        {stage.title}
                      </h3>
                      <p className="mt-3 max-w-lg leading-8 text-[#11341B]/75">
                        {stage.desc}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 4) GALLERY */}
      <section className="bg-[#11341B] px-5 py-20 text-[#F2EEDF] md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12">
            <SectionHead
              light
              eyebrow={t.siteEyebrow}
              title={t.siteTitle}
              text={t.siteText}
            />
          </Reveal>

          <Reveal>
            <Gallery items={galleryItems} isArabic={isArabic} t={t} />
          </Reveal>
        </div>
      </section>

      {/* 5) MANAGEMENT */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12">
            <SectionHead eyebrow={t.managementEyebrow} title={t.management} />
          </Reveal>

          <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <Reveal>
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-3 rounded-[28px] border border-[#A4D561]/70" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#A4D561] shadow-[0_20px_60px_rgba(17,52,27,0.18)]">
                  {managerImage ? (
                    <img
                      src={managerImage}
                      alt={t.manager}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-5xl font-extrabold">
                      VV
                    </div>
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-[#11341B]/10 bg-[#FAF8F1] p-7 shadow-[0_14px_40px_rgba(17,52,27,0.07)] md:p-10">
                <span className="text-sm font-bold text-[#5D852E]">
                  {t.managementLabel}
                </span>
                <h3 className="mt-3 text-3xl font-extrabold md:text-4xl">
                  {t.manager}
                </h3>
                <p className="mt-2 font-semibold text-[#315B27]">{t.role}</p>

                <div className="my-7 h-px w-full max-w-md bg-[#A4D561]" />

                <p className="max-w-2xl text-lg leading-9 text-[#11341B]/90">
                  {t.managerText}
                </p>
                <p className="mt-5 max-w-2xl leading-9 text-[#11341B]/75">
                  {t.expansion}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6) STATS */}
      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-3xl bg-[#A4D561] p-6 md:p-8"
            >
              <p className="text-3xl font-extrabold text-[#11341B] md:text-5xl">
                {stat.node}
                {stat.suffix && (
                  <span className="ms-2 text-base font-bold md:text-lg">
                    {stat.suffix}
                  </span>
                )}
              </p>
              <p className="mt-3 text-sm font-bold leading-6 text-[#11341B]/80 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7) CTA */}
      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-[#11341B] px-6 py-16 text-center text-[#F2EEDF] md:px-16 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("${heroPattern}")`,
              backgroundSize: "360px",
            }}
          />
          <div className="relative">
            <div className="flex justify-center">
              <Eyebrow light>{t.ctaEyebrow}</Eyebrow>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold leading-[1.35] md:text-5xl md:leading-[1.3]">
              {t.cta}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-9 text-[#F2EEDF]/80">
              {t.ctaText}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 rounded-full bg-[#A4D561] px-7 py-4 font-extrabold text-[#11341B] shadow-lg transition-colors duration-300 hover:bg-[#F2EEDF]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.2A8.4 8.4 0 1 1 21 11.5Z" />
                  <path d="M8.5 8.5c.3 2.1 2.2 4 4.3 4.3" />
                </svg>
                {t.whatsapp}
                <span aria-hidden="true">↗</span>
              </motion.a>

              <motion.a
                href={phoneLink}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 rounded-full border border-[#A4D561] bg-transparent px-7 py-4 font-extrabold text-[#F2EEDF] transition-colors duration-300 hover:bg-[#A4D561] hover:text-[#11341B]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3h2A1.5 1.5 0 0 1 10 4.2l.7 3a1.5 1.5 0 0 1-.7 1.6l-1.4.9a14 14 0 0 0 5.7 5.7l.9-1.4a1.5 1.5 0 0 1 1.6-.7l3 .7a1.5 1.5 0 0 1 1.2 1.5v2A1.5 1.5 0 0 1 19.5 19C10.4 19 5 13.6 5 4.5Z" />
                </svg>
                {t.call}
              </motion.a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default About;
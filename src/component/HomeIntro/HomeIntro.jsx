import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useLanguage } from "../Context/languge";

import sectionImage from "../../assets/imge/section 1.png";
import dotsPattern from "../../assets/imge/vv pattern 1.png";

const AUTOPLAY_MS = 3000;

// TODO: ضيفي صورة لكل خطوة هنا (نفس ترتيب الخطوات). لو فاضية بيستخدم الصورة العامة.
const stepImages = [];

function HomeIntro() {
  const { isArabic } = useLanguage();
  const reduceMotion = useReducedMotion();

  const [[activeStep, direction], setStep] = useState([0, 1]);
  const [autoPlay, setAutoPlay] = useState(true);

  // الأوتوبلاي يشتغل بس لما قسم الخطوات ظاهر على الشاشة
  const guideRef = useRef(null);
  const guideInView = useInView(guideRef, { amount: 0.5 });

  const guideSteps = isArabic
    ? [
        { title: "ابدأ من الصفحة الرئيسية", description: "من هنا تقدر تبدأ جولتك وتتعرف على فيرمي فالي والأقسام الموجودة في الموقع." },
        { title: "اتعرف على فيرمي فالي", description: "ادخل على صفحة عن فيرمي فالي واعرف إحنا مين، وبنشتغل إزاي." },
        { title: "اكتشف منتجاتنا", description: "اتصفح المنتجات وشوف المعلومات والتفاصيل الخاصة بكل منتج." },
        { title: "اعرف أكتر عن المنتجات", description: "اقرأ المعلومات المتاحة علشان تتعرف على المنتجات واستخداماتها." },
        { title: "اتعلم من فيرمي", description: "اكتشف المعلومات والمقالات اللي بتساعدك تفهم أكتر عن التربة والمنتجات." },
        { title: "شوف تجارب المنتجات", description: "اتفرج على تجارب استخدام المنتجات وشوف النتائج المعروضة." },
        { title: "استشير مهندس زراعي", description: "لو عندك سؤال أو استفسار، تقدر تدخل على صفحة استشارة مهندس." },
        { title: "اطلب أو استفسر", description: "تقدر تتواصل معانا مباشرة على واتساب علشان تسأل عن المنتجات أو تطلبها." },
      ]
    : [
        { title: "Start from the Home Page", description: "Start your tour and discover Vermi Valley and the sections available on the website." },
        { title: "Get to Know Vermi Valley", description: "Visit the About page to learn who we are and how we work." },
        { title: "Explore Our Products", description: "Browse our products and discover the information available for each one." },
        { title: "Learn About Our Products", description: "Read the available details to learn more about our products and their uses." },
        { title: "Learn with Vermi", description: "Explore useful information and articles about soil and our products." },
        { title: "Watch Product Trials", description: "Watch product trials and explore the results shown." },
        { title: "Ask an Agricultural Engineer", description: "If you have a question, visit the agricultural consultation page." },
        { title: "Order or Get in Touch", description: "Contact us directly on WhatsApp to ask about or order our products." },
      ];

  const total = guideSteps.length;
  const current = guideSteps[activeStep];
  const number = String(activeStep + 1).padStart(2, "0");

  const goTo = (index, manual = true) => {
    if (manual) setAutoPlay(false);
    setStep([index, index >= activeStep ? 1 : -1]);
  };
  const next = (manual = true) => {
    if (manual) setAutoPlay(false);
    setStep([(activeStep + 1) % total, 1]);
  };
  const prev = () => {
    setAutoPlay(false);
    setStep([(activeStep - 1 + total) % total, -1]);
  };

  // تشغيل تلقائي لحد ما المستخدم يتفاعل (ويقف لو القسم خرج من الشاشة)
  useEffect(() => {
    if (!autoPlay || reduceMotion || !guideInView) return;
    const t = setTimeout(() => next(false), AUTOPLAY_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep, autoPlay, reduceMotion, guideInView]);

  // السحب بالصباع على الموبايل (بيراعي اتجاه العربي)
  const handleDragEnd = (_, info) => {
    const goForward = isArabic ? info.offset.x > 0 : info.offset.x < 0;
    if (Math.abs(info.offset.x) > 50 || Math.abs(info.velocity.x) > 400) {
      goForward ? next() : prev();
    }
  };

  const flip = isArabic ? -1 : 1;
  const imageVariants = {
    enter: (d) => ({ opacity: 0, x: d * flip * 60, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d) => ({ opacity: 0, x: d * flip * -60, scale: 0.96 }),
  };

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-[#F2EEDF] px-4 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-16 lg:pb-24 lg:pt-12"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.09]"
        style={{
          backgroundImage: `url(${dotsPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "360px",
        }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-8">
          <h2 className="text-[1.65rem] font-extrabold leading-snug text-[#11341B] sm:text-4xl lg:text-5xl">
            {isArabic ? "إزاي تستخدم موقعنا؟" : "How to Use Our Website?"}
          </h2>
          <p className="mx-auto mt-4 inline-block rounded-2xl border border-[#5E9A2A]/40 bg-[#A4D561]/35 px-5 py-2.5 text-sm font-bold leading-7 text-[#11341B] shadow-[0_6px_18px_rgba(94,154,42,0.18)] sm:text-base">
            {isArabic
              ? "٨ خطوات بسيطة توصلك لكل اللي محتاجه"
              : "8 simple steps to everything you need"}
          </p>
        </div>

        {/* Guide */}
        <div
          ref={guideRef}
          onPointerEnter={(e) => e.pointerType === "mouse" && setAutoPlay(false)}
          className="grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-20"
        >
          {/* Phone */}
          <div className="relative mx-auto">
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-[#A4D561]/25 blur-3xl" />

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative w-[min(62vw,250px)] overflow-hidden rounded-[2.2rem] border-[6px] border-[#11341B] bg-[#11341B] shadow-[0_25px_60px_rgba(17,52,27,0.3)] sm:w-[260px] lg:w-[290px]">
                {/* notch */}
                <div className="absolute left-1/2 top-2 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-[#11341B]" />

                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragStart={() => setAutoPlay(false)}
                  onDragEnd={handleDragEnd}
                  className="relative aspect-[9/17] w-full cursor-grab touch-pan-y overflow-hidden rounded-[1.7rem] bg-white active:cursor-grabbing"
                >
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.img
                      key={activeStep}
                      src={stepImages[activeStep] || sectionImage}
                      alt={isArabic ? `صورة توضيحية للخطوة ${number}` : `Guide step ${number}`}
                      custom={direction}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                      draggable={false}
                      className="absolute inset-0 h-full w-full select-none object-cover"
                    />
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>

            <p className="mt-6 text-center text-xs text-[#526457] lg:hidden">
              {isArabic ? "اسحب الشاشة للتنقل بين الخطوات" : "Swipe the screen to move between steps"}
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col">
            {/* Mobile + tablet: single animated card (ارتفاع ثابت = أطول خطوة) */}
            <div className="lg:hidden">
              <div className="mb-3 flex items-center justify-between text-xs font-bold text-[#5E9A2A]">
                <span>{isArabic ? `الخطوة ${number} من 08` : `STEP ${number} OF 08`}</span>
              </div>

              <div className="grid">
                {/* طبقات مخفية بس عشان تحجز ارتفاع أطول خطوة */}
                {guideSteps.map((s, i) => (
                  <div
                    key={i}
                    aria-hidden
                    className="invisible col-start-1 row-start-1 border border-transparent p-5"
                  >
                    <h3 className="text-xl font-extrabold leading-relaxed">{s.title}</h3>
                    <p className="mt-2 text-sm leading-7">{s.description}</p>
                  </div>
                ))}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="col-start-1 row-start-1 rounded-3xl border border-[#11341B]/10 bg-[#FAF8F1] p-5 text-start shadow-[0_10px_30px_rgba(17,52,27,0.06)]"
                  >
                    <h3 className="text-xl font-extrabold leading-relaxed text-[#11341B]">
                      {current.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#526457]">{current.description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop: full clickable timeline (ارتفاع ثابت) */}
            <ol className="hidden flex-col gap-2 lg:flex lg:min-h-[32rem]">
              {guideSteps.map((step, i) => {
                const active = i === activeStep;
                const done = i < activeStep;
                return (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      aria-current={active ? "step" : undefined}
                      className={`relative flex w-full items-start gap-4 overflow-hidden rounded-2xl p-4 text-start transition-colors duration-300 ${
                        active ? "bg-[#FAF8F1] shadow-[0_10px_30px_rgba(17,52,27,0.08)]" : "hover:bg-[#FAF8F1]/60"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold transition-colors duration-300 ${
                          active
                            ? "bg-[#A4D561] text-[#11341B]"
                            : done
                              ? "bg-[#11341B] text-white"
                              : "bg-[#11341B]/10 text-[#526457]"
                        }`}
                      >
                        {done ? "✓" : String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="flex-1">
                        <span
                          className={`block text-lg font-bold transition-colors ${
                            active ? "text-[#11341B]" : "text-[#526457]"
                          }`}
                        >
                          {step.title}
                        </span>
                        <AnimatePresence initial={false}>
                          {active && (
                            <motion.span
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="block overflow-hidden"
                            >
                              <span className="mt-1 block text-sm leading-7 text-[#526457]">
                                {step.description}
                              </span>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>

                      {active && autoPlay && !reduceMotion && (
                        <motion.span
                          key={`bar-${activeStep}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                          className="absolute bottom-0 start-0 h-[3px] bg-[#A4D561]"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* Progress pills (mobile/tablet) */}
            <div className="mt-5 flex items-center justify-center gap-1.5 lg:hidden" role="tablist">
              {guideSteps.map((_, i) => {
                const active = i === activeStep;
                return (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={isArabic ? `الخطوة ${i + 1}` : `Step ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`relative h-2.5 overflow-hidden rounded-full bg-[#11341B]/15 transition-all duration-300 ${
                      active ? "w-9" : "w-2.5"
                    }`}
                  >
                    {active && (
                      <motion.span
                        key={`${activeStep}-${autoPlay}`}
                        initial={{ width: autoPlay && !reduceMotion ? "0%" : "100%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: autoPlay && !reduceMotion ? AUTOPLAY_MS / 1000 : 0.2, ease: "linear" }}
                        className="absolute inset-y-0 start-0 rounded-full bg-[#5E9A2A]"
                      />
                    )}
                    {!active && i < activeStep && (
                      <span className="absolute inset-0 rounded-full bg-[#A4D561]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="mt-5 flex items-center gap-3 lg:mt-8">
              <button
                type="button"
                onClick={prev}
                aria-label={isArabic ? "الخطوة السابقة" : "Previous step"}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#11341B]/15 text-xl text-[#11341B] transition active:scale-95 hover:border-[#A4D561] hover:bg-[#A4D561]/20"
              >
                {isArabic ? "→" : "←"}
              </button>

              <button
                type="button"
                onClick={() => next()}
                className="flex h-12 flex-1 items-center justify-center gap-3 rounded-xl bg-[#11341B] px-6 text-sm font-bold text-white transition active:scale-[0.98] hover:bg-[#244D2C]"
              >
                {activeStep === total - 1
                  ? isArabic ? "ابدأ من الأول" : "Start Again"
                  : isArabic ? "الخطوة اللي بعدها" : "Next Step"}
                <span className="text-lg">{isArabic ? "←" : "→"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="mt-16 sm:mt-24">
          <div className="mb-6 text-center sm:mb-9">
            <h3 className="text-2xl font-extrabold text-[#11341B] sm:text-3xl lg:text-4xl">
              {isArabic ? "شوف الفرق بنفسك" : "See the Difference"}
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#526457] sm:text-base sm:leading-8">
              {isArabic
                ? "شوف تجارب منتجاتنا واتعرف على النتائج المعروضة قبل وبعد الاستخدام."
                : "Watch our product trials and explore the results before and after use."}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#11341B]/10 bg-[#11341B] p-1.5 shadow-[0_18px_55px_rgba(17,52,27,0.12)] sm:rounded-[28px] sm:p-3"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl bg-[#11341B] sm:rounded-[20px]">
              <video
                className="h-full w-full object-contain"
                controls
                playsInline
                preload="none"
              >
                <source src="/videos/vermi-trials.mp4" type="video/mp4" />
                {isArabic
                  ? "المتصفح لا يدعم تشغيل الفيديو."
                  : "Your browser does not support video playback."}
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HomeIntro;

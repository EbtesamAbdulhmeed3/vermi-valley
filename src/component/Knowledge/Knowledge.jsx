import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../Context/languge";
import heroPattern from "../../assets/imge/vv pattern 1.png";

const articles = [
  {
    id: 1,
    category: "الفيرمي",
    enCategory: "Vermi",
    title: "الفيرمي كومبوست يعني إيه؟",
    enTitle: "What is Vermicompost?",
    description:
      "تعرف على طريقة إنتاجه ودور الديدان في معالجة المخلفات العضوية.",
    enDescription:
      "Learn how it is produced and how worms help process organic waste.",
    intro:
      "ببساطة، الفيرمي كومبوست هو منتج عضوي بينتج لما الديدان تعالج مخلفات عضوية مجهزة. الدودة بتتغذى على المادة العضوية، والناتج بيتجهز للاستخدام الزراعي حسب مواصفاته وطريقة إنتاجه.",
    enIntro:
      "Vermicompost is an organic product created when worms process prepared organic waste. The material is prepared for agricultural use according to its specifications and production method.",
    points: [
      "إيه المواد اللي ممكن تدخل في الإنتاج؟",
      "إيه دور الديدان في المعالجة؟",
      "إيه الفرق بين المنتج النهائي والمخلفات قبل المعالجة؟",
    ],
    enPoints: [
      "What materials can be used in production?",
      "What role do worms play in processing?",
      "How does the final product differ from untreated waste?",
    ],
    conclusion:
      "اختيار السماد والكمية بيعتمد على نوع المحصول وظروف الأرض. راجع التوصيات أو اسأل مهندسًا قبل الاستخدام.",
    enConclusion:
      "Choosing the fertilizer and its quantity depends on the crop and soil conditions. Review the recommendations or consult an agricultural engineer before use.",
    action: "شوف Vermi Compost والأسعار",
    enAction: "View Vermi Compost & Prices",
    link: "/products",
  },
  {
    id: 2,
    category: "التسميد العضوي",
    enCategory: "Organic Fertilization",
    title: "الفيرمي كومبوست والكمبوست: إيه الفرق؟",
    enTitle: "Vermicompost vs. Compost",
    description:
      "شرح مبسط لطريقة إنتاج كل نوع وإيه المعلومات اللي تراجعها قبل الاختيار.",
    enDescription:
      "A simple comparison of production methods and what to check before choosing.",
    intro:
      "الاتنين بيبدأوا من مواد عضوية، لكن طريقة المعالجة مختلفة. في الكمبوست، بتتحلل المخلفات خلال عملية التسميد. أما الفيرمي كومبوست، فبعد تجهيز المادة العضوية، بتشارك الديدان في معالجتها.",
    enIntro:
      "Both start with organic materials, but their processing methods differ. Compost is produced through decomposition, while worms participate in processing the prepared organic material in vermicompost production.",
    points: [
      "مصدر المواد العضوية.",
      "طريقة الإنتاج والمعالجة.",
      "مواصفات المنتج ونتيجة التحليل لو متاحة.",
    ],
    enPoints: [
      "Source of organic materials.",
      "Production and processing method.",
      "Product specifications and lab analysis, if available.",
    ],
    conclusion:
      "لما تقارن بين منتجين، الاسم لوحده مش كفاية للحكم على الجودة أو معرفة الكمية المناسبة. ابدأ باحتياج المحصول وظروف أرضك، واسأل مختصًا قبل ما تحدد برنامج التسميد.",
    enConclusion:
      "A product's name alone is not enough to judge its quality or determine the right quantity. Consider your crop's needs and soil conditions, and consult a specialist before deciding on a fertilization program.",
    action: "اسأل عن المنتج المناسب",
    enAction: "Ask About the Right Product",
    link: "/recommendations",
  },
  {
    id: 3,
    category: "المنتجات",
    enCategory: "Products",
    title: "Vermi Tea: الفيرمي في صورة سائلة",
    enTitle: "Vermi Tea: Liquid Vermi Product",
    description:
      "تعرف على المنتج ومكوناته حسب وصف الشركة، واسأل عن طريقة استخدامه المناسبة لمحصولك.",
    enDescription:
      "Learn about the product according to the company's description and ask about suitable use.",
    intro:
      "Vermi Tea منتج سائل من منتجات Vermi Valley. ووفق وصف الشركة، هو مخصب حيوي غني بالبكتيريا والفطريات النافعة والإنزيمات الطبيعية.",
    enIntro:
      "Vermi Tea is a liquid product by Vermi Valley. According to the company's description, it is a biofertilizer containing beneficial bacteria, fungi, and natural enzymes.",
    points: [
      "Vermi Tea منتج سائل من منتجات Vermi Valley.",
      "وصف الشركة يوضح مكوناته الحيوية.",
      "طريقة الاستخدام والكمية لازم تتحدد حسب المحصول والتوصية المعتمدة.",
    ],
    enPoints: [
      "Vermi Tea is a liquid Vermi Valley product.",
      "The company's description outlines its biological components.",
      "Usage and quantity should follow crop-specific approved recommendations.",
    ],
    conclusion:
      "ما تستخدمش جرعة عامة لمحصولك من غير ما تراجع الإرشادات أو تسأل مهندسًا.",
    enConclusion:
      "Do not use a general dosage for your crop without reviewing the guidance or consulting an engineer.",
    action: "اعرف العبوات والأسعار",
    enAction: "View Sizes & Prices",
    link: "/products",
  },
  {
    id: 4,
    category: "أسئلة المزارعين",
    enCategory: "Farmers' Questions",
    title: "حضّر المعلومات دي قبل ما تبعت سؤالك",
    enTitle: "Prepare Before Asking the Engineer",
    description:
      "تفاصيل بسيطة تساعد المهندس يفهم حالة أرضك ومحصولك بشكل أوضح.",
    enDescription:
      "A few details can help the engineer better understand your farm and crop.",
    intro: "علشان نقدر نفهم حالتك، اكتب لنا المعلومات دي:",
    enIntro: "To help us understand your case, please prepare:",
    points: [
      "نوع المحصول.",
      "مساحة الأرض أو عدد الأشجار.",
      "عمر الأشجار، لو السؤال عن أشجار.",
      "طريقة الري.",
      "المشكلة اللي بتقابلك أو النتيجة اللي بتدور عليها.",
      "اسم المنتج اللي استخدمته قبل كده، لو فيه.",
      "صورة واضحة للحالة، لو الصورة هتساعد في الشرح.",
    ],
    enPoints: [
      "Crop type.",
      "Land area or number of trees.",
      "Tree age, if relevant.",
      "Irrigation method.",
      "The problem you are facing or the result you are looking for.",
      "Any product you have used before, if applicable.",
      "A clear photo, if it helps explain the case.",
    ],
    conclusion:
      "بعد ما تبعت التفاصيل، ممكن المهندس يطلب منك معلومات إضافية قبل ما يرد بتوجيه مناسب.",
    enConclusion:
      "After receiving the details, the engineer may ask for more information before providing guidance.",
    action: "ابعت سؤالك للمهندس",
    enAction: "Ask the Engineer",
    link: "/recommendations",
  },
  {
    id: 5,
    category: "الفيرمي",
    enCategory: "Vermi",
    title: "رحلة المخلفات لحد الفيرمي كومبوست",
    enTitle: "From Organic Waste to Vermicompost",
    description: "جولة مبسطة في مراحل تجهيز المخلفات وتغذية الديدان.",
    enDescription:
      "A simple look at preparing organic waste and feeding the worms.",
    intro:
      "بتبدأ الرحلة بتجميع مخلفات عضوية نباتية أو حيوانية مناسبة، وبعدها بتتجهز قبل ما تدخل في منظومة التغذية. الديدان بتتغذى على المادة العضوية، والناتج بيتجمع ويتجهز كفيرمي كومبوست.",
    enIntro:
      "The process starts with collecting suitable plant or animal organic waste. It is prepared before entering the feeding system. Worms feed on the organic material, and the output is collected and prepared as vermicompost.",
    points: [
      "تجميع مخلفات عضوية مناسبة.",
      "تجهيز المخلفات قبل التغذية.",
      "تغذية الديدان على المادة العضوية.",
      "تجميع الناتج وتجهيزه كفيرمي كومبوست.",
    ],
    enPoints: [
      "Collecting suitable organic waste.",
      "Preparing the waste before feeding.",
      "Worms feed on the organic material.",
      "Collecting and preparing the output as vermicompost.",
    ],
    conclusion:
      "نوع المدخلات وطريقة التجهيز والمتابعة بتأثر على جودة المنتج. عشان كده، التعامل مع أي مخلفات لازم يكون ضمن طريقة إنتاج مضبوطة.",
    enConclusion:
      "Input materials, preparation, and monitoring affect product quality. Waste must therefore be handled through a controlled production process.",
    action: "شوف منتجاتنا",
    enAction: "Explore Our Products",
    link: "/products",
  },
  {
    id: 6,
    category: "استخدامات وتوصيات",
    enCategory: "Uses & Recommendations",
    title: "اختار المنتج على أساس احتياج أرضك",
    enTitle: "Choose Based on Your Soil's Needs",
    description:
      "إيه المعلومات اللي تحتاج تعرفها قبل ما تختار منتجًا زراعيًا؟",
    enDescription:
      "What should you know before choosing an agricultural product?",
    intro:
      "قبل ما تطلب، حدّد نوع المحصول والهدف من الاستخدام، وراجع التوصيات المتاحة للمنتج.",
    enIntro:
      "Before ordering, identify your crop type and your purpose, then review the available product recommendations.",
    points: [
      "حدّد نوع المحصول.",
      "وضّح الهدف من الاستخدام.",
      "راجع التوصيات المتاحة للمنتج.",
      "اسأل المهندس لو عندك مشكلة أو حالة خاصة في الأرض.",
    ],
    enPoints: [
      "Identify your crop type.",
      "Clarify your purpose.",
      "Review the product recommendations.",
      "Ask the engineer if you have a specific soil or crop concern.",
    ],
    conclusion:
      "السعر والمنتج وحدهم ما يحددوش الجرعة المناسبة. لو مش لاقي حالتك أو عندك مشكلة في الأرض، ابعت التفاصيل لمهندس Vermi Valley.",
    enConclusion:
      "The product and its price alone do not determine the right dosage. If you have a specific concern, share the details with a Vermi Valley engineer.",
    action: "استشر مهندسًا زراعيًا",
    enAction: "Consult an Agricultural Engineer",
    link: "/recommendations",
  },
];

const categories = [
  { ar: "الكل", en: "All" },
  { ar: "الفيرمي", en: "Vermi" },
  { ar: "التسميد العضوي", en: "Organic Fertilization" },
  { ar: "المنتجات", en: "Products" },
  { ar: "استخدامات وتوصيات", en: "Uses & Recommendations" },
  { ar: "أسئلة المزارعين", en: "Farmers' Questions" },
];

// لون وأيقونة لكل تصنيف
const categoryMeta = {
  الفيرمي: {
    tint: "bg-[#A4D561]/35 text-[#315B27]",
    paths: ["M5 19C5 10 10 5 19 5c0 9-5 14-14 14Z", "M5 19 13 11"],
  },
  "التسميد العضوي": {
    tint: "bg-[#E8D9A8]/60 text-[#7A5C14]",
    paths: ["M12 3c3.5 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2.5-6 6-10Z"],
  },
  المنتجات: {
    tint: "bg-[#11341B]/10 text-[#11341B]",
    paths: ["M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z", "M3 7.5 12 12l9-4.5M12 12v9"],
  },
  "استخدامات وتوصيات": {
    tint: "bg-[#CFE3B0]/70 text-[#3E6B1E]",
    paths: ["M5 12l4 4 10-10"],
  },
  "أسئلة المزارعين": {
    tint: "bg-[#F4D9C2]/70 text-[#8A4B1F]",
    paths: ["M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"],
  },
};

function CategoryBadge({ category, label, className = "" }) {
  const meta = categoryMeta[category] || categoryMeta["المنتجات"];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${meta.tint} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        {meta.paths.map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
      {label}
    </span>
  );
}

function readingMinutes(article) {
  const text = [article.intro, ...article.points, article.conclusion].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 150));
}

/* ---------- كارت المقال ---------- */

function ArticleCard({ article, index, featured, isArabic, t, minutesLabel, onOpen }) {
  const arrowMove = isArabic
    ? "group-hover:-translate-x-1"
    : "group-hover:translate-x-1";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.045 }}
      className={`group flex flex-col overflow-hidden rounded-3xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 ${
        featured
          ? "min-h-[300px] border-[#11341B] bg-[#11341B] text-[#F2EEDF] sm:col-span-2 sm:p-8"
          : "min-h-[270px] border-[#11341B]/10 bg-white/55 backdrop-blur-sm hover:border-[#A4D561] hover:bg-[#A4D561]/15"
      }`}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <CategoryBadge
          category={article.category}
          label={t(article.category, article.enCategory)}
        />
        <span
          className={`text-xs font-bold ${
            featured ? "text-[#A4D561]" : "text-[#11341B]/55"
          }`}
        >
          {minutesLabel(readingMinutes(article))}
        </span>
      </div>

      {featured && (
        <span className="mb-3 text-sm font-extrabold text-[#A4D561]">
          {t("مقال مميز", "Featured article")}
        </span>
      )}

      <h2
        className={`mb-3 font-extrabold leading-relaxed ${
          featured ? "text-2xl sm:text-4xl sm:leading-[1.4]" : "text-xl"
        }`}
      >
        {t(article.title, article.enTitle)}
      </h2>

      <p
        className={`mb-7 flex-1 text-sm leading-7 ${
          featured
            ? "max-w-2xl text-[#F2EEDF]/80 sm:text-base sm:leading-8"
            : "text-[#11341B]/70"
        }`}
      >
        {t(article.description, article.enDescription)}
      </p>

      <button
        type="button"
        onClick={() => onOpen(article)}
        className={`flex w-full items-center justify-between border-t pt-4 text-sm font-extrabold transition ${
          featured
            ? "border-[#F2EEDF]/20 text-[#F2EEDF] hover:text-[#A4D561]"
            : "border-[#11341B]/10 text-[#11341B] hover:text-[#5D852E]"
        }`}
        aria-label={t(`اقرأ مقال ${article.title}`, `Read ${article.enTitle}`)}
      >
        <span>{t("اقرأ المعلومة", "Read article")}</span>
        <span className={`text-xl transition-transform duration-300 ${arrowMove}`}>
          {isArabic ? "←" : "→"}
        </span>
      </button>
    </motion.article>
  );
}

/* ---------- قارئ المقال (بيتعرض برّه الصفحة فوق النافبار) ---------- */

function ArticleReader({
  article,
  list,
  isArabic,
  t,
  minutesLabel,
  onClose,
  onSelect,
}) {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const index = list.findIndex((a) => a.id === article.id);
  const prev = index > 0 ? list[index - 1] : null;
  const next = index >= 0 && index < list.length - 1 ? list[index + 1] : null;

  // لما المقال يتغير يرجع لأول المقال
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
    setProgress(0);
  }, [article.id]);

  const onScroll = (event) => {
    const el = event.currentTarget;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
  };

  const points = isArabic ? article.points : article.enPoints;
  const prevArrow = isArabic ? "→" : "←";
  const nextArrow = isArabic ? "←" : "→";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      dir={isArabic ? "rtl" : "ltr"}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[200] flex items-end justify-center bg-[#11341B]/60 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
    >
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-labelledby="knowledge-article-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="flex h-[94dvh] w-full flex-col overflow-hidden rounded-t-[1.75rem] bg-[#F2EEDF] text-[#11341B] shadow-2xl shadow-black/30 sm:h-[min(88dvh,860px)] sm:max-w-3xl sm:rounded-[2rem]"
      >
        {/* Header ثابت */}
        <div className="shrink-0 border-b border-[#11341B]/10">
          <div className="flex items-center justify-between gap-3 px-5 py-4 sm:px-8">
            <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
              <CategoryBadge
                category={article.category}
                label={t(article.category, article.enCategory)}
              />
              <span className="text-xs font-bold text-[#11341B]/55">
                {minutesLabel(readingMinutes(article))}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#11341B]/15 bg-white/60 text-xl font-bold transition hover:border-[#11341B] hover:bg-[#A4D561]/40"
              aria-label={t("إغلاق المقال", "Close article")}
            >
              ×
            </button>
          </div>

          <div className="h-1 bg-[#11341B]/10">
            <div
              className="h-full bg-[#5D852E] transition-[width] duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        {/* المحتوى */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex-1 overflow-y-auto overscroll-contain px-5 py-7 sm:px-10 sm:py-10"
        >
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2
              id="knowledge-article-title"
              className="mb-6 text-2xl font-black leading-[1.5] sm:text-4xl sm:leading-[1.45]"
            >
              {t(article.title, article.enTitle)}
            </h2>

            <p className="mb-9 border-s-4 border-[#A4D561] ps-4 text-base font-semibold leading-8 text-[#11341B]/90 sm:text-lg sm:leading-9">
              {t(article.intro, article.enIntro)}
            </p>

            <h3 className="mb-4 text-lg font-extrabold">
              {t("خلّي بالك من النقاط دي", "Key points")}
            </h3>
            <ol className="mb-9 space-y-3">
              {points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-[#11341B]/10 bg-white/60 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#11341B] text-sm font-extrabold text-[#A4D561]">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-sm leading-7 sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ol>

            <div className="rounded-2xl border border-[#5D852E]/20 bg-[#A4D561]/25 p-5 sm:p-6">
              <h3 className="mb-2 text-base font-extrabold sm:text-lg">
                {t("قبل ما تستخدم", "Before you act")}
              </h3>
              <p className="text-sm leading-8 text-[#11341B]/85 sm:text-base sm:leading-9">
                {t(article.conclusion, article.enConclusion)}
              </p>
            </div>

            {/* المقال السابق / التالي */}
            {list.length > 1 && (
              <div className="mt-10 grid grid-cols-2 gap-3">
                {prev ? (
                  <button
                    type="button"
                    onClick={() => onSelect(prev)}
                    className="rounded-2xl border border-[#11341B]/10 bg-white/60 p-4 text-start transition hover:border-[#A4D561] hover:bg-[#A4D561]/20"
                  >
                    <span className="text-xs font-bold text-[#5D852E]">
                      {prevArrow} {t("السابق", "Previous")}
                    </span>
                    <span className="mt-1 line-clamp-2 block text-sm font-extrabold leading-6">
                      {t(prev.title, prev.enTitle)}
                    </span>
                  </button>
                ) : (
                  <span />
                )}

                {next ? (
                  <button
                    type="button"
                    onClick={() => onSelect(next)}
                    className="rounded-2xl border border-[#11341B]/10 bg-white/60 p-4 text-end transition hover:border-[#A4D561] hover:bg-[#A4D561]/20"
                  >
                    <span className="text-xs font-bold text-[#5D852E]">
                      {t("التالي", "Next")} {nextArrow}
                    </span>
                    <span className="mt-1 line-clamp-2 block text-sm font-extrabold leading-6">
                      {t(next.title, next.enTitle)}
                    </span>
                  </button>
                ) : (
                  <span />
                )}
              </div>
            )}
          </motion.div>
        </div>

        {/* زرار الإجراء ثابت تحت */}
        <div className="shrink-0 border-t border-[#11341B]/10 bg-[#F2EEDF] px-5 py-4 sm:px-8">
          <a
            href={article.link}
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#11341B] px-5 py-4 text-center text-sm font-bold text-[#F2EEDF] transition hover:bg-[#A4D561] hover:text-[#11341B] sm:w-auto sm:px-8"
          >
            {t(article.action, article.enAction)}
            <span>{isArabic ? "←" : "→"}</span>
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
}

/* ---------- الصفحة ---------- */

export default function Knowledge() {
  const { isArabic } = useLanguage();

  const [activeCategory, setActiveCategory] = useState("الكل");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const t = (ar, en) => (isArabic ? ar : en);

  const minutesLabel = (m) =>
    isArabic
      ? m === 1
        ? "قراءة دقيقة"
        : m === 2
          ? "قراءة دقيقتين"
          : `قراءة ${m} دقائق`
      : `${m} min read`;

  const filteredArticles = articles.filter(
    (article) =>
      activeCategory === "الكل" || article.category === activeCategory
  );

  // Lock page scrolling while the article reader is open.
  useEffect(() => {
    if (!selectedArticle) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedArticle(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedArticle]);

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate min-h-screen overflow-hidden bg-[#F2EEDF] text-[#11341B]"
    >
      {/* Full Page Brand Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${heroPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "250px",
          opacity: 0.13,
        }}
      />

      {/* Hero */}
      <section className="relative px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex rounded-full border border-[#11341B]/10 bg-[#A4D561]/30 px-5 py-2 text-sm font-bold"
          >
            {t("المعرفة تبدأ من هنا", "Knowledge starts here")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-black leading-tight sm:text-6xl"
          >
            {t("تعلّم من فيرمي", "Learn from Vermi")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-base leading-8 text-[#11341B]/75 sm:text-lg"
          >
            {t(
              "معلومات زراعية مبسطة عن الفيرمي كومبوست والمنتجات الحيوية والاستفادة من المخلفات. بنشرح الفكرة بلغة سهلة، وبنراجع المعلومات الفنية مع مختصين قبل نشرها.",
              "Simple agricultural information about vermicompost, biological products, and making use of organic waste. We explain things clearly and review technical information with specialists before publishing."
            )}
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-5 pb-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 -mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
            <div className="flex w-max min-w-full justify-start gap-2 sm:w-auto sm:flex-wrap sm:justify-center">
              {categories.map((category) => {
                const active = activeCategory === category.ar;

                return (
                  <button
                    key={category.ar}
                    type="button"
                    onClick={() => setActiveCategory(category.ar)}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition duration-300 ${
                      active
                        ? "border-[#11341B] bg-[#11341B] text-[#F2EEDF] shadow-md shadow-[#11341B]/10"
                        : "border-[#11341B]/15 bg-white/55 text-[#11341B] hover:border-[#5D852E] hover:bg-[#A4D561]/30"
                    }`}
                  >
                    {t(category.ar, category.en)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Articles — أول مقال مميز في تصنيف "الكل" */}
          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  index={index}
                  featured={activeCategory === "الكل" && index === 0}
                  isArabic={isArabic}
                  t={t}
                  minutesLabel={minutesLabel}
                  onOpen={setSelectedArticle}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="rounded-3xl border border-[#11341B]/10 bg-white/55 px-6 py-14 text-center">
              <p className="text-lg font-bold">
                {t(
                  "مفيش موضوعات في التصنيف ده حاليًا.",
                  "No topics in this category yet."
                )}
              </p>

              <button
                type="button"
                onClick={() => setActiveCategory("الكل")}
                className="mt-4 font-bold text-[#557D2D] underline underline-offset-4"
              >
                {t("اعرض كل الموضوعات", "Show all topics")}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* General Notice */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#11341B] px-6 py-8 text-center text-[#F2EEDF] shadow-lg shadow-[#11341B]/10 sm:px-10 sm:py-10">
          <h2 className="mb-3 text-xl font-extrabold">
            {t("معلومة مهمة قبل الاستخدام", "Important Note")}
          </h2>

          <p className="mx-auto max-w-4xl text-sm leading-8 text-[#F2EEDF]/80 sm:text-base">
            {t(
              "المحتوى للتوعية العامة، ولا يغني عن فحص حالة الأرض أو مراجعة مهندس زراعي. التوصية والكمية تختلف حسب المحصول وظروف الزراعة. راجع تاريخ تحديث كل مادة قبل اتباعها.",
              "This content is for general awareness and does not replace soil assessment or consultation with an agricultural engineer. Recommendations and quantities vary according to the crop and growing conditions. Check each article's update date before following its guidance."
            )}
          </p>
        </div>
      </section>

      {/* قارئ المقال: بيتعرض في body عشان يبقى فوق النافبار */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedArticle && (
              <ArticleReader
                key="article-reader"
                article={selectedArticle}
                list={filteredArticles}
                isArabic={isArabic}
                t={t}
                minutesLabel={minutesLabel}
                onClose={() => setSelectedArticle(null)}
                onSelect={setSelectedArticle}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </main>
  );
}
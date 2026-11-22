
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../Context/languge";

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
    description:
      "جولة مبسطة في مراحل تجهيز المخلفات وتغذية الديدان.",
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

export default function Knowledge() {
  const { isArabic } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return articles.filter((article) => {
      const categoryMatch =
        activeCategory === "الكل" || article.category === activeCategory;

      const searchMatch =
        !query ||
        [
          article.title,
          article.description,
          article.category,
          article.enTitle,
          article.enDescription,
          article.enCategory,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return categoryMatch && searchMatch;
    });
  }, [search, activeCategory]);

  const t = (ar, en) => (isArabic ? ar : en);

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#F2EEDF] text-[#11341B]"
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36">
        <div className="pointer-events-none absolute -left-24 -top-20 h-72 w-72 rounded-full bg-[#A4D561]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#A4D561]/25 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex rounded-full border border-[#11341B]/10 bg-[#A4D561]/25 px-5 py-2 text-sm font-bold"
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

      {/* Search and categories */}
      <section className="px-5 pb-12 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-8 max-w-2xl">
            <label className="mb-3 block text-sm font-bold">
              {t("بتدور على معلومة إيه؟", "What are you looking for?")}
            </label>
            <div className="flex gap-2 rounded-2xl border border-[#11341B]/10 bg-white/60 p-2 shadow-sm">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("اكتب كلمة للبحث...", "Type to search...")}
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#11341B]/40"
              />
              <button
                type="button"
                className="rounded-xl bg-[#11341B] px-6 py-3 text-sm font-bold text-[#F2EEDF] transition hover:bg-[#A4D561] hover:text-[#11341B]"
              >
                {t("دوّر", "Search")}
              </button>
            </div>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const active = activeCategory === category.ar;

              return (
                <button
                  key={category.ar}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category.ar);
                    setSelectedArticle(null);
                  }}
                  className={`rounded-full border px-4 py-2.5 text-sm font-bold transition ${
                    active
                      ? "border-[#11341B] bg-[#11341B] text-[#F2EEDF]"
                      : "border-[#11341B]/15 bg-white/40 text-[#11341B] hover:border-[#11341B] hover:bg-[#A4D561]/30"
                  }`}
                >
                  {t(category.ar, category.en)}
                </button>
              );
            })}
          </div>

          {/* Articles grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={`group flex flex-col rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  selectedArticle?.id === article.id
                    ? "border-[#11341B] bg-[#A4D561]/20"
                    : "border-[#11341B]/10 bg-white/55 hover:border-[#A4D561]"
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-[#A4D561]/35 px-3 py-1.5 text-xs font-bold">
                    {t(article.category, article.enCategory)}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#11341B] text-lg text-[#A4D561]">
                    {String(article.id).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="mb-3 text-xl font-extrabold leading-relaxed">
                  {t(article.title, article.enTitle)}
                </h2>

                <p className="mb-7 flex-1 text-sm leading-7 text-[#11341B]/65">
                  {t(article.description, article.enDescription)}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedArticle(
                      selectedArticle?.id === article.id ? null : article
                    )
                  }
                  className="flex items-center justify-between border-t border-[#11341B]/10 pt-4 text-sm font-extrabold transition hover:text-[#557D2D]"
                >
                  <span>
                    {selectedArticle?.id === article.id
                      ? t("إغلاق المقال", "Close article")
                      : t("اقرأ المعلومة", "Read article")}
                  </span>
                  <span className="text-xl transition group-hover:translate-x-[-4px]">
                    {isArabic ? "←" : "→"}
                  </span>
                </button>
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="rounded-3xl border border-[#11341B]/10 bg-white/50 px-6 py-14 text-center">
              <p className="text-lg font-bold">
                {t("ملقيناش موضوع مطابق للبحث.", "No matching topics found.")}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("الكل");
                }}
                className="mt-4 font-bold text-[#557D2D] underline"
              >
                {t("اعرض كل الموضوعات", "Show all topics")}
              </button>
            </div>
          )}

          {/* Selected article */}
          <AnimatePresence mode="wait">
            {selectedArticle && (
              <motion.section
                key={selectedArticle.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className="mt-10 scroll-mt-28 rounded-3xl border border-[#11341B]/10 bg-white/65 p-6 shadow-sm sm:p-10"
              >
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <span className="rounded-full bg-[#A4D561]/35 px-4 py-2 text-sm font-bold">
                    {t(
                      selectedArticle.category,
                      selectedArticle.enCategory
                    )}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    className="rounded-full border border-[#11341B]/15 px-4 py-2 text-sm font-bold hover:bg-[#A4D561]/25"
                  >
                    {t("إغلاق ×", "Close ×")}
                  </button>
                </div>

                <h2 className="mb-6 text-2xl font-black leading-relaxed sm:text-3xl">
                  {t(selectedArticle.title, selectedArticle.enTitle)}
                </h2>

                <p className="mb-8 text-base leading-9 text-[#11341B]/80">
                  {t(selectedArticle.intro, selectedArticle.enIntro)}
                </p>

                <div className="mb-8 rounded-2xl bg-[#A4D561]/15 p-6">
                  <h3 className="mb-4 text-lg font-extrabold">
                    {t("خلّي بالك من النقاط دي", "Key points")}
                  </h3>
                  <ul className="space-y-3">
                    {(isArabic
                      ? selectedArticle.points
                      : selectedArticle.enPoints
                    ).map((point, index) => (
                      <li key={index} className="flex gap-3 leading-7">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#11341B]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mb-8 text-base leading-9 text-[#11341B]/80">
                  {t(
                    selectedArticle.conclusion,
                    selectedArticle.enConclusion
                  )}
                </p>

                <a
                  href={selectedArticle.link}
                  className="inline-flex items-center gap-3 rounded-xl bg-[#11341B] px-6 py-4 text-sm font-bold text-[#F2EEDF] transition hover:bg-[#A4D561] hover:text-[#11341B]"
                >
                  {t(selectedArticle.action, selectedArticle.enAction)}
                  <span>{isArabic ? "←" : "→"}</span>
                </a>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* General notice */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#11341B] px-6 py-8 text-center text-[#F2EEDF] sm:px-10">
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
    </main>
  );
}

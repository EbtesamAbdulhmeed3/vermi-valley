
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../Context/languge";
import { WHATSAPP_NUMBER } from "../Data/translations";

const treeRates = [
  { id: "young", ar: "من الزراعة حتى سنتين", en: "From planting to 2 years", compost: 1, tea: 1 },
  { id: "medium", ar: "أكبر من سنتين حتى 4 سنوات", en: "Over 2 to 4 years", compost: 2, tea: 1 },
  { id: "mature", ar: "من 5 إلى 7 سنوات", en: "5 to 7 years", compost: 3, tea: 3 },
  { id: "old", ar: "أكبر من 7 سنوات", en: "Over 7 years", compost: 5, tea: 3 },
];

const cropTypes = [
  { id: "crops", ar: "المحاصيل والخضروات", en: "Crops & Vegetables" },
  { id: "leafy", ar: "الورقيات", en: "Leafy Crops" },
  { id: "legumes", ar: "البقوليات", en: "Legumes" },
  { id: "medical", ar: "النباتات الطبية والعطرية", en: "Medicinal & Aromatic Plants" },
];

function Recommendations() {
  const { isArabic } = useLanguage();

  const [calculator, setCalculator] = useState("trees");

  const [treeType, setTreeType] = useState("other");
  const [treeAge, setTreeAge] = useState("young");
  const [treeCount, setTreeCount] = useState(10);
  const [additions, setAdditions] = useState(2);

  const [cropType, setCropType] = useState("crops");
  const [feddans, setFeddans] = useState(1);
  const [groundRate, setGroundRate] = useState(200);
  const [teaRate, setTeaRate] = useState(40);

  const [result, setResult] = useState(null);

  const text = {
    title: isArabic ? "احسب احتياجك الزراعي" : "Calculate Your Agricultural Needs",
    subtitle: isArabic
      ? "اختاري نوع الزراعة وأدخلي بياناتك لمعرفة الكميات المناسبة."
      : "Choose your agricultural type and enter your details to calculate your needs.",
    trees: isArabic ? "الأشجار" : "Trees",
    crops: isArabic ? "المحاصيل والخضروات" : "Crops & Vegetables",
    leafy: isArabic ? "الورقيات والبقوليات والنباتات الطبية" : "Leafy, Legumes & Medicinal Plants",
    treeType: isArabic ? "نوع الشجرة" : "Tree Type",
    palm: isArabic ? "نخيل" : "Palm",
    other: isArabic ? "أشجار أخرى" : "Other Trees",
    age: isArabic ? "عمر الشجرة" : "Tree Age",
    count: isArabic ? "عدد الأشجار" : "Number of Trees",
    additions: isArabic ? "عدد الإضافات / المعاملات" : "Number of Applications",
    cropType: isArabic ? "نوع الزراعة" : "Crop Type",
    area: isArabic ? "عدد الأفدنة" : "Number of Feddans",
    ground: isArabic ? "الخدمة الأرضية (كجم للفدان)" : "Ground Application (KG/Feddan)",
    tea: isArabic ? "Vermi Tea (لتر للفدان في المعاملة)" : "Vermi Tea (Liter/Feddan/Treatment)",
    calculate: isArabic ? "احسب احتياجي" : "Calculate My Needs",
    compost: isArabic ? "إجمالي Vermi Compost" : "Total Vermi Compost",
    vermiTea: isArabic ? "إجمالي Vermi Tea" : "Total Vermi Tea",
    remainder: isArabic ? "باقي خليط الكومبوست" : "Remaining Compost Mix",
    method: isArabic ? "طريقة استخدام Vermi Tea" : "Vermi Tea Application Method",
    soil: isArabic ? "حقن أرضي" : "Soil Injection",
    spray: isArabic ? "رش ورقي" : "Foliar Spray",
    order: isArabic ? "إرسال الاحتياج عبر واتساب" : "Send Requirements via WhatsApp",
    note: isArabic
      ? "النتائج مبنية على معدلات التوصيات المنشورة من Vermi Valley. يُرجى مراجعة فريق الشركة لتأكيد تفاصيل الاستخدام."
      : "Results are based on Vermi Valley's published recommendations. Please confirm application details with the company.",
    choose: isArabic ? "اختاري نوع الحاسبة" : "Choose a Calculator",
    result: isArabic ? "نتيجة حساب احتياجك" : "Your Calculation Results",
    reset: isArabic ? "إعادة الحساب" : "Calculate Again",
    unitKg: isArabic ? "كجم" : "KG",
    unitLiter: isArabic ? "لتر" : "Liter",
  };

  const format = (value) =>
    new Intl.NumberFormat(isArabic ? "ar-EG" : "en-EG", {
      maximumFractionDigits: 2,
    }).format(value);

  const calculateTrees = () => {
    const rate = treeRates.find((item) => item.id === treeAge);
    if (!rate || treeCount < 1 || additions < 1) return;

    setResult({
      type: "trees",
      compost: rate.compost * treeCount * additions,
      tea: rate.tea * treeCount * additions,
      method: treeType === "palm" ? text.soil : text.spray,
      trees: treeCount,
      additions,
      age: isArabic ? rate.ar : rate.en,
    });
  };

  const calculateCrops = () => {
    if (feddans <= 0 || groundRate < 0 || teaRate < 0) return;

    const totalGround = feddans * groundRate;
    const vermiCompost = totalGround * 0.2;
    const remainingMix = totalGround - vermiCompost;

    setResult({
      type: "crops",
      compost: vermiCompost,
      remainder: remainingMix,
      tea: feddans * teaRate,
      area: feddans,
      groundRate,
      teaRate,
      crop: cropTypes.find((item) => item.id === cropType),
    });
  };

  const createWhatsAppLink = () => {
    if (!result) return "#";

    const phone = String(WHATSAPP_NUMBER)
      .replace(/\D/g, "")
      .replace(/^00/, "")
      .replace(/^0/, "20");

    const message = result.type === "trees"
      ? `مرحباً Vermi Valley، أريد الاستفسار عن احتياجي الزراعي:\nنوع الشجرة: ${treeType === "palm" ? "نخيل" : "أشجار أخرى"}\nالعمر: ${result.age}\nعدد الأشجار: ${result.trees}\nعدد الإضافات: ${result.additions}\nVermi Compost: ${format(result.compost)} كجم\nVermi Tea: ${format(result.tea)} لتر\nطريقة الاستخدام: ${result.method}`
      : `مرحباً Vermi Valley، أريد طلب توصية زراعية:\nنوع الزراعة: ${isArabic ? result.crop.ar : result.crop.en}\nالمساحة: ${format(result.area)} فدان\nVermi Compost: ${format(result.compost)} كجم\nباقي خليط الكومبوست: ${format(result.remainder)} كجم\nVermi Tea لكل معاملة: ${format(result.tea)} لتر`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const tabs = [
    { id: "trees", label: text.trees },
    { id: "crops", label: text.crops },
    { id: "leafy", label: text.leafy },
  ];

  const isTree = calculator === "trees";

  return (
    <section
      id="recommendations"
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#F2EEDF] px-5 py-20 text-[#11341B] md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#668B45]">
            VERMI VALLEY
          </span>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            {text.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#11341B]/65 md:text-base">
            {text.subtitle}
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setCalculator(tab.id);
                setResult(null);
              }}
              className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                calculator === tab.id
                  ? "border-[#11341B] bg-[#11341B] text-white"
                  : "border-[#11341B]/20 bg-white/60 hover:border-[#668B45]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-[#11341B]/10 bg-white p-6 shadow-sm md:p-10">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={calculator}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid gap-6 md:grid-cols-2"
              >
                {isTree ? (
                  <>
                    <div>
                      <label className="mb-2 block text-sm font-bold">{text.treeType}</label>
                      <select
                        value={treeType}
                        onChange={(e) => setTreeType(e.target.value)}
                        className="w-full rounded-lg border border-[#11341B]/15 bg-[#F2EEDF]/40 p-4 outline-none focus:border-[#668B45]"
                      >
                        <option value="other">{text.other}</option>
                        <option value="palm">{text.palm}</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold">{text.age}</label>
                      <select
                        value={treeAge}
                        onChange={(e) => setTreeAge(e.target.value)}
                        className="w-full rounded-lg border border-[#11341B]/15 bg-[#F2EEDF]/40 p-4 outline-none focus:border-[#668B45]"
                      >
                        {treeRates.map((rate) => (
                          <option key={rate.id} value={rate.id}>
                            {isArabic ? rate.ar : rate.en}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold">{text.count}</label>
                      <input
                        type="number"
                        min="1"
                        value={treeCount}
                        onChange={(e) => setTreeCount(Math.max(1, Number(e.target.value) || 1))}
                        className="w-full rounded-lg border border-[#11341B]/15 p-4 outline-none focus:border-[#668B45]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold">{text.additions}</label>
                      <input
                        type="number"
                        min="1"
                        value={additions}
                        onChange={(e) => setAdditions(Math.max(1, Number(e.target.value) || 1))}
                        className="w-full rounded-lg border border-[#11341B]/15 p-4 outline-none focus:border-[#668B45]"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="mb-2 block text-sm font-bold">{text.cropType}</label>
                      <select
                        value={cropType}
                        onChange={(e) => setCropType(e.target.value)}
                        className="w-full rounded-lg border border-[#11341B]/15 bg-[#F2EEDF]/40 p-4 outline-none focus:border-[#668B45]"
                      >
                        {cropTypes.map((crop) => (
                          <option key={crop.id} value={crop.id}>
                            {isArabic ? crop.ar : crop.en}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold">{text.area}</label>
                      <input
                        type="number"
                        min="0.1"
                        step="0.1"
                        value={feddans}
                        onChange={(e) => setFeddans(Math.max(0.1, Number(e.target.value) || 0.1))}
                        className="w-full rounded-lg border border-[#11341B]/15 p-4 outline-none focus:border-[#668B45]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold">{text.ground}</label>
                      <input
                        type="number"
                        min="0"
                        value={groundRate}
                        onChange={(e) => setGroundRate(Math.max(0, Number(e.target.value) || 0))}
                        className="w-full rounded-lg border border-[#11341B]/15 p-4 outline-none focus:border-[#668B45]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold">{text.tea}</label>
                      <input
                        type="number"
                        min="0"
                        value={teaRate}
                        onChange={(e) => setTeaRate(Math.max(0, Number(e.target.value) || 0))}
                        className="w-full rounded-lg border border-[#11341B]/15 p-4 outline-none focus:border-[#668B45]"
                      />
                    </div>
                  </>
                )}

                <div className="md:col-span-2">
                  <button
                    type="button"
                    onClick={isTree ? calculateTrees : calculateCrops}
                    className="w-full rounded-lg bg-[#11341B] px-6 py-4 font-bold text-white transition hover:bg-[#315B27]"
                  >
                    {text.calculate}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h3 className="text-center text-2xl font-black">{text.result}</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-[#F2EEDF] p-6">
                    <p className="text-sm text-[#11341B]/60">{text.compost}</p>
                    <p className="mt-3 text-3xl font-black text-[#557D2D]">
                      {format(result.compost)} {text.unitKg}
                    </p>
                  </div>

                  {result.type === "crops" && (
                    <div className="rounded-xl bg-[#F2EEDF] p-6">
                      <p className="text-sm text-[#11341B]/60">{text.remainder}</p>
                      <p className="mt-3 text-3xl font-black text-[#557D2D]">
                        {format(result.remainder)} {text.unitKg}
                      </p>
                    </div>
                  )}

                  <div className="rounded-xl bg-[#F2EEDF] p-6">
                    <p className="text-sm text-[#11341B]/60">{text.vermiTea}</p>
                    <p className="mt-3 text-3xl font-black text-[#557D2D]">
                      {format(result.tea)} {text.unitLiter}
                    </p>
                  </div>

                  {result.type === "trees" && (
                    <div className="rounded-xl bg-[#F2EEDF] p-6">
                      <p className="text-sm text-[#11341B]/60">{text.method}</p>
                      <p className="mt-3 text-xl font-black text-[#557D2D]">
                        {result.method}
                      </p>
                    </div>
                  )}
                </div>

                <p className="text-center text-xs leading-7 text-[#11341B]/55">
                  {text.note}
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-[#11341B] px-5 py-4 text-center font-bold text-white transition hover:bg-[#315B27]"
                  >
                    {text.order}
                  </a>

                  <button
                    type="button"
                    onClick={() => setResult(null)}
                    className="rounded-lg border border-[#11341B]/20 px-5 py-4 font-bold transition hover:bg-[#A4D561]/20"
                  >
                    {text.reset}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Recommendations;

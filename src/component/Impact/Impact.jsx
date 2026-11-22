
import { useState } from "react";
import { useLanguage } from "../Context/languge";

function Impact() {
  const { isArabic } = useLanguage();

  const [acres, setAcres] = useState(1500);
  const [waste, setWaste] = useState(800);
  const [reduction, setReduction] = useState(75);

  const avoidedUrea = (Number(acres) * 5 * 50 * Number(reduction)) / 100000;
  const avoidedCO2 = avoidedUrea * 1.45;

  const t = isArabic
    ? {
        label: "أثرنا والاستدامة",
        title: "نحوّل المخلفات إلى قيمة تخدم الأرض",
        intro:
          "كيف نحوّل المخلفات العضوية إلى قيمة ونخدم التربة والزراعة المستدامة.",
        cumulative: "أثرنا بالأرقام",
        cumulativeText:
          "أثر تراكمي منذ بدء التشغيل، يجمع بين خدمة الأراضي الزراعية وتدوير المخلفات العضوية وخفض الانبعاثات المرتبطة بالمدخلات التقليدية.",
        metrics: [
          {
            value: "+1,500",
            title: "فدان تمت خدمتها",
            note: "إجمالي تراكمي من أغسطس 2022 حتى يونيو 2026",
          },
          {
            value: "+800",
            title: "طن مخلفات عضوية",
            note: "إجمالي تراكمي تم تحويله حيويًا منذ أغسطس 2022",
          },
          {
            value: "حتى 75%",
            title: "خفض في الأسمدة الكيميائية",
            note: "في برامج التسميد المستفيدة من حلول الشركة",
          },
          {
            value: "+400",
            title: "طن CO₂e تراكميًا",
            note: "تقدير متحفظ للانبعاثات المتجنبة من تصنيع اليوريا المستبدلة فقط",
          },
        ],
        emissions: "الانبعاثات المتجنبة",
        emissionsText:
          "نفصل أثر تدوير المخلفات عن الأثر المرتبط بتقليل الحاجة إلى تصنيع اليوريا، وفق منهجية الحساب الموضحة.",
        previous: "الأثر المحقق قبل الموقع الجديد",
        previousText:
          "تم تدوير أكثر من 700 طن من المخلفات العضوية حيويًا خلال الفترة من أغسطس 2022 حتى يونيو 2026. وكان التوزيع التقريبي 70% مخلفات حيوانية و30% مخلفات نباتية.",
        urea: "خفض اليوريا",
        ureaText:
          "بمتوسط تقليدي من 5 إلى 9 شكاير للفدان سنويًا، ووزن 50 كجم للشيكارة، ومع خفض 75% على 1,500 فدان، يقدّر تجنب استخدام نحو 281–506 طن يوريا سنويًا.",
        growth: "من الأثر إلى التوسع",
        growthText: "أثر محقق وأهداف التشغيل والتوسع خلال 2026–2027.",
        achieved: "أثر محقق",
        newSite: "منذ بدء التشغيل التجريبي للموقع الجديد",
        operation: "بدأ التشغيل فعليًا في أغسطس 2026",
        target: "الهدف 300 طن حتى ديسمبر 2026",
        expansion: "مسار التوسع",
        production: "الطاقة الإنتاجية المستهدفة",
        productionNote: "هدف 2027: الوصول إلى الطاقة التشغيلية القصوى للمركز",
        farms: "مستهدف خدمتها في 2027",
        farmsNote: "1,000 فدان نخيل + 1,000 فدان محاصيل",
        engine: "محرك قياس الأثر",
        engineText:
          "غيّري القيم الأساسية وشاهدي كيف تتحدث المؤشرات التقديرية تلقائيًا. أثر الأسمدة منفصل عن أثر المخلفات.",
        acres: "إجمالي الأفدنة المخدومة تراكميًا",
        waste: "إجمالي المخلفات المعاد تدويرها (طن)",
        reduction: "متوسط خفض اليوريا (%)",
        avoidedUrea: "طن يوريا متجنبة تقديريًا",
        avoidedCO2: "طن CO₂e من تصنيع اليوريا المستبدلة",
        wasteCO2: "صافي CO₂e من إدارة المخلفات",
        measuring: "قيد القياس",
        methodology: "منهجية الحساب",
        methodologyText:
          "يعتمد مؤشر الأسمدة على الحد الأدنى 5 شكاير يوريا للفدان، ووزن 50 كجم للشيكارة، وعامل تصنيع 1.45 طن CO₂e لكل طن يوريا. تم استخدام الحد الأدنى للمحافظة على تقدير متحفظ.",
        wasteMethod:
          "لا يتم دمج أثر المخلفات مع أثر اليوريا. يظل صافي CO₂e للمخلفات قيد القياس لحين اعتماد معاملات المادة الجافة والمواد الصلبة المتطايرة ورطوبة المخلفات النباتية.",
        model: "نموذج العمل",
        modelTitle: "من المخلفات إلى التربة.. ثم إلى قيمة مستدامة",
        steps: [
          {
            title: "المخلفات العضوية",
            text: "الاستفادة من الموارد العضوية القابلة لإعادة التدوير.",
          },
          {
            title: "المعالجة والتحويل",
            text: "توظيف منظومة الفيرمي والكائنات النافعة في عمليات التحويل.",
          },
          {
            title: "منتجات حيوية",
            text: "Vermi Compost وVermi Tea وEM1 ضمن حلول الشركة الزراعية.",
          },
          {
            title: "أثر في الأرض",
            text: "دعم خصوبة التربة والزراعة المستدامة ونشر ثقافة إعادة التدوير.",
          },
        ],
        note:
          "ملاحظة: تقديرات ثاني أكسيد الكربون المكافئ حسابية مبنية على افتراضات ومعاملات منهجية الشركة، وليست قياسًا ميدانيًا مباشرًا أو رصيد كربون معتمدًا. ولا تمثل إجمالي الأثر الكربوني الكامل للشركة.",
      }
    : {
        label: "OUR IMPACT & SUSTAINABILITY",
        title: "Turning Organic Waste Into Value for the Land",
        intro:
          "How we transform organic waste into value while supporting soil and sustainable agriculture.",
        cumulative: "Our Impact in Numbers",
        cumulativeText:
          "Cumulative impact since operations began, combining agricultural land served, organic waste recycled, and emissions avoided through reduced conventional inputs.",
        metrics: [
          {
            value: "+1,500",
            title: "Feddans Served",
            note: "Cumulative total from August 2022 to June 2026",
          },
          {
            value: "+800",
            title: "Tons of Organic Waste",
            note: "Cumulative bio-converted total since August 2022",
          },
          {
            value: "Up to 75%",
            title: "Reduction in Chemical Fertilizers",
            note: "Across farming programs benefiting from company solutions",
          },
          {
            value: "+400",
            title: "Cumulative Tons CO₂e",
            note: "Conservative estimate of avoided emissions from displaced urea manufacturing only",
          },
        ],
        emissions: "Avoided Emissions",
        emissionsText:
          "We separate the impact of organic waste recycling from the impact associated with reducing the need for urea manufacturing.",
        previous: "Impact Before the New Site",
        previousText:
          "More than 700 tons of organic waste were biologically recycled from August 2022 to June 2026, approximately 70% animal waste and 30% plant waste.",
        urea: "Urea Reduction",
        ureaText:
          "Using a conventional average of 5–9 bags per feddan annually, with each bag weighing 50 kg, a 75% reduction across 1,500 feddans is estimated to avoid around 281–506 tons of urea annually.",
        growth: "From Impact to Growth",
        growthText: "Achieved impact and operational growth targets for 2026–2027.",
        achieved: "Achieved Impact",
        newSite: "Since the new site's pilot operation began",
        operation: "Operations officially began in August 2026",
        target: "Target: 300 tons by December 2026",
        expansion: "Expansion Roadmap",
        production: "Target Production Capacity",
        productionNote: "2027 target: reaching the center's maximum operational capacity",
        farms: "Target Agricultural Land Served in 2027",
        farmsNote: "1,000 feddans of palm trees + 1,000 feddans of crops",
        engine: "Impact Engine",
        engineText:
          "Change the input values to see the estimated indicators update automatically. Fertilizer impact is calculated separately from waste impact.",
        acres: "Total cumulative feddans served",
        waste: "Total recycled organic waste (tons)",
        reduction: "Average urea reduction (%)",
        avoidedUrea: "Estimated tons of urea avoided",
        avoidedCO2: "Tons CO₂e from displaced urea manufacturing",
        wasteCO2: "Net CO₂e from waste management",
        measuring: "Under Measurement",
        methodology: "Calculation Methodology",
        methodologyText:
          "The fertilizer indicator uses the conservative minimum of 5 urea bags per feddan, each weighing 50 kg, and a manufacturing factor of 1.45 tons CO₂e per ton of urea.",
        wasteMethod:
          "Waste impact is not combined with urea impact. Net CO₂e from waste remains under measurement until dry matter, volatile solids, and plant waste moisture factors are verified.",
        model: "OUR BUSINESS MODEL",
        modelTitle: "From Waste to Soil, Then to Sustainable Value",
        steps: [
          {
            title: "Organic Waste",
            text: "Using recyclable organic resources.",
          },
          {
            title: "Processing & Conversion",
            text: "Applying vermi systems and beneficial organisms in the conversion process.",
          },
          {
            title: "Bio-based Products",
            text: "Vermi Compost, Vermi Tea, and EM1 as part of the company's agricultural solutions.",
          },
          {
            title: "Impact on the Land",
            text: "Supporting soil fertility, sustainable agriculture, and recycling awareness.",
          },
        ],
        note:
          "Note: CO₂e figures are estimates based on the company's stated assumptions and methodology. They are not direct field measurements or certified carbon credits, and do not represent the company's full carbon impact.",
      };

  const formatNumber = (number) =>
    Number(number).toLocaleString(isArabic ? "ar-EG" : "en-US", {
      maximumFractionDigits: 2,
    });

  return (
    <section
      id="impact"
      dir={isArabic ? "rtl" : "ltr"}
      className="overflow-hidden bg-[#F4EBDD] text-[#285C32]"
    >
      {/* Hero */}
      <div className="relative bg-[#285C32] px-6 py-24 text-center text-white md:py-32">
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#E8B93F]/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <span className="mb-5 inline-block rounded-full border border-[#E8B93F]/50 px-5 py-2 text-sm font-bold tracking-wider text-[#E8B93F]">
            {t.label}
          </span>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            {t.title}
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-white/80 md:text-xl">
            {t.intro}
          </p>
        </div>
      </div>

      {/* Cumulative impact */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12 max-w-3xl">
          <span className="font-bold text-[#D49A22]">{t.cumulative}</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            {t.cumulative}
          </h2>
          <p className="mt-4 leading-8 text-[#716B5F]">
            {t.cumulativeText}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.metrics.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#43834A]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="mb-8 block text-sm font-bold text-[#D49A22]">
                0{index + 1}
              </span>
              <p className="text-4xl font-extrabold text-[#43834A] md:text-5xl">
                {item.value}
              </p>
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#81786B]">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Emissions explanation */}
      <div className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="font-bold text-[#D49A22]">{t.emissions}</span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              {t.emissions}
            </h2>
            <p className="mt-5 leading-8 text-[#716B5F]">
              {t.emissionsText}
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border-s-4 border-[#43834A] bg-[#F4EBDD] p-6">
              <h3 className="mb-2 font-bold">{t.previous}</h3>
              <p className="text-sm leading-8 text-[#716B5F]">
                {t.previousText}
              </p>
            </div>

            <div className="rounded-2xl border-s-4 border-[#E8B93F] bg-[#F4EBDD] p-6">
              <h3 className="mb-2 font-bold">{t.urea}</h3>
              <p className="text-sm leading-8 text-[#716B5F]">
                {t.ureaText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Growth targets */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12 text-center">
          <span className="font-bold text-[#D49A22]">{t.growth}</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            {t.expansion}
          </h2>
          <p className="mt-4 text-[#716B5F]">{t.growthText}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-[#43834A] p-8 text-white md:p-10">
            <span className="text-sm font-bold text-[#F8D979]">
              {t.achieved}
            </span>
            <div className="mt-7 grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-extrabold md:text-5xl">+700</p>
                <p className="mt-2 text-sm text-white/80">{t.achieved}</p>
                <p className="mt-2 text-xs text-white/60">
                  Aug 2022 – Jun 2026
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold md:text-5xl">+100</p>
                <p className="mt-2 text-sm text-white/80">{t.newSite}</p>
                <p className="mt-2 text-xs text-white/60">
                  {t.operation}
                </p>
              </div>
            </div>
            <p className="mt-8 rounded-xl bg-white/10 p-4 text-sm leading-7">
              {t.target}
            </p>
          </div>

          <div className="rounded-3xl bg-[#285C32] p-8 text-white md:p-10">
            <span className="text-sm font-bold text-[#F8D979]">
              {t.expansion}
            </span>
            <div className="mt-7 grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-extrabold md:text-5xl">3,500</p>
                <p className="mt-2 text-sm text-white/80">{t.production}</p>
                <p className="mt-2 text-xs text-white/60">Tons / year</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold md:text-5xl">2,000</p>
                <p className="mt-2 text-sm text-white/80">{t.farms}</p>
                <p className="mt-2 text-xs text-white/60">{t.farmsNote}</p>
              </div>
            </div>
            <p className="mt-8 rounded-xl bg-white/10 p-4 text-sm leading-7">
              {t.productionNote}
            </p>
          </div>
        </div>
      </div>

      {/* Impact calculator */}
      <div className="bg-[#E9E2D4] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="font-bold text-[#D49A22]">{t.engine}</span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              {t.engine}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#716B5F]">
              {t.engineText}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 shadow-sm md:p-9">
              <div className="mb-7">
                <label className="mb-3 block font-bold">{t.acres}</label>
                <input
                  type="number"
                  min="0"
                  value={acres}
                  onChange={(e) => setAcres(e.target.value)}
                  className="w-full rounded-xl border border-[#D9D4C9] bg-[#FAF9F5] px-4 py-4 outline-none transition focus:border-[#43834A]"
                />
              </div>

              <div className="mb-7">
                <label className="mb-3 block font-bold">{t.waste}</label>
                <input
                  type="number"
                  min="0"
                  value={waste}
                  onChange={(e) => setWaste(e.target.value)}
                  className="w-full rounded-xl border border-[#D9D4C9] bg-[#FAF9F5] px-4 py-4 outline-none transition focus:border-[#43834A]"
                />
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <label className="font-bold">{t.reduction}</label>
                  <span className="font-extrabold text-[#43834A]">
                    {reduction}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={reduction}
                  onChange={(e) => setReduction(e.target.value)}
                  className="w-full accent-[#43834A]"
                />
                <div className="mt-2 flex justify-between text-xs text-[#81786B]">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#285C32] p-7 text-white shadow-sm md:p-9">
              <div className="mb-5 rounded-2xl bg-white/10 p-6">
                <p className="text-sm text-white/70">{t.avoidedUrea}</p>
                <p className="mt-3 text-4xl font-extrabold text-[#F8D979]">
                  {formatNumber(avoidedUrea)}{" "}
                  <span className="text-base font-medium">ton</span>
                </p>
              </div>

              <div className="mb-5 rounded-2xl bg-white/10 p-6">
                <p className="text-sm text-white/70">{t.avoidedCO2}</p>
                <p className="mt-3 text-4xl font-extrabold text-[#F8D979]">
                  {formatNumber(avoidedCO2)}{" "}
                  <span className="text-base font-medium">CO₂e</span>
                </p>
              </div>

              <div className="rounded-2xl border border-[#F8D979]/40 p-6">
                <p className="text-sm text-white/70">{t.wasteCO2}</p>
                <p className="mt-3 text-xl font-bold text-[#F8D979]">
                  {t.measuring}
                </p>
                <p className="mt-3 text-sm text-white/70">
                  {formatNumber(waste)} {isArabic ? "طن مخلفات مدخلة" : "tons of waste entered"}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#43834A]/15 bg-white/70 p-6">
            <h3 className="mb-3 font-extrabold">{t.methodology}</h3>
            <p className="text-sm leading-8 text-[#716B5F]">
              {t.methodologyText}
            </p>
            <p className="mt-3 text-sm leading-8 text-[#716B5F]">
              {t.wasteMethod}
            </p>
          </div>
        </div>
      </div>

      {/* Business model */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-14 text-center">
          <span className="font-bold text-[#D49A22]">{t.model}</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            {t.modelTitle}
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-3xl border border-[#43834A]/10 bg-white p-7 shadow-sm"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#43834A] text-lg font-extrabold text-white">
                {index + 1}
              </div>
              <h3 className="mb-3 text-lg font-extrabold">{step.title}</h3>
              <p className="text-sm leading-7 text-[#81786B]">
                {step.text}
              </p>
              {index !== 3 && (
                <div className="absolute -bottom-3 start-1/2 z-10 hidden h-6 w-6 -translate-x-1/2 rotate-45 border-b border-e border-[#E8B93F] bg-[#F4EBDD] lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Methodology note */}
      <div className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-[#D9CBAF] bg-white/60 p-6 md:p-8">
          <p className="text-sm leading-8 text-[#716B5F]">{t.note}</p>
        </div>
      </div>
    </section>
  );
}

export default Impact;

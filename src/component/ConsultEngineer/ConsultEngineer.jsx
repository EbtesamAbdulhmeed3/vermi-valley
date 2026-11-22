
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "إزاي أقدر أستشير مهندس زراعي؟",
    answer:
      "تقدر تكتب استفسارك وتوضح طبيعة أرضك والمحصول اللي بتزرعه، علشان نقدر نوجّه استفسارك للمختص.",
  },
  {
    question: "هل لازم أحدد نوع المحصول؟",
    answer:
      "توضيح نوع المحصول بيساعد في فهم ظروف استفسارك بشكل أفضل.",
  },
  {
    question: "هل كل الأراضي ليها نفس التوصيات؟",
    answer:
      "ظروف كل أرض ومحصول بتختلف، علشان كده لازم نفهم تفاصيل الحالة قبل تقديم أي توصية.",
  },
  {
    question: "هل أقدر أسأل عن منتجات Vermi Valley؟",
    answer:
      "أيوه، تقدر تكتب استفسارك عن المنتجات واستخداماتها.",
  },
  {
    question: "إيه المعلومات اللي أكتبها في الاستفسار؟",
    answer:
      "اكتب نوع المحصول، وطبيعة المشكلة أو السؤال، وأي تفاصيل شايف إنها مهمة.",
  },
  {
    question: "هل التوصيات مناسبة لكل الحالات؟",
    answer:
      "أي توصية لازم تراعي ظروف الأرض والمحصول، والقرار النهائي بيكون بعد مراجعة تفاصيل الحالة.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ConsultEngineer() {
  const [userType, setUserType] = useState("farmer");
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#F2EEDF] text-[#11341B]"
    >
      {/* Hero */}
      <section className="relative px-5 pb-20 pt-24 md:px-12 lg:px-20">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#A4D561]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A4D561] bg-[#A4D561]/20 px-5 py-2 text-sm font-bold">
              <span className="h-2 w-2 rounded-full bg-[#11341B]" />
              الاستشارة الزراعية
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
              أرضك ليها ظروفها…
              <span className="mt-2 block text-[#668D37]">
                اسأل قبل ما تختار
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-9 text-[#11341B]/75">
              كل أرض ليها طبيعتها، وكل محصول ليه احتياجاته.
              شاركنا استفسارك والتفاصيل اللي تخص أرضك علشان نقدر
              نفهم حالتك ونوجّه سؤالك للمختص.
            </p>

            <a
              href="#consult-form"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#11341B] px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#254E2D]"
            >
              ابدأ استفسارك
              <span className="text-xl">←</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-5 rounded-[3rem] bg-[#A4D561]/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#A4D561]/60 bg-[#A4D561]/20 p-5">
              <div className="rounded-[2rem] bg-[#11341B] p-8 text-[#F2EEDF] md:p-10">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm text-[#A4D561]">
                    VERMI VALLEY
                  </span>
                  <span className="text-3xl">🌱</span>
                </div>

                <div className="mb-8 flex h-40 items-center justify-center">
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-[#A4D561]/40 bg-[#A4D561]/10">
                    <div className="absolute h-28 w-28 rounded-full border border-dashed border-[#A4D561]/50" />
                    <span className="text-6xl">🌿</span>
                  </div>
                </div>

                <h2 className="mb-3 text-center text-2xl font-bold">
                  كل أرض تستحق اهتمام
                </h2>
                <p className="text-center leading-8 text-[#F2EEDF]/70">
                  افهم احتياجات أرضك قبل ما تختار المنتج المناسب.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-4 rounded-2xl bg-[#A4D561] px-5 py-3 font-bold shadow-lg">
              اسأل واستفسر 🌱
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Type */}
      <section className="px-5 py-16 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold text-[#668D37]">
              خلينا نعرفك أكتر
            </span>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              إنت بتزورنا بصفتك إيه؟
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#11341B]/65">
              اختار نوعك علشان نقدر نفهم طبيعة استفسارك بشكل أفضل.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <button
              type="button"
              onClick={() => setUserType("farmer")}
              className={`rounded-3xl border-2 p-8 text-right transition duration-300 ${
                userType === "farmer"
                  ? "border-[#11341B] bg-[#A4D561]/30 shadow-lg"
                  : "border-[#11341B]/10 bg-white/40 hover:border-[#A4D561]"
              }`}
            >
              <span className="mb-5 block text-5xl">🌾</span>
              <h3 className="text-2xl font-extrabold">أنا مزارع</h3>
              <p className="mt-3 leading-7 text-[#11341B]/65">
                عندي أرض أو محصول وعايز أسأل عن احتياجاته.
              </p>
              <span className="mt-5 inline-block text-sm font-bold text-[#668D37]">
                {userType === "farmer" ? "✓ تم الاختيار" : "اختار"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setUserType("engineer")}
              className={`rounded-3xl border-2 p-8 text-right transition duration-300 ${
                userType === "engineer"
                  ? "border-[#11341B] bg-[#A4D561]/30 shadow-lg"
                  : "border-[#11341B]/10 bg-white/40 hover:border-[#A4D561]"
              }`}
            >
              <span className="mb-5 block text-5xl">👨‍🌾</span>
              <h3 className="text-2xl font-extrabold">أنا مهندس زراعي</h3>
              <p className="mt-3 leading-7 text-[#11341B]/65">
                مهتم بالتعاون أو الاستفسار عن منتجاتنا.
              </p>
              <span className="mt-5 inline-block text-sm font-bold text-[#668D37]">
                {userType === "engineer" ? "✓ تم الاختيار" : "اختار"}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consult-form" className="px-5 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-[#11341B] shadow-xl lg:grid-cols-5">
          <div className="p-8 text-[#F2EEDF] md:p-12 lg:col-span-2">
            <span className="text-sm font-bold text-[#A4D561]">
              تواصل معانا
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight">
              احكيلنا عن استفسارك
            </h2>

            <p className="mt-5 leading-8 text-[#F2EEDF]/70">
              كل ما وضحت تفاصيل أرضك أو سؤالك، هيساعدنا ده نفهم
              احتياجك بشكل أفضل.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A4D561]/15 text-2xl">
                  🌱
                </span>
                <span className="text-sm">كل أرض ليها ظروفها</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A4D561]/15 text-2xl">
                  💬
                </span>
                <span className="text-sm">شاركنا سؤالك بوضوح</span>
              </div>
            </div>
          </div>

          <div className="bg-white/95 p-8 md:p-12 lg:col-span-3">
            <h3 className="mb-8 text-2xl font-extrabold">
              بيانات الاستفسار
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    الاسم
                  </label>
                  <input
                    type="text"
                    placeholder="اكتب اسمك"
                    className="w-full rounded-xl border border-[#11341B]/15 bg-[#F2EEDF]/50 px-4 py-4 outline-none transition focus:border-[#668D37]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    رقم الموبايل
                  </label>
                  <input
                    type="tel"
                    placeholder="01xxxxxxxxx"
                    dir="ltr"
                    className="w-full rounded-xl border border-[#11341B]/15 bg-[#F2EEDF]/50 px-4 py-4 text-right outline-none transition focus:border-[#668D37]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  المحافظة
                </label>
                <input
                  type="text"
                  placeholder="اكتب المحافظة"
                  className="w-full rounded-xl border border-[#11341B]/15 bg-[#F2EEDF]/50 px-4 py-4 outline-none transition focus:border-[#668D37]"
                />
              </div>

              {userType === "farmer" && (
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    نوع المحصول
                  </label>
                  <input
                    type="text"
                    placeholder="بتزرع إيه؟"
                    className="w-full rounded-xl border border-[#11341B]/15 bg-[#F2EEDF]/50 px-4 py-4 outline-none transition focus:border-[#668D37]"
                  />
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-bold">
                  تفاصيل الاستفسار
                </label>
                <textarea
                  rows="5"
                  placeholder="احكيلنا عن سؤالك أو احتياجك..."
                  className="w-full resize-none rounded-xl border border-[#11341B]/15 bg-[#F2EEDF]/50 px-4 py-4 outline-none transition focus:border-[#668D37]"
                />
              </div>

              <button
                type="button"
                disabled
                className="w-full cursor-not-allowed rounded-xl bg-[#11341B]/50 px-6 py-4 font-bold text-white"
              >
                إرسال الاستفسار قريبًا
              </button>

              <p className="text-center text-xs leading-6 text-[#11341B]/50">
                سيتم تفعيل استقبال الاستفسارات بعد اعتماد وسيلة
                الإرسال من الشركة.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold text-[#668D37]">
              أسئلة المزارعين
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              عندك سؤال؟ ممكن تلاقي إجابته هنا
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[#11341B]/10 bg-white/60"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-right font-bold md:p-6"
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#A4D561]/40 text-xl"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-8 text-[#11341B]/70">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 pb-20 md:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#A4D561] px-8 py-12 text-center md:py-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            كل بداية صح بتبدأ بسؤال
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-[#11341B]/75">
            افهم احتياجات أرضك واتعرف على منتجات Vermi Valley.
          </p>
          <a
            href="/products"
            className="mt-8 inline-flex rounded-full bg-[#11341B] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#254E2D]"
          >
            شوف المنتجات والأسعار
          </a>
        </div>
      </section>
    </main>
  );
}

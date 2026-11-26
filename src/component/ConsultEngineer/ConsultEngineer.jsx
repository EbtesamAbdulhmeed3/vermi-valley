import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import heroImage from "../../assets/imge/web image 2.jpg";
import engineerIcon from "../../assets/imge/engineer.svg";
import farmerIcon from "../../assets/imge/farmer.svg";
import elementImage from "../../assets/imge/element -2.svg";

const WHATSAPP_NUMBER = "201282111101";

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

/* أيقونة SVG بلون أخضر فاتح (بتستخدم الأيقونة كقالب) */
function LightGreenIcon({ src, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "inline-block",
        backgroundColor: "#A4D561",
        WebkitMaskImage: `url("${src}")`,
        maskImage: `url("${src}")`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

/* WhatsApp outline icon */
function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className="h-6 w-6"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M26.5 15.5a10.5 10.5 0 0 1-15.4 9.3L5 26.5l1.8-5.8A10.5 10.5 0 1 1 26.5 15.5Z" />
      <path d="M11.5 10.5c.3-.7.7-.7 1-.7h.8c.3 0 .5.1.7.6l1 2.2c.1.3.1.5-.1.8l-.8 1c-.2.2-.2.4 0 .7.5.9 1.3 1.7 2.2 2.2.3.2.5.2.7 0l1-1c.2-.2.5-.2.8-.1l2.2 1c.5.2.6.4.6.7v.8c0 .3 0 .7-.7 1-1 .5-2.4.5-4.4-.4-2.1-.9-4-2.7-5-4.8-.9-2-.9-3.4-.4-4.4Z" />
    </svg>
  );
}

export default function ConsultEngineer() {
  const [userType, setUserType] = useState("farmer");
  const [openFaq, setOpenFaq] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    governorate: "",
    crop: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userTypeText =
      userType === "farmer" ? "مزارع" : "مهندس زراعي";

    const message = `
استفسار جديد من موقع Vermi Valley 🌱

الصفة: ${userTypeText}

الاسم: ${formData.name}
رقم الموبايل: ${formData.phone}
المحافظة: ${formData.governorate}
${userType === "farmer" ? `نوع المحصول: ${formData.crop}` : ""}

تفاصيل الاستفسار:
${formData.message}
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#F2EEDF] text-[#11341B]"
    >
      {/* Hero */}
      <section className="relative px-5 pb-20 pt-24 md:px-12 lg:px-20">
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

          {/* Hero Image - Simple Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-full max-w-lg"
          >
            <img
              src={heroImage}
              alt="مهندس زراعي"
              className="h-[320px] w-full rounded-3xl object-cover object-center sm:h-[400px] lg:h-[460px]"
            />
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
            {/* Farmer */}
            <button
              type="button"
              onClick={() => setUserType("farmer")}
              className={`rounded-3xl border-2 p-8 text-right transition duration-300 ${
                userType === "farmer"
                  ? "border-[#668D37] bg-[#A4D561]/20 shadow-md"
                  : "border-[#11341B]/10 bg-white/40 hover:border-[#A4D561]"
              }`}
            >
              <LightGreenIcon
                src={farmerIcon}
                className="mb-5 h-16 w-16"
              />

              <h3 className="text-2xl font-extrabold">
                أنا مزارع
              </h3>

              <p className="mt-3 leading-7 text-[#11341B]/65">
                عندي أرض أو محصول وعايز أسأل عن احتياجاته.
              </p>

              <span className="mt-5 inline-block text-sm font-bold text-[#668D37]">
                {userType === "farmer" ? "✓ تم الاختيار" : "اختار"}
              </span>
            </button>

            {/* Engineer */}
            <button
              type="button"
              onClick={() => setUserType("engineer")}
              className={`rounded-3xl border-2 p-8 text-right transition duration-300 ${
                userType === "engineer"
                  ? "border-[#668D37] bg-[#A4D561]/20 shadow-md"
                  : "border-[#11341B]/10 bg-white/40 hover:border-[#A4D561]"
              }`}
            >
              <LightGreenIcon
                src={engineerIcon}
                className="mb-5 h-16 w-16"
              />

              <h3 className="text-2xl font-extrabold">
                أنا مهندس زراعي
              </h3>

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
              {/* Element 2 */}
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#A4D561]/50 bg-[#A4D561]/10 p-2">
                  <img
                    src={elementImage}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </span>

                <span className="text-sm">
                  كل أرض ليها ظروفها
                </span>
              </div>

              {/* WhatsApp Icon */}
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#A4D561]/60 bg-transparent text-[#A4D561]">
                  <WhatsAppIcon />
                </span>

                <span className="text-sm">
                  شاركنا سؤالك بوضوح
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/95 p-8 md:p-12 lg:col-span-3">
            <h3 className="mb-8 text-2xl font-extrabold">
              بيانات الاستفسار
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    الاسم
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="اكتب اسمك"
                    required
                    className="w-full rounded-xl border border-[#11341B]/15 bg-[#F2EEDF]/50 px-4 py-4 outline-none transition focus:border-[#668D37]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    رقم الموبايل
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="01xxxxxxxxx"
                    dir="ltr"
                    required
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
                  name="governorate"
                  value={formData.governorate}
                  onChange={handleChange}
                  placeholder="اكتب المحافظة"
                  required
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
                    name="crop"
                    value={formData.crop}
                    onChange={handleChange}
                    placeholder="بتزرع إيه؟"
                    required
                    className="w-full rounded-xl border border-[#11341B]/15 bg-[#F2EEDF]/50 px-4 py-4 outline-none transition focus:border-[#668D37]"
                  />
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-bold">
                  تفاصيل الاستفسار
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="احكيلنا عن سؤالك أو احتياجك..."
                  required
                  className="w-full resize-none rounded-xl border border-[#11341B]/15 bg-[#F2EEDF]/50 px-4 py-4 outline-none transition focus:border-[#668D37]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#11341B] px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#254E2D]"
              >
                إرسال الاستفسار عبر واتساب
              </button>

              <p className="text-center text-xs leading-6 text-[#11341B]/50">
                سيتم فتح واتساب برسالتك، ويمكنك مراجعتها وإرسالها للشركة.
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
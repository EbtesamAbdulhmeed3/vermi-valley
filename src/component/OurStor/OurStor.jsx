
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import pattern from "../../assets/imge/vv pattern 1.png";
import locationImage from "../../assets/imge/loction9.jpg";

const storySteps = [
  {
    number: "01",
    title: "البداية من الأرض",
    description:
      "بدأت الحكاية من تجربة زراعية في أرض الوادي الجديد، ومن الرغبة في الوصول لحلول تخدم التربة.",
  },
  {
    number: "02",
    title: "التعرّف على الفيرمي",
    description:
      "مع البحث والتجربة، ظهر الفيرمي كطريقة للاستفادة من المخلفات العضوية باستخدام الديدان.",
  },
  {
    number: "03",
    title: "من التجربة إلى الإنتاج",
    description:
      "تحولت الفكرة إلى مشروع Vermi Valley لإنتاج الفيرمي كومبوست ومنتجات حيوية من معالجة المخلفات العضوية.",
  },
];

export default function OurStory() {
  return (
    <section
      id="about"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#F2EEDF] py-20 md:py-28"
    >
      {/* Background Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `url("${pattern}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "380px",
          opacity: 0.07,
        }}
      />

      {/* Soft Decorative Shapes */}
      <div className="pointer-events-none absolute -right-28 top-20 -z-10 h-72 w-72 rounded-full bg-[#A4D561]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-72 w-72 rounded-full bg-[#11341B]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#11341B]/10 bg-[#A4D561]/20 px-5 py-2 text-sm font-semibold text-[#11341B]">
            <span className="h-2 w-2 rounded-full bg-[#A4D561]" />
            حكاية Vermi Valley
          </span>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-relaxed text-[#11341B] md:text-5xl">
            كل حكاية عظيمة
            <span className="text-[#668F3B]">
              {" "}بتبدأ من الأرض
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#526457] md:text-lg">
            من تجربة زراعية في الوادي الجديد، بدأت رحلة البحث عن طريقة
            للاستفادة من المخلفات العضوية وتحويلها إلى قيمة تخدم الأرض.
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border-2 border-[#11341B]/20" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#DDE5D3] shadow-xl shadow-[#11341B]/10">
              <img
                src={locationImage}
                alt="أرض زراعية في الوادي الجديد"
                className="h-[380px] w-full object-cover md:h-[520px]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#11341B]/85 via-[#11341B]/10 to-transparent" />

              <div className="absolute bottom-0 right-0 p-7 text-white md:p-9">
                <span className="mb-2 block text-sm font-medium text-[#C5E69B]">
                  من الوادي الجديد
                </span>

                <h3 className="text-2xl font-bold md:text-3xl">
                  بدأت الحكاية...
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-7 text-white/90">
                  فكرة نمت بالتجربة، واتجهت نحو الاستفادة من الموارد العضوية.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="pt-5 lg:pt-0"
          >
            <span className="text-sm font-bold tracking-wide text-[#668F3B]">
              OUR STORY
            </span>

            <h3 className="mt-3 text-2xl font-bold leading-relaxed text-[#11341B] md:text-3xl">
              من تجربة على أرض الواقع
              <br />
              <span className="text-[#668F3B]">
                إلى مشروع له هدف
              </span>
            </h3>

            <p className="mt-6 text-base leading-9 text-[#526457]">
              بدأت رحلة Vermi Valley مع المهندس محمد أبو عقيل من خلال تجربة
              زراعية في أرضه بالوادي الجديد. ومع التعرّف على تقنية الفيرمي،
              بدأت تتشكل فكرة الاستفادة من الديدان في معالجة المخلفات العضوية
              وإنتاج الفيرمي كومبوست.
            </p>

            <p className="mt-4 text-base leading-9 text-[#526457]">
              ومن هنا بدأت Vermi Valley رحلتها لتقديم منتجات حيوية تساعد في
              خدمة التربة، مع الاهتمام بالتجربة والتطوير والاستفادة من الموارد
              المتاحة.
            </p>

            {/* Story Timeline */}
            <div className="mt-9 space-y-6">
              {storySteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="flex gap-4"
                >
                  <div className="flex shrink-0 flex-col items-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#11341B]/10 bg-[#A4D561]/25 text-sm font-bold text-[#11341B]">
                      {step.number}
                    </span>

                    {index !== storySteps.length - 1 && (
                      <span className="mt-2 h-full min-h-8 w-px bg-[#11341B]/20" />
                    )}
                  </div>

                  <div className="pb-2">
                    <h4 className="text-lg font-bold text-[#11341B]">
                      {step.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-[#526457]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* About Button */}
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#11341B] px-7 py-3.5 font-semibold text-[#F2EEDF] shadow-md shadow-[#11341B]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#315B27] hover:shadow-lg"
            >
              اعرف حكايتنا
              <span aria-hidden="true">←</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

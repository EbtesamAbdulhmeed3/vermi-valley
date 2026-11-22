
import { motion } from "motion/react";

import element1 from "../../assets/imge/element -1.svg";
import element2 from "../../assets/imge/element -2.svg";
import element3 from "../../assets/imge/element -3.svg";
import pattern from "../../assets/imge/vv pattern 1.png";

const stages = [
  {
    number: "01",
    title: "المخلفات العضوية",
    subtitle: "بداية الرحلة",
    description:
      "نبدأ بمواد عضوية يمكن الاستفادة منها بدلًا من تركها كمخلفات بلا قيمة.",
    icon: element1,
    color: "bg-[#A4D561]/20",
  },
  {
    number: "02",
    title: "دور ديدان الأرض",
    subtitle: "التحول الطبيعي",
    description:
      "تشارك الديدان في معالجة المواد العضوية وتحويلها خلال عملية الفيرمي.",
    icon: null,
    color: "bg-[#A4D561]/20",
  },
  {
    number: "03",
    title: "الفيرمي كومبوست",
    subtitle: "قيمة جديدة للتربة",
    description:
      "الناتج هو الفيرمي كومبوست، أحد المنتجات التي تقدمها Vermi Valley لخدمة التربة.",
    icon: element2,
    color: "bg-[#A4D561]/20",
  },
];

export default function ProductionJourney() {
  return (
    <section
      id="production"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#F2EEDF] py-20 md:py-28"
    >
      {/* Background Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${pattern}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "380px",
          opacity: 0.06,
        }}
      />

      {/* Decorative Element */}
      <img
        src={element3}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -left-16 z-0 w-56 opacity-20 md:w-80"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#11341B]/10 bg-[#A4D561]/20 px-5 py-2 text-sm font-semibold text-[#11341B]">
            <span className="h-2 w-2 rounded-full bg-[#A4D561]" />
            من المخلفات إلى القيمة
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-relaxed text-[#11341B] md:text-5xl">
            رحلة التحول
            <span className="text-[#668F3B]"> تبدأ من هنا</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[#526457] md:text-lg">
            بنستفيد من المخلفات العضوية من خلال تقنية الفيرمي، في رحلة
            بتربط بين الطبيعة والاستفادة من الموارد.
          </p>
        </motion.div>

        {/* Stages */}
        <div className="relative grid gap-8 md:grid-cols-3 md:gap-6">
          {/* Connecting Line */}
          <div className="absolute right-[16%] left-[16%] top-16 hidden h-0.5 bg-[#A4D561]/70 md:block" />

          {stages.map((stage, index) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.18 }}
              className="relative z-10"
            >
              <div className="group h-full rounded-[2rem] border border-[#11341B]/10 bg-[#F8F6EC] p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#11341B]/10 md:p-8">
                {/* Icon */}
                <div
                  className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full ${stage.color} shadow-sm transition duration-500 group-hover:scale-110`}
                >
                  {stage.icon ? (
                    <img
                      src={stage.icon}
                      alt=""
                      className="h-16 w-16 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-5xl" aria-label="دودة الأرض">
                      🪱
                    </span>
                  )}
                </div>

                <span className="mt-7 inline-block rounded-full border border-[#11341B]/10 bg-[#A4D561]/15 px-4 py-1.5 text-xs font-bold tracking-widest text-[#11341B]">
                  STAGE {stage.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#11341B] md:text-2xl">
                  {stage.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#668F3B]">
                  {stage.subtitle}
                </p>

                <p className="mt-5 text-sm leading-8 text-[#526457]">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 overflow-hidden rounded-3xl bg-[#11341B] px-6 py-8 text-center md:px-12"
        >
          <p className="relative z-10 text-lg font-bold leading-8 text-[#F2EEDF] md:text-2xl">
            كل مرحلة بتضيف قيمة...
            <span className="text-[#A4D561]">
              {" "}والأرض هي المستفيد الأول.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

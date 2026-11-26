import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../component/Context/languge";
import locationImage from "../../assets/imge/loction9.jpg";

// حركة ظهور الكلمات بالتتابع
const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const wordAnimation = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

// مكون لعرض كل كلمة بحركة منفصلة
function AnimatedWords({ text, className = "" }) {
  return (
    <motion.p
      variants={wordContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={wordAnimation}
          className="inline-block"
        >
          {word}
          {"\u00A0"}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function OurStory() {
  const { isArabic } = useLanguage();

  const content = {
    label: isArabic ? "حكاية Vermi Valley" : "The Vermi Valley Story",

    headingStart: isArabic ? "كل حكاية عظيمة" : "Every great story",
    headingEnd: isArabic ? "بتبدأ من الأرض" : "begins with the land",

    intro: isArabic
      ? "من تجربة زراعية في الوادي الجديد، بدأت رحلة البحث عن طريقة للاستفادة من المخلفات العضوية وتحويلها إلى قيمة تخدم الأرض."
      : "From an agricultural experiment in New Valley, a journey began to discover ways to turn organic waste into valuable resources that benefit the land.",

    imageLabel: isArabic ? "من الوادي الجديد" : "From New Valley",
    imageTitle: isArabic ? "بدأت الحكاية..." : "The story began...",
    imageDescription: isArabic
      ? "فكرة نمت بالتجربة، واتجهت نحو الاستفادة من الموارد العضوية."
      : "An idea that grew through experimentation and a vision to make better use of organic resources.",

    storyHeadingStart: isArabic
      ? "من تجربة على أرض الواقع"
      : "From a real-life experiment",

    storyHeadingEnd: isArabic
      ? "إلى مشروع له هدف"
      : "to a project with a purpose",

    paragraphOne: isArabic
      ? "بدأت رحلة Vermi Valley مع المهندس محمد أبو عقيل من خلال تجربة زراعية في أرضه بالوادي الجديد. ومع التعرّف على تقنية الفيرمي، بدأت تتشكل فكرة الاستفادة من الديدان في معالجة المخلفات العضوية وإنتاج الفيرمي كومبوست."
      : "Vermi Valley began with engineer Mohamed Abu Aqeel and an agricultural experiment on his land in New Valley. As he explored vermicomposting, the idea of using earthworms to process organic waste and produce vermicompost began to take shape.",

    paragraphTwo: isArabic
      ? "ومن هنا بدأت Vermi Valley رحلتها لتقديم منتجات حيوية تساعد في خدمة التربة، مع الاهتمام بالتجربة والتطوير والاستفادة من الموارد المتاحة."
      : "From there, Vermi Valley began its journey to provide biological products that support soil health, while focusing on experimentation, development, and making the most of available resources.",

    steps: isArabic
      ? [
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
        ]
      : [
          {
            number: "01",
            title: "A Beginning with the Land",
            description:
              "The story started with an agricultural experiment in New Valley and a desire to find solutions that benefit the soil.",
          },
          {
            number: "02",
            title: "Discovering Vermicomposting",
            description:
              "Through research and experimentation, vermicomposting emerged as a way to make use of organic waste with earthworms.",
          },
          {
            number: "03",
            title: "From Experiment to Production",
            description:
              "The idea grew into Vermi Valley, producing vermicompost and biological products through organic waste processing.",
          },
        ],

    button: isArabic ? "اعرف حكايتنا" : "Discover Our Story",
  };

  return (
    <section
      id="about"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-[#F2EEDF] pt-8 pb-14 md:pt-10 md:pb-20"
    >
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* عنوان السيكشن */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-9 text-center md:mb-11"
        >
          <span className="mb-3 inline-block border-b-2 border-[#A4D561] pb-2 text-sm font-bold text-[#11341B]">
            {content.label}
          </span>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-relaxed text-[#11341B] md:text-5xl">
            {content.headingStart}{" "}
            <span className="text-[#668F3B]">{content.headingEnd}</span>
          </h2>

          <AnimatedWords
            text={content.intro}
            className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#526457] md:text-lg"
          />
        </motion.div>

        {/* محتوى الحكاية */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* الصورة */}
          <motion.div
            initial={{
              opacity: 0,
              x: isArabic ? 100 : -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative overflow-hidden rounded-2xl bg-[#DDE5D3]">
              <img
                src={locationImage}
                alt={
                  isArabic
                    ? "أرض زراعية في الوادي الجديد"
                    : "Agricultural land in New Valley"
                }
                className="h-[340px] w-full object-cover md:h-[460px]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#11341B]/80 via-[#11341B]/10 to-transparent" />

              <div
                className={`absolute bottom-0 p-6 text-white md:p-8 ${
                  isArabic ? "right-0" : "left-0"
                }`}
              >
                <span className="mb-2 block text-sm font-medium text-[#A4D561]">
                  {content.imageLabel}
                </span>

                <h3 className="text-2xl font-bold md:text-3xl">
                  {content.imageTitle}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-7 text-white/90">
                  {content.imageDescription}
                </p>
              </div>
            </div>
          </motion.div>

          {/* النص */}
          <motion.div
            initial={{
              opacity: 0,
              x: isArabic ? -70 : 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="pt-0 lg:pt-0"
          >
            <h3 className="text-2xl font-bold leading-relaxed text-[#11341B] md:text-3xl">
              {content.storyHeadingStart}
              <br />
              <span className="text-[#668F3B]">
                {content.storyHeadingEnd}
              </span>
            </h3>

            <AnimatedWords
              text={content.paragraphOne}
              className="mt-5 text-base leading-9 text-[#526457]"
            />

            <AnimatedWords
              text={content.paragraphTwo}
              className="mt-3 text-base leading-9 text-[#526457]"
            />

            {/* مراحل الحكاية */}
            <div className="mt-7 space-y-5">
              {content.steps.map((step, index) => (
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

                    {index !== content.steps.length - 1 && (
                      <span className="mt-2 h-full min-h-8 w-px bg-[#11341B]/20" />
                    )}
                  </div>

                  <div className="pb-2">
                    <h4 className="text-lg font-bold text-[#11341B]">
                      {step.title}
                    </h4>

                    <AnimatedWords
                      text={step.description}
                      className="mt-2 text-sm leading-7 text-[#526457]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* زر اعرف حكايتنا */}
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#11341B] px-7 py-3.5 font-semibold text-[#F2EEDF] transition duration-300 hover:-translate-y-1 hover:bg-[#315B27]"
            >
              {content.button}
              <span aria-hidden="true">{isArabic ? "←" : "→"}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
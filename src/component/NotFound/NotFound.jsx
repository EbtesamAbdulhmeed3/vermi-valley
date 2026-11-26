
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../Context/languge";

import element2 from "../../assets/imge/element -2.svg";

function NotFound() {
  const { isArabic } = useLanguage();

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#F2EEDF] px-6 py-20">

      {/* Decorative background */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#A4D561]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[#668F3B]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        {/* Vermi Valley Logo Element */}
        <motion.img
          src={element2}
          alt="Vermi Valley Element"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-5 h-28 w-28 object-contain sm:h-36 sm:w-36"
        />

        <span className="mb-4 inline-block rounded-full bg-[#A4D561]/25 px-5 py-2 text-sm font-bold text-[#11341B]">
          VERMI VALLEY
        </span>

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-3 text-[110px] font-black leading-none tracking-tight text-[#11341B] sm:text-[160px]"
        >
          404
        </motion.h1>

        <div className="mx-auto mb-7 h-1.5 w-24 rounded-full bg-[#A4D561]" />

        <h2 className="mb-4 text-2xl font-extrabold text-[#11341B] sm:text-3xl">
          {isArabic
            ? "عذرًا! الصفحة دي مش موجودة"
            : "Oops! Page Not Found"}
        </h2>

        <p className="mx-auto mb-9 max-w-lg text-base leading-8 text-[#526457] sm:text-lg">
          {isArabic
            ? "يبدو إن الرابط اللي بتحاول توصله غير صحيح أو الصفحة اتنقلت لمكان تاني. لكن لسه تقدر تكتشف عالم فيرمي فالي!"
            : "The link you're trying to reach may be incorrect, or the page may have moved. You can still explore the world of Vermi Valley!"}
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[#11341B] px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#668F3B]"
        >
          {isArabic ? "العودة للصفحة الرئيسية" : "Back to Homepage"}
          <span className="text-xl">
            {isArabic ? "←" : "→"}
          </span>
        </Link>

        <p className="mt-10 text-sm font-medium text-[#526457]/70">
          {isArabic
            ? "من الأرض ننشئ المستقبل"
            : "From the Earth, We Create the Future"}
        </p>
      </motion.div>
    </section>
  );
}

export default NotFound;

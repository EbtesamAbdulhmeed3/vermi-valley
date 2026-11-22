
import { useLanguage } from "../component/Context/languge";
import Hero from "../component/Hero/Hero";
import OurStory from "../component/OurStor/OurStor";
import ProductionJourney from "../component/ProductionJourney/ProductionJourney";

function SectionTitle({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="mb-4 block text-sm font-bold tracking-widest text-[#6D963D]">
        {eyebrow}
      </span>

      <h2
        className={`text-3xl font-extrabold leading-relaxed sm:text-4xl lg:text-5xl ${
          light ? "text-[#F2EEDF]" : "text-[#173B29]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-8 ${
            light ? "text-[#F2EEDF]/70" : "text-[#526457]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function Home() {
  const { isArabic } = useLanguage();
  const ar = isArabic;

  return (
    <main dir={ar ? "rtl" : "ltr"} className="overflow-hidden">

      {/* 1. HERO */}
      <Hero />

      {/* 2. OUR STORY */}
      <OurStory />

      {/* 3. PRODUCTION JOURNEY */}
      <ProductionJourney />

      {/* 4. OUR IMPACT */}
      <section className="bg-[#E8EDDF] px-5 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl text-center">

          <SectionTitle
            eyebrow={ar ? "أثرنا" : "OUR IMPACT"}
            title={
              ar
                ? "أثر يبدأ من التربة ويمتد للمجتمع"
                : "An Impact That Goes Beyond Soil"
            }
            description={
              ar
                ? "نؤمن أن الاستدامة تبدأ من الاستخدام الأفضل للموارد، وتمتد إلى دعم الزراعة والمجتمع."
                : "We believe sustainability begins with better resource use and extends to agriculture and communities."
            }
          />

          <div className="grid gap-5 text-start sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "♻",
                title: ar ? "إعادة التدوير" : "Recycling",
                text: ar
                  ? "تحويل المخلفات العضوية إلى قيمة."
                  : "Turning organic waste into value.",
              },
              {
                icon: "🌱",
                title: ar ? "خصوبة التربة" : "Soil Health",
                text: ar
                  ? "تقديم منتجات حيوية تخدم التربة."
                  : "Bio-based products for the soil.",
              },
              {
                icon: "🌍",
                title: ar ? "الاستدامة" : "Sustainability",
                text: ar
                  ? "دعم ممارسات أكثر استدامة."
                  : "Supporting sustainable practices.",
              },
              {
                icon: "🤝",
                title: ar ? "دعم المجتمع" : "Community",
                text: ar
                  ? "دعم الأفكار والمشروعات الناشئة."
                  : "Supporting emerging ideas and projects.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="mb-5 block text-4xl">
                  {item.icon}
                </span>

                <h3 className="mb-3 text-xl font-extrabold text-[#173B29]">
                  {item.title}
                </h3>

                <p className="leading-7 text-[#647267]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/impact"
            className="mt-10 inline-flex rounded-xl border border-[#173B29] px-7 py-4 font-bold text-[#173B29] transition hover:bg-[#173B29] hover:text-white"
          >
            {ar ? "اكتشف أثرنا" : "Explore Our Impact"}
          </a>
        </div>
      </section>

      {/* 5. PRODUCTS */}
      <section
        id="products"
        className="bg-[#F2EEDF] px-5 py-24 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow={ar ? "منتجاتنا" : "OUR PRODUCTS"}
            title={
              ar
                ? "حلول حيوية تبدأ من الطبيعة"
                : "Bio-based Solutions from Nature"
            }
            description={
              ar
                ? "اكتشف منتجات Vermi Valley وتعرّف على الخيارات المتاحة لخدمة أرضك."
                : "Explore Vermi Valley products and discover options for your land."
            }
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Vermi Compost",
                desc: ar ? "فيرمي كومبوست" : "Organic soil amendment",
                icon: "🌱",
              },
              {
                name: "Vermi Tea",
                desc: ar ? "مخصب حيوي سائل" : "Liquid biofertilizer",
                icon: "💧",
              },
              {
                name: ar ? "ديدان الفيرمي" : "Vermi Worms",
                desc: ar
                  ? "ديدان متخصصة في المعالجة"
                  : "Specialized composting worms",
                icon: "🪱",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="rounded-3xl border border-[#D9DEC9] bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="mb-8 block text-5xl">
                  {product.icon}
                </span>

                <h3 className="text-2xl font-extrabold text-[#173B29]">
                  {product.name}
                </h3>

                <p className="mt-3 text-[#647267]">
                  {product.desc}
                </p>

                <a
                  href="/products"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-[#5D852E]"
                >
                  {ar ? "اعرف المزيد" : "Learn More"} ←
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="relative overflow-hidden bg-[#A4D561] px-5 py-24 text-center sm:px-10">
        <div className="relative z-10 mx-auto max-w-3xl">

          <span className="text-sm font-extrabold tracking-widest text-[#315B27]">
            VERMI VALLEY
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-relaxed text-[#173B29] sm:text-5xl">
            {ar
              ? "رحلتنا مستمرة... ونحب تكون جزء منها"
              : "Our Journey Continues. Be Part of It."}
          </h2>

          <p className="mt-5 leading-8 text-[#315B27]">
            {ar
              ? "تعرّف على منتجاتنا، شاهد التجارب، أو تواصل مع فريقنا."
              : "Explore our products, discover our work, or get in touch."}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="/products"
              className="rounded-xl bg-[#173B29] px-8 py-4 font-bold text-white transition hover:bg-[#315B27]"
            >
              {ar ? "اكتشف المنتجات" : "Explore Products"}
            </a>

            <a
              href="/contact"
              className="rounded-xl border-2 border-[#173B29] px-8 py-4 font-bold text-[#173B29] transition hover:bg-white/40"
            >
              {ar ? "تواصل معنا" : "Contact Us"}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;

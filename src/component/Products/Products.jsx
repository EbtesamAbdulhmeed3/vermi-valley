
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "../Context/languge";
import { WHATSAPP_NUMBER } from "../Data/translations";

// Load product photos and icons from src/assets/imge.
const localImages = import.meta.glob("/src/assets/imge/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const normalizeImageName = (value) =>
  value.toLowerCase().replace(/\.[^.]+$/, "").replace(/[^a-z0-9]/g, "");

const getProductImage = (baseName, fallback) => {
  const targetName = normalizeImageName(baseName);
  const match = Object.entries(localImages).find(([path]) =>
    normalizeImageName(path.split("/").pop()) === targetName
  );

  return match?.[1] || fallback;
};

// Local SVG icons
const benefitIcons = {
  recycle: getProductImage("recycle.svg", ""),
  support: getProductImage("support.svg", ""),
  globe: getProductImage("globe.svg", ""),
};

const cartIcon = getProductImage("element-2.svg", "");

// Page pattern
const vvPattern = getProductImage("vv pattern 1.png", "");

const products = [
  {
    id: "compost",
    name: "Vermi Compost",
    nameAr: "فيرمي كومبوست",
    descriptionAr: "مخصب حيوي يحسن خصوبة التربة ويمدها بالعناصر الكبرى والصغرى اللازمة للنبات.",
    descriptionEn: "A biofertilizer that improves soil fertility and supplies plants with essential macro and micronutrients.",
    purposeAr: "لتحسين التربة",
    purposeEn: "For soil improvement",
    category: "soil",
    image: getProductImage(
      "vermi composite 1",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85"
    ),
    detailImage: getProductImage(
      "vermi composite 2",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85"
    ),
    variants: [
      { labelAr: "1 كجم", labelEn: "1 KG", amount: 1, unit: "kg", price: 20 },
      { labelAr: "شيكارة 50 كجم", labelEn: "50 KG Bag", amount: 50, unit: "kg", price: 750 },
      { labelAr: "1 طن", labelEn: "1 Ton", amount: 1000, unit: "kg", price: 15000 },
    ],
  },
  {
    id: "tea",
    name: "Vermi Tea",
    nameAr: "فيرمي تي",
    descriptionAr: "مخصب حيوي غني بالبكتيريا والفطريات النافعة والإنزيمات الطبيعية.",
    descriptionEn: "A biofertilizer rich in beneficial bacteria, fungi, and natural enzymes.",
    purposeAr: "للاستخدام الزراعي السائل",
    purposeEn: "Liquid agricultural use",
    category: "liquid",
    image: getProductImage(
      "vermi tea 1",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85"
    ),
    detailImage: getProductImage(
      "vermi tea 2",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1600&q=85"
    ),
    variants: [
      { labelAr: "عبوة 5 لتر", labelEn: "5 Liter", amount: 5, unit: "liter", price: 85 },
      { labelAr: "عبوة 20 لتر", labelEn: "20 Liter", amount: 20, unit: "liter", price: 300 },
    ],
  },
  {
    id: "chlorella",
    name: "Chlorella",
    nameAr: "كلوريلا",
    descriptionAr:
      "مستخلص طحالب الكلوريلا (Chlorella) هو مستخلص طبيعي غني بالعناصر المفيدة للنبات، يساعد على تنشيط الجذور، وتحسين امتصاص العناصر الغذائية، وزيادة اخضرار الأوراق وقوة النبات.",
    descriptionEn:
      "Chlorella algae extract is a natural plant nutrient source that helps stimulate roots, improve nutrient absorption, and promote greener leaves and stronger plants.",
    comparisonAr:
      "مستخلص طحالب طبيعي يساعد على تنشيط الجذور وتحسين نمو النبات وزيادة اخضرار الأوراق.",
    comparisonEn:
      "A natural algae extract that helps stimulate roots, improve plant growth, and promote greener leaves.",
    purposeAr: "لدعم نمو النبات",
    purposeEn: "For plant growth support",
    category: "chlorella",
    image: getProductImage(
      "chlorella 1",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=85"
    ),
    detailImage: getProductImage(
      "chlorella 2",
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1600&q=85"
    ),
    variants: [
      { labelAr: "Red Wiggler - 1 كجم", labelEn: "Red Wiggler - 1 KG", amount: 1, unit: "kg", price: 800 },
      { labelAr: "الزاحف الأفريقي - 1 كجم", labelEn: "African Nightcrawler - 1 KG", amount: 1, unit: "kg", price: 1200 },
    ],
  },
  {
    id: "em1",
    name: "EM1",
    nameAr: "EM1",
    descriptionAr: "مخصب حيوي مركز بالكائنات الحية الدقيقة النافعة للتربة ويساعد على تحلل المواد العضوية.",
    descriptionEn: "A concentrated biofertilizer containing beneficial soil microorganisms that help decompose organic matter.",
    purposeAr: "للمهتمين بالكائنات الدقيقة النافعة",
    purposeEn: "For beneficial microorganisms",
    category: "microbes",
    image: getProductImage(
      "em1 1",
      "https://images.unsplash.com/photo-1581093458791-9d42e3c7c6c8?auto=format&fit=crop&w=1200&q=85"
    ),
    detailImage: getProductImage(
      "em1 2",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85"
    ),
    variants: [
      { labelAr: "جركن 20 لتر", labelEn: "20 Liter Container", amount: 20, unit: "liter", price: 250 },
    ],
  },
];

const filters = [
  { id: "all", ar: "كل المنتجات", en: "All Products" },
  { id: "soil", ar: "تحسين التربة", en: "Soil Improvement" },
  { id: "liquid", ar: "منتجات سائلة", en: "Liquid Products" },
  { id: "chlorella", ar: "كلوريلا", en: "Chlorella" },
  { id: "microbes", ar: "الكائنات الدقيقة", en: "Microorganisms" },
];

function Products() {
  const { isArabic } = useLanguage();

  const [activeProduct, setActiveProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const formatPrice = (value) =>
    new Intl.NumberFormat(isArabic ? "ar-EG" : "en-EG").format(value);

  const labels = {
    title: isArabic ? "منتجاتنا" : "Our Products",
    subtitle: isArabic
      ? "حلول طبيعية ومستدامة لدعم الزراعة وتحسين التربة."
      : "Natural and sustainable solutions for better agriculture and healthier soil.",
    catalog: isArabic ? "اكتشف مجموعة منتجاتنا" : "Explore Our Products",
    details: isArabic ? "اكتشف المنتج" : "Explore Product",
    back: isArabic ? "العودة إلى المنتجات" : "Back to Products",
    productDetails: isArabic ? "تفاصيل المنتج" : "PRODUCT DETAILS",
    choosePackage: isArabic ? "اختر العبوة" : "Choose Package",
    quantity: isArabic ? "الكمية" : "Quantity",
    unitPrice: isArabic ? "سعر الوحدة" : "Unit Price",
    subtotal: isArabic ? "الإجمالي" : "Subtotal",
    add: isArabic ? "إضافة إلى الطلب" : "Add to Order",
    orderNow: isArabic ? "اطلب عبر واتساب" : "Order via WhatsApp",
    cart: isArabic ? "طلبك" : "Your Order",
    empty: isArabic ? "لسه مفيش منتجات في طلبك" : "Your order is empty",
    emptyDesc: isArabic
      ? "اختر المنتج المناسب لك وأضفه إلى طلبك."
      : "Choose a product and add it to your order.",
    packages: isArabic ? "عدد العبوات" : "Packages",
    total: isArabic ? "الإجمالي النهائي" : "Grand Total",
    remove: isArabic ? "حذف" : "Remove",
    orderAll: isArabic ? "إرسال الطلب عبر واتساب" : "Send Order via WhatsApp",
    note: isArabic
      ? "سيتم تأكيد تفاصيل الطلب والتوصيل مع فريق الشركة. مصاريف الشحن غير محسوبة."
      : "Order and delivery details will be confirmed with the company. Shipping fees are not included.",
    benefits: isArabic ? "لماذا تختار منتجاتنا؟" : "Why Choose Our Products?",
    benefitsDesc: isArabic
      ? "حلول تدعم إعادة تدوير المخلفات العضوية وتساعد في الاتجاه نحو زراعة أكثر استدامة."
      : "Solutions that support organic waste recycling and more sustainable agriculture.",
    howTitle: isArabic ? "كيف تطلب منتجاتك؟" : "How to Order",
    howSteps: isArabic
      ? [
          "اختر المنتج والعبوة المناسبة.",
          "حدد الكمية واحسب إجمالي طلبك.",
          "أضف المنتج إلى طلبك أو اطلبه مباشرة.",
          "تواصل مع فريقنا لتأكيد تفاصيل الطلب.",
        ]
      : [
          "Choose your product and package.",
          "Set the quantity and calculate your total.",
          "Add the product to your order or order directly.",
          "Contact our team to confirm your order.",
        ],
    faq: isArabic ? "أسئلة شائعة" : "Frequently Asked Questions",
    faqItems: isArabic
      ? [
          {
            q: "هل أقدر أطلب أكتر من منتج؟",
            a: "أيوه، تقدر تضيف منتجات وعبوات مختلفة لنفس الطلب.",
          },
          {
            q: "هل السعر شامل التوصيل؟",
            a: "لا، مصاريف التوصيل يتم تأكيدها مع فريق الشركة.",
          },
          {
            q: "إزاي أأكد طلبي؟",
            a: "ابعت طلبك عبر واتساب وتابع مع فريق الشركة لتأكيد التفاصيل.",
          },
        ]
      : [
          {
            q: "Can I order more than one product?",
            a: "Yes, you can add different products and packages to one order.",
          },
          {
            q: "Are delivery fees included?",
            a: "No, delivery fees are confirmed by the company.",
          },
          {
            q: "How do I confirm my order?",
            a: "Send your order through WhatsApp and follow up with the team.",
          },
        ],
    compare: isArabic ? "اكتشف المنتج المناسب لاحتياجك" : "Find the product for your needs",
    compareDesc: isArabic
      ? "تصفح المنتجات حسب نوعها واستخدامها المعلن."
      : "Browse products by their stated type and use.",
    noResults: isArabic
      ? "مفيش منتجات في التصنيف ده."
      : "No products in this category.",
    starting: isArabic ? "يبدأ من" : "Starting from",
    purpose: isArabic ? "الاستخدام" : "Purpose",
    packagesLabel: isArabic ? "العبوات المتاحة" : "Available packages",
    priceLabel: isArabic ? "يبدأ السعر من" : "Starting price",
    comparison: isArabic ? "مقارنة سريعة بين المنتجات" : "A Quick Product Comparison",
    comparisonDesc: isArabic
      ? "معلومات مختصرة تساعدك تتعرف على طبيعة كل منتج."
      : "A quick overview to help you understand each product.",
    productCol: isArabic ? "المنتج" : "Product",
    useCol: isArabic ? "الوصف والاستخدام" : "Description & Use",
    packageCol: isArabic ? "العبوات" : "Packages",
    priceCol: isArabic ? "السعر يبدأ من" : "Starting Price",
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalPackages = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalKg = cart.reduce(
    (sum, item) =>
      item.unit === "kg" ? sum + item.amount * item.quantity : sum,
    0
  );

  const totalLiters = cart.reduce(
    (sum, item) =>
      item.unit === "liter" ? sum + item.amount * item.quantity : sum,
    0
  );

  const currentVariant = activeProduct?.variants[selectedVariant];
  const currentSubtotal = currentVariant ? currentVariant.price * quantity : 0;

  // Filter products by category only. Search has been removed.
  const filteredProducts = useMemo(
    () =>
      products.filter(
        (item) => activeFilter === "all" || item.category === activeFilter
      ),
    [activeFilter]
  );

  const openProductDetails = (item) => {
    setActiveProduct(item);
    setSelectedVariant(0);
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeProductDetails = () => {
    setActiveProduct(null);
    setSelectedVariant(0);
    setQuantity(1);
  };

  useEffect(() => {
    if (!activeProduct) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") closeProductDetails();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [activeProduct]);

  const addToCart = () => {
    if (!activeProduct || !currentVariant) return;

    const newItem = {
      id: `${activeProduct.id}-${selectedVariant}`,
      productId: activeProduct.id,
      name: isArabic ? activeProduct.nameAr : activeProduct.name,
      variant: isArabic ? currentVariant.labelAr : currentVariant.labelEn,
      price: currentVariant.price,
      amount: currentVariant.amount,
      unit: currentVariant.unit,
      quantity,
    };

    setCart((previous) => {
      const existing = previous.find((item) => item.id === newItem.id);

      if (existing) {
        return previous.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...previous, newItem];
    });

    closeProductDetails();
  };

  const updateCartQuantity = (id, value) => {
    const newQuantity = Math.max(1, Math.floor(Number(value) || 1));

    setCart((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((previous) => previous.filter((item) => item.id !== id));
  };

  const createWhatsAppLink = (items) => {
    let phone = String(WHATSAPP_NUMBER).replace(/\D/g, "");

    if (phone.startsWith("00")) {
      phone = phone.slice(2);
    } else if (phone.startsWith("0")) {
      phone = `20${phone.slice(1)}`;
    }

    const itemsTotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const itemsKg = items.reduce(
      (sum, item) =>
        item.unit === "kg" ? sum + item.amount * item.quantity : sum,
      0
    );
    const itemsLiters = items.reduce(
      (sum, item) =>
        item.unit === "liter" ? sum + item.amount * item.quantity : sum,
      0
    );

    const message = isArabic
      ? `مرحباً فيرمي فالي، أرغب في طلب المنتجات التالية:\n\n${items
          .map(
            (item, index) =>
              `${index + 1}. ${item.name}\nالعبوة: ${item.variant}\nالعدد: ${item.quantity}\nسعر الوحدة: ${formatPrice(item.price)} جنيه\nالمجموع: ${formatPrice(item.price * item.quantity)} جنيه`
          )
          .join("\n\n")}\n\nعدد العبوات: ${itemsCount}\nإجمالي الكمية بالكيلو: ${itemsKg}\nإجمالي الكمية باللتر: ${itemsLiters}\nالإجمالي النهائي: ${formatPrice(itemsTotal)} جنيه\n\nبرجاء تأكيد الطلب ومصاريف التوصيل.`
      : `Hello Vermi Valley, I would like to order:\n\n${items
          .map(
            (item, index) =>
              `${index + 1}. ${item.name}\nPackage: ${item.variant}\nQuantity: ${item.quantity}\nUnit price: ${item.price} EGP\nSubtotal: ${item.price * item.quantity} EGP`
          )
          .join("\n\n")}\n\nTotal packages: ${itemsCount}\nTotal quantity in KG: ${itemsKg}\nTotal quantity in Liters: ${itemsLiters}\nGrand total: ${itemsTotal} EGP\n\nPlease confirm my order and delivery fees.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const orderCurrentProduct = () => {
    if (!activeProduct || !currentVariant) return;

    const item = {
      id: `${activeProduct.id}-${selectedVariant}`,
      name: isArabic ? activeProduct.nameAr : activeProduct.name,
      variant: isArabic ? currentVariant.labelAr : currentVariant.labelEn,
      price: currentVariant.price,
      amount: currentVariant.amount,
      unit: currentVariant.unit,
      quantity,
    };

    window.open(createWhatsAppLink([item]), "_blank", "noopener,noreferrer");
  };

  const benefits = [
    {
      icon: benefitIcons.recycle,
      ar: "إعادة تدوير المخلفات",
      en: "Waste Recycling",
    },
    {
      icon: benefitIcons.support,
      ar: "دعم الزراعة المستدامة",
      en: "Sustainable Agriculture",
    },
    {
      icon: benefitIcons.globe,
      ar: "الاهتمام بالبيئة",
      en: "Environmental Care",
    },
  ];

  const getProductName = (item) => (isArabic ? item.nameAr : item.name);
  const getProductDescription = (item) =>
    isArabic ? item.descriptionAr : item.descriptionEn;
  const getStartingPrice = (item) =>
    Math.min(...item.variants.map((variant) => variant.price));
  const getPackageLabels = (item) =>
    item.variants
      .map((variant) => (isArabic ? variant.labelAr : variant.labelEn))
      .join("، ");

  return (
    <section
      id="products"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-[#F2EEDF] bg-[radial-gradient(circle_at_1px_1px,rgba(17,52,27,0.045)_1px,transparent_0)] bg-[size:22px_22px] text-[#11341B]"
    >
      {/* VV background pattern */}
      {vvPattern && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-repeat opacity-[0.10]"
          style={{
            backgroundImage: `url("${vvPattern}")`,
            backgroundSize: "260px",
          }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-3 pt-24 pb-8 sm:px-5 sm:pt-28 sm:pb-10 md:px-10 md:pt-32 md:pb-16">
        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-12 md:mb-14"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#A4D561] sm:text-xs">
            فيرمي فالي
          </span>
          <h1 className="mt-3 text-2xl font-black leading-tight sm:mt-4 sm:text-4xl md:text-6xl">
            {activeProduct ? getProductName(activeProduct) : labels.title}
          </h1>
          {!activeProduct && (
            <p className="mx-auto mt-3 max-w-2xl px-2 text-xs leading-6 text-[#11341B]/75 sm:mt-5 sm:text-sm sm:leading-8 md:text-base">
              {labels.subtitle}
            </p>
          )}
          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#A4D561] sm:mt-7 sm:w-16" />
        </motion.div>

        <AnimatePresence mode="wait">
          {activeProduct ? (
            <motion.div
              key="product-details"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={closeProductDetails}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#11341B]/20 bg-[#F2EEDF] px-4 py-2 text-xs font-bold transition hover:border-[#A4D561] hover:bg-[#A4D561]/25 sm:mb-8 sm:px-5 sm:py-3 sm:text-sm"
              >
                <span className="text-lg">{isArabic ? "→" : "←"}</span>
                {labels.back}
              </button>

              <div className="grid overflow-hidden rounded-2xl border border-[#11341B]/10 bg-[#FFFDF7] shadow-[0_12px_36px_rgba(17,52,27,0.09)] sm:rounded-[2rem] md:grid-cols-2">
                <div className="relative min-h-[260px] overflow-hidden bg-[#F2EEDF] sm:min-h-[300px] md:min-h-[560px]">
                  <img
                    src={activeProduct.detailImage}
                    alt={getProductName(activeProduct)}
                    className="absolute inset-0 h-full w-full object-contain md:object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11341B]/35 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 start-4 text-white sm:bottom-7 sm:start-7">
                    <span className="text-[10px] font-bold tracking-[0.25em] sm:text-xs">
                      فيرمي فالي
                    </span>
                    <h2 className="mt-1 text-xl font-black sm:mt-2 sm:text-3xl">
                      {getProductName(activeProduct)}
                    </h2>
                  </div>
                </div>

                <div className="p-4 sm:p-6 md:p-10 lg:p-12">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#A4D561]">
                    {labels.productDetails}
                  </span>
                  <h2 className="mb-3 mt-2 text-xl font-black sm:mb-4 sm:mt-3 sm:text-3xl">
                    {getProductName(activeProduct)}
                  </h2>
                  <p className="mb-5 text-sm leading-7 text-[#11341B]/75 sm:mb-8 sm:text-base sm:leading-8">
                    {getProductDescription(activeProduct)}
                  </p>

                  <div className="mb-5 rounded-xl border border-[#11341B]/10 bg-[#F2EEDF] p-3 sm:mb-8 sm:rounded-2xl sm:p-5">
                    <span className="text-xs font-bold text-[#A4D561]">
                      {labels.purpose}
                    </span>
                    <p className="mt-2 text-sm font-bold sm:text-base">
                      {isArabic
                        ? activeProduct.purposeAr
                        : activeProduct.purposeEn}
                    </p>
                  </div>

                  <div className="mb-5 sm:mb-7">
                    <label className="mb-3 block text-sm font-bold sm:mb-4">
                      {labels.choosePackage}
                    </label>
                    <div className="space-y-2 sm:space-y-3">
                      {activeProduct.variants.map((option, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setSelectedVariant(index)}
                          className={`flex w-full items-center justify-between gap-3 rounded-xl border p-3 text-start text-sm transition sm:p-4 sm:text-base ${
                            selectedVariant === index
                              ? "border-[#11341B] bg-[#A4D561]/15 ring-1 ring-[#11341B]"
                              : "border-[#11341B]/15 bg-white hover:border-[#A4D561]"
                          }`}
                        >
                          <span className="font-semibold">
                            {isArabic ? option.labelAr : option.labelEn}
                          </span>
                          <span className="shrink-0 font-black text-[#11341B]">
                            {formatPrice(option.price)} {isArabic ? "جنيه" : "EGP"}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-5 sm:mb-7">
                    <label className="mb-3 block text-sm font-bold">
                      {labels.quantity}
                    </label>
                    <div className="flex w-fit items-center overflow-hidden rounded-xl border border-[#11341B]/15">
                      <button
                        type="button"
                        aria-label={isArabic ? "تقليل الكمية" : "Decrease quantity"}
                        onClick={() =>
                          setQuantity((current) => Math.max(1, current - 1))
                        }
                        className="flex h-10 w-10 items-center justify-center text-xl transition hover:bg-[#A4D561]/25 sm:h-12 sm:w-12"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(event) =>
                          setQuantity(
                            Math.max(1, Math.floor(Number(event.target.value) || 1))
                          )
                        }
                        className="h-10 w-14 border-x border-[#11341B]/15 text-center font-bold outline-none sm:h-12 sm:w-16"
                      />
                      <button
                        type="button"
                        aria-label={isArabic ? "زيادة الكمية" : "Increase quantity"}
                        onClick={() => setQuantity((current) => current + 1)}
                        className="flex h-10 w-10 items-center justify-center text-xl transition hover:bg-[#A4D561]/25 sm:h-12 sm:w-12"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mb-5 space-y-3 border-y border-[#11341B]/10 py-4 sm:mb-6 sm:py-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#11341B]/60">{labels.unitPrice}</span>
                      <span className="font-bold">
                        {formatPrice(currentVariant?.price || 0)}{" "}
                        {isArabic ? "جنيه" : "EGP"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">{labels.subtotal}</span>
                      <span className="text-xl font-black text-[#11341B] sm:text-2xl">
                        {formatPrice(currentSubtotal)} {isArabic ? "جنيه" : "EGP"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3">
                    <button
                      type="button"
                      onClick={addToCart}
                      className="w-full rounded-xl bg-[#11341B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#244C2D] hover:shadow-lg sm:py-4 sm:text-base"
                    >
                      + {labels.add}
                    </button>
                    <button
                      type="button"
                      onClick={orderCurrentProduct}
                      className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#11341B]/20 px-5 py-3 text-sm font-bold text-[#11341B] transition hover:border-[#11341B] hover:bg-[#A4D561]/15 sm:py-4 sm:text-base"
                    >
                      <span className="text-xl">☏</span>
                      {labels.orderNow}
                    </button>
                  </div>
                  <p className="mt-4 text-center text-[11px] leading-6 text-[#11341B]/50 sm:mt-5 sm:text-xs">
                    {labels.note}
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="products-catalog"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.3 }}
            >
              {/* Product categories - Search removed */}
              <section className="mb-8 rounded-2xl bg-[#11341B] p-4 text-[#F2EEDF] sm:mb-12 sm:rounded-[2rem] sm:p-6 md:p-9">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#A4D561] sm:text-xs">
                    {isArabic ? "اكتشف الأنسب لك" : "FIND YOUR MATCH"}
                  </span>
                  <h2 className="mt-2 text-lg font-black sm:mt-3 sm:text-2xl md:text-3xl">
                    {labels.compare}
                  </h2>
                  <p className="mt-2 max-w-2xl text-xs leading-6 text-white/65 sm:mt-3 sm:text-sm sm:leading-7">
                    {labels.compareDesc}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-7 sm:gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setActiveFilter(filter.id)}
                      className={`rounded-full border px-3 py-1.5 text-[11px] font-bold transition sm:px-4 sm:py-2.5 sm:text-xs md:text-sm ${
                        activeFilter === filter.id
                          ? "border-[#A4D561] bg-[#A4D561] text-[#11341B]"
                          : "border-white/20 text-white/80 hover:border-[#A4D561] hover:text-[#A4D561]"
                      }`}
                    >
                      {isArabic ? filter.ar : filter.en}
                    </button>
                  ))}
                </div>
              </section>

              {/* Product showcase */}
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-[#11341B]/15 pb-4 sm:mb-8 sm:gap-4 sm:pb-5">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#A4D561] sm:text-xs">
                    فيرمي فالي
                  </span>
                  <h2 className="mt-1 text-base font-black leading-tight sm:mt-2 sm:text-xl md:text-2xl">
                    {labels.catalog}
                  </h2>
                </div>
                <span className="text-xs text-[#11341B]/55 sm:text-sm">
                  {formatPrice(filteredProducts.length)}{" "}
                  {isArabic ? "منتجات" : "Products"}
                </span>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 items-stretch gap-2.5 sm:gap-5 lg:grid-cols-4">
                  {filteredProducts.map((item, index) => {
                    return (
                      <motion.article
                        key={item.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.45, delay: index * 0.06 }}
                        className="group h-full overflow-hidden rounded-xl border border-[#11341B]/10 bg-[#FFFDF7] shadow-[0_6px_22px_rgba(17,52,27,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#A4D561] hover:shadow-[0_14px_30px_rgba(17,52,27,0.12)] sm:rounded-2xl lg:rounded-[1.5rem]"
                      >
                        <button
                          type="button"
                          onClick={() => openProductDetails(item)}
                          className="flex h-full w-full flex-col text-start"
                        >
                          <div className="relative h-[110px] w-full shrink-0 overflow-hidden bg-[#F2EEDF] sm:h-[190px] md:h-[220px]">
                            <img
                              src={item.image}
                              alt={getProductName(item)}
                              loading="lazy"
                              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#11341B]/80 via-[#11341B]/10 to-transparent" />
                            <span className="absolute start-1.5 top-1.5 rounded-full border border-white/50 bg-[#F2EEDF]/95 px-1.5 py-0.5 text-[7px] font-extrabold tracking-wider text-[#11341B] sm:start-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[10px]">
                              فيرمي فالي
                            </span>
                            <div className="absolute inset-x-0 bottom-0 p-2 text-white sm:p-4 md:p-5">
                              <span className="line-clamp-1 text-[8px] font-bold leading-tight text-[#A4D561] sm:text-xs">
                                {isArabic ? item.purposeAr : item.purposeEn}
                              </span>
                              <h3 className="mt-0.5 text-[13px] font-black leading-tight sm:mt-2 sm:text-xl md:text-2xl">
                                {getProductName(item)}
                              </h3>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col p-2 sm:p-4 md:p-5">
                            <p className="line-clamp-3 text-[10px] leading-[1.6] text-[#11341B]/75 sm:min-h-[76px] sm:text-xs sm:leading-6 md:text-sm">
                              {getProductDescription(item)}
                            </p>
                            <div className="mt-auto flex flex-col items-start gap-1.5 border-t border-[#11341B]/10 pt-2 sm:mt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:pt-4">
                              <div>
                                <span className="text-[9px] text-[#11341B]/65 sm:text-xs">
                                  {labels.starting}
                                </span>
                                <p className="text-[11px] font-black text-[#11341B] sm:mt-1 sm:text-sm">
                                  {formatPrice(getStartingPrice(item))}{" "}
                                  {isArabic ? "جنيه" : "EGP"}
                                </p>
                              </div>
                              <span className="inline-flex w-full items-center justify-center gap-1 rounded-full bg-[#A4D561] px-2 py-1.5 text-[10px] font-extrabold text-[#11341B] transition hover:bg-[#11341B] hover:text-[#F2EEDF] sm:w-auto sm:gap-2 sm:px-4 sm:py-2.5 sm:text-xs">
                                {labels.details}
                                <span className="hidden text-base sm:inline">
                                  {isArabic ? "←" : "→"}
                                </span>
                              </span>
                            </div>
                          </div>
                        </button>
                      </motion.article>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-2xl bg-white/70 px-5 py-12 text-center sm:py-16">
                  <span className="text-4xl">✦</span>
                  <p className="mt-4 font-bold">{labels.noResults}</p>
                  <button
                    type="button"
                    onClick={() => setActiveFilter("all")}
                    className="mt-5 text-sm font-bold text-[#11341B] underline underline-offset-4"
                  >
                    {isArabic ? "عرض كل المنتجات" : "Show all products"}
                  </button>
                </div>
              )}

              {/* Product comparison */}
              <section className="mt-10 sm:mt-20">
                <div className="mb-5 max-w-2xl sm:mb-8">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#A4D561] sm:text-xs">
                    PRODUCT GUIDE
                  </span>
                  <h2 className="mt-2 text-xl font-black sm:mt-3 sm:text-3xl">
                    {labels.comparison}
                  </h2>
                  <p className="mt-2 text-xs leading-6 text-[#11341B]/60 sm:mt-3 sm:text-sm sm:leading-7">
                    {labels.comparisonDesc}
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-[#11341B]/10 bg-white">
                  <table className="w-full border-collapse text-start text-xs sm:min-w-[720px] sm:text-sm">
                    <thead className="bg-[#11341B] text-[#F2EEDF]">
                      <tr>
                        <th className="p-2.5 text-start font-bold sm:p-4">{labels.productCol}</th>
                        <th className="p-2.5 text-start font-bold sm:p-4">{labels.useCol}</th>
                        <th className="hidden p-4 text-start font-bold sm:table-cell">{labels.packageCol}</th>
                        <th className="p-2.5 text-start font-bold sm:p-4">{labels.priceCol}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((item) => (
                        <tr
                          key={item.id}
                          className="border-t border-[#11341B]/10 transition hover:bg-[#F2EEDF]/60"
                        >
                          <td className="p-2.5 font-black sm:p-4">{getProductName(item)}</td>
                          <td className="p-2.5 text-[11px] leading-5 text-[#11341B]/65 sm:max-w-xs sm:p-4 sm:text-sm sm:leading-7">
                            {item.id === "chlorella"
                              ? isArabic
                                ? item.comparisonAr
                                : item.comparisonEn
                              : getProductDescription(item)}
                          </td>
                          <td className="hidden max-w-xs p-4 leading-7 text-[#11341B]/65 sm:table-cell">
                            {getPackageLabels(item)}
                          </td>
                          <td className="p-2.5 font-black text-[#11341B] sm:whitespace-nowrap sm:p-4">
                            {formatPrice(getStartingPrice(item))}{" "}
                            {isArabic ? "جنيه" : "EGP"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Order summary */}
        {!activeProduct && (
          <section
            id="order-summary"
            className="mt-10 border-y border-[#11341B]/15 py-6 sm:mt-24 sm:py-12"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 sm:mb-8 sm:gap-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#A4D561] sm:text-xs">
                  فيرمي فالي
                </span>
                <h2 className="mt-2 text-xl font-black sm:text-3xl">{labels.cart}</h2>
              </div>
              <span className="rounded-full bg-white px-3 py-1.5 text-xs text-[#11341B]/65 sm:px-4 sm:py-2 sm:text-sm">
                {formatPrice(totalPackages)} {labels.packages}
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="rounded-2xl bg-white/65 px-5 py-8 text-center sm:py-12">
                <img
                  src={cartIcon}
                  alt=""
                  aria-hidden="true"
                  className="mx-auto h-14 w-14 object-contain"
                />
                <h3 className="mt-4 text-base font-bold sm:text-lg">{labels.empty}</h3>
                <p className="mt-2 text-xs text-[#11341B]/55 sm:text-sm">
                  {labels.emptyDesc}
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_320px]">
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-xl border-b border-[#11341B]/10 bg-white/45 p-3 sm:gap-4 md:p-5"
                    >
                      <div className="min-w-[130px] sm:min-w-[150px]">
                        <h3 className="text-sm font-bold sm:text-base">{item.name}</h3>
                        <p className="mt-1 text-xs text-[#11341B]/55 sm:text-sm">
                          {item.variant}
                        </p>
                        <p className="mt-2 text-xs font-bold text-[#11341B] sm:text-sm">
                          {formatPrice(item.price)} {isArabic ? "جنيه" : "EGP"}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <button
                          type="button"
                          aria-label={isArabic ? "تقليل الكمية" : "Decrease quantity"}
                          onClick={() =>
                            updateCartQuantity(item.id, item.quantity - 1)
                          }
                          className="h-8 w-8 rounded-lg border border-[#11341B]/20 font-bold transition hover:bg-[#A4D561]/25 sm:h-9 sm:w-9"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(event) =>
                            updateCartQuantity(item.id, event.target.value)
                          }
                          className="h-8 w-12 rounded-lg border border-[#11341B]/20 text-center font-bold outline-none sm:h-9 sm:w-14"
                        />
                        <button
                          type="button"
                          aria-label={isArabic ? "زيادة الكمية" : "Increase quantity"}
                          onClick={() =>
                            updateCartQuantity(item.id, item.quantity + 1)
                          }
                          className="h-8 w-8 rounded-lg border border-[#11341B]/20 font-bold transition hover:bg-[#A4D561]/25 sm:h-9 sm:w-9"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-end">
                        <p className="text-sm font-black text-[#11341B] sm:text-base">
                          {formatPrice(item.price * item.quantity)}{" "}
                          {isArabic ? "جنيه" : "EGP"}
                        </p>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="mt-2 text-xs font-bold text-red-600 hover:text-red-800"
                        >
                          {labels.remove}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-fit rounded-2xl bg-[#11341B] p-4 text-[#F2EEDF] shadow-xl sm:p-6">
                  <h3 className="mb-4 text-lg font-black sm:mb-6 sm:text-xl">{labels.total}</h3>
                  <div className="space-y-3 text-sm sm:space-y-4">
                    <div className="flex justify-between">
                      <span>{labels.packages}</span>
                      <span className="font-bold">{formatPrice(totalPackages)}</span>
                    </div>
                    {totalKg > 0 && (
                      <div className="flex justify-between">
                        <span>{isArabic ? "إجمالي الوزن" : "Total Weight"}</span>
                        <span className="font-bold">
                          {formatPrice(totalKg)} {isArabic ? "كجم" : "KG"}
                        </span>
                      </div>
                    )}
                    {totalLiters > 0 && (
                      <div className="flex justify-between">
                        <span>{isArabic ? "إجمالي الحجم" : "Total Volume"}</span>
                        <span className="font-bold">
                          {formatPrice(totalLiters)} {isArabic ? "لتر" : "Liter"}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="my-4 border-t border-white/20 sm:my-6" />
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold">{labels.total}</span>
                    <span className="text-xl font-black text-[#A4D561] sm:text-2xl">
                      {formatPrice(totalPrice)} {isArabic ? "جنيه" : "EGP"}
                    </span>
                  </div>
                  <a
                    href={createWhatsAppLink(cart)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#A4D561] px-4 py-3 text-center text-sm font-bold text-[#11341B] transition hover:bg-[#B5E477] sm:mt-7 sm:py-4 sm:text-base"
                  >
                    <span className="text-xl">☏</span>
                    {labels.orderAll}
                  </a>
                  <p className="mt-4 text-center text-[11px] leading-6 text-white/60 sm:text-xs">
                    {labels.note}
                  </p>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Why choose us */}
        {!activeProduct && (
          <>
            <section className="py-10 sm:py-20">
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-[10px] font-bold tracking-widest text-[#A4D561] sm:text-xs">
                  WHY VERMI VALLEY?
                </span>
                <h2 className="mt-3 text-xl font-black sm:text-3xl">{labels.benefits}</h2>
                <p className="mt-3 text-sm leading-7 text-[#11341B]/65 sm:mt-5 sm:leading-8">
                  {labels.benefitsDesc}
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-8">
                {benefits.map((item) => (
                  <motion.div
                    key={item.en}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-[#11341B]/15 bg-white/45 px-5 py-5 text-center transition sm:py-8"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      className="mx-auto h-12 w-12 object-contain sm:h-14 sm:w-14"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(82%) sepia(25%) saturate(650%) hue-rotate(35deg) brightness(95%) contrast(90%)",
                      }}
                    />
                    <h3 className="mt-3 text-sm font-bold sm:mt-4 sm:text-base">
                      {isArabic ? item.ar : item.en}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* How to order */}
            <section className="border-t border-[#11341B]/15 py-10 sm:py-16">
              <h2 className="mb-6 text-center text-xl font-black sm:mb-10 sm:text-3xl">
                {labels.howTitle}
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
                {labels.howSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border-t-2 border-[#A4D561] bg-white/55 p-4 sm:p-6"
                  >
                    <span className="text-2xl font-black text-[#A4D561] sm:text-3xl">
                      0{index + 1}
                    </span>
                    <p className="mt-3 text-xs font-bold leading-6 sm:mt-5 sm:text-base sm:leading-7">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mx-auto max-w-3xl border-t border-[#11341B]/15 py-10 sm:py-16">
              <h2 className="mb-6 text-center text-xl font-black sm:mb-10 sm:text-3xl">
                {labels.faq}
              </h2>
              <div className="space-y-2 sm:space-y-3">
                {labels.faqItems.map((item, index) => (
                  <details
                    key={index}
                    className="group border-b border-[#11341B]/15 py-4 sm:py-5"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold sm:text-base">
                      {item.q}
                      <span className="text-xl text-[#A4D561] transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs leading-7 text-[#11341B]/65 sm:mt-4 sm:text-sm sm:leading-8">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border-y border-[#11341B]/15 py-8 sm:gap-6 sm:py-10">
              <div>
                <h2 className="text-lg font-black sm:text-2xl">
                  {isArabic
                    ? "عندك استفسار عن منتجاتنا؟"
                    : "Have questions about our products?"}
                </h2>
                <p className="mt-2 text-xs text-[#11341B]/60 sm:text-sm">
                  {isArabic
                    ? "فريقنا جاهز يساعدك ويجاوب على استفساراتك."
                    : "Our team is ready to help and answer your questions."}
                </p>
              </div>
              <a
                href={`https://wa.me/${String(WHATSAPP_NUMBER)
                  .replace(/\D/g, "")
                  .replace(/^0/, "20")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-[#11341B] px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-[#244C2D] sm:w-auto sm:py-4 sm:text-base"
              >
                {isArabic ? "تواصل معنا عبر واتساب" : "Contact Us on WhatsApp"}
              </a>
            </section>
          </>
        )}
      </div>
    </section>
  );
}

export default Products;

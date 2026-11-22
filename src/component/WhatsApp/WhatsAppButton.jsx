
import {
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE,
} from "../../component/Data/translations";

function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact VERMI VALLEY on WhatsApp"
      className="fixed bottom-6 right-6 z-[100] group flex items-center gap-3"
    >
      {/* Tooltip */}
      <span className="bg-white text-gray-800 font-semibold px-4 py-3 rounded-xl shadow-lg opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
        تواصل معنا عبر واتساب
      </span>

      {/* WhatsApp Button */}
      <span className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#20BA5A]">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

        <svg
          viewBox="0 0 32 32"
          className="relative w-9 h-9 fill-current"
          aria-hidden="true"
        >
          <path d="M16 3C8.83 3 3 8.83 3 16c0 2.29.6 4.54 1.74 6.52L3 29l6.65-1.7A12.93 12.93 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3Zm0 23.7c-1.96 0-3.88-.53-5.54-1.54l-.4-.24-3.94 1.01 1.05-3.83-.26-.42A10.64 10.64 0 1 1 16 26.7Zm5.84-7.97c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.21.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.84-1.59-1.88-1.78-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.54-.73-.55h-.63c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.68s1.16 3.11 1.32 3.33c.16.21 2.28 3.48 5.53 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.14-.3-.22-.62-.38Z" />
        </svg>
      </span>
    </a>
  );
}

export default WhatsAppButton;

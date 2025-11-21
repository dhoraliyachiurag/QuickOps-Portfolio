import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-16 mt-24 bg-white/80 dark:bg-[#020b18]/80 backdrop-blur-xl border-t border-gray-200 dark:border-[#0f1a2b]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* BRAND NAME */}
        <h2 className="text-xl font-bold tracking-wide text-gray-900 dark:text-gray-200">
          QuickOps India
        </h2>

        {/* SOCIAL ICONS */}
        <div className="mt-6 flex justify-center gap-6">
          {/* Facebook */}
          <a
            href="http://www.facebook.com/quickopsindia/"
            target="_blank"
            className="
              group p-3 rounded-full border 
              bg-gray-100/80 dark:bg-[#071225]/40 
              border-gray-200 dark:border-[#132036]
              shadow-sm backdrop-blur-xl
              transition-all duration-300
              hover:bg-[#1877F2] hover:text-white
              hover:border-[#1877F2]
              hover:shadow-[0_6px_20px_rgba(24,119,242,0.35)]
            "
          >
            <FaFacebookF
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/quickopsindia/"
            target="_blank"
            className="
              group p-3 rounded-full border 
              bg-gray-100/80 dark:bg-[#071225]/40 
              border-gray-200 dark:border-[#132036]
              shadow-sm backdrop-blur-xl
              transition-all duration-300
              hover:bg-[#E1306C] hover:text-white
              hover:border-[#E1306C]
              hover:shadow-[0_6px_20px_rgba(225,48,108,0.35)]
            "
          >
            <FaInstagram
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jyot-delvadiya/"
            target="_blank"
            className="
              group p-3 rounded-full border 
              bg-gray-100/80 dark:bg-[#071225]/40 
              border-gray-200 dark:border-[#132036]
              shadow-sm backdrop-blur-xl
              transition-all duration-300
              hover:bg-[#0A66C2] hover:text-white
              hover:border-[#0A66C2]
              hover:shadow-[0_6px_20px_rgba(10,102,194,0.35)]
            "
          >
            <FaLinkedinIn
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* GitHub */}
          <a
            href="#"
            target="_blank"
            className="
              group p-3 rounded-full border 
              bg-gray-100/80 dark:bg-[#071225]/40 
              border-gray-200 dark:border-[#132036]
              shadow-sm backdrop-blur-xl
              transition-all duration-300
              hover:bg-black hover:text-white
              hover:border-black
              hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
            "
          >
            <FaGithub
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-300 dark:bg-[#142238] my-10"></div>

        {/* COPYRIGHT */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} QuickOps India. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

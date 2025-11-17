import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 bg-white dark:bg-[#020b18] border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold tracking-wide text-gray-800 dark:text-gray-200">
          CHIRAG DHORALIYA
        </h3>

        <div className="mt-5 flex justify-center gap-6">
          {/* Facebook */}
          <a
            href="http://www.facebook.com/quickopsindia/"
            target="_blank"
            className="p-3 rounded-full bg-gray-100 dark:bg-[#07102a] border transition-all shadow-sm
                       hover:text-[#1877F2] hover:border-[#1877F2]"
          >
            <FaFacebookF size={18} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/quickopsindia/"
            target="_blank"
            className="p-3 rounded-full bg-gray-100 dark:bg-[#07102a] border transition-all shadow-sm
                       hover:text-[#E1306C] hover:border-[#E1306C]"
          >
            <FaInstagram size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jyot-delvadiya/"
            target="_blank"
            className="p-3 rounded-full bg-gray-100 dark:bg-[#07102a] border transition-all shadow-sm
                       hover:text-[#0A66C2] hover:border-[#0A66C2]"
          >
            <FaLinkedinIn size={18} />
          </a>

          {/* GitHub */}
          <a
            href="#"
            target="_blank"
            className="p-3 rounded-full bg-gray-100 dark:bg-[#07102a] border transition-all shadow-sm
             hover:text-yellow-500 hover:border-yellow-500"
          >
            <FaGithub size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 dark:bg-[#0f1a2b] my-8"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Chirag Dhoraliya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

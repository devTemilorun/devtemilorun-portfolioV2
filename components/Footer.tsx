import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white pt-16 pb-12 dark:border-gray-800 dark:bg-[#0b0f17]">
      <div className="container mx-auto mt-6 px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">devTemilorun.</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full Stack Web Developer | Crafting Seamless Front-End Experience & Robust Backend System |
              Turning Ideas into Scalable, User-Focused Web Solutions
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white">Home</Link>
              <Link href="/about" className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white">About</Link>
              <Link href="/#projects" className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white">Projects</Link>
              <Link href="/contact" className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">Get in Touch</h4>
            <a href="mailto:dev.temilorun@gmail.com" className="text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white">dev.temilorun@gmail.com</a>
            <div className="mt-6 flex gap-4">
              <a href="https://github.com/devTemilorun" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-black hover:text-white dark:border-gray-700 dark:hover:bg-white dark:hover:text-black"><FaGithub /></a>
              <a href="https://twitter.com/dev_Temilorun" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-black hover:text-white dark:border-gray-700 dark:hover:bg-white dark:hover:text-black"><FaXTwitter /></a>
              <a href="https://linkedin.com/in/olawuni-israel" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-black hover:text-white dark:border-gray-700 dark:hover:bg-white dark:hover:text-black"><FaLinkedin /></a>
              <a href="https://wa.me/2347031225674" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-black hover:text-white dark:border-gray-700 dark:hover:bg-white dark:hover:text-black"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          <p>© devTemilorun 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
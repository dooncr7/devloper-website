import React from 'react';
import { motion } from 'framer-motion';
import { Sword, MessageSquare, Mail, MapPin, Heart } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Footer = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = '212656317785';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-red-500/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-400 rounded-2xl flex items-center justify-center ml-3">
                <Sword className="w-7 h-7 text-white transform rotate-45" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent font-japanese">
                Senior
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              مطور بوتات ومواقع بالذكاء الاصطناعي. أحول أفكاري الى ما اريد بدون الحاجة للبرمجة التقليدية
            </p>
            <div className="flex items-center justify-center md:justify-end text-red-400">
              <Heart className="w-4 h-4 mr-2 animate-pulse" />
              <span className="text-sm">صُنع بالمغرب</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="text-center">
            <h4 className="text-xl font-bold text-white mb-6 font-japanese">روابط سريعة</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center justify-center">
                  <span>الرئيسية</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center justify-center">
                  <span>الخدمات</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center justify-center">
                  <span>المشاريع</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center justify-center">
                  <span>التواصل</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-6 font-japanese">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <MessageSquare className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-400">+212 656 317 785</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-red-400 mr-3" />
                <span className="text-gray-400">المغرب</span>
              </div>
              <button
                onClick={handleWhatsAppContact}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transform hover:scale-105 flex items-center mx-auto md:mx-0"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                تواصل عبر الواتساب
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeInUp}
          className="border-t border-gray-700/30 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 Senior. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex items-center text-gray-500 text-sm">
                <span>مطور بالذكاء الاصطناعي</span>
                <div className="w-2 h-2 bg-red-500 rounded-full mx-2 animate-pulse"></div>
                <span>بأسلوب ياباني</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

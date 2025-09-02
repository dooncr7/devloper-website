import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Hero = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = '212656317785';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-900/30 to-black/30 border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              مطور بذكاء اصطناعي محترف
              <Zap className="w-4 h-4 ml-2 text-red-400" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 font-japanese">
              أهلاً، أنا
              <span className="block bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 bg-clip-text text-transparent mt-4">
                Senior
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            مطور بوتات ومواقع بالذكاء الاصطناعي بأسلوب أنيق
            <br className="hidden md:block" />
            <span className="text-red-400 font-semibold">أحول أفكارك إلى حلول ذكية بدون الحاجة للبرمجة التقليدية</span>
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <button
              onClick={handleWhatsAppContact}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transform hover:scale-105 transition-all duration-300 flex items-center group"
            >
              ابدأ مشروعك الآن
              <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#portfolio"
              className="border-2 border-red-500/50 text-red-300 hover:border-red-400 hover:text-red-200 hover:bg-red-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              شاهد أعمالي
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sword className="w-10 h-10 text-red-400 transform rotate-45" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-japanese">بوتات ذكية</h3>
              <p className="text-gray-400 leading-relaxed">تطوير بوتات محادثة متقدمة بالذكاء الاصطناعي بأسلوب ياباني فريد</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-japanese">مواقع ذكية</h3>
              <p className="text-gray-400 leading-relaxed">إنشاء مواقع تفاعلية عن طريق الذكاء الاصطناعي </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-yellow-500/20 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-japanese">حلول مبتكرة</h3>
              <p className="text-gray-400 leading-relaxed">تقديم حلول تقنية مبتكرة وكفاءة عالية</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

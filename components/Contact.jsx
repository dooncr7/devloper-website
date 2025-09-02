import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Contact = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = '212656317785';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MessageSquare,
      title: 'واتساب',
      value: '+212 656 317 785',
      description: 'تواصل سريع ومباشر'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      value: '+212 656 317 785',
      description: 'متاح للمكالمات'
    },
    {
      icon: MapPin,
      title: 'الموقع',
      value: 'المغرب',
      description: 'أو عن بُعد'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      value: 'ليس لدي موعد محدد',
      description: 'السبت - الاثنين'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 font-japanese"
          >
            <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 bg-clip-text text-transparent">
              تواصل معي
            </span>
            <span className="block text-2xl md:text-3xl text-gray-400 font-normal mt-4">
              لنبدأ مشروعك القادم
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            هل لديك فكرة مشروع؟ أو تحتاج استشارة تقنية؟ تواصل معي وسأساعدك في تحويل أفكارك إلى واقع
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold text-white mb-8 font-japanese"
            >
              معلومات التواصل
            </motion.h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start space-x-4 rtl:space-x-reverse p-4 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group cursor-pointer"
                    onClick={info.icon === MessageSquare ? handleWhatsAppContact : undefined}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 font-japanese">{info.title}</h4>
                      <p className="text-red-400 font-medium mb-1">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/30 text-center max-w-md w-full"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <MessageSquare className="w-12 h-12 text-green-400" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 font-japanese">
                تواصل عبر الواتساب
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                الطريقة الأسرع والأفضل للتواصل معي ومناقشة مشروعك. متاح 24/7 للرد على استفساراتك
              </p>

              <button
                onClick={handleWhatsAppContact}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-6 rounded-xl font-semibold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <MessageSquare className="w-6 h-6 mr-3" />
                ابدأ المحادثة الآن
              </button>

              <p className="text-sm text-gray-500 mt-4">
                +212 656 317 785
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

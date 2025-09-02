import React from 'react';
import { motion } from 'framer-motion';
import { Sword, MessageSquare, Globe, Zap, Code, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Services = () => {
  const services = [
    {
      icon: Sword,
      title: 'بوت واتساب جميل ',
      description: 'تطوير بوتات تلجرام والواتساب متقدمة بالذكاء الاصطناعي',
      features: ['ذكاء اصطناعي متقدم', 'تصميم ياباني فريد', 'استجابة فورية'],
      color: 'red'
    },
    {
      icon: MessageSquare,
      title: 'بوتات واتساب للأعمال',
      description: 'إنشاء بوتات واتساب احترافية لإدارة الأعمال والعملاء بكفاءة عالية وتصميم ياباني متميز',
      features: ['إدارة العملاء', 'ردود تلقائية ذكية', 'تكامل مع الأنظمة'],
      color: 'yellow'
    },
    {
      icon: Globe,
      title: 'مواقع ويب ذكية',
      description: 'تصميم مواقع ويب حديثة بالذكاء الاصطناعي مع لمسة يابانية فريدة وتجربة مستخدم استثنائية',
      features: ['تصميم ياباني عصري', 'ذكاء اصطناعي مدمج', 'سرعة عالية'],
      color: 'red'
    },
    {
      icon: Zap,
      title: 'أتمتة العمليات',
      description: 'حلول أتمتة ذكية للعمليات التجارية بأسلوب ياباني في الدقة والكفاءة',
      features: ['أتمتة شاملة', 'دقة يابانية', 'توفير الوقت'],
      color: 'yellow'
    },
    {
      icon: Code,
      title: 'تطبيقات مخصصة',
      description: 'تطوير تطبيقات ويب مخصصة بتقنيات حديثة وفلسفة التصميم الياباني الأنيق',
      features: ['حلول مخصصة', 'تقنيات حديثة', 'جودة يابانية'],
      color: 'red'
    },
    {
      icon: Sparkles,
      title: 'استشارات تقنية',
      description: 'تقديم استشارات متخصصة في الذكاء الاصطناعي والتقنيات الحديثة بحكمة يابانية',
      features: ['خبرة متقدمة', 'حلول مبتكرة', 'إرشاد احترافي'],
      color: 'yellow'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: 'from-red-500/20 to-red-600/20 border-red-500/30 text-red-400',
      yellow: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-400'
    };
    return colors[color];
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
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
              خدماتي
            </span>
            <span className="block text-2xl md:text-3xl text-gray-400 font-normal mt-4">
              حلول ذكية بروح يابانية
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            أقدم مجموعة شاملة من الخدمات التقنية المتقدمة بأسلوب ياباني فريد يجمع بين الدقة والجمال والكفاءة
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = getColorClasses(service.color);
            
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-red-500/30 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} border ${colorClasses.split(' ')[2]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${colorClasses.split(' ')[3]}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-japanese">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full mr-3 animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

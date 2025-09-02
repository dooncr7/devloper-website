import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Bot, MessageSquare, Sparkles, Zap, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'website Nezuko',
      description: 'موقع خاص ببوت نيزيكو لعرض معلومات حول البوت واوامر واقتراحات المستخدمين بطابع خلاب',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center',
      link: 'https://nezuko-bot.netlify.app/',
      tech: ['موقع بوت نيزيكو', 'ذكاء اصطناعي', 'تصميم ياباني'],
      icon: Bot,
      color: 'red',
      features: [
        'واجهة يابانية أصيلة مستوحاة من الأنمي',
        'لعبة سريعة للتسلية حول نيزيكو',
        'تصميم تفاعلي بألوان نيزوكو المميزة',
      ]
    },
    {
      id: 2,
      title: 'بوت واتساب للتسلية ',
      description: 'بوت واتساب للتحميل وادارة المجموعات والتسلية',
      image: 'https://files.catbox.moe/boi29a.jpg',
      tech: ['واتساب بوت', 'إدارة المجمعات', 'ردود ذكية'],
      icon: MessageSquare,
      color: 'green',
      features: [
        'ردود تلقائية متميزة ومسلية',
        'إدارة المجموعة بشكل مبسط',
        'اوامر متقدمة ',
        'العاب مسلية وممتعة'
      ]
    }
  ];

  const handleWhatsAppContact = (projectTitle) => {
    const phoneNumber = '212656317785';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const getColorClasses = (color) => {
    const colors = {
      red: {
        gradient: 'from-red-500/20 to-red-600/20',
        border: 'border-red-500/30',
        text: 'text-red-400',
        button: 'from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-red-500/25 hover:shadow-red-500/40'
      },
      green: {
        gradient: 'from-green-500/20 to-green-600/20',
        border: 'border-green-500/30',
        text: 'text-green-400',
        button: 'from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-green-500/25 hover:shadow-green-500/40'
      }
    };
    return colors[color];
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
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
              مشاريعي
            </span>
            <span className="block text-2xl md:text-3xl text-gray-400 font-normal mt-4">
             إبداعات 
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            مشاريع مختارة بعناية تعكس الثقافة اليبانية في التحسين المستمر والدقة في التنفيذ. كل مشروع يحمل لمسة يابانية فريدة في التصميم والوظائف
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const colorClasses = getColorClasses(project.color);
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
              >
                {/* Project Image */}
                <div className={`${isEven ? '' : 'lg:col-start-2'} relative group`}>
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-6 right-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses.gradient} border ${colorClasses.border} rounded-2xl flex items-center justify-center backdrop-blur-sm`}>
                        <IconComponent className={`w-8 h-8 ${colorClasses.text}`} />
                      </div>
                    </div>
                    {project.link && (
                      <div className="absolute bottom-6 left-6">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`bg-gradient-to-r ${colorClasses.button} text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          زيارة المشروع
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${isEven ? '' : 'lg:col-start-1'} space-y-6`}>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-japanese">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 bg-gradient-to-r ${colorClasses.gradient} border ${colorClasses.border} rounded-full text-sm ${colorClasses.text} font-medium backdrop-blur-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <h4 className="text-lg font-semibold text-white flex items-center font-japanese">
                      <Sparkles className={`w-5 h-5 mr-2 ${colorClasses.text}`} />
                      المميزات الرئيسية
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <div className={`w-2 h-2 ${colorClasses.text.replace('text-', 'bg-')} rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse`}></div>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleWhatsAppContact(project.title)}
                    className={`bg-gradient-to-r ${colorClasses.button} text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center group`}
                  >
                    <MessageSquare className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                    استفسر عن هذا المشروع
                    <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-red-900/20 to-yellow-900/20 border border-red-500/30 rounded-3xl p-12 backdrop-blur-sm">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-yellow-500/20 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <Globe className="w-10 h-10 text-red-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 font-japanese">
              هل لديك فكرة مشروع؟
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              دعني أحول فكرتك إلى واقع رقمي بأسلوب ياباني فريد. كل مشروع يحمل روح الكايزن في التحسين والإتقان
            </p>
            <button
              onClick={() => handleWhatsAppContact('مشروع جديد')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-xl font-semibold shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transform hover:scale-105 transition-all duration-300 flex items-center mx-auto group"
            >
              <MessageSquare className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              ابدأ مشروعك الآن
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sword, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppContact = () => {
    const phoneNumber = '212656317785';
    const whatsappUrl = `https://wa.me/${phoneNumber}}`;
    window.open(whatsappUrl, '_blank');
  };

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'الخدمات', href: '#services' },
    { name: 'المشاريع', href: '#portfolio' },
    { name: 'التواصل', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-400 rounded-lg flex items-center justify-center">
              <Sword className="w-6 h-6 text-white transform rotate-45" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent font-japanese">
              Senior
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppContact}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center shadow-lg shadow-red-500/25"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              تواصل معي
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-red-400 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/90 backdrop-blur-md border-t border-red-500/20"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium py-2"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                handleWhatsAppContact();
                setIsOpen(false);
              }}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center mt-4"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              تواصل معي
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

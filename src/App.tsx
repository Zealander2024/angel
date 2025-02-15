import React, { useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, GraduationCap, Briefcase, Languages, User, Menu, X, FileDown, Code, Info, Link, Github, Eye } from 'lucide-react';
import { projects } from './data/projects';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const BackgroundAnimation = () => {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-feminine opacity-90" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
        
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [180, 360, 180],
            x: [0, -30, 0],
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/20 to-rose-200/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            x: [0, -20, 0],
            y: [0, -40, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl"
        />

        {/* Sparkles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0,
                scale: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundAnimation />
      
      {/* Enhanced Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl font-serif italic text-gray-800 hover:text-rose-500 transition-colors duration-300">AS</h1>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
            </button>

            {/* Desktop menu - Enhanced */}
            <div className="hidden md:flex items-center space-x-10">
              {['about', 'projects', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)} 
                  className="text-gray-600 hover:text-rose-500 transition-colors duration-300 relative group"
                >
                  <span className="capitalize">{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <div className="relative group">
                <button 
                  className="px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-sm"
                  onClick={() => window.open('/resumee.pdf', '_blank')}
                >
                  <FileDown className="w-4 h-4" />
                  <span>View CV</span>
                </button>
                {/* Dropdown menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <a 
                    href="/resumee.pdf"
                    download="Angelica_Sudoy_CV.pdf"
                    className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download CV</span>
                  </a>
                  <a 
                    href="/resumee.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Preview CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-b border-gray-100`}>
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-rose-50 hover:text-rose-500 rounded-lg transition"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-rose-50 hover:text-rose-500 rounded-lg transition"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-rose-50 hover:text-rose-500 rounded-lg transition"
            >
              Contact
            </button>
            <div className="space-y-2">
              <a 
                href="/resumee.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-rose-50 hover:text-rose-500 rounded-lg transition flex items-center space-x-2"
              >
                <Eye className="w-4 h-4" />
                <span>Preview CV</span>
              </a>
              <a 
                href="/resumee.pdf"
                download="/resumee.pdf"
                className="block w-full text-left px-4 py-2 text-rose-500 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition flex items-center space-x-2"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-100 to-purple-50 opacity-90"></div>
          {/* Animated background elements */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [180, 360, 180] 
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-rose-200/30 rounded-full mix-blend-multiply filter blur-xl"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          {/* Profile Photo with enhanced animation */}
          <div className="relative mx-auto mb-12 w-48 h-48 md:w-56 md:h-56">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 rounded-full opacity-75 blur-sm"
            />
            <div className="absolute inset-0 bg-white rounded-full" />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="absolute inset-[3px] overflow-hidden rounded-full bg-white"
            >
              <img 
                src="https://media-hosting.imagekit.io//3109b4e3de7c42eb/angelpro.jpeg?Expires=1834210486&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=V2o~4fis6z0yJjb3VxVOJuZpeBi1dzfAE7UQGM5ZMe6yTd1hlUgjaBbepWL1msQtma7W6d6hMrodADfOwbNI4aSHnsRRVPapBHuC5nMyef6hT3tB7fIli4MYk8pZwF3yv7vzcRbT99r3peh3Eaz6cVy1EKld9UOU7EeYTXAf66Hq-671ZQSB3JqlOeNt1hmMOq9f1-IB93IZ3LaS9GXa5mE6mha-uGs1MOMyOijdsKxv09XGprszCkjGs2IT3F-hjiGHnFbgiQDfndyV7YL9KuacpBVJLzZfdw1-U~r4-Jm0HQo185er7humCbPM29oNKlR0UY4ZFHl0Z-r7PRxAWQ__"
                alt="Angelica Sudoy" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-light text-gray-800 mb-6 tracking-tight"
          >
            Angelica Ureta <span className="font-serif italic text-rose-500">Sudoy</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Bachelor Of Science Information technology skilled in delivering professional clerical support in dynamic environments
          </motion.p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* About Section - Enhanced */}
        <section id="about" className="scroll-mt-20 py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-4xl font-light text-gray-800 flex items-center space-x-3">
                  <Info className="w-8 h-8 text-rose-400" />
                  <span>About Me</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I am a dedicated and detail-oriented Business Administrator with a passion for creating efficient and organized work environments. My strong foundation in clerical support, combined with my enthusiasm for learning and growth, makes me an asset to any organization looking for a committed professional.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Organization', 'Leadership', 'Communication', 'Problem Solving'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Phone, text: '+639942132763' },
                  { icon: Mail, text: 'sdynglc@gmail.com' },
                  { icon: MapPin, text: 'San Aquilino, Roxas, Oriental Mindoro' },
                  { icon: Languages, text: 'English, Filipino' }
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <Icon className="w-6 h-6 text-rose-400 mb-3" />
                    <p className="text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section with stagger animation */}
        <motion.section 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          id="projects" 
          className="scroll-mt-20 py-20 bg-white/80 backdrop-blur-sm"
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-light text-gray-800 mb-12 flex items-center space-x-3"
            >
              <Code className="w-8 h-8 text-rose-400" />
              <span>Projects & Experience</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-medium text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex items-center space-x-4">
                      {project.detailsUrl && (
                        <motion.a 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.detailsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-rose-500 hover:text-rose-600 transition-colors duration-300"
                        >
                          <Link className="w-4 h-4" />
                          <span>View Project</span>
                        </motion.a>
                      )}
                      {project.repoUrl && (
                        <a 
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-gray-500 hover:text-gray-600 transition-colors duration-300"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <section className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-light text-gray-800 mb-6 flex items-center">
            <GraduationCap className="w-6 h-6 text-rose-400 mr-2" />
            Educational Background
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800">Secondary Education</h3>
              <p className="text-gray-600">Fe Del Mundo National High School</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Primary Education</h3>
              <p className="text-gray-600">Don B. Del Mundo Memorial School</p>
              <p className="text-gray-500">B. Del Mundo, Mansalay, Oriental Mindoro</p>
              <p className="text-gray-500">S.Y 2015-2016</p>
            </div>
          </div>
        </section>

        {/* Personal Information */}
        <section className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-light text-gray-800 mb-6 flex items-center">
            <User className="w-6 h-6 text-rose-400 mr-2" />
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="text-gray-600 min-w-32">Age:</span>
                  <span className="text-gray-800">22</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-600 min-w-32">Gender:</span>
                  <span className="text-gray-800">Female</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-600 min-w-32">Height:</span>
                  <span className="text-gray-800">5'0</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-600 min-w-32">Weight:</span>
                  <span className="text-gray-800">42</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="text-gray-600 min-w-32">Birthday:</span>
                  <span className="text-gray-800">November 24, 2002</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-600 min-w-32">Birth Place:</span>
                  <span className="text-gray-800">Bongabong, Oriental Mindoro</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-600 min-w-32">Civil Status:</span>
                  <span className="text-gray-800">Single</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-600 min-w-32">Religion:</span>
                  <span className="text-gray-800">INC (Iglesia Ni Cristo)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-light text-gray-800 mb-6 flex items-center">
            <Languages className="w-6 h-6 text-rose-400 mr-2" />
            Languages
          </h2>
          <div className="flex space-x-4">
            <span className="px-4 py-2 bg-rose-50 text-rose-600 rounded-full">English</span>
            <span className="px-4 py-2 bg-rose-50 text-rose-600 rounded-full">Filipino</span>
          </div>
        </section>
      </main>

      {/* Footer with fade in animation */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white/90 backdrop-blur-sm border-t border-gray-100 py-16"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif italic text-2xl text-gray-800 mb-4">Angelica Sudoy</h3>
              <p className="text-gray-600 leading-relaxed">
                Transforming administrative challenges into streamlined solutions
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['about', 'projects', 'contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item)}
                      className="text-gray-600 hover:text-rose-500 transition-colors duration-300 capitalize"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Get in Touch</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-rose-400" />
                  <span className="text-gray-600">+639942132763</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-rose-400" />
                  <span className="text-gray-600">sdynglc@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} Angelica Ureta Sudoy. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
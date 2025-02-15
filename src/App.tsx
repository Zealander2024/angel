import React, { useState } from 'react';
import { Heart, Mail, Phone, MapPin, GraduationCap, Briefcase, Languages, User, Menu, X, FileDown, Code, Info, Link, Github } from 'lucide-react';
import { projects } from './data/projects';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
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
              <a 
                href="/resumee.pdf" 
                download 
                className="px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>
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
            <a 
              href="/Angelica_Sudoy_CV.pdf" 
              download 
              className="block w-full text-left px-4 py-2 text-rose-500 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition flex items-center"
            >
              <FileDown className="w-4 h-4 mr-1" />
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <header className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-white"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634711153082-8949a603f15d?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          {/* Enhanced animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="animate-float-slow absolute top-1/4 left-1/4 w-72 h-72 bg-rose-200/50 rounded-full mix-blend-multiply filter blur-xl"></div>
            <div className="animate-float-slower absolute top-1/3 right-1/4 w-72 h-72 bg-pink-200/50 rounded-full mix-blend-multiply filter blur-xl"></div>
            <div className="animate-float absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-200/50 rounded-full mix-blend-multiply filter blur-xl"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="relative mx-auto mb-12 w-56 h-56">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full animate-spin-slow opacity-75"></div>
            <div className="absolute inset-3 bg-white rounded-full"></div>
            <img 
              src="/angelpro.jpeg" 
              alt="Angelica Sudoy" 
              className="absolute inset-4 rounded-full object-cover object-center animate-profile-appear shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6 tracking-tight">
            Angelica Ureta <span className="font-serif italic text-rose-500">Sudoy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Business Administrator skilled in delivering professional clerical support in dynamic environments
          </p>
        </div>
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

        {/* Projects Section - Enhanced */}
        <section id="projects" className="scroll-mt-20 py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-light text-gray-800 mb-12 flex items-center space-x-3">
              <Code className="w-8 h-8 text-rose-400" />
              <span>Projects & Experience</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-medium text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex items-center space-x-4">
                      {project.detailsUrl && (
                        <a 
                          href={project.detailsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-rose-500 hover:text-rose-600 transition-colors duration-300"
                        >
                          <Link className="w-4 h-4" />
                          <span>View Project</span>
                        </a>
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
                </div>
              ))}
            </div>
          </div>
        </section>

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

      {/* Footer - Enhanced */}
      <footer className="bg-white border-t border-gray-100 py-16">
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
      </footer>
    </div>
  );
}

export default App;
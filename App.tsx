import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronRight, CheckCircle2, Factory, Snowflake, 
  Building2, Phone, Mail, MapPin, Download, ShieldCheck, QrCode,
  Sun, Moon, Zap, Wind, Droplets, ArrowRight, Check,
  ChevronDown, ArrowUpRight, BarChart3, Thermometer, Award, FileText,
  ChevronLeft
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { 
  COMPANY_NAME, NAVIGATION, SLOGAN_MAIN, SLOGAN_SUB, 
  INTRO_TEXT, FEATURES, PRODUCTS, CASES, CONTACT_INFO, 
  ABOUT_IMAGES, HERO_SLIDES, TECH_IMAGES, HONORS_LIST, PATENTS_LIST
} from './constants';
import { ProductCategory, CaseStudy } from './types';

// --- Components ---

const RevealOnScroll = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="relative w-12 h-12 flex-shrink-0">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
        <path d="M 85 30 L 85 15 L 50 15 C 30 15 15 30 15 50 C 15 70 30 85 50 85 L 85 85 L 85 65 L 50 65 C 40 65 35 60 35 50 C 35 40 40 35 50 35 L 60 35" 
              fill="none" stroke="#151A59" strokeWidth="12" strokeLinecap="square" />
        <path d="M 50 50 L 85 50" fill="none" stroke="#EA5413" strokeWidth="12" strokeLinecap="square" />
         <path d="M 85 15 L 95 15" fill="none" stroke="#151A59" strokeWidth="0" />
      </svg>
    </div>
    <div className="flex flex-col justify-center">
      <span className="font-bold text-2xl text-ghcs-blue tracking-wider leading-none">光华创世</span>
      <span className="text-[0.6rem] font-bold text-ghcs-blue tracking-[0.1em] mt-1 whitespace-nowrap">GUANG HUA CHUANG SHI</span>
    </div>
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
              <Logo />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold uppercase tracking-wide transition-all duration-200 relative py-2 ${
                  location.pathname === item.path 
                    ? 'text-ghcs-blue' 
                    : 'text-gray-500 hover:text-ghcs-orange'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ghcs-orange transform origin-left transition-transform"></span>
                )}
              </Link>
            ))}
            <Link to="/contact" className="ml-4 bg-ghcs-orange hover:bg-orange-700 text-white px-5 py-2 rounded font-semibold text-sm transition-colors shadow-lg shadow-orange-200">
              获取报价
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ghcs-blue hover:text-ghcs-orange focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl z-50">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAVIGATION.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium ${
                   location.pathname === item.path 
                    ? 'bg-ghcs-light text-ghcs-blue border-l-4 border-ghcs-orange' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-ghcs-orange'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-ghcs-blue text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                   <span className="text-ghcs-blue font-bold text-2xl">G</span>
               </div>
               <span className="font-bold text-xl tracking-wider">光华创世</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed opacity-80">
              {SLOGAN_MAIN}<br/>{SLOGAN_SUB}
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-ghcs-darkBlue rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-ghcs-orange transition-colors cursor-pointer">
                <Phone size={14} />
              </div>
              <div className="w-8 h-8 bg-ghcs-darkBlue rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-ghcs-orange transition-colors cursor-pointer">
                <Mail size={14} />
              </div>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-8 text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-ghcs-orange block"></span>
              联系方式
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 text-gray-300 text-sm">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-ghcs-orange mt-0.5 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-ghcs-orange group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-ghcs-orange group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <QrCode className="w-5 h-5 text-ghcs-orange group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">官方微信公众号</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <Download className="w-5 h-5 text-ghcs-orange group-hover:text-white transition-colors" />
                <a href="#" className="underline decoration-dotted group-hover:text-white transition-colors">下载产品手册 (PDF)</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8 text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-ghcs-orange block"></span>
              快速导航
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              {NAVIGATION.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-ghcs-orange hover:translate-x-2 transition-all inline-flex items-center gap-2">
                    <ChevronRight size={14} className="text-gray-500" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealOnScroll>
      
      <div className="border-t border-ghcs-darkBlue pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} Technology Co., Ltd. All Rights Reserved.</p>
        <p>京ICP备XXXXXXX号</p>
      </div>
    </div>
  </footer>
);

// --- Sections ---

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = HERO_SLIDES;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[750px] flex items-center overflow-hidden bg-ghcs-blue">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide} 
            alt={`Slide background ${index + 1}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ghcs-blue via-ghcs-blue/85 to-ghcs-blue/30"></div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-ghcs-orange w-8' : 'bg-white/40 w-2 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/10 text-white border-l-4 border-ghcs-orange text-sm font-bold mb-8 backdrop-blur-md">
            <ShieldCheck size={18} className="text-ghcs-orange" />
            <span>安全 · 高效 · 蓄冰倡导者</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
            {SLOGAN_MAIN}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 font-light mb-10 border-l-2 border-ghcs-orange pl-6 drop-shadow-md">
            {SLOGAN_SUB}
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/products" className="bg-ghcs-orange hover:bg-orange-600 text-white px-10 py-4 rounded font-bold text-lg transition-all shadow-xl shadow-orange-900/20 flex items-center gap-2 hover:-translate-y-1">
              探索产品 <ChevronRight size={20} />
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-ghcs-blue px-10 py-4 rounded font-bold text-lg transition-all hover:-translate-y-1">
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <RevealOnScroll>
        <div className="text-center mb-20">
          <span className="text-ghcs-orange font-bold tracking-widest uppercase text-sm">Our Advantages</span>
          <h2 className="text-4xl font-bold text-ghcs-blue mt-2 mb-6">企业优势</h2>
          <div className="w-24 h-1 bg-ghcs-orange mx-auto rounded-full"></div>
        </div>
      </RevealOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {FEATURES.map((feature, idx) => (
          <RevealOnScroll key={idx} delay={idx * 100} className="h-full">
            <div className="group h-full p-8 bg-white rounded-xl hover:shadow-2xl hover:shadow-ghcs-blue/10 transition-all duration-300 border border-gray-100 hover:border-ghcs-blue/20 relative overflow-hidden text-center">
              <div className="w-16 h-16 bg-ghcs-light rounded-full mx-auto mb-6 flex items-center justify-center text-ghcs-blue group-hover:bg-ghcs-blue group-hover:text-white transition-all duration-300">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-4 group-hover:text-ghcs-blue transition-colors">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600">{feature.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);

// --- Pages ---

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <section className="py-24 bg-ghcs-light relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-ghcs-blue/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <span className="text-ghcs-orange font-bold tracking-widest uppercase text-sm">About Us</span>
              <h2 className="text-4xl font-bold text-ghcs-blue mb-8 mt-2">关于光华创世</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {INTRO_TEXT.substring(0, 150)}...
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "专用于蓄冰盘管研发生产面积 20000 ㎡以上",
                  "拥有碳钢镀锌、不锈钢、复合蓄冰盘管专用生产线",
                  "蓄冰盘管标准实验检测平台（国检联合）",
                  "高效冰蓄冷系统实验测试中心"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="mt-1 w-6 h-6 rounded-full bg-ghcs-orange/10 flex items-center justify-center flex-shrink-0">
                       <CheckCircle2 className="w-4 h-4 text-ghcs-orange" />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-ghcs-blue font-bold border-b-2 border-ghcs-orange pb-1 hover:text-ghcs-orange transition-colors">
                了解更多关于我们 <ChevronRight size={16} />
              </Link>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            {/* Mosaic Grid Layout */}
            <div className="grid grid-cols-2 gap-4 h-[500px] w-full mt-10 lg:mt-0">
               {/* Left Column: Tall Main Image */}
               <div className="relative rounded-2xl overflow-hidden shadow-lg h-full group row-span-2">
                 <img 
                   src={ABOUT_IMAGES.factory} 
                   alt="Automated Production Line" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-ghcs-blue/90 to-transparent p-6">
                    <p className="text-white font-bold text-lg">20000㎡+</p>
                    <p className="text-white/80 text-xs">研发生产基地</p>
                 </div>
               </div>
               
               {/* Right Top: Lab */}
               <div className="relative rounded-2xl overflow-hidden shadow-lg h-full group">
                 <img 
                   src={ABOUT_IMAGES.lab} 
                   alt="Laboratory" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-ghcs-blue/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-4 left-4">
                     <span className="bg-ghcs-orange text-white text-xs px-2 py-1 rounded font-bold">国检联合</span>
                  </div>
               </div>

               {/* Right Bottom: Quality */}
               <div className="relative rounded-2xl overflow-hidden shadow-lg h-full group">
                  <img 
                   src={ABOUT_IMAGES.quality} 
                   alt="Quality Control" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-ghcs-blue/20 group-hover:bg-transparent transition-colors"></div>
                 <div className="absolute bottom-4 left-4">
                     <span className="bg-ghcs-blue text-white text-xs px-2 py-1 rounded font-bold">耐腐蚀检测</span>
                  </div>
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  </>
);

const AboutPage = () => (
  <div className="bg-white min-h-screen">
    {/* Simple Hero */}
    <div className="bg-ghcs-blue py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
         <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">企业简介</h1>
         <p className="text-blue-200 text-lg max-w-2xl mx-auto">专注蓄冰 · 实践创新 · 行业领跑二十载</p>
      </div>
    </div>

    {/* Split Screen Content */}
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/2 space-y-6">
          <RevealOnScroll>
            <div className="inline-block px-3 py-1 bg-orange-50 text-ghcs-orange font-bold text-sm rounded-full mb-2">Since 2002</div>
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
              北京光华创世科技有限责任公司<br/>
              <span className="text-ghcs-blue">安全高效蓄冰倡导者</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              {INTRO_TEXT}
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              光华坚持以研发创新与实践并行，提供安全、高效、耐用、高性价比的蓄冰产品，为客户创造更大价值。
              主要成员拥有蓄冰领域 20 年以上从业经验，获得国家专利几十项，获得国家科技进步奖励。
            </p>
          </RevealOnScroll>
        </div>
        
        <div className="lg:w-1/2">
           <RevealOnScroll delay={200}>
              <div className="relative">
                {/* Main large image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                   <img src={ABOUT_IMAGES.introMain} alt="Company HQ" className="w-full h-auto" />
                </div>
                {/* Floating Stats Card */}
                <div className="absolute -bottom-10 -left-10 bg-ghcs-blue text-white p-8 rounded-xl shadow-xl hidden md:block max-w-xs">
                   <div className="flex items-center gap-4 mb-4">
                      <Award className="text-ghcs-orange w-10 h-10" />
                      <div>
                        <div className="text-3xl font-bold">9+</div>
                        <div className="text-sm text-gray-300">专业生产线</div>
                      </div>
                   </div>
                   <p className="text-sm text-gray-300 border-t border-gray-600 pt-4">
                     包括碳钢镀锌、不锈钢、复合蓄冰盘管专用生产线。
                   </p>
                </div>
              </div>
           </RevealOnScroll>
        </div>
      </div>
    </section>

    {/* Key Numbers Strip */}
    <section className="bg-ghcs-darkBlue py-16 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700">
        <RevealOnScroll delay={0}>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-ghcs-orange mb-2">20+</div>
            <div className="text-gray-400">年行业经验</div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div className="p-4">
             <div className="text-4xl md:text-5xl font-bold text-ghcs-orange mb-2">2万</div>
             <div className="text-gray-400">平方米生产基地</div>
          </div>
        </RevealOnScroll>
         <RevealOnScroll delay={200}>
          <div className="p-4">
             <div className="text-4xl md:text-5xl font-bold text-ghcs-orange mb-2">4条</div>
             <div className="text-gray-400">自动弯管产线</div>
          </div>
        </RevealOnScroll>
         <RevealOnScroll delay={300}>
          <div className="p-4">
             <div className="text-4xl md:text-5xl font-bold text-ghcs-orange mb-2">TOP</div>
             <div className="text-gray-400">行业技术领先</div>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    {/* NEW Honors & Patents Section */}
    <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-ghcs-blue mb-4">荣誉资质 & 技术专利</h2>
                <div className="w-20 h-1 bg-ghcs-orange mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  光华创世始终坚持自主创新，拥有多项国家专利及行业权威认证，
                  产品性能通过国家级实验室检测。
                </p>
              </div>
            </RevealOnScroll>

            {/* Honors Row */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                 <Award className="text-ghcs-orange w-6 h-6" />
                 <h3 className="text-2xl font-bold text-slate-900">企业荣誉资质</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {HONORS_LIST.map((item, index) => (
                  <RevealOnScroll key={index} delay={index * 100}>
                    <div className="group">
                      <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:border-ghcs-blue/30">
                        <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-white relative">
                           <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <p className="text-center font-bold text-slate-800 text-sm group-hover:text-ghcs-blue transition-colors">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            {/* Patents Row */}
             <div>
              <div className="flex items-center gap-3 mb-8">
                 <ShieldCheck className="text-ghcs-blue w-6 h-6" />
                 <h3 className="text-2xl font-bold text-slate-900">技术专利 & 检测报告</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {PATENTS_LIST.map((item, index) => (
                  <RevealOnScroll key={index} delay={index * 50}>
                    <div className="group">
                      <div className="bg-white border border-gray-100 p-3 rounded-lg transition-all duration-300 group-hover:shadow-md">
                        <div className="aspect-[1/1.4] overflow-hidden rounded mb-3 bg-gray-50 border border-gray-50">
                           <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-center font-medium text-gray-600 text-xs group-hover:text-ghcs-orange transition-colors">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
         </div>
       </section>
  </div>
);

const TechnologyPage = () => {
  // Mock data for the chart
  const chartData = [
    { time: '22:00', load: 20, ice: 0 },
    { time: '02:00', load: 15, ice: 40 },
    { time: '06:00', load: 15, ice: 100 },
    { time: '10:00', load: 60, ice: 80 },
    { time: '14:00', load: 100, ice: 40 },
    { time: '18:00', load: 80, ice: 10 },
    { time: '21:00', load: 50, ice: 0 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-ghcs-blue py-20 text-center">
         <h1 className="text-4xl font-bold text-white mb-4">核心技术原理</h1>
         <p className="text-gray-300">利用峰谷电价差 · 平衡电网负荷 · 降低运行成本</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        {/* Cycle Diagram Card */}
        <RevealOnScroll>
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 mb-12 border border-gray-100">
             <div className="text-center mb-12">
               <h2 className="text-2xl font-bold text-ghcs-blue mb-2">冰蓄冷基本原理</h2>
               <p className="text-gray-500">移峰填谷，高效节能</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                {/* Night Cycle */}
                <div className="bg-blue-50 rounded-2xl p-8 relative overflow-hidden group hover:shadow-md transition-shadow">
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Moon size={120} className="text-ghcs-blue" />
                   </div>
                   <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-ghcs-blue text-white p-2 rounded-lg">
                          <Moon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-ghcs-blue">夜间蓄冷 (22:00 - 06:00)</h3>
                      </div>
                      <div className="flex items-center justify-between text-center">
                         <div className="flex flex-col items-center gap-2">
                            <Zap className="text-yellow-500 w-8 h-8" />
                            <span className="text-sm font-medium">低谷电力</span>
                         </div>
                         <ArrowRight className="text-gray-300 animate-pulse" />
                         <div className="flex flex-col items-center gap-2">
                             <Snowflake className="text-blue-400 w-8 h-8" />
                             <span className="text-sm font-medium">制冰主机</span>
                         </div>
                         <ArrowRight className="text-gray-300 animate-pulse" />
                         <div className="flex flex-col items-center gap-2">
                             <div className="w-10 h-10 border-2 border-blue-200 bg-white rounded flex items-center justify-center">
                               <div className="w-6 h-6 bg-blue-100 rounded-sm"></div>
                             </div>
                             <span className="text-sm font-medium">蓄冰装置</span>
                         </div>
                      </div>
                      <p className="mt-6 text-sm text-gray-600 bg-white/60 p-3 rounded backdrop-blur-sm">
                        利用夜间低价电力，将冷量以冰的形式储存在蓄冰盘管中，完成“充电”过程。
                      </p>
                   </div>
                </div>

                {/* Day Cycle */}
                 <div className="bg-orange-50 rounded-2xl p-8 relative overflow-hidden group hover:shadow-md transition-shadow">
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Sun size={120} className="text-ghcs-orange" />
                   </div>
                   <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-ghcs-orange text-white p-2 rounded-lg">
                          <Sun size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-ghcs-orange">日间放冷 (06:00 - 22:00)</h3>
                      </div>
                      <div className="flex items-center justify-between text-center">
                         <div className="flex flex-col items-center gap-2">
                             <div className="w-10 h-10 border-2 border-orange-200 bg-white rounded flex items-center justify-center">
                               <div className="w-6 h-6 bg-blue-100 rounded-sm"></div>
                             </div>
                            <span className="text-sm font-medium">蓄冰装置</span>
                         </div>
                         <ArrowRight className="text-gray-300 animate-pulse" />
                         <div className="flex flex-col items-center gap-2">
                             <Wind className="text-blue-300 w-8 h-8" />
                             <span className="text-sm font-medium">融冰释放</span>
                         </div>
                         <ArrowRight className="text-gray-300 animate-pulse" />
                         <div className="flex flex-col items-center gap-2">
                             <Building2 className="text-gray-600 w-8 h-8" />
                             <span className="text-sm font-medium">建筑空调</span>
                         </div>
                      </div>
                      <p className="mt-6 text-sm text-gray-600 bg-white/60 p-3 rounded backdrop-blur-sm">
                        白天用电高峰期，融化储存的冰，为建筑物提供空调冷源，减少主机运行，节省电费。
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </RevealOnScroll>

        {/* Chart Widget */}
        <RevealOnScroll delay={200}>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-12">
             <div className="flex items-center justify-between mb-8">
               <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                 <BarChart3 className="text-ghcs-blue" /> 典型日负荷运行策略
               </h3>
               <div className="flex gap-4 text-xs">
                 <span className="flex items-center gap-1"><div className="w-3 h-3 bg-ghcs-blue rounded-full"></div> 建筑负荷</span>
                 <span className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-300 rounded-full"></div> 蓄冰量</span>
               </div>
             </div>
             <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={chartData}>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                   <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                   <YAxis hide />
                   <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                   <Area type="monotone" dataKey="load" stackId="1" stroke="#151A59" fill="#151A59" fillOpacity={0.1} />
                   <Area type="monotone" dataKey="ice" stackId="2" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.2} />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
          </div>
        </RevealOnScroll>

        {/* Scenarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: "峰谷价差大", desc: "利用电价政策，大幅降低运行费用", icon: <Zap /> },
             { title: "区域供冷", desc: "大温差输送，降低管网和泵耗", icon: <MapPin /> },
             { title: "备用冷源", desc: "关键设施应急冷源保障", icon: <ShieldCheck /> },
             { title: "增容改造", desc: "不增加电力容量情况下增加冷量", icon: <ArrowUpRight /> },
           ].map((item, i) => (
             <RevealOnScroll key={i} delay={i*100}>
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-ghcs-orange transition-colors group h-full">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-ghcs-blue mb-4 group-hover:bg-ghcs-orange group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
               </div>
             </RevealOnScroll>
           ))}
        </div>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState(PRODUCTS[0].id);
  const selectedProduct = PRODUCTS.find(p => p.id === activeCategory) || PRODUCTS[0];

  return (
    <div className="bg-gray-50 min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
         <div className="mb-10 text-center md:text-left">
             <h1 className="text-3xl font-bold text-ghcs-blue">产品中心</h1>
             <p className="text-gray-500 mt-2">先进的蓄冰盘管技术与解决方案</p>
         </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-28">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-gray-800 font-bold text-lg flex items-center gap-2">
                  <Menu size={18} /> 产品系列
                </h3>
              </div>
              <div className="p-2 space-y-1">
                {PRODUCTS.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setActiveCategory(product.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between group ${
                      activeCategory === product.id
                        ? 'bg-ghcs-blue text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span>{product.title}</span>
                    {activeCategory === product.id && <ChevronRight size={16} className="text-ghcs-orange" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 flex-grow">
             <RevealOnScroll key={selectedProduct.id}>
                
                {/* Product Header Layout (Split View) */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left: Image */}
                    <div className="h-[300px] lg:h-[400px] bg-gray-100 relative border-b lg:border-b-0 lg:border-r border-gray-100">
                      <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.title} 
                        className="w-full h-full object-cover absolute inset-0" 
                      />
                    </div>
                    
                    {/* Right: Info */}
                    <div className="p-8 flex flex-col justify-center">
                       <div className="mb-6">
                         <h2 className="text-3xl font-bold text-ghcs-blue mb-4">{selectedProduct.title}</h2>
                         <p className="text-gray-600 leading-relaxed">
                           {selectedProduct.description}
                         </p>
                       </div>
                       
                       <div>
                          <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                             <CheckCircle2 size={16} className="text-ghcs-orange" /> 核心优势
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {selectedProduct.features.map((feat, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                 <div className="w-1.5 h-1.5 rounded-full bg-ghcs-orange"></div>
                                 {feat}
                              </div>
                            ))}
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Specs Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                   <div className="bg-gray-50 px-6 py-5 border-b border-gray-200 flex items-center justify-between">
                      <h3 className="font-bold text-gray-800 flex items-center gap-2">
                         <FileText size={18} className="text-ghcs-blue" /> 技术参数
                      </h3>
                      <div className="flex gap-2">
                         <span className="text-xs px-2 py-1 bg-white border rounded text-gray-500">Scroll →</span>
                      </div>
                   </div>
                   <div className="overflow-x-auto scrollbar-default">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50/50 border-b border-gray-100">
                           <tr>
                             <th className="px-6 py-4 font-semibold">型号</th>
                             <th className="px-6 py-4 font-semibold text-center">蓄冰量 (RTh)</th>
                             <th className="px-6 py-4 font-semibold text-center">流量 (m³/h)</th>
                             <th className="px-6 py-4 font-semibold text-center">压降 (kPa)</th>
                             <th className="px-6 py-4 font-semibold text-center">容积 (L)</th>
                             <th className="px-6 py-4 font-semibold text-right">尺寸 (mm)</th>
                             <th className="px-6 py-4 font-semibold text-center">接口</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                           {selectedProduct.specs.map((spec, index) => (
                             <tr key={index} className="hover:bg-blue-50/30 transition-colors group">
                                <td className="px-6 py-4 font-bold text-ghcs-blue group-hover:text-ghcs-orange transition-colors">
                                  {spec.model}
                                </td>
                                <td className="px-6 py-4 text-center font-mono text-gray-600">{spec.capacity}</td>
                                <td className="px-6 py-4 text-center font-mono text-gray-600">{spec.flowRate > 0 ? spec.flowRate : '-'}</td>
                                <td className="px-6 py-4 text-center font-mono text-gray-600">{spec.pressureDrop > 0 ? spec.pressureDrop : '-'}</td>
                                <td className="px-6 py-4 text-center font-mono text-gray-600">{spec.volume}</td>
                                <td className="px-6 py-4 text-right font-mono text-xs text-gray-500">{spec.dimensions}</td>
                                <td className="px-6 py-4 text-center font-mono text-gray-600 bg-gray-50/30">{spec.connection}</td>
                             </tr>
                           ))}
                        </tbody>
                      </table>
                   </div>
                </div>

                <div className="mt-8 flex justify-end">
                   <Link to="/contact" className="inline-flex items-center gap-2 bg-ghcs-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-ghcs-darkBlue transition-colors shadow-lg shadow-blue-900/20">
                     获取详细选型报价 <ArrowRight size={18} />
                   </Link>
                </div>

             </RevealOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

const CasesPage = () => (
  <div className="bg-white min-h-screen pb-20">
    <div className="bg-ghcs-blue py-20 text-center mb-16">
         <h1 className="text-4xl font-bold text-white mb-4">典型案例</h1>
         <p className="text-gray-300">遍布全国的成功实践 · 值得信赖的合作伙伴</p>
      </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {CASES.map((item, index) => (
        <RevealOnScroll key={item.id} className="group">
          <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            
            {/* Image Side */}
            <div className="lg:w-1/2 w-full">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[350px] lg:h-[450px]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-ghcs-blue flex items-center gap-2">
                    <MapPin size={14} className="text-ghcs-orange" /> {item.location}
                  </div>
               </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 w-full space-y-6">
               <h2 className="text-3xl font-bold text-slate-900 group-hover:text-ghcs-blue transition-colors">
                 {item.title}
               </h2>
               <p className="text-gray-600 leading-relaxed text-lg">
                 {item.description}
               </p>
               
               {/* Data Row */}
               <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">供冷面积</div>
                    <div className="font-bold text-ghcs-blue text-lg">{item.stats.area}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">蓄冰量</div>
                    <div className="font-bold text-ghcs-blue text-lg">{item.stats.capacity}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">冰层厚度</div>
                    <div className="font-bold text-ghcs-blue text-lg">{item.stats.thickness}</div>
                  </div>
               </div>
            </div>

          </div>
        </RevealOnScroll>
      ))}
    </div>
  </div>
);

const ContactPage = () => (
  <div className="bg-gray-50 min-h-screen py-20">
    <div className="max-w-4xl mx-auto px-4">
      <RevealOnScroll>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-ghcs-blue text-white p-12 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-3xl font-bold mb-6">联系我们</h2>
               <p className="text-blue-200 mb-8">我们期待与您的合作，为您提供专业的冰蓄冷解决方案。</p>
               
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-ghcs-orange flex-shrink-0" />
                    <span className="text-sm">{CONTACT_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-ghcs-orange flex-shrink-0" />
                    <span className="text-sm font-bold text-lg">{CONTACT_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-ghcs-orange flex-shrink-0" />
                    <span className="text-sm">{CONTACT_INFO.email}</span>
                  </div>
               </div>
             </div>
             
             {/* Decorative circles */}
             <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
          </div>
          
          <div className="p-12 md:w-3/5 bg-white">
             <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-8">关注官方微信</h3>
                <div className="inline-block p-4 border-2 border-ghcs-orange/20 rounded-xl bg-orange-50/30">
                   <img 
                     src={CONTACT_INFO.wechatQr} 
                     alt="WeChat QR Code" 
                     className="w-48 h-48 object-contain mix-blend-multiply" 
                   />
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  扫码关注公众号<br/>获取更多技术资料与行业动态
                </p>
             </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </div>
);

const App = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
import { useRef } from 'react';
import { Mail, Download, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);

  return (
    <section id="home" className="min-h-screen flex items-center bg-black relative overflow-hidden pt-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 
                ref={textRef}
                className="text-6xl md:text-7xl font-extralight tracking-tight text-white"
              >
                John Matthew
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-300 font-extralight tracking-wide">
                UX/UI Designer
              </h2>
              
              <p className="text-lg text-gray-400 font-light">
                Davao City, Philippines • Available for Projects
              </p>
            </div>
            
            <p className="text-lg text-gray-400 font-light">
              Passionate UI/UX designer crafting intuitive digital experiences. Specializing in user-centered design solutions that merge creativity with functionality.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-lg font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore Projects
                <ArrowUpRight className="w-5 h-5" />
              </a>
              
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 bg-zinc-900 text-white rounded-lg font-medium tracking-wide hover:bg-zinc-800 transition-all duration-300 inline-flex items-center justify-center gap-2 border border-zinc-800"
              >
                <Mail className="w-5 h-5" />
                Let's Connect
              </a>
              
              <button 
                className="w-full sm:w-auto px-6 py-3 bg-zinc-900 text-white rounded-lg font-medium tracking-wide hover:bg-zinc-800 transition-all duration-300 inline-flex items-center justify-center gap-2 border border-zinc-800"
              >
                <Download className="w-5 h-5" />
                Resume
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-first md:order-last">
            <div className="absolute inset-0 bg-zinc-900/50 blur-3xl"></div>
            <div className="relative h-[500px] md:h-[600px]">
              <img
                src="/images/Profile.jpg"
                alt="John Matthew"
                className="w-full h-full object-contain bg-zinc-900 relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
import { Calendar, X, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Certifications = () => {
  const [visibleCerts, setVisibleCerts] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);

  const certifications = [
    {
      id: 1,
      title: "Website Development",
      organization: "Web Development",
      date: "2024",
      badge: "Web Dev",
      description: "Professional certification in modern web development and design.",
      color: "bg-black text-white",
      image: "/images/Website.png.jpg"
    },
    {
      id: 2,
      title: "Figma Design",
      organization: "UI/UX Design",
      date: "2024",
      badge: "Figma",
      description: "Professional certification in UI/UX design using Figma.",
      color: "bg-black text-white",
      image: "/images/Figma.png"
    },
    {
      id: 3,
      title: "Graphic Design",
      organization: "Design Certification",
      date: "2024",
      badge: "Design",
      description: "Professional certification in graphic design and visual communication.",
      color: "bg-black text-white",
      image: "/images/GraphicDesign.png.jpg"
    },
    {
      id: 4,
      title: "JavaScript Tutorial",
      organization: "Programming Certification",
      date: "2024",
      badge: "JavaScript",
      description: "Comprehensive JavaScript programming certification covering modern web development concepts.",
      color: "bg-black text-white",
      image: "/images/JavaScript.png"
    },
    {
      id: 5,
      title: "Capstone Exhibition",
      organization: "Academic Achievement",
      date: "2024",
      badge: "Exhibition",
      description: "Project exhibition showcasing innovative solutions and technical implementations.",
      color: "bg-black text-white",
      image: "/images/Capstone1.png"
    },
    {
      id: 6,
      title: "Capstone Writing",
      organization: "Academic Research",
      date: "2024",
      badge: "Research",
      description: "Technical writing and research documentation certification.",
      color: "bg-black text-white",
      image: "/images/Capstone2.png"
    },
    {
      id: 7,
      title: "Advanced Research Writing",
      organization: "Academic Research",
      date: "2024",
      badge: "Research",
      description: "Advanced certification in technical documentation and research methodology.",
      color: "bg-black text-white",
      image: "/images/Capstone2.png"
    },
    {
      id: 8,
      title: "MCITS 2023",
      organization: "Professional Certification",
      date: "2023",
      badge: "MCITS",
      description: "Professional certification in Information Technology and Systems.",
      color: "bg-black text-white",
      image: "/images/MCITS23.png"
    },
    {
      id: 9,
      title: "MCITS 2024",
      organization: "Professional Certification",
      date: "2024",
      badge: "MCITS",
      description: "Advanced certification in Information Technology Solutions.",
      color: "bg-black text-white",
      image: "/images/MCITS24.png"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = certRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCerts.includes(index)) {
              setTimeout(() => {
                setVisibleCerts(prev => [...prev, index]);
              }, index * 150);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
      }
    );

    certRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCerts]);

  // Handle escape key press to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="certifications" className="pt-0 pb-32 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-900/20 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-900/20 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-900/20 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-extralight mb-6 text-white tracking-tight animate-fade-in">
              Certifications
            </h2>
            <div className="w-24 h-px bg-zinc-700 mx-auto mb-6"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light animate-fade-in">
            Professional certifications and achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              ref={(el) => (certRefs.current[index] = el)}
              className={`group transition-all duration-700 ease-out ${
                visibleCerts.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-800 hover:border-zinc-700 hover:-translate-y-2">
                <div 
                  className="relative h-64 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/0 z-10"></div>
                  <div className="absolute inset-0 bg-zinc-800/50 flex items-center justify-center p-4">
                    <img 
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 ${cert.color} text-xs font-medium rounded-full tracking-wide`}>
                      {cert.badge}
                    </span>
                  </div>
                  {/* Centered view button */}
                  <div className="absolute inset-0 flex items-center justify-center z-30">
                    <button
                      onClick={() => setSelectedImage(cert.image)}
                      className="w-12 h-12 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                      aria-label="View Certificate"
                    >
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </button>
                  </div>
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 z-20"></div>
                </div>

                <div className="p-6">
                  <div className="space-y-1 mb-4">
                    <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-gray-200 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">
                      {cert.organization}
                    </p>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed font-light mb-4">
                    {cert.description}
                  </p>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Certificate" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
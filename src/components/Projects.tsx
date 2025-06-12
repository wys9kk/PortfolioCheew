import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [isSecondLogisticsImage, setIsSecondLogisticsImage] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      id: 1,
      title: "Book Landing Page",
      subtitle: "Web Landing Page",
      description: "Modern book showcase platform with elegant design",
      image: "/images/Booking.png",
      link: "#",
    },
    {
      id: 2,
      title: "VPS Hosting Website",
      subtitle: "Web Multipager Website",
      description: "High-performance hosting solution with intuitive interface",
      image: "/images/E - Commerce.png",
      link: "#",
    },
    {
      id: 3,
      title: "Plantshop Landing",
      subtitle: "Web Landing Page",
      description: "Beautiful plant shop with modern aesthetics",
      image: "/images/Corporate.png",
      link: "#",
    },
    {
      id: 4,
      title: "Manpower Solutions",
      subtitle: "Web Application",
      description: "Professional manpower management platform",
      image: "/images/Manpower 1.png",
      link: "#",
    },
    {
      id: 5,
      title: "Logistics Platform",
      subtitle: "Web Application",
      description: "Comprehensive logistics and supply chain solution",
      image: "/images/Logistics 2.png",
      link: "#",
    },
    {
      id: 6,
      title: "Restaurant Management",
      subtitle: "Web Application",
      description: "Modern restaurant management and ordering system",
      image: "/images/Restaurant .png",
      link: "#",
    },
    {
      id: 7,
      title: "Product Catalog",
      subtitle: "Web Application",
      description: "Interactive product showcase and catalog system",
      image: "/images/Catalog.png",
      link: "#",
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleProjects.includes(index)) {
              setTimeout(() => {
                setVisibleProjects(prev => [...prev, index]);
              }, index * 200);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleProjects]);

  const handleImageClick = (project: any) => {
    setSelectedImage(project.image);
    setSelectedProjectId(project.id);
    setIsSecondLogisticsImage(false);
  };

  const handleNavigateLogistics = () => {
    if (selectedProjectId === 5) { // Only for Logistics Platform
      if (isSecondLogisticsImage) {
        setSelectedImage("/images/Logistics 2.png");
        setIsSecondLogisticsImage(false);
      } else {
        setSelectedImage("/images/Logistics 1.png");
        setIsSecondLogisticsImage(true);
      }
    }
  };

  return (
    <section id="projects" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Projects Section */}
          <div className="mb-20">
            {/* Section Header */}
            <div className="mb-20">
              <h2 className="text-6xl font-extralight text-white">Latest</h2>
              <h2 className="text-6xl font-extralight text-white -mt-1">Projects</h2>
            </div>

            {/* Projects List */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => (projectRefs.current[index] = el)}
                  className={`transition-all duration-700 ease-out ${
                    visibleProjects.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  <div className="relative">
                    <div className="mb-6">
                      <div>
                        <h3 className="text-xl font-light text-white">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="h-px w-12 bg-zinc-600"></div>
                          <p className="text-gray-400 text-sm">{project.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Image */}
                    <div className="overflow-hidden rounded-xl group relative bg-zinc-900/50">
                      <div className="aspect-[4/3] relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 transition-all duration-300">
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                          {/* Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button
                              onClick={() => handleImageClick(project)}
                              className="w-12 h-12 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                            >
                              <ArrowUpRight className="w-5 h-5 text-black" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
          onClick={() => {
            setSelectedImage(null);
            setSelectedProjectId(null);
            setIsSecondLogisticsImage(false);
          }}
        >
          <div className="relative max-w-4xl w-full max-h-[80vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Project preview"
              className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
                setSelectedProjectId(null);
                setIsSecondLogisticsImage(false);
              }}
              className="absolute -top-2 -right-2 bg-white p-2.5 rounded-full text-black hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows - Only show for Logistics Platform */}
            {selectedProjectId === 5 && (
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigateLogistics();
                  }}
                  className="pointer-events-auto p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 transform -translate-x-12"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigateLogistics();
                  }}
                  className="pointer-events-auto p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 transform translate-x-12"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

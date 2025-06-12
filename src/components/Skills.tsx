import { useRef, useEffect, useState } from 'react';
import { Palette, Layout, UserSquare2, Box, PenTool, Users } from 'lucide-react';

const skills = [
  { id: 1, name: 'Visual Design', icon: Palette },
  { id: 2, name: 'Wireframe', icon: Layout },
  { id: 3, name: 'User Experience Design', icon: UserSquare2 },
  { id: 4, name: 'Prototype', icon: Box },
  { id: 5, name: 'Art Direction', icon: PenTool },
  { id: 6, name: 'User Research', icon: Users },
];

const experience = [
  {
    id: 1,
    role: 'Product Designer',
    company: 'Amazon Inc',
    period: '2019 - Present',
  },
  {
    id: 2,
    role: 'UI/UX Designer',
    company: 'Microsoft',
    period: '2018 - 2019',
  },
  {
    id: 3,
    role: 'Web UI/UX Designer',
    company: 'Google',
    period: '2016 - 2018',
  },
  {
    id: 4,
    role: 'UI Designer',
    company: 'Facebook',
    period: '2014 - 2016',
  },
];

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex((ref) => ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column */}
            <div>
              <div className="mb-16">
                <div className="flex flex-col gap-1 mb-8">
                  <h2 className="text-6xl font-extralight text-white">Skills &</h2>
                  <h2 className="text-6xl font-extralight text-white">Experience</h2>
                </div>
                <div className="flex gap-2 text-gray-400 text-sm max-w-2xl">
                  <span className="w-8 border-t border-gray-400 mt-3"></span>
                  <p>
                    A specialist in UI/UX design. A passion of mine is designing and solving problems through user experience.
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h3 className="text-2xl font-light mb-12 text-white">Skills</h3>
                <div className="grid grid-cols-3 gap-12">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.id}
                        ref={(el) => (itemRefs.current[index] = el)}
                        className={`transition-all duration-500 ease-out ${
                          visibleItems.includes(index)
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                        }`}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-zinc-900 rounded-full mb-4 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <span className="text-sm font-light text-gray-300">{skill.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Experience Section */}
            <div className="pt-29">
              <h3 className="text-2xl font-light mb-12 text-white">Experience</h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={exp.id}
                    ref={(el) => (itemRefs.current[index + skills.length] = el)}
                    className={`transition-all duration-500 ease-out ${
                      visibleItems.includes(index + skills.length)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="grid grid-cols-[1fr_auto] items-start gap-4 border-b border-gray-700/50 pb-4">
                      <div>
                        <h4 className="text-lg font-light text-white mb-1">{exp.role}</h4>
                        <p className="text-gray-400 text-sm">{exp.company}</p>
                      </div>
                      <span className="text-gray-500 text-sm whitespace-nowrap">{exp.period}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Profile Image Section */}
              <div className="mt-16 flex justify-center">
                <div className="relative">
                  {/* Larger cyan glow */}
                  <div className="absolute -inset-8 bg-cyan-100/20 rounded-full blur-3xl"></div>
                  <div className="relative w-72 h-72 rounded-full overflow-hidden">
                    <img
                      src="/images/Profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Hire Me Circle - positioned outside profile container */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-black rounded-full">
                    <div className="w-32 h-32 flex flex-col items-center justify-center">
                      <span className="text-white text-sm font-light">HIRE ME</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

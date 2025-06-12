import { Users, Award, Briefcase, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight mb-6 text-white tracking-tight">
              About Me
            </h2>
            <div className="w-24 h-px bg-zinc-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed font-light">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed font-light">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                  deserunt mollit anim id est laborum.
                </p>
              </div>
              
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-white mb-6">Core Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Example Skill 1',
                    'Example Skill 2',
                    'Example Skill 3',
                    'Example Skill 4',
                    'Example Skill 5',
                    'Example Skill 6',
                    'Example Skill 7',
                    'Example Skill 8'
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-gray-300 text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full h-[600px] overflow-hidden bg-zinc-900">
                <img 
                  src="/images/About Me.JPG" 
                  alt="About Me" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

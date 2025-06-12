import { Github, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-light text-white mb-3">
              John Matthew
            </div>
            <p className="text-gray-400 max-w-md font-light">
              Creating meaningful digital experiences through thoughtful design and strategic thinking.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-gray-400 text-sm font-light">
            © 2025 John Matthew. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

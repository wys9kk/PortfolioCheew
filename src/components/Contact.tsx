import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-20 text-white tracking-tight">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light text-white mb-6">Let's Work Together</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Email</div>
                  <div className="text-gray-400">example@domain.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Phone</div>
                  <div className="text-gray-400">+1 234 567 890</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Location</div>
                  <div className="text-gray-400">Davao City, Philippines</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-zinc-700 focus:border-white focus:ring-0 bg-transparent transition-all duration-300 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-zinc-700 focus:border-white focus:ring-0 bg-transparent transition-all duration-300 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-0 py-3 border-0 border-b border-zinc-700 focus:border-white focus:ring-0 bg-transparent transition-all duration-300 resize-none text-white"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-black py-4 px-6 font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wide"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

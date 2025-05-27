import React from "react";
import { Link } from "react-router-dom";
import { Footerlogo } from "../assets/images/index"
import { Heart, Github, Twitter, Linkedin,  } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800">
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
//           {/* Logo section */}
//           <figure className="w-full sm:w-auto flex justify-center">
//             <img 
//               src={logo} 
//               alt="Campus Hive Logo" 
//               className="w-48 sm:w-60 md:w-72 h-auto"
//             />
//           </figure>
//           <p className="text-gray-400 mb-4">
//               Connecting students and faculty in one unified platform.
//             </p>

//           {/* Navigation Links */}
//           <nav className="w-full sm:w-auto">
//             <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-amber-300 text-lg sm:text-xl font-semibold">
//               <li>
//                 <Link 
//                   to="/about" 
//                   className="hover:text-white transition-colors duration-200"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link 
//                   to="/privacy" 
//                   className="hover:text-white transition-colors duration-200"
//                 >
//                   Privacy
//                 </Link>
//               </li>
//               <li>
//                 <Link 
//                   to="/terms" 
//                   className="hover:text-white transition-colors duration-200"
//                 >
//                   Terms
//                 </Link>
//               </li>
//               <li>
//                 <Link 
//                   to="/contact-us" 
//                   className="hover:text-white transition-colors duration-200"
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {/* Copyright section */}
//       <div className="bg-gray-200 py-3 px-4 text-center">
//         <p className="text-gray-700 text-sm sm:text-base">
//           © {new Date().getFullYear()} CampusHive. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


const Footer = () => {
  return (
    <footer className="links bg-gray-800 text-white py-10 bo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1  ">
            <div className="flex items-center space-x-2 mb-4">
              <img src={Footerlogo} alt="CampusHive Logo"  />
              <h2 className="text-xl font-bold"></h2>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting students and faculty in one unified platform.
            </p>
            <div className="flex space-x-4 ">
              <a href="https://github.com/campushive" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/campushive" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/campushive" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="col-span-1  ml-10">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/materials" className="text-gray-400 hover:text-white transition-colors">Study Materials</Link></li>
              <li><Link to="/forum" className="text-gray-400 hover:text-white transition-colors">Discussion Forum</Link></li>
              <li><Link to="/calendar" className="text-gray-400 hover:text-white transition-colors">Event Calendar</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>Newbiee Cooders</p>
              <p>Kalanki, Kathmandu</p>
              <p className="mt-2">Email: info@campushive.edu</p>
              <p>Phone: 9800000012 </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CampusHive. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


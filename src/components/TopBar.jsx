import { Facebook, Instagram, Mail, Phone, MessageSquare } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full bg-gray-900 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+919452067415" className="text-sm hover:text-yellow-400 transition-colors">
                +91 9452067415
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:info@example.com" className="text-sm hover:text-yellow-400 transition-colors">
                info@example.com
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-blue-600 p-1.5 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-1.5 rounded-full hover:opacity-90 transition-opacity">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </div>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <div className="bg-green-500 p-1.5 rounded-full hover:bg-green-600 transition-colors">
                <MessageSquare className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

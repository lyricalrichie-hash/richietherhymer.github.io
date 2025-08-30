
import React from 'react';

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.483.011-4.706.068-2.61.119-3.763 1.262-3.882 3.882-.057 1.223-.067 1.59-.067 4.706s.01 3.483.067 4.706c.119 2.62 1.272 3.763 3.882 3.882 1.223.057 1.59.067 4.706.067s3.483-.01 4.706-.067c2.61-.119 3.763-1.262 3.882-3.882.057-1.223.067-1.59.067-4.706s-.01-3.483-.067-4.706c-.119-2.62-1.272-3.763-3.882-3.882-1.223-.057-1.59-.067-4.706-.067zM12 6.837c-2.841 0-5.163 2.322-5.163 5.163s2.322 5.163 5.163 5.163 5.163-2.322 5.163-5.163S14.841 6.837 12 6.837zm0 8.529c-1.859 0-3.366-1.506-3.366-3.366s1.506-3.366 3.366-3.366 3.366 1.506 3.366 3.366-1.506 3.366-3.366 3.366zm5.188-8.22c-.604 0-1.092.488-1.092 1.092s.488 1.092 1.092 1.092 1.092-.488 1.092-1.092-.488-1.092-1.092-1.092z"/>
    </svg>
);


const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 mt-20 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-500 mb-4 md:mb-0">
          &copy; {year} Richie The Rhymer. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
            <p className="text-sm text-red-500 font-semibold">(Replace '#' with your social media links)</p>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <InstagramIcon className="w-6 h-6" />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
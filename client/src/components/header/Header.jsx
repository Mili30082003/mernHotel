import React, { useState, useEffect } from 'react';
import LogoWhite from '../../assets/img/logo-white.svg';
import LogoDark from '../../assets/img/logo-dark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBed, faUtensils, faSpa, faUsers, faEnvelope, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-500`}>
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          {/* Logo */}
          <a href="/">
            {header ? (
              <img className="w-[160px]" src={LogoDark} alt="Logo oscuro" />
            ) : (
              <img className="w-[160px]" src={LogoWhite} alt="Logo claro" />
            )}
          </a>

          {/* Navigation */}
          <nav className={`${header ? 'text-primary' : 'text-white'} flex items-center gap-x-4 lg:gap-x-8`}>
            <a href="#" className="hover:text-accent transition">
              <FontAwesomeIcon icon={faHome} className="mr-2" /> Inicio
            </a>
            <a href="#" className="hover:text-accent transition">
              <FontAwesomeIcon icon={faBed} className="mr-2" /> Habitaciones
            </a>
            <a href="#" className="hover:text-accent transition">
              <FontAwesomeIcon icon={faSpa} className="mr-2" /> Galeria
            </a>
            <a href="#" className="hover:text-accent transition">
              <FontAwesomeIcon icon={faUsers} className="mr-2" /> Nosotros
            </a>
            <a href="#" className="hover:text-accent transition">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contacto
            </a>
          </nav>

          {/* User Actions */}
          <div className="flex gap-x-4">
            <a href="#" className="hover:text-accent transition ">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2 text-yellow-800" />
            </a>
            <a href="#" className="hover:text-accent transition">
              <FontAwesomeIcon icon={faUserPlus} className="mr-2 text-yellow-800" />
            </a>
          </div>
        </div>
      </header>

      {/* Medium Banner Section */}
     {/* Banner Section */}
<div className="bg-banner flex items-center justify-center text-white">

</div>

    </>
  );
}

export default Header;

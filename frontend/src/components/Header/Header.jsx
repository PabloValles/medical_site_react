import { useEffect, useRef } from 'react'
import logo from '../../assets/images/logo_fev.png'
import userImg from '../../assets/images/avatar-icon.png'
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'

const navLinks = [
  { path: '/home', display: 'Inicio' },
  { path: '/about', display: 'Nosotros' },
  { path: '/doctors', display: 'Profesionales' },
  { path: '/services', display: 'Servicios' },
  { path: '/contact', display: 'Contacto' },
  // { path: '/login', display: 'Login' },
  // { path: '/register', display: 'Register' },
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()

    return () => window.removeEventListener('scroll', handleStickyHeader)
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
  


  return <header className="header" ref={headerRef}>
    <div className="container">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Navigation */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu flex items-center gap-[2.7rem]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink 
                  to={link.path} 
                  className={navClass => 
                    navClass.isActive 
                      ? 'text-primaryColor text-[16px] leading-7 font-[600]' 
                      : 'text-[16px] leading-7 font-[600] hover:text-primaryColor'
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-4">
          <div className="hidden">
            <Link to="/">
              <figure>
                <img src={userImg} alt="user" className='w-full rounded-full cursor-pointer' />

              </figure>
            </Link>
          </div>
          <Link to="/login" className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]" >
            Login
          </Link>

          <span className="md:hidden" onClick={toggleMenu}>
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>
        </div>


      </div>
    </div>
  </header>
}

export default Header
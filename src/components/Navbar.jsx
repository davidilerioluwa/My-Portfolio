import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom"
import {navLinks} from "../constants"
import {logo,menu,close} from "../assets"

const Navbar = () => {

  const [active,setActive]= useState("")
  const [toggle,setToggle]=useState(false)
  
  return (
   <nav className='${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-primary'>
      <div className='w-full flex flex-row justify-between items-center max-w-7xl mx-auto'>
        <Link
          to=""
          className='flex items-center gap-2 px-2 py-2'
          onClick={()=>{
            setActive("")
            window.scrollTo(0,0)
          }}
        >
          <img src={logo} alt="logo" className='w-9 object-contain'/>
          <p>Godswill</p>
        </Link>
          <div className='sm:flex hidden'>
          {navLinks.map((Link)=>{
                return (
                  <span key={Link.id }
                   className={`${active===Link.title?"text-white":"text-secondary " } px-4 hover:text-white text-[18px] cursor-pointer`}
                   onClick={()=>setActive(Link.title)}
                   >
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </span>
                )})
            }
          </div>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle?close:menu}
              alt='menu'
              className='w-8 h-8 object-contain cursor-pointer'
              onClick={()=> setToggle(!toggle)}
            />
            <div className={`${toggle?"flex flex-col gap-4":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w{140} z-10 rounded-xl` }>
              {navLinks.map((Link)=>{
                  return (
                    <span key={Link.id }
                    className={`${active===Link.title?"text-white":"text-secondary " }hover:text-white text-[16px] cursor-pointer`}
                    onClick={()=>{
                      setActive(Link.title)
                      setToggle(!toggle)
                    }}
                    >
                      <a href={`#${Link.id}`}>{Link.title}</a>
                    </span>
                  )})
              }
            </div>
          </div>
      </div>
   </nav>
  )
}

export default Navbar
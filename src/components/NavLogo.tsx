

export const NavLogo = () => {
  return (
    <div className="flex items-center gap-3 text-3xl font-bold bg-linear-[135deg,var(--primary-blue),var(--accent-blue)] bg-clip-text text-transparent tracking-[0.5px] cursor-pointer">
      <img 
        src="/DAMBEDEV-LOGO2.png" 
        alt="DambeDev Logo"
        className="w-auto h-[40px] shadow-[0_4px_15px_rgba(46,144,255,0.3)] rounded-xl" 
      />
      <p>DAMBEDEV</p>
    </div>
  )
}
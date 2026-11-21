

export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div 
      className="
        bg-linear-[135deg,var(--primary-blue),var(--accent-blue)] 
        text-(--text-primary) 
        px-1 
        py-2 
        rounded-2xl 
        text-sm 
        shadow-[0_4px_10px_rgba(46,144,255,0.2)] 
        font-medium 
        transition-(--transition) 
        text-shadow-[1px_1px_2px_rgb(0,0,0)]
      "
    >
      {children}
    </div>
  )
}
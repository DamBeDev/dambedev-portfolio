interface NavItemProps {
  text: string;
  href: string;
}

export const NavItem = ({ text, href }: NavItemProps) => {
  return (
    <a href={href} 
      className="
        relative
        text-base
        no-underline
        cursor-pointer
        transition-colors
        text-(--text-secondary)
        hover:text-(--primary-blue)
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-0.5
        after:w-full
        after:scale-x-0
        after:origin-center
        after:bg-linear-[135deg,var(--primary-blue),var(--accent-blue)]
        after:transition-transform
        after:duration-300
        hover:after:scale-x-100
      "
    >
      {text}
    </a>
  )
}
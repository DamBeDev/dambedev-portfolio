export type ContactItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export const ContactItem = ({ href, label, icon }: ContactItemProps) => {
  return (
    <a
      className="
        flex flex-col 
        items-center 
        gap-2 
        text-lg 
        text-(--text-secondary) 
        no-underline 
        transition-(--transition) 
        font-medium 
        p-2 
        hover:text-(--primary-blue) 
        hover:translate-y-[-3px]
      "
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
      {label}
    </a>
  )
}

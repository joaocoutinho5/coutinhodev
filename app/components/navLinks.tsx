"use client";

type NavLinkProps = {
  id: string;
  label: string;
  active: boolean;
  icon?: React.ReactNode;
  closeMenu?: () => void;
};

export default function NavLinks({ id, label, active, icon, closeMenu }: NavLinkProps) {
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const el = document.getElementById(id);
    
    if (el) {
      if (closeMenu) closeMenu();

      setTimeout(() => {
        el.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }, 100);
    }
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className={`
        relative flex items-center transition-all duration-300 rounded-xl w-full
        gap-4 px-5 py-4 text-sm pointer-events-auto
        ${active ? "text-primary bg-primary/10" : "text-foreground/60"}
        md:flex-col md:gap-1 md:px-6 md:py-3 md:text-[15px] md:rounded-full md:w-auto
        ${active ? "md:bg-white/90 md:text-black/90" : "md:bg-transparent md:text-foreground/50 md:hover:text-white/90"}
      `}
    >
      <span className="text-xl md:hidden">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
}
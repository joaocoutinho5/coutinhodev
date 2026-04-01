"use client";

type NavLinkProps = {
  id: string;
  label: string;
  active: boolean;
  icon?: React.ReactNode;
  closeMenu?: () => void;
};

export default function NavLinks({
  id,
  label,
  active,
  icon,
  closeMenu,
}: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    closeMenu?.();
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className={`
        relative flex items-center justify-center transition-all duration-300 rounded-full
        flex-col gap-1 px-4 text-xs
        ${active ? "text-primary" : "text-foreground/50"}
        md:flex-row md:px-6 md:py-3 md:text-[15px]
        ${
          active
            ? "md:bg-white/90 md:text-black/90"
            : "md:bg-transparent md:text-foreground/50 md:hover:text-white/90"
        }
      `}
    >
      <span className="text-base md:hidden">{icon}</span>
      <span className="sm:inline">{label}</span>
    </a>
  );
}
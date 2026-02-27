type NavLinkProps = {
  href: string;
  label: string;
  active: boolean;
};

export default function NavLinks({ href, label, active }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`
        relative inline-flex items-center px-6 py-3 rounded-full
        text-[15px] transition-all duration-300
        ${
          active
            ? "bg-white/90 text-black/90"
            : "text-foreground/50 hover:text-white/90"
        }
      `}
    >

      {label}
    </a>
  );
}

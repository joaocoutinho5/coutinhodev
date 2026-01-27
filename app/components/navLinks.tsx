type NavLinkProps = {
  href: string;
  label: string;
  active: boolean;
};

export default function NavLinks({
  href,
  label,
  active,
}: NavLinkProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-1 text-[15px]"
    >
      <span
        className={`relative transition-colors
    ${active ? "text-foreground/90" : "text-foreground/50 hover:text-foreground/90"}
  `}
      >
        {label}
        <span
          className={`
            absolute left-0 -bottom-1
            h-px bg-primary
            transition-all duration-300
            ${active ? "w-full" : "w-0 group-hover:w-full"}
          `}
        />
      </span>
    </a>
  );
}

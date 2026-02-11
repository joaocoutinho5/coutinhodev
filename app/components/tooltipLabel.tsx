interface TooltipLabelProps {
  label: string;
  className?: string;
}

export function TooltipLabel({ label }: TooltipLabelProps) {
  return (
    <span
      className="
        absolute -top-10 left-1/2 -translate-x-1/2
        invisible opacity-0 scale-95
        group-hover:visible group-hover:opacity-100 group-hover:scale-100
        transition-all duration-200 ease-out
        bg-background border border-border
        text-foreground text-xs font-medium
        px-3 py-1.5 rounded-md
        shadow-md whitespace-nowrap
        pointer-events-none
      "
    >
      {label}
    </span>
  );
}

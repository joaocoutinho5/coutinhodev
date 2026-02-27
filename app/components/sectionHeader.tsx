interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  number?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  subtitle,
  title,
  number,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <header
      className={`
        flex flex-col
        ${isCenter ? "items-center text-center" : "items-start text-left"}
      `}
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm md:text-md text-primary font-mono">{subtitle}</p>

        <h1 className="relative inline-block text-3xl md:text-5xl text-foreground font-bold">
          {title}

          <span className="absolute -top-2 -right-6 text-xs md:text-sm font-mono text-primary">
            ({number})
          </span>
        </h1>

        {description && (
          <p
            className={`
              mt-2
              text-md md:text-lg font-light text-foreground/65
              leading-relaxed
              ${isCenter ? "max-w-2xl" : "max-w-180"}
            `}
          >
            {description}
          </p>
        )}
      </div>
    </header>
  );
}

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  subtitle,
  title,
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
        <p className="text-sm md:text-md text-primary font-mono">
          {"//"} {subtitle}
        </p>

        <h1 className="text-3xl md:text-5xl text-foreground/90 font-bold">
          {title}
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
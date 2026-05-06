import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
    variant === "primary"
      ? "bg-[#2563EB] text-white hover:bg-[#3B82F6]"
      : "border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/10"
  }`;

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`}>{children}</button>
  );
}
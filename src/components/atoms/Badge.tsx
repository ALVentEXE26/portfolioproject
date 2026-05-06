interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        variant === "default"
          ? "bg-[#2563EB]/20 text-[#3B82F6]"
          : "border border-[#3B82F6] text-[#3B82F6]"
      }`}
    >
      {children}
    </span>
  );
}
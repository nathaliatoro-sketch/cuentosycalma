import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
}: CTAButtonProps) {
  const base =
    "inline-block rounded-full px-8 py-3 font-poppins font-medium text-sm transition-all duration-200";
  const styles =
    variant === "primary"
      ? `${base} bg-rosa text-white hover:bg-rosa/80 shadow-sm`
      : `${base} bg-white border border-rosa text-rosa hover:bg-rosa/10`;

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}

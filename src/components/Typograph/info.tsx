export const Info = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <span className={`text-sm ${className}`}>{children}</span>;

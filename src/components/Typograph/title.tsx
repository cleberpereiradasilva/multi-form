export const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`sm:text-2xl md:text-4xl font-bold text-blue-marine  ${className}`}
  >
    {children}
  </div>
);

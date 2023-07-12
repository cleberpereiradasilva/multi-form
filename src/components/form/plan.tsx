export const Plan = ({
  children,
  name,
  plan,
  handleClick,
}: {
  children: React.ReactNode;
  name: string;
  plan?: string;
  handleClick: (name: string) => void;
}) => (
  <button
    onClick={() => handleClick(name)}
    className={`border-[1px] sm:w-full md:w-1/3 m-2 rounded-lg flex md:justify-between md:flex-col sm:flex-rowp-3 md:pt-5 sm:p-3 ${
      plan == name ? "border-blue-marine bg-blue-50" : ""
    }`}
  >
    {children}
  </button>
);

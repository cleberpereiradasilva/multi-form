export const Content = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`flex flex-col justify-center items-center sm:pb-8 md:pb-3 sm:m-6 md:m-0 lg:w-form md:w-1/1 sm:p-5 sm:pt-5 md:pt-11 lg:pl-24  lg:pr-24 text-gray-cool bg-white sm:rounded-lg md:shadow-none sm:shadow-2xl ${className} `}
  >
    <div className="sm:pr-30 md:pr-6 md:pl-6 md:w-full">{children}</div>
  </div>
);

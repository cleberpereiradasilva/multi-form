export const Content = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => (
  <div
    className={`${className} flex flex-col justify-center sm:pb-8 md:pb-3 sm:m-6 md:m-0 lg:w-form md:w-4/5 sm:p-5 md:pl-24 sm:pt-5 md:pt-11 md:pr-24 text-gray-cool bg-white sm:rounded-lg md:shadow-none sm:shadow-2xl`}
  >
    <div className="sm:pr-30">{children}</div>
  </div>
);

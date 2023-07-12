export const SideBar = ({ children }: { children: React.ReactNode }) => (
  <div className="lg:w-side p-5 md:w-side bg-no-repeat sm:h-19 md:h-full sm:bg-none md:bg-side rounded-lg sm:pt-12 md:pt-10 pl-8 flex md:flex-col sm:flex-row md:justify-start sm:justify-center">
    {children}
  </div>
);

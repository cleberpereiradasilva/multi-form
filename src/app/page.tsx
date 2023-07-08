type StepProps = {
  step: number;
  description: string;
  active?: boolean;
};

const SideStep = ({ step, description, active }: StepProps) => (
  <div className="flex items-center mb-5">
    <div>
      <div
        className={`md:h-8 md:w-8 sm:w-8 sm:h-8 font-bold text-sm ${
          active
            ? "bg-blue-light"
            : " text-gray-light border-2 border-gray-cool"
        } rounded-full flex items-center justify-center mr-3`}
      >
        {step}
      </div>
    </div>
    <div className="sm:hidden md:block">
      <div className="text-gray-cool text-sm">STEP {step}</div>
      <div className="font-bold text-gray-light -tracking-tighter text-sm">
        {description}
      </div>
    </div>
  </div>
);

type InputProps = {
  label?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  value?: string;
  validator?: void;
  message?: string;
};

const Input = ({
  label,
  placeholder,
  name,
  id,
  value,
  validator,
  message,
}: InputProps) => (
  <div className="flex flex-col mt-7">
    <div className="flex flex-row justify-between">
      <label className="text-blue-marine font-bold pb-1">{label}</label>
      <label className="font-bold text-sm text-red-strawberry pr-1">
        {message && message}
      </label>
    </div>
    <input
      className="border-2 rounded-lg p-2"
      type="text"
      placeholder={placeholder}
      name={name}
      id={id || name}
      value={value || ""}
    />
  </div>
);

export default function Home() {
  return (
    <main className="flex bg-blue-light font-ubuntu text-base min-h-screen sm:flex-row md:flex-col md:items-center sm:items-stretch  justify-center md:p-5 sm:p-0">
      <div className="sm:bg-sm-side items-stretch sm:bg-blue-light md:bg-none  bg-no-repeat bg-top lg:w-930 sm:w-full  md:w-full md:h-184 sm:min-h-full md:bg-white sm:p-0 md:p-2 rounded-lg flex sm:flex-col md:flex-row lg:flex-row">
        <div className="lg:w-side p-5 md:w-side bg-no-repeat sm:h-19 md:h-full sm:bg-none md:bg-side rounded-lg sm:pt-12 md:pt-10 pl-8 flex md:flex-col sm:flex-row md:justify-start sm:justify-center">
          <SideStep step={1} description={"YOUR INFO"} active />
          <SideStep step={2} description={"SELECT PLAN"} />
          <SideStep step={3} description={"ADD ONS"} />
          <SideStep step={4} description={"SUMARY"} />
        </div>
        <div className="h-full w-full flex sm:justify-between md:justify-normal flex-col">
          <div className="flex flex-col justify-center sm:pb-8 md:pb-3 sm:m-6 md:m-0 lg:w-form md:w-4/5 sm:p-5 md:pl-24 sm:pt-5 md:pt-11 md:pr-24 text-gray-cool bg-white sm:rounded-lg sm:shadow-2xl">
            <div className="sm:pr-30">
              <div className="sm:text-2xl md:text-4xl font-bold text-blue-marine">
                Personal info
              </div>
              <span className="text-sm">
                Pelase provider your name, email address, and phone number.
              </span>
              <Input
                label="Name"
                name="name"
                placeholder="e.g. Stephen King"
                message="Erro on validate"
              />
              <Input
                label="Email"
                name="name"
                placeholder="e.g.stephenking@lorem.com"
              />
              <Input
                label="Phone Number"
                name="phonenumber"
                placeholder="e.g. +1 23 456 7890"
              />
            </div>
          </div>
          <div className="flex flex-row justify-end justify-items-center md:h-full  md:pb-2 lg:w-form md:w-4/5   sm:p-3 sm:pr-6 md:pt-19 md:pr-24 text-gray-cool bg-white">
            <button className="p-2 sm:w-28 md:w-36 h-12 text-gray-light bg-blue-marine sm:rounded-md md:rounded-xl">
              Next Step
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

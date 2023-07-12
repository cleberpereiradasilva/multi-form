export const Input = ({
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
      onChange={() => console.log("enter")}
    />
  </div>
);

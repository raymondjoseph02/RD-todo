import { FC } from "react";
interface InputProps {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
}
const Input: FC<InputProps> = ({
  handleOnChange,
  handleOnKeyDown,
  value,
  type,
}) => {
  return (
    <input
      value={value}
      autoFocus={true}
      type={type}
      onKeyDown={handleOnKeyDown}
      onChange={(e) => handleOnChange(e)}
      placeholder="Add a new task"
      className="border-[1px] border-[#3e1671]/20 outline-none rounded-[8px] p-2 text-[#000000]  bg-transparent hover:bg-transparent/5 focus:bg-transparent/5"
    />
  );
};

export default Input;

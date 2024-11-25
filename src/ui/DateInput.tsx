import { FC, SetStateAction } from "react";

interface DateInputProps {
  dateValue: string;
  setDateValue: React.Dispatch<SetStateAction<string>>;
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const DateInput: FC<DateInputProps> = ({
  dateValue,
  setDateValue,
  handleOnKeyDown,
}) => {
  return (
    <input
      type="date"
      value={dateValue}
      onKeyDown={handleOnKeyDown}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setDateValue(e.target.value);
      }}
      className="p-2"
    />
  );
};

export default DateInput;

import { FC, SetStateAction } from "react";
interface TimeInputProps {
  time: string;
  setTIme: React.Dispatch<SetStateAction<string>>;
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const TimeInput: FC<TimeInputProps> = ({ time, setTIme, handleOnKeyDown }) => {
  return (
    <input
      type="time"
      value={time}
      onKeyDown={handleOnKeyDown}
      onChange={(e) => {
        setTIme(e.target.value);
      }}
      className="p-2"
    />
  );
};

export default TimeInput;

import React, { SetStateAction, useEffect, useState } from "react";
import Input from "./Input";
import { X } from "lucide-react";
import OutlinBtn from "./OutlineBtn";
import { FC } from "react";
import { Dialog, DialogPanel, Button } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";
import TimeInput from "./TimeInput";
import DateInput from "./DateInput";
import { Bounce, toast } from "react-toastify";
interface ModalProps {
  setIsModalVisible: React.Dispatch<SetStateAction<boolean>>;
  isModalVisible: boolean;
  setTodoArr: React.Dispatch<
    SetStateAction<{ title: string; date: string; time: string; id: string }[]>
  >;
  todoArr: { title: string; date: string; time: string; id: string }[];
}

const Modal: FC<ModalProps> = ({
  setIsModalVisible,
  isModalVisible,
  setTodoArr,
  todoArr,
}) => {
  const [value, setValue] = useState("");
  const [dateValue, setDateValue] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [idle, setIdle] = useState(false);

  const handleOutlineIdleState = () => {
    if (value.length > 2 && dateValue !== "") {
      setIdle(true);
    } else {
      setIdle(false);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleAddTodo = () => {
    if (value.length > 2) {
      setTodoArr([
        ...todoArr,
        { title: value, date: dateValue, time, id: uuidv4() },
      ]);
      toast.success("task added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setValue("");
      setDateValue("");
      setIsModalVisible(false);
      //   closeModal();
    } else {
      // handleErrorState();
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleAddTodo();
    }
  };
  const showModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    handleOutlineIdleState();
  }, [value, dateValue, time]);
  return (
    <Dialog
      onClose={() => {
        ("");
      }}
      open={isModalVisible}
      as="div"
      className="relative z-10 focus:outline-none"
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4 bg-red-100">
          <DialogPanel
            transition={true}
            className="w-full max-w-md rounded-xl bg-white/30 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex flex-col gap-3"
          >
            <div className="flex justify-end ">
              <Button
                onClick={showModal}
                className="bg-[#ffffff]/20 p-2 hover:bg-[#0000]/5 group"
              >
                <X className="text-[red] transition-all ease-in-out  text-[#FFFF]" />
              </Button>
            </div>
            <Input
              handleOnChange={handleOnChange}
              value={value}
              handleOnKeyDown={handleKeyDown}
              type="text"
            />
            <div className="flex justify-between">
              <DateInput
                dateValue={dateValue}
                setDateValue={setDateValue}
                handleOnKeyDown={handleKeyDown}
              />
              <TimeInput
                time={time}
                setTIme={setTime}
                handleOnKeyDown={handleKeyDown}
              />
            </div>
            <OutlinBtn
              handleOnClick={handleAddTodo}
              idle={idle}
              text="add task"
            />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;

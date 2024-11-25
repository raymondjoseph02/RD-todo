import { Button, Dialog, DialogPanel } from "@headlessui/react";
import Input from "./Input";
import DateInput from "./DateInput";
import React, { SetStateAction, useEffect, useState } from "react";
import { FC } from "react";
import { X } from "lucide-react";
import TimeInput from "./TimeInput";
import OutlinBtn from "./OutlineBtn";
import { toast } from "react-toastify";

interface editModalProps {
  isEditModalOpen: boolean;
  setIsEditModalOpen: React.Dispatch<SetStateAction<boolean>>;
  todoIdToEdit: string;
  todoArr: { title: string; date: string; time: string; id: string }[];
  setTodoArr: React.Dispatch<
    SetStateAction<{ title: string; date: string; time: string; id: string }[]>
  >;
  setReload: React.Dispatch<SetStateAction<boolean>>;
}

const EditModal: FC<editModalProps> = ({
  isEditModalOpen,
  setIsEditModalOpen,
  todoIdToEdit,
  todoArr,
  setTodoArr,
  setReload,
}) => {
  const [editTitle, setEditTitle] = useState("");
  const [time, setTime] = useState<string>("");
  const [dateValue, setDateValue] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };
  const getTodoToEdit = () => {
    const editTodo = todoArr.filter((todo) => todo.id === todoIdToEdit);
    if (editTitle.length > 0) {
      setEditTitle(editTodo[0].title);
      setDateValue(editTodo[0].date);
      setTime(editTodo[0].time);
    }
  };
  const saveEditedTodo = () => {
    setTodoArr((prev) =>
      prev.map((todo) =>
        todo.id === todoIdToEdit
          ? { ...todo, title: editTitle, date: dateValue, time }
          : todo
      )
    );
    toast.success("update successfully", {
      hideProgressBar: true,
      delay: 20,
      autoClose: 450,
    });
    cancleEdit();
    setReload(true);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      saveEditedTodo();
    }
  };
  const cancleEdit = () => {
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    getTodoToEdit();
  }, [isEditModalOpen]);

  return (
    <Dialog
      onClose={() => {
        ("");
      }}
      open={isEditModalOpen}
      as="div"
      className="relative z-10 focus:outline-none"
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4 bg-red-100">
          <DialogPanel
            transition={true}
            className="w-full max-w-md rounded-xl bg-[#000000]/10 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex flex-col gap-3"
          >
            <div className="flex justify-end w-full ">
              {" "}
              <Button
                onClick={cancleEdit}
                className="hover:bg-[#000000]/10 p-2 rounded-sm backdrop-blue-2xl duration-200 ease-out "
              >
                <X className="text-red-500" />
              </Button>
            </div>
            <Input
              handleOnChange={(e) => {
                handleOnChange(e);
              }}
              type="text"
              value={editTitle}
              handleOnKeyDown={handleOnKeyDown}
            />
            <div className="flex justify-between">
              <DateInput
                dateValue={dateValue}
                handleOnKeyDown={handleOnKeyDown}
                setDateValue={setDateValue}
              />
              <TimeInput
                handleOnKeyDown={handleOnKeyDown}
                setTIme={setTime}
                time={time}
              />
            </div>
            <OutlinBtn
              text="save "
              handleOnClick={saveEditedTodo}
              idle={true}
            />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default EditModal;

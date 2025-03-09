import { PlusSquare } from "lucide-react";
import React, { useState } from "react";
import DialogBox from "./DialogBox";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <div
        className="flex justify-center items-center p-14 py-24 border border-dashed border-black rounded-lg bg-secondary h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer"
        onClick={() => setOpenDialog(!openDialog)}
      >
        <PlusSquare />
      </div>
      {openDialog && (
        <DialogBox open={openDialog} setOpenDialog={setOpenDialog} />
      )}
    </div>
  );
};

export default AddResume;

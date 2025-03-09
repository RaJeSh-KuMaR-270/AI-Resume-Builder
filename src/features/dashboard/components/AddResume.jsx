import { PlusSquare } from "lucide-react";
import React, { useEffect, useState } from "react";
import DialogBox from "./DialogBox";
import { ResumeInfoContext } from "@/context";
import resumeData from "../../../constants/constant";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    setResumeInfo(resumeData);
  }, []);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
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
    </ResumeInfoContext.Provider>
  );
};

export default AddResume;

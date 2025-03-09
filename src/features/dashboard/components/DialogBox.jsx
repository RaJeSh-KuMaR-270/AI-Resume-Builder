import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {v4 as uuidv4} from "uuid"

const DialogBox = ({ open, setOpenDialog }) => {
  const [title, setTitle] = useState("");

  const handleCreateResume = () => {
    const resumeId = uuidv4();
  }

  return (
    <>
      <Dialog open={open}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <label>Add a title for your resume</label>
              <Input
                className="py-2"
                placeholder="Ex.Frontend Developer Resume"
                // value={title}
                onChange={(e) => setTitle(e.target.title)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button
                variant="ghost"
                className="cursor-pointer"
                onClick={() => setOpenDialog(false)}
              >
                Cancel
              </Button>
              <Button disabled={!title} onClick={()=> handleCreateResume()}>Create</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogBox;

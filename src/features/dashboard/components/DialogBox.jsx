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
import { v4 as uuidv4 } from "uuid";
import globalApi from "../../../../services/api/globalApi";
import { useUser } from "@clerk/clerk-react";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DialogBox = ({ open, setOpenDialog }) => {
  const [resumeTitle, setResumeTitle] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const naviagte = useNavigate();
  const { user } = useUser();

  // creating a resume on click create btn for new resume
  const handleCreateResume = async () => {
    setIsLoading(true);
    try {
      //preparing a data 
      const data = {
        data: {
          title: resumeTitle,
          resumeId: uuidv4(),
          userEmail: user?.primaryEmailAddress?.emailAddress,
          userName: user?.fullName,
        },
      };

      // making a post call to generate a data in the backend
      const response = await globalApi?.createResumeApi(data);
      if (response) {
        setIsLoading(false);
        // using doc id because strapi has doc id for each record
        naviagte(`/dashboard/resume/${response?.data?.data?.documentId}/edit`);
      }
      console.log(response);
    } catch (err) {
      setIsLoading(false);
      return new Error(err.message);
    }
  };

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
                onChange={(e) => setResumeTitle(e.target.value)}
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
              <Button
                disabled={!resumeTitle || isLoading}
                onClick={() => handleCreateResume()}
              >
                {isLoading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogBox;

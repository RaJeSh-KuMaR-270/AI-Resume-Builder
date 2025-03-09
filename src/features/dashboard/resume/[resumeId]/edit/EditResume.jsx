import React, { use, useContext } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../../components/FormSection";
import ResumePreviewSection from "../../components/ResumePreviewSection";
import { ResumeInfoContext } from "@/context";

const EditResume = () => {
  const params = useParams();
  const { resumeInfo } = useContext(ResumeInfoContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      {/* Form Section */}
      <FormSection />

      {/* Review Section */}
      <ResumePreviewSection />
    </div>
  );
};

export default EditResume;

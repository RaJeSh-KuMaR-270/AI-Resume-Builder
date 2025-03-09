import { Notebook } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ResumeListItem = ({ resumeList }) => {
  return (
    <Link to={`/dashboard/resume/${resumeList?.resumeId}/edit`}>
      <div className="flex justify-center items-center bg-secondary border border-blue-300 border-dashed h-[280px] rounded-lg hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <Notebook />
      </div>
      <h2 className="my-1 text-center">{resumeList?.title}</h2>
    </Link>
  );
};

export default ResumeListItem;

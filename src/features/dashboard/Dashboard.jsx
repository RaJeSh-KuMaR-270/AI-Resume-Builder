import React, { useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import globalApi from "../../../services/api/globalApi";
import { useUser } from "@clerk/clerk-react";
import ResumeListItem from "./components/ResumeListItem";

const Dashboard = () => {
  const { user } = useUser();
  const [resumeListItems, setResumeListItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetchUserResumeInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchUserResumeInfo = async () => {
    setIsLoading(true);
    try {
      const response = await globalApi.getUserResumeApi(
        user?.primaryEmailAddress?.emailAddress
      );
      if (response) {
        setIsLoading(false);
        setResumeListItems(response?.data?.data);
        console.log(response);
      }
    } catch (err) {
      setIsLoading(false);
      new Error(err.message);
    }
  };
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h1 className="font-bold text-3xl">My Resume</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
        <AddResume />
        {resumeListItems?.length === 0 && isLoading ? (
          <h1 className="">
            Loading Resume Please hold on...
          </h1>
        ) : (
          resumeListItems?.length > 0 &&
          resumeListItems?.map((resumeInfo, i) => (
            <ResumeListItem key={i} resumeList={resumeInfo} />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;

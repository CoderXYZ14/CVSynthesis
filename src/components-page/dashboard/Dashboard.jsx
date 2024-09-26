import { useUser } from "@clerk/clerk-react";
import AddResume from "./AddResume";
import { GetUserResumes } from "../../../service/GlobalApi.js";
import { useEffect, useState } from "react";
import ResumeCardItem from "./ResumeCardItem";

const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);
  useEffect(() => {
    user && GetResumesList();
  }, [user]);

  const GetResumesList = () => {
    GetUserResumes(user?.primaryEmailAddress?.emailAddress).then((resp) => {
      console.log(resp.data);
      setResumeList(resp.data.data);
    });
  };
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <AddResume />
        {resumeList.map((resume, index) => (
          <ResumeCardItem resume={resume} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

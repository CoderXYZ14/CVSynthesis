import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormSection, ResumePreview } from "../../../resumeComponents";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import dummy from "@/data/dummy";

const EditResume = () => {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState({});
  useEffect(() => {
    //console.log(dummy);
    setResumeInfo(dummy);
    //console.log(resumeInfo);
  }, []);
  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        <FormSection />
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default EditResume;

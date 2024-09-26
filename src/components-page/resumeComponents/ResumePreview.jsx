import React, { useContext } from "react";
import { PersonalDetailPreview } from "../preview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <PersonalDetailPreview resumeInfo={resumeInfo} />{" "}
      {/* {console.log("2" + resumeInfo)} */}
      {/* Summary */}
      {/* Profession Experience */}
      {/* Educational */}
      {/* Skills */}
    </div>
  );
};

export default ResumePreview;

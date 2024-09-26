import React, { useContext } from "react";
import { PersonalDetailPreview, SummaryPreview } from "../preview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      {/* Personal Details */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      {/* Summary */}
      <SummaryPreview resumeInfo={resumeInfo} />
      {/* Profession Experience */}
      {/* Educational */}
      {/* Skills */}
    </div>
  );
};

export default ResumePreview;

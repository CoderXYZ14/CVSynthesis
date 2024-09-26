import React, { useContext } from "react";
import {
  EducationalPreview,
  PersonalDetailPreview,
  ProfessionalExperiencePreview,
  SummaryPreview,
} from "../preview";
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
      <ProfessionalExperiencePreview resumeInfo={resumeInfo} />
      {/* Educational */}
      <EducationalPreview resumeInfo={resumeInfo} />
      {/* Skills */}
    </div>
  );
};

export default ResumePreview;

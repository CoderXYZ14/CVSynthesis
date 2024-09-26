import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormSection, ResumePreview } from "../../../resumeComponents";

const EditResume = () => {
  const { resumeId } = useParams();
  useEffect(() => {
    console.log(resumeId);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      <FormSection />
      <ResumePreview />
    </div>
  );
};

export default EditResume;

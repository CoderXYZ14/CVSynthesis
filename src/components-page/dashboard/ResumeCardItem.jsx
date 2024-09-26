import { Notebook } from "lucide-react";
import { Link } from "react-router-dom";

const ResumeCardItem = ({ resume }) => {
  return (
    <Link to={`/dashboard/resume/${resume.resumeId}/edit`}>
      <div className="p-14 py-24 bg-secondary flex items-center justify-center h-72 border mt-10 border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md shadow-primary">
        <Notebook />
      </div>
      <h2 className="text-center my-1 ">{resume.title}</h2>
    </Link>
  );
};

export default ResumeCardItem;

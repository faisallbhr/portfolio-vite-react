const PointDescription = ({ index, job }: { index: number; job: string }) => {
  return (
    <li key={index} className="flex items-start">
      <span className="h-1.5 max-w-1.5 w-full bg-white rounded-full mr-2 mt-2.5"></span>
      <p className="text-gray-400">{job}</p>
    </li>
  );
};

export default PointDescription;

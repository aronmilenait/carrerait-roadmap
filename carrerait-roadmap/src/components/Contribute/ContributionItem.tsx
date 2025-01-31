export const ContributionItem = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string | React.ReactNode;
  icon: React.ReactNode;
}) => (
  <li className="flex flex-col gap-4 p-6 rounded-lg bg-gray-800 shadow-md">
    <div className="flex items-center gap-3">
      <div className="text-teal-400">{icon}</div>
      <strong className="text-teal-300 text-lg">{title}</strong>
    </div>
    <p className="text-gray-300 text-base">{description}</p>
  </li>
);

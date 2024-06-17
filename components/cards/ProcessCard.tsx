type ProcessCardProps = {
  title: string;
  description: string;
};

export default function ProcessCard({ title, description }: ProcessCardProps) {
  return (
    <div className="group bg-[#f6f6f6] shadow-lg rounded-lg p-5 space-y-5 hover:bg-[#14279b] translate-all duration-300">
      <h1 className="text-center font-semibold text-lg group-hover:text-white">
        {title}
      </h1>
      <p className="text-gray-700 group-hover:text-white">{description}</p>
    </div>
  );
}

// import { ElementType } from "react";

// type ServiceCardProps = {
//   icon: ElementType;
//   title: string;
//   description: string;
// };

// export default function ServiceCard({
//   icon: Icon,
//   title,
//   description,
// }: ServiceCardProps) {
//   return (
//     <div className="group service-card bg-white rounded-xl shadow-lg border border-gray-200 px-5 py-10 lg:max-w-[350px] space-y-5 h-[400px] lg:h-[392px] transition-transform duration-300 transform">
//       <div className="cross bg-blue-100"></div>
//       <div className="bg-blue-900 rounded-full p-3 w-14 group-hover:bg-white">
//         <Icon />
//       </div>
//       <h1 className="text-lg font-semibold group-hover:text-white">{title}</h1>
//       <p className="text-gray-700 group-hover:text-white">{description}</p>
//     </div>
//   );
// }

import { ElementType } from "react";

type ServiceCardProps = {
  icon: ElementType;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group service-card bg-white rounded-xl shadow-lg border border-gray-200 px-5 py-10 lg:max-w-[350px] space-y-5 h-[400px] lg:h-[400px] transition-transform duration-300 transform">
      <div className="cross bg-blue-100"></div>
      <div className="icon-container bg-blue-900 rounded-full p-3 w-14 group-hover:bg-white">
        <Icon />
      </div>
      <h1 className="text-lg font-semibold group-hover:text-white">{title}</h1>
      <p className="text-gray-700 group-hover:text-white">{description}</p>
    </div>
  );
}

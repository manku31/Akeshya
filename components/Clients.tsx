import Image from "next/image";

import Client1 from "../public/images/client-1.png";
import Client2 from "../public/images/client-2.png";
import Client3 from "../public/images/client-3.png";
import Client4 from "../public/images/client-4.png";
import Client5 from "../public/images/client-5.png";
import Client6 from "../public/images/client-6.png";

export default function Clients() {
  const clients = [
    { src: Client1, alt: "Client 1 logo" },
    { src: Client2, alt: "Client 2 logo" },
    { src: Client3, alt: "Client 3 logo" },
    { src: Client4, alt: "Client 4 logo" },
    { src: Client5, alt: "Client 5 logo" },
    { src: Client6, alt: "Client 6 logo" },
  ];

  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6 px-4 justify-items-center my-10 bg-sky-50 py-4 mt-52 lg:mt-0 lg:px-56">
      {clients.map((client, index) => (
        <Image
          key={index}
          src={client.src}
          alt={client.alt}
          className="client-logo w-28 h-20 m-4"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
      ))}
    </div>
  );
}

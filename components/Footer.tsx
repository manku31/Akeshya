export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100 flex flex-col md:flex-row justify-center gap-4 items-center md:justify-between md:px-4 lg:px-24">
      <p className="flex items-center">
        © Copyright&nbsp;<span className="font-semibold">Akeshya.</span>
        &nbsp;All rights reserved
      </p>
      <ul className="flex flex-col md:flex-row justify-center items-center md:gap-8">
        <li className="text-blue-900 hover:text-sky-600 translate-all duration-300 cursor-pointer">
          Terms and conditions
        </li>
        <li className="text-blue-900 hover:text-sky-600 translate-all duration-300 cursor-pointer">
          Refund policy
        </li>
        <li className="text-blue-900 hover:text-sky-600 translate-all duration-300 cursor-pointer">
          Privacy policy
        </li>
      </ul>
    </footer>
  );
}

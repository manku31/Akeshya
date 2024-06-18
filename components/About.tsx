import Button from "./features/Button";

export default function About() {
  return (
    <div className="mx-4 md:mx-10 lg:mx-24">
      <div
        className="flex justify-center items-center gap-4"
        data-aos="fade-up"
      >
        <div className="border border-blue-900 w-14" />
        <h1 className="font-bold text-center text-2xl">ABOUTS US</h1>
        <div className="border border-blue-900 w-14" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:my-10 my-5 lg:gap-20">
        <div
          className="lg:w-1/2 space-y-3"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <p>
            We are Akeshya, a firm that specializes in web design and marketing.
            We help transform ideas into reality with a team of passionate
            graphic designers, web developers, and seasoned marketing advisors.
          </p>

          <ul className="space-y-3">
            <li>
              ✔️ We started with a simple idea: do what is best for the client.
            </li>
            <li>
              ✔️Our methodical and individual approach to each project delivers
              the finest possible results for your media.
            </li>
            <li>
              ✔️Our day-to-day work is to solve your problems utilising the most
              up-to-date, practical adaptive technology, and we have a lot of
              fun doing it.
            </li>
          </ul>
        </div>

        <div
          className="lg:w-1/2 space-y-5"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="2000"
        >
          <p>
            We're professional, but we're also friendly, and we'll always pay
            attention to your concerns. We expect to work with innovative people
            that have an open mind and are dedicated to making every idea a
            reality. We want to hear from you if you're interested in SEO, have
            Web Development ideas, or require a graphic designer who can match
            your goals.
          </p>

          <Button title="Learn More" path="/services" />
        </div>
      </div>
    </div>
  );
}

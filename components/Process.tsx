import ProcessCard from "./card/ProcessCard";

export default function Process() {
  return (
    <>
      <div className="space-y-4 my-10">
        <div className="flex items-center gap-4 justify-center">
          <div className="border border-blue-900 w-14" />
          <h1 className="text-2xl text-center font-bold">OUR PROCESS</h1>
          <div className="border border-blue-900 w-14" />
        </div>
        <p className="text-center">
          Over the years we’ve evolved a tested method for attaining achievement
          for each one of our clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 mx-6 md:mx-10 lg:mx-16 py-10">
          <ProcessCard
            title="1. Planning"
            description="We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page."
          />
          <ProcessCard
            title="2. Design"
            description="We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation."
          />
          <ProcessCard
            title="3. Development"
            description="We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics."
          />
          <ProcessCard
            title="4. Marketing"
            description="We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert."
          />
        </div>
      </div>
    </>
  );
}

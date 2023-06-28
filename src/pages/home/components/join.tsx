import { TfiStatsUp } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";

const Join = () => {
  return (
    <>
      <section id="about" className="px-6 py-16 md:max-w-[72rem] md:px-12 mx-auto md:py-24">
        <header className="">
          <h2 className="text-3xl md:text-5xl font-bold sm:text-left md:text-center">
            Why you should join chatter
          </h2>
          <p className="text-base mt-8 md:text-lg">
            Our goal is to make writers and readers see our platform as their
            next heaven for blogging, ensuring ease in interactions, connecting
            with like-minded peers, have access to favorite content based on
            interests and able to communicate your great ideas with people
          </p>
        </header>
        <article className="mt-16 md:mt-20 flex sm:flex-col md:flex-row gap-6">
          <div className="md:w-80 border rounded-md p-7">
            <div className="w-[5.75rem] h-[5.5rem] rounded-full bg-[#D6D1F833] flex justify-center items-center">
              <TfiStatsUp size={24} />
            </div>
            <h3 className="text-xl font-medium my-3">Analytics</h3>
            <p className="text-base md:text-lg text-gray-500">
              Analytics to track the number of views, likes and comment and also
              analyze the performance of your articles over a period of time
            </p>
          </div>
          <div className="md:w-80 border rounded-md p-7">
            <div className="w-[5.75rem] h-[5.5rem] rounded-full bg-[#D6D1F833] flex justify-center items-center">
              <FaUsers size={24} />
            </div>
            <h3 className="text-xl font-medium my-3">Social interactions</h3>
            <p className="text-base md:text-lg text-gray-500">
              Users on the platform can interact with posts they like, comment
              and engage in discussions
            </p>
          </div>
          <div className="md:w-80 border rounded-md p-7">
            <div className="w-[5.75rem] h-[5.5rem] rounded-full bg-[#D6D1F833] flex justify-center items-center">
              <RiPagesLine size={24} />
            </div>
            <h3 className="text-xl font-medium my-3">Content creation</h3>
            <p className="text-base md:text-lg text-gray-500">
              Write nice and appealing with our in-built markdown, a rich text
              editor
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Join;

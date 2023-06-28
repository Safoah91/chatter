import Button from "components/button";

const GetStartedCta = () => {
  return (
    <>
      <section id="about" className="py-16 px-6 md:px-0 md:py-24">
        <div className="md:max-w-6xl mx-auto md:flex md:gap-20">
          <article className="md:w-[30%] rounded-full relative">
            <div className="-mb-10 md:-mb-8">
              <img
                src="/assets/images/img1.png"
                className="rounded-full"
                alt="students studying"
              />
            </div>
            <div className="ml-36 -mb-12 md:ml-44 md:-mb-24">
              <img
                src="/assets/images/img2.png"
                className="rounded-full"
                alt="students studying"
              />
            </div>
            <div className="">
              <img
                src="/assets/images/img.png"
                className="rounded-full"
                alt="students studying"
              />
            </div>
          </article>
          <article className="md:w-[70%]">
            <h2 className="text-2xl mt-4 md:mt-0 md:text-5xl font-bold md:max-w-2xl leading-tight">
              Write, read and connect with great minds on chatter
            </h2>
            <p className="mt-6 mb-8 text-md md:text-lg max-w-xl">
              Share people your great ideas, and also read write-ups based on
              your interests. connect with people of same interests and goals
            </p>
            <Button text="Get start" type="primary-link" />
          </article>
        </div>
      </section>
    </>
  );
};

export default GetStartedCta;

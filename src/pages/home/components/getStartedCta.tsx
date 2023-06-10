import Button from "components/button";

const GetStartedCta = () => {
  return (
    <>
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto md:flex md:gap-20">
          <article className="w-[30%] rounded-full relative">
            <div className="-mb-8">
              <img
                src="/assets/images/img1.png"
                className="rounded-full"
                alt="students studying"
              />
            </div>
            <div className="ml-44 -mb-8">
              <img
                src="/assets/images/img2.png"
                className="rounded-full"
                alt="students studying"
              />
            </div>
            <div>
              <img
                src="/assets/images/img.png"
                className="rounded-full"
                alt="students studying"
              />
            </div>
          </article>
          <article className="w-[70%]">
            <h2 className="text-5xl font-bold max-w-2xl leading-tight">
              Write, read and connect with great minds on chatter
            </h2>
            <p className="mt-6 mb-8 text-lg max-w-xl">
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

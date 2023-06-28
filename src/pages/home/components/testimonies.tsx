import Button from "components/button";

const Testimonies = () => {
  return (
    <>
      <section id="about" className="bg-lightYellow py-16 md:py-24 sm:px-6 md:px-0">
        <div className="md:max-w-[82rem] mx-auto md:flex md:gap-20">
          <article className="md:w-[25%] rounded-full">
            <img

              src="/assets/images/testimony.png"
              className="rounded-full w-24 h-24 md:w-full md:h-full"
              alt="students studying"
            />
          </article>
          <article className="md:w-[75%]">
            <p className="text-base mt-8 md:text-lg">
              "Chatter has become an integral part of my online experience. As a
              user of this incredible blogging platform, I have discovered a
              vibrant community of individuals who are passionate about sharing
              their ideas and engaging in thoughtful discussions.”
            </p>
            <h2 className="text-xl md:text-3xl md:font-medium mt-6 md:mt-12 mb-10">
              Adebobola Muhydeen,{" "}
              <span className="text-base md:text-lg text-gray-500 font-normal">
                Software developer at Apple
              </span>
            </h2>
            <Button text="Join chatter" type="primary-link" />
          </article>
        </div>
      </section>
    </>
  );
};

export default Testimonies;

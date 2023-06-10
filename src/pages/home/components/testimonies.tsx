import Button from "components/button";

const Testimonies = () => {
  return (
    <>
      <section id="about" className="bg-lightYellow py-24">
        <div className="max-w-[90rem] mx-auto md:flex md:gap-20">
          <article className="w-[25%] rounded-full">
            <img
              src="/assets/images/testimony.png"
              className="rounded-full"
              alt="students studying"
            />
          </article>
          <article className="w-[75%]">
            <p className=" mt-8 text-lg">
              "Chatter has become an integral part of my online experience. As a
              user of this incredible blogging platform, I have discovered a
              vibrant community of individuals who are passionate about sharing
              their ideas and engaging in thoughtful discussions.”
            </p>
            <h2 className="text-3xl font-medium mt-12 mb-10">
              Adebobola Muhydeen,{" "}
              <span className="text-lg text-gray-500 font-normal">
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

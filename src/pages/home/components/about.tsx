const About = () => {
  return (
    <>
      <section
        id="about"
        className="md:max-w-[82rem] mx-auto md:flex md:gap-20 px-6 md:px-0 pt-16 md:py-24"
      >
        <article className="md:w-[60%]">
          <h2 className="text-3xl md:text-5xl font-medium md:font-bold">About Chatter</h2>
          <article className="md:hidden py-3">
          <img src="/assets/images/about.png" alt="students studying" />
        </article>

          <p className="md:max-w-[43rem] mt-3 md:mt-8 text-md md:text-lg">
            Chatter is a multi-functional platform where authors and readers can
            have access to their own content. It aims to be a traditional
            bookworm’s heaven and a blog to get access to more text based
            content. Our vision is to foster an inclusive and vibrant community
            where diversity is celebrated. We encourage open-mindedness and
            respect for all individuals, regardless of their backgrounds or
            beliefs. By promoting dialogue and understanding, we strive{" "}
          </p>
        </article>
        <article className="sm:hidden md:block md:w-[40%]">
          <img src="/assets/images/about.png" alt="students studying" />
        </article>
      </section>
    </>
  );
};

export default About;

const About = () => {
  return (
    <>
      <section
        id="about"
        className="max-w-[82rem] mx-auto md:flex md:gap-20 py-24"
      >
        <article className="w-[60%]">
          <h2 className="text-5xl font-bold">About Chatter</h2>
          <p className="max-w-[43rem] mt-8 text-lg">
            Chatter is a multi-functional platform where authors and readers can
            have access to their own content. It aims to be a traditional
            bookworm’s heaven and a blog to get access to more text based
            content. Our vision is to foster an inclusive and vibrant community
            where diversity is celebrated. We encourage open-mindedness and
            respect for all individuals, regardless of their backgrounds or
            beliefs. By promoting dialogue and understanding, we strive{" "}
          </p>
        </article>
        <article className="w-[40%]">
          <img src="/assets/images/about.png" alt="students studying" />
        </article>
      </section>
    </>
  );
};

export default About;

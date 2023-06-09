import Button from "components/button";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div id="overlay" className="py-52">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl text-white leading-normal font-bold pb-5">
              Welcome to Chatter: A Haven for Text-Based Content
            </h1>
            <p className="text-white text-lg md:max-w-lg mb-9">
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>
            <Button type="primary-link" text="Get start" link="/" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

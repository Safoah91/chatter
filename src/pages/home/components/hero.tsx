import Button from "components/button";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div id="overlay" className="py-16 md:py-52">
          <div className="max-w-sm md:max-w-4xl sm:px-4 md:px-0 sm:py-16 md:py-0 mx-auto">
            <h1 className="text-3xl pr-8 md:pr-0 md:text-5xl text-white leading-tight font-bold pb-5">
              Welcome to Chatter: A Haven for Text-Based Content
            </h1>
            <p className="text-white text-base md:text-lg md:max-w-lg mb-12">
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

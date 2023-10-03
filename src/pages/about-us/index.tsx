import React from "react";

const AboutUs = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-start bg-gradient-to-b from-black to-transparent">
      <div className="px-6 w-full max-w-[900px]">
        <article className="flex flex-col gap-3">
          <p className="text-white text-xl font-bold w-full text-left mt-6">
            About Us
          </p>
          <p className="text-base text-gray-300 text-left">
            <span className="font-bold text-md text-white">Introduction:</span>{" "}
            Welcome to Streamvailable, your go-to destination for finding movies
            and series available in your country. Our mission is to simplify
            your entertainment choices by providing a convenient way to discover
            content across various streaming platforms.
          </p>
          <p className="text-base text-gray-300 text-left">
            <span className="font-bold text-md text-white">Our Mission:</span>{" "}
            Our mission is to make it easier for you to find the movies and
            series you love. We understand that with the proliferation of
            streaming services, finding what to watch can be overwhelming. That
            {`'`}s why we created Streamvailable to streamline your search and
            save you time.
          </p>
        </article>
        <article className="flex flex-col gap-3 mt-6">
          <p className="text-white text-xl font-bold w-full text-left">
            How it Works
          </p>
          <p className="text-base text-gray-300 text-left">
            <span className="font-bold text-md text-white">Step 1:</span> Select
            Your Country: Begin by selecting your country from the dropdown menu
            on our homepage.
          </p>
          <p className="text-base text-gray-300 text-left">
            <span className="font-bold text-md text-white">Step 2:</span> Search
            for Movies or Series: Once you{`'`}ve chosen your country, use our
            powerful search feature to find movies or series that are available
            to stream.
          </p>
          <p className="text-base text-gray-300 text-left">
            <span className="font-bold text-md text-white">Step 3:</span>{" "}
            Discover Streaming Platforms: Our platform will provide you with a
            list of streaming platforms where you can watch your selected
            content, including popular services like Netflix, HBO, Apple TV, and
            more.
          </p>
        </article>
        <article className="flex flex-col gap-3 mt-6">
          <p className="text-white text-xl font-bold w-full text-left">
            Features
          </p>
          <p className="text-base text-gray-300 text-left">
            <span className="font-bold text-md text-white">
              Comprehensive Database:
            </span>{" "}
            We have an extensive database of movies and series, ensuring you
            have access to a wide range of content.
          </p>
          <p className="text-base text-gray-300 text-left">
            <span className="font-bold text-md text-white">
              Streamlined Search:
            </span>{" "}
            Our user-friendly search and filtering options make it easy to find
            exactly what you{`'`}re looking for.
          </p>
          <p className="text-base text-gray-300 text-left">
            <span className="font-bold text-md text-white">
              Multi-Platform Availability:
            </span>{" "}
            Discover where you can watch a movie or series across multiple
            streaming platforms in one place.
          </p>
        </article>
        <article className="flex flex-col gap-3 mt-6">
          <p className="text-white text-xl font-bold w-full text-left">
            Benefits
          </p>
          <p className="text-base text-gray-300 text-left">
            <span className="font-bold text-md text-white">
              Save Your Time:
            </span>{" "}
            No more endless scrolling through multiple apps and websites. We
            bring all your options to one place.
          </p>
          <p className="text-base text-gray-300 text-left">
            <span className="font-bold text-md text-white">
              Discover New Content:
            </span>{" "}
            Explore hidden gems and new releases that you might have missed
            otherwise.
          </p>
          <p className="text-base text-gray-300 text-left">
            <span className="font-bold text-md text-white">Stay Updated:</span>{" "}
            We keep our database up to date, so you{`'`}ll always know what{`'`}
            s available to watch.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;

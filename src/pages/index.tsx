import { useRef, useState } from "react";
import Countries from "@/components/Countries";
import { Country } from "@/@types/countries";
import Search from "@/components/Search";
import { useRouter } from "next/router";
import { Values } from "@/@types/values";

export default function Home() {
  const [select, setSelect] = useState<Country | null>(null);

  const [values, setValues] = useState<Values>({
    keyword: "",
    country: "",
  });

  const router = useRouter();

  const countrySectionRef = useRef<HTMLElement | null>(null);

  const scrollToCountry = () => {
    if (countrySectionRef.current) {
      countrySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-between py-6 bg-gradient-to-b from-black to-transparent">
      <article className="min-h-[70vh] w-full p-12">
        <div className="gap-6 flex flex-col items-center">
          <h1 className="text-center text-bold leading-[30px] text-4xl md:leading-[52px] md:text-5xl lg:leading-[88px] lg:text-[80px] lg:font-medium">
            Welcome to Streamvailable
          </h1>
          <p className="text-base leading-7 w-full md:w-[382px] lg:w-[600px]">
            Where you can check if a movie or serie is currently accessible in
            your region and in which streaming platform.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            <div
              className="w-[178px] h-[65px] flex justify-center items-center bg-blue cursor-pointer"
              onClick={() => scrollToCountry()}
            >
              <p>Let{`'`}s start</p>
            </div>
            <div
              className="w-[178px] h-[65px] flex justify-center items-center border-[1px] border-white cursor-pointer"
              onClick={() => router.push("/about-us")}
            >
              <p>Learn More</p>
            </div>
          </div>
        </div>
      </article>
      <article className="h-full w-full p-12 lg:p-24" ref={countrySectionRef}>
        <h1 className="text-center text-bold leading-[30px] text-3xl lg:text-4xl">
          Select your country
        </h1>
        <Countries
          values={values}
          setSelect={setSelect}
          setValues={setValues}
        />
      </article>
      <article className="h-full w-full p-12 lg:p-24">
        <Search setValues={setValues} values={values} />
      </article>
    </section>
  );
}

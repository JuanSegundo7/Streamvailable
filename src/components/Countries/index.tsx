import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import get_countries from "@/pages/api/axios.getCountries";
import { Country } from "@/@types/countries";
import Image from "next/image";
import Spinner from "../Spinner";
import { Values } from "@/@types/values";

interface CountryComponent {
  values: Values;
  setSelect: Dispatch<SetStateAction<Country | null>>;
  setValues: Dispatch<SetStateAction<Values>>;
}

const Countries = ({ values, setSelect, setValues }: CountryComponent) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesData: { [key: string]: Country } = await get_countries();
        const countriesWithFlag = Object.values(countriesData).map(
          (country: Country) => ({
            ...country,
            flag: `https://flagcdn.com/h80/${country.countryCode}.png`,
          })
        );
        setCountries(countriesWithFlag);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-10 flex gap-4 justify-center items-center w-full h-full min-h-[200px] flex-wrap">
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : !countries.length ? (
        <div>
          <Spinner />
        </div>
      ) : (
        countries.map((country: Country) => {
          return (
            <div
              key={country.countryCode}
              onClick={() => {
                setValues((prevValues: Values) => ({
                  ...prevValues,
                  country: country.countryCode,
                }));
                setSelect(country);
              }}
            >
              <Image
                src={country.flag}
                width={100}
                height={100}
                key={country.name.type}
                alt={country.countryCode}
                className={`cursor-pointer h-[80px] w-[120px] max-w-[120px] max-h-[80px] object-fill  ${
                  values.country === country.countryCode
                    ? "opacity-100"
                    : "opacity-25"
                }`}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Countries;

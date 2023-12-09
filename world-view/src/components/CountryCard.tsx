import React from "react";

const CountryCard = ({ country }) => {
  console.log(country);

  const nativenames = [];
  for (const key in country.name.nativeName) {
    nativenames.push(country.name.nativeName[key]);
  }
  let commonnames = '';
  let officialnames = '';
  nativenames.map((names) => {
    commonnames += ' / ' + names.common;
    officialnames += ' / ' + names.official;
  });

  const languages_list = [];
  for (const key in country.languages) {
    languages_list.push(country.languages[key]);
  }
  let language = '';
  languages_list.map((names) => {
    language += ' / ' + names;
  });

  const currencies_list = [];
  for (const key in country.currencies) {
    currencies_list.push(country.currencies[key]);
  }
  let currency = '';
  currencies_list.map((names) => {
    currency += ' / ' + names.name;
  });

  const demonyms_list = [];
  for (const key in country.demonyms) {
    demonyms_list.push(country.demonyms[key]);
  }
  let demonyms = '';
  demonyms_list.map((names) => {
    demonyms += ' / ' + names.f;
    demonyms += ' / ' + names.m;
  });

  return (
    <div className="bg-white p-4 shadow-md mb-4">
      <div className="flex justify-center items-center mb-4">
        <img src={country.flags.png} alt="" />
      </div>
      <div className="text-center font-mono text-xl">
        {country.name.common}
      </div>
      <div className="text-center font-mono text-s py-10">
        <div className="text-5xl font-mono font-bold">
          <h1>Basic Country Information</h1>
        </div>
        <div className="flex">
          <div className="font-bold px-10">
            <h1>Latitude longitude</h1>
          </div>
          <div>
            <li>
              <p>{commonnames}</p>
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>La superficie</h1>
          </div>
          <div>
            <li>
              <p>{officialnames}</p>
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>le tld</h1>
          </div>
          <div>
            <li>
              <p>{country.tld}</p>
            </li>
          </div>
        </div>

      <div className="text-center font-mono text-s py-10">
        <div className="text-5xl font-mono font-bold">
          <h1>Geographical Data</h1>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>Latitude longitude</h1>
          </div>
          <div>
            <li>
              <p>DQZDQZDQZDQZ</p>
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>La superficie</h1>
          </div>
          <div>
            <li>
              <p>DQZDQZDQZDQZ</p>
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>DQZDQZDQZD</h1>
          </div>
          <div>
            <li>
              <p>DZQDZQDQZDQZ</p>
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>la région et sous-région</h1>
          </div>
          <div>
            <li>
              <p>DZQDZQDQZDQZ</p>
            </li>
          </div>
        </div>
      </div>

      <div className="text-center font-mono text-s py-10">
        <div className="text-5xl font-mono font-bold">
          <h1>Political and Administrative Data</h1>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>la capitale du pays</h1>
          </div>
          <div>
            <li>
              <p>{country.capital}</p>
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>est-ce que le pays est indépendant</h1>
          </div>
          <div>
            <li>
              {country.capital === 'false' ? <p>No</p> : <p>Yes</p>}
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>est-ce que le pays est membre de l'UN</h1>
          </div>
          <div>
            <li>
            {country.unMember === 'false' ? <p>No</p> : <p>Yes</p>}
            </li>
          </div>
        </div>

      </div>

      <div className="text-center font-mono text-s py-10">
        <div className="text-5xl font-mono font-bold">
          <h1>Economic and Demographic Data</h1>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>le nombre d'habitants</h1>
          </div>
          <div>
            <li>
              <p>DQZDQZDQZDQZ</p>
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>les devises du pays</h1>
          </div>
          <div>
            <li>
              <p>{currency}</p>
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>le coefficient GINI du pays </h1>
          </div>
          <div>
            <li>
              <p>DQZDQZDQZDQZ</p>
            </li>
          </div>
        </div>

      </div>

      <div className="text-center font-mono text-s py-10">
        <div className="text-5xl font-mono font-bold">
          <h1>Cultural Data</h1>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>les langages du pays</h1>
          </div>
          <div>
            <li>
              <p>{language}</p>
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>les gentilés du pays</h1>
          </div>
          <div>
            <li>
              <p>{demonyms}</p>
            </li>
          </div>
        </div>

        </div>
      
      </div>
    </div>
  );
};

export default CountryCard;

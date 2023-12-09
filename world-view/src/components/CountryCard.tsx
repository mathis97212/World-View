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

  const gini_list = [];
  for (const key in country.gini) {
    gini_list.push(country.gini[key]);
  }
  let gini = '';
  gini_list.map((names) => {
    gini += names;
  });

  const borders_list = [];
  for (const key in country.borders) {
    borders_list.push(country.borders[key]);
  }
  let borders = '';
  borders_list.map((names) => {
    borders += ' / ' + names;
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
            <h1>Les noms commun et natif</h1>
          </div>
          <div>
            <li>
            {commonnames ? <p>{commonnames}</p> : <p>None</p>}
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>Les noms officiels</h1>
          </div>
          <div>
            <li>
            {officialnames ? <p>{officialnames}</p> : <p>None</p>}
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
              <p>{country.latlng[0]}, {country.latlng[1]}</p>
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>La superficie</h1>
          </div>
          <div>
            <li>
              <p>{country.area}</p>
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>les pays en bordure</h1>
          </div>
          <div>
            <li>
            {borders ? <p>{borders}</p> : <p>None</p>}
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>Region</h1>
          </div>
          <div>
            <li>
            {country.subregion ? <p>{country.region}, {country.subregion}</p> : <p>{country.region}</p>}
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
              {country.capital ? <p>{country.capital}</p> : <p>None</p>}
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
            <h1>Population</h1>
          </div>
          <div>
            <li>
              <p>{country.population}</p>
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>Currencies</h1>
          </div>
          <div>
            <li>
            {currency ? <p>{currency}</p> : <p>None</p>}
            </li>
          </div>
        </div>

        <div className="flex">
          <div className="font-bold px-10">
            <h1>GINI coefficient</h1>
          </div>
          <div>
            <li>
              {gini ? <p>{gini}</p> : <p>None</p>}
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
            {language ? <p>{language}</p> : <p>None</p>}
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

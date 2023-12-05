import React from "react";

const CountryCard = ({ country }) => {
  console.log(country)
  return (
    <div className="bg-white p-4 shadow-md mb-4">

      <div className="flex justify-center items-center mb-4">
        <img src={country.flags.png} alt="" />
      </div >
      <div className="text-center font-mono text-xl">
          {country.name.common}
      </div>
      <div className="text-center font-mono text-s">
        <h1>Basic Country Information :</h1>
        <h2 className="text-sm">{country.name.common}, {country.name.nativeName.object.common}, {country.name.nativeName.object.official}</h2>
      </div>
      <div>
        <h1>
          les noms officiels commun et natif ;
          le tld ;

          Geographical Data ;
          la latitude et longitude ;
          la superficie ;
          les pays en bordure ;
          la région et sous-région ;
          Political and Administrative Data ;
          la capitale du pays ;
          est-ce que le pays est indépendant ;
          est-ce que le pays est membre de l'UN ;
          Economic and Demographic Data ;
          le nombre d'habitants ;
          les devises du pays ;
          le coefficient GINI du pays ;
          Cultural Data ;
          les langages du pays ;
          les gentilés du pays ;
        </h1>
      </div>

    </div>

  );
};

export default CountryCard;

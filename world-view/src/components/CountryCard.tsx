import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="bg-white p-4 shadow-md mb-4">

      <div className="flex justify-center items-center mb-4">
        <img src={country.flags.png} alt="" />
      </div >
      <div className="text-center font-mono text-xl">
          {country.name.common}
      </div>
      <div>
        
      </div>

    </div>
  );
};

export default CountryCard;

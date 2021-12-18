import React from "react";
import { v4 } from "uuid";

export default function Countries({ countries }) {
  if (!countries.length) {
    return <div>Loading</div>;
  }

  return (
    <ul>
      {countries.map((country) => {
        return (
          <li key={v4()} style={{ display: "flex" }}>
            <img
              alt={country.name.common}
              src={country.flags.png}
              style={{
                width: "32px",
                height: "22px",
                marginRight: "10px",
                marginBottom: "10px",
              }}
            />
            <div>{country.name.common}</div>
          </li>
        );
      })}
    </ul>
  );
}

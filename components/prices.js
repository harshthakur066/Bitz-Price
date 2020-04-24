import { useState } from "react";

const Prices = ({ bpi }) => {
  const [currency, setCurrency] = useState("USD");
  let list = "";
  if (currency === "USD") {
    list = (
      <li className="list-group-item">
        Bitcoin Rate for {bpi.USD.description}:{" "}
        <span className="badge badge-primary"> {bpi.USD.code} </span>
        <strong> {bpi.USD.rate} </strong>
      </li>
    );
  } else if (currency === "GBP") {
    list = (
      <li className="list-group-item">
        Bitcoin Rate for {bpi.GBP.description}:{" "}
        <span className="badge badge-primary"> {bpi.GBP.code} </span>
        <strong> {bpi.GBP.rate} </strong>
      </li>
    );
  } else if (currency === "EUR") {
    list = (
      <li className="list-group-item">
        Bitcoin Rate for {bpi.EUR.description}:{" "}
        <span className="badge badge-primary"> {bpi.EUR.code} </span>
        <strong> {bpi.EUR.rate} </strong>
      </li>
    );
  }
  return (
    <div>
      Check Current Bitcoin Rate
      <ul className="list-group">{list}</ul>
      <br />
      <select
        onChange={(e) => setCurrency(e.target.value)}
        className="form-control"
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default Prices;

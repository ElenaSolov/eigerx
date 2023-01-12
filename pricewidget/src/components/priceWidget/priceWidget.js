import React, { useState, useEffect } from "react";
import priceWidgetStyles from "./priceWidget.module.css";
import { initialMessage } from "../../utils/constants";
import { getPrices, getPricesFail } from "../../utils/api";

const PriceWidget = () => {
  const [data, setData] = useState(null);
  const [auto, setAuto] = useState(false);
  const [error, setError] = useState("");

  const getData = () => {
    setError("");
    console.log("Get request sent"); //this is left for testing purposes
    getPrices()
      .then((res) => setData(res.result))
      .catch((err) => console.log(err)); //should be more than console.log, of course
  };

  const getFailedData = () => {
    setError("");
    getPricesFail()
      .then((res) => {
        setError(res.result);
        setData(null);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    //in case of fetching data every 3 seconds web sockets are more appropriate solution
    let interval;
    if (auto) {
      getData();
      interval = setInterval(getData, 3000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  const handleChange = () => {
    setAuto((prev) => !prev);
  };

  return (
    <section>
      {error ? (
        <p className={priceWidgetStyles.text}>{error}</p>
      ) : data ? (
        <ul className={priceWidgetStyles.list}>
          <li className={priceWidgetStyles.item}>Asset</li>
          <li className={priceWidgetStyles.item}>Price</li>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <li className={priceWidgetStyles.item}>{item.asset}</li>
              <li className={priceWidgetStyles.item}>{item.price}</li>
            </React.Fragment>
          ))}
        </ul>
      ) : (
        <p className={priceWidgetStyles.text}>{initialMessage}</p>
      )}
      <div className={priceWidgetStyles.buttonBar}>
        <button className={priceWidgetStyles.refreshBtn} onClick={getData}>
          Refresh
        </button>
        <label className={priceWidgetStyles.label} htmlFor="auto">
          Auto-Refresh
          <input
            type="checkbox"
            id="auto"
            checked={auto}
            onChange={handleChange}
          />
        </label>
        <button
          className={priceWidgetStyles.refreshBtn}
          onClick={getFailedData} //added to test failed request
        >
          Error
        </button>
      </div>
    </section>
  );
};

export default PriceWidget;

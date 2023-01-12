import { useState } from "react";
import priceWidgetStyles from "./priceWidget.module.css";
import { initialMessage } from "../../constants";

const PriceWidget = () => {
  const [load, setLoad] = useState(false);
  //   useEffect(()=>{
  // //   getPrices()
  //   })
  return (
    <section>
      {load ? (
        <ul className={priceWidgetStyles.list}>
          <li>
            <p>Asset</p>
          </li>
          <li>
            <p>Price</p>
          </li>
          <li>
            <p></p>
          </li>
          <li>
            <p></p>
          </li>
        </ul>
      ) : (
        <p>{initialMessage}</p>
      )}
      <div>
        <button>Refresh</button>
        <label htmlFor="auto">
          Auto-Refresh
          <input type="checkbox" id="auto" />
        </label>
      </div>
    </section>
  );
};

export default PriceWidget;

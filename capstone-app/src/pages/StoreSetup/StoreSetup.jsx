import "./StoreSetup.scss";
import aisleData from "../../data/aisleData.json";

function StoreSetup() {
    return (
        <>
            <div className="store-setup">
                <h1 className="store-setup__title">Navigate Store</h1>
                <p className="store-setup__subtitle">Quickly find your way around store!</p>
            </div>

            {aisleData.map((aisle, index) => (
        <div className="store-setup__aisle" key={index}>
          <p className="store-setup__aisle-number">{aisle.aisleNumber}</p>
          <ul className="store-setup__list">
            {aisle.items.map((group, groupIndex) => (
              <div className="store-setup__list-container" key={groupIndex}>
                {group.map((item, itemIndex) => (
                  <li className="store-setup__item" key={itemIndex}>
                    {item}
                  </li>
                ))}
              </div>
            ))}
          </ul>
        </div>
      ))}

        </>
    );


}

export default StoreSetup;
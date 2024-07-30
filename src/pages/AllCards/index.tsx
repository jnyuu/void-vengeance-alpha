import { useState } from "react";
import { allCardsData } from "../../util/allCardsData";
// import data from "./data.json";
import { shipCardType } from "../../types/card.types";

const AllCards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredShipData, setFilteredShipData] = useState<shipCardType[]>(
    allCardsData.allShipCardsData
  );

  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };

  const filterData = (searchTerm: any) => {
    const filteredShipData = allCardsData.allShipCardsData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredShipData(filteredShipData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />

      <ul>
        {filteredShipData.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllCards;

import styles from "./productCountSelector.module.css";
import { useState } from "react";

interface Props {
  onSelectionChange: (value: number) => void;
}

const ProductCountSelector = ({ onSelectionChange }: Props) => {
  const [selectedCount, setSelectedCount] = useState<number>(20);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    setSelectedCount(value);
    onSelectionChange(value);
  };

  return (
    <div>
      <label htmlFor="productCountSelector">Показать продуктов: </label>
      <select
        id="productCountSelector"
        value={selectedCount}
        onChange={handleChange}
      >
        <option value={5}>5</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div>
  );
};

export default ProductCountSelector;

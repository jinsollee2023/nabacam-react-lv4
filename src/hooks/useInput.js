import { useState } from "react";

const removeCommas = (value) => {
  return value.replace(/,/g, "");
};

const addCommas = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const useInput = (initialValue, type = "default") => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = (e, data) => {
    switch (type) {
      case "price":
        const removeCommasNumber = removeCommas(e.target.value);
        const addCommasNumber = addCommas(removeCommasNumber);
        setInputValue(addCommasNumber);
        break;
      case "content":
        setInputValue(data);
        break;

      default:
        setInputValue(e.target.value);
        break;
    }
  };

  return [inputValue, onChange];
};

export default useInput;

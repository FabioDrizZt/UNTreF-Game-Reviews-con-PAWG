import { useState } from "react";

export default function useToggle(initialState = false) {
  const [details, setdetails] = useState(initialState);

  const toggle = () => {
    setdetails(!details);
  };

  return [details, toggle];
}

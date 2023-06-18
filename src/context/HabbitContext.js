import { createContext, useContext, useState } from "react";
import { habbits } from "../data/habbits";
const HabbitContext = createContext({
  habbitList: [],
});

export const HabbitProvider = ({ children }) => {

  const [habbitList, setHabbitList] = useState(habbits);

  return (
    <HabbitContext.Provider
      value={{
        habbitList
      }}
    >
      {children}
    </HabbitContext.Provider>
  );
};

export const useHabbit = () => useContext(HabbitContext);
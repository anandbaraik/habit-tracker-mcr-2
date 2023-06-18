import { createContext, useContext, useState } from "react";
import { habbits } from "../data/habbits";
const HabbitContext = createContext({
  habbitList: [],
  archiveHabbit: () => {},
  deleteHabbit: () => {},
});

export const HabbitProvider = ({ children }) => {

  const [habbitList, setHabbitList] = useState(habbits);
  const archiveHabbit = (habbitId) => {
    const habbits =  habbitList.map((habbit) => {
        if(habbitId === habbit.id) {
            return {...habbit, archive:true};
        }
        return habbit;
    });
    setHabbitList(habbits);
  }
  const deleteHabbit = (habbitId) => {
   const habbits =  habbitList.filter(({id}) => id !== habbitId);
   setHabbitList(habbits);
  }
  return (
    <HabbitContext.Provider
      value={{
        habbitList,
        deleteHabbit,
        archiveHabbit
      }}
    >
      {children}
    </HabbitContext.Provider>
  );
};

export const useHabbit = () => useContext(HabbitContext);
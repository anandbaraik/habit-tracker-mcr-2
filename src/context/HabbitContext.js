import { createContext, useContext, useState } from "react";
import { habbits } from "../data/habbits";
const HabbitContext = createContext({
  habbitList: [],
  archiveHabbit: () => {},
  deleteHabbit: () => {},
  updateHabbit: () => {},
  addHabbit: () => {}
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
  const updateHabbit = (data) => {
    const habbits =  habbitList.map((habbit) => {
        if(data.id === habbit.id) {
            return {...data};
        }
        return habbit;
    });
    setHabbitList(habbits);
  }
  const addHabbit = (data) => {
    data = {...data, id:Math.floor(Math.random() * 100000)};
    const habbits = [...habbitList, data];
    setHabbitList(habbits);
  }

  return (
    <HabbitContext.Provider
      value={{
        habbitList,
        deleteHabbit,
        archiveHabbit,
        updateHabbit,
        addHabbit
      }}
    >
      {children}
    </HabbitContext.Provider>
  );
};

export const useHabbit = () => useContext(HabbitContext);
import React, { usestate, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const movie = [
    {
      name: "Movie 1",
      price: "10",
      id: 11,
    },
    {
      name: "Movie 2",
      price: "12",
      id: 12,
    },
    {
      name: "Movie 3",
      price: "13",
      id: 13,
    },
    {
      name: "Movie 4",
      price: "14",
      id: 14,
    },
    {
      name: "Movie 5",
      price: "15",
      id: 15,
    },
    {
      name: "Movie 6",
      price: "16",
      id: 16,
    },
  ];

  return (
    <AppContext.Provider value={[movie]}>{props.children}</AppContext.Provider>
  );
};

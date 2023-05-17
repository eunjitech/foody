import { createContext } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  //context 관리에 필요한 모든 로직이 포함

  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
}

import { atom } from "recoil";

const SearchState = atom({
  key: "search",
  default: false,
});

export default SearchState;

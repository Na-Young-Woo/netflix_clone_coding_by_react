import { atom } from "recoil";

export const loginState = atom({
  key: "nowUser",
  default: "벨카",
});

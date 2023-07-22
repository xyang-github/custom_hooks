import { create } from "zustand";

const useInputStore = create((set) => ({
  firstNameValue: "",
  firstNameError: false,
  actions: {
    setFirstNameValue: (fname) => set({ firstNameValue: fname }),
    setFirstNameError: (value) => set({ firstNameError: value }),
  },
}));

export default useInputStore;

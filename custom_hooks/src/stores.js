import { create } from "zustand";

const useInputStore = create((set) => ({
  firstNameValue: "",
  firstNameError: false,
  lastNameValue: "",
  lastNameError: false,
  actions: {
    setFirstNameValue: (fname) => set({ firstNameValue: fname }),
    setFirstNameError: (value) => set({ firstNameError: value }),
    setLastNameValue: (lname) => set({ lastNameValue: lname }),
    setLastNameError: (value) => set({ lastNameError: value }),
  },
}));

export default useInputStore;

import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStored = defineStore("main", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      menu: false,
      search: false,
      data: {},
      type: '',
    };
  },

  actions: {
    openMenu() {
      this.menu = true;
    },
    closeMenu() {
      this.menu = false;
    },
    openSearch() {
      this.search = true;
    },
    closeSearch() {
      this.search = false;
    },
  },
});

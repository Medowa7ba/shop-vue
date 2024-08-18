import { defineStore } from "pinia";
const STORE_NAME = "card";
const getSetting = () => {
  const settings = localStorage.getItem(STORE_NAME);
  return settings ? JSON.parse(settings) : [];
};
export const useStore = defineStore(STORE_NAME, {
  state: () => ({
    settings: getSetting() as { id: number; item: number }[],
    cartCount: getSetting().length,
  }),
  actions: {
    updateSettings(partialSettings) {
      const find = this.activeCard().find((x) => x.id === partialSettings.id);
      if (!find) {
        this.activeCard().push(partialSettings);
        localStorage.setItem(STORE_NAME, JSON.stringify(this.settings));
        this.cartCount++
      } 
    },
    activeCard(): any[] {
      const card = getSetting();
      this.settings = card;
      return card;
    },
    updateRemoveSettings(data) {
      localStorage.setItem(STORE_NAME, JSON.stringify(data));

      return this.activeCard();
    },
  },
});

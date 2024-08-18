import { defineStore } from "pinia";
const STORE_NAME = "card";
const getSetting = () => {
  const settings = localStorage.getItem(STORE_NAME);
  return settings ? JSON.parse(settings) : [];
};
export const useStore = defineStore(STORE_NAME, {
  state: () => ({
    settings: getSetting() as { id: number; item: number }[],
  }),
  actions: {
    updateSettings(partialSettings: {id:number, item: number}) {
      const cart = this.activeCard();
      const find = cart.findIndex((x) => x.id === partialSettings.id);
      if (find <= 0) {
        cart.push(partialSettings);
        localStorage.setItem(STORE_NAME, JSON.stringify(this.settings));
      } else {
        cart[find] = {
          ...cart[find],
          item: partialSettings.item + cart[find].item,
        };
        this.updateRemoveSettings(cart);
      }
    },
    activeCard(): any[] {
      const card = getSetting();
      this.settings = card;
      return card;
    },
    updateRemoveSettings(data:any) {
      localStorage.setItem(STORE_NAME, JSON.stringify(data));
      return this.activeCard();
    },
  },
});

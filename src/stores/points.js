import { defineStore } from "pinia";
import pointsLib from "src/lib/pointsLib.json";

export const usePointsStore = defineStore("points", {
  state: () => ({
    points: [],
  }),
  getters: {
    getPoints(state) {
      return state.points;
    },
  },
  actions: {
    async fetchPoints() {
      this.points = pointsLib;
    },
    getCities() {
      this.points.forEach((point) => {
        return point.city;
      });
    },
  },
});

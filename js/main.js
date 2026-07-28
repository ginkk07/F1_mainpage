import { RACE_DATA } from "./race-data.js";
import { initRaceHero } from "./race-hero.js";
import { initRaceSelect } from "./race-select.js";

const heroRoot = document.querySelector("[data-race-hero]");
const selectRoot = document.querySelector("[data-race-select]");

const raceHero = initRaceHero({
  root: heroRoot,
  races: RACE_DATA
});

initRaceSelect({
  root: selectRoot,
  races: RACE_DATA,
  onSelect(race) {
    raceHero?.update(race.id);
  }
});

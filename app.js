const SLOT_LABELS = ["R1 front", "R2 front", "R2 left", "R3 left", "R3 right"];
const GENERATOR_RULES = {
  bluePerSlice: 3,
  redPerSlice: 2,
  minOptimalRes: 2,
  minOptimalInf: 3,
  minTotalOptimal: 9,
  maxTotalOptimal: 13,
  maxLegendaryPerSlice: 1,
  maxAttempts: 3000,
};
const ADJACENT_SLOT_PAIRS = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 4],
  [2, 3],
];
const TILE_IMAGE_BASE = "https://raw.githubusercontent.com/AsyncTI4/TI4_map_generator_bot/master/src/main/resources/tiles/";
const TILE_IMAGE_PATHS = {
  "19": "19_Wellon.png",
  "20": "20_VefutII.png",
  "21": "21_Thibah.png",
  "22": "22_Tarmann.png",
  "23": "23_Saudor.png",
  "24": "24_MeharXull.png",
  "25": "25_Quann.png",
  "26": "26_Lodor.png",
  "27": "27_NewAlbion.png",
  "28": "28_Tequran.png",
  "29": "29_Qucenn.png",
  "30": "30_Mellon.png",
  "31": "31_Lazar.png",
  "32": "32_DalBootha.png",
  "33": "33_Corneeq.png",
  "34": "34_Centauri.png",
  "35": "35_Bereg.png",
  "36": "36_Arnor.png",
  "37": "37_Arinam.png",
  "38": "38_Abyz.png",
  "39": "39_AlphaWH.png",
  "40": "40_BetaWH.png",
  "41": "41_GravityRift.png",
  "42": "42_Nebula.png",
  "43": "43_Supernova.png",
  "44": "44_Asteroids.png",
  "45": "45_Asteroids.png",
  "46": "46_Void.png",
  "47": "47_Void.png",
  "48": "48_Void.png",
  "49": "49_Void.png",
  "50": "50_Void.png",
  "59": "59_ArchonVail.png",
  "60": "60_Perimeter.png",
  "61": "61_Ang.png",
  "62": "62_SemLore.png",
  "63": "63_Vorhal.png",
  "64": "64_Atlas.png",
  "65": "65_Primor.png",
  "66": "66_HopesEnd.png",
  "67": "67_Cormund.png",
  "68": "68_Everra.png",
  "69": "69_Accoen.png",
  "70": "70_Kraag.png",
  "71": "71_Bakal.png",
  "72": "72_Lisis.png",
  "73": "73_Cealdri.png",
  "74": "74_Vega.png",
  "75": "75_Abaddon.png",
  "76": "76_Rigel.png",
  "77": "77_Void.png",
  "78": "78_Void.png",
  "79": "79_AsteroidsAlphaWH.png",
  "80": "80_Supernova.png",
  "106": "106_Cresius.png",
  "107": "107_Tiamat.png",
  "108": "108_Kostboth.png",
  "109": "109_Bellatrix.png",
};
const RED_TILE_IDS = new Set([
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "67",
  "68",
  "77",
  "78",
  "79",
  "80",
  "113",
  "114",
  "115",
  "116",
  "117",
]);
const TILE_DATA = [
  t("19", "Wellon", "base", [{ n: "Wellon", r: 1, i: 2, trait: "industrial", skip: "green" }]),
  t("20", "Vefut II", "base", [{ n: "Vefut II", r: 2, i: 2, trait: "hazardous" }]),
  t("21", "Thibah", "base", [{ n: "Thibah", r: 1, i: 1, trait: "industrial", skip: "blue" }]),
  t("22", "Tar'mann", "base", [{ n: "Tar'mann", r: 1, i: 1, trait: "industrial", skip: "green" }]),
  t("23", "Saudor", "base", [{ n: "Saudor", r: 2, i: 2, trait: "industrial" }]),
  t("24", "Mehar Xull", "base", [{ n: "Mehar Xull", r: 1, i: 3, trait: "hazardous", skip: "red" }]),
  t("25", "Quann", "base", [{ n: "Quann", r: 2, i: 1, trait: "cultural" }], ["beta"]),
  t("26", "Lodor", "base", [{ n: "Lodor", r: 3, i: 1, trait: "cultural" }], ["alpha"]),
  t("27", "New Albion / Starpoint", "base", [
    { n: "New Albion", r: 1, i: 1, trait: "industrial", skip: "green" },
    { n: "Starpoint", r: 3, i: 1, trait: "hazardous" },
  ]),
  t("28", "Tequ'ran / Torkan", "base", [
    { n: "Tequ'ran", r: 2, i: 0, trait: "hazardous" },
    { n: "Torkan", r: 0, i: 3, trait: "cultural" },
  ]),
  t("29", "Qucen'n / Rarron", "base", [
    { n: "Qucen'n", r: 1, i: 2, trait: "industrial" },
    { n: "Rarron", r: 0, i: 3, trait: "cultural" },
  ]),
  t("30", "Mellon / Zohbat", "base", [
    { n: "Mellon", r: 0, i: 2, trait: "cultural" },
    { n: "Zohbat", r: 3, i: 1, trait: "hazardous" },
  ]),
  t("31", "Lazar / Sakulag", "base", [
    { n: "Lazar", r: 1, i: 0, trait: "industrial", skip: "yellow" },
    { n: "Sakulag", r: 2, i: 1, trait: "hazardous" },
  ]),
  t("32", "Dal Bootha / Xxehan", "base", [
    { n: "Dal Bootha", r: 0, i: 2, trait: "cultural" },
    { n: "Xxehan", r: 1, i: 1, trait: "cultural" },
  ]),
  t("33", "Corneeq / Resculon", "base", [
    { n: "Corneeq", r: 1, i: 2, trait: "cultural" },
    { n: "Resculon", r: 2, i: 0, trait: "cultural" },
  ]),
  t("34", "Centauri / Gral", "base", [
    { n: "Centauri", r: 1, i: 3, trait: "cultural" },
    { n: "Gral", r: 1, i: 1, trait: "industrial", skip: "blue" },
  ]),
  t("35", "Bereg / Lirta IV", "base", [
    { n: "Bereg", r: 3, i: 1, trait: "hazardous" },
    { n: "Lirta IV", r: 2, i: 3, trait: "hazardous" },
  ]),
  t("36", "Arnor / Lor", "base", [
    { n: "Arnor", r: 2, i: 1, trait: "industrial" },
    { n: "Lor", r: 1, i: 2, trait: "industrial" },
  ]),
  t("37", "Arinam / Meer", "base", [
    { n: "Arinam", r: 1, i: 2, trait: "industrial" },
    { n: "Meer", r: 0, i: 4, trait: "hazardous", skip: "red" },
  ]),
  t("38", "Abyz / Fria", "base", [
    { n: "Abyz", r: 3, i: 0, trait: "hazardous" },
    { n: "Fria", r: 2, i: 0, trait: "hazardous" },
  ]),
  empty("39", "Empty Space", "base", ["alpha"]),
  empty("40", "Empty Space", "base", ["beta"]),
  anomaly("41", "Gravity Rift", "base", ["gravity rift"]),
  anomaly("42", "Nebula", "base"),
  anomaly("43", "Supernova", "base"),
  anomaly("44", "Asteroid Field", "base"),
  anomaly("45", "Asteroid Field", "base"),
  empty("46", "Empty Space", "base"),
  empty("47", "Empty Space", "base"),
  empty("48", "Empty Space", "base"),
  empty("49", "Empty Space", "base"),
  empty("50", "Empty Space", "base"),
  t("59", "Archon Vail", "pok", [{ n: "Archon Vail", r: 1, i: 3, trait: "hazardous", skip: "blue" }]),
  t("60", "Perimeter", "pok", [{ n: "Perimeter", r: 2, i: 1, trait: "industrial" }]),
  t("61", "Ang", "pok", [{ n: "Ang", r: 2, i: 0, trait: "industrial", skip: "red" }]),
  t("62", "Sem-Lore", "pok", [{ n: "Sem-Lore", r: 3, i: 2, trait: "cultural", skip: "yellow" }]),
  t("63", "Vorhal", "pok", [{ n: "Vorhal", r: 0, i: 2, trait: "cultural", skip: "green" }]),
  t("64", "Atlas", "pok", [{ n: "Atlas", r: 3, i: 1, trait: "hazardous" }]),
  t("65", "Primor", "pok", [{ n: "Primor", r: 2, i: 1, trait: "cultural", legendary: true }]),
  t("66", "Hope's End", "pok", [{ n: "Hope's End", r: 3, i: 0, trait: "hazardous", legendary: true }]),
  t("67", "Cormund", "pok", [{ n: "Cormund", r: 2, i: 0, trait: "hazardous" }], ["gravity rift"]),
  t("68", "Everra", "pok", [{ n: "Everra", r: 3, i: 1, trait: "cultural" }]),
  t("69", "Accoen / Jeol Ir", "pok", [
    { n: "Accoen", r: 2, i: 3, trait: "industrial" },
    { n: "Jeol Ir", r: 2, i: 3, trait: "industrial" },
  ]),
  t("70", "Kraag / Siig", "pok", [
    { n: "Kraag", r: 2, i: 1, trait: "hazardous" },
    { n: "Siig", r: 0, i: 2, trait: "hazardous" },
  ]),
  t("71", "Ba'kal / Alio Prima", "pok", [
    { n: "Ba'kal", r: 3, i: 2, trait: "industrial" },
    { n: "Alio Prima", r: 1, i: 1, trait: "cultural" },
  ]),
  t("72", "Lisis / Velnor", "pok", [
    { n: "Lisis", r: 2, i: 2, trait: "industrial" },
    { n: "Velnor", r: 2, i: 1, trait: "industrial", skip: "red" },
  ]),
  t("73", "Cealdri / Xanhact", "pok", [
    { n: "Cealdri", r: 0, i: 2, trait: "cultural", skip: "yellow" },
    { n: "Xanhact", r: 0, i: 1, trait: "hazardous" },
  ]),
  t("74", "Vega Major / Vega Minor", "pok", [
    { n: "Vega Major", r: 2, i: 1, trait: "cultural" },
    { n: "Vega Minor", r: 1, i: 2, trait: "cultural" },
  ]),
  t("75", "Abaddon / Ashtroth / Loki", "pok", [
    { n: "Abaddon", r: 1, i: 0, trait: "cultural" },
    { n: "Ashtroth", r: 2, i: 0, trait: "hazardous" },
    { n: "Loki", r: 1, i: 2, trait: "cultural" },
  ]),
  t("76", "Rigel I / Rigel II / Rigel III", "pok", [
    { n: "Rigel I", r: 0, i: 1, trait: "cultural" },
    { n: "Rigel II", r: 1, i: 2, trait: "industrial" },
    { n: "Rigel III", r: 1, i: 1, trait: "hazardous" },
  ]),
  empty("77", "Empty Space", "pok"),
  empty("78", "Empty Space", "pok"),
  anomaly("79", "Asteroid Field", "pok", ["alpha"]),
  anomaly("80", "Supernova", "pok"),
  t("97", "Faunus", "te", [{ n: "Faunus", r: 1, i: 3, trait: "industrial", skip: "green", legendary: true }], [], "planet", "97_Faunus.png"),
  t("98", "Garbozia", "te", [{ n: "Garbozia", r: 2, i: 1, trait: "hazardous", legendary: true }], [], "planet", "98_Garbozia.png"),
  t("99", "Emelpar", "te", [{ n: "Emelpar", r: 0, i: 2, trait: "cultural", legendary: true }], [], "planet", "99_Emelpar.png"),
  t("100", "Tempesta", "te", [{ n: "Tempesta", r: 1, i: 1, trait: "hazardous", skip: "blue", legendary: true }], [], "planet", "100_Tempesta.png"),
  t("101", "Olergodt", "te", [{ n: "Olergodt", r: 2, i: 1, traits: ["hazardous", "cultural"], skip: "red" }], [], "planet", "101_Olergodt.png"),
  t("102", "Andeara", "te", [{ n: "Andeara", r: 1, i: 1, trait: "industrial", skip: "blue" }], ["alpha"], "planet", "102_Andeara.png"),
  t("103", "Vira Pics III", "te", [{ n: "Vira Pics III", r: 2, i: 3, traits: ["cultural", "hazardous"] }], [], "planet", "103_ViraPicsIII.png"),
  t("104", "Lesab", "te", [{ n: "Lesab", r: 2, i: 1, traits: ["industrial", "hazardous"] }], [], "planet", "104_Lesab.png"),
  t("105", "New Terra / Tinnes", "te", [
    { n: "New Terra", r: 1, i: 1, trait: "industrial", skip: "green" },
    { n: "Tinnes", r: 2, i: 1, traits: ["industrial", "hazardous"], skip: "green" },
  ], [], "planet", "105_Neutera.png"),
  t("106", "Cresius / Lazul Rex", "te", [
    { n: "Cresius", r: 0, i: 1, trait: "hazardous" },
    { n: "Lazul Rex", r: 2, i: 2, traits: ["industrial", "cultural"] },
  ], [], "planet", "106_Cresius.png"),
  t("107", "Tiamat / Hercalor", "te", [
    { n: "Tiamat", r: 1, i: 2, trait: "cultural", skip: "yellow" },
    { n: "Hercalor", r: 1, i: 0, trait: "industrial" },
  ], [], "planet", "107_Tiamat.png"),
  t("108", "Kostboth / Capha", "te", [
    { n: "Kostboth", r: 0, i: 1, trait: "cultural" },
    { n: "Capha", r: 3, i: 0, trait: "hazardous" },
  ], [], "planet", "108_Kostboth.png"),
  t("109", "Bellatrix / Tsion Station", "te", [
    { n: "Bellatrix", r: 1, i: 2, trait: "cultural" },
    { n: "Tsion Station", r: 1, i: 1, trait: "spacestation" },
  ], [], "planet", "109_Bellatrix.png"),
  t("110", "Horizon / El'Nath / Luthien VI", "te", [
    { n: "Horizon", r: 2, i: 3, trait: "cultural" },
    { n: "El'Nath", r: 2, i: 0, trait: "hazardous" },
    { n: "Luthien VI", r: 3, i: 1, trait: "hazardous" },
  ], [], "planet", "110_Horizon.png"),
  t("111", "Tarana / Oluz Station", "te", [
    { n: "Tarana", r: 1, i: 2, traits: ["cultural", "industrial"] },
    { n: "Oluz Station", r: 1, i: 1, trait: "spacestation" },
  ], [], "planet", "111_Tarana.png"),
  anomaly("113", "Beta Rift", "te", ["beta"], "113_BetaRift.png"),
  anomaly("114", "Entropic Scar", "te", [], "114_EntropicScar.png"),
  t("115", "Industrex", "te", [{ n: "Industrex", r: 2, i: 0, trait: "industrial", skip: "red", legendary: true }], [], "planet", "115_Industrex.png"),
  t("116", "Lemox", "te", [{ n: "Lemox", r: 0, i: 3, trait: "industrial" }], [], "planet", "116_Lemox.png"),
  t("117", "The Watchtower", "te", [{ n: "The Watchtower", r: 1, i: 1, trait: "spacestation" }], [], "planet", "117_TheWatchtower.png"),
];

let tiles = [...TILE_DATA];
let activeSet = "all";
let activeFilter = "";
let selected = { slice: 0, slot: 0 };
let focusedSlice = null;
let slices = Array.from({ length: 6 }, (_, index) => makeSlice(index));

const els = {
  tileList: document.querySelector("#tileList"),
  sliceGrid: document.querySelector("#sliceGrid"),
  search: document.querySelector("#searchInput"),
  sliceCount: document.querySelector("#sliceCount"),
  tileCount: document.querySelector("#tileCount"),
  generatorStatus: document.querySelector("#generatorStatus"),
  exportDialog: document.querySelector("#exportDialog"),
  exportText: document.querySelector("#exportText"),
};

function t(id, name, set, planets = [], tags = [], kind = "planet", imagePath = "") {
  return { id, name, set, planets, tags, kind, imagePath: imagePath || TILE_IMAGE_PATHS[id] || "" };
}

function empty(id, name, set, tags = [], imagePath = "") {
  return t(id, name, set, [], ["empty", ...tags], "empty", imagePath);
}

function anomaly(id, name, set, tags = [], imagePath = "") {
  return t(id, name, set, [], ["anomaly", ...tags], "anomaly", imagePath);
}

function totals(tileIds) {
  const found = tileIds.map(tileById).filter(Boolean);
  const planets = found.flatMap((tile) => tile.planets);
  const skips = planets.map((planet) => planet.skip).filter(Boolean);
  const traits = countBy(planets.flatMap(planetTraits));
  const tags = countBy(found.flatMap((tile) => tile.tags));
  const optimal = sliceOptimal(tileIds);
  return {
    resources: sum(planets.map((planet) => planet.r)),
    influence: sum(planets.map((planet) => planet.i)),
    optimal,
    planets: planets.length,
    skips,
    traits,
    tags,
    legendary: planets.filter((planet) => planet.legendary).length,
  };
}

function planetTraits(planet) {
  if (Array.isArray(planet.traits)) return planet.traits.filter(Boolean);
  return planet.trait ? [planet.trait] : [];
}

function miltyPlanetValue(planet) {
  if (planet.r > planet.i) return { res: planet.r, inf: 0, flex: 0 };
  if (planet.i > planet.r) return { res: 0, inf: planet.i, flex: 0 };
  return { res: 0, inf: 0, flex: planet.r };
}

function miltyTileValueParts(tile) {
  return tile.planets.reduce(
    (out, planet) => {
      const value = miltyPlanetValue(planet);
      out.res += value.res;
      out.inf += value.inf;
      out.flex += value.flex;
      return out;
    },
    { res: 0, inf: 0, flex: 0 },
  );
}

function sliceOptimal(tileIds) {
  return tileIds.map(tileById).filter(Boolean).reduce(
    (out, tile) => {
      const value = miltyTileValueParts(tile);
      out.res += value.res;
      out.inf += value.inf;
      out.flex += value.flex;
      return out;
    },
    { res: 0, inf: 0, flex: 0 },
  );
}

function tileValue(tile) {
  const value = miltyTileValueParts(tile);
  let score = value.res * 0.8 + value.inf * 0.9 + value.flex;
  if (tile.planets.some((planet) => planet.legendary)) score += 1.5;
  if (tilePoolType(tile) === "blue") {
    if (hasTag(tile, "alpha") || hasTag(tile, "beta")) score += 0.5;
    score += tile.planets.filter((planet) => planet.skip).length;
  } else {
    if (tile.name.toLowerCase().includes("supernova")) score -= 1;
    if (hasTag(tile, "gravity rift")) score += 0.5;
  }
  return score;
}

function tilePoolType(tile) {
  if (RED_TILE_IDS.has(tile.id) || tile.tileBack === "red") return "red";
  if (tile.tileBack === "blue") return "blue";
  if (tile.kind !== "planet") return "red";
  if (hasTag(tile, "gravity rift") || tile.name.toLowerCase().includes("rift")) return "red";
  return "blue";
}

function hasTag(tile, tag) {
  return tile.tags.some((candidate) => candidate.toLowerCase().includes(tag));
}

function hasAnyWormhole(tile) {
  return ["alpha", "beta", "gamma", "delta", "epsilon"].some((tag) => hasTag(tile, tag)) || hasTag(tile, "wormhole");
}

function partitionByValue(pool, partitions) {
  const sorted = [...pool].sort((a, b) => tileValue(a) - tileValue(b));
  const size = Math.ceil(sorted.length / partitions);
  return Array.from({ length: partitions }, (_, index) => sorted.slice(index * size, (index + 1) * size)).filter((tier) => tier.length);
}

function shuffle(values) {
  const out = [...values];
  for (let index = out.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [out[index], out[swapIndex]] = [out[swapIndex], out[index]];
  }
  return out;
}

function sliceIsValid(tileIds) {
  const optimal = sliceOptimal(tileIds);
  const totalOptimal = optimal.res + optimal.inf + optimal.flex;
  if (
    optimal.res < GENERATOR_RULES.minOptimalRes ||
    optimal.inf < GENERATOR_RULES.minOptimalInf ||
    totalOptimal < GENERATOR_RULES.minTotalOptimal ||
    totalOptimal > GENERATOR_RULES.maxTotalOptimal
  ) {
    return false;
  }

  const sliceTiles = tileIds.map(tileById).filter(Boolean);
  if (sliceTiles.filter((tile) => hasTag(tile, "alpha")).length > 1) return false;
  if (sliceTiles.filter((tile) => hasTag(tile, "beta")).length > 1) return false;
  if (sliceTiles.filter((tile) => tile.planets.some((planet) => planet.legendary)).length > GENERATOR_RULES.maxLegendaryPerSlice) return false;
  return !anomaliesTouch(tileIds);
}

function anomaliesTouch(tileIds) {
  return ADJACENT_SLOT_PAIRS.some(([left, right]) => {
    const leftTile = tileById(tileIds[left]);
    const rightTile = tileById(tileIds[right]);
    return isAnomaly(leftTile) && isAnomaly(rightTile);
  });
}

function isAnomaly(tile) {
  return Boolean(tile && (tile.kind === "anomaly" || hasTag(tile, "anomaly") || hasTag(tile, "gravity rift")));
}

function buildCandidateFromTiers(tiers, sliceIndex) {
  return shuffle(tiers.map((tier) => tier[sliceIndex]).filter(Boolean).map((tile) => tile.id));
}

function generateRandomSliceIds(count) {
  const available = [...tiles];
  const blue = available.filter((tile) => tilePoolType(tile) === "blue");
  const red = available.filter((tile) => tilePoolType(tile) === "red");
  if (blue.length < count * GENERATOR_RULES.bluePerSlice || red.length < count * GENERATOR_RULES.redPerSlice) return null;

  const blueTiers = partitionByValue(blue, GENERATOR_RULES.bluePerSlice);
  const redTiers = partitionByValue(red, GENERATOR_RULES.redPerSlice);
  const tiers = [...blueTiers, ...redTiers];
  const possibleSlices = Math.min(...tiers.map((tier) => tier.length));
  if (possibleSlices < count) return null;

  for (let attempt = 0; attempt < GENERATOR_RULES.maxAttempts; attempt++) {
    const shuffledTiers = tiers.map(shuffle);
    const candidates = [];
    for (let sliceIndex = 0; sliceIndex < possibleSlices && candidates.length < count; sliceIndex++) {
      const candidate = buildCandidateFromTiers(shuffledTiers, sliceIndex);
      if (candidate.length === GENERATOR_RULES.bluePerSlice + GENERATOR_RULES.redPerSlice && sliceIsValid(candidate)) {
        candidates.push(candidate);
      }
    }
    if (candidates.length === count && generatedSetIsValid(candidates)) return candidates;
  }
  return null;
}

function generatedSetIsValid(sliceIds) {
  const allTiles = sliceIds.flat().map(tileById).filter(Boolean);
  const legendaryCount = allTiles.filter((tile) => tile.planets.some((planet) => planet.legendary)).length;
  const wormholeCount = allTiles.filter(hasAnyWormhole).length;
  return legendaryCount >= 0 && legendaryCount <= sliceIds.length && wormholeCount >= Math.min(1, sliceIds.length);
}

function autoPopulateRandomSlices() {
  const count = Number(els.sliceCount.value) || slices.length || 6;
  setSliceCount(count);
  const generated = generateRandomSliceIds(count);
  if (!generated) {
    els.generatorStatus.textContent = "Could not find valid slices with the current tile pool.";
    return;
  }
  slices = generated.map((slots, index) => ({ name: `Slice ${index + 1}`, slots }));
  selected = { slice: 0, slot: 0 };
  syncSliceCountInput();
  renderSlices();
  renderTileList();
  els.generatorStatus.textContent = `Generated ${generated.length} random slices.`;
}

function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

function countBy(values) {
  return values.reduce((out, value) => {
    out[value] = (out[value] || 0) + 1;
    return out;
  }, {});
}

function tileById(id) {
  return tiles.find((tile) => tile.id === id);
}

function usedTileIds() {
  return new Set(slices.flatMap((slice) => slice.slots.filter(Boolean)));
}

function tileImageUrl(tile) {
  if (!tile?.imagePath) return "";
  if (/^https?:\/\//.test(tile.imagePath)) return tile.imagePath;
  return `${TILE_IMAGE_BASE}${tile.imagePath}`;
}

function tileFace(tile, size = "thumb") {
  const url = tileImageUrl(tile);
  if (!url) return `<span class="hex-fallback">${escapeHtml(tile.name)}</span>`;
  return `<img class="tile-art tile-art-${size}" src="${escapeAttr(url)}" alt="${escapeAttr(tile.name)} tile" loading="lazy" />`;
}

function tileSummary(tile) {
  if (!tile.planets.length) return tile.kind === "anomaly" ? "Anomaly / red tile" : "Empty system";
  const resources = sum(tile.planets.map((planet) => planet.r));
  const influence = sum(tile.planets.map((planet) => planet.i));
  return `${tile.planets.length} planet${tile.planets.length > 1 ? "s" : ""} · ${resources}R / ${influence}I`;
}

function tileTags(tile) {
  const tags = [...tile.tags];
  tile.planets.forEach((planet) => {
    tags.push(...planetTraits(planet));
    if (planet.skip) tags.push(`${planet.skip} skip`);
    if (planet.legendary) tags.push("legendary");
  });
  return [...new Set(tags)];
}

function setTileDragImage(event, card) {
  const tileFaceElement = card.querySelector(".hex");
  if (!tileFaceElement || !event.dataTransfer?.setDragImage) return;

  const dragImage = tileFaceElement.cloneNode(true);
  dragImage.classList.add("tile-drag-image");
  document.body.appendChild(dragImage);
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setDragImage(dragImage, dragImage.offsetWidth / 2, dragImage.offsetHeight / 2);

  const cleanup = () => dragImage.remove();
  card.addEventListener("dragend", cleanup, { once: true });
  window.setTimeout(cleanup, 2500);
}

function renderTileList() {
  const query = els.search.value.trim().toLowerCase();
  const used = usedTileIds();
  const visible = tiles.filter((tile) => {
    const haystack = [tile.id, tile.name, tile.set, tile.kind, ...tileTags(tile), ...tile.planets.map((planet) => planet.n)]
      .join(" ")
      .toLowerCase();
    const setMatch = activeSet === "all" || tile.set === activeSet;
    const queryMatch = !query || haystack.includes(query);
    const filterMatch = !activeFilter || matchesFilter(tile, activeFilter);
    return !used.has(tile.id) && setMatch && queryMatch && filterMatch;
  });

  els.tileCount.textContent = `${visible.length} available`;
  els.tileList.innerHTML = visible.map(tileCard).join("");

  document.querySelectorAll(".tile-card").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", card.dataset.id);
      setTileDragImage(event, card);
    });
    card.addEventListener("click", () => placeTile(card.dataset.id));
  });

}

function matchesFilter(tile, filter) {
  if (filter === "blue-tile") return tilePoolType(tile) === "blue";
  if (filter === "red-tile") return tilePoolType(tile) === "red";
  if (filter === "planet") return tile.planets.length > 0;
  if (filter === "skip") return tile.planets.some((planet) => planet.skip);
  if (filter === "wormhole") return tile.tags.some((tag) => tag.includes("alpha") || tag.includes("beta") || tag.includes("wormhole"));
  return tile.kind === filter || tile.tags.includes(filter);
}

function tileCard(tile) {
  return `
    <article class="tile-card" draggable="true" data-id="${tile.id}" data-kind="${tile.kind}" role="button" tabindex="0" aria-label="Add ${escapeAttr(tile.name)} to selected slot">
      <div class="hex">${tileFace(tile)}</div>
      <div class="tile-info">
        <div class="tile-name">
          <span>${escapeHtml(tile.name)}</span>
          <span class="tile-id">${tile.id}</span>
        </div>
        <div class="tile-summary">${tileSummary(tile)}</div>
        <div class="tags">${tileTags(tile).map(tagPill).join("")}</div>
      </div>
    </article>
  `;
}

function tagPill(tag) {
  const color = ["blue", "green", "red", "yellow"].find((name) => tag.includes(name));
  return `<span class="tag ${color || ""}">${escapeHtml(tag)}</span>`;
}

function renderSlices() {
  if (focusedSlice !== null && !slices[focusedSlice]) focusedSlice = null;
  const used = countBy(slices.flatMap((slice) => slice.slots.filter(Boolean)));
  const visibleSlices =
    focusedSlice === null ? slices.map((slice, index) => ({ slice, index })) : [{ slice: slices[focusedSlice], index: focusedSlice }];
  els.sliceGrid.classList.toggle("focused", focusedSlice !== null);
  els.sliceGrid.innerHTML = visibleSlices.map(({ slice, index }) => sliceMarkup(slice, index, used)).join("");

  document.querySelectorAll(".slot").forEach((slot) => {
    slot.addEventListener("click", () => {
      selected = { slice: Number(slot.dataset.slice), slot: Number(slot.dataset.position) };
      renderSlices();
    });
    slot.addEventListener("dragover", (event) => {
      event.preventDefault();
      slot.classList.add("drag-over");
    });
    slot.addEventListener("dragleave", () => slot.classList.remove("drag-over"));
    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      slot.classList.remove("drag-over");
      selected = { slice: Number(slot.dataset.slice), slot: Number(slot.dataset.position) };
      placeTile(event.dataTransfer.getData("text/plain"));
    });
  });

  document.querySelectorAll("[data-clear-slot]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const [sliceIndex, slotIndex] = button.dataset.clearSlot.split(":").map(Number);
      slices[sliceIndex].slots[slotIndex] = null;
      selected = { slice: sliceIndex, slot: slotIndex };
      renderSlices();
      renderTileList();
    });
  });

  document.querySelectorAll(".slice-title input").forEach((input) => {
    input.addEventListener("input", () => {
      slices[Number(input.dataset.slice)].name = input.value;
    });
  });

  document.querySelectorAll("[data-toggle-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      const sliceIndex = Number(button.dataset.toggleFocus);
      focusedSlice = focusedSlice === sliceIndex ? null : sliceIndex;
      selected.slice = sliceIndex;
      renderSlices();
    });
  });

  document.querySelectorAll("[data-clear-slice]").forEach((button) => {
    button.addEventListener("click", () => {
      const slice = slices[Number(button.dataset.clearSlice)];
      slice.slots = Array(5).fill(null);
      renderSlices();
      renderTileList();
    });
  });
}

function sliceMarkup(slice, index, used) {
  const stats = totals(slice.slots);
  const isFocused = focusedSlice === index;
  return `
    <article class="slice">
      <div class="slice-top">
        <label class="slice-title">
          <span class="tile-id">${index + 1}</span>
          <input data-slice="${index}" value="${escapeAttr(slice.name)}" aria-label="Slice name" />
        </label>
        <div class="slice-tools">
          <button data-toggle-focus="${index}" title="${isFocused ? "Show all slices" : "Focus this slice"}" aria-label="${isFocused ? "Show all slices" : "Focus this slice"}">
            ${isFocused ? "All" : "Focus"}
          </button>
          <button data-clear-slice="${index}" title="Clear slice" aria-label="Clear slice">×</button>
        </div>
      </div>

      <div class="slice-board">
        <div class="home">HOME<br />SYSTEM</div>
        ${slice.slots.map((id, slotIndex) => slotMarkup(id, index, slotIndex)).join("")}
      </div>

      <div class="stats">
        ${stat("Optimal R", stats.optimal.res)}
        ${stat("Optimal I", stats.optimal.inf)}
        ${stat("Flex", stats.optimal.flex)}
        ${stat("Raw R", stats.resources)}
        ${stat("Raw I", stats.influence)}
        ${stat("Planets", stats.planets)}
      </div>

      <div class="slice-tags">
        ${Object.entries(stats.traits).map(([name, count]) => tagPill(`${name} ${count}`)).join("")}
        ${stats.skips.map((skip) => tagPill(`${skip} skip`)).join("")}
        ${stats.legendary ? tagPill(`legendary ${stats.legendary}`) : ""}
        ${Object.entries(stats.tags)
          .filter(([name]) => !["empty"].includes(name))
          .map(([name, count]) => tagPill(count > 1 ? `${name} ${count}` : name))
          .join("")}
      </div>

      <div class="warnings">${warnings(slice, used).join(" · ")}</div>
    </article>
  `;
}

function slotMarkup(id, sliceIndex, slotIndex) {
  const tile = tileById(id);
  const selectedClass = selected.slice === sliceIndex && selected.slot === slotIndex ? " drag-over" : "";
  if (!tile) {
    return `
      <button class="slot empty-slot${selectedClass}" data-slice="${sliceIndex}" data-position="${slotIndex}">
        <span class="slot-label">${SLOT_LABELS[slotIndex]}</span>
      </button>
    `;
  }

  return `
    <div class="slot${selectedClass}" data-slice="${sliceIndex}" data-position="${slotIndex}" data-tile-id="${tile.id}" data-kind="${tile.kind}" role="button" tabindex="0">
      <button class="slot-remove" data-clear-slot="${sliceIndex}:${slotIndex}" title="Remove system" aria-label="Remove system">×</button>
      <span class="hex">${tileFace(tile, "slot")}</span>
    </div>
  `;
}

function stat(label, value) {
  const tone = label.endsWith("R") ? "resource" : label.endsWith("I") ? "influence" : "neutral";
  return `<div class="stat stat-${tone}"><strong>${value}</strong><span>${label}</span></div>`;
}

function warnings(slice, used) {
  const out = [];
  const ids = slice.slots.filter(Boolean);
  const stats = totals(ids);
  if (ids.length < 5) out.push(`${5 - ids.length} open slot${5 - ids.length === 1 ? "" : "s"}`);
  ids.forEach((id) => {
    if (used[id] > 1) out.push(`${tileById(id)?.name || id} used ${used[id]}x`);
  });
  if (ids.length === 5 && stats.resources + stats.influence < 13) out.push("low total value");
  if (stats.planets < 4 && ids.length === 5) out.push("low planet count");
  return [...new Set(out)];
}

function placeTile(tileId) {
  if (!tileById(tileId)) return;
  slices[selected.slice].slots[selected.slot] = tileId;
  selected.slot = Math.min(selected.slot + 1, 4);
  renderSlices();
  renderTileList();
}

function makeSlice(index) {
  return { name: `Slice ${index + 1}`, slots: Array(5).fill(null) };
}

function syncSliceCountInput() {
  els.sliceCount.value = String(slices.length);
}

function setSliceCount(count) {
  const nextCount = Math.max(1, Math.min(12, Number(count) || 6));
  if (nextCount > slices.length) {
    while (slices.length < nextCount) slices.push(makeSlice(slices.length));
  } else {
    slices = slices.slice(0, nextCount);
  }
  selected.slice = Math.min(selected.slice, slices.length - 1);
  if (focusedSlice !== null && focusedSlice >= slices.length) focusedSlice = null;
  syncSliceCountInput();
  renderSlices();
  renderTileList();
}

function exportPayload() {
  return {
    app: "Milty Slice Studio",
    version: 1,
    exportedAt: new Date().toISOString(),
    slices: slices.map((slice) => ({
      name: slice.name,
      slots: slice.slots,
      systems: slice.slots.map((id) => tileById(id)?.name || null),
      totals: totals(slice.slots),
    })),
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

document.querySelectorAll(".set-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".set-tabs button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeSet = button.dataset.set;
    renderTileList();
  });
});

document.querySelectorAll(".filter-row button").forEach((button) => {
  button.addEventListener("click", () => {
    const next = activeFilter === button.dataset.filter ? "" : button.dataset.filter;
    activeFilter = next;
    document.querySelectorAll(".filter-row button").forEach((item) => item.classList.toggle("active", item.dataset.filter === next));
    renderTileList();
  });
});

els.search.addEventListener("input", renderTileList);

els.sliceCount.addEventListener("input", () => {
  if (els.sliceCount.value) setSliceCount(els.sliceCount.value);
});
els.sliceCount.addEventListener("change", () => setSliceCount(els.sliceCount.value));
els.sliceCount.addEventListener("blur", () => setSliceCount(els.sliceCount.value));

document.querySelector("#addSlice").addEventListener("click", () => {
  slices.push(makeSlice(slices.length));
  selected = { slice: slices.length - 1, slot: 0 };
  syncSliceCountInput();
  renderSlices();
  renderTileList();
});

document.querySelector("#randomSlices").addEventListener("click", autoPopulateRandomSlices);

document.querySelector("#resetSlices").addEventListener("click", () => {
  const count = slices.length || Number(els.sliceCount.value) || 6;
  slices = Array.from({ length: count }, (_, index) => makeSlice(index));
  selected = { slice: 0, slot: 0 };
  syncSliceCountInput();
  renderSlices();
  renderTileList();
});

document.querySelector("#exportSlices").addEventListener("click", () => {
  els.exportText.value = JSON.stringify(exportPayload(), null, 2);
  els.exportDialog.showModal();
});

document.querySelector("#copyExport").addEventListener("click", async () => {
  await navigator.clipboard.writeText(els.exportText.value);
});

document.querySelector("#importSlices").addEventListener("click", () => document.querySelector("#sliceImportInput").click());
document.querySelector("#sliceImportInput").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const payload = JSON.parse(await file.text());
  slices = payload.slices.map((slice, index) => ({
    name: slice.name || `Slice ${index + 1}`,
    slots: [...(slice.slots || [])].slice(0, 5).concat(Array(5).fill(null)).slice(0, 5),
  }));
  selected = { slice: 0, slot: 0 };
  syncSliceCountInput();
  renderSlices();
  renderTileList();
});

document.querySelector("#importTiles").addEventListener("click", () => document.querySelector("#tileImportInput").click());
document.querySelector("#tileImportInput").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const imported = JSON.parse(await file.text());
  const nextTiles = Array.isArray(imported) ? imported : imported.tiles;
  if (!Array.isArray(nextTiles)) return;
  const byId = new Map(tiles.map((tile) => [tile.id, tile]));
  nextTiles.forEach((tile) => byId.set(tile.id, tile));
  tiles = [...byId.values()];
  renderTileList();
  renderSlices();
});

syncSliceCountInput();
renderTileList();
renderSlices();

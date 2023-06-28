import { readFile } from "fs";
import { promisify } from "util";
import { Searcher } from "fast-fuzzy";
import { getDataSet, getDescriptionFr } from "pf2e-database";

export default defineEventHandler(async (event) => {
  let feats1 = await getDataSet("feats");
  let feats2 = await getDataSet("classfeatures");
  const heritages = await getDataSet("heritages");

  const feats = [
    ...Object.values(feats1),
    ...Object.values(feats2),
    ...Object.values(heritages),
  ];
  return {
    feats,
  };
});

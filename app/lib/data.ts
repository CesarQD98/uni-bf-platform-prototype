import { BFTypesFormatter } from "./data-parsers";

const API_URL = process.env.API_URL;

export async function fetchBFTypes() {
  const fetchingURL = `${API_URL}/adquisicion-tipo`;
  const BFtypes = await fetch(fetchingURL, {
    cache: "no-store",
  });

  if (!BFtypes.ok) throw new Error("Failed to fetch data!");

  const unformattedBFTypes = await BFtypes.json();

  const formattedTypes = BFTypesFormatter(unformattedBFTypes);

  return formattedTypes;
}

export async function getLastEntryNumber() {
  // This should be changed with an API query for the last entry
  const lastEntryNumber = 123;
  return lastEntryNumber;
}

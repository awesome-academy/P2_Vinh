import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const adapter = new LocalStorage("db");
const db = low(adapter);

export const fetchData = (option) => {
  const res = db.get(option).value();

  return res;
}

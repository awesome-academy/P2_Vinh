import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const adapter = new LocalStorage("db");
const db = low(adapter);

export const fetchData = (option, id) => {
  let res = null;
  if (id) {
    res = db.get(option).find(id).value();
  } else {
    res = db.get(option).value();
  }

  return res;
}

export const updateData = (option, id, data) => {
  const res = db.get(option).find(id).assign(data).write()

  return res;
}

export const addData = (option, data) => {
  const res = db.get(option).push(data).write();

  return res;
}

export const filterObject = (data, fields) => {
  for (let k in data) {
    if (fields.indexOf(k) < 0) {
      delete data[k];
    }
  }
  return data;
};

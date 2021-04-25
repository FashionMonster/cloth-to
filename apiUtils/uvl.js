//undefinedの場合、nullを返却
const uvl = (value) => {
  if (value === "" || value === undefined) {
    return null;
  } else {
    return value;
  }
};

export { uvl };

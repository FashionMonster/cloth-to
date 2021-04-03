const nvl = (value) => {
  if (value === null || value === undefined) {
    return "";
  } else {
    return value;
  }
};

export { nvl };

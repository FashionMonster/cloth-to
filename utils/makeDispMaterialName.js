const makeDispMaterialName = (materialName) => {
  if (materialName.length > 10) {
    return materialName.substr(0, 10) + "...";
  } else {
    return materialName;
  }
};

export { makeDispMaterialName };

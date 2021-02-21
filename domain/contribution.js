class Contribution {
  materialName;
  category;
  fabricStructure;
  color;
  pattern;
  unitPrice;
  supplier;
  comment;
  isDeleted;

  constructor(props) {
    Object.assign(this, props);
    Object.freeze(this);
  }
}

export { Contribution };

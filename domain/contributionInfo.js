class ContributionInfo {
  contributionId;
  groupId;
  userId;
  materialName;
  category;
  composition1;
  compositionRatio1;
  composition2;
  compositionRatio2;
  composition3;
  compositionRatio3;
  fabricStructure;
  color;
  pattern;
  processing;
  unitPrice;
  supplier;
  comment;
  isDeleted;

  constructor(props) {
    Object.assign(this, props);
    Object.freeze(this);
  }
}

export { ContributionInfo };

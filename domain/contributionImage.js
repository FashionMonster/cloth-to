class ContributionImage {
  contributionId;
  imageUrl1;
  imageUrl2;
  imageUrl3;
  imageUrl4;
  imageUrl5;

  constructor(props) {
    Object.assign(this, props);
    Object.freeze(this);
  }
}

export { ContributionImage };

class GroupAccount {
  groupId;
  groupPass;
  groupName;

  constructor(props) {
    Object.assign(this, props);
    Object.freeze(this);
  }
}

export { GroupAccount };

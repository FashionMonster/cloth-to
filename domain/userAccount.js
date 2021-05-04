class UserAccount {
  userId;
  userPass;
  userName;
  groupId;

  constructor(props) {
    Object.assign(this, props);
    Object.freeze(this);
  }
}

export { UserAccount };

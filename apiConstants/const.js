const CONST = {
  IMAGE_DISPLAY_LIMIT: 9,
  SALT_ROUNDS: 10,
  FILE_NAME: {
    //API
    SIGNUP: "signup.js",
    GET_USER_INFO: "getUserInfo.js",
    GET_ALL_GROUP_INFO: "getAllGroupInfo.js",
    LINK_USER_TO_GROUP: "linkUserToGroup.js",
    UPDATE_USER_INFO: "updateUserInfo.js",
    CREATE_GROUP_ACCOUNT: "createGroupAccount.js",
    GET_CONTRIBUTION: "getContribution.js",
    INSERT_CONTRIBUTION: "insertContribution.js",

    //インフラストラクチャ
    SELECT_USER_ACCOUNTS: "selectUserAccounts.js",
    INSERT_USER_ACCOUNTS: "insertUserAccounts.js",
    UPDATE_USER_ACCOUNTS: "updateUserAccounts.js",
    UPDATE_USER_ACCOUNTS_FOR_LINK_GROUP: "updateUserAccountsForLinkGroup.js",
    SELECT_GROUP_ACCOUNTS: "selectGroupAccounts.js",
    SELECT_ALL_GROUP_ACCOUNTS: "selectAllGroupAccounts.js",
    INSERT_GROUP_ACCOUNTS: "insertGroupAccounts.js",
    SELECT_COUNT_CONTRIBUTION_INFOS: "selectCountContributionInfos.js",
    SELECT_CONTRIBUTION_INFOS: "selectContributionInfos.js",
    INSERT_CONTRIBUTION_INFOS: "insertContributionInfos.js",
    INSERT_CONTRIBUTION_IMAGES: "insertContributionImages.js",
    SELECT_CONTRIBUTION_ID: "selectContributionId.js",
  },
};

export { CONST };

const models = require("../../models");

// let list = ["Item 1", "Item 2", "Item 3"];
// export default function handler(req, res) {
//   if (req.query.reqData !== "") {
//     list.push(req.query.reqData);
//   }
//   console.log(list);
//   res.json({ resData: list });
// }

let list = [];
export default function handler(req, res) {
  try {
    models.User.findAll().then((user) =>
      user.map((user) => {
        console.log(user.firstName, user.lastName, user.email);
        list.push(user.firstName);
        list.push(user.lastName);
        list.push(user.email);
      })
    );
  } catch (e) {
    console.log("ERROR!", e);
  }

  res.json({ resData: list });
}

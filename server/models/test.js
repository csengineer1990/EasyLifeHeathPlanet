const bcrypt = require("bcrypt");
async function genPassword(password) {
  const salt = await bcrypt.genSalt();
  password = await bcrypt.hash(password, salt);

  console.log(password);
}
const password = "test1234";
genPassword(password);

// $2b$10$aey/lW6WXMvkaePqg.ts8uwVRC1n7cr6QTb69BJX/qnVnW22O3pPC

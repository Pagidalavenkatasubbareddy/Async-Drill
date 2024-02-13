let listInformation = require("../callback2.cjs");

const boardID = "mcu453ed";
listInformation(boardID, (err, listInfo) => {
  if (err) {
    console.error("Error :", err);
  } else {
    console.log(listInfo);
  }
});
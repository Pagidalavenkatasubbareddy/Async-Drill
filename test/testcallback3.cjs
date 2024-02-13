
let cards= require("../callback3.cjs");
const listId="qwsa221";


cards(listId, (err, cardInfo) => {
  if (err) {
    console.error("Error :", err);
  } else {
    console.log(cardInfo);
  }
});

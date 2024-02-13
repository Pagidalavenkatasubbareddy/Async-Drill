const fs = require("fs");
const cardsJsonPath = "../data/cards_1.json";
function cardInformation(cardID, callback) {
  setTimeout(() => {
    fs.readFile(cardsJsonPath, "utf-8", (error, data) => {
      if (error)
      {
        callback(error, null);
      }
      try {
        const card = JSON.parse(data);
        const cardArr = Object.entries(card);

        const particularcardID = cardArr
          .map((card) => {
            let obj = {};
            obj[card[0]] = card[1];
            return obj;
          })
          .filter((card) => card[cardID])
          .map((card) => {
            return card[cardID];
          });
           if(particularcardID.length==0){
             callback('card not found',null);
           }
            else{
                callback(null,particularcardID)
            }
      } catch {
         callback("error while parsing", null);
        
      }
    });
  }, 2000);
}
 module.exports=cardInformation;

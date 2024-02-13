const fs = require("fs");
const listsJsonPath = "../data/lists_1.json";
function listInformation(listID, callback) {
  setTimeout(() => {
    fs.readFile(listsJsonPath, "utf-8", (error, data) => {
      if (error)
      {
        callback(error, null);
      }
      try {
        const list = JSON.parse(data);
       //  console.log(list);
        const listArr = Object.entries(list);

        const particularlistID = listArr
          .map((board) => {
            let obj = {};
            obj[board[0]] = board[1];
            return obj;
          }).filter((list) => list[listID])
         //console.log(particularlistID);
          .map((list) => {
            return list[listID]; 
          });
         
           if(particularlistID.length==0){
             callback('list not found',null);
           }
            else{
                callback(null,particularlistID)
            }
      } catch (error){
         callback("error while parsing", null);
        
      }
    });
  }, 2000);
}
module.exports =listInformation;
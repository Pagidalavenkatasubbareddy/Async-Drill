const fs = require('fs');
const boardsPath= "../data/boards_1.json";
function boardInformation( boardID, callback){
   // setTimeout(()=>{
        // let boards;
         fs.readFile(boardsPath, "utf-8", (err, data) => {
            if (err) {
              callback(err, null);
              return;
            }
            try {
              const board = JSON.parse(data)
    
             const particularboardID=board.filter((board)=> board.id==boardID)
              
              if (particularboardID.length!=0) {
                callback(null, particularboardID);
              } else {
                callback("Board not found", null);
              }
            } catch (error) {
              callback("Error parsing JSON", null);
            }
          });
      
   // }, 2000)
}
 module.exports = boardInformation;

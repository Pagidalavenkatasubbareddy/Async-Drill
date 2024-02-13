const fs = require('fs');
const boardJsonPath ='../data/boards_1.json';
const listsJsonPath='../data/list_1.json';
const cardsJsonPath= '../data/cards_1.json';
function getInformation(boardInformation, listInformation,cardInformation){
    setTimeout(()=>{
       
          let boards;
        fs.readFile(boardJsonPath,"utf-8",(error, data)=>{
            if( error){
                console.log( error);
            }
             try{
                 boards= JSON.parse(data);
                 getThanosid(boards,boardInformation, listInformation,cardInformation);

             }
             catch(error){
                callback("error while parsing", null)
             }
        })
    }, 2000)
}
 function getThanosid(boards,boardInformation, listInformation,cardInformation){
    try{  
       // const board = JSON.parse(boards)
        //console.log(board);
        // console.log(boardSt);
        const particularboardID=boards.filter((board)=> board.name==='Thanos')
        boardInformation(particularboardID[0].id, ( (error, data)=>{
           if( error){
            console.log( error);
           }
            else{
               listInformation(particularboardID[0].id,(error, data)=>{
                if( error){
                     console.log( error);
                }
                 else{
                   //console.log( data[0]);
                   getMindandSpaceId(data[0],cardInformation);
                 }
               })
            }
        }))
        // Console.log
     } catch(error){
         console.log("Error in setTimeout callback:", error);
     }
 }
  function getMindandSpaceId(lists, cardInformation){
    const particularlistID=lists.map( function map(list){
     cardInformation(list.id,function callback(error, data){
         if( error){
             console.log(error);
         }
          else{
            console.log(data);
          }
     });
     });
  }
 module.exports=getInformation;
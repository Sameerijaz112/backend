const postTestingData = (req,res)=> {
try {let Data=req.body
     res.json({
        Message:'You have reached the end point',
        Data:true,
        Result:Data
     });
} catch (error) {
    res.json({
        Message:error.Message,
        Data:false,
        Result:null
     });
}
}

const getdatatesting = (req,res) => {
try {
   let data = 'Okay'
   res.json({
      Message:'You Have Reached the Get EndPoint',
      Data:true,
      Result:data
      
   })

} catch (error) {
   res.json({
      Message:error.Message,
      Data:false,
      Result:null
   });
}


}

module.exports={postTestingData,
   getdatatesting}


// const formApi=(req,res)=>{
//     try {
//         let data=req.body
//         res.json({
//             message:'you have reached',
//             result:data
//         })
//     } catch (error) {
        
//     }
// }


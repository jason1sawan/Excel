const express = require("express");
const xlsx = require("xlsx");
var cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3030;

// your code
app.get('/Students',(req,res)=>{
    const wb = xlsx.readFile("Data.xlsx");
    let ws = wb.Sheets['Students'];
    let Data =xlsx.utils.sheet_to_json(ws);
    res.send(Data)
})


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

const mysql=require("mysql");
var mysqlConnection=mysql.createConnection({
    host : "localhost",
    user :"root",
    password :"Ganesh@2001",
    database : "DBS",
    multipleStatements : true//multiple satements in one query
});
mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("connected");
    }
    else
    {
        console.log(err);
    }
})
module.exports=mysqlConnection;
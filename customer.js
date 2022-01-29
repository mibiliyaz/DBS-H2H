const express = require("express");
const mysqlConnection = require("../connection");

const Router = express.Router();
Router.get("/",(req,res)=>{
    mysqlConnection.query("select resedential country from  customer_info join customer_acct_info where customer_info.party_key=customer_acct_info.party_key and customer_acct_info.account_key="+[req.body.accountkey],(err,rows,fields)=>{
        if(!err)
        {
            var place=rows;
        }
    
    mysqlConnection.query("SELECT count(INN) as num from customer_transactions where account_key="+[req.body.accountkey] ,(err,rows,fields)=>{
        if(!err)
        {
            if(rows>10)
            {
                var riskrating="HIGH";
                var riskratingreason="H1";
                res.send(riskrating,riskratingreason,place);
            }
            else if(rows>6)
            {
                 riskrating="MEDIUM";
                 riskratingreason="M1";
                res.send(riskrating,riskratingreason,place);
            }
            else
            {
                riskrating="LOW";
                 riskratingreason="L1";
                res.send(riskrating,riskratingreason,place);
            }
            
        }
        else{
            console.log(err);
        }
    })
    mysqlConnection.query("SELECT count(OUT) as num from customer_transactions where account_key="+[req.body.accountkey] ,(err,rows,fields)=>{
        if(!err)
        {
            if(rows>10)
            {
                var riskrating="HIGH";
                var riskratingreason="H1";
                res.send(riskrating,riskratingreason,place);
            }
            else if(rows>6)
            {
                 riskrating="MEDIUM";
                 riskratingreason="M1";
                res.send(riskrating,riskratingreason,place);
            }
            else
            {
                riskrating="LOW";
                 riskratingreason="L1";
                res.send(riskrating,riskratingreason,place);
            }
            
            
        }
        else{
            console.log(err);
        }
    })
    mysqlConnection.query("SELECT SUM(transaction_amount) as S from customer_transactions where transaction_type='INN' AND account_key="+[req.body.accountkey] ,(err,S,fields)=>{
        if(!err)
        {
            if(S>1000)
            {
                var riskrating="HIGH";
                var riskratingreason="H2";
                res.send(riskrating,riskratingreason,place);
            }
            else if(S>600 && S<1000)
            {
                 riskrating="MEDIUM";
                 riskratingreason="M2";
                res.send(riskrating,riskratingreason,place);
            }
            else
            {
                riskrating="LOW";
                 riskratingreason="L2";
                res.send(riskrating,riskratingreason,place);
            }
            
            
        }
        else{
            console.log(err);
        }
    })
    mysqlConnection.query("SELECT SUM(transaction_amount) as S from customer_transactions where transaction_type='OUT' AND account_key="+[req.body.accountkey] ,(err,S,fields)=>{
        if(!err)
        {
            if(S>800)
            {
                var riskrating="HIGH";
                var riskratingreason="H3";
                res.send(riskrating,riskratingreason,place);
            }
            else if(S>600 && S<1000)
            {
                 riskrating="MEDIUM";
                 riskratingreason="M3";
                res.send(riskrating,riskratingreason,place);
            }
            else
            {
                riskrating="LOW";
                 riskratingreason="L3";
                res.send(riskrating,riskratingreason,place);
            }
            
            
        }
        else{
            console.log(err);
        }
    })
    mysqlConnection.query("SELECT transaction_date,count(*) as td  from customer_transactions account_key="+[req.body.accountkey] ,(err,td,fields)=>{
        if(!err)
        {
            if(td>20)
            {
                var riskrating="HIGH";
                var riskratingreason="H4";
                res.send(riskrating,riskratingreason,place);
            }
            else if(td>6 && td<10)
            {
                 riskrating="MEDIUM";
                 riskratingreason="M4";
                res.send(riskrating,riskratingreason,place);
            }
            else
            {
                riskrating="LOW";
                 riskratingreason="L4";
                res.send(riskrating,riskratingreason,place);
            }
           
            
        }
        else{
            console.log(err);
        }
    })
})

})

module.exports=Router;
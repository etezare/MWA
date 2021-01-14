module.exports.sumNumber=function(req,res){
    var num1=parseInt(req.params.number);
    var num2=parseInt(req.query.number2);
    var sum=num1+num2;
    var total="sum of "+num1+" + "+num2+" = "+sum;
    console.log("Sum of number is ",total);
    res.status(200).json(total);
}

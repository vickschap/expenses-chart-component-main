const exp = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

var amtsarray = exp.map((element) => element.amount);
var maxexp = Math.max(...amtsarray);
var exp_mon = exp.find((d) => d.day === "mon").amount;
var exp_tue = exp.find((d) => d.day === "tue").amount;
var exp_wed = exp.find((d) => d.day === "wed").amount;
var exp_thu = exp.find((d) => d.day === "thu").amount;
var exp_fri = exp.find((d) => d.day === "fri").amount;
var exp_sat = exp.find((d) => d.day === "sat").amount;
var exp_sun = exp.find((d) => d.day === "sun").amount;


document.getElementById("mon").style.height = ((exp_mon/maxexp)*150)+"px";
document.getElementById("amt_mon").innerText = "$"+exp_mon;
document.getElementById("tue").style.height = ((exp_tue/maxexp)*150)+"px";
document.getElementById("amt_tue").innerText = "$"+exp_tue;
document.getElementById("wed").style.height = ((exp_wed/maxexp)*150)+"px";
document.getElementById("amt_wed").innerText = "$"+exp_wed;
document.getElementById("thu").style.height = ((exp_thu/maxexp)*150)+"px";
document.getElementById("amt_thu").innerText = "$"+exp_thu;
document.getElementById("fri").style.height = ((exp_fri/maxexp)*150)+"px";
document.getElementById("amt_fri").innerText = "$"+exp_fri;
document.getElementById("sat").style.height = ((exp_sat/maxexp)*150)+"px";
document.getElementById("amt_sat").innerText = "$"+exp_sat;
document.getElementById("sun").style.height = ((exp_sun/maxexp)*150)+"px";
document.getElementById("amt_sun").innerText = "$"+exp_sun;

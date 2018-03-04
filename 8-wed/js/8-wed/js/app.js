'use strict';


function salmonCookieShop(location, minCustomerPerHr, maxCustomerPerHr, aveCookiePerCust, totalCookies){
  this.hours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"],
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.location = location;
  this.minCustomerPerHr = minCustomerPerHr;
  this.maxCustomerPerHr = maxCustomerPerHr;
  this.aveCookiePerCust = aveCookiePerCust;
  this.totalCookies = 0;

  //Generates the number of cutomers per each hour in array
  for(var i=0; i < this.hours.length; i++){
    var rand = Math.floor(Math.random() * 65);
    this.customersPerHour.push(rand);
  }
  //Generates average cookies per each hour in array
  for(var i= 0; i < this.hours.length;i++) {
    var count = Math.floor(this.aveCookiePerCust * this.customersPerHour[i]);
    this.cookiesPerHour.push(count);
  };
  //append cookies per hour to table
  for(var i=0; i < this.hours.length; i++){
    var node = document.createElement("td");
    var textnode = document.createTextNode(this.cookiesPerHour[i]);
    node.appendChild(textnode);
    document.getElementById(this.location).appendChild(node)
  }
  //get total cookies
  for(var i=0;i<this.hours.length;i++){
    this.totalCookies = this.totalCookies + this.cookiesPerHour[i];

  }
  //append total cookies
  var node = document.createElement("td");
  var textnode = document.createTextNode(this.totalCookies);
  node.appendChild(textnode);
  document.getElementById(this.location).appendChild(node)

}//end of constructor



//Get form data
var formObj = document.getElementById("formInfo")
//Event listener action
formObj.addEventListener("submit",function(event){
  event.preventDefault();
//Create table row
  var node = document.createElement("tr");
//Takes name input
  var textnode = document.createTextNode(event.target.location.value);
//Sets table row id to the name input value
  node.setAttribute("id",event.target.location.value);
//Appeneds the text to the table row
  node.appendChild(textnode);




  var tableNum = document.getElementById("dataT").rows.length;
  var table = document.getElementById("dataT");
  tableNum -= 1;
  var row = table.insertRow(tableNum);

  //append total cookies
  var nodeTD = document.createElement("td");
  var textnode = document.createTextNode(this.totalCookies);
  node.appendChild(textnode);
  document.getElementById(this.location).appendChild(node);

  // var cell1 = row.insertCell(0);
  // cell1.appendChild(node);








//Takes form data and creates an object
  var something  = new salmonCookieShop(event.target.location.value,event.target.minCustomerPerHr.value,event.target.maxCustomerPerHr.value,event.target.aveCustomerPerHr.value);

// Clears input field
  event.target.location.value = null;
  event.target.maxCustomerPerHr.value = null;
  event.target.minCustomerPerHr.value = null;
  event.target.aveCustomerPerHr.value = null;
})


// Cookie shop calls/table rows
var something1  = new salmonCookieShop("1st and Pike",23,65,6.3);
var something2  = new salmonCookieShop("SeaTac",23,65,6.3);
var something3  = new salmonCookieShop("Seattle Center",23,65,6.3);
var something4  = new salmonCookieShop("Capitol Hill",23,65,6.3);
var something5  = new salmonCookieShop("Alki",23,65,6.3);

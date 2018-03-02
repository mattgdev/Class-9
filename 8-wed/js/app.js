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

  //cutomers per hour in array
  for(var i=0; i < this.hours.length; i++){
    var rand = Math.floor(Math.random() * 65);
    this.customersPerHour.push(rand);
  }
  //average cookies per hour in array
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



//form data
var formObj = document.getElementById("formInfo")
formObj.addEventListener("submit",function(event){
event.preventDefault();

// console.log(event.target.maxCustomerPerHr.value);
var node = document.createElement("tr");
var textnode = document.createTextNode(event.target.location.value);
node.setAttribute("id",event.target.location.value);
node.appendChild(textnode);
document.getElementById("dataT").appendChild(node);

var something  = new salmonCookieShop(event.target.location.value,
                                      event.target.minCustomerPerHr.value,
                                      event.target.maxCustomerPerHr.value,
                                      event.target.aveCustomerPerHr.value);

event.target.location.value = null;
event.target.maxCustomerPerHr.value = null;
event.target.minCustomerPerHr.value = null;
event.target.aveCustomerPerHr.value = null;
})





var something1  = new salmonCookieShop("1st and Pike",23,65,6.3);
var something2  = new salmonCookieShop("SeaTac",23,65,6.3);
var something3  = new salmonCookieShop("Seattle Center",23,65,6.3);
var something4  = new salmonCookieShop("Capitol Hill",23,65,6.3);
var something5  = new salmonCookieShop("Alki",23,65,6.3);

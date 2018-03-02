'use strict';


var hours = ['6am', '7am', '8am','9am', '10am', '11am','12pm', '1pm', '2pm','3pm', '4pm', '5pm','6pm', '7pm'];

var pikePlace = {
  minCustomersPerHour:23,
  maxCustomersPerHour:65,
  aveCookiesPerCustomer:6.3,
  customerEachHour: [],
  calcCustomerEachHour: function(){
    for(var i=0; i<hours.length;i++){
      var oneHourCustomers = Math.floor(Math.random()*(this.maxCustomersPerHour -
                                                      this.minCustomersPerHour +1))+this.minCustomersPerHour;
      console.log(oneHourCustomers);
    }
  },
  cookiesSoldEachHour:[],
  calcCookiesSoldEachHour: function(){
  this.calcCustomerEachHour();
  for(var i=0;i<hour.length;i++){
      var hourlyCookies = math.ceil(this.customerEachHour[i]* this.aveCookiesPerCustomer);
      this.totalCookiesSoldEachHour.push(hourlyCookies);
      this.totalCookiesSoldPerDay = hourlyCookies;
    }
  },

  totalCookiesSoldPerDay: 8,
  loctionName: 'First and Pike',
  renders: function(){
    this.calcCookiesSoldEachHour();
      for(var i= 0; i < hours.length; i++);
      var liEl = document.createElement('li');
      liEl.textContext = hours[i]+':'+this.cookiesSoldEachHour+'cookies';
  }
};

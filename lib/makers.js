var toyota = {
  name: 'Toyota',
  establishedDate: '12-01-2002',
  address: address1,
  display: function(){
    return this.name + " was established in " + this.establishedDate + " and is located in " + address1.display();
  }
};

var ford = {
  name: 'Ford',
  establishedDate: '01-01-2004',
  address: address2,
  display: function(){
    return this.name + " was established in " + this.establishedDate + " and is located in " + address2.display();
  }
};

var dodge = {
  name: 'Dodge',
  establishedDate: '03-01-2012',
  address: address3,
  display: function(){
    return this.name + " was established in " + this.establishedDate + " and is located in " + address3.display();
  }
};

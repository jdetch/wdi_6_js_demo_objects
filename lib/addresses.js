var address1 = {
  street: '123 Main st',
  city: 'Boston',
  state: 'MA',
  country: 'USA',
  display: function() {
    return this.street + ", " + this.city + ", " + this.state + " " + this.country;
  }
};

var address2 = {
  street: '44 Arch st',
  city: 'New Orleans',
  state: 'LA',
  country: 'USA',
  display: function() {
    return this.street + ", " + this.city + ", " + this.state + " " + this.country;
  }
};

var address3 = {
  street: '4 School st',
  city: 'San Francisco',
  state: 'CA',
  country: 'USA',
  display: function() {
    return this.street + ", " + this.city + ", " + this.state + " " + this.country;
  }
};

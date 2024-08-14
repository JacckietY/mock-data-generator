// mock-data-generator.js

class MockDataGenerator {

    // Generate a random integer between min and max (inclusive)
    static getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    // Generate a random name
    static generateName() {
      const names = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Daisy'];
      const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'];
      const firstName = names[this.getRandomInt(0, names.length - 1)];
      const lastName = lastNames[this.getRandomInt(0, lastNames.length - 1)];
      return `${firstName} ${lastName}`;
    }
  
    // Generate a random address
    static generateAddress() {
      const streets = ['Main St', 'Second St', 'Third St', 'Fourth St'];
      const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
      const states = ['NY', 'CA', 'IL', 'TX', 'AZ'];
      const street = `${this.getRandomInt(1, 9999)} ${streets[this.getRandomInt(0, streets.length - 1)]}`;
      const city = cities[this.getRandomInt(0, cities.length - 1)];
      const state = states[this.getRandomInt(0, states.length - 1)];
      const zip = `${this.getRandomInt(10000, 99999)}`;
      return `${street}, ${city}, ${state} ${zip}`;
    }
  
    // Generate a random email address
    static generateEmail() {
      const domains = ['example.com', 'test.com', 'demo.com'];
      const name = this.generateName().replace(/ /g, '.').toLowerCase();
      const domain = domains[this.getRandomInt(0, domains.length - 1)];
      return `${name}@${domain}`;
    }
  
    // Generate a random date within the last 30 days
    static generateRecentDate() {
      const now = new Date();
      const pastDate = new Date();
      pastDate.setDate(now.getDate() - this.getRandomInt(1, 30));
      return pastDate.toISOString().split('T')[0];
    }
  
    // Generate a random user profile
    static generateUserProfile() {
      return {
        name: this.generateName(),
        address: this.generateAddress(),
        email: this.generateEmail(),
        registrationDate: this.generateRecentDate()
      };
    }
  }
  
  module.exports = MockDataGenerator;
  
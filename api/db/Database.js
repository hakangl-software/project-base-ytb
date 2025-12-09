// Burada bağlantı ayarlarını ve parametrelerini yaptık.


const mongoose = require("mongoose");

let instance = null;
class Database {
  constructor() {
    // Nesnenin ilk ayarlarını yapan otomatik başlangıç fonksiyonu.
    if (!instance) {
      this.mongoConnection = null;
      instance = this;
    }
    return instance;
  }

  async conncect(options) {
    try {
       console.log("DB Connecting...")
    // connect yaparken kullanılacak parametreler
    let db = await mongoose.connect(options.CONNECTION_STRING);
    this.mongoConnection = db;
    console.log("DB Connected.")
    
    } catch (err) {
      console.error(err);
      process.exit(1);
    }

  }
}

module.exports = Database;
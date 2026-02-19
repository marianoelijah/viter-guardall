import bcrypt from 'bcrypt';

   // THIS IS FOR THE PASSWORD HASHING TEST, NOT FOR PRODUCTION USE.
   // THIS WAS BEING USED IN TESTING THE BCRYPT LIBRARY, NOT FOR THE ACTUAL APPLICATION. DO NOT USE THIS IN PRODUCTION WITHOUT PROPER SECURITY MEASURES.
   // ALSO IT IS USED IN THESIS DOCUMENTATION TO SHOW HOW PASSWORD ARE HASHED, SO DO NOT DELETE THIS FILE OR CONTENTS OF THIS FILE.
   
const password = "iwu2l&stv"; // The original password
const saltRounds = 10;

console.log("Hashing password...");
bcrypt.hash(password, saltRounds).then(hash => {
    console.log("Hashed Password:", hash);

    // Hashing password...
    // Hashed Password: $2b$10$6uCTibGyOx9/1G8OlcHQZOvqtK23oVeWyZIBw1iBiyBRa/z1T2V0G

    // Simulating login: Comparing entered password with stored hash
    bcrypt.compare(password, hash).then(result => {
        if (result) {
            console.log("✅ Password is correct!");
        } else {
            console.log("❌ Password is incorrect!");
        }
    }).catch(err => console.error(err));

}).catch(err => console.error(err));
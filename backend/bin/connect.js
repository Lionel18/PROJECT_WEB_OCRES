var mongoose = require('mongoose')




var connectToDatabase = function (c) {
    mongoose.set('useNewUrlParser', true);

    mongoose.connect("mongodb+srv://admin:admin@cluster0.stbu3.mongodb.net/<dbname>?retryWrites=true&w=majority")
    var database = mongoose.connection
    database.on("error", console.error.bind(console, " Connection error"));
    database.once("open", function () {
        console.log('Connexion à la base de données réussie');
        c();
    });
}


module.exports.connectToDatabase = connectToDatabase;
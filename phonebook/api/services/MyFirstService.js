var MyFirstService = {
  GetAllContact: function (callback) {
    ContactDetails.find({}).exec(function (err, records) {

      return callback(err, records);
    });
  },



  AddContacts: function (details, callback) {
            ContactDetails.create({
             name: details.name,
              Phonenumber: details.Phonenumber
           }).exec(function(err,details){
             return callback(err,'Inserted: '+details.name+" "+details.Phonenumber);
             });


},}


module.exports = MyFirstService;

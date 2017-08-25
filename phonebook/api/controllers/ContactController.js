module.exports = {



  /**
   * `ContactControllerController.GetAllContacts()`
   */

  GetAllContacts: function (req, res) {
    MyFirstService.GetAllContact(function(err, records) {
         if (!err) {
        return res.json(records);
            }else{
              return res.notFound();
            }
    });


  },


  AddContact: function (req, res) {
    MyFirstService.AddContacts({
      name: req.param('name'),
      Phonenumber: req.param('Phonenumber')
    }, function (err, message) {
      if (!err) {
        return res.send(message);
      } else {
        return res.notFound();
      }
    });


  },
}




const Flight = require('../models/flights');

module.exports = {
    add:addDestination
}

function addDestination(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
           
            res.redirect(`/flights/${req.params.id}`)
        });
    })
}
const Flight = require('../models/flights');

module.exports = {
    create
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            if (err) {
                console.log(err)
            }
            res.redirect(`/flights/${req.params.id}`)
        });
    })
}
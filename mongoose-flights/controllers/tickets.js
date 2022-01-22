const Flight = require('../models/flights');
const Ticket = require("../models/tickets");
module.exports = {
  newTicket,
  addTicket
}
function newTicket(req, res) {
    const flight = req.params.id
    res.render('tickets/new', { flight })
}
function addTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        req.body.flight = req.params.id
        req.body.price = parseInt(req.body.price);
        console.log(req.body)
        const ticket = new Ticket(req.body);
        ticket.save(function(err) {
           res.redirect(`/flights/${ flight.id }`)
        })
    })
}
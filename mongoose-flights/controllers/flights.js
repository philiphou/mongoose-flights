const Flight = require ("../models/flights");
const Ticket = require ("../models/tickets")
module.exports = {
    index,
    new: newFlight,
    create,
    show,
    deleteFlight
};
function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(flights);
        res.render('flights/index', { flights })
    })
}

function newFlight(req, res) {
   
    res.render('flights/new');
}

function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function(err, doc) {
      res.redirect('/flights')
    })
}
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({ flight: flight._id }, function(err, tickets) {
           res.render('flights/show', { flight, tickets })
        })
    })
};
    
function deleteFlight(req,res){
    Flight.findByIdAndDelete(req.params.id,function(err){
        if(err){
            console.log(err)
        }else{
             console.log("Flight Deleted")
        }
    })
    res.redirect("/flights")
}
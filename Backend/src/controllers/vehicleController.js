const Vehicle = require('../schema/vehicleSchema');

const createVehicle = async (req, res) => {
  if (req.body) {
    const vehicle = new Vehicle(req.body);
    vehicle.save()
        .then(data => {
          res.status(200).send({ data: data });
        })
        .catch(error => {
          res.status(500).send({ error: error.message });
        });
  }
}

const getVehicle = async (req, res) => {
  await Vehicle.find()
      .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
}

// const calculateAmount = async (req, res) => {
//     if (req.params && req.params && req.params.name) {
//         const vehicle = await Vehicle.findById(req.params.id)
//         let amount = vehicle.amount;
//         let type = req.params.name;
//
//         if(type === "Short Trip"){
//             amount += amount * (10/100.0);
//         }else if(type === "Long Trip"){
//             amount += amount * (20/100.0);
//         }else if(type === "Weddings"){
//             amount += amount * (30/100.0);
//         }else if(type === "Special Occasions"){
//             amount += amount * (40/100.0);
//         }
//
//         res.status(200).send({ totalAmount: amount });
//     }
// }

module.exports = {
    createVehicle,
    getVehicle,
    // calculateAmount
};
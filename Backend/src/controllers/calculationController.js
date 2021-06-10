const Category = require('../schema/categoriesSchema');
const Vehicle = require('../schema/vehicleSchema');

const calculateAmount = async (req, res) => {
    if (req.body ) {
        console.log("arrived");

         const category = await Category.findById(req.body.cId);
        const vehicle = await Vehicle.findById(req.body.vId);

        let cAmount = category.valueOf().amount;
        let vAmount = vehicle.valueOf().amount;

        console.log(cAmount);
        console.log(vAmount);

        let total = cAmount + vAmount + parseInt(req.body.durat)

        res.status(200).send({ data: total });

    }
        // const vehicle = await Vehicle.findById(req.params.id)
        // let amount = vehicle.amount;
        // let type = req.params.name;
        //
        // if(type === "Short Trip"){
        //     amount += amount * (10/100.0);
        // }else if(type === "Long Trip"){
        //     amount += amount * (20/100.0);
        // }else if(type === "Weddings"){
        //     amount += amount * (30/100.0);
        // }else if(type === "Special Occasions"){
        //     amount += amount * (40/100.0);
        // }

    //     res.status(200).send({ data: 1000 });

}

module.exports = {
    calculateAmount
};
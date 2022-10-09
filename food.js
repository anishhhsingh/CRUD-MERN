const mongoose = require("mongoose");

const foodsSchema = {
    foodName: {
        type: String,
        required: true,
    },
    daysSinceIAte: {
        type: Number,
        required: true,
    },
};

const Food = mongoose.model("Food", foodsSchema);
module.exports = Food;

var mongoose=require("mongoose");
var publisherSchema=new mongoose.Schema({
    name:String,
    location:{
        // address:String,
        coordinates:{
            type:[Number]
            // index="2dsphere"
        }
    }
})



var gameSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:Number,
    designers:[String],
    minPlayers:{
        type:Number,
        min:1,
        max:10
    },
    maxPlayers:{
        type:Number,
        min:1,
        max:10
    },
    rate:{
        type:Number,
        min:1,
        max:5,
        "default":1
    },
    year:{
        type:Number,
        length:4
    },
    minAge:Number,
    location:{
        address:String,
        coordinates:{
            type:[Number],
            index:"2dsphere"
        }


    },
    designers:[String],
    publisher:publisherSchema
})
mongoose.model("Game",gameSchema,"games");
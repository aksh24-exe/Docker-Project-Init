const mongoose= require("mongoose");
console.log("connect");



const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
        email:{type: String , unique: true},
        password: String,
        firstName:String,
        lastName:String,
});

const adminSchema = new Schema({
    email:{type: String , unique: true},
    password: String,
    firstName:String,
    lastName:String,
});

const courceSchema  = new Schema({
        title: String,
        description: String,
        price: Number,
        imageUrl: String,
        courceId: ObjectId,
});

const purchaseSchema = new Schema ({
        userId: ObjectId,
        courceId: ObjectId,

});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courceModel = mongoose.model("cource", courceSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);


module.export= ({
        userModel,
        adminModel,
        courceModel,
        purchaseModel,
})


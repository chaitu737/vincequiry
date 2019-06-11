const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    fullName:{type: String, required: true, unique: false},
    email:{ type: String, required: true, unique: true},
    fatherName: { type: String, required: true, unique: false},
    motherName: { type: String, required: true, unique: false},
    mobilenumber:{type: Number, required: true, unique: true},
     file:{data: Buffer, contentType:String}
    

});

module.exports = mongoose.model('Student', studentSchema);
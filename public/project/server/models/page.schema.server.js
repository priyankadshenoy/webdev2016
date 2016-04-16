var mongoose = require("mongoose");
var FieldSchema = require("./field.schema.server.js")();

module.exports = function () {
    var PageSchema = mongoose.Schema({
        userId:String,
        title:String,
        fields:[FieldSchema],
        created:{type:Date,default:new Date()},
        updated:{type:Date,default:new Date()}
    },{collection:'page'});
    return PageSchema;
};
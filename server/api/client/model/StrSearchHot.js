"use strict";

const mongoose = require('mongoose');

var config = require('./config');

const searchHotSchema = {
    _id: mongoose.Schema.ObjectId,
    
	times: {type: Number},
    keywords: {type: String, required: true, trim: true}
}

module.exports = mongoose.Schema(searchHotSchema, config.schemaOptions);

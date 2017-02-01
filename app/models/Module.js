'use strict';

const mongoose = require('mongoose');
const ModuleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
    	type: String,
    	require: false
    }
});

const Module = mongoose.model('module', ModuleSchema);
module.exports = Module;

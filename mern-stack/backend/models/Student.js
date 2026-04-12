const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    course: { type: String, required: true },
    description: { type: String } // Adding a bit more than the minimal lab requirements for aesthetics
});

module.exports = mongoose.model('Student', StudentSchema);

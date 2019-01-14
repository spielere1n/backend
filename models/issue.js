const mongoose = require('mongoose');

let issue = mongoose.Schema({
    title: {type: String},
    responsible: {type: String},
    description: {type: String},
    severity: {type: String}
});

let Issue = module.exports = mongoose.model('Issue', issue);

/*let Issue = new Schema({
    title: { type: String },
    responsible: { type: String },
    description: { type: String },
    severity: { type: String },
    status: { type: String, default: 'Open' }
});

export default mongoose.model('Issue', Issue);*/
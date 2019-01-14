const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Issue = require('./models/issue');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://[app]/issues');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('/', router);

router.route('/issues').get((req, res) => {
    Issue.find((err, issues) => {
        if(err) {
            console.log(err);
        } else {
            res.json(issues);
        }
    });
});

router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if(err) {
            console.log(err);
        } else {
            res.json(issue);
        }
    })
});

app.listen(4000, () => {
    console.log(`Express server running on port 4000`);
});
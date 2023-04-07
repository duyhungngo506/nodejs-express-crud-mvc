const path = require('path');
const express = require('express');
var methodOverride = require('method-override');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const app = express();
const port = 3000;
const SortMiddlewares = require('./app/middlewares/SortMiddlewares');
const route = require('./routes');
const db = require('./config/db');

// connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));

// Custom Middlewares
app.use(SortMiddlewares);

// Http logger
// app.use(morgan("combined"));
// template engine
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
        sortable: (field, sort) => {
            const sortType = sort.column === field ? sort.type : 'default';
            const icons = {
                default: 'fa fa-sort',
                asc: 'fa fa-sort-asc',
                desc: 'fa fa-sort-desc'
            };

            const types = {
                default: 'desc',
                asc: 'desc',
                desc: 'asc'
            };
            const icon = icons[sortType];
            const type = types[sortType];

            return `<a href="?_sort&column=${field}&type=${type}"><i class="${icon}" aria-hidden="true"></i></a>`;
        },
        formatDateTime(date) {
            const p = new Intl.DateTimeFormat('en', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }).formatToParts(date).reduce((acc, part) => {
                acc[part.type] = part.value;
                return acc;
            }, {});
            return `${
                p.year
            }-${
                p.month
            }-${
                p.day
            } ${
                p.hour
            }:${
                p.minute
            }:${
                p.second
            }`;
        },
        formatDate(date) {
            const p = new Intl.DateTimeFormat('en', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }).formatToParts(date).reduce((acc, part) => {
                acc[part.type] = part.value;
                return acc;
            }, {});
            return `${
                p.year
            }-${
                p.month
            }-${
                p.day
            }`;
        },
        handleGender(gender, OptionValue) {
            if (gender === OptionValue) {
                return "selected";
            }
        }
    }
}),);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

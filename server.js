const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz')
const jobsheetRoute = require ('./router/jobsheet')
const kataRoute = require ('./router/kata')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const db = require('./models')
db.sequelize.sync()

app.get('/', (req,res)=> {
    res.send('Hello Xerapan Indo')
});

app.use('/api/quiz', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)
app.use('/api/kata', kataRoute)

app.listen(port, () => console.log(`App listening on port http://localhost:${port}`));
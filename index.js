const express = require('express');
const app = express();
const connectDB = require('./config/db');

//Connect DATABASE
connectDB(); 


//Middleware
app.use(express.json({ extended: false }))


//Define Routes
app.use('/', require('./routes/index'));
app.use("/api/url", require("./routes/url"));

//Define PORT
app.set('port','3000')









app.listen(app.get('port'), () => console.log(`>>>>>>>> Server runnng on port ${app.get('port')}`))
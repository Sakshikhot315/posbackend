const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sakshikhot315:sakshi311@cluster0.d49zswd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
// mongoose.connect('mongodb://localhost/farmfresh')    
.then(() => {
        console.log("MongoDB Connected")
    }).catch(() => {
        console.log("MongoDB Not Connected")
    })
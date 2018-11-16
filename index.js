const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//kalo variabel berubah ubah let kalo ga berubah ubah const
const controller = require('./controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);
// app.use(bodyParser.json());
// app.get('/', function (req, res) {
//     res.send('hello world');
// });
// //ngambil dari file yg dari luar, kalo ga pake titik ngambil file di dalem node_modules
// app.use('/',require('./app/home'));

// app.post('/post', function(req,res){
// //post selalu make body
//     // req.body.username; 
//     // req.body.umur; 
    
//     res.send(req.body);
//     console.log(req.body);
// });
app.listen(3000);

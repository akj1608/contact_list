const { name } = require('ejs');
const express = require('express');

const path = require('path');

const port = 5000;

const app = express();
app.use(express.urlencoded());
app.use(express.static('assests'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


var contactList=[
    {
    name :"Arpan",
    phone :"9876543210",
    email:" xyz@gmail.com"
    },
    {
    name :"Tarpan",
    phone :"9876543211",  
    email:" xyza@gmail.com"
    },
    {
        name :"Darpan",
        phone :"9876543218",  
        email:" xyzb@gmail.com"
        },
        {
            name :"ddarpan",
            phone :"9876543219",  
            email:" xycvz@gmail.com"
            },
]

app.get('/',function(req,res){
    return res.render('home',{
        title:'My-Contact-list',
        contact_list:contactList
    });
});

app.get('/practice',function(req,res){
    return res.render('practice',{title:'PlayGround'});
});
 
app.post('/action',function(req,res){

    contactList.push(req.body);
    return res.redirect('back');
});




app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log('server is running on port' +' '+port);
});
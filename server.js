var express = require('express');
var app = express();
var PORT = process.env.PORT || 9000;;

app.use(express.static(__dirname + '/public'));
app.use(function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(PORT, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Server started at : ' + PORT);
    }
});

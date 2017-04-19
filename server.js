var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
//obj for a1-- has the values
var a1={
    title:'a1',
    heading:'a11',
    date:'April19,2017|||CS Lab',
    content:`<p> Okay</p>
    <p> Okay</p>
    <p> Okay</p>
    <p> Okay</p> `
    
    
  
};
function f(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var ht=
`<html>
<head>

<title>
${title}
</title>
</head>
<body>
<h1> ${heading} </h1>
<div> <p>  ${date} </p></div>

<p> {content} </p>
</body>
</html>`
;
return ht;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res)
{
res.send(f(a1));
});
app.get('/article-two',function(req,res)
{
res.send('Apdiyaaaaaaaaaaaaaaaa ');
});
app.get('/article-three',function(req,res)
{
res.send('Ahaan ');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

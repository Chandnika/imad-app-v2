var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    a1:{
    title:'a1',
    heading:'a11',
    date:'April 19,2017|||CS Lab',
    content:`<p> Okay</p>
    <p> Okay</p>
    <p> Okay</p>
    <p> Okay</p> `
    
    
  
},
    a2:{
    title:'a2',
    heading:'a22',
    date:'April 19,2017|||CS Lab',
    content:`<p> Okay</p>
    <p> Okay</p>
    <p> Okay</p>
    <p> Okayddddddddddddddddddddddddddd</p> `
    
    
  
},
a3:{
    title:'a1',
    heading:'a11',
    date:'April 19,2017|||CS Lab',
    content:`<p> Okay</p>
    <p> Okay</p>
    <p> Okay</p>
    <p> Okaywwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</p> `
    
    
  
}
};
//obj for a1-- has the values

function f(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var ht=
/*`<html>
<head>

<title>
${title}
<link href="/ui/style.css" rel="stylesheet" /> 
</title>
</head>
<body>
<div class="container">
<h1> ${heading} </h1>
<div > <p>  ${date} </p></div>

<p> ${content} </p>
</div>
</body>
</html>`*/
`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width , initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Take me Home!</a>
            </div>
            <hr/>
            <h3>
                THIRD
            </h3>
            <div>
            ${date}
                ${content}
            </div>
       </div> 
    </body>
</html>`
;
return ht;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:ne',function(req,res)
{
    var npe=req.params.ne
res.send(f(articles[npe]));
});
/*app.get('/article-one',function(req,res)
{
res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-three',function(req,res)
{
res.send('Ahaan ');
});
*/
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

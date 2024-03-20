const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    
    var a = Math.random()*10+1;
    var b = Math.random()*10+1; 
    const hypot = Math.hypot(a,b);
    const ceil = Math.ceil(a);
 
    const clz32 = Math.clz32(a)
    res.send(`Math.hypot(a,b) applied to ${a} and ${b} is ${hypot}<br>
    Math.ceil(a) applied to ${a} is ${ceil} <br>
    Math.clz32(a) applied to ${a} is ${clz32} <br>
    `);
 
});
 
// module.exports = router;

module.exports = router;
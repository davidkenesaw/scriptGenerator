const content = "const express = require('express') \n"+
"const app = express()\n\n"+
"app.get('/', (req, res) => {\n"+
    "\tres.send('hello world')\n"+
"})\n\n"+
"app.listen(3000, () => {\n"+
    "\tconsole.log(`Example app listening on port 3000`)\n"+
"})"
module.exports = content;
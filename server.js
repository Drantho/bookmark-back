const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.json({msg: 'bookmark backend'});
});

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));
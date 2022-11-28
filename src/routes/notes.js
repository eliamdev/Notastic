const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('API notes is goes here');
});

module.exports = router;
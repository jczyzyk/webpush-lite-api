const express = require('express');
const ctr = require('./notifications.controller');

const router = express.Router();


router.post('/subscribe', async (req, res) => {
  const subscription = req.body;
  await ctr.subscribe(subscription);
  res.status(201).json({});
});

router.post('/send', async (req, res) => {
  await ctr.send();
  res.status(200).json({ message: 'sent' });
});

module.exports = router;

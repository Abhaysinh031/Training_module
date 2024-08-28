const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', (req, res) => {
  const { userId, videoId, progress } = req.body;
  db.query(
    'INSERT INTO user_progress (user_id, video_id, progress) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE progress = ?',
    [userId, videoId, progress, progress],
    (err, results) => {
      if (err) throw err;
      res.sendStatus(200);
    }
  );
});

router.get('/:userId', (req, res) => {
  db.query('SELECT * FROM user_progress WHERE user_id = ?', [req.params.userId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;

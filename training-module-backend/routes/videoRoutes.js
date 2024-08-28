const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all videos
router.get('/', (req, res) => {
  db.query('SELECT * FROM videos ORDER BY order_number', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching videos' });
      return;
    }
    res.json(results);
  });
});

// Get a specific video by ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM videos WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching the video' });
      return;
    }
    res.json(results[0]);
  });
});

// Get the next video in sequence after the current one
router.get('/next/:id', (req, res) => {
  const currentId = parseInt(req.params.id);
  db.query('SELECT * FROM videos WHERE order_number > (SELECT order_number FROM videos WHERE id = ?) ORDER BY order_number ASC LIMIT 1', [currentId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching the next video' });
      return;
    }
    res.json(results[0] || null);
  });
});

// Update user progress for a module
router.post('/progress', (req, res) => {
  const { userId, moduleId } = req.body;

  const query = `
    INSERT INTO user_progress (user_id, module_id, completed)
    VALUES (?, ?, true)
    ON DUPLICATE KEY UPDATE completed = true
  `;

  db.query(query, [userId, moduleId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while updating progress' });
    } else {
      res.json({ message: 'Progress updated' });
    }
  });
});

module.exports = router;

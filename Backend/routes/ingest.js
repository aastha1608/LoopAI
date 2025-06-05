const express = require('express');
const router = express.Router();
const { PRIORITY_LEVELS } = require('../utils/constants');
const { createIngestion } = require('../services/ingestionManager');

// POST /ingest
router.post('/', (req, res) => {
  const { ids, priority } = req.body;

  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ error: 'ids must be a non-empty array' });
  }

  if (!['HIGH', 'MEDIUM', 'LOW'].includes(priority)) {
    return res.status(400).json({ error: 'priority must be HIGH, MEDIUM, or LOW' });
  }

  const ingestion_id = createIngestion(ids, priority);

  res.status(200).json({ ingestion_id });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { getIngestion } = require('../services/ingestionManager');

// Helper function to compute overall status
function getOverallStatus(batches) {
  const allStatuses = batches.map(b => b.status);
  if (allStatuses.every(s => s === 'yet_to_start')) return 'yet_to_start';
  if (allStatuses.every(s => s === 'completed')) return 'completed';
  return 'triggered';
}

// GET /status/:ingestion_id
router.get('/:ingestion_id', (req, res) => {
  const ingestion_id = req.params.ingestion_id;
  const ingestion = getIngestion(ingestion_id);

  if (!ingestion) {
    return res.status(404).json({ error: 'Ingestion ID not found' });
  }

  const overallStatus = getOverallStatus(ingestion.batches);

  res.json({
    ingestion_id,
    status: overallStatus,
    batches: ingestion.batches.map(batch => ({
      batch_id: batch.batch_id,
      ids: batch.ids,
      status: batch.status
    }))
  });
});

module.exports = router;

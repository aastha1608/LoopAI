const { PRIORITY_LEVELS } = require('../utils/constants');

const ingestionStore = new Map();

function createIngestion(idList, priority) {
  const ingestion_id = uuidv4();
  const createdAt = Date.now();

  // Split into batches of 3
  const batches = [];
  for (let i = 0; i < idList.length; i += 3) {
    const batch = {
      batch_id: uuidv4(),
      ids: idList.slice(i, i + 3),
      status: 'yet_to_start'
    };
    batches.push(batch);
  }

  ingestionStore.set(ingestion_id, {
    ingestion_id,
    priority,
    createdAt,
    batches
  });

  return ingestion_id;
}

function getIngestion(ingestion_id) {
  return ingestionStore.get(ingestion_id);
}

module.exports = { createIngestion, getIngestion, ingestionStore };

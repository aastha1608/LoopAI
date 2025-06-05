# Data Ingestion API System

## Description
A simple API system that simulates external data ingestion in priority order with batching and rate limits.

## Features
- Accepts ingestion requests with priority (HIGH, MEDIUM, LOW)
- Processes max 3 IDs per batch
- Only 1 batch every 5 seconds
- Processes by priority and request time
- Status API to check real-time progress

## Endpoints

### 1. POST /ingest
Submit a data ingestion request.

**Request:**
```json
{
  "ids": [1, 2, 3, 4, 5],
  "priority": "HIGH"
}

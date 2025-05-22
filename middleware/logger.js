const fs = require('fs');
const path = require('path');

const logPath = '/var/logs/access.log';

function formatDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  return `${day}.${month}.${year}`;
}

function logger(req, res, next) {
  const logEntry = `${formatDate()} - ${req.originalUrl}\n`;
  
  fs.appendFile(logPath, logEntry, (err) => {
    if (err) {
      console.error('Failed to write log:', err);
    }
  });

  next();
}

module.exports = logger;

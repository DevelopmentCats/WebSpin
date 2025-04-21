/**
 * Logger utility for consistent logging format
 * @param {string} message - Message to log
 * @param {string} level - Log level (info, warn, error)
 */
const logger = (message, level = 'info') => {
  const timestamp = new Date().toISOString();
  
  switch (level) {
    case 'warn':
      console.warn(`[${timestamp}] [WARN] ${message}`);
      break;
    case 'error':
      console.error(`[${timestamp}] [ERROR] ${message}`);
      break;
    default:
      console.log(`[${timestamp}] [INFO] ${message}`);
  }
};

module.exports = {
  logger
};
/**
 * Health check controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const healthCheck = (req, res) => {
  res.status(200).json({ status: 'ok' });
};

module.exports = {
  healthCheck
};
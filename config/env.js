module.exports = {
  token: process.env.SECRET_TOKEN || 'TOKEN SECRET',
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/bdxentrepreneur',
}

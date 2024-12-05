const app = require('./src/app');
const config = require('./src/config/appConfig');

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Author: ${config.metadata.author}`);
  console.log(`Version: ${config.metadata.version}`);
  console.log(`Released: ${config.metadata.releaseDate}`);
  console.log(`Service is running at http://localhost:${PORT}`);
});

const app = require("./app");

const env = process.env.NODE_ENV;
const port = process.env.SERVER_PORT || 8000;
const host = process.env.APP_HOST || "localhost";

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port} 🚀`);
});

const cron = require("cron");
const https = require("https");

const backendUrl = "https://testapinews.onrender.com/api/news"; // provider_backend

// This function will be executed every 14 minutes.
const job = new cron.CronJob("*/14 * * * *", function () {
  console.log("Hitting backend to keep it alive");

  // HTTPS request to hit the backend API
  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log("Server is kept alive");
      } else {
        console.error(
          `Failed to keep server alive with status code: ${res.statusCode}`
        );
      }
    })
    .on("error", (err) => {
      console.error("Error hitting backend:", err.message);
    });
});

module.exports = { job };

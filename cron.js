import { CronJob } from "cron";
import { get } from "https";

const backendUrl = "https://testapinews.onrender.com/api/news"; // provider_backend

// This function will be executed every 14 minutes.
const job = new CronJob("*/14 * * * *", function () {
  console.log("Hitting backend to keep it alive");

  // HTTPS request to hit the backend API
  get(backendUrl, (res) => {
    if (res.statusCode === 200) {
      console.log("Server is kept alive");
    } else {
      console.error(
        `Failed to keep server alive with status code: ${res.statusCode}`
      );
    }
  }).on("error", (err) => {
    console.error("Error hitting backend:", err.message);
  });
});

export default { job };

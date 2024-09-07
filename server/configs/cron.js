const cron = require('cron');
const https = require('https');

const URL = process.env.API_BASE_URL;

if (!URL) {
	console.error("API_BASE_URL is not defined in the environment variables");
	process.exit(1);
}


const job = new cron.CronJob("*/45 * * * *", function () {
	https
		.get(`${URL}/api/admin/health-check`, (res) => {
			if (res.statusCode === 200) {
				console.log("GET request sent successfully");
			} else {
				console.log("GET request failed", res.statusCode);
			}
		})
		.on("error", (e) => {
			console.error("Error while sending request", e);
		});
});

module.exports = job;
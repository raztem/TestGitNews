// const job = require("./cron.js");

async function fetchNews() {
  try {
    const response = await fetch("https://testrendmong.onrender.com/api/news");
    // const response = await fetch("http://localhost:3001/api/news");

    const data = await response.json();
    console.log(data);
    bindData(data);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}

function bindData(articles) {
  const container = document.getElementById("news-container");
  container.innerHTML = "";

  articles.forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.className = "article";
    articleElement.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.description}</p>
      <a href="${article.link}" target="_blank">Read more</a>
    `;
    container.appendChild(articleElement);
  });
}

document.addEventListener("DOMContentLoaded", fetchNews);
// job.start();

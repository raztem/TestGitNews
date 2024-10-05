// import { job } from "./cron.js";
// job.start();

async function fetchNews() {
  try {
    // const response = await fetch("https://testrendmong.onrender.com/api/news");
    const response = await fetch("http://localhost:3001/api/news");

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
    <div class="cardContainer">
      <div class="con1">
        <img src="${article.image_url}" alt="image" width="200" height="100%">
      </div>
      <div class="con2">
          <h3>${article.title}</h3>
          <p class="dateNews">${article.pubDate}</p>
          <p>${article.description ? article.description : ""}</p>
          <a href="${article.link}" target="_blank">Read more</a>
      </div>
    </div>
     
    `;
    container.appendChild(articleElement);
  });
}

document.addEventListener("DOMContentLoaded", fetchNews);

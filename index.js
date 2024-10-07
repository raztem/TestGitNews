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
        <p class="dateNews">
          <span style="color:brown;">${article.source_name}&nbsp;</span>
          ${article.pubDate}
        </p>
        <p class="description clickable">${
          article.description ? article.description : ""
        }</p>
        <a href="${
          article.link
        }" target="_blank" class="hidden-link">Read more</a>
      </div>
    </div>
    `;
    container.appendChild(articleElement);
  });

  // Прив'язка події після додавання елементів у DOM
  document.querySelectorAll(".description.clickable").forEach((description) => {
    description.addEventListener("click", function () {
      const link = this.closest(".con2").querySelector("a.hidden-link").href;
      window.open(link, "_blank");
    });
  });
}

document.addEventListener("DOMContentLoaded", fetchNews);

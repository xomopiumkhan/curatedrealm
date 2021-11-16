const content = document.querySelector(".content");
const author = document.querySelector(".author");
const btn = document.querySelector(".change-content");

btn.onclick = () => {
	callApi();
}

window.onload = () => {
	callApi();
}

function callApi() {
	fetch("https://api.quotable.io/random")
		.then(response => response.json())
		.then(data => {
			content.innerHTML = data.content;
			author.innerHTML = "- " + data.author;
		})
}
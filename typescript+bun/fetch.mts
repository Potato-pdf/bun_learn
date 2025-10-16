

const API_URL = "https://api.github.com/search/repositories?q=typescript";
type item = {
  name: string;
  html_url: string;
  description: string;
  message: string;
};

const response = await fetch(API_URL);
const data = await response.json() as { items: item[] };

if (!response.ok) {
  throw new Error(`Error fetching data: {"request failed"}`);
}

const repos = data.items.map((repo: item) => ({
    name: repo.name
    , url: repo.html_url
    , description: repo.description
}));

console.log(repos);

const url = "http://localhost:4000/";
const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json;
  console.log("fetching data is...", data);
};

fetchData();
console.log("I am ");

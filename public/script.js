const url = "http://localhost:4000/menu/menulist";
const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
fetchData();
console.log("I am ");

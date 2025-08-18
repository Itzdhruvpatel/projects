const apikey="pub_c457c7f32b6c46fc879fad51d443a259&q=";
const url="https://newsdata.io/api/1/news?apikey=";



window.addEventListener('load',()=>fetchNews("pizza"));

async function fetchNews(query){
    const res=await fetch(`${url}${apikey}${query}`);
    const data=await res.json();
    displayNews(data);
}

function displayNews(data){
  const maincard = document.getElementById("maincard");
  const temp = document.getElementById("temp");
  maincard.innerHTML = "";
  // Fix: Use correct property from API response
  if (!data.results || !Array.isArray(data.results)) return;
  data.results.forEach((item) => {
    if (!item.image_url) return;
    const cardclone = temp.content.cloneNode(true);
    filldata(cardclone, item);
    maincard.appendChild(cardclone);
  });
}

function filldata(cardclone,data){
 const newimg=cardclone.querySelector("#cimg");
 const title = cardclone.querySelector("#ctitle");
 const sub = cardclone.querySelector("#csub");
 const para = cardclone.querySelector("#cpara");
 newimg.src=data.image_url;
 title.innerHTML=data.title;
 
 const date= new Date(data.pubDate).toLocaleDateString("en-US", { timeZone: "Asia/Kolkata" });

 sub.innerText=`${data.source_name}  ${date}`;
 para.innerText=data.content;

 cardclone.firstElementChild.addEventListener("click", () => {
   window.open(data.link, "_blank");
 });
}
let cursel=null
let navitems = document.querySelectorAll(".navitem");
navitems.forEach((item) => {
    item.addEventListener("click", () => {
        const category = item.id;
        fetchNews(category);
        const prevSelected = document.querySelector(".navitem.selected");
        if (prevSelected) {
            prevSelected.classList.remove("selected");                           // what this will do is remove the selected class from the previously selected item
        }                   // if we do not write this then the previously selected item will still have the selected class
        item.classList.add("selected");
    });
})

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchNews(query);
    }
});

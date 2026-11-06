const starterNotices = [
 {title:"Community clean-up this Sunday",category:"Events",description:"Let’s make our shared spaces shine. Gloves and bags will be provided—bring your energy and a friend!",author:"Aarav",location:"Central Park",date:"Today"},
 {title:"Fresh vegetables from local farms",category:"Services",description:"Seasonal vegetables available every morning. Message or visit the community market to know what’s fresh.",author:"Green Basket",location:"Market Lane",date:"Yesterday"},
 {title:"Water supply maintenance update",category:"Announcements",description:"Water supply may be interrupted between 10 AM and 1 PM on Thursday. Please store what you need in advance.",author:"Residents’ Association",location:"Whole neighbourhood",date:"2 days ago"},
 {title:"Found: blue backpack",category:"Lost & Found",description:"A blue backpack was found near the library entrance. Please contact the library desk with identifying details.",author:"Maya",location:"Public Library",date:"2 days ago"},
 {title:"Free weekend yoga in the park",category:"Events",description:"A relaxed, beginner-friendly session. Bring a mat, water bottle, and a smile. Everyone is welcome.",author:"Riya",location:"Garden Park",date:"3 days ago"},
 {title:"Looking for a maths tutor",category:"Services",description:"Seeking a friendly tutor for a class 8 student, preferably nearby. Please share recommendations.",author:"Neighbour",location:"North Block",date:"4 days ago"},
 {title:"Library book exchange",category:"Events",description:"Bring a book you’ve enjoyed and take home another one. All genres and ages are welcome.",author:"Community Library",location:"Library Garden",date:"5 days ago"},
 {title:"Street light repaired",category:"Announcements",description:"The street light near the corner has been repaired. Thank you to everyone who reported the issue.",author:"Ward Volunteer",location:"Oak Street",date:"6 days ago"}
];
let notices = [...starterNotices, ...(JSON.parse(localStorage.getItem("nh-notices")||"[]"))];
let activeCategory = "All", showAll = false;
const grid = document.getElementById("noticeGrid"), search = document.getElementById("searchInput");
function tagClass(c){return c==="Lost & Found"?"Lost":c}
function render(){
 const q=search.value.toLowerCase().trim();
 const filtered=notices.filter(n=>(activeCategory==="All"||n.category===activeCategory)&&[n.title,n.description,n.author,n.location,n.category].join(" ").toLowerCase().includes(q));
 const shown=showAll?filtered:filtered.slice(0,6);
 grid.innerHTML=shown.map(n=>`<article class="notice-card"><div class="card-top"><span class="tag ${tagClass(n.category)}">${n.category.toUpperCase()}</span><span class="date">${n.date||"Just now"}</span></div><h3>${escapeHtml(n.title)}</h3><p>${escapeHtml(n.description)}</p><div class="card-foot"><span>✳ ${escapeHtml(n.author)}</span><span>⌖ ${escapeHtml(n.location||"Neighbourhood")}</span></div></article>`).join("");
 document.getElementById("emptyState").classList.toggle("hidden",filtered.length!==0);
 document.getElementById("loadMore").classList.toggle("hidden",filtered.length<=6);
 document.getElementById("loadMore").innerHTML=showAll?"Show fewer ↑":"View all notices →";
 document.getElementById("noticeCount").textContent=String(notices.length).padStart(2,"0");
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelector(".filter.active").classList.remove("active");b.classList.add("active");activeCategory=b.dataset.category;showAll=false;render()}));
search.addEventListener("input",render);document.getElementById("loadMore").addEventListener("click",()=>{showAll=!showAll;render()});
const dialog=document.getElementById("postDialog");function openDialog(){dialog.showModal()}["openPost","heroPost","eventPost"].forEach(id=>document.getElementById(id).addEventListener("click",openDialog));
document.getElementById("noticeForm").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.target);const n={title:f.get("title").trim(),category:f.get("category"),description:f.get("description").trim(),author:f.get("author").trim(),location:f.get("location").trim(),date:"Just now"};if(!n.title||!n.description||!n.author)return;notices.unshift(n);const custom=notices.slice(starterNotices.length);localStorage.setItem("nh-notices",JSON.stringify(custom));activeCategory="All";document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.category==="All"));search.value="";showAll=true;render();dialog.close();e.target.reset();const toast=document.getElementById("toast");toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2600)});
render();
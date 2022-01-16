const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week1 story writer",
      url: "week1/StoryEditor.html"
    },
    {
      label: "Week2 notes",
      url: "week2/index.html"
    },
    {
      label: "Week2 personalized team activity",
      url: "week2/week2teamactivity.html"
    }
  ]

function loadIndex(){
//get the ol form the index.html
const list = document.querySelector("#files");
//for each item in the repository make a lable and anchor tag and add it to te ol
links.forEach( link => {
    const li = document.createElement("li");
    const href = document.createElement("a");
    href.setAttribute("href", link.url);
    href.innerText = link.label

    li.appendChild(href);
    list.appendChild(li);
})


}
//get the other files in the repository
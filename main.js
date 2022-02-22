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
    },
    {
      label: "Week3 notes",
      url: "week3/index.html"
    },
    {
      label: "Week3 code exercizes",
      url: "week3/events.html"
    },
    {
      label: "week3 team assignment",
      url: "week3/index1.html"
    },
    {
      label: "Week4 code notes and exercizes",
      url: "week4/index.html"
    },
    {
      label: "Week5 code notes and exercizes",
      url: "week5/index.html"
    },
    {
      label: "Week6 todo list",
      url: "week6/index.html"
    },
    {
      label: "Week7 Notes",
      url: "week7/index.html"
    },
    {
      label: "Week8 Notes",
      url: "week8/index.html"
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
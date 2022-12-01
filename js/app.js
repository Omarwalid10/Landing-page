// this array collect all sections;
const sectionArray = document.querySelectorAll("section");

//this function make the scroll smooth

// build the nav
// this function build the nav
function creatTheNav() {
  //this loop iterate on each section
  for (let section of sectionArray) {
    let sectionName = section.getAttribute("data-nav");
    let sectionId = section.getAttribute("id");
    //creat new list
    const newList = document.createElement("li");
    // connect each new list to its section by id link
    newList.innerHTML = `<a class= "menu__link" href="#${sectionId}">${sectionName}</a>`;

    //this listener function make the scroll to section smooth
    newList.querySelector("a").addEventListener("click", function (event) {
      event.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
    //add each new list to navba__list(unorderd list)
    document.getElementById("navbar__list").appendChild(newList);
  }
}

//this array to collect all links in the navbar
const arrayOfLinks = document.getElementById("navbar__list").getElementsByTagName("a");

//this function make each section active when the user scroll on this section and make the link of this section active
function makeSectionActive() {
  for (let section of sectionArray) {
    let sectionName = section.getAttribute("data-nav");

    //make the section active when the user screen show its top 200 or bottom 200  on it
    if (
      section.getBoundingClientRect().top >= -200 && section.getBoundingClientRect().top <= 200 ) {
      if (!section.classList.contains("your-active-class")) {
        section.classList.add("your-active-class");
      }
      //make the links that stop in the specific section active
      if ( section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top <= 1 ) {
        for (let link of arrayOfLinks) {
          let linkName = link.innerHTML;
          //when stop in specific section
          if (linkName == sectionName) {
            link.classList.add("link__active");
          }
          //when not stop in specific section
          else {
            link.classList.remove("link__active");
          }
        }
      } else {
        //to make all links not active when the user scroll form the specific section
        for (let link of arrayOfLinks) {
          link.classList.remove("link__active");
        }
      }
    }
    //make the section not active when the user do not stop on it
    else {
      if (section.classList.contains("your-active-class")) {
        section.classList.remove("your-active-class");
      }
    }
  }
}

//call all functions to activate all methods
creatTheNav();

//this event scroll event to call the makeSectionActive function when the user scorll on the page
document.addEventListener("scroll", makeSectionActive);

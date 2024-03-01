//  skills section on the content page

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");  
        console.log("all active links deleted")    
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
        console.log("all active content deleted")
    } 
    
    event.currentTarget.classList.add("active-link");
    console.log("Active link added to the current target", event.currentTarget)

    document.getElementById(tabname).classList.add("active-tab");
    console.log("active tab added to the id :- ", tabname)
}

// menu wala sections

var sidemenu = document.getElementById("sidemenu");
//when right is 0 width will be displayed
function openMenu(){
    sidemenu.style.right = "0";
}
//right -200px because width is 200
function closeMenu(){
    sidemenu.style.right = "-200px";
}

// for form
// this is from github to connect google form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz__qMNZBSRgHgtaqHntyzQJ8AWAFoVQd4wUjzpVWZXlehVicn-H3hJau--Z2oJebxrtg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert('message sent succesfullty!!'),
      form.reset()
      )
      .catch(error => console.error('Error!', error.message))
  })
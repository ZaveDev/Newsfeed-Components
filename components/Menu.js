/* This is the data we will be using, study it but don't change anything, yet. */


let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
function menuMaker(menuData) {
  let menu = document.createElement("div");
  menu.className = "menu";

  let menuList = document.createElement("ul");
  menu.appendChild(menuList);

  menuData.forEach(item => {
    let menuLi = document.createElement("li");
    menuLi.textContent = item;    
    menuList.appendChild(menuLi);
  });

  return menu;
}

let header = document.querySelector(".header");
header.appendChild(menuMaker(menuItems));

let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector(".menu");
let ani = 0;
menuButton.addEventListener("click", () => {
  if (ani === 0) {
    menu.classList.toggle("menu--open")
    gsap.from(".menu", {duration: 1, opacity: 1, ease: "elastic", x: -150});   
    ani++ 
    ani++ 
  } else if (ani === 1) {
    menu.classList.toggle("menu--open")
    gsap.to(".menu", {duration: 1, opacity: 1, ease: "elastic", x: 0});
    ani++ 
    console.log(menu.classList)
  } else{
    setTimeout(() => {menu.classList.toggle("menu--open"); }, 1000);
    gsap.to(".menu", {duration: 1, opacity: 0, ease: "elastic", x: -150});
    ani--
    console.log(menu.classList)
  }
  
});


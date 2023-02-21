// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
// Import all Bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";
// Import our custom CSS
import "./index.css";
// Import our custom SCSS
import "./styles/index.scss";

import html from "/index.html";

// Import our custom JS
// import { fragment } from "./js/createElement";

// Import navbar items
import {  items, generateListItems } from './js/navbarList';
// Import Instructor list
import { images, generateListInstructors } from './js/images';




document.getElementById("navbarList").innerHTML = `
  ${generateListItems(items)}
`

document.getElementById('instructorList').innerHTML = `
  ${generateListInstructors(images)}
`
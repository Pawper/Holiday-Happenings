let topmenu = document.getElementById("full-menu");
let cover = document.getElementById("cover");
function openMenu() {
  if (topmenu.style.display === "block") {
    topmenu.style.display = "none";
    cover.style.display = "none";
  } else {
    topmenu.style.display = "block";
    cover.style.display = "block";
  }
}

// When the user scrolls down 20px from the top of the document, show the button
function scrollStart() {
  mybutton = document.getElementById("backToTop");
  window.onscroll = function() {scrollFunction()};
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "inline-block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Copy anchor link to heading
function copyLink(clicked_element)
{
  var pageURL = document.location.href.match(/(^[^#]*)/)[0];  
  var headingID = clicked_element.parentElement.parentElement.id;
  var copiedLink = pageURL + '#' + headingID;
  var clipboardStaging = document.createElement('textarea');
  clipboardStaging.value = copiedLink;
  clipboardStaging.setAttribute('readonly', '');
  clipboardStaging.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(clipboardStaging);
  clipboardStaging.select();
  document.execCommand('copy');
  document.body.removeChild(clipboardStaging);
  var toast = document.getElementById("toast");
  toast.innerHTML = "Copied link " + copiedLink;
  toast.className = "show";
  setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 2900);
}

// Table of contents
function contentsStart() {
  let ToC = "<nav role='navigation' class='table-of-contents' aria-hidden='true'><h4>On this page:</h4><ul>";
  let headingDivs = document.querySelectorAll('.heading');
  var newLine, headingText, headingID, headingLevel, currentLevel, listItemStart, listItemEnd;
  let hierarchy = [];
  for (var i = 0; i < headingDivs.length; i++) {
    headingText = (headingDivs[i].firstElementChild.textContent).trim();
    headingID = "#" + headingDivs[i].parentElement.id;
    headingLevel = headingDivs[i].parentElement.tagName[headingDivs[i].parentElement.tagName.length-1];
    hierarchy.push(headingDivs[i].parentElement.tagName[headingDivs[i].parentElement.tagName.length-1]);
    
    if (i === 0 || hierarchy[i] === hierarchy[i - 1]) {
      var listItemStart = "<li>";
      var listItemEnd = "</li>";
    } else if (hierarchy[i] > hierarchy[i - 1]) {
      var listItemStart = "<ul><li>";
      var listItemEnd = "</li>";
    } else if (hierarchy[i] < hierarchy[i - 1]) {
      var listItemStart = "</ul><li>";
      var listItemEnd = "</li>";
    };
    newLine = listItemStart + "<a href='" + headingID + "'>" + headingText + "</a>" +
    listItemEnd
    ToC += newLine;
  }
  ToC += "</ul></nav>"
  document.getElementById("table-of-contents").innerHTML = ToC;
  if (location.hash) {
    let target = location.hash;
    window.scrollTop = document.querySelector(target).offsetTop;
}
}
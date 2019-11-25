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
mybutton = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};

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
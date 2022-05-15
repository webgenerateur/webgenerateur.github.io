var dark        = document.querySelector('#dark');
var light       = document.querySelector('#light');
var iconButtonMoon  = document.querySelector('#iconButtonMoon');
var iconButtonLight  = document.querySelector('#iconButtonLight');

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

if(getCookie("mode") != "")
{
  console.log(getCookie("mode"));

      if(getCookie("mode") == "Dark")
      {
        // échange de css
        light.setAttribute("href", "");
        dark.setAttribute("href", "dark.css");

        iconButtonMoon.classList.add("non-visible");
        iconButtonLight.classList.remove("non-visible");
      }
      else if(getCookie("mode") == "Light")
      {
        // échange de css
        light.setAttribute("href", "style.css");
        dark.setAttribute("href", "");

        iconButtonLight.classList.add("non-visible");
        iconButtonMoon.classList.remove("non-visible");
      }
}

//bouton déclencheur du Dark mode
iconButtonMoon.addEventListener('click', function(e){
      e.preventDefault();
      
      // échange de css
      light.setAttribute("href", "");
      dark.setAttribute("href", "dark.css");

      this.classList.add("non-visible");
      iconButtonLight.classList.remove("non-visible");

    document.cookie = "mode=Dark";
    console.log(getCookie("mode"));
});

//bouton déclencheur du Light mode
iconButtonLight.addEventListener('click', function(e){
  e.preventDefault();

  // échange de css
  light.setAttribute("href", "style.css");
  dark.setAttribute("href", "");

  this.classList.add("non-visible");
  iconButtonMoon.classList.remove("non-visible");

    document.cookie = "mode=Light";
    console.log(getCookie("mode"));
});
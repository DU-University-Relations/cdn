var scriptPram = document.getElementById('du-header-embed');
var color = scriptPram.getAttribute('data-color');
var logoColor;
if (color == 'black') {
  logoColor = 'white';
}
else if (color == 'white') {
  logoColor = 'black';
}
else {
  color = 'black';
  logoColor = 'white';
}

document.write('<link href="https://cdn.du.edu/css/du-brand-toolkit.css" rel="stylesheet" type="text/css" />');


var brandBar = '<link rel="stylesheet" href="https://use.typekit.net/tir4vjc.css"><div class="du-header du-header-' + color + '"><a href="https://www.du.edu" class="du-home-link"><img class="du-logo" src="https://cdn.du.edu/images/university-of-denver-du-logo-main.svg" alt="University of Denver" /></a><a class="du-search-link" href="https://www.du.edu/search"><img class="du-search" alt="Search University of Denver" src="https://cdn.du.edu/images/search-' + logoColor + '.svg" /></a></div>';
document.write(brandBar);

var scriptPram = document.getElementById('du-footer-embed');
var color = scriptPram.getAttribute('data-color');
var logoColor;
if (color == 'black') {
  logoColor = 'black';
}
else if (color == 'white') {
  logoColor = 'white';
}
else {
  logoColor = 'black';
}

var duFooter = '<footer><p class="visually-hidden" id="block-footermenu-menu">Footer Menu</p><nav class="bg-dark-gray" aria-label="footer-links"><ul class="menu align-center"><li><a href="https://map.concept3d.com/?id=64" target="_blank" title="Interactive and Printable Maps of DU Campus">Maps</a></li><li><a href="https://jobs.du.edu/en-us/listing/" target="_blank" title="Jobs at the University of Denver">Jobs</a></li><li><a href="https://www.du.edu/site-utilities/contact" title="Contact the University of Denver">Contact</a></li><li><a href="https://www.du.edu/site-utilities/privacy-policy" title="University of Denver Privacy Policy">Privacy Policy</a></li><li><a href="https://www.du.edu/feedback" title="University of Denver Feedback Form">Feedback</a></li><li><a href="https://www.du.edu/">Consent Preferences</a></li><li><a href="https://www.du.edu/ir/about/consumer-disclosures" title="University of Denver Consumer Disclosures">Disclosures</a></li></ul></nav><p class="copyright">Copyright &copy;2025 University of Denver. | All rights reserved. | The University of Denver is an equal opportunity institution</p></footer>'
document.write(duFooter);

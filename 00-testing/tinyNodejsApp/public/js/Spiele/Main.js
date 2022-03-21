// -----------------------------------------------------------------------------
// Homöopathie Berater  Main JS
// -----------------------------------------------------------------------------
// Setting up a global Object for Function Communications
var global = {};
global.voice = "no";
global.Pseudonym = "Juergen";
global.lang = "de";
global.translation = "no";
global.translationtimer = null;
global.translationprevioustext = "";
global.translationtextspoken = "";
global.noclear = false;
global.botresponse = {};
// -----------------------------------------------------------------------------
//  Initialize this tiny stuff
// -----------------------------------------------------------------------------
$(document).ready(function () {
  console.log("document ready");
  // ---------------------------------------------------------------------------
  // Setup Socket Connection for the Chat initialize it to zero
  // ---------------------------------------------------------------------------
    // run some initialization
    // load the large background Image dependent on the screen dimension
   var windowdimension = window.innerWidth/window.innerHeight;
   var imageselection = "backimageQuadrat"; // Assume a almost quadrat layout
   if (windowdimension > 1.3) {imageselection = "backimageHorizontal"}
   if (windowdimension < 0.76) {imageselection = "backimageVertikal"}
   var src =  $("#back").attr(imageselection);
   var $e = $("#back").css({ opacity : 0 });
   var img = new Image();
   img.onload = function () {
      $e.css({
           'background-image': "url(" + src + ")",
       }).animate({ opacity : 1.0}, 3000);
         $("#spinning").hide();
         $("#chatroom").show();
         initscrollableAndpopupnavsize();
   };
   img.src = src; // start loading large image
   // Resize Event
   $(window).resize(function(){initscrollableAndpopupnavsize();});
});
//  ----------------------------------------------------------------------------
//  Functions
//------------------------------------------------------------------------------
//  Init the scrollable area including some Popup Button items
function initscrollableAndpopupnavsize () {
  $("#scrollable").height($(window).height() - $("#headerfix").height()-$("#footer").height());
  $("#back").height($(window).height() - $("#headerfix").height()-$("#footer").height());
}
// ----------------------------------------------------------------------------
// Standard Alert Function
// ----------------------------------------------------------------------------
function myalert(action,text,severity) {
  if (action == "hide") {$("#myalert").hide();return}
  $("#myalert").html(text);
  var dauer = 2000;
  if (severity == "Error") {dauer = 30000;$("#myalert").css({"background-color": "red","color":"white"});}
  if (severity == "Warning") {dauer = 5000;$("#myalert").css({"background-color": "yellow", "color":"black"});}
  if (severity == "Informational") {dauer = 3000;$("#myalert").css({"background-color": "rgb(23, 149, 23)", "color":"white"});}
  $("#myalert").show();
  window.setTimeout(function(){$("#myalert").hide();$("#spinning").hide();},dauer);
}
// ----------------------------------------------------------------------------
// Enter Key will be translared as send (onkey event on the chat textarea and Karte)
// ----------------------------------------------------------------------------
function catchEnter(event)
{
    if (event.key === "Enter") {
      $("#PosterDiv img").css("backgroundColor","transparent");
      $("#PosterDiv img").attr("item-selected","none");
       $("#PosterDiv").hide(); $("#chatdataform").submit();
      return false}
    return true;
}
// ----------------------------------------------------------------------------
// Load Impressum
// ----------------------------------------------------------------------------
function loadImpressum() {
  $("#showwindow").load("/htm/spiele/Impressum.htm",function(){
  $("#showwindowDiv").show();
  });
}

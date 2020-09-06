

// get string for current time
function getTimeString () {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
}

// the start time when the page is loaded
const pageStartTime = getTimeString();
// count of the showed images
var imageCount = 0;
// whether the image is clicked
var imageClicked = 0;
// timestamp when the current image has appeared
var imageShowTime = 0;
// total number of images (the name needs refactoring...)
var num_image = 4;

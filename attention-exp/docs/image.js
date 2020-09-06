$(document).ready(function() {
    // first time start popping image
    var t = getRandomTime();
    setTimeout(startPopImage, t);
});

// get a random time interval for popping next image
function getRandomTime() {
    // pop image in 5s - 45s
    var t = Math.floor(Math.random() * 40000) + 5000;
    // var t = Math.floor(Math.random() * 1000) + 3000;
    return t;
}
// recursive function for popping up image
function startPopImage() {
    pop_image();
    var t = getRandomTime();
    setTimeout(startPopImage, t ); // and so on
};

function pop_image () {
    //choose a random image and a random position
    var index=Math.floor(Math.random() * num_image)+1;
    var left_pos=Math.floor(Math.random() * 80); //position in percentage
    var top_pos=Math.floor(Math.random() * 80);
    showImage(index, left_pos, top_pos);

    // set the global image count, will be used to record the time to close the image
    imageCount += 1;
    // set the clicked status to 0
    imageClicked = 0;
    // set the timestamp when the image shows
    imageShowTime = new Date();

    // by default, disappear in 3 seconds
    setTimeout(hideImage, 3000);
}

// show a random image at a random position
function showImage(index, left_pos, top_pos) {
    var html='<div style="position:relative;left:' + left_pos.toString()+ '%;top:' + top_pos.toString() + '%;"><img onclick="clickImage()" src="public/' + index.toString() + '.jpg" alt="image" width="120px" height="120px"/></div>';

    $('#img-container1').html(html);
}

// remove the image from the container
function removeImage(){
    $('#img-container1').html('');
}

// when the image is clicked
function clickImage() {
    removeImage();
    elaspedTime = new Date() - imageShowTime;
    console.log(elaspedTime);
    sendGA(elaspedTime);
    imageClicked = 1;
}

// remove image after 3 seconds
function hideImage() {
    removeImage();
    // if it is already clicked, then no need to resend to GA; otherwise, send
    if(imageClicked == 0) {
        sendGA(3000);
    }
}

// send to google analytics
function sendGA(elaspedTime) {
    ga('send', {
        hitType: 'timing',
        timingCategory: pageStartTime,
        timingVar: imageCount.toString(),
        timingValue: elaspedTime
        // timingLabel: 'image'
    });
}



// setInterval(pop_image, 5000);



// var html='<div style="position:relative;left:55%;top:15%;"><img src="./images/' + index.toString() + '.jpg" alt="image" width="180px" height="120px"/></div>';
// var html='<div style="left:100;top:50;"><img src="./images/' + index.toString() + '.jpg" alt="image" width="180px" height="120px"/></div>';
// var html=index.toString();
// $('#video-container').html("hello world");
// $('#img-container1').html(html);

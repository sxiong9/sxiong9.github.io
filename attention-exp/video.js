var vids = ['YNwfZlIEh2Q', 'y1uJlBGZTMs', '61hVxP-AObU', 'QUsggBb1cTQ'];
var vIndex = 0;

// shuffleVIDs();
function shuffleVIDs() {
    for (let i = vids.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [vids[i], vids[j]] = [vids[j], vids[i]];
    }
}

// create youtube player
var player;
function onYouTubePlayerAPIReady() {
    // vids.sort(() => Math.random() - 0.5);
    shuffleVIDs();
    player = new YT.Player('player', {
        height: '280',
        width: '540',
        playerVars: { 'autoplay': 1, 'controls': 0, 'mute': 1, 'disablekb': 1},
        // videoId: '0Bmhjf0rKe8',
        videoId: vids[vIndex],
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

//     var html='<iframe class="ytplayer" width=100% height=100% src="http://www.youtube.com/embed/' + videos[index] + '?autoplay=1&controls=0&disablekb=1&mute=1" frameborder="0" allow="autoplay"></iframe>';

// autoplay video
function onPlayerReady(event) {
    event.target.playVideo();
}

// when video ends
function onPlayerStateChange(event) {
    if(event.data === 0) {
        vIndex += 1;
        if(vIndex < vids.length) {
            // player.loadVideoById ('FVGUe07LOe4');
            player.loadVideoById (vids[vIndex]);
        }
    }
}





// $(document).ready(function() {
//     playVideo();
// });

// function playVideo() {
//     var videos = [
//         'FVGUe07LOe4',
//         'pRpvdcjkT3k',
//         'iGDjX44OMSs'
//     ];

//     var index=Math.floor(Math.random() * videos.length);
//     // var html='<div id="video"><h3>Random Video</h3><iframe width="720" height="480" src="http://www.youtube.com/embed/' + videos[index] + '?autoplay=1&controls=0&disablekb=1" frameborder="0" allowfullscreen></iframe></div>';
//     // document.write(html);

//     var html='<iframe class="ytplayer" width=100% height=100% src="http://www.youtube.com/embed/' + videos[index] + '?autoplay=1&controls=0&disablekb=1&mute=1" frameborder="0" allow="autoplay"></iframe>';
//     // $('#video-container').html("hello world");
//     $('#video-container').html(html);
// }

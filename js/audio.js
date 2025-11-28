var audio=document.getElementById
('audioTag');
//暂停按钮
var playPause = document.
getElementsByClassName('playPause')[0];

//当前播放的音乐序号
var musicId = 0;
//初始化音乐
function initMusic(){
    audio.src=`mp3/music${musicId}.mp3`;
    audio.load();
}
initMusic();

//初始化并播放
function initAndPlay(){
    initMusic();
    audio.play();
}
//暂停功能
playPause.addEventListener(`click`,function(){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
});
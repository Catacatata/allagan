document.getElementById('vptest').addEventListener('click', function() {
    // 这里可以添加播放音频或视频的代码
    // 例如播放一个音频文件
    var audio = new Audio('media/vptest.wav');
	audio.volume = 0.8; // 设置音量，范围从 0.0（静音）到 1.0（最大音量）
    audio.play();
});

document.getElementById('noharmed').addEventListener('click', function() {
    // 这里可以添加播放音频或视频的代码
    // 例如播放一个音频文件
    var audio = new Audio('media/noharmed.wav');
	audio.volume = 0.8; // 设置音量，范围从 0.0（静音）到 1.0（最大音量）
    audio.play();
});
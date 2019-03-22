const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,            //<!-- 不启用迷你播放模式 -->
    autoplay: false,        //<!-- 音频不自动播放 -->
    theme: '#FADFA3',       //<!-- 主题色 -->
    loop: 'all',            //<!-- 音频循环播放, 可选值: 'all', 'one', 'none'-->
    order: 'random',        //<!-- 音频循环顺序, 可选值: 'list', 'random'-->
    preload: 'auto',        // <!-- 预加载，可选值: 'none', 'metadata', 'auto'-->
    volume: 0.5,            //<!-- 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效-->
    mutex: true,            //<!-- 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 -->
    listFolded: false,      //<!-- 列表默认折叠， false表示不折叠-->
    listMaxHeight: '120px', //<!-- 列表最大高度，超出此高度将有滚动条-->
    lrcType: 0,             //<!-- 歌词类型，0表示不显示歌词-->



    //fixed: true,
    autoplay: false,
    audio: [
      {
        name: "PDD洪荒之力",
        artist: '徐梦圆',
        url: 'http://up.mcyt.net/?down/39868.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: '9420',
        artist: '麦小兜',
        url: 'http://up.mcyt.net/?down/45967.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});

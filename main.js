song_PeterPan = "";
song_HarryPotter = "";

function preload()
{
    song_PeterPan = loadSound("music2.mp3");
    song_HarryPotter = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(400, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 400, 300);
}
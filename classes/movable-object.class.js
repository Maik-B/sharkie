class MovableObject{
    x = 50;
    y = 300;
    img;
    height;
    width;
    imageCache = [];


    loadImage(path){
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {
        let img = new Image();
        img.src = path;
        this.imageCache.push(img);
        });
    }

    moveLeft(){

    }
    moveRight(){
        console.log('Moving right');
    }
}
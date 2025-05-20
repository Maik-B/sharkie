class Character extends MovableObject{

    constructor(){
        super().loadImage('../assets/1.Sharkie/3.Swim/1.png');
        this.loadImages([
            '../assets/1.Sharkie/3.Swim/1.png',
            '../assets/1.Sharkie/3.Swim/2.png',
            '../assets/1.Sharkie/3.Swim/3.png',
            '../assets/1.Sharkie/3.Swim/4.png',
            '../assets/1.Sharkie/3.Swim/5.png',
            '../assets/1.Sharkie/3.Swim/6.png'
        ])
        this.height = 300;
        this.width = 300;
        this.y = 100;
    }

    jump(){

    }
}
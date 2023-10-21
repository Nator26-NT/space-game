class TitleScene extends Phaser.Scene {
	constructor (){
		super({
			key: 'titleScene'
			
		})
		this.backgroundImage = null;
		this.titleText = null;
		this.titleTextStyle = { font: '100px Times', fill: '#ffffff', align: 'center' }

	}
	init (data){
		this.cameras.main.setBackgroundColor('#ffffff');
	}
	preload (){
		console.log('Title Scene');
		this.load.image('background', 'assets/background.png');
		
	}
	create(data) {
    this.backgroundImage = this.add.sprite(0, 0, 'background')
    this.backgroundImage.x = 900 / 2
    this.backgroundImage.y = 700 / 2

        this.titleText = this.add.text(100, 100, 'SpaceRanger 2D', this.titleTextStyle)
	} 
	
	update(time, delta) {
   if (time > 6000){
   	this.scene.switch('menuScene')
   }
	}
}

export default TitleScene
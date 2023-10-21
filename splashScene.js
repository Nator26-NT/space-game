class SplashScene extends Phaser.Scene {
	constructor (){
		super({
			key: 'splashScene'
		})
	}
	init (data){
		this.cameras.main.setBackgroundColor('#ffffff')
	}
	preload (){
		console.log('Splash Scene')
		this.load.image('background', 'assets/background.png')
	}
	create(data) {
    this.backgroundImage = this.add.sprite(0, 0, 'background')
    this.backgroundImage.x = 900 / 2
    this.backgroundImage.y = 700 / 2
	}
	update(time, delta) {
	  if(time > 3000){ 
	  	this.scene.switch('titleScene')
	}
	}
}

export default SplashScene
class MenuScene extends Phaser.Scene {
	constructor (){
		super({
			key: 'menuScene'
		})
		this.menuSceneImage = null;
		
	}
	init (data){
		this.cameras.main.setBackgroundColor('#ffffff')
	}
	preload (){
		console.log('Menu Scene')
		this.load.image('Back_Sector', 'assets/space.jpg')
		this.load.image('startButton', 'assets/start.jpg')
		
	}
	create(data) {
   this.menuSceneImage = this.add.sprite(0, 0, 'Back_Sector')
   this.menuSceneImage.x = 900 / 2
   this.menuSceneImage.y = 700 / 2

    
   this.startButton = this.add.sprite(0, 0, 'startButton')
   this.startButton.x = 900 / 2
   this.startButton.y = 700 / 2
   this.startButton.setInteractive({ useHandCursor : true })
   this.startButton.on('pointerdown', () => this.clickButton())
      
   


	}
	update(time, delta) {

	}
	clickButton (){
		this.scene.start('gameScene');
	}
}

export default MenuScene
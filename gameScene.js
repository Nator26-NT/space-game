class GameScene extends Phaser.Scene {
	createAlien(){
     const alienLocation = Math.floor(Math.random() * 900) + 1;
     let alienVelocity = Math.floor(Math.random() * 50) + 1
     alienVelocity *= Math.round(Math.random()) ? 1: -1
     const Alien = this.physics.add.sprite(alienLocation,-100,'alien')
     Alien.body.velocity.y = 200
     Alien.body.velocity.x = alienVelocity
     this.alienGroup.add(Alien)
      
	}
	   constructor (){
		super({
			key: 'gameScene'
		})
		this.starsImage = null
		this.spaceship = null
		this.playprojectile = null
		this.fireProjectile = false
		this.alienGroup = null
		this.score = 0
		this.textScore = null
		this.textScoreStyle = {font:'66px Ariel', fill:'#ffffff', align:'center'}

		this.gameOver = null
		this.gameOverTextStyle = {font:'66px Ariel', fill:'#ff0000', align:'center'}
	}
	init (data){
		this.cameras.main.setBackgroundColor('#ffffff')
	}
	preload (){
		console.log('Game Scene')
		this.starsImage = this.load.image('stars', 'assets/background.png')
		this.spaceship = this.load.image('ship', 'assets/1.png')
		this.playprojectile = this.load.image('Projectile', 'assets/PlayProjectile.png')
        this.load.audio('Pew', 'assets/Pew.ogg')
        this.load.image('alien', 'assets/ship5.png')
        this.load.audio('explosion','assets/explosion.wav')
        this.load.audio('bomb', 'assets/bomb.wav')
     
	}
	create(data) {
   	this.starsImage = this.add.sprite(0 ,0 ,'stars')
    this.starsImage.x = 900 / 2
    this.starsImage.y = 700 / 2

    this.textScore = this.add.text(10,10, "Score: " + this.score.toString(), this.textScoreStyle)

   this.spaceship = this.physics.add.sprite(450, 600, 'ship')
   this.ProjectileGroup = this.physics.add.group()
   this.alienGroup = this.add.group()
   this.createAlien()
   this.physics.add.collider(this.ProjectileGroup, this.alienGroup, function(projectileCollider, alienCollider){
    projectileCollider.destroy()
    alienCollider.destroy()
    this.sound.play('explosion')
    this.score = this.score + 1
    this.textScore.setText('Score: ' + this.score.toString())
    this.createAlien()
    this.createAlien() 
   }.bind(this))
    
    this.physics.add.collider(this.spaceship, this.alienGroup, function(spaceshipCollider,alienCollider){
     this.sound.play('bomb')
     this.physics.pause()
     alienCollider.destroy()
     spaceshipCollider.destroy()
     this.gameOver = this.add.text(100, 110 , 'GameOver\nClick To Play Again!',this.gameOverTextStyle)
     this.gameOver.setInteractive({ useHandCursor: true })
     this.gameOver.on('pointerdown', () => this.scene.start('gameScene'))

    }.bind(this))

	}
	update(time, delta) {
    const keyObjLeft = this.input.keyboard.addKey('LEFT')
    const keyObjRight = this.input.keyboard.addKey('RIGHT')
    const keyObjSpace = this.input.keyboard.addKey('SPACE')


    if(keyObjLeft.isDown === true){
    	this.spaceship.x -= 25;
    	if (this.spaceship.x < 100 ){
    		this.spaceship.x = 100
    	}
    } 

    if (keyObjRight.isDown === true){
    	this.spaceship.x += 25;
    	if (this.spaceship.x > 800){
    		this.spaceship.x = 800
    	}
    }
    if(keyObjSpace.isDown === true){
    if(this.fireProjectile === false){
     this.fireProjectile = true
     const newProjectileGroup = this.physics.add.sprite(this.spaceship.x, this.spaceship.y, 'Projectile')
     this.ProjectileGroup.add(newProjectileGroup)
     this.sound.play('Pew')
 }
    }

    if(keyObjSpace.isUp === true){
    	this.fireProjectile = false;
    }
    this.ProjectileGroup.children.each(function (item){
    item.y = item.y - 20
    if(item.y < 0 ){
    	item.destroy()
    }
    })

	}
}

export default GameScene
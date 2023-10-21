

 import SplashScene from './splashScene.js';
 import TitleScene from './titleScene.js';
 import MenuScene from './menuScene.js';
 import GameScene from './gameScene.js'

 const splashScene = new SplashScene()
 const titleScene = new TitleScene()
 const menuScene = new MenuScene()
 const gameScene = new GameScene()

const config = {
type: Phaser.AUTO,
width: 900,
height: 700,
physics: {
default: 'arcade',
  arcade: true
},
backgroundColor: 0xffffff,
scale: {
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH
}
}



const game = new Phaser.Game(config);

game.scene.add('splashScene', splashScene);
game.scene.add('titleScene', titleScene);
game.scene.add('gameScene', gameScene);
game.scene.add('menuScene', menuScene);

game.scene.start('splashScene');

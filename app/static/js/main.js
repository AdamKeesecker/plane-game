/* global Game, Phaser */
'use strict';

$(document).on('ready', init);

function init(){
  var game = new Phaser.Game(700, 500, Phaser.AUTO, 'plane');

  game.state.add('load', Game.Load);      //LOADING SCREEN
  game.state.add('splash', Game.Splash);  //MY LOGO
  game.state.add('menu', Game.Menu);      //MENU SCREEN
  game.state.add('play', Game.Play);      //GAME STATE


  game.state.start('load');
}

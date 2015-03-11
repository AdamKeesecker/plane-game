/* global Phaser */

'use strict';

var Game = {};

Game.Load = function(){
  this.readyCheck = false;
};

Game.Load.prototype = {
  preload: function(){
    //splash
    this.game.load.tilemap('logo', '/assets/splash/logo.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('logoStuff', '/assets/splash/logoStuff.png');
    //splash


    this.load.onLoadComplete.addOnce(this.stateChange, this);
  },
  update: function(){
    if(this.ready === true){
      this.game.state.start('splash');
    }
  },
  stateChange: function(){
    this.readyCheck = true;
  }
};

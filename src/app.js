const config = {
  width: 600,
  height: 400,
  backgroundColor:'#f4f4f4',
  parent: 'container',
  scene: {
    preload,
    create,
    update
  },
  physics:{
    default:'arcade',
    arcade:{
      graviti:{
        
      }
    }
  }
}

new Phaser.Game(config);

let direction = 'right';
let status = 'standing';
let fighter , fighter_anim;

function preload(){
  this.load.path = './assets/';
  this.load.json('fighter_anim' , 'fighter_anim.json');
  this.load.atlas('fighter', 'fighter.png','fighter_atlas.json');
}

function create(){
  fighter = this.physics.add.sprite(280,140,'fighter');
  fighter_anim = this.cache.json.get('fighter_anim');
  this.anims.fromJSON(fighter_anim);
  fighter.anims.play('standing');
  // RIGHT KEY 
  this.input.keyboard.on('keydown_RIGHT',()=> walk('right'));
  // LEFT KeY 
  this.input.keyboard.on('keydown_LEFT',()=> walk('left'));
  // KEYUP
  this.input.keyboard.on('keyup',()=> stand())
}

function stand(){
  status = 'standing';
  fighter.anims.play('standing');
  fighter.setAcceleration(0,0);
  fighter.setVelocity(0);
}

function walk(direccion){
  if (direccion == 'left') {
    fighter.scaleX = -1;
    fighter.setVelocity(-100,0);
  }else{
    fighter.scaleX = 1;
    fighter.setVelocity(100,0);
  }
  if (status == 'standing' ) {
    fighter.anims.play('walking');
  }
  status = 'walking';
  direction = direccion;
}

function update(){
  
}

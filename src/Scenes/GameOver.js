class GameOver extends Phaser.Scene {
    constructor() {
        super("gameover");

    
        this.my = {sprite: {}, text: {}}; 

        
    }

    preload() {
    

       
    }

    create() {
        let my = this.my;
        
        // Create key objects
        this.restart = this.input.keyboard.addKey("R");
        this.myScore = 0;
        

        



        // update HTML description
        document.getElementById('description').innerHTML = 'Thank you for playing!'

        // Put score on screen
        my.text.thank = this.add.bitmapText(180, 200, "rocketSquare", "Thank you for playing! ");
        my.text.credit = this.add.bitmapText(180, 400, "rocketSquare", "Credit: Anson Fong");


        my.text.restartButton = this.add.bitmapText(180, 500,"rocketSquare", "Click to play again");
        
        

    

    }

    update() {
        let my = this.my;
        this.input.once('pointerdown', () => {
            this.scene.start('arrayBoom'); 
            //this.resetGameState();
        });

        
    }

    resetGameState() {
        // Reset player's health and position
        this.my.sprite.elephant.hp = 3;
        this.updateHPDisplay();
        this.my.sprite.elephant.x = game.config.width / 2;
        this.my.sprite.elephant.y = game.config.height - 40;
    
        // Clear and recreate bullets
        this.my.sprite.bullet.forEach(bullet => bullet.destroy());
        this.my.sprite.bullet = [];
    
        // Reset score
        this.myScore = 0;
        this.updateScore();
    
        // Reset other elements as needed
        this.my.sprite.hippo.x = game.config.width / 2;
        this.my.sprite.hippoBullets.forEach(bullet => bullet.destroy());
        this.my.sprite.hippoBullets = [];
    
        
    }

}
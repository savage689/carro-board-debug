class Game{
    constructor(){
        
    }

    

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
            
          
          }

          form = new Form();
          form.display();
          
        }
        coin1=createSprite(350,350,50,50);
        coin1.addImage(blackcoin);
        coin2=createSprite(350,329,10,10);
        coin2.addImage(browncoin);
        coin3=createSprite(343,370,10,10);
        coin3.addImage(blackcoin);
        coin4=createSprite(350,370,10,10);
        coin4.addImage(browncoin);
        coin5=createSprite(328,330,10,10);
        coin5.addImage(blackcoin);
        coin6=createSprite(330,340,10,10);
        coin6.addImage(browncoin);
        coin7=createSprite(372,350,10,10);
        coin7.addImage(browncoin);
        coin8=createSprite(370,330,10,10);
        coin8.addImage(blackcoin);
        coin9=createSprite(350,310,10,10);
        coin9.addImage(blackcoin);
        coin10=createSprite(392,350,10,10);
        coin10.addImage(blackcoin);
        hole1=createSprite(50,70,30,30);
        
        hole1.visible=false;

        striker = createSprite(350,140,20,20);
        striker.addImage(carromstriker);
        striker.scale=0.1;
        
    }

    getState(){
        var gameStateref=database.ref("gameState");
        gameStateref.on("value",(data)=>{
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            background("black");
            image(carromboard,0,0,700,700);
        }

        drawSprites();        
        

    }
    
}

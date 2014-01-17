var Enemy = function (assetManager){

	Character.call(this);
	
	this.assetManager = assetManager;
	this.x = 400;
	this.y = 100;
	this.width = 25;
	this.height = 40;
	this.active = false;
	this.dmg = 1;
	this.type = 0;
	this.scoreValue = 10;
	this.speed = 100;
	this.scoreGiven = false;
	this.collisionDone = false;
};

Enemy.speed = 100;

Enemy.prototype = new Character();

Enemy.prototype.init = function(x, color, type, speed){
	this.x = x;
	this.color = color;
	this.active = true;
	this.speed = speed;
	this.createSprite("explosion", this.assetManager.getImage("Explosion"), 320, 320, 5, 5, false);
	
	switch(type){
		case 1 :
			this.createSprite("impossibear-idle", this.assetManager.getImage("Impossibear"), 120, 144, 1, 1, true);
	
			this.setSprite("impossibear-idle");
			
			this.currentSprite.setCenter(20, 100);
			
			this.y = 500;
			this.width = 40;
			this.height = 70;
			this.type = 1;
		break;
		
		case 2 :
			this.createSprite("Catbug", this.assetManager.getImage("catbug"), 200, 100, 2, 1, true);
	
			this.setSprite("Catbug");
			
			this.currentSprite.setCenter(50, 50);
			
			this.y = 430;
			this.width = 80;
			this.height = 80;
			this.type = 2;
		break;
			
		case 3 :
		
			if (this.color == "blue")
			{
				this.createSprite("Run", this.assetManager.getImage("JellykidRuns"), 200, 100, 2, 1, true);
				this.setSprite("Run");
			}
			else
			{
				this.createSprite("Run-red", this.assetManager.getImage("JellykidRuns-red"), 200, 100, 2, 1, true);
				this.setSprite("Run-red");
			}
		
			this.y = 380;
			this.width = 80;
			this.height = 80;
			this.type = 3;
			this.scoreValue = 10;
		break;

		case 4 :
		
			if (this.color == "blue")
			{
				this.createSprite("Run", this.assetManager.getImage("JellykidRuns"), 200, 100, 2, 1, true);
				this.setSprite("Run");
			}
			else
			{
				this.createSprite("Run-red", this.assetManager.getImage("JellykidRuns-red"), 200, 100, 2, 1, true);
				this.setSprite("Run-red");
			}
		
			this.y = 600 - this.currentSprite.height;
			this.width = 80;
			this.height = 80;
			this.type = 3;
			this.scoreValue = 10;
		break;
	}
}

Enemy.prototype.Update = function(deltaTime, gameTime)
{
	this.move(deltaTime);
	
	this.x -= this.speed * deltaTime;
	
	if(this.x + this.width < 0)
		this.active = false;
};

Enemy.prototype.move = function(deltaTime)
{
	this.x -= this.speed * deltaTime;
};
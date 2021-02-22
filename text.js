class text
{
	constructor(game, x, y)
	{
		Object.assign(this, {game, x, y});
	};

	update()
	{

	};

	draw(ctx)
	{
		ctx.font = PARAMS.BLOCKWIDTH/2 + 'px neuropol_xregular';
		ctx.beginPath();
        ctx.fillStyle = "White";
		ctx.strokeStyle = "Black";
		ctx.lineWidth = 4;
		ctx.strokeText("Deaths: " + this.game.duck.deaths, this.x, this.y)
		ctx.fillText("Deaths: " + this.game.duck.deaths, this.x, this.y);
		ctx.lineWidth = 1;
        
	};
};
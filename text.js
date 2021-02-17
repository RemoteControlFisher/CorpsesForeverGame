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
        ctx.fillStyle = "Black";
        ctx.fillText("Deaths: " + this.game.duck.deaths, this.x, this.y);
	};
};
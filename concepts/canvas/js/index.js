let app = new PIXI.Application({ width: 500, height: 500, backgroundAlpha: 0 });
document.body.appendChild(app.view);
let sprite = PIXI.Sprite.from('../images/unnamed.jpg');
const graphics = new PIXI.Graphics();
graphics.beginFill(0x000000);
graphics.drawCircle(50, 50, 50);
graphics.endFill();
let texture = app.renderer.generateTexture(graphics);
let circle = new PIXI.Sprite(texture);
sprite.width = 100;
sprite.height = 100;
sprite.interactive = true;
sprite.buttonMode = true;

sprite.on('click', () => {
    console.log("Clicked")
})
app.stage.addChild(sprite);
app.stage.addChild(circle);
// sprite.mask = circle;
let elapsed = 0.0;
// Tell our application's ticker to run a new callback every frame, passing
// in the amount of time that has passed since the last tick
app.ticker.add((delta) => {
    // Add the time to our total elapsed time
    elapsed += delta;
    // Update the sprite's X position based on the cosine of our elapsed time.  We divide
    // by 50 to slow the animation down a bit...
    sprite.x = 200.0 + Math.cos(elapsed / 75.0) * 200.0;
    sprite.y = 200.0 + Math.cos(elapsed / 50.0) * 200.0;

    circle.x = 200.0 + Math.cos(elapsed / 75.0) * 200.0;
    circle.y = 200.0 + Math.cos(elapsed / 50.0) * 200.0;
});
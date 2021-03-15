// TALK: let's add a background image

loadSprite("bg", "/pub/img/bg.png");
loadSprite("birdy", "/pub/img/birdy.png");

init({
	fullscreen: true,
	scale: 2,
});

scene("main", () => {

	add([
		sprite("bg"),
	]);

	const birdy = add([
		sprite("birdy"),
		pos(80, 80),
		body(),
	]);

	keyPress("space", () => {
		birdy.jump();
	});

	add([
		rect(width(), 12),
		pos(0, 280),
		origin("topleft"),
		solid(),
	]);

});

start("main");
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Missile1`, avion, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    aze.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    avion.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let aze: Sprite = null
let projectile: Sprite = null
let avion: Sprite = null
avion = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 9 6 6 6 6 6 6 c 6 . . . 
    . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
    . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
    . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
    . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
    . 6 8 b b b 8 b b b b 8 6 6 6 6 
    . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
    . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
    . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
    . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
    . 8 f f f f 8 8 8 8 f f f 8 8 8 
    . . f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(avion, 200, 200)
info.setLife(10)
avion.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    aze = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 4 . . . . . 4 . . . . 
        . . . . . 7 7 . . . 7 7 . . . . 
        . . . . . . 7 7 . 7 7 . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . e 2 e . . . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e . e . e . e . . . . 
        . . . . . . . e . e . . . . . . 
        . . . . . . . e . e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    aze.setVelocity(-100, 0)
    aze.setPosition(160, randint(5, 115))
    aze.setFlag(SpriteFlag.AutoDestroy, true)
})

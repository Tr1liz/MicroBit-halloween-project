input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . # # # .
            # . # . #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("BOO")
    }
})
input.onButtonPressed(Button.B, function () {
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
})

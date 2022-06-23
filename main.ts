input.onButtonPressed(Button.A, function () {
    unlock_forever = 1
    basic.showLeds(`
        # # # # #
        # . . . #
        . . . . .
        # . . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    lock = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    unlock_forever = 0
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(2000)
    basic.clearScreen()
})
let unlock_forever = 0
let lock = 0
let force = 0
lock = 1
unlock_forever = 0
basic.forever(function () {
    force = input.magneticForce(Dimension.Strength)
    if (force < 500) {
        if (lock == 1 && unlock_forever == 0) {
            force = input.magneticForce(Dimension.Strength)
            basic.showIcon(IconNames.No)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
        }
    } else {
        lock = 1
    }
})

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
        . # # # .
        . # . . .
        # # # # #
        # . . . #
        # # # # #
        `)
    basic.pause(2000)
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
let force = 0
let unlock_forever = 0
let lock = 0
lock = 1
unlock_forever = 0
basic.forever(function () {
    force = input.magneticForce(Dimension.Strength)
    if (force < 500) {
        while (force < 500 && (unlock_forever == 0 && lock == 1)) {
            force = input.magneticForce(Dimension.Strength)
            basic.showIcon(IconNames.No)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
        }
        while (force < 500 && unlock_forever == 1) {
            force = input.magneticForce(Dimension.Strength)
            basic.clearScreen()
            basic.pause(500)
        }
    } else {
        basic.showLeds(`
            . # # # .
            . # . # .
            # # # # #
            # . . . #
            # # # # #
            `)
        basic.pause(2000)
        lock = 1
        while (force >= 500) {
            force = input.magneticForce(Dimension.Strength)
            basic.clearScreen()
            basic.pause(500)
        }
    }
})

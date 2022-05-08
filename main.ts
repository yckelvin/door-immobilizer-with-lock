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
let lock = 0
let force = 0
lock = 1
basic.forever(function () {
    force = input.magneticForce(Dimension.Strength)
    if (force < 500) {
        if (lock == 1) {
            while (force < 500) {
                force = input.magneticForce(Dimension.Strength)
                basic.showIcon(IconNames.No)
                basic.pause(500)
                basic.clearScreen()
                basic.pause(500)
            }
        } else {
            while (force < 500) {
                force = input.magneticForce(Dimension.Strength)
            }
        }
        lock = 1
    }
})

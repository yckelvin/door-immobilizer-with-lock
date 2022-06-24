def on_button_pressed_a():
    global unlock_forever
    unlock_forever = 1
    basic.show_leds("""
        # # # # #
                # . . . #
                . . . . .
                # . . . #
                # # # # #
    """)
    basic.pause(2000)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global lock
    lock = 0
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.pause(500)
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global unlock_forever
    unlock_forever = 0
    basic.show_leds("""
        # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
    """)
    basic.pause(2000)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

force = 0
unlock_forever = 0
lock = 0
lock = 1
unlock_forever = 0

def on_forever():
    global force, lock
    force = input.magnetic_force(Dimension.STRENGTH)
    if force < 500:
        serial.write_string("Force is below 500")
        while force < 500 and (unlock_forever == 0 and lock == 1):
            force = input.magnetic_force(Dimension.STRENGTH)
            basic.show_icon(IconNames.NO)
            basic.pause(500)
            basic.clear_screen()
            basic.pause(500)
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        basic.pause(5000)
        while force < 500 and unlock_forever == 0 or lock == 0:
            force = input.magnetic_force(Dimension.STRENGTH)
            basic.clear_screen()
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
        lock = 1
        while force < 500:
            force = input.magnetic_force(Dimension.STRENGTH)
            serial.write_value("lock", lock)
            basic.pause(500)
basic.forever(on_forever)

let X = 0
let Y = 0
let Velocity = 0
basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        for (let X = 0; X <= 4; X++) {
            for (let Y = 0; Y <= 4; Y++) {
                led.plot(X, Y)
                basic.pause(Velocity)
                basic.clearScreen()
            }
        }
        basic.showIcon(IconNames.Heart)
        Velocity += -80
    }
    Velocity = 200
})

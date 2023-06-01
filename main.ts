let a = 0
let b = 0
let c = 0
input.onButtonPressed(Button.A, function () {
    a = randint(0, 10)
    basic.showNumber(a)
})
input.onButtonPressed(Button.B, function () {
    b = randint(0, 10)
    basic.showNumber(b)
})
input.onGesture(Gesture.Shake, function () {
    c = a * b
    basic.showNumber(c)
})

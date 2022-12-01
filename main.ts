enum RadioMessage {
    message1 = 49434,
    left = 14947,
    right = 32391,
    backwards = 56537,
    forward = 16348
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.left)
})
input.onGesture(Gesture.LogoUp, function () {
	
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onGesture(Gesture.ScreenUp, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.forward)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.right)
})
input.onGesture(Gesture.TiltRight, function () {
	
})
radio.setGroup(99)
basic.forever(function () {
    if (true) {
    	
    }
})

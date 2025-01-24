function startCountdown(device) {
    let secondsRemaining = 3

    const shutdownTimer = setInterval(function() {
        if (secondsRemaining > 0) {
            console.log(`Your ${device} will shut down in ${secondsRemaining} seconds`)
            secondsRemaining--
        } else {
            console.log(`Your ${device} is shutting down`)
            clearInterval(shutdownTimer)
        }

    }, 1000)
}
startCountdown('MacBook')

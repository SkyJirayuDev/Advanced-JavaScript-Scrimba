// Get the starting timestamp
const start = performance.now()

setTimeout(() => {
    // Get the ending timestamp
    const end = performance.now()
    console.log(`Execution time: ${end - start} milliseconds`)
}, 1000)

for (let i = 0; i < 1000000; i++) {
    let answer = i * 2000000 / 67.8 * (45.7 / 3.2)
}

// Time without slow executing code: 1000.8999999761581 milliseconds
// Time with slow executing code: 1001.5 milliseconds

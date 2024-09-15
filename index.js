function increment(x, y) {
    let result = x * y;
    setTimeout(() => {
        console.log(result);
    }, 5000);
}

increment(1, 4);

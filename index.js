function increment(x, y) {
    let result = x * y;
    setTimeout(() => {
        console.log(result);
    }, 8000);
}

increment(7, 4);

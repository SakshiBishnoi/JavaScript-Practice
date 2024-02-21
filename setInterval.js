let teddy = setInterval(() => {
    console.log("Teddy the bear is cute! " + Math.random() * 100 );
}, 1000)
clearInterval(teddy); // stops the interval after a while
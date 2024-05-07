const solToNgn = require('sol-to-ngn');

solToNgn()
  .then(rate => {
    if (rate <= 100000 ) {
        console.log("Yes buy solana @:", rate);
    } else {
        console.log("No, don't buy solana @:", rate);
    }
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
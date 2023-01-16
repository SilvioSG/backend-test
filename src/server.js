const express = require('express');

const app = express();
const port = 3000;


app.get("/lenovo", async (req, res) => {
    const laptops = await require("../laptops");
    res.send(laptops).json()
});

app.listen(port, () =>
    console.log(`Server is running in http://localhost:${port}`)
);
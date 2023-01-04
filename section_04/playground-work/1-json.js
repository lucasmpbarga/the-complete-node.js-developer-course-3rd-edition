const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

data.name = 'Lukita'
data.age = 28

const newDataJson = JSON.stringify(data)

fs.writeFileSync("new-1-json.json", newDataJson);
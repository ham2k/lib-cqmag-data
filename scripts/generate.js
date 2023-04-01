const fs = require("fs")
const path = require("path")
const { preprocessCQWWData } = require("../src/lib/preprocessing")
const dxccByCode = require("../../dxcc/src/data/dxccByCode.json")

console.log("Generating DXCC json")

const cqww = preprocessCQWWData(dxccByCode)

fs.writeFileSync(path.join(__dirname, "../src/data/cqwwByPrefix.json"), JSON.stringify(cqww), "utf8")
fs.writeFileSync(path.join(__dirname, "../src/data/cqww.json"), JSON.stringify(Object.values(cqww)), "utf8")

console.log("CQ WW Entities written to data/cqww.json and cqwwByPrefix.json")
console.log("")

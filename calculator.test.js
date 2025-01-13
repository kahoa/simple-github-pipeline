import assert from "assert"
import { add } from "./calculator.js"



const want = 4
const got = add(2,2)

assert.equal(got, want)


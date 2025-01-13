import assert from "assert"
import { add, multiply } from "./calculator.js"


{
  const want = 4
  const got = add(2,2)

  assert.equal(got, want)
}

{
  const want = 8
  const got = multiply(4, 2) 

  assert.equal(got, want)
}



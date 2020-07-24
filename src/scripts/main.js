import { createPlan } from "./plan.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createCorn } from "./seeds/corn.js";

const yearlyPlan = createPlan()
const cornSeed = createCorn()

console.log(cornSeed)

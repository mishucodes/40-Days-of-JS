//The "00 All Notes.js" file could just import this instead of importing everything individually:
    export * as calculator from "./01 calculator.js";
    export * as greet from "./02 greet.js";
    export {default as mitushiName} from "./03 userInfo.js";

//I think this is how you build a library in JS...
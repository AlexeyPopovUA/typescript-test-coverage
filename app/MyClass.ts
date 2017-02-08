export class MyClass {
    constructor(config: {enterIf: boolean}) {
        if (config.enterIf) {
            //console.log("enterIf");
        } else {
            //console.log("else enterIf");
        }
    }
}

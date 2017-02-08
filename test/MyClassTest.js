const MyClass = require("./../app/MyClass").MyClass;

describe('MyClass', () => {
    it('should test MyClass', () => {
        new MyClass({enterIf: true});
    });
});

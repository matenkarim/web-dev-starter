import {sayHello} from '../js/main.js';

QUnit.module('hello', function() {

    QUnit.test('make sure the hello function says hello', function(assert) {
        var result = sayHello();
        assert.equal(result, 'hello');
    });

    QUnit.test('sayHello() returns a string', function(assert) {
        var result = sayHello();
        assert.ok(typeof result === 'string', 'sayHello() should return a string');
    });

});

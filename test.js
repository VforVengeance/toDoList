var assert = require('assert');
var toDoList = require('./index.js');



describe('test function addToDo', function() {
    it('test successful case',
    function(){
        assert.equal(typeof toDoList.addToDo("a simple to do", "fare la barba", "caio"), 'undefined');
    });
    it('test unsuccessful case',
    function(){
        assert.equal(typeof toDoList.addToDo("a simple to do", "fare la barba", "gesus"), 'string');
    });
});

describe('test function deleteToDo', function() {
    it('test successful case',
    function(){
        assert.equal(typeof toDoList.deleteToDo(1), 'undefined');
    });
});

describe('test function getListByUser', function() {
    it('test successful case',
    function(){
        assert.equal(typeof(toDoList.getListByUser("caio")), 'object');
    });
});

describe('test function getListByStatus', function() {
    it('test successful case',
    function(){
        assert.equal(typeof(toDoList.getListByStatus (false)), 'object');
    });
});


describe('test function changeStatus', function() {
    it('test successful case',
    function(){
        toDoList.addToDo("a simple to do", "fare la barba", "caio");
        toDoList.addToDo("a simple to do", "fare la barba", "giuseppe");
        assert.equal(typeof (toDoList.changeStatus(2, true)), 'object');
    });
});
# toDoList

## installation

    npm install npm i todolist_1
## Usage

A simple npm project, `todolist_1`!

```js
var toDoList = require('todolist_1');
toDoList.addToDo("a simple to do ", "fare la barba", "caio") // create one toDo
console.log(toDoList.deleteToDo(1)); // delete a toDo by id 
console.log(toDoList.changeStatus(0, true)); // modify status of one toDo by id
console.log(toDoList.getListByUser("sempronio")); // search toDoList by author
console.log(toDoList.getListByStatus("oh come")); //find the toDoElement with status
console.log(toDoList.getToDoList()); //return all toDo
console.log(toDoList.getUsers()); //return all users
toDoList.reset(); // reset the list

```

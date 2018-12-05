
var toDoList = [];
var COUNTER = 0;

var users = ["tizio", "caio", "sempronio", "giuseppe"]

exports.getUsers = function(){
    return users;
}

exports.getToDoList = function(){
    return toDoList;
}
exports.reset = function(){
    toDoList = [];
    COUNTER = 0;
}

var getUser = function(user){
    error = "user not valid";
    if(users.includes(user)){
        return user;
    }
    else{
        return error;
    }
}
exports.addToDo = function(name, description, assignedTo){
    error = "user not valid";
    user = getUser(assignedTo);
    var toDoElement = {
        name: name,
        description: description,
        completed: false,
        assignedTo: "",
        id: COUNTER++
    }
    toDoElement.assignedTo = user;
    if(toDoElement.assignedTo === error){
        return error;
    }
    toDoList.push(toDoElement);
}

exports.deleteToDo = function(id){
    for(var i = 0; i < toDoList.length; i++){
        if(toDoList[i].id === id){
            toDoList.splice(i, 1);
            return toDoList[i];
        }
    }
}

exports.changeStatus = function(id, completed){
    for(var i = 0; i < toDoList.length; i++){
        if(toDoList[i].id === id){
            if(toDoList[i].completed !== completed){
                toDoList[i].completed = completed;
                return toDoList[i];
            }
        }
    }
}

exports.getListByUser = function(user){
    var array = [];
    for(var i = 0; i < toDoList.length; i++){
        if(toDoList[i].assignedTo === user){
            array.push(toDoList[i]);
        }
    }
    return array;
}

exports.getListByStatus = function(completed){
    var array = [];
    for(var i = 0; i < toDoList.length; i++){
        if(toDoList[i].completed === completed){
            array.push(toDoList[i]);
        }
    }
    return array;
}

this.reset();
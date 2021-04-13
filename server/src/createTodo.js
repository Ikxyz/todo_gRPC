import fs from "fs";
const todos = [];

export default function createTodo ({request:{text}},callBack){
    const todoItem = {
        id:todos.length+1,
        text:text
    }

    todos.push(todoItem);

    fs.writeFile("../data.json",JSON.stringify(todos),{},()=>{

        callBack(null,todoItem)

    });

}
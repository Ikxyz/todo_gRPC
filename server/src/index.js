import grpc from "grpc";
import protoLoader from "@grpc/proto-loader";
import createTodo from "./createTodo.js";
import readTodo from "./readTodo.js";
const path = "/Users/ik/Documents/gRPC/todo_gRPC/proto/todo.proto";
const packageDef = protoLoader.loadSync(path,{});
const grpcObject = grpc.loadPackageDefinition(packageDef);


const todoPackage = grpcObject.todoPackage;



const server = new grpc.Server();

server.bind("0.0.0.0:4000",grpc.ServerCredentials.createInsecure());

server.addService(todoPackage.Todo.service,{
    "createTodo":createTodo ,
    "readTodo": readTodo
});

server.start();
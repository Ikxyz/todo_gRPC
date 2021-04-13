import grpc from "grpc";
import protoLoader from "@grpc/proto-loader";

const path = "/Users/ik/Documents/gRPC/todo_gRPC/proto/todo.proto";
const packageDef = protoLoader.loadSync(path,{});
const grpcObject = grpc.loadPackageDefinition(packageDef);

const todoPackage = grpcObject.todoPackage;

const text = process.argv[2];

const client = new todoPackage.Todo("localhost:4000",grpc.credentials.createInsecure());

client.createTodo({"id":-1,"text":text},(err,res)=>{
    console.log(JSON.stringify(res));
})



client.readTodo({},(err,res)=>{
    console.log(JSON.stringify(res));
})
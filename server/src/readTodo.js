import fs from "fs";

export default function readTodo(call, callback) {
  fs.readFile("../data.json", "utf8", (err, data) => {
    if (err) console.error(err);

    callback(null, { items: data });
  });
}

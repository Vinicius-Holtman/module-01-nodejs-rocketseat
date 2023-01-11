import http, { METHODS } from "http"


const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res.end(JSON.stringify(users))
  }

  if (method === "POST" && url === "/users") {
    users.push({
      name: "John Doe",
      email: "johndoe@example.com"
    })

    return res.end("Created user")
  }
  
  
  return res.end("Hello word")
})

server.listen(3333)
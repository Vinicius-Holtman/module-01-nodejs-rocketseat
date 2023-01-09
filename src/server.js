import http from "http"


const server = http.createServer((req, res) => {
  return res.end("Hello word")
})

server.listen(3333)
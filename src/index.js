const server = require("./server.js");
const PORT = process.env.PORT || 3000;

const listener = server.listen(PORT, () =>
  console.log(`Listening on http://localhost:${listener.address().port}`)
);

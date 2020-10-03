import { app } from "./app";
let port = process.env.PORT || 7071;

app.listen(7070, () => console.log(`nearby-api running on port ${port}`));

import { app } from "./app";
import { PORT } from './config'

const serverPort = PORT || 4000

app.listen(serverPort , () => {
    console.log(`Server on port ${PORT}`)
})
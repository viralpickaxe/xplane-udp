import { XPlaneClient } from "../lib/XPlaneClient"

// Create a client on a specific port (this is a value you define in your xplane game settings)
const client = new XPlaneClient(49000)

// Start the UDP listener
client.start()

// Subscribe to the updated event
// This will fire at the rate at which you send UDP updates (set in-game)
client.on("updated",(data) => {
    
    // Do something with the data
    console.log(data)

})
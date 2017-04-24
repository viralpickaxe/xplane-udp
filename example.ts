import { XPlane } from "./lib/XPlane"
import { createSocket, Socket } from "dgram"


let client = new XPlane(12345)
client.start()

client.on("updated",(data) => {

	console.log(data)

})

setInterval(() => {

	const sender = createSocket('udp4');
		sender.send(new Buffer(decodeURIComponent("DATA*%03%00%00%00%00%00%00%00%EF%BF%BDA%EF%BF%BD%3B%1B%EF%BF%BD%EF%BF%BD%3B%EF%BF%BD%00%EF%BF%BD%3B%00%EF%BF%BDy%EF%BF%BD%00%00%00%00%EF%BF%BD%EF%BF%BD%EF%BF%BD%3B%EF%BF%BDt%EF%BF%BD%3B%14%00%00%00%EF%BF%BD%EF%BF%BD%3DB%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD%CB%9BC%EF%BF%BD6%EF%BF%BD%3E%00%00%EF%BF%BD%3F%E9%BB%9BC%00%00%3EB%00%00%EF%BF%BD%EF%BF%BD")), 12345, 'localhost', (err) => {
		sender.close();
	});

}, 1000)
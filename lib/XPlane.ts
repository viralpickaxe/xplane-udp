import { createSocket, Socket } from "dgram"
import { endianness } from "os"
import { EventEmitter } from "events"

/**
 * An XPlane UDP Client
 * 
 * @export
 * @class XPlane
 */
export class XPlane extends EventEmitter {

	/**
	 * The port to create the UDP socket on
	 * 
	 * @public
	 * @type {number}
	 * @memberOf XPlane
	 */
	public port: number

	/**
	 * The UDP socket
	 * 
	 * @private
	 * @type {Socket}
	 * @memberOf XPlane
	 */
	private socket?: Socket

	/**
	 * Creates an instance of XPlane
	 * @param {number} port The port create the UDP socket on
	 * 
	 * @memberOf XPlane
	 */
	constructor(port: number) {

		super()

		this.port = port

	}

	/**
	 * Start listening on the UDP socket
	 * 
	 * @public
	 * @memberOf XPlane
	 */
	public start(): void {

		this.socket = createSocket('udp4', this.processUDP.bind(this))
		this.socket.bind(this.port)

	}

	/**
	 * Process a buffer of data from the UDP socket
	 * 
	 * @param {Buffer} rawBuffer A buffer of data from the socket
	 * 
	 * @private
	 * @memberOf XPlane
	 */
	private processUDP(rawBuffer: Buffer): void {

		let header = rawBuffer.slice(0, 5),
			data = rawBuffer.slice(5)
		
		this.emit('updated', {

			lat: data[`readFloat${endianness()}`](4),
			lng: data[`readFloat${endianness()}`](8),
			alt: data[`readFloat${endianness()}`](12)

		})

	}

}
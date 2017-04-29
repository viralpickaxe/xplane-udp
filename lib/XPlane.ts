import { createSocket, Socket } from "dgram"
import { endianness } from "os"
import { EventEmitter } from "events"
import DataTypes from "./DataTypes"

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
			data = rawBuffer.slice(5),
			datasets = Math.floor(data.length / 36)

		var output = {}

		for ( var i = 0; i < datasets*36; i+=36 ) {
			
			let result = this.processType(data.slice(i,i+36))
			if ( result ) output[result.name] = result.values

		}

		this.emit('updated', output)

	}

	/**
	 * Process a single dataset out of the entire UDP sentence that was set
	 * 
	 * @private
	 * @param {Buffer} sentence The buffer for the dataset 
	 * @returns 
	 * 
	 * @memberOf XPlane
	 */
	private processType(sentence: Buffer) {

		let type_id = sentence[`readInt8`](0),
			type = DataTypes[type_id]

		var values = {}

		if ( type ) {

			var offset = 4

			for ( var i = 0; i < type.data.length; i++ ) {

				var datapoint = type.data[i];

				if ( datapoint.type !== 'pad' ) {

					values[datapoint.name] = sentence[`readFloat${endianness()}`](offset);
					offset += 4

				} else {

					offset += datapoint.length;

				}

			}

			return {
				name: type.name,
				values: values
			}
			
		} else {

			return null

		}

	}

}
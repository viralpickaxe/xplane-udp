// Type definitions for xplane-udp
// Project: XPlane UDP
// Definitions by: Jamie Davies https://iamjamiedavies.com

import { EventEmitter } from "events"

declare module "xplane-udp" {
	
	/**
	 * An XPlane UDP Client
	 * 
	 * @class XPlaneClient
	 */
	class XPlaneClient extends EventEmitter {

		/**
		 * The port to create the UDP socket on
		 * 
		 * @public
		 * @type {number}
		 * @memberOf XPlaneClient
		 */
		public port: number

		/**
		 * The last update state of the data recieved
		 * 
		 * @public
		 * @type {{}}
		 * @memberOf XPlaneClient
		 */
		public data?: {}

		/**
		 * Creates an instance of XPlaneClient
		 * @param {number} port The port create the UDP socket on
		 * 
		 * @memberOf XPlaneClient
		 */
		constructor(port: number)

		/**
		 * Start listening on the UDP socket
		 * 
		 * @public
		 * @memberOf XPlaneClient
		 */
		start(): void

	}

}
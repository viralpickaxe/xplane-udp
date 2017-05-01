// Type definitions for xplane-udp
// Project: XPlane UDP
// Definitions by: Jamie Davies https://iamjamiedavies.com

import { EventEmitter } from "events"

declare module "xplane-udp" {

	/**
	 * An XPlane data update
	 * 
	 * @interface XPlaneUpdate
	 */
	export interface XPlaneUpdate {

		time?: {
			real: Number,
			total: Number,
			mission: Number,
			timer: Number,
			zulu: Number,
			local: Number,
			hobbs: Number
		},
		airspeed?: {
			indicated: Number,
			equivalent: Number,
			true: Number,
			truegnd: Number,
			mph: Number,
			mphair: Number,
			mphgnd: Number
		},
		gload?: {
			mach: Number,
			vvi: Number,
			normal: Number,
			axial: Number,
			side: Number
		},
		angularmoment?: {
			m: Number,
			l: Number,
			n: Number
		},
		angularvelocity?: {
			q: Number,
			p: Number,
			r: Number
		},
		attitude?: {
			pitch: Number,
			roll: Number,
			truehdg: Number,
			maghdg: Number
		},
		aoa?: {
			alpha: Number,
			beta: Number,
			hpath: Number,
			vpath: Number,
			slip: Number
		},
		compass?: {
			mag: Number,
			mavar: Number
		},
		globalposition?: {
			lat: Number,
			lon: Number,
			altmsl: Number,
			altagl: Number,
			runway: Number,
			altind: Number,
			latnorm: Number,
			lonnorm: Number
		},
		simposition?: {
			x: Number,
			y: Number,
			z: Number,
			vx: Number,
			vy: Number,
			vz: Number,
			distft: Number,
			distnm: Number
		},
		throttlecommand?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		throttleactual?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		enginepower?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		enginethrust?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		enginetorque?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		enginerpm?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		proprpm?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		proppitch?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		enginewash?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		n1?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		n2?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		fuelflow?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		itt?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		egt?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		cht?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		oilpressure?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		oiltemp?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		fuelpressure?: {
			1: Number,
			2: Number,
			3: Number,
			4: Number,
			5: Number,
			6: Number,
			7: Number,
			8: Number
		},
		aeroforce?: {
			lift: Number,
			drag: Number,
			side: Number
		},
		engineforce?: {
			normal: Number,
			axial: Number,
			side: Number
		}
		
	}

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
		 * @type {XPlaneUpdate}
		 * @memberOf XPlaneClient
		 */
		public data?: XPlaneUpdate

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

		/**
		 * Subscribe to XPlane Client updates
		 * 
		 * @param {'updated'} event 
		 * @param {(data: XPlaneUpdate) => void} listener 
		 * @returns {this} 
		 * 
		 * @memberOf XPlaneClient
		 */
		on(event: 'updated', listener: (data: XPlaneUpdate) => void): this
		
		on(event: string, listener: Function): this

	}

}
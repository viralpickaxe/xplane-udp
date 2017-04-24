import * as assert from "assert"
import { describe, before, it } from "mocha"

import { XPlane } from "../lib/XPlane"
import { createSocket, Socket } from "dgram"


describe("XPlane", () => {

	describe("constructor", () => {

		it("should create an instance of XPlane", () => {

			let client = new XPlane(1234)

			assert.equal(client["port"], 1234, "Did not create with correct port")

		})

	})

	describe("start", () => {

		it("should start listening on a UDP port", () => {

			let client = new XPlane(1234)

			client.start()

			assert.equal(client["socket"]["type"], "udp4", "Did not create correct socket type")

		})

	})

	describe("processUDP", () => {

		it("should start listening on a UDP port", () => {

			let client = new XPlane(1234)
			client.start()

			assert.equal(client["socket"]["type"], "udp4", "Did not create correct socket type")

		})

	})

})
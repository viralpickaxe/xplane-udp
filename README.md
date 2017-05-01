# XPlane UDP [![Build Status](https://travis-ci.org/viralpickaxe/xplane-udp.svg?branch=master)](https://travis-ci.org/viralpickaxe/xplane-udp)
XPlane UDP Client for Node.js

## Requirements
- NodeJS (v6.X.X)
- Xplane 11

## Usage
```javascript
// Import XPlane class from the package
import { XPlaneClient } from "xplane-udp"


// Create a client on a specific port (this is a value you define in your xplane game settings)
const client = new XPlaneClient(49000)

// Start the UDP listener
client.start()

// Subscribe to the updated event
// This will fire at the rate at which you send UDP updates (set in-game)
client.on("updated", (data) => {
    
    // Do something with the data
    console.log(data)

})

// You can also access the data directly from the client instance
callMeMaybe(() => {
    
    // Access data in the following format `<client>.data.<group>.<value>`
    console.log(client.data.time.real)
    console.log(client.data.airspeed.indicated)

})

```

## Output Data Format (XPlaneUpdate interface)

Below is the structure of the data object returned in the `updated` event, or otherwise accesible directly from `client.data.<group>.<value>`.

- `time`
  - `real` - [s]
  - `total` - [s]
  - `mission` - [s]
  - `timer` - [s]
  - `zulu` - [hh.ss]
  - `local` - [hh.ss]
  - `hobbs`
- `airspeed`
  - `indicated` - KIAS [kts]
  - `equivalent` - KEAS [kts]
  - `true` - KTAS [kts]
  - `truegnd` - KTGS [kts]
  - `mph` - IAS [mph]
  - `mphair` - [mph]
  - `mphgnd` - [mph]
- `gload`
  - `mach` - Mach number [ratio]
  - `vvi` - VVI [fpm]
  - `normal`
  - `axial`
  - `side`
- `angularmoment`
  - `m` - [ftlb]
  - `l` - [ftlb]
  - `n` - [ftlb]
- `angularvelocity`
  - `q` - [rad/s]
  - `p` - [rad/s]
  - `r` - [rad/s]
- `attitude`
  - `pitch` - [deg]
  - `roll` - [deg]
  - `truehdg` - [deg]
  - `maghdg` - [deg]
- `aoa`
  - `alpha` - [deg]
  - `beta` - [deg]
  - `hpath` - [deg]
  - `vpath` - [deg]
  - `slip` - [deg]
- `compass`
  - `mag` - [comp]
  - `mavar` - [deg]
- `globalposition`
  - `lat` - [deg]
  - `lon` - [deg]
  - `altmsl` - [ft]
  - `altagl` - [ft]
  - `runway` - [runway no.]
  - `altind` - [ft]
  - `latnorm`
  - `lonnorm`
- `simposition`
  - `x` - [m]
  - `y` - [m]
  - `z` - [m]
  - `vx` - [m/s]
  - `vy` - [m/s]
  - `vz` - [m/s]
  - `distft` - [ft]
  - `distnm` - [nm]
- `throttlecommand`
  - `[1..8]`
- `throttleactual`
  - `[1..8]`
- `enginepower`
  - `[1..8]` - [hp]
- `enginethrust`
  - `[1..8]`
- `enginetorque`
  - `[1..8]`
- `enginerpm`
  - `[1..8]`
- `proprpm`
  - `[1..8]`
- `proppitch`
  - `[1..8]`
- `enginewash` - propwash or jetwash
  - `[1..8]` - [kts]
- `n1` - turbine N1 %
  - `[1..8]` - [%]
- `n2` - turbine N2 %
  - `[1..8]` - [%]
- `fuelflow`
  - `[1..8]` - [lb/h]
- `itt`
  - `[1..8]` - [deg]
- `egt`
  - `[1..8]` - [deg]
- `cht`
  - `[1..8]` - [deg]
- `oilpressure`
  - `[1..8]` - [psi]
- `oiltemp`
  - `[1..8]` - [deg]
- `fuelpressure`
  - `[1..8]` - [psi]
- `aeroforce`
  - `lift` - [lb]
  - `drag` - [lb]
  - `side` - [lb]
- `engineforce`
  - `normal` - [lb]
  - `axial` - [lb]
  - `side` - [lb]

## Contibute to the code
1. Clone the Repo onto your local machine
2. Install the dependancies: `npm i`
3. Build the code (ts->js): `npm run typescript` (or `typescript-watch` to watch)
4. Contribute!

## Running the tests
1. Clone the Repo onto your local machine
2. Install the dependancies: `npm i`
3. Build the code (ts->js): `npm run typescript`
4. Run the tests: `npm run test`
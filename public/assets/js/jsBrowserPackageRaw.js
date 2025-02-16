/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable @typescript-eslint/no-unused-vars */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const Exports_js_1 = __webpack_require__(2);
// Note: this instantiation ensures the above import isn't
// removed on compile. The import being absent causes an error on running
void new Exports_js_1.AgentConfig();
// Speech SDK API
__exportStar(__webpack_require__(79), exports);



/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AutoDetectSourceLanguagesOpenRangeOptionName = exports.ForceDictationPropertyName = exports.ServicePropertiesPropertyName = exports.CancellationErrorCodePropertyName = exports.OutputFormatPropertyName = void 0;
// Make sure not to export internal modules.
//
__exportStar(__webpack_require__(3), exports);
__exportStar(__webpack_require__(56), exports);
__exportStar(__webpack_require__(55), exports);
__exportStar(__webpack_require__(57), exports);
__exportStar(__webpack_require__(58), exports);
__exportStar(__webpack_require__(59), exports);
__exportStar(__webpack_require__(203), exports);
__exportStar(__webpack_require__(204), exports);
__exportStar(__webpack_require__(205), exports);
__exportStar(__webpack_require__(207), exports);
__exportStar(__webpack_require__(208), exports);
__exportStar(__webpack_require__(209), exports);
__exportStar(__webpack_require__(210), exports);
__exportStar(__webpack_require__(211), exports);
__exportStar(__webpack_require__(212), exports);
__exportStar(__webpack_require__(213), exports);
__exportStar(__webpack_require__(214), exports);
__exportStar(__webpack_require__(195), exports);
__exportStar(__webpack_require__(215), exports);
__exportStar(__webpack_require__(216), exports);
__exportStar(__webpack_require__(217), exports);
__exportStar(__webpack_require__(218), exports);
__exportStar(__webpack_require__(219), exports);
__exportStar(__webpack_require__(220), exports);
__exportStar(__webpack_require__(221), exports);
__exportStar(__webpack_require__(222), exports);
__exportStar(__webpack_require__(223), exports);
__exportStar(__webpack_require__(224), exports);
__exportStar(__webpack_require__(225), exports);
__exportStar(__webpack_require__(226), exports);
__exportStar(__webpack_require__(227), exports);
__exportStar(__webpack_require__(228), exports);
__exportStar(__webpack_require__(229), exports);
__exportStar(__webpack_require__(230), exports);
__exportStar(__webpack_require__(231), exports);
__exportStar(__webpack_require__(232), exports);
__exportStar(__webpack_require__(233), exports);
__exportStar(__webpack_require__(235), exports);
__exportStar(__webpack_require__(236), exports);
__exportStar(__webpack_require__(237), exports);
__exportStar(__webpack_require__(238), exports);
__exportStar(__webpack_require__(242), exports);
__exportStar(__webpack_require__(243), exports);
__exportStar(__webpack_require__(259), exports);
__exportStar(__webpack_require__(260), exports);
__exportStar(__webpack_require__(262), exports);
var AvatarSynthesisAdapter_js_1 = __webpack_require__(263);
Object.defineProperty(exports, "AvatarSynthesisAdapter", ({ enumerable: true, get: function () { return AvatarSynthesisAdapter_js_1.AvatarSynthesisAdapter; } }));
var SpeechSynthesisAdapter_js_1 = __webpack_require__(264);
Object.defineProperty(exports, "SpeechSynthesisAdapter", ({ enumerable: true, get: function () { return SpeechSynthesisAdapter_js_1.SpeechSynthesisAdapter; } }));
__exportStar(__webpack_require__(265), exports);
__exportStar(__webpack_require__(266), exports);
__exportStar(__webpack_require__(267), exports);
__exportStar(__webpack_require__(268), exports);
__exportStar(__webpack_require__(269), exports);
__exportStar(__webpack_require__(270), exports);
__exportStar(__webpack_require__(271), exports);
exports.OutputFormatPropertyName = "OutputFormat";
exports.CancellationErrorCodePropertyName = "CancellationErrorCode";
exports.ServicePropertiesPropertyName = "ServiceProperties";
exports.ForceDictationPropertyName = "ForceDictation";
exports.AutoDetectSourceLanguagesOpenRangeOptionName = "OpenRange";



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CognitiveSubscriptionKeyAuthentication = void 0;
const Exports_js_1 = __webpack_require__(4);
const HeaderNames_js_1 = __webpack_require__(54);
const IAuthentication_js_1 = __webpack_require__(55);
/**
 * @class
 */
class CognitiveSubscriptionKeyAuthentication {
    /**
     * Creates and initializes an instance of the CognitiveSubscriptionKeyAuthentication class.
     * @constructor
     * @param {string} subscriptionKey - The subscription key
     */
    constructor(subscriptionKey) {
        if (!subscriptionKey) {
            throw new Exports_js_1.ArgumentNullError("subscriptionKey");
        }
        this.privAuthInfo = new IAuthentication_js_1.AuthInfo(HeaderNames_js_1.HeaderNames.AuthKey, subscriptionKey);
    }
    /**
     * Fetches the subscription key.
     * @member
     * @function
     * @public
     * @param {string} authFetchEventId - The id to fetch.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetch(authFetchEventId) {
        return Promise.resolve(this.privAuthInfo);
    }
    /**
     * Fetches the subscription key.
     * @member
     * @function
     * @public
     * @param {string} authFetchEventId - The id to fetch.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchOnExpiry(authFetchEventId) {
        return Promise.resolve(this.privAuthInfo);
    }
}
exports.CognitiveSubscriptionKeyAuthentication = CognitiveSubscriptionKeyAuthentication;



/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(36), exports);
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(38), exports);
__exportStar(__webpack_require__(39), exports);
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(42), exports);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(43), exports);
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(47), exports);
var TranslationStatus_js_1 = __webpack_require__(48);
Object.defineProperty(exports, "TranslationStatus", ({ enumerable: true, get: function () { return TranslationStatus_js_1.TranslationStatus; } }));
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(50), exports);
__exportStar(__webpack_require__(51), exports);
__exportStar(__webpack_require__(52), exports);
__exportStar(__webpack_require__(53), exports);



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioStreamNodeErrorEvent = exports.AudioStreamNodeDetachedEvent = exports.AudioStreamNodeAttachedEvent = exports.AudioStreamNodeAttachingEvent = exports.AudioStreamNodeEvent = exports.AudioSourceErrorEvent = exports.AudioSourceOffEvent = exports.AudioSourceReadyEvent = exports.AudioSourceInitializingEvent = exports.AudioSourceEvent = void 0;
/* eslint-disable max-classes-per-file */
const PlatformEvent_js_1 = __webpack_require__(6);
class AudioSourceEvent extends PlatformEvent_js_1.PlatformEvent {
    constructor(eventName, audioSourceId, eventType = PlatformEvent_js_1.EventType.Info) {
        super(eventName, eventType);
        this.privAudioSourceId = audioSourceId;
    }
    get audioSourceId() {
        return this.privAudioSourceId;
    }
}
exports.AudioSourceEvent = AudioSourceEvent;
class AudioSourceInitializingEvent extends AudioSourceEvent {
    constructor(audioSourceId) {
        super("AudioSourceInitializingEvent", audioSourceId);
    }
}
exports.AudioSourceInitializingEvent = AudioSourceInitializingEvent;
class AudioSourceReadyEvent extends AudioSourceEvent {
    constructor(audioSourceId) {
        super("AudioSourceReadyEvent", audioSourceId);
    }
}
exports.AudioSourceReadyEvent = AudioSourceReadyEvent;
class AudioSourceOffEvent extends AudioSourceEvent {
    constructor(audioSourceId) {
        super("AudioSourceOffEvent", audioSourceId);
    }
}
exports.AudioSourceOffEvent = AudioSourceOffEvent;
class AudioSourceErrorEvent extends AudioSourceEvent {
    constructor(audioSourceId, error) {
        super("AudioSourceErrorEvent", audioSourceId, PlatformEvent_js_1.EventType.Error);
        this.privError = error;
    }
    get error() {
        return this.privError;
    }
}
exports.AudioSourceErrorEvent = AudioSourceErrorEvent;
class AudioStreamNodeEvent extends AudioSourceEvent {
    constructor(eventName, audioSourceId, audioNodeId) {
        super(eventName, audioSourceId);
        this.privAudioNodeId = audioNodeId;
    }
    get audioNodeId() {
        return this.privAudioNodeId;
    }
}
exports.AudioStreamNodeEvent = AudioStreamNodeEvent;
class AudioStreamNodeAttachingEvent extends AudioStreamNodeEvent {
    constructor(audioSourceId, audioNodeId) {
        super("AudioStreamNodeAttachingEvent", audioSourceId, audioNodeId);
    }
}
exports.AudioStreamNodeAttachingEvent = AudioStreamNodeAttachingEvent;
class AudioStreamNodeAttachedEvent extends AudioStreamNodeEvent {
    constructor(audioSourceId, audioNodeId) {
        super("AudioStreamNodeAttachedEvent", audioSourceId, audioNodeId);
    }
}
exports.AudioStreamNodeAttachedEvent = AudioStreamNodeAttachedEvent;
class AudioStreamNodeDetachedEvent extends AudioStreamNodeEvent {
    constructor(audioSourceId, audioNodeId) {
        super("AudioStreamNodeDetachedEvent", audioSourceId, audioNodeId);
    }
}
exports.AudioStreamNodeDetachedEvent = AudioStreamNodeDetachedEvent;
class AudioStreamNodeErrorEvent extends AudioStreamNodeEvent {
    constructor(audioSourceId, audioNodeId, error) {
        super("AudioStreamNodeErrorEvent", audioSourceId, audioNodeId);
        this.privError = error;
    }
    get error() {
        return this.privError;
    }
}
exports.AudioStreamNodeErrorEvent = AudioStreamNodeErrorEvent;



/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlatformEvent = exports.EventType = void 0;
const Guid_js_1 = __webpack_require__(7);
var EventType;
(function (EventType) {
    EventType[EventType["Debug"] = 0] = "Debug";
    EventType[EventType["Info"] = 1] = "Info";
    EventType[EventType["Warning"] = 2] = "Warning";
    EventType[EventType["Error"] = 3] = "Error";
    EventType[EventType["None"] = 4] = "None";
})(EventType = exports.EventType || (exports.EventType = {}));
class PlatformEvent {
    constructor(eventName, eventType) {
        this.privName = eventName;
        this.privEventId = Guid_js_1.createNoDashGuid();
        this.privEventTime = new Date().toISOString();
        this.privEventType = eventType;
        this.privMetadata = {};
    }
    get name() {
        return this.privName;
    }
    get eventId() {
        return this.privEventId;
    }
    get eventTime() {
        return this.privEventTime;
    }
    get eventType() {
        return this.privEventType;
    }
    get metadata() {
        return this.privMetadata;
    }
}
exports.PlatformEvent = PlatformEvent;



/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createNoDashGuid = exports.createGuid = void 0;
const uuid_1 = __webpack_require__(8);
const createGuid = () => uuid_1.v4();
exports.createGuid = createGuid;
const createNoDashGuid = () => createGuid().replace(new RegExp("-", "g"), "").toUpperCase();
exports.createNoDashGuid = createNoDashGuid;



/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function get() {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function get() {
    return _parse.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function get() {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function get() {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function get() {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function get() {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function get() {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function get() {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function get() {
    return _version.default;
  }
}));

var _v = _interopRequireDefault(__webpack_require__(9));

var _v2 = _interopRequireDefault(__webpack_require__(14));

var _v3 = _interopRequireDefault(__webpack_require__(18));

var _v4 = _interopRequireDefault(__webpack_require__(20));

var _nil = _interopRequireDefault(__webpack_require__(22));

var _version = _interopRequireDefault(__webpack_require__(23));

var _validate = _interopRequireDefault(__webpack_require__(12));

var _stringify = _interopRequireDefault(__webpack_require__(11));

var _parse = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__webpack_require__(10));

var _stringify = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.unsafeStringify)(b);
}

var _default = v1;
exports["default"] = _default;

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.unsafeStringify = unsafeStringify;

var _validate = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports["default"] = _default;

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regex = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports["default"] = _default;

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports["default"] = _default;

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(15));

var _md = _interopRequireDefault(__webpack_require__(17));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports["default"] = _default;

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.URL = exports.DNS = void 0;
exports["default"] = v35;

var _stringify = __webpack_require__(11);

var _parse = _interopRequireDefault(__webpack_require__(16));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports["default"] = _default;

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var _default = md5;
exports["default"] = _default;

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _native = _interopRequireDefault(__webpack_require__(19));

var _rng = _interopRequireDefault(__webpack_require__(10));

var _stringify = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }

  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.unsafeStringify)(rnds);
}

var _default = v4;
exports["default"] = _default;

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default = {
  randomUUID
};
exports["default"] = _default;

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(15));

var _sha = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports["default"] = _default;

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var _default = sha1;
exports["default"] = _default;

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports["default"] = _default;

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

var _default = version;
exports["default"] = _default;

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionMessageSentEvent = exports.ConnectionMessageReceivedEvent = exports.ConnectionEstablishErrorEvent = exports.ConnectionErrorEvent = exports.ConnectionClosedEvent = exports.ConnectionEstablishedEvent = exports.ConnectionStartEvent = exports.ConnectionEvent = exports.ServiceEvent = void 0;
const PlatformEvent_js_1 = __webpack_require__(6);
class ServiceEvent extends PlatformEvent_js_1.PlatformEvent {
    constructor(eventName, jsonstring, eventType = PlatformEvent_js_1.EventType.Info) {
        super(eventName, eventType);
        this.privJsonResult = jsonstring;
    }
    get jsonString() {
        return this.privJsonResult;
    }
}
exports.ServiceEvent = ServiceEvent;
class ConnectionEvent extends PlatformEvent_js_1.PlatformEvent {
    constructor(eventName, connectionId, eventType = PlatformEvent_js_1.EventType.Info) {
        super(eventName, eventType);
        this.privConnectionId = connectionId;
    }
    get connectionId() {
        return this.privConnectionId;
    }
}
exports.ConnectionEvent = ConnectionEvent;
class ConnectionStartEvent extends ConnectionEvent {
    constructor(connectionId, uri, headers) {
        super("ConnectionStartEvent", connectionId);
        this.privUri = uri;
        this.privHeaders = headers;
    }
    get uri() {
        return this.privUri;
    }
    get headers() {
        return this.privHeaders;
    }
}
exports.ConnectionStartEvent = ConnectionStartEvent;
class ConnectionEstablishedEvent extends ConnectionEvent {
    constructor(connectionId) {
        super("ConnectionEstablishedEvent", connectionId);
    }
}
exports.ConnectionEstablishedEvent = ConnectionEstablishedEvent;
class ConnectionClosedEvent extends ConnectionEvent {
    constructor(connectionId, statusCode, reason) {
        super("ConnectionClosedEvent", connectionId, PlatformEvent_js_1.EventType.Debug);
        this.privReason = reason;
        this.privStatusCode = statusCode;
    }
    get reason() {
        return this.privReason;
    }
    get statusCode() {
        return this.privStatusCode;
    }
}
exports.ConnectionClosedEvent = ConnectionClosedEvent;
class ConnectionErrorEvent extends ConnectionEvent {
    constructor(connectionId, message, type) {
        super("ConnectionErrorEvent", connectionId, PlatformEvent_js_1.EventType.Debug);
        this.privMessage = message;
        this.privType = type;
    }
    get message() {
        return this.privMessage;
    }
    get type() {
        return this.privType;
    }
}
exports.ConnectionErrorEvent = ConnectionErrorEvent;
class ConnectionEstablishErrorEvent extends ConnectionEvent {
    constructor(connectionId, statuscode, reason) {
        super("ConnectionEstablishErrorEvent", connectionId, PlatformEvent_js_1.EventType.Error);
        this.privStatusCode = statuscode;
        this.privReason = reason;
    }
    get reason() {
        return this.privReason;
    }
    get statusCode() {
        return this.privStatusCode;
    }
}
exports.ConnectionEstablishErrorEvent = ConnectionEstablishErrorEvent;
class ConnectionMessageReceivedEvent extends ConnectionEvent {
    constructor(connectionId, networkReceivedTimeISO, message) {
        super("ConnectionMessageReceivedEvent", connectionId);
        this.privNetworkReceivedTime = networkReceivedTimeISO;
        this.privMessage = message;
    }
    get networkReceivedTime() {
        return this.privNetworkReceivedTime;
    }
    get message() {
        return this.privMessage;
    }
}
exports.ConnectionMessageReceivedEvent = ConnectionMessageReceivedEvent;
class ConnectionMessageSentEvent extends ConnectionEvent {
    constructor(connectionId, networkSentTimeISO, message) {
        super("ConnectionMessageSentEvent", connectionId);
        this.privNetworkSentTime = networkSentTimeISO;
        this.privMessage = message;
    }
    get networkSentTime() {
        return this.privNetworkSentTime;
    }
    get message() {
        return this.privMessage;
    }
}
exports.ConnectionMessageSentEvent = ConnectionMessageSentEvent;



/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/* eslint-disable @typescript-eslint/no-unsafe-return */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionMessage = exports.MessageType = void 0;
const Error_js_1 = __webpack_require__(26);
const Guid_js_1 = __webpack_require__(7);
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Text"] = 0] = "Text";
    MessageType[MessageType["Binary"] = 1] = "Binary";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
class ConnectionMessage {
    constructor(messageType, body, headers, id) {
        this.privBody = null;
        if (messageType === MessageType.Text && body && !(typeof (body) === "string")) {
            throw new Error_js_1.InvalidOperationError("Payload must be a string");
        }
        if (messageType === MessageType.Binary && body && !(body instanceof ArrayBuffer)) {
            throw new Error_js_1.InvalidOperationError("Payload must be ArrayBuffer");
        }
        this.privMessageType = messageType;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.privBody = body;
        this.privHeaders = headers ? headers : {};
        this.privId = id ? id : Guid_js_1.createNoDashGuid();
        switch (this.messageType) {
            case MessageType.Binary:
                this.privSize = this.binaryBody !== null ? this.binaryBody.byteLength : 0;
                break;
            case MessageType.Text:
                this.privSize = this.textBody.length;
        }
    }
    get messageType() {
        return this.privMessageType;
    }
    get headers() {
        return this.privHeaders;
    }
    get body() {
        return this.privBody;
    }
    get textBody() {
        if (this.privMessageType === MessageType.Binary) {
            throw new Error_js_1.InvalidOperationError("Not supported for binary message");
        }
        return this.privBody;
    }
    get binaryBody() {
        if (this.privMessageType === MessageType.Text) {
            throw new Error_js_1.InvalidOperationError("Not supported for text message");
        }
        return this.privBody;
    }
    get id() {
        return this.privId;
    }
}
exports.ConnectionMessage = ConnectionMessage;



/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectDisposedError = exports.InvalidOperationError = exports.ArgumentNullError = void 0;
/* eslint-disable max-classes-per-file */
/**
 * The error that is thrown when an argument passed in is null.
 *
 * @export
 * @class ArgumentNullError
 * @extends {Error}
 */
class ArgumentNullError extends Error {
    /**
     * Creates an instance of ArgumentNullError.
     *
     * @param {string} argumentName - Name of the argument that is null
     *
     * @memberOf ArgumentNullError
     */
    constructor(argumentName) {
        super(argumentName);
        this.name = "ArgumentNull";
        this.message = argumentName;
    }
}
exports.ArgumentNullError = ArgumentNullError;
/**
 * The error that is thrown when an invalid operation is performed in the code.
 *
 * @export
 * @class InvalidOperationError
 * @extends {Error}
 */
class InvalidOperationError extends Error {
    /**
     * Creates an instance of InvalidOperationError.
     *
     * @param {string} error - The error
     *
     * @memberOf InvalidOperationError
     */
    constructor(error) {
        super(error);
        this.name = "InvalidOperation";
        this.message = error;
    }
}
exports.InvalidOperationError = InvalidOperationError;
/**
 * The error that is thrown when an object is disposed.
 *
 * @export
 * @class ObjectDisposedError
 * @extends {Error}
 */
class ObjectDisposedError extends Error {
    /**
     * Creates an instance of ObjectDisposedError.
     *
     * @param {string} objectName - The object that is disposed
     * @param {string} error - The error
     *
     * @memberOf ObjectDisposedError
     */
    constructor(objectName, error) {
        super(error);
        this.name = objectName + "ObjectDisposed";
        this.message = error;
    }
}
exports.ObjectDisposedError = ObjectDisposedError;



/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionOpenResponse = void 0;
class ConnectionOpenResponse {
    constructor(statusCode, reason) {
        this.privStatusCode = statusCode;
        this.privReason = reason;
    }
    get statusCode() {
        return this.privStatusCode;
    }
    get reason() {
        return this.privReason;
    }
}
exports.ConnectionOpenResponse = ConnectionOpenResponse;



/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeferralMap = void 0;
/**
 * The error that is thrown when an argument passed in is null.
 *
 * @export
 * @class DefferalMap
 */
class DeferralMap {
    constructor() {
        this.privMap = {};
    }
    add(id, deferral) {
        this.privMap[id] = deferral;
    }
    getId(id) {
        return this.privMap[id];
    }
    complete(id, result) {
        try {
            this.privMap[id].resolve(result);
        }
        catch (error) {
            this.privMap[id].reject(error);
        }
        finally {
            this.privMap[id] = undefined;
        }
    }
}
exports.DeferralMap = DeferralMap;



/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SendingAgentContextMessageEvent = exports.DialogEvent = void 0;
const PlatformEvent_js_1 = __webpack_require__(6);
class DialogEvent extends PlatformEvent_js_1.PlatformEvent {
    constructor(eventName, eventType = PlatformEvent_js_1.EventType.Info) {
        super(eventName, eventType);
    }
}
exports.DialogEvent = DialogEvent;
class SendingAgentContextMessageEvent extends DialogEvent {
    constructor(agentConfig) {
        super("SendingAgentContextMessageEvent");
        this.privAgentConfig = agentConfig;
    }
    get agentConfig() {
        return this.privAgentConfig;
    }
}
exports.SendingAgentContextMessageEvent = SendingAgentContextMessageEvent;



/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Events = void 0;
const Error_js_1 = __webpack_require__(26);
const EventSource_js_1 = __webpack_require__(31);
class Events {
    static setEventSource(eventSource) {
        if (!eventSource) {
            throw new Error_js_1.ArgumentNullError("eventSource");
        }
        Events.privInstance = eventSource;
    }
    static get instance() {
        return Events.privInstance;
    }
}
exports.Events = Events;
Events.privInstance = new EventSource_js_1.EventSource();



/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventSource = void 0;
const Error_js_1 = __webpack_require__(26);
const Guid_js_1 = __webpack_require__(7);
class EventSource {
    constructor(metadata) {
        this.privEventListeners = {};
        this.privIsDisposed = false;
        this.privConsoleListener = undefined;
        this.privMetadata = metadata;
    }
    onEvent(event) {
        if (this.isDisposed()) {
            throw (new Error_js_1.ObjectDisposedError("EventSource"));
        }
        if (this.metadata) {
            for (const paramName in this.metadata) {
                if (paramName) {
                    if (event.metadata) {
                        if (!event.metadata[paramName]) {
                            event.metadata[paramName] = this.metadata[paramName];
                        }
                    }
                }
            }
        }
        for (const eventId in this.privEventListeners) {
            if (eventId && this.privEventListeners[eventId]) {
                this.privEventListeners[eventId](event);
            }
        }
    }
    attach(onEventCallback) {
        const id = Guid_js_1.createNoDashGuid();
        this.privEventListeners[id] = onEventCallback;
        return {
            detach: () => {
                delete this.privEventListeners[id];
                return Promise.resolve();
            },
        };
    }
    attachListener(listener) {
        return this.attach((e) => listener.onEvent(e));
    }
    attachConsoleListener(listener) {
        if (!!this.privConsoleListener) {
            void this.privConsoleListener.detach(); // Detach implementation for eventListeners is synchronous
        }
        this.privConsoleListener = this.attach((e) => listener.onEvent(e));
        return this.privConsoleListener;
    }
    isDisposed() {
        return this.privIsDisposed;
    }
    dispose() {
        this.privEventListeners = null;
        this.privIsDisposed = true;
    }
    get metadata() {
        return this.privMetadata;
    }
}
exports.EventSource = EventSource;



/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));



/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionState = void 0;
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["None"] = 0] = "None";
    ConnectionState[ConnectionState["Connected"] = 1] = "Connected";
    ConnectionState[ConnectionState["Connecting"] = 2] = "Connecting";
    ConnectionState[ConnectionState["Disconnected"] = 3] = "Disconnected";
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));



/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));



/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));



/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));



/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));



/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));



/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));



/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));



/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));



/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.List = void 0;
const Error_js_1 = __webpack_require__(26);
class List {
    constructor(list) {
        this.privSubscriptionIdCounter = 0;
        this.privAddSubscriptions = {};
        this.privRemoveSubscriptions = {};
        this.privDisposedSubscriptions = {};
        this.privDisposeReason = null;
        this.privList = [];
        // copy the list rather than taking as is.
        if (list) {
            for (const item of list) {
                this.privList.push(item);
            }
        }
    }
    get(itemIndex) {
        this.throwIfDisposed();
        return this.privList[itemIndex];
    }
    first() {
        return this.get(0);
    }
    last() {
        return this.get(this.length() - 1);
    }
    add(item) {
        this.throwIfDisposed();
        this.insertAt(this.privList.length, item);
    }
    insertAt(index, item) {
        this.throwIfDisposed();
        if (index === 0) {
            this.privList.unshift(item);
        }
        else if (index === this.privList.length) {
            this.privList.push(item);
        }
        else {
            this.privList.splice(index, 0, item);
        }
        this.triggerSubscriptions(this.privAddSubscriptions);
    }
    removeFirst() {
        this.throwIfDisposed();
        return this.removeAt(0);
    }
    removeLast() {
        this.throwIfDisposed();
        return this.removeAt(this.length() - 1);
    }
    removeAt(index) {
        this.throwIfDisposed();
        return this.remove(index, 1)[0];
    }
    remove(index, count) {
        this.throwIfDisposed();
        const removedElements = this.privList.splice(index, count);
        this.triggerSubscriptions(this.privRemoveSubscriptions);
        return removedElements;
    }
    clear() {
        this.throwIfDisposed();
        this.remove(0, this.length());
    }
    length() {
        this.throwIfDisposed();
        return this.privList.length;
    }
    onAdded(addedCallback) {
        this.throwIfDisposed();
        const subscriptionId = this.privSubscriptionIdCounter++;
        this.privAddSubscriptions[subscriptionId] = addedCallback;
        return {
            detach: () => {
                delete this.privAddSubscriptions[subscriptionId];
                return Promise.resolve();
            },
        };
    }
    onRemoved(removedCallback) {
        this.throwIfDisposed();
        const subscriptionId = this.privSubscriptionIdCounter++;
        this.privRemoveSubscriptions[subscriptionId] = removedCallback;
        return {
            detach: () => {
                delete this.privRemoveSubscriptions[subscriptionId];
                return Promise.resolve();
            },
        };
    }
    onDisposed(disposedCallback) {
        this.throwIfDisposed();
        const subscriptionId = this.privSubscriptionIdCounter++;
        this.privDisposedSubscriptions[subscriptionId] = disposedCallback;
        return {
            detach: () => {
                delete this.privDisposedSubscriptions[subscriptionId];
                return Promise.resolve();
            },
        };
    }
    join(seperator) {
        this.throwIfDisposed();
        return this.privList.join(seperator);
    }
    toArray() {
        const cloneCopy = Array();
        this.privList.forEach((val) => {
            cloneCopy.push(val);
        });
        return cloneCopy;
    }
    any(callback) {
        this.throwIfDisposed();
        if (callback) {
            return this.where(callback).length() > 0;
        }
        else {
            return this.length() > 0;
        }
    }
    all(callback) {
        this.throwIfDisposed();
        return this.where(callback).length() === this.length();
    }
    forEach(callback) {
        this.throwIfDisposed();
        for (let i = 0; i < this.length(); i++) {
            callback(this.privList[i], i);
        }
    }
    select(callback) {
        this.throwIfDisposed();
        const selectList = [];
        for (let i = 0; i < this.privList.length; i++) {
            selectList.push(callback(this.privList[i], i));
        }
        return new List(selectList);
    }
    where(callback) {
        this.throwIfDisposed();
        const filteredList = new List();
        for (let i = 0; i < this.privList.length; i++) {
            if (callback(this.privList[i], i)) {
                filteredList.add(this.privList[i]);
            }
        }
        return filteredList;
    }
    orderBy(compareFn) {
        this.throwIfDisposed();
        const clonedArray = this.toArray();
        const orderedArray = clonedArray.sort(compareFn);
        return new List(orderedArray);
    }
    orderByDesc(compareFn) {
        this.throwIfDisposed();
        return this.orderBy((a, b) => compareFn(b, a));
    }
    clone() {
        this.throwIfDisposed();
        return new List(this.toArray());
    }
    concat(list) {
        this.throwIfDisposed();
        return new List(this.privList.concat(list.toArray()));
    }
    concatArray(array) {
        this.throwIfDisposed();
        return new List(this.privList.concat(array));
    }
    isDisposed() {
        return this.privList == null;
    }
    dispose(reason) {
        if (!this.isDisposed()) {
            this.privDisposeReason = reason;
            this.privList = null;
            this.privAddSubscriptions = null;
            this.privRemoveSubscriptions = null;
            this.triggerSubscriptions(this.privDisposedSubscriptions);
        }
    }
    throwIfDisposed() {
        if (this.isDisposed()) {
            throw new Error_js_1.ObjectDisposedError("List", this.privDisposeReason);
        }
    }
    triggerSubscriptions(subscriptions) {
        if (subscriptions) {
            for (const subscriptionId in subscriptions) {
                if (subscriptionId) {
                    subscriptions[subscriptionId]();
                }
            }
        }
    }
}
exports.List = List;



/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.marshalPromiseToCallbacks = exports.Sink = exports.Deferred = exports.PromiseResultEventSource = exports.PromiseResult = exports.PromiseState = void 0;
/* eslint-disable max-classes-per-file, @typescript-eslint/typedef */
var PromiseState;
(function (PromiseState) {
    PromiseState[PromiseState["None"] = 0] = "None";
    PromiseState[PromiseState["Resolved"] = 1] = "Resolved";
    PromiseState[PromiseState["Rejected"] = 2] = "Rejected";
})(PromiseState = exports.PromiseState || (exports.PromiseState = {}));
class PromiseResult {
    constructor(promiseResultEventSource) {
        this.throwIfError = () => {
            if (this.isError) {
                throw this.error;
            }
        };
        promiseResultEventSource.on((result) => {
            if (!this.privIsCompleted) {
                this.privIsCompleted = true;
                this.privIsError = false;
                this.privResult = result;
            }
        }, (error) => {
            if (!this.privIsCompleted) {
                this.privIsCompleted = true;
                this.privIsError = true;
                this.privError = error;
            }
        });
    }
    get isCompleted() {
        return this.privIsCompleted;
    }
    get isError() {
        return this.privIsError;
    }
    get error() {
        return this.privError;
    }
    get result() {
        return this.privResult;
    }
}
exports.PromiseResult = PromiseResult;
class PromiseResultEventSource {
    constructor() {
        this.setResult = (result) => {
            this.privOnSetResult(result);
        };
        this.setError = (error) => {
            this.privOnSetError(error);
        };
        this.on = (onSetResult, onSetError) => {
            this.privOnSetResult = onSetResult;
            this.privOnSetError = onSetError;
        };
    }
}
exports.PromiseResultEventSource = PromiseResultEventSource;
class Deferred {
    constructor() {
        this.resolve = (result) => {
            this.privResolve(result);
            return this;
        };
        this.reject = (error) => {
            this.privReject(error);
            return this;
        };
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        this.privPromise = new Promise((resolve, reject) => {
            this.privResolve = resolve;
            this.privReject = reject;
        });
    }
    get promise() {
        return this.privPromise;
    }
}
exports.Deferred = Deferred;
class Sink {
    constructor() {
        this.privState = PromiseState.None;
        this.privPromiseResult = null;
        this.privPromiseResultEvents = null;
        this.privSuccessHandlers = [];
        this.privErrorHandlers = [];
        this.privPromiseResultEvents = new PromiseResultEventSource();
        this.privPromiseResult = new PromiseResult(this.privPromiseResultEvents);
    }
    get state() {
        return this.privState;
    }
    get result() {
        return this.privPromiseResult;
    }
    resolve(result) {
        if (this.privState !== PromiseState.None) {
            throw new Error("'Cannot resolve a completed promise'");
        }
        this.privState = PromiseState.Resolved;
        this.privPromiseResultEvents.setResult(result);
        for (let i = 0; i < this.privSuccessHandlers.length; i++) {
            this.executeSuccessCallback(result, this.privSuccessHandlers[i], this.privErrorHandlers[i]);
        }
        this.detachHandlers();
    }
    reject(error) {
        if (this.privState !== PromiseState.None) {
            throw new Error("'Cannot reject a completed promise'");
        }
        this.privState = PromiseState.Rejected;
        this.privPromiseResultEvents.setError(error);
        for (const errorHandler of this.privErrorHandlers) {
            this.executeErrorCallback(error, errorHandler);
        }
        this.detachHandlers();
    }
    on(successCallback, errorCallback) {
        if (successCallback == null) {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            successCallback = () => { };
        }
        if (this.privState === PromiseState.None) {
            this.privSuccessHandlers.push(successCallback);
            this.privErrorHandlers.push(errorCallback);
        }
        else {
            if (this.privState === PromiseState.Resolved) {
                this.executeSuccessCallback(this.privPromiseResult.result, successCallback, errorCallback);
            }
            else if (this.privState === PromiseState.Rejected) {
                this.executeErrorCallback(this.privPromiseResult.error, errorCallback);
            }
            this.detachHandlers();
        }
    }
    executeSuccessCallback(result, successCallback, errorCallback) {
        try {
            successCallback(result);
        }
        catch (e) {
            this.executeErrorCallback(`'Unhandled callback error: ${e}'`, errorCallback);
        }
    }
    executeErrorCallback(error, errorCallback) {
        if (errorCallback) {
            try {
                errorCallback(error);
            }
            catch (e) {
                throw new Error(`'Unhandled callback error: ${e}. InnerError: ${error}'`);
            }
        }
        else {
            throw new Error(`'Unhandled error: ${error}'`);
        }
    }
    detachHandlers() {
        this.privErrorHandlers = [];
        this.privSuccessHandlers = [];
    }
}
exports.Sink = Sink;
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function marshalPromiseToCallbacks(promise, cb, err) {
    promise.then((val) => {
        try {
            if (!!cb) {
                cb(val);
            }
        }
        catch (error) {
            if (!!err) {
                try {
                    if (error instanceof Error) {
                        const typedError = error;
                        err(typedError.name + ": " + typedError.message);
                    }
                    else {
                        err(error);
                    }
                    // eslint-disable-next-line no-empty
                }
                catch (error) { }
            }
        }
    }, (error) => {
        if (!!err) {
            try {
                if (error instanceof Error) {
                    const typedError = error;
                    err(typedError.name + ": " + typedError.message);
                }
                else {
                    err(error);
                }
                // eslint-disable-next-line no-empty
            }
            catch (error) { }
        }
    });
}
exports.marshalPromiseToCallbacks = marshalPromiseToCallbacks;



/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Queue = void 0;
const Error_js_1 = __webpack_require__(26);
const List_js_1 = __webpack_require__(42);
const Promise_js_1 = __webpack_require__(43);
var SubscriberType;
(function (SubscriberType) {
    SubscriberType[SubscriberType["Dequeue"] = 0] = "Dequeue";
    SubscriberType[SubscriberType["Peek"] = 1] = "Peek";
})(SubscriberType || (SubscriberType = {}));
class Queue {
    constructor(list) {
        this.privPromiseStore = new List_js_1.List();
        this.privIsDrainInProgress = false;
        this.privIsDisposing = false;
        this.privDisposeReason = null;
        this.privList = list ? list : new List_js_1.List();
        this.privDetachables = [];
        this.privSubscribers = new List_js_1.List();
        this.privDetachables.push(this.privList.onAdded(() => this.drain()));
    }
    enqueue(item) {
        this.throwIfDispose();
        this.enqueueFromPromise(new Promise((resolve) => resolve(item)));
    }
    enqueueFromPromise(promise) {
        this.throwIfDispose();
        promise.then((val) => {
            this.privList.add(val);
            // eslint-disable-next-line @typescript-eslint/no-empty-function
        }, () => { });
    }
    dequeue() {
        this.throwIfDispose();
        const deferredSubscriber = new Promise_js_1.Deferred();
        if (this.privSubscribers) {
            this.privSubscribers.add({ deferral: deferredSubscriber, type: SubscriberType.Dequeue });
            this.drain();
        }
        return deferredSubscriber.promise;
    }
    peek() {
        this.throwIfDispose();
        const deferredSubscriber = new Promise_js_1.Deferred();
        const subs = this.privSubscribers;
        if (subs) {
            this.privSubscribers.add({ deferral: deferredSubscriber, type: SubscriberType.Peek });
            this.drain();
        }
        return deferredSubscriber.promise;
    }
    length() {
        this.throwIfDispose();
        return this.privList.length();
    }
    isDisposed() {
        return this.privSubscribers == null;
    }
    async drainAndDispose(pendingItemProcessor, reason) {
        if (!this.isDisposed() && !this.privIsDisposing) {
            this.privDisposeReason = reason;
            this.privIsDisposing = true;
            const subs = this.privSubscribers;
            if (subs) {
                while (subs.length() > 0) {
                    const subscriber = subs.removeFirst();
                    // TODO: this needs work (Resolve(null) instead?).
                    subscriber.deferral.resolve(undefined);
                    // subscriber.deferral.reject("Disposed");
                }
                // note: this block assumes cooperative multitasking, i.e.,
                // between the if-statement and the assignment there are no
                // thread switches.
                // Reason is that between the initial const = this.; and this
                // point there is the derral.resolve() operation that might have
                // caused recursive calls to the Queue, especially, calling
                // Dispose() on the queue alredy (which would reset the var
                // here to null!).
                // That should generally hold true for javascript...
                if (this.privSubscribers === subs) {
                    this.privSubscribers = subs;
                }
            }
            for (const detachable of this.privDetachables) {
                await detachable.detach();
            }
            if (this.privPromiseStore.length() > 0 && pendingItemProcessor) {
                const promiseArray = [];
                this.privPromiseStore.toArray().forEach((wrapper) => {
                    promiseArray.push(wrapper);
                });
                return Promise.all(promiseArray).finally(() => {
                    this.privSubscribers = null;
                    this.privList.forEach((item) => {
                        pendingItemProcessor(item);
                    });
                    this.privList = null;
                    return;
                }).then();
            }
            else {
                this.privSubscribers = null;
                this.privList = null;
            }
        }
    }
    async dispose(reason) {
        await this.drainAndDispose(null, reason);
    }
    drain() {
        if (!this.privIsDrainInProgress && !this.privIsDisposing) {
            this.privIsDrainInProgress = true;
            const subs = this.privSubscribers;
            const lists = this.privList;
            if (subs && lists) {
                while (lists.length() > 0 && subs.length() > 0 && !this.privIsDisposing) {
                    const subscriber = subs.removeFirst();
                    if (subscriber.type === SubscriberType.Peek) {
                        subscriber.deferral.resolve(lists.first());
                    }
                    else {
                        const dequeuedItem = lists.removeFirst();
                        subscriber.deferral.resolve(dequeuedItem);
                    }
                }
                // note: this block assumes cooperative multitasking, i.e.,
                // between the if-statement and the assignment there are no
                // thread switches.
                // Reason is that between the initial const = this.; and this
                // point there is the derral.resolve() operation that might have
                // caused recursive calls to the Queue, especially, calling
                // Dispose() on the queue alredy (which would reset the var
                // here to null!).
                // That should generally hold true for javascript...
                if (this.privSubscribers === subs) {
                    this.privSubscribers = subs;
                }
                // note: this block assumes cooperative multitasking, i.e.,
                // between the if-statement and the assignment there are no
                // thread switches.
                // Reason is that between the initial const = this.; and this
                // point there is the derral.resolve() operation that might have
                // caused recursive calls to the Queue, especially, calling
                // Dispose() on the queue alredy (which would reset the var
                // here to null!).
                // That should generally hold true for javascript...
                if (this.privList === lists) {
                    this.privList = lists;
                }
            }
            this.privIsDrainInProgress = false;
        }
    }
    throwIfDispose() {
        if (this.isDisposed()) {
            if (this.privDisposeReason) {
                throw new Error_js_1.InvalidOperationError(this.privDisposeReason);
            }
            throw new Error_js_1.ObjectDisposedError("Queue");
        }
        else if (this.privIsDisposing) {
            throw new Error_js_1.InvalidOperationError("Queue disposing");
        }
    }
}
exports.Queue = Queue;



/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RawWebsocketMessage = void 0;
const ConnectionMessage_js_1 = __webpack_require__(25);
const Error_js_1 = __webpack_require__(26);
const Guid_js_1 = __webpack_require__(7);
class RawWebsocketMessage {
    constructor(messageType, payload, id) {
        this.privPayload = null;
        if (!payload) {
            throw new Error_js_1.ArgumentNullError("payload");
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (messageType === ConnectionMessage_js_1.MessageType.Binary && Object.getPrototypeOf(payload).constructor.name !== "ArrayBuffer") {
            throw new Error_js_1.InvalidOperationError("Payload must be ArrayBuffer");
        }
        if (messageType === ConnectionMessage_js_1.MessageType.Text && !(typeof (payload) === "string")) {
            throw new Error_js_1.InvalidOperationError("Payload must be a string");
        }
        this.privMessageType = messageType;
        this.privPayload = payload;
        this.privId = id ? id : Guid_js_1.createNoDashGuid();
    }
    get messageType() {
        return this.privMessageType;
    }
    get payload() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.privPayload;
    }
    get textContent() {
        if (this.privMessageType === ConnectionMessage_js_1.MessageType.Binary) {
            throw new Error_js_1.InvalidOperationError("Not supported for binary message");
        }
        return this.privPayload;
    }
    get binaryContent() {
        if (this.privMessageType === ConnectionMessage_js_1.MessageType.Text) {
            throw new Error_js_1.InvalidOperationError("Not supported for text message");
        }
        return this.privPayload;
    }
    get id() {
        return this.privId;
    }
}
exports.RawWebsocketMessage = RawWebsocketMessage;



/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RiffPcmEncoder = void 0;
class RiffPcmEncoder {
    constructor(actualSampleRate, desiredSampleRate) {
        this.privActualSampleRate = actualSampleRate;
        this.privDesiredSampleRate = desiredSampleRate;
    }
    encode(actualAudioFrame) {
        const audioFrame = this.downSampleAudioFrame(actualAudioFrame, this.privActualSampleRate, this.privDesiredSampleRate);
        if (!audioFrame) {
            return null;
        }
        const audioLength = audioFrame.length * 2;
        const buffer = new ArrayBuffer(audioLength);
        const view = new DataView(buffer);
        this.floatTo16BitPCM(view, 0, audioFrame);
        return buffer;
    }
    setString(view, offset, str) {
        for (let i = 0; i < str.length; i++) {
            view.setUint8(offset + i, str.charCodeAt(i));
        }
    }
    floatTo16BitPCM(view, offset, input) {
        for (let i = 0; i < input.length; i++, offset += 2) {
            const s = Math.max(-1, Math.min(1, input[i]));
            view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        }
    }
    downSampleAudioFrame(srcFrame, srcRate, dstRate) {
        if (!srcFrame) {
            return null;
        }
        if (dstRate === srcRate || dstRate > srcRate) {
            return srcFrame;
        }
        const ratio = srcRate / dstRate;
        const dstLength = Math.round(srcFrame.length / ratio);
        const dstFrame = new Float32Array(dstLength);
        let srcOffset = 0;
        let dstOffset = 0;
        while (dstOffset < dstLength) {
            const nextSrcOffset = Math.round((dstOffset + 1) * ratio);
            let accum = 0;
            let count = 0;
            while (srcOffset < nextSrcOffset && srcOffset < srcFrame.length) {
                accum += srcFrame[srcOffset++];
                count++;
            }
            dstFrame[dstOffset++] = accum / count;
        }
        return dstFrame;
    }
}
exports.RiffPcmEncoder = RiffPcmEncoder;



/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stream = void 0;
const Error_js_1 = __webpack_require__(26);
const Guid_js_1 = __webpack_require__(7);
const Queue_js_1 = __webpack_require__(44);
class Stream {
    constructor(streamId) {
        this.privIsWriteEnded = false;
        this.privIsReadEnded = false;
        this.privId = streamId ? streamId : Guid_js_1.createNoDashGuid();
        this.privReaderQueue = new Queue_js_1.Queue();
    }
    get isClosed() {
        return this.privIsWriteEnded;
    }
    get isReadEnded() {
        return this.privIsReadEnded;
    }
    get id() {
        return this.privId;
    }
    close() {
        if (!this.privIsWriteEnded) {
            this.writeStreamChunk({
                buffer: null,
                isEnd: true,
                timeReceived: Date.now(),
            });
            this.privIsWriteEnded = true;
        }
    }
    writeStreamChunk(streamChunk) {
        this.throwIfClosed();
        if (!this.privReaderQueue.isDisposed()) {
            try {
                this.privReaderQueue.enqueue(streamChunk);
            }
            catch (e) {
                // Do nothing
            }
        }
    }
    read() {
        if (this.privIsReadEnded) {
            throw new Error_js_1.InvalidOperationError("Stream read has already finished");
        }
        return this.privReaderQueue
            .dequeue()
            .then(async (streamChunk) => {
            if (streamChunk === undefined || streamChunk.isEnd) {
                await this.privReaderQueue.dispose("End of stream reached");
            }
            return streamChunk;
        });
    }
    readEnded() {
        if (!this.privIsReadEnded) {
            this.privIsReadEnded = true;
            this.privReaderQueue = new Queue_js_1.Queue();
        }
    }
    throwIfClosed() {
        if (this.privIsWriteEnded) {
            throw new Error_js_1.InvalidOperationError("Stream closed");
        }
    }
}
exports.Stream = Stream;



/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TranslationStatus = void 0;
/**
 * Defines translation status.
 * @class TranslationStatus
 */
var TranslationStatus;
(function (TranslationStatus) {
    /**
     * @member TranslationStatus.Success
     */
    TranslationStatus[TranslationStatus["Success"] = 0] = "Success";
    /**
     * @member TranslationStatus.Error
     */
    TranslationStatus[TranslationStatus["Error"] = 1] = "Error";
})(TranslationStatus = exports.TranslationStatus || (exports.TranslationStatus = {}));



/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChunkedArrayBufferStream = void 0;
const Exports_js_1 = __webpack_require__(4);
class ChunkedArrayBufferStream extends Exports_js_1.Stream {
    constructor(targetChunkSize, streamId) {
        super(streamId);
        this.privTargetChunkSize = Math.round(targetChunkSize);
        this.privNextBufferReadyBytes = 0;
    }
    writeStreamChunk(chunk) {
        // No pending write, and the buffer is the right size so write it.
        if (chunk.isEnd ||
            (0 === this.privNextBufferReadyBytes && chunk.buffer.byteLength === this.privTargetChunkSize)) {
            super.writeStreamChunk(chunk);
            return;
        }
        let bytesCopiedFromBuffer = 0;
        while (bytesCopiedFromBuffer < chunk.buffer.byteLength) {
            // Fill the next buffer.
            if (undefined === this.privNextBufferToWrite) {
                this.privNextBufferToWrite = new ArrayBuffer(this.privTargetChunkSize);
                this.privNextBufferStartTime = chunk.timeReceived;
            }
            // Find out how many bytes we can copy into the read buffer.
            const bytesToCopy = Math.min(chunk.buffer.byteLength - bytesCopiedFromBuffer, this.privTargetChunkSize - this.privNextBufferReadyBytes);
            const targetView = new Uint8Array(this.privNextBufferToWrite);
            const sourceView = new Uint8Array(chunk.buffer.slice(bytesCopiedFromBuffer, bytesToCopy + bytesCopiedFromBuffer));
            targetView.set(sourceView, this.privNextBufferReadyBytes);
            this.privNextBufferReadyBytes += bytesToCopy;
            bytesCopiedFromBuffer += bytesToCopy;
            // Are we ready to write?
            if (this.privNextBufferReadyBytes === this.privTargetChunkSize) {
                super.writeStreamChunk({
                    buffer: this.privNextBufferToWrite,
                    isEnd: false,
                    timeReceived: this.privNextBufferStartTime,
                });
                this.privNextBufferReadyBytes = 0;
                this.privNextBufferToWrite = undefined;
            }
        }
    }
    close() {
        // Send whatever is pending, then close the base class.
        if (0 !== this.privNextBufferReadyBytes && !this.isClosed) {
            super.writeStreamChunk({
                buffer: this.privNextBufferToWrite.slice(0, this.privNextBufferReadyBytes),
                isEnd: false,
                timeReceived: this.privNextBufferStartTime,
            });
        }
        super.close();
    }
}
exports.ChunkedArrayBufferStream = ChunkedArrayBufferStream;



/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));



/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Timeout = void 0;
class Timeout {
    static load() {
        // Prefilling the Maps with a function indexed by zero is necessary to be compliant with the specification.
        const scheduledTimeoutFunctions = new Map([[0, () => { }]]); // eslint-disable-line @typescript-eslint/no-empty-function
        const unhandledRequests = new Map();
        // eslint-disable-next-line
        const workerScript = `!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return d}));const r=new Map,o=new Map,i=e=>{const t=r.get(e);if(void 0===t)throw new Error('There is no interval scheduled with the given id "'.concat(e,'".'));clearTimeout(t),r.delete(e)},u=e=>{const t=o.get(e);if(void 0===t)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(t),o.delete(e)},f=(e,t)=>{let n,r;if("performance"in self){const o=performance.now();n=o,r=e-Math.max(0,o-t)}else n=Date.now(),r=e;return{expected:n+r,remainingDelay:r}},c=(e,t,n,r)=>{const o="performance"in self?performance.now():Date.now();o>n?postMessage({id:null,method:"call",params:{timerId:t}}):e.set(t,setTimeout(c,n-o,e,t,n))},a=(e,t,n)=>{const{expected:o,remainingDelay:i}=f(e,n);r.set(t,setTimeout(c,i,r,t,o))},d=(e,t,n)=>{const{expected:r,remainingDelay:i}=f(e,n);o.set(t,setTimeout(c,i,o,t,r))}},function(e,t,n){"use strict";n.r(t);var r=n(2);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);var i=n(3);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var u=n(4);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);var f=n(5);for(var o in f)"default"!==o&&function(e){n.d(t,e,(function(){return f[e]}))}(o);var c=n(6);for(var o in c)"default"!==o&&function(e){n.d(t,e,(function(){return c[e]}))}(o);var a=n(7);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var d=n(8);for(var o in d)"default"!==o&&function(e){n.d(t,e,(function(){return d[e]}))}(o);var s=n(9);for(var o in s)"default"!==o&&function(e){n.d(t,e,(function(){return s[e]}))}(o)},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(11);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);var i=n(12);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var u=n(13);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o)},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);var u=n(10);for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);addEventListener("message",({data:e})=>{try{if("clear"===e.method){const{id:t,params:{timerId:n}}=e;Object(r.b)(n),postMessage({error:null,id:t})}else{if("set"!==e.method)throw new Error('The given method "'.concat(e.method,'" is not supported'));{const{params:{delay:t,now:n,timerId:o}}=e;Object(r.d)(t,o,n)}}}catch(t){postMessage({error:{message:t.message},id:e.id,result:null})}})}]);`;
        const workerUrl = "data:text/javascript;base64," + btoa(workerScript);
        const worker = new Worker(workerUrl);
        worker.addEventListener("message", ({ data }) => {
            if (Timeout.isCallNotification(data)) {
                const { params: { timerId } } = data;
                const idOrFunc = scheduledTimeoutFunctions.get(timerId);
                if (typeof idOrFunc === "number") {
                    const unhandledTimerId = unhandledRequests.get(idOrFunc);
                    if (unhandledTimerId === undefined ||
                        unhandledTimerId !== timerId) {
                        throw new Error("The timer is in an undefined state.");
                    }
                }
                else if (typeof idOrFunc !== "undefined") {
                    idOrFunc();
                    // A timeout can be safely deleted because it is only called once.
                    scheduledTimeoutFunctions.delete(timerId);
                }
                else {
                    throw new Error("The timer is in an undefined state.");
                }
            }
            else if (Timeout.isClearResponse(data)) {
                const { id } = data;
                const unhandledTimerId = unhandledRequests.get(id);
                if (unhandledTimerId === undefined) {
                    throw new Error("The timer is in an undefined state.");
                }
                unhandledRequests.delete(id);
                scheduledTimeoutFunctions.delete(unhandledTimerId);
            }
            else {
                const { error: { message } } = data;
                throw new Error(message);
            }
        });
        const clearTimeout = (timerId) => {
            const id = Math.random();
            unhandledRequests.set(id, timerId);
            scheduledTimeoutFunctions.set(timerId, id);
            worker.postMessage({
                id,
                method: "clear",
                params: { timerId }
            });
        };
        const setTimeout = (func, delay) => {
            const timerId = Math.random();
            scheduledTimeoutFunctions.set(timerId, func);
            worker.postMessage({
                id: null,
                method: "set",
                params: {
                    delay,
                    now: performance.now(),
                    timerId
                }
            });
            return timerId;
        };
        return {
            clearTimeout,
            setTimeout
        };
    }
    static loadWorkerTimers() {
        return () => {
            if (Timeout.workerTimers !== null) {
                return Timeout.workerTimers;
            }
            Timeout.workerTimers = Timeout.load();
            return Timeout.workerTimers;
        };
    }
    static isCallNotification(message) {
        return message.method !== undefined && message.method === "call";
    }
    static isClearResponse(message) {
        return message.error === null && typeof message.id === "number";
    }
}
exports.Timeout = Timeout;
Timeout.workerTimers = null;
Timeout.clearTimeout = (timerId) => Timeout.timers().clearTimeout(timerId);
Timeout.setTimeout = (func, delay) => Timeout.timers().setTimeout(func, delay);
Timeout.timers = Timeout.loadWorkerTimers();



/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OCSPCacheUpdateErrorEvent = exports.OCSPResponseRetrievedEvent = exports.OCSPCacheFetchErrorEvent = exports.OCSPVerificationFailedEvent = exports.OCSPCacheHitEvent = exports.OCSPCacheEntryNeedsRefreshEvent = exports.OCSPCacheEntryExpiredEvent = exports.OCSPWSUpgradeStartedEvent = exports.OCSPStapleReceivedEvent = exports.OCSPCacheUpdateCompleteEvent = exports.OCSPDiskCacheStoreEvent = exports.OCSPMemoryCacheStoreEvent = exports.OCSPCacheUpdateNeededEvent = exports.OCSPDiskCacheHitEvent = exports.OCSPCacheMissEvent = exports.OCSPMemoryCacheHitEvent = exports.OCSPEvent = void 0;
/* eslint-disable max-classes-per-file */
const PlatformEvent_js_1 = __webpack_require__(6);
class OCSPEvent extends PlatformEvent_js_1.PlatformEvent {
    constructor(eventName, eventType, signature) {
        super(eventName, eventType);
        this.privSignature = signature;
    }
}
exports.OCSPEvent = OCSPEvent;
class OCSPMemoryCacheHitEvent extends OCSPEvent {
    constructor(signature) {
        super("OCSPMemoryCacheHitEvent", PlatformEvent_js_1.EventType.Debug, signature);
    }
}
exports.OCSPMemoryCacheHitEvent = OCSPMemoryCacheHitEvent;
class OCSPCacheMissEvent extends OCSPEvent {
    constructor(signature) {
        super("OCSPCacheMissEvent", PlatformEvent_js_1.EventType.Debug, signature);
    }
}
exports.OCSPCacheMissEvent = OCSPCacheMissEvent;
class OCSPDiskCacheHitEvent extends OCSPEvent {
    constructor(signature) {
        super("OCSPDiskCacheHitEvent", PlatformEvent_js_1.EventType.Debug, signature);
    }
}
exports.OCSPDiskCacheHitEvent = OCSPDiskCacheHitEvent;
class OCSPCacheUpdateNeededEvent extends OCSPEvent {
    constructor(signature) {
        super("OCSPCacheUpdateNeededEvent", PlatformEvent_js_1.EventType.Debug, signature);
    }
}
exports.OCSPCacheUpdateNeededEvent = OCSPCacheUpdateNeededEvent;
class OCSPMemoryCacheStoreEvent extends OCSPEvent {
    constructor(signature) {
        super("OCSPMemoryCacheStoreEvent", PlatformEvent_js_1.EventType.Debug, signature);
    }
}
exports.OCSPMemoryCacheStoreEvent = OCSPMemoryCacheStoreEvent;
class OCSPDiskCacheStoreEvent extends OCSPEvent {
    constructor(signature) {
        super("OCSPDiskCacheStoreEvent", PlatformEvent_js_1.EventType.Debug, signature);
    }
}
exports.OCSPDiskCacheStoreEvent = OCSPDiskCacheStoreEvent;
class OCSPCacheUpdateCompleteEvent extends OCSPEvent {
    constructor(signature) {
        super("OCSPCacheUpdateCompleteEvent", PlatformEvent_js_1.EventType.Debug, signature);
    }
}
exports.OCSPCacheUpdateCompleteEvent = OCSPCacheUpdateCompleteEvent;
class OCSPStapleReceivedEvent extends OCSPEvent {
    constructor() {
        super("OCSPStapleReceivedEvent", PlatformEvent_js_1.EventType.Debug, "");
    }
}
exports.OCSPStapleReceivedEvent = OCSPStapleReceivedEvent;
class OCSPWSUpgradeStartedEvent extends OCSPEvent {
    constructor(serialNumber) {
        super("OCSPWSUpgradeStartedEvent", PlatformEvent_js_1.EventType.Debug, serialNumber);
    }
}
exports.OCSPWSUpgradeStartedEvent = OCSPWSUpgradeStartedEvent;
class OCSPCacheEntryExpiredEvent extends OCSPEvent {
    constructor(serialNumber, expireTime) {
        super("OCSPCacheEntryExpiredEvent", PlatformEvent_js_1.EventType.Debug, serialNumber);
        this.privExpireTime = expireTime;
    }
}
exports.OCSPCacheEntryExpiredEvent = OCSPCacheEntryExpiredEvent;
class OCSPCacheEntryNeedsRefreshEvent extends OCSPEvent {
    constructor(serialNumber, startTime, expireTime) {
        super("OCSPCacheEntryNeedsRefreshEvent", PlatformEvent_js_1.EventType.Debug, serialNumber);
        this.privExpireTime = expireTime;
        this.privStartTime = startTime;
    }
}
exports.OCSPCacheEntryNeedsRefreshEvent = OCSPCacheEntryNeedsRefreshEvent;
class OCSPCacheHitEvent extends OCSPEvent {
    constructor(serialNumber, startTime, expireTime) {
        super("OCSPCacheHitEvent", PlatformEvent_js_1.EventType.Debug, serialNumber);
        this.privExpireTime = expireTime;
        this.privExpireTimeString = new Date(expireTime).toLocaleDateString();
        this.privStartTime = startTime;
        this.privStartTimeString = new Date(startTime).toLocaleTimeString();
    }
}
exports.OCSPCacheHitEvent = OCSPCacheHitEvent;
class OCSPVerificationFailedEvent extends OCSPEvent {
    constructor(serialNumber, error) {
        super("OCSPVerificationFailedEvent", PlatformEvent_js_1.EventType.Debug, serialNumber);
        this.privError = error;
    }
}
exports.OCSPVerificationFailedEvent = OCSPVerificationFailedEvent;
class OCSPCacheFetchErrorEvent extends OCSPEvent {
    constructor(serialNumber, error) {
        super("OCSPCacheFetchErrorEvent", PlatformEvent_js_1.EventType.Debug, serialNumber);
        this.privError = error;
    }
}
exports.OCSPCacheFetchErrorEvent = OCSPCacheFetchErrorEvent;
class OCSPResponseRetrievedEvent extends OCSPEvent {
    constructor(serialNumber) {
        super("OCSPResponseRetrievedEvent", PlatformEvent_js_1.EventType.Debug, serialNumber);
    }
}
exports.OCSPResponseRetrievedEvent = OCSPResponseRetrievedEvent;
class OCSPCacheUpdateErrorEvent extends OCSPEvent {
    constructor(serialNumber, error) {
        super("OCSPCacheUpdateErrorEvent", PlatformEvent_js_1.EventType.Debug, serialNumber);
        this.privError = error;
    }
}
exports.OCSPCacheUpdateErrorEvent = OCSPCacheUpdateErrorEvent;



/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackgroundEvent = void 0;
const Exports_js_1 = __webpack_require__(4);
class BackgroundEvent extends Exports_js_1.PlatformEvent {
    constructor(error) {
        super("BackgroundEvent", Exports_js_1.EventType.Error);
        this.privError = error;
    }
    get error() {
        return this.privError;
    }
}
exports.BackgroundEvent = BackgroundEvent;



/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeaderNames = void 0;
class HeaderNames {
}
exports.HeaderNames = HeaderNames;
HeaderNames.AuthKey = "Ocp-Apim-Subscription-Key";
HeaderNames.Authorization = "Authorization";
HeaderNames.SpIDAuthKey = "Apim-Subscription-Id";
HeaderNames.ConnectionId = "X-ConnectionId";
HeaderNames.ContentType = "Content-Type";
HeaderNames.CustomCommandsAppId = "X-CommandsAppId";
HeaderNames.Path = "Path";
HeaderNames.RequestId = "X-RequestId";
HeaderNames.RequestStreamId = "X-StreamId";
HeaderNames.RequestTimestamp = "X-Timestamp";



/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthInfo = void 0;
class AuthInfo {
    constructor(headerName, token) {
        this.privHeaderName = headerName;
        this.privToken = token;
    }
    get headerName() {
        return this.privHeaderName;
    }
    get token() {
        return this.privToken;
    }
}
exports.AuthInfo = AuthInfo;



/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CognitiveTokenAuthentication = void 0;
const Exports_js_1 = __webpack_require__(4);
const IAuthentication_js_1 = __webpack_require__(55);
const HeaderNames_js_1 = __webpack_require__(54);
class CognitiveTokenAuthentication {
    constructor(fetchCallback, fetchOnExpiryCallback) {
        if (!fetchCallback) {
            throw new Exports_js_1.ArgumentNullError("fetchCallback");
        }
        if (!fetchOnExpiryCallback) {
            throw new Exports_js_1.ArgumentNullError("fetchOnExpiryCallback");
        }
        this.privFetchCallback = fetchCallback;
        this.privFetchOnExpiryCallback = fetchOnExpiryCallback;
    }
    fetch(authFetchEventId) {
        return this.privFetchCallback(authFetchEventId).then((token) => new IAuthentication_js_1.AuthInfo(HeaderNames_js_1.HeaderNames.Authorization, token === undefined ? undefined : CognitiveTokenAuthentication.privTokenPrefix + token));
    }
    fetchOnExpiry(authFetchEventId) {
        return this.privFetchOnExpiryCallback(authFetchEventId).then((token) => new IAuthentication_js_1.AuthInfo(HeaderNames_js_1.HeaderNames.Authorization, token === undefined ? undefined : CognitiveTokenAuthentication.privTokenPrefix + token));
    }
}
exports.CognitiveTokenAuthentication = CognitiveTokenAuthentication;
CognitiveTokenAuthentication.privTokenPrefix = "Bearer ";



/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));



/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));



/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntentConnectionFactory = void 0;
const Exports_js_1 = __webpack_require__(60);
const Exports_js_2 = __webpack_require__(79);
const ConnectionFactoryBase_js_1 = __webpack_require__(134);
const Exports_js_3 = __webpack_require__(2);
const HeaderNames_js_1 = __webpack_require__(54);
class IntentConnectionFactory extends ConnectionFactoryBase_js_1.ConnectionFactoryBase {
    create(config, authInfo, connectionId) {
        let endpoint = config.parameters.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Endpoint);
        if (!endpoint) {
            const region = config.parameters.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_IntentRegion);
            const hostSuffix = ConnectionFactoryBase_js_1.ConnectionFactoryBase.getHostSuffix(region);
            const host = config.parameters.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Host, "wss://" + region + ".sr.speech" + hostSuffix);
            endpoint = host + "/speech/recognition/interactive/cognitiveservices/v1";
        }
        const queryParams = {
            format: "simple",
            language: config.parameters.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_RecoLanguage),
        };
        this.setCommonUrlParams(config, queryParams, endpoint);
        const headers = {};
        if (authInfo.token !== undefined && authInfo.token !== "") {
            headers[authInfo.headerName] = authInfo.token;
        }
        headers[HeaderNames_js_1.HeaderNames.ConnectionId] = connectionId;
        config.parameters.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Url, endpoint);
        const enableCompression = config.parameters.getProperty("SPEECH-EnableWebsocketCompression", "false") === "true";
        return new Exports_js_1.WebsocketConnection(endpoint, queryParams, headers, new Exports_js_3.WebsocketMessageFormatter(), Exports_js_1.ProxyInfo.fromRecognizerConfig(config), enableCompression, connectionId);
    }
    getSpeechRegionFromIntentRegion(intentRegion) {
        switch (intentRegion) {
            case "West US":
            case "US West":
            case "westus":
                return "uswest";
            case "West US 2":
            case "US West 2":
            case "westus2":
                return "uswest2";
            case "South Central US":
            case "US South Central":
            case "southcentralus":
                return "ussouthcentral";
            case "West Central US":
            case "US West Central":
            case "westcentralus":
                return "uswestcentral";
            case "East US":
            case "US East":
            case "eastus":
                return "useast";
            case "East US 2":
            case "US East 2":
            case "eastus2":
                return "useast2";
            case "West Europe":
            case "Europe West":
            case "westeurope":
                return "europewest";
            case "North Europe":
            case "Europe North":
            case "northeurope":
                return "europenorth";
            case "Brazil South":
            case "South Brazil":
            case "southbrazil":
                return "brazilsouth";
            case "Australia East":
            case "East Australia":
            case "eastaustralia":
                return "australiaeast";
            case "Southeast Asia":
            case "Asia Southeast":
            case "southeastasia":
                return "asiasoutheast";
            case "East Asia":
            case "Asia East":
            case "eastasia":
                return "asiaeast";
            default:
                return intentRegion;
        }
    }
}
exports.IntentConnectionFactory = IntentConnectionFactory;



/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(61), exports);
__exportStar(__webpack_require__(65), exports);
__exportStar(__webpack_require__(66), exports);
__exportStar(__webpack_require__(68), exports);
__exportStar(__webpack_require__(69), exports);
__exportStar(__webpack_require__(70), exports);
__exportStar(__webpack_require__(71), exports);
__exportStar(__webpack_require__(77), exports);
__exportStar(__webpack_require__(78), exports);
__exportStar(__webpack_require__(199), exports);
__exportStar(__webpack_require__(202), exports);



/***/ }),
/* 61 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConsoleLoggingListener = void 0;
const fs = __importStar(__webpack_require__(62));
const LogLevel_js_1 = __webpack_require__(63);
const Contracts_js_1 = __webpack_require__(64);
class ConsoleLoggingListener {
    constructor(logLevelFilter = LogLevel_js_1.LogLevel.None) {
        this.privLogPath = undefined;
        this.privEnableConsoleOutput = true;
        this.privLogLevelFilter = logLevelFilter;
    }
    set logPath(path) {
        Contracts_js_1.Contracts.throwIfNullOrUndefined(fs.openSync, "\nFile System access not available");
        this.privLogPath = path;
    }
    set enableConsoleOutput(enableOutput) {
        this.privEnableConsoleOutput = enableOutput;
    }
    onEvent(event) {
        if (event.eventType >= this.privLogLevelFilter) {
            const log = this.toString(event);
            if (!!this.logCallback) {
                this.logCallback(log);
            }
            if (!!this.privLogPath) {
                fs.writeFileSync(this.privLogPath, log + "\n", { flag: "a+" });
            }
            if (this.privEnableConsoleOutput) {
                switch (event.eventType) {
                    case LogLevel_js_1.LogLevel.Debug:
                        // eslint-disable-next-line no-console
                        console.debug(log);
                        break;
                    case LogLevel_js_1.LogLevel.Info:
                        // eslint-disable-next-line no-console
                        console.info(log);
                        break;
                    case LogLevel_js_1.LogLevel.Warning:
                        // eslint-disable-next-line no-console
                        console.warn(log);
                        break;
                    case LogLevel_js_1.LogLevel.Error:
                        // eslint-disable-next-line no-console
                        console.error(log);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(log);
                        break;
                }
            }
        }
    }
    toString(event) {
        const logFragments = [
            `${event.eventTime}`,
            `${event.name}`,
        ];
        const e = event;
        for (const prop in e) {
            if (prop && event.hasOwnProperty(prop) &&
                prop !== "eventTime" && prop !== "eventType" &&
                prop !== "eventId" && prop !== "name" &&
                prop !== "constructor") {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                const value = e[prop];
                let valueToLog = "<NULL>";
                if (value !== undefined && value !== null) {
                    if (typeof (value) === "number" || typeof (value) === "string") {
                        valueToLog = value.toString();
                    }
                    else {
                        valueToLog = JSON.stringify(value);
                    }
                }
                logFragments.push(`${prop}: ${valueToLog}`);
            }
        }
        return logFragments.join(" | ");
    }
}
exports.ConsoleLoggingListener = ConsoleLoggingListener;



/***/ }),
/* 62 */
/***/ (() => {

/* (ignored) */

/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogLevel = void 0;
const Exports_js_1 = __webpack_require__(4);
Object.defineProperty(exports, "LogLevel", ({ enumerable: true, get: function () { return Exports_js_1.EventType; } }));



/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Contracts = void 0;
/**
 * @class Contracts
 * @private
 */
class Contracts {
    static throwIfNullOrUndefined(param, name) {
        if (param === undefined || param === null) {
            throw new Error("throwIfNullOrUndefined:" + name);
        }
    }
    static throwIfNull(param, name) {
        if (param === null) {
            throw new Error("throwIfNull:" + name);
        }
    }
    static throwIfNullOrWhitespace(param, name) {
        Contracts.throwIfNullOrUndefined(param, name);
        if (("" + param).trim().length < 1) {
            throw new Error("throwIfNullOrWhitespace:" + name);
        }
    }
    static throwIfNullOrTooLong(param, name, maxLength) {
        Contracts.throwIfNullOrUndefined(param, name);
        if (("" + param).length > maxLength) {
            throw new Error("throwIfNullOrTooLong:" + name + " (more than " + maxLength.toString() + " characters)");
        }
    }
    static throwIfNullOrTooShort(param, name, minLength) {
        Contracts.throwIfNullOrUndefined(param, name);
        if (("" + param).length < minLength) {
            throw new Error("throwIfNullOrTooShort:" + name + " (less than " + minLength.toString() + " characters)");
        }
    }
    static throwIfDisposed(isDisposed) {
        if (isDisposed) {
            throw new Error("the object is already disposed");
        }
    }
    static throwIfArrayEmptyOrWhitespace(array, name) {
        Contracts.throwIfNullOrUndefined(array, name);
        if (array.length === 0) {
            throw new Error("throwIfArrayEmptyOrWhitespace:" + name);
        }
        for (const item of array) {
            Contracts.throwIfNullOrWhitespace(item, name);
        }
    }
    static throwIfFileDoesNotExist(param, name) {
        Contracts.throwIfNullOrWhitespace(param, name);
        // TODO check for file existence.
    }
    static throwIfNotUndefined(param, name) {
        if (param !== undefined) {
            throw new Error("throwIfNotUndefined:" + name);
        }
    }
}
exports.Contracts = Contracts;



/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));



/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MicAudioSource = exports.AudioWorkletSourceURLPropertyName = void 0;
const Exports_js_1 = __webpack_require__(2);
const Exports_js_2 = __webpack_require__(4);
const AudioStreamFormat_js_1 = __webpack_require__(67);
exports.AudioWorkletSourceURLPropertyName = "MICROPHONE-WorkletSourceUrl";
class MicAudioSource {
    constructor(privRecorder, deviceId, audioSourceId, mediaStream) {
        this.privRecorder = privRecorder;
        this.deviceId = deviceId;
        this.privStreams = {};
        this.privOutputChunkSize = MicAudioSource.AUDIOFORMAT.avgBytesPerSec / 10;
        this.privId = audioSourceId ? audioSourceId : Exports_js_2.createNoDashGuid();
        this.privEvents = new Exports_js_2.EventSource();
        this.privMediaStream = mediaStream || null;
        this.privIsClosing = false;
    }
    get format() {
        return Promise.resolve(MicAudioSource.AUDIOFORMAT);
    }
    turnOn() {
        if (this.privInitializeDeferral) {
            return this.privInitializeDeferral.promise;
        }
        this.privInitializeDeferral = new Exports_js_2.Deferred();
        try {
            this.createAudioContext();
        }
        catch (error) {
            if (error instanceof Error) {
                const typedError = error;
                this.privInitializeDeferral.reject(typedError.name + ": " + typedError.message);
            }
            else {
                this.privInitializeDeferral.reject(error);
            }
            return this.privInitializeDeferral.promise;
        }
        const nav = window.navigator;
        let getUserMedia = (
        // eslint-disable-next-line
        nav.getUserMedia ||
            nav.webkitGetUserMedia ||
            nav.mozGetUserMedia ||
            nav.msGetUserMedia);
        if (!!nav.mediaDevices) {
            getUserMedia = (constraints, successCallback, errorCallback) => {
                nav.mediaDevices
                    .getUserMedia(constraints)
                    .then(successCallback)
                    .catch(errorCallback);
            };
        }
        if (!getUserMedia) {
            const errorMsg = "Browser does not support getUserMedia.";
            this.privInitializeDeferral.reject(errorMsg);
            this.onEvent(new Exports_js_2.AudioSourceErrorEvent(errorMsg, "")); // mic initialized error - no streamid at this point
        }
        else {
            const next = () => {
                this.onEvent(new Exports_js_2.AudioSourceInitializingEvent(this.privId)); // no stream id
                if (this.privMediaStream && this.privMediaStream.active) {
                    this.onEvent(new Exports_js_2.AudioSourceReadyEvent(this.privId));
                    this.privInitializeDeferral.resolve();
                }
                else {
                    getUserMedia({ audio: this.deviceId ? { deviceId: this.deviceId } : true, video: false }, (mediaStream) => {
                        this.privMediaStream = mediaStream;
                        this.onEvent(new Exports_js_2.AudioSourceReadyEvent(this.privId));
                        this.privInitializeDeferral.resolve();
                    }, (error) => {
                        const errorMsg = `Error occurred during microphone initialization: ${error}`;
                        this.privInitializeDeferral.reject(errorMsg);
                        this.onEvent(new Exports_js_2.AudioSourceErrorEvent(this.privId, errorMsg));
                    });
                }
            };
            if (this.privContext.state === "suspended") {
                // NOTE: On iOS, the Web Audio API requires sounds to be triggered from an explicit user action.
                // https://github.com/WebAudio/web-audio-api/issues/790
                this.privContext.resume()
                    .then(next)
                    .catch((reason) => {
                    this.privInitializeDeferral.reject(`Failed to initialize audio context: ${reason}`);
                });
            }
            else {
                next();
            }
        }
        return this.privInitializeDeferral.promise;
    }
    id() {
        return this.privId;
    }
    attach(audioNodeId) {
        this.onEvent(new Exports_js_2.AudioStreamNodeAttachingEvent(this.privId, audioNodeId));
        return this.listen(audioNodeId).then((stream) => {
            this.onEvent(new Exports_js_2.AudioStreamNodeAttachedEvent(this.privId, audioNodeId));
            return {
                detach: async () => {
                    stream.readEnded();
                    delete this.privStreams[audioNodeId];
                    this.onEvent(new Exports_js_2.AudioStreamNodeDetachedEvent(this.privId, audioNodeId));
                    return this.turnOff();
                },
                id: () => audioNodeId,
                read: () => stream.read(),
            };
        });
    }
    detach(audioNodeId) {
        if (audioNodeId && this.privStreams[audioNodeId]) {
            this.privStreams[audioNodeId].close();
            delete this.privStreams[audioNodeId];
            this.onEvent(new Exports_js_2.AudioStreamNodeDetachedEvent(this.privId, audioNodeId));
        }
    }
    async turnOff() {
        for (const streamId in this.privStreams) {
            if (streamId) {
                const stream = this.privStreams[streamId];
                if (stream) {
                    stream.close();
                }
            }
        }
        this.onEvent(new Exports_js_2.AudioSourceOffEvent(this.privId)); // no stream now
        if (this.privInitializeDeferral) {
            // Correctly handle when browser forces mic off before turnOn() completes
            // eslint-disable-next-line @typescript-eslint/await-thenable
            await this.privInitializeDeferral;
            this.privInitializeDeferral = null;
        }
        await this.destroyAudioContext();
        return;
    }
    get events() {
        return this.privEvents;
    }
    get deviceInfo() {
        return this.getMicrophoneLabel().then((label) => ({
            bitspersample: MicAudioSource.AUDIOFORMAT.bitsPerSample,
            channelcount: MicAudioSource.AUDIOFORMAT.channels,
            connectivity: Exports_js_1.connectivity.Unknown,
            manufacturer: "Speech SDK",
            model: label,
            samplerate: MicAudioSource.AUDIOFORMAT.samplesPerSec,
            type: Exports_js_1.type.Microphones,
        }));
    }
    setProperty(name, value) {
        if (name === exports.AudioWorkletSourceURLPropertyName) {
            this.privRecorder.setWorkletUrl(value);
        }
        else {
            throw new Error("Property '" + name + "' is not supported on Microphone.");
        }
    }
    getMicrophoneLabel() {
        const defaultMicrophoneName = "microphone";
        // If we did this already, return the value.
        if (this.privMicrophoneLabel !== undefined) {
            return Promise.resolve(this.privMicrophoneLabel);
        }
        // If the stream isn't currently running, we can't query devices because security.
        if (this.privMediaStream === undefined || !this.privMediaStream.active) {
            return Promise.resolve(defaultMicrophoneName);
        }
        // Setup a default
        this.privMicrophoneLabel = defaultMicrophoneName;
        // Get the id of the device running the audio track.
        const microphoneDeviceId = this.privMediaStream.getTracks()[0].getSettings().deviceId;
        // If the browser doesn't support getting the device ID, set a default and return.
        if (undefined === microphoneDeviceId) {
            return Promise.resolve(this.privMicrophoneLabel);
        }
        const deferred = new Exports_js_2.Deferred();
        // Enumerate the media devices.
        navigator.mediaDevices.enumerateDevices().then((devices) => {
            for (const device of devices) {
                if (device.deviceId === microphoneDeviceId) {
                    // Found the device
                    this.privMicrophoneLabel = device.label;
                    break;
                }
            }
            deferred.resolve(this.privMicrophoneLabel);
        }, () => deferred.resolve(this.privMicrophoneLabel));
        return deferred.promise;
    }
    async listen(audioNodeId) {
        await this.turnOn();
        const stream = new Exports_js_2.ChunkedArrayBufferStream(this.privOutputChunkSize, audioNodeId);
        this.privStreams[audioNodeId] = stream;
        try {
            this.privRecorder.record(this.privContext, this.privMediaStream, stream);
        }
        catch (error) {
            this.onEvent(new Exports_js_2.AudioStreamNodeErrorEvent(this.privId, audioNodeId, error));
            throw error;
        }
        const result = stream;
        return result;
    }
    onEvent(event) {
        this.privEvents.onEvent(event);
        Exports_js_2.Events.instance.onEvent(event);
    }
    createAudioContext() {
        if (!!this.privContext) {
            return;
        }
        this.privContext = AudioStreamFormat_js_1.AudioStreamFormatImpl.getAudioContext(MicAudioSource.AUDIOFORMAT.samplesPerSec);
    }
    async destroyAudioContext() {
        if (!this.privContext) {
            return;
        }
        this.privRecorder.releaseMediaResources(this.privContext);
        // This pattern brought to you by a bug in the TypeScript compiler where it
        // confuses the ("close" in this.privContext) with this.privContext always being null as the alternate.
        // https://github.com/Microsoft/TypeScript/issues/11498
        let hasClose = false;
        if ("close" in this.privContext) {
            hasClose = true;
        }
        if (hasClose) {
            if (!this.privIsClosing) {
                // The audio context close may take enough time that the close is called twice
                this.privIsClosing = true;
                await this.privContext.close();
                this.privContext = null;
                this.privIsClosing = false;
            }
        }
        else if (null !== this.privContext && this.privContext.state === "running") {
            // Suspend actually takes a callback, but analogous to the
            // resume method, it'll be only fired if suspend is called
            // in a direct response to a user action. The later is not always
            // the case, as TurnOff is also called, when we receive an
            // end-of-speech message from the service. So, doing a best effort
            // fire-and-forget here.
            await this.privContext.suspend();
        }
    }
}
exports.MicAudioSource = MicAudioSource;
MicAudioSource.AUDIOFORMAT = AudioStreamFormat_js_1.AudioStreamFormat.getDefaultInputFormat();



/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioStreamFormatImpl = exports.AudioStreamFormat = exports.AudioFormatTag = void 0;
// eslint-disable-next-line max-classes-per-file
var AudioFormatTag;
(function (AudioFormatTag) {
    AudioFormatTag[AudioFormatTag["PCM"] = 1] = "PCM";
    AudioFormatTag[AudioFormatTag["MuLaw"] = 2] = "MuLaw";
    AudioFormatTag[AudioFormatTag["Siren"] = 3] = "Siren";
    AudioFormatTag[AudioFormatTag["MP3"] = 4] = "MP3";
    AudioFormatTag[AudioFormatTag["SILKSkype"] = 5] = "SILKSkype";
    AudioFormatTag[AudioFormatTag["OGG_OPUS"] = 6] = "OGG_OPUS";
    AudioFormatTag[AudioFormatTag["WEBM_OPUS"] = 7] = "WEBM_OPUS";
    AudioFormatTag[AudioFormatTag["ALaw"] = 8] = "ALaw";
    AudioFormatTag[AudioFormatTag["FLAC"] = 9] = "FLAC";
    AudioFormatTag[AudioFormatTag["OPUS"] = 10] = "OPUS";
    AudioFormatTag[AudioFormatTag["AMR_WB"] = 11] = "AMR_WB";
    AudioFormatTag[AudioFormatTag["G722"] = 12] = "G722";
})(AudioFormatTag = exports.AudioFormatTag || (exports.AudioFormatTag = {}));
/**
 * Represents audio stream format used for custom audio input configurations.
 * @class AudioStreamFormat
 */
class AudioStreamFormat {
    /**
     * Creates an audio stream format object representing the default audio stream
     * format (16KHz 16bit mono PCM).
     * @member AudioStreamFormat.getDefaultInputFormat
     * @function
     * @public
     * @returns {AudioStreamFormat} The audio stream format being created.
     */
    static getDefaultInputFormat() {
        return AudioStreamFormatImpl.getDefaultInputFormat();
    }
    /**
     * Creates an audio stream format object with the specified format characteristics.
     * @member AudioStreamFormat.getWaveFormat
     * @function
     * @public
     * @param {number} samplesPerSecond - Sample rate, in samples per second (Hertz).
     * @param {number} bitsPerSample - Bits per sample, typically 16.
     * @param {number} channels - Number of channels in the waveform-audio data. Monaural data
     * uses one channel and stereo data uses two channels.
     * @param {AudioFormatTag} format - Audio format (PCM, alaw or mulaw).
     * @returns {AudioStreamFormat} The audio stream format being created.
     */
    static getWaveFormat(samplesPerSecond, bitsPerSample, channels, format) {
        return new AudioStreamFormatImpl(samplesPerSecond, bitsPerSample, channels, format);
    }
    /**
     * Creates an audio stream format object with the specified pcm waveformat characteristics.
     * @member AudioStreamFormat.getWaveFormatPCM
     * @function
     * @public
     * @param {number} samplesPerSecond - Sample rate, in samples per second (Hertz).
     * @param {number} bitsPerSample - Bits per sample, typically 16.
     * @param {number} channels - Number of channels in the waveform-audio data. Monaural data
     * uses one channel and stereo data uses two channels.
     * @returns {AudioStreamFormat} The audio stream format being created.
     */
    static getWaveFormatPCM(samplesPerSecond, bitsPerSample, channels) {
        return new AudioStreamFormatImpl(samplesPerSecond, bitsPerSample, channels);
    }
}
exports.AudioStreamFormat = AudioStreamFormat;
/**
 * @private
 * @class AudioStreamFormatImpl
 */
class AudioStreamFormatImpl extends AudioStreamFormat {
    /**
     * Creates an instance with the given values.
     * @constructor
     * @param {number} samplesPerSec - Samples per second.
     * @param {number} bitsPerSample - Bits per sample.
     * @param {number} channels - Number of channels.
     * @param {AudioFormatTag} format - Audio format (PCM, alaw or mulaw).
     */
    constructor(samplesPerSec = 16000, bitsPerSample = 16, channels = 1, format = AudioFormatTag.PCM) {
        super();
        let isWavFormat = true;
        /* 1 for PCM; 6 for alaw; 7 for mulaw */
        switch (format) {
            case AudioFormatTag.PCM:
                this.formatTag = 1;
                break;
            case AudioFormatTag.ALaw:
                this.formatTag = 6;
                break;
            case AudioFormatTag.MuLaw:
                this.formatTag = 7;
                break;
            default:
                isWavFormat = false;
        }
        this.bitsPerSample = bitsPerSample;
        this.samplesPerSec = samplesPerSec;
        this.channels = channels;
        this.avgBytesPerSec = this.samplesPerSec * this.channels * (this.bitsPerSample / 8);
        this.blockAlign = this.channels * Math.max(this.bitsPerSample, 8);
        if (isWavFormat) {
            this.privHeader = new ArrayBuffer(44);
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
            const view = new DataView(this.privHeader);
            /* RIFF identifier */
            this.setString(view, 0, "RIFF");
            /* file length */
            view.setUint32(4, 0, true);
            /* RIFF type & Format */
            this.setString(view, 8, "WAVEfmt ");
            /* format chunk length */
            view.setUint32(16, 16, true);
            /* audio format */
            view.setUint16(20, this.formatTag, true);
            /* channel count */
            view.setUint16(22, this.channels, true);
            /* sample rate */
            view.setUint32(24, this.samplesPerSec, true);
            /* byte rate (sample rate * block align) */
            view.setUint32(28, this.avgBytesPerSec, true);
            /* block align (channel count * bytes per sample) */
            view.setUint16(32, this.channels * (this.bitsPerSample / 8), true);
            /* bits per sample */
            view.setUint16(34, this.bitsPerSample, true);
            /* data chunk identifier */
            this.setString(view, 36, "data");
            /* data chunk length */
            view.setUint32(40, 0, true);
        }
    }
    /**
     * Retrieves the default input format.
     * @member AudioStreamFormatImpl.getDefaultInputFormat
     * @function
     * @public
     * @returns {AudioStreamFormatImpl} The default input format.
     */
    static getDefaultInputFormat() {
        return new AudioStreamFormatImpl();
    }
    /**
     * Creates an audio context appropriate to current browser
     * @member AudioStreamFormatImpl.getAudioContext
     * @function
     * @public
     * @returns {AudioContext} An audio context instance
     */
    /* eslint-disable */
    static getAudioContext(sampleRate) {
        // Workaround for Speech SDK bug in Safari.
        const AudioContext = window.AudioContext // our preferred impl
            || window.webkitAudioContext // fallback, mostly when on Safari
            || false; // could not find.
        // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
        if (!!AudioContext) {
            if (sampleRate !== undefined && navigator.mediaDevices.getSupportedConstraints().sampleRate) {
                return new AudioContext({ sampleRate });
            }
            else {
                return new AudioContext();
            }
        }
        else {
            throw new Error("Browser does not support Web Audio API (AudioContext is not available).");
        }
    }
    /* eslint-enable */
    /**
     * Closes the configuration object.
     * @member AudioStreamFormatImpl.prototype.close
     * @function
     * @public
     */
    close() {
        return;
    }
    get header() {
        return this.privHeader;
    }
    setString(view, offset, str) {
        for (let i = 0; i < str.length; i++) {
            view.setUint8(offset + i, str.charCodeAt(i));
        }
    }
}
exports.AudioStreamFormatImpl = AudioStreamFormatImpl;



/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileAudioSource = void 0;
const Exports_js_1 = __webpack_require__(2);
const Exports_js_2 = __webpack_require__(4);
const AudioStreamFormat_js_1 = __webpack_require__(67);
class FileAudioSource {
    constructor(file, filename, audioSourceId) {
        this.privStreams = {};
        this.privHeaderEnd = 44;
        this.privId = audioSourceId ? audioSourceId : Exports_js_2.createNoDashGuid();
        this.privEvents = new Exports_js_2.EventSource();
        this.privSource = file;
        if (typeof window !== "undefined" && typeof Blob !== "undefined" && this.privSource instanceof Blob) {
            this.privFilename = file.name;
        }
        else {
            this.privFilename = filename || "unknown.wav";
        }
        // Read the header.
        this.privAudioFormatPromise = this.readHeader();
    }
    get format() {
        return this.privAudioFormatPromise;
    }
    turnOn() {
        if (this.privFilename.lastIndexOf(".wav") !== this.privFilename.length - 4) {
            const errorMsg = this.privFilename + " is not supported. Only WAVE files are allowed at the moment.";
            this.onEvent(new Exports_js_2.AudioSourceErrorEvent(errorMsg, ""));
            return Promise.reject(errorMsg);
        }
        this.onEvent(new Exports_js_2.AudioSourceInitializingEvent(this.privId)); // no stream id
        this.onEvent(new Exports_js_2.AudioSourceReadyEvent(this.privId));
        return;
    }
    id() {
        return this.privId;
    }
    async attach(audioNodeId) {
        this.onEvent(new Exports_js_2.AudioStreamNodeAttachingEvent(this.privId, audioNodeId));
        const stream = await this.upload(audioNodeId);
        this.onEvent(new Exports_js_2.AudioStreamNodeAttachedEvent(this.privId, audioNodeId));
        return Promise.resolve({
            detach: async () => {
                stream.readEnded();
                delete this.privStreams[audioNodeId];
                this.onEvent(new Exports_js_2.AudioStreamNodeDetachedEvent(this.privId, audioNodeId));
                await this.turnOff();
            },
            id: () => audioNodeId,
            read: () => stream.read(),
        });
    }
    detach(audioNodeId) {
        if (audioNodeId && this.privStreams[audioNodeId]) {
            this.privStreams[audioNodeId].close();
            delete this.privStreams[audioNodeId];
            this.onEvent(new Exports_js_2.AudioStreamNodeDetachedEvent(this.privId, audioNodeId));
        }
    }
    turnOff() {
        for (const streamId in this.privStreams) {
            if (streamId) {
                const stream = this.privStreams[streamId];
                if (stream && !stream.isClosed) {
                    stream.close();
                }
            }
        }
        this.onEvent(new Exports_js_2.AudioSourceOffEvent(this.privId)); // no stream now
        return Promise.resolve();
    }
    get events() {
        return this.privEvents;
    }
    get deviceInfo() {
        return this.privAudioFormatPromise.then((result) => (Promise.resolve({
            bitspersample: result.bitsPerSample,
            channelcount: result.channels,
            connectivity: Exports_js_1.connectivity.Unknown,
            manufacturer: "Speech SDK",
            model: "File",
            samplerate: result.samplesPerSec,
            type: Exports_js_1.type.File,
        })));
    }
    readHeader() {
        // Read the wave header.
        const maxHeaderSize = 4296;
        const header = this.privSource.slice(0, maxHeaderSize);
        const headerResult = new Exports_js_2.Deferred();
        const processHeader = (header) => {
            const view = new DataView(header);
            const getWord = (index) => String.fromCharCode(view.getUint8(index), view.getUint8(index + 1), view.getUint8(index + 2), view.getUint8(index + 3));
            // RIFF 4 bytes.
            if ("RIFF" !== getWord(0)) {
                headerResult.reject("Invalid WAV header in file, RIFF was not found");
                return;
            }
            // length, 4 bytes
            // RIFF Type & fmt 8 bytes
            if ("WAVE" !== getWord(8) || "fmt " !== getWord(12)) {
                headerResult.reject("Invalid WAV header in file, WAVEfmt was not found");
                return;
            }
            const formatSize = view.getInt32(16, true);
            const channelCount = view.getUint16(22, true);
            const sampleRate = view.getUint32(24, true);
            const bitsPerSample = view.getUint16(34, true);
            // Confirm if header is 44 bytes long.
            let pos = 36 + Math.max(formatSize - 16, 0);
            for (; getWord(pos) !== "data"; pos += 2) {
                if (pos > maxHeaderSize - 8) {
                    headerResult.reject("Invalid WAV header in file, data block was not found");
                    return;
                }
            }
            this.privHeaderEnd = pos + 8;
            headerResult.resolve(AudioStreamFormat_js_1.AudioStreamFormat.getWaveFormatPCM(sampleRate, bitsPerSample, channelCount));
        };
        if (typeof window !== "undefined" && typeof Blob !== "undefined" && header instanceof Blob) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const header = event.target.result;
                processHeader(header);
            };
            reader.readAsArrayBuffer(header);
        }
        else {
            const h = header;
            processHeader(h.buffer.slice(h.byteOffset, h.byteOffset + h.byteLength));
        }
        return headerResult.promise;
    }
    async upload(audioNodeId) {
        const onerror = (error) => {
            const errorMsg = `Error occurred while processing '${this.privFilename}'. ${error}`;
            this.onEvent(new Exports_js_2.AudioStreamNodeErrorEvent(this.privId, audioNodeId, errorMsg));
            throw new Error(errorMsg);
        };
        try {
            await this.turnOn();
            const format = await this.privAudioFormatPromise;
            const stream = new Exports_js_2.ChunkedArrayBufferStream(format.avgBytesPerSec / 10, audioNodeId);
            this.privStreams[audioNodeId] = stream;
            const chunk = this.privSource.slice(this.privHeaderEnd);
            const processFile = (buff) => {
                if (stream.isClosed) {
                    return; // output stream was closed (somebody called TurnOff). We're done here.
                }
                stream.writeStreamChunk({
                    buffer: buff,
                    isEnd: false,
                    timeReceived: Date.now(),
                });
                stream.close();
            };
            if (typeof window !== "undefined" && typeof Blob !== "undefined" && chunk instanceof Blob) {
                const reader = new FileReader();
                reader.onerror = (ev) => onerror(ev.toString());
                reader.onload = (event) => {
                    const fileBuffer = event.target.result;
                    processFile(fileBuffer);
                };
                reader.readAsArrayBuffer(chunk);
            }
            else {
                const c = chunk;
                processFile(c.buffer.slice(c.byteOffset, c.byteOffset + c.byteLength));
            }
            return stream;
        }
        catch (e) {
            onerror(e);
        }
    }
    onEvent(event) {
        this.privEvents.onEvent(event);
        Exports_js_2.Events.instance.onEvent(event);
    }
}
exports.FileAudioSource = FileAudioSource;



/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PcmRecorder = void 0;
const Exports_1 = __webpack_require__(4);
class PcmRecorder {
    constructor(stopInputOnRelease) {
        this.privStopInputOnRelease = stopInputOnRelease;
    }
    record(context, mediaStream, outputStream) {
        const desiredSampleRate = 16000;
        const waveStreamEncoder = new Exports_1.RiffPcmEncoder(context.sampleRate, desiredSampleRate);
        const micInput = context.createMediaStreamSource(mediaStream);
        const attachScriptProcessor = () => {
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            const scriptNode = (() => {
                let bufferSize = 0;
                try {
                    return context.createScriptProcessor(bufferSize, 1, 1);
                }
                catch (error) {
                    // Webkit (<= version 31) requires a valid bufferSize.
                    bufferSize = 2048;
                    let audioSampleRate = context.sampleRate;
                    while (bufferSize < 16384 && audioSampleRate >= (2 * desiredSampleRate)) {
                        bufferSize <<= 1;
                        audioSampleRate >>= 1;
                    }
                    return context.createScriptProcessor(bufferSize, 1, 1);
                }
            })();
            scriptNode.onaudioprocess = (event) => {
                const inputFrame = event.inputBuffer.getChannelData(0);
                if (outputStream && !outputStream.isClosed) {
                    const waveFrame = waveStreamEncoder.encode(inputFrame);
                    if (!!waveFrame) {
                        outputStream.writeStreamChunk({
                            buffer: waveFrame,
                            isEnd: false,
                            timeReceived: Date.now(),
                        });
                    }
                }
            };
            micInput.connect(scriptNode);
            scriptNode.connect(context.destination);
            this.privMediaResources = {
                scriptProcessorNode: scriptNode,
                source: micInput,
                stream: mediaStream,
            };
        };
        // https://webaudio.github.io/web-audio-api/#audioworklet
        // Using AudioWorklet to improve audio quality and avoid audio glitches due to blocking the UI thread
        const skipAudioWorklet = !!this.privSpeechProcessorScript && this.privSpeechProcessorScript.toLowerCase() === "ignore";
        if (!!context.audioWorklet && !skipAudioWorklet) {
            if (!this.privSpeechProcessorScript) {
                const workletScript = `class SP extends AudioWorkletProcessor {
                    constructor(options) {
                      super(options);
                    }
                    process(inputs, outputs) {
                      const input = inputs[0];
                      const output = [];
                      for (let channel = 0; channel < input.length; channel += 1) {
                        output[channel] = input[channel];
                      }
                      this.port.postMessage(output[0]);
                      return true;
                    }
                  }
                  registerProcessor('speech-processor', SP);`;
                const blob = new Blob([workletScript], { type: "application/javascript; charset=utf-8" });
                this.privSpeechProcessorScript = URL.createObjectURL(blob);
            }
            context.audioWorklet
                .addModule(this.privSpeechProcessorScript)
                .then(() => {
                const workletNode = new AudioWorkletNode(context, "speech-processor");
                workletNode.port.onmessage = (ev) => {
                    const inputFrame = ev.data;
                    if (outputStream && !outputStream.isClosed) {
                        const waveFrame = waveStreamEncoder.encode(inputFrame);
                        if (!!waveFrame) {
                            outputStream.writeStreamChunk({
                                buffer: waveFrame,
                                isEnd: false,
                                timeReceived: Date.now(),
                            });
                        }
                    }
                };
                micInput.connect(workletNode);
                workletNode.connect(context.destination);
                this.privMediaResources = {
                    scriptProcessorNode: workletNode,
                    source: micInput,
                    stream: mediaStream,
                };
            })
                .catch(() => {
                attachScriptProcessor();
            });
        }
        else {
            try {
                attachScriptProcessor();
            }
            catch (err) {
                throw new Error(`Unable to start audio worklet node for PCMRecorder: ${err}`);
            }
        }
    }
    releaseMediaResources(context) {
        if (this.privMediaResources) {
            if (this.privMediaResources.scriptProcessorNode) {
                this.privMediaResources.scriptProcessorNode.disconnect(context.destination);
                this.privMediaResources.scriptProcessorNode = null;
            }
            if (this.privMediaResources.source) {
                this.privMediaResources.source.disconnect();
                if (this.privStopInputOnRelease) {
                    this.privMediaResources.stream.getTracks().forEach((track) => track.stop());
                }
                this.privMediaResources.source = null;
            }
        }
    }
    setWorkletUrl(url) {
        this.privSpeechProcessorScript = url;
    }
}
exports.PcmRecorder = PcmRecorder;



/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebsocketConnection = void 0;
const Exports_js_1 = __webpack_require__(4);
const WebsocketMessageAdapter_js_1 = __webpack_require__(71);
class WebsocketConnection {
    constructor(uri, queryParameters, headers, messageFormatter, proxyInfo, enableCompression = false, connectionId) {
        this.privIsDisposed = false;
        if (!uri) {
            throw new Exports_js_1.ArgumentNullError("uri");
        }
        if (!messageFormatter) {
            throw new Exports_js_1.ArgumentNullError("messageFormatter");
        }
        this.privMessageFormatter = messageFormatter;
        let queryParams = "";
        let i = 0;
        if (queryParameters) {
            for (const paramName in queryParameters) {
                if (paramName) {
                    queryParams += ((i === 0) && (uri.indexOf("?") === -1)) ? "?" : "&";
                    const key = encodeURIComponent(paramName);
                    queryParams += key;
                    let val = queryParameters[paramName];
                    if (val) {
                        val = encodeURIComponent(val);
                        queryParams += `=${val}`;
                    }
                    i++;
                }
            }
        }
        if (headers) {
            for (const headerName in headers) {
                if (headerName) {
                    queryParams += ((i === 0) && (uri.indexOf("?") === -1)) ? "?" : "&";
                    const val = encodeURIComponent(headers[headerName]);
                    queryParams += `${headerName}=${val}`;
                    i++;
                }
            }
        }
        this.privUri = uri + queryParams;
        this.privId = connectionId ? connectionId : Exports_js_1.createNoDashGuid();
        this.privConnectionMessageAdapter = new WebsocketMessageAdapter_js_1.WebsocketMessageAdapter(this.privUri, this.id, this.privMessageFormatter, proxyInfo, headers, enableCompression);
    }
    async dispose() {
        this.privIsDisposed = true;
        if (this.privConnectionMessageAdapter) {
            await this.privConnectionMessageAdapter.close();
        }
    }
    isDisposed() {
        return this.privIsDisposed;
    }
    get id() {
        return this.privId;
    }
    get uri() {
        return this.privUri;
    }
    state() {
        return this.privConnectionMessageAdapter.state;
    }
    open() {
        return this.privConnectionMessageAdapter.open();
    }
    send(message) {
        return this.privConnectionMessageAdapter.send(message);
    }
    read() {
        return this.privConnectionMessageAdapter.read();
    }
    get events() {
        return this.privConnectionMessageAdapter.events;
    }
}
exports.WebsocketConnection = WebsocketConnection;



/***/ }),
/* 71 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebsocketMessageAdapter = void 0;
const net = __importStar(__webpack_require__(72));
const tls = __importStar(__webpack_require__(73));
const agent_base_1 = __importDefault(__webpack_require__(74));
const https_proxy_agent_1 = __importDefault(__webpack_require__(75));
const ws_1 = __importDefault(__webpack_require__(76));
const HeaderNames_js_1 = __webpack_require__(54);
const Exports_js_1 = __webpack_require__(4);
class WebsocketMessageAdapter {
    constructor(uri, connectionId, messageFormatter, proxyInfo, headers, enableCompression) {
        if (!uri) {
            throw new Exports_js_1.ArgumentNullError("uri");
        }
        if (!messageFormatter) {
            throw new Exports_js_1.ArgumentNullError("messageFormatter");
        }
        this.proxyInfo = proxyInfo;
        this.privConnectionEvents = new Exports_js_1.EventSource();
        this.privConnectionId = connectionId;
        this.privMessageFormatter = messageFormatter;
        this.privConnectionState = Exports_js_1.ConnectionState.None;
        this.privUri = uri;
        this.privHeaders = headers;
        this.privEnableCompression = enableCompression;
        // Add the connection ID to the headers
        this.privHeaders[HeaderNames_js_1.HeaderNames.ConnectionId] = this.privConnectionId;
        this.privLastErrorReceived = "";
    }
    get state() {
        return this.privConnectionState;
    }
    open() {
        if (this.privConnectionState === Exports_js_1.ConnectionState.Disconnected) {
            return Promise.reject(`Cannot open a connection that is in ${this.privConnectionState} state`);
        }
        if (this.privConnectionEstablishDeferral) {
            return this.privConnectionEstablishDeferral.promise;
        }
        this.privConnectionEstablishDeferral = new Exports_js_1.Deferred();
        this.privCertificateValidatedDeferral = new Exports_js_1.Deferred();
        this.privConnectionState = Exports_js_1.ConnectionState.Connecting;
        try {
            if (typeof WebSocket !== "undefined" && !WebsocketMessageAdapter.forceNpmWebSocket) {
                // Browser handles cert checks.
                this.privCertificateValidatedDeferral.resolve();
                this.privWebsocketClient = new WebSocket(this.privUri);
            }
            else {
                const options = { headers: this.privHeaders, perMessageDeflate: this.privEnableCompression };
                // The ocsp library will handle validation for us and fail the connection if needed.
                this.privCertificateValidatedDeferral.resolve();
                options.agent = this.getAgent();
                // Workaround for https://github.com/microsoft/cognitive-services-speech-sdk-js/issues/465
                // Which is root caused by https://github.com/TooTallNate/node-agent-base/issues/61
                const uri = new URL(this.privUri);
                let protocol = uri.protocol;
                if (protocol?.toLocaleLowerCase() === "wss:") {
                    protocol = "https:";
                }
                else if (protocol?.toLocaleLowerCase() === "ws:") {
                    protocol = "http:";
                }
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                options.agent.protocol = protocol;
                this.privWebsocketClient = new ws_1.default(this.privUri, options);
            }
            this.privWebsocketClient.binaryType = "arraybuffer";
            this.privReceivingMessageQueue = new Exports_js_1.Queue();
            this.privDisconnectDeferral = new Exports_js_1.Deferred();
            this.privSendMessageQueue = new Exports_js_1.Queue();
            this.processSendQueue().catch((reason) => {
                Exports_js_1.Events.instance.onEvent(new Exports_js_1.BackgroundEvent(reason));
            });
        }
        catch (error) {
            this.privConnectionEstablishDeferral.resolve(new Exports_js_1.ConnectionOpenResponse(500, error));
            return this.privConnectionEstablishDeferral.promise;
        }
        this.onEvent(new Exports_js_1.ConnectionStartEvent(this.privConnectionId, this.privUri));
        this.privWebsocketClient.onopen = () => {
            this.privCertificateValidatedDeferral.promise.then(() => {
                this.privConnectionState = Exports_js_1.ConnectionState.Connected;
                this.onEvent(new Exports_js_1.ConnectionEstablishedEvent(this.privConnectionId));
                this.privConnectionEstablishDeferral.resolve(new Exports_js_1.ConnectionOpenResponse(200, ""));
            }, (error) => {
                this.privConnectionEstablishDeferral.reject(error);
            });
        };
        this.privWebsocketClient.onerror = (e) => {
            this.onEvent(new Exports_js_1.ConnectionErrorEvent(this.privConnectionId, e.message, e.type));
            this.privLastErrorReceived = e.message;
        };
        this.privWebsocketClient.onclose = (e) => {
            if (this.privConnectionState === Exports_js_1.ConnectionState.Connecting) {
                this.privConnectionState = Exports_js_1.ConnectionState.Disconnected;
                // this.onEvent(new ConnectionEstablishErrorEvent(this.connectionId, e.code, e.reason));
                this.privConnectionEstablishDeferral.resolve(new Exports_js_1.ConnectionOpenResponse(e.code, e.reason + " " + this.privLastErrorReceived));
            }
            else {
                this.privConnectionState = Exports_js_1.ConnectionState.Disconnected;
                this.privWebsocketClient = null;
                this.onEvent(new Exports_js_1.ConnectionClosedEvent(this.privConnectionId, e.code, e.reason));
            }
            this.onClose(e.code, e.reason).catch((reason) => {
                Exports_js_1.Events.instance.onEvent(new Exports_js_1.BackgroundEvent(reason));
            });
        };
        this.privWebsocketClient.onmessage = (e) => {
            const networkReceivedTime = new Date().toISOString();
            if (this.privConnectionState === Exports_js_1.ConnectionState.Connected) {
                const deferred = new Exports_js_1.Deferred();
                // let id = ++this.idCounter;
                this.privReceivingMessageQueue.enqueueFromPromise(deferred.promise);
                if (e.data instanceof ArrayBuffer) {
                    const rawMessage = new Exports_js_1.RawWebsocketMessage(Exports_js_1.MessageType.Binary, e.data);
                    this.privMessageFormatter
                        .toConnectionMessage(rawMessage)
                        .then((connectionMessage) => {
                        this.onEvent(new Exports_js_1.ConnectionMessageReceivedEvent(this.privConnectionId, networkReceivedTime, connectionMessage));
                        deferred.resolve(connectionMessage);
                    }, (error) => {
                        // TODO: Events for these ?
                        deferred.reject(`Invalid binary message format. Error: ${error}`);
                    });
                }
                else {
                    const rawMessage = new Exports_js_1.RawWebsocketMessage(Exports_js_1.MessageType.Text, e.data);
                    this.privMessageFormatter
                        .toConnectionMessage(rawMessage)
                        .then((connectionMessage) => {
                        this.onEvent(new Exports_js_1.ConnectionMessageReceivedEvent(this.privConnectionId, networkReceivedTime, connectionMessage));
                        deferred.resolve(connectionMessage);
                    }, (error) => {
                        // TODO: Events for these ?
                        deferred.reject(`Invalid text message format. Error: ${error}`);
                    });
                }
            }
        };
        return this.privConnectionEstablishDeferral.promise;
    }
    send(message) {
        if (this.privConnectionState !== Exports_js_1.ConnectionState.Connected) {
            return Promise.reject(`Cannot send on connection that is in ${Exports_js_1.ConnectionState[this.privConnectionState]} state`);
        }
        const messageSendStatusDeferral = new Exports_js_1.Deferred();
        const messageSendDeferral = new Exports_js_1.Deferred();
        this.privSendMessageQueue.enqueueFromPromise(messageSendDeferral.promise);
        this.privMessageFormatter
            .fromConnectionMessage(message)
            .then((rawMessage) => {
            messageSendDeferral.resolve({
                Message: message,
                RawWebsocketMessage: rawMessage,
                sendStatusDeferral: messageSendStatusDeferral,
            });
        }, (error) => {
            messageSendDeferral.reject(`Error formatting the message. ${error}`);
        });
        return messageSendStatusDeferral.promise;
    }
    read() {
        if (this.privConnectionState !== Exports_js_1.ConnectionState.Connected) {
            return Promise.reject(`Cannot read on connection that is in ${this.privConnectionState} state`);
        }
        return this.privReceivingMessageQueue.dequeue();
    }
    close(reason) {
        if (this.privWebsocketClient) {
            if (this.privConnectionState !== Exports_js_1.ConnectionState.Disconnected) {
                this.privWebsocketClient.close(1000, reason ? reason : "Normal closure by client");
            }
        }
        else {
            return Promise.resolve();
        }
        return this.privDisconnectDeferral.promise;
    }
    get events() {
        return this.privConnectionEvents;
    }
    sendRawMessage(sendItem) {
        try {
            // indicates we are draining the queue and it came with no message;
            if (!sendItem) {
                return Promise.resolve();
            }
            this.onEvent(new Exports_js_1.ConnectionMessageSentEvent(this.privConnectionId, new Date().toISOString(), sendItem.Message));
            // add a check for the ws readystate in order to stop the red console error 'WebSocket is already in CLOSING or CLOSED state' appearing
            if (this.isWebsocketOpen) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                this.privWebsocketClient.send(sendItem.RawWebsocketMessage.payload);
            }
            else {
                return Promise.reject("websocket send error: Websocket not ready " + this.privConnectionId + " " + sendItem.Message.id + " " + new Error().stack);
            }
            return Promise.resolve();
        }
        catch (e) {
            return Promise.reject(`websocket send error: ${e}`);
        }
    }
    async onClose(code, reason) {
        const closeReason = `Connection closed. ${code}: ${reason}`;
        this.privConnectionState = Exports_js_1.ConnectionState.Disconnected;
        this.privDisconnectDeferral.resolve();
        await this.privReceivingMessageQueue.drainAndDispose(() => {
            // TODO: Events for these ?
            // Logger.instance.onEvent(new LoggingEvent(LogType.Warning, null, `Failed to process received message. Reason: ${closeReason}, Message: ${JSON.stringify(pendingReceiveItem)}`));
        }, closeReason);
        await this.privSendMessageQueue.drainAndDispose((pendingSendItem) => {
            pendingSendItem.sendStatusDeferral.reject(closeReason);
        }, closeReason);
    }
    async processSendQueue() {
        while (true) {
            const itemToSend = this.privSendMessageQueue.dequeue();
            const sendItem = await itemToSend;
            // indicates we are draining the queue and it came with no message;
            if (!sendItem) {
                return;
            }
            try {
                await this.sendRawMessage(sendItem);
                sendItem.sendStatusDeferral.resolve();
            }
            catch (sendError) {
                sendItem.sendStatusDeferral.reject(sendError);
            }
        }
    }
    onEvent(event) {
        this.privConnectionEvents.onEvent(event);
        Exports_js_1.Events.instance.onEvent(event);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAgent() {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const agent = new agent_base_1.default.Agent(this.createConnection);
        if (this.proxyInfo !== undefined &&
            this.proxyInfo.HostName !== undefined &&
            this.proxyInfo.Port > 0) {
            agent.proxyInfo = this.proxyInfo;
        }
        return agent;
    }
    static GetProxyAgent(proxyInfo) {
        const httpProxyOptions = {
            host: proxyInfo.HostName,
            port: proxyInfo.Port,
        };
        if (!!proxyInfo.UserName) {
            httpProxyOptions.headers = {
                "Proxy-Authentication": "Basic " + new Buffer(`${proxyInfo.UserName}:${(proxyInfo.Password === undefined) ? "" : proxyInfo.Password}`).toString("base64"),
            };
        }
        else {
            httpProxyOptions.headers = {};
        }
        httpProxyOptions.headers.requestOCSP = "true";
        const httpProxyAgent = new https_proxy_agent_1.default(httpProxyOptions);
        return httpProxyAgent;
    }
    createConnection(request, options) {
        let socketPromise;
        options = {
            ...options,
            ...{
                requestOCSP: true,
                servername: options.host
            }
        };
        if (!!this.proxyInfo) {
            const httpProxyAgent = WebsocketMessageAdapter.GetProxyAgent(this.proxyInfo);
            const baseAgent = httpProxyAgent;
            socketPromise = new Promise((resolve, reject) => {
                baseAgent.callback(request, options, (error, socket) => {
                    if (!!error) {
                        reject(error);
                    }
                    else {
                        resolve(socket);
                    }
                });
            });
        }
        else {
            if (!!options.secureEndpoint) {
                socketPromise = Promise.resolve(tls.connect(options));
            }
            else {
                socketPromise = Promise.resolve(net.connect(options));
            }
        }
        return socketPromise;
    }
    get isWebsocketOpen() {
        return this.privWebsocketClient && this.privWebsocketClient.readyState === this.privWebsocketClient.OPEN;
    }
}
exports.WebsocketMessageAdapter = WebsocketMessageAdapter;
WebsocketMessageAdapter.forceNpmWebSocket = false;



/***/ }),
/* 72 */
/***/ (() => {

/* (ignored) */

/***/ }),
/* 73 */
/***/ (() => {

/* (ignored) */

/***/ }),
/* 74 */
/***/ (() => {

/* (ignored) */

/***/ }),
/* 75 */
/***/ (() => {

/* (ignored) */

/***/ }),
/* 76 */
/***/ (() => {

/* (ignored) */

/***/ }),
/* 77 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReplayableAudioNode = void 0;
class ReplayableAudioNode {
    constructor(audioSource, bytesPerSecond) {
        this.privBuffers = [];
        this.privReplayOffset = 0;
        this.privLastShrinkOffset = 0;
        this.privBufferStartOffset = 0;
        this.privBufferSerial = 0;
        this.privBufferedBytes = 0;
        this.privReplay = false;
        this.privLastChunkAcquiredTime = 0;
        this.privAudioNode = audioSource;
        this.privBytesPerSecond = bytesPerSecond;
    }
    id() {
        return this.privAudioNode.id();
    }
    // Reads and returns the next chunk of audio buffer.
    // If replay of existing buffers are needed, read() will first seek and replay
    // existing content, and upoin completion it will read new content from the underlying
    // audio node, saving that content into the replayable buffers.
    read() {
        // if there is a replay request to honor.
        if (!!this.privReplay && this.privBuffers.length !== 0) {
            // Find the start point in the buffers.
            // Offsets are in 100ns increments.
            // So how many bytes do we need to seek to get the right offset?
            const offsetToSeek = this.privReplayOffset - this.privBufferStartOffset;
            let bytesToSeek = Math.round(offsetToSeek * this.privBytesPerSecond * 1e-7);
            if (0 !== (bytesToSeek % 2)) {
                bytesToSeek++;
            }
            let i = 0;
            while (i < this.privBuffers.length && bytesToSeek >= this.privBuffers[i].chunk.buffer.byteLength) {
                bytesToSeek -= this.privBuffers[i++].chunk.buffer.byteLength;
            }
            if (i < this.privBuffers.length) {
                const retVal = this.privBuffers[i].chunk.buffer.slice(bytesToSeek);
                this.privReplayOffset += (retVal.byteLength / this.privBytesPerSecond) * 1e+7;
                // If we've reached the end of the buffers, stop replaying.
                if (i === this.privBuffers.length - 1) {
                    this.privReplay = false;
                }
                return Promise.resolve({
                    buffer: retVal,
                    isEnd: false,
                    timeReceived: this.privBuffers[i].chunk.timeReceived,
                });
            }
        }
        return this.privAudioNode.read()
            .then((result) => {
            if (result && result.buffer) {
                this.privBuffers.push(new BufferEntry(result, this.privBufferSerial++, this.privBufferedBytes));
                this.privBufferedBytes += result.buffer.byteLength;
            }
            return result;
        });
    }
    detach() {
        this.privBuffers = undefined;
        return this.privAudioNode.detach();
    }
    replay() {
        if (this.privBuffers && 0 !== this.privBuffers.length) {
            this.privReplay = true;
            this.privReplayOffset = this.privLastShrinkOffset;
        }
    }
    // Shrinks the existing audio buffers to start at the new offset, or at the
    // beginning of the buffer closest to the requested offset.
    // A replay request will start from the last shrink point.
    shrinkBuffers(offset) {
        if (this.privBuffers === undefined || this.privBuffers.length === 0) {
            return;
        }
        this.privLastShrinkOffset = offset;
        // Find the start point in the buffers.
        // Offsets are in 100ns increments.
        // So how many bytes do we need to seek to get the right offset?
        const offsetToSeek = offset - this.privBufferStartOffset;
        let bytesToSeek = Math.round(offsetToSeek * this.privBytesPerSecond * 1e-7);
        let i = 0;
        while (i < this.privBuffers.length && bytesToSeek >= this.privBuffers[i].chunk.buffer.byteLength) {
            bytesToSeek -= this.privBuffers[i++].chunk.buffer.byteLength;
        }
        this.privBufferStartOffset = Math.round(offset - ((bytesToSeek / this.privBytesPerSecond) * 1e+7));
        this.privBuffers = this.privBuffers.slice(i);
    }
    // Finds the time a buffer of audio was first seen by offset.
    findTimeAtOffset(offset) {
        if (offset < this.privBufferStartOffset || this.privBuffers === undefined) {
            return 0;
        }
        for (const value of this.privBuffers) {
            const startOffset = (value.byteOffset / this.privBytesPerSecond) * 1e7;
            const endOffset = startOffset + ((value.chunk.buffer.byteLength / this.privBytesPerSecond) * 1e7);
            if (offset >= startOffset && offset <= endOffset) {
                return value.chunk.timeReceived;
            }
        }
        return 0;
    }
}
exports.ReplayableAudioNode = ReplayableAudioNode;
// Primary use of this class is to help debugging problems with the replay
// code. If the memory cost of alloc / dealloc gets too much, drop it and just use
// the ArrayBuffer directly.
class BufferEntry {
    constructor(chunk, serial, byteOffset) {
        this.chunk = chunk;
        this.serial = serial;
        this.byteOffset = byteOffset;
    }
}



/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProxyInfo = void 0;
const Exports_js_1 = __webpack_require__(79);
class ProxyInfo {
    constructor(proxyHostName, proxyPort, proxyUserName, proxyPassword) {
        this.privProxyHostName = proxyHostName;
        this.privProxyPort = proxyPort;
        this.privProxyUserName = proxyUserName;
        this.privProxyPassword = proxyPassword;
    }
    static fromParameters(parameters) {
        return new ProxyInfo(parameters.getProperty(Exports_js_1.PropertyId.SpeechServiceConnection_ProxyHostName), parseInt(parameters.getProperty(Exports_js_1.PropertyId.SpeechServiceConnection_ProxyPort), 10), parameters.getProperty(Exports_js_1.PropertyId.SpeechServiceConnection_ProxyUserName), parameters.getProperty(Exports_js_1.PropertyId.SpeechServiceConnection_ProxyPassword));
    }
    static fromRecognizerConfig(config) {
        return this.fromParameters(config.parameters);
    }
    get HostName() {
        return this.privProxyHostName;
    }
    get Port() {
        return this.privProxyPort;
    }
    get UserName() {
        return this.privProxyUserName;
    }
    get Password() {
        return this.privProxyPassword;
    }
}
exports.ProxyInfo = ProxyInfo;



/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var AudioConfig_js_1 = __webpack_require__(80);
Object.defineProperty(exports, "AudioConfig", ({ enumerable: true, get: function () { return AudioConfig_js_1.AudioConfig; } }));
var AudioStreamFormat_js_1 = __webpack_require__(67);
Object.defineProperty(exports, "AudioStreamFormat", ({ enumerable: true, get: function () { return AudioStreamFormat_js_1.AudioStreamFormat; } }));
Object.defineProperty(exports, "AudioFormatTag", ({ enumerable: true, get: function () { return AudioStreamFormat_js_1.AudioFormatTag; } }));
var AudioInputStream_js_1 = __webpack_require__(83);
Object.defineProperty(exports, "AudioInputStream", ({ enumerable: true, get: function () { return AudioInputStream_js_1.AudioInputStream; } }));
Object.defineProperty(exports, "PullAudioInputStream", ({ enumerable: true, get: function () { return AudioInputStream_js_1.PullAudioInputStream; } }));
Object.defineProperty(exports, "PushAudioInputStream", ({ enumerable: true, get: function () { return AudioInputStream_js_1.PushAudioInputStream; } }));
var AudioOutputStream_js_1 = __webpack_require__(84);
Object.defineProperty(exports, "AudioOutputStream", ({ enumerable: true, get: function () { return AudioOutputStream_js_1.AudioOutputStream; } }));
Object.defineProperty(exports, "PullAudioOutputStream", ({ enumerable: true, get: function () { return AudioOutputStream_js_1.PullAudioOutputStream; } }));
Object.defineProperty(exports, "PushAudioOutputStream", ({ enumerable: true, get: function () { return AudioOutputStream_js_1.PushAudioOutputStream; } }));
var CancellationReason_js_1 = __webpack_require__(87);
Object.defineProperty(exports, "CancellationReason", ({ enumerable: true, get: function () { return CancellationReason_js_1.CancellationReason; } }));
var PullAudioInputStreamCallback_js_1 = __webpack_require__(88);
Object.defineProperty(exports, "PullAudioInputStreamCallback", ({ enumerable: true, get: function () { return PullAudioInputStreamCallback_js_1.PullAudioInputStreamCallback; } }));
var PushAudioOutputStreamCallback_js_1 = __webpack_require__(89);
Object.defineProperty(exports, "PushAudioOutputStreamCallback", ({ enumerable: true, get: function () { return PushAudioOutputStreamCallback_js_1.PushAudioOutputStreamCallback; } }));
var KeywordRecognitionModel_js_1 = __webpack_require__(90);
Object.defineProperty(exports, "KeywordRecognitionModel", ({ enumerable: true, get: function () { return KeywordRecognitionModel_js_1.KeywordRecognitionModel; } }));
var SessionEventArgs_js_1 = __webpack_require__(91);
Object.defineProperty(exports, "SessionEventArgs", ({ enumerable: true, get: function () { return SessionEventArgs_js_1.SessionEventArgs; } }));
var RecognitionEventArgs_js_1 = __webpack_require__(92);
Object.defineProperty(exports, "RecognitionEventArgs", ({ enumerable: true, get: function () { return RecognitionEventArgs_js_1.RecognitionEventArgs; } }));
var OutputFormat_js_1 = __webpack_require__(93);
Object.defineProperty(exports, "OutputFormat", ({ enumerable: true, get: function () { return OutputFormat_js_1.OutputFormat; } }));
var IntentRecognitionEventArgs_js_1 = __webpack_require__(94);
Object.defineProperty(exports, "IntentRecognitionEventArgs", ({ enumerable: true, get: function () { return IntentRecognitionEventArgs_js_1.IntentRecognitionEventArgs; } }));
var RecognitionResult_js_1 = __webpack_require__(95);
Object.defineProperty(exports, "RecognitionResult", ({ enumerable: true, get: function () { return RecognitionResult_js_1.RecognitionResult; } }));
var SpeechRecognitionResult_js_1 = __webpack_require__(96);
Object.defineProperty(exports, "SpeechRecognitionResult", ({ enumerable: true, get: function () { return SpeechRecognitionResult_js_1.SpeechRecognitionResult; } }));
var IntentRecognitionResult_js_1 = __webpack_require__(97);
Object.defineProperty(exports, "IntentRecognitionResult", ({ enumerable: true, get: function () { return IntentRecognitionResult_js_1.IntentRecognitionResult; } }));
var LanguageUnderstandingModel_js_1 = __webpack_require__(98);
Object.defineProperty(exports, "LanguageUnderstandingModel", ({ enumerable: true, get: function () { return LanguageUnderstandingModel_js_1.LanguageUnderstandingModel; } }));
var SpeechRecognitionEventArgs_js_1 = __webpack_require__(99);
Object.defineProperty(exports, "SpeechRecognitionEventArgs", ({ enumerable: true, get: function () { return SpeechRecognitionEventArgs_js_1.SpeechRecognitionEventArgs; } }));
Object.defineProperty(exports, "ConversationTranscriptionEventArgs", ({ enumerable: true, get: function () { return SpeechRecognitionEventArgs_js_1.ConversationTranscriptionEventArgs; } }));
Object.defineProperty(exports, "MeetingTranscriptionEventArgs", ({ enumerable: true, get: function () { return SpeechRecognitionEventArgs_js_1.MeetingTranscriptionEventArgs; } }));
var SpeechRecognitionCanceledEventArgs_js_1 = __webpack_require__(100);
Object.defineProperty(exports, "SpeechRecognitionCanceledEventArgs", ({ enumerable: true, get: function () { return SpeechRecognitionCanceledEventArgs_js_1.SpeechRecognitionCanceledEventArgs; } }));
var TranslationRecognitionEventArgs_js_1 = __webpack_require__(102);
Object.defineProperty(exports, "TranslationRecognitionEventArgs", ({ enumerable: true, get: function () { return TranslationRecognitionEventArgs_js_1.TranslationRecognitionEventArgs; } }));
var TranslationSynthesisEventArgs_js_1 = __webpack_require__(103);
Object.defineProperty(exports, "TranslationSynthesisEventArgs", ({ enumerable: true, get: function () { return TranslationSynthesisEventArgs_js_1.TranslationSynthesisEventArgs; } }));
var TranslationRecognitionResult_js_1 = __webpack_require__(104);
Object.defineProperty(exports, "TranslationRecognitionResult", ({ enumerable: true, get: function () { return TranslationRecognitionResult_js_1.TranslationRecognitionResult; } }));
var TranslationSynthesisResult_js_1 = __webpack_require__(105);
Object.defineProperty(exports, "TranslationSynthesisResult", ({ enumerable: true, get: function () { return TranslationSynthesisResult_js_1.TranslationSynthesisResult; } }));
var ResultReason_js_1 = __webpack_require__(106);
Object.defineProperty(exports, "ResultReason", ({ enumerable: true, get: function () { return ResultReason_js_1.ResultReason; } }));
var SpeechConfig_js_1 = __webpack_require__(107);
Object.defineProperty(exports, "SpeechConfig", ({ enumerable: true, get: function () { return SpeechConfig_js_1.SpeechConfig; } }));
Object.defineProperty(exports, "SpeechConfigImpl", ({ enumerable: true, get: function () { return SpeechConfig_js_1.SpeechConfigImpl; } }));
var SpeechTranslationConfig_js_1 = __webpack_require__(108);
Object.defineProperty(exports, "SpeechTranslationConfig", ({ enumerable: true, get: function () { return SpeechTranslationConfig_js_1.SpeechTranslationConfig; } }));
Object.defineProperty(exports, "SpeechTranslationConfigImpl", ({ enumerable: true, get: function () { return SpeechTranslationConfig_js_1.SpeechTranslationConfigImpl; } }));
var PropertyCollection_js_1 = __webpack_require__(109);
Object.defineProperty(exports, "PropertyCollection", ({ enumerable: true, get: function () { return PropertyCollection_js_1.PropertyCollection; } }));
var PropertyId_js_1 = __webpack_require__(110);
Object.defineProperty(exports, "PropertyId", ({ enumerable: true, get: function () { return PropertyId_js_1.PropertyId; } }));
var Recognizer_js_1 = __webpack_require__(111);
Object.defineProperty(exports, "Recognizer", ({ enumerable: true, get: function () { return Recognizer_js_1.Recognizer; } }));
var SpeechRecognizer_js_1 = __webpack_require__(112);
Object.defineProperty(exports, "SpeechRecognizer", ({ enumerable: true, get: function () { return SpeechRecognizer_js_1.SpeechRecognizer; } }));
var IntentRecognizer_js_1 = __webpack_require__(113);
Object.defineProperty(exports, "IntentRecognizer", ({ enumerable: true, get: function () { return IntentRecognizer_js_1.IntentRecognizer; } }));
var VoiceProfileType_js_1 = __webpack_require__(114);
Object.defineProperty(exports, "VoiceProfileType", ({ enumerable: true, get: function () { return VoiceProfileType_js_1.VoiceProfileType; } }));
var TranslationRecognizer_js_1 = __webpack_require__(115);
Object.defineProperty(exports, "TranslationRecognizer", ({ enumerable: true, get: function () { return TranslationRecognizer_js_1.TranslationRecognizer; } }));
var Translations_js_1 = __webpack_require__(118);
Object.defineProperty(exports, "Translations", ({ enumerable: true, get: function () { return Translations_js_1.Translations; } }));
var NoMatchReason_js_1 = __webpack_require__(119);
Object.defineProperty(exports, "NoMatchReason", ({ enumerable: true, get: function () { return NoMatchReason_js_1.NoMatchReason; } }));
var NoMatchDetails_js_1 = __webpack_require__(120);
Object.defineProperty(exports, "NoMatchDetails", ({ enumerable: true, get: function () { return NoMatchDetails_js_1.NoMatchDetails; } }));
var TranslationRecognitionCanceledEventArgs_js_1 = __webpack_require__(121);
Object.defineProperty(exports, "TranslationRecognitionCanceledEventArgs", ({ enumerable: true, get: function () { return TranslationRecognitionCanceledEventArgs_js_1.TranslationRecognitionCanceledEventArgs; } }));
var IntentRecognitionCanceledEventArgs_js_1 = __webpack_require__(122);
Object.defineProperty(exports, "IntentRecognitionCanceledEventArgs", ({ enumerable: true, get: function () { return IntentRecognitionCanceledEventArgs_js_1.IntentRecognitionCanceledEventArgs; } }));
var CancellationDetailsBase_js_1 = __webpack_require__(123);
Object.defineProperty(exports, "CancellationDetailsBase", ({ enumerable: true, get: function () { return CancellationDetailsBase_js_1.CancellationDetailsBase; } }));
var CancellationDetails_js_1 = __webpack_require__(124);
Object.defineProperty(exports, "CancellationDetails", ({ enumerable: true, get: function () { return CancellationDetails_js_1.CancellationDetails; } }));
var CancellationErrorCodes_js_1 = __webpack_require__(125);
Object.defineProperty(exports, "CancellationErrorCode", ({ enumerable: true, get: function () { return CancellationErrorCodes_js_1.CancellationErrorCode; } }));
var ConnectionEventArgs_js_1 = __webpack_require__(126);
Object.defineProperty(exports, "ConnectionEventArgs", ({ enumerable: true, get: function () { return ConnectionEventArgs_js_1.ConnectionEventArgs; } }));
var ServiceEventArgs_js_1 = __webpack_require__(127);
Object.defineProperty(exports, "ServiceEventArgs", ({ enumerable: true, get: function () { return ServiceEventArgs_js_1.ServiceEventArgs; } }));
var Connection_js_1 = __webpack_require__(116);
Object.defineProperty(exports, "Connection", ({ enumerable: true, get: function () { return Connection_js_1.Connection; } }));
var PhraseListGrammar_js_1 = __webpack_require__(128);
Object.defineProperty(exports, "PhraseListGrammar", ({ enumerable: true, get: function () { return PhraseListGrammar_js_1.PhraseListGrammar; } }));
var DialogServiceConfig_js_1 = __webpack_require__(129);
Object.defineProperty(exports, "DialogServiceConfig", ({ enumerable: true, get: function () { return DialogServiceConfig_js_1.DialogServiceConfig; } }));
var BotFrameworkConfig_js_1 = __webpack_require__(130);
Object.defineProperty(exports, "BotFrameworkConfig", ({ enumerable: true, get: function () { return BotFrameworkConfig_js_1.BotFrameworkConfig; } }));
var CustomCommandsConfig_js_1 = __webpack_require__(131);
Object.defineProperty(exports, "CustomCommandsConfig", ({ enumerable: true, get: function () { return CustomCommandsConfig_js_1.CustomCommandsConfig; } }));
var DialogServiceConnector_js_1 = __webpack_require__(132);
Object.defineProperty(exports, "DialogServiceConnector", ({ enumerable: true, get: function () { return DialogServiceConnector_js_1.DialogServiceConnector; } }));
var ActivityReceivedEventArgs_js_1 = __webpack_require__(136);
Object.defineProperty(exports, "ActivityReceivedEventArgs", ({ enumerable: true, get: function () { return ActivityReceivedEventArgs_js_1.ActivityReceivedEventArgs; } }));
var TurnStatusReceivedEventArgs_js_1 = __webpack_require__(137);
Object.defineProperty(exports, "TurnStatusReceivedEventArgs", ({ enumerable: true, get: function () { return TurnStatusReceivedEventArgs_js_1.TurnStatusReceivedEventArgs; } }));
var ServicePropertyChannel_js_1 = __webpack_require__(139);
Object.defineProperty(exports, "ServicePropertyChannel", ({ enumerable: true, get: function () { return ServicePropertyChannel_js_1.ServicePropertyChannel; } }));
var ProfanityOption_js_1 = __webpack_require__(140);
Object.defineProperty(exports, "ProfanityOption", ({ enumerable: true, get: function () { return ProfanityOption_js_1.ProfanityOption; } }));
var BaseAudioPlayer_js_1 = __webpack_require__(141);
Object.defineProperty(exports, "BaseAudioPlayer", ({ enumerable: true, get: function () { return BaseAudioPlayer_js_1.BaseAudioPlayer; } }));
var ConnectionMessageEventArgs_js_1 = __webpack_require__(142);
Object.defineProperty(exports, "ConnectionMessageEventArgs", ({ enumerable: true, get: function () { return ConnectionMessageEventArgs_js_1.ConnectionMessageEventArgs; } }));
var ConnectionMessage_js_1 = __webpack_require__(117);
Object.defineProperty(exports, "ConnectionMessage", ({ enumerable: true, get: function () { return ConnectionMessage_js_1.ConnectionMessage; } }));
var VoiceProfile_js_1 = __webpack_require__(143);
Object.defineProperty(exports, "VoiceProfile", ({ enumerable: true, get: function () { return VoiceProfile_js_1.VoiceProfile; } }));
var VoiceProfileEnrollmentResult_js_1 = __webpack_require__(144);
Object.defineProperty(exports, "VoiceProfileEnrollmentResult", ({ enumerable: true, get: function () { return VoiceProfileEnrollmentResult_js_1.VoiceProfileEnrollmentResult; } }));
Object.defineProperty(exports, "VoiceProfileEnrollmentCancellationDetails", ({ enumerable: true, get: function () { return VoiceProfileEnrollmentResult_js_1.VoiceProfileEnrollmentCancellationDetails; } }));
var VoiceProfileResult_js_1 = __webpack_require__(145);
Object.defineProperty(exports, "VoiceProfileResult", ({ enumerable: true, get: function () { return VoiceProfileResult_js_1.VoiceProfileResult; } }));
Object.defineProperty(exports, "VoiceProfileCancellationDetails", ({ enumerable: true, get: function () { return VoiceProfileResult_js_1.VoiceProfileCancellationDetails; } }));
var VoiceProfilePhraseResult_js_1 = __webpack_require__(146);
Object.defineProperty(exports, "VoiceProfilePhraseResult", ({ enumerable: true, get: function () { return VoiceProfilePhraseResult_js_1.VoiceProfilePhraseResult; } }));
var VoiceProfileClient_js_1 = __webpack_require__(147);
Object.defineProperty(exports, "VoiceProfileClient", ({ enumerable: true, get: function () { return VoiceProfileClient_js_1.VoiceProfileClient; } }));
var SpeakerRecognizer_js_1 = __webpack_require__(148);
Object.defineProperty(exports, "SpeakerRecognizer", ({ enumerable: true, get: function () { return SpeakerRecognizer_js_1.SpeakerRecognizer; } }));
var SpeakerIdentificationModel_js_1 = __webpack_require__(149);
Object.defineProperty(exports, "SpeakerIdentificationModel", ({ enumerable: true, get: function () { return SpeakerIdentificationModel_js_1.SpeakerIdentificationModel; } }));
var SpeakerVerificationModel_js_1 = __webpack_require__(150);
Object.defineProperty(exports, "SpeakerVerificationModel", ({ enumerable: true, get: function () { return SpeakerVerificationModel_js_1.SpeakerVerificationModel; } }));
var AutoDetectSourceLanguageConfig_js_1 = __webpack_require__(151);
Object.defineProperty(exports, "AutoDetectSourceLanguageConfig", ({ enumerable: true, get: function () { return AutoDetectSourceLanguageConfig_js_1.AutoDetectSourceLanguageConfig; } }));
var AutoDetectSourceLanguageResult_js_1 = __webpack_require__(153);
Object.defineProperty(exports, "AutoDetectSourceLanguageResult", ({ enumerable: true, get: function () { return AutoDetectSourceLanguageResult_js_1.AutoDetectSourceLanguageResult; } }));
var SourceLanguageConfig_js_1 = __webpack_require__(154);
Object.defineProperty(exports, "SourceLanguageConfig", ({ enumerable: true, get: function () { return SourceLanguageConfig_js_1.SourceLanguageConfig; } }));
var SpeakerRecognitionResult_js_1 = __webpack_require__(155);
Object.defineProperty(exports, "SpeakerRecognitionResult", ({ enumerable: true, get: function () { return SpeakerRecognitionResult_js_1.SpeakerRecognitionResult; } }));
Object.defineProperty(exports, "SpeakerRecognitionResultType", ({ enumerable: true, get: function () { return SpeakerRecognitionResult_js_1.SpeakerRecognitionResultType; } }));
Object.defineProperty(exports, "SpeakerRecognitionCancellationDetails", ({ enumerable: true, get: function () { return SpeakerRecognitionResult_js_1.SpeakerRecognitionCancellationDetails; } }));
var Exports_js_1 = __webpack_require__(156);
Object.defineProperty(exports, "Conversation", ({ enumerable: true, get: function () { return Exports_js_1.Conversation; } }));
Object.defineProperty(exports, "ConversationExpirationEventArgs", ({ enumerable: true, get: function () { return Exports_js_1.ConversationExpirationEventArgs; } }));
Object.defineProperty(exports, "ConversationParticipantsChangedEventArgs", ({ enumerable: true, get: function () { return Exports_js_1.ConversationParticipantsChangedEventArgs; } }));
Object.defineProperty(exports, "ConversationTranslationCanceledEventArgs", ({ enumerable: true, get: function () { return Exports_js_1.ConversationTranslationCanceledEventArgs; } }));
Object.defineProperty(exports, "ConversationTranslationEventArgs", ({ enumerable: true, get: function () { return Exports_js_1.ConversationTranslationEventArgs; } }));
Object.defineProperty(exports, "ConversationTranslationResult", ({ enumerable: true, get: function () { return Exports_js_1.ConversationTranslationResult; } }));
Object.defineProperty(exports, "ConversationTranslator", ({ enumerable: true, get: function () { return Exports_js_1.ConversationTranslator; } }));
Object.defineProperty(exports, "ConversationTranscriber", ({ enumerable: true, get: function () { return Exports_js_1.ConversationTranscriber; } }));
Object.defineProperty(exports, "ConversationTranscriptionResult", ({ enumerable: true, get: function () { return Exports_js_1.ConversationTranscriptionResult; } }));
Object.defineProperty(exports, "Meeting", ({ enumerable: true, get: function () { return Exports_js_1.Meeting; } }));
Object.defineProperty(exports, "MeetingTranscriber", ({ enumerable: true, get: function () { return Exports_js_1.MeetingTranscriber; } }));
Object.defineProperty(exports, "Participant", ({ enumerable: true, get: function () { return Exports_js_1.Participant; } }));
Object.defineProperty(exports, "ParticipantChangedReason", ({ enumerable: true, get: function () { return Exports_js_1.ParticipantChangedReason; } }));
Object.defineProperty(exports, "User", ({ enumerable: true, get: function () { return Exports_js_1.User; } }));
var Synthesizer_js_1 = __webpack_require__(174);
Object.defineProperty(exports, "Synthesizer", ({ enumerable: true, get: function () { return Synthesizer_js_1.Synthesizer; } }));
var SpeechSynthesisOutputFormat_js_1 = __webpack_require__(86);
Object.defineProperty(exports, "SpeechSynthesisOutputFormat", ({ enumerable: true, get: function () { return SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat; } }));
var SpeechSynthesizer_js_1 = __webpack_require__(175);
Object.defineProperty(exports, "SpeechSynthesizer", ({ enumerable: true, get: function () { return SpeechSynthesizer_js_1.SpeechSynthesizer; } }));
var SynthesisResult_js_1 = __webpack_require__(176);
Object.defineProperty(exports, "SynthesisResult", ({ enumerable: true, get: function () { return SynthesisResult_js_1.SynthesisResult; } }));
var SpeechSynthesisResult_js_1 = __webpack_require__(177);
Object.defineProperty(exports, "SpeechSynthesisResult", ({ enumerable: true, get: function () { return SpeechSynthesisResult_js_1.SpeechSynthesisResult; } }));
var SpeechSynthesisEventArgs_js_1 = __webpack_require__(178);
Object.defineProperty(exports, "SpeechSynthesisEventArgs", ({ enumerable: true, get: function () { return SpeechSynthesisEventArgs_js_1.SpeechSynthesisEventArgs; } }));
var SpeechSynthesisWordBoundaryEventArgs_js_1 = __webpack_require__(179);
Object.defineProperty(exports, "SpeechSynthesisWordBoundaryEventArgs", ({ enumerable: true, get: function () { return SpeechSynthesisWordBoundaryEventArgs_js_1.SpeechSynthesisWordBoundaryEventArgs; } }));
var SpeechSynthesisBookmarkEventArgs_js_1 = __webpack_require__(180);
Object.defineProperty(exports, "SpeechSynthesisBookmarkEventArgs", ({ enumerable: true, get: function () { return SpeechSynthesisBookmarkEventArgs_js_1.SpeechSynthesisBookmarkEventArgs; } }));
var SpeechSynthesisVisemeEventArgs_js_1 = __webpack_require__(181);
Object.defineProperty(exports, "SpeechSynthesisVisemeEventArgs", ({ enumerable: true, get: function () { return SpeechSynthesisVisemeEventArgs_js_1.SpeechSynthesisVisemeEventArgs; } }));
var SpeechSynthesisBoundaryType_js_1 = __webpack_require__(182);
Object.defineProperty(exports, "SpeechSynthesisBoundaryType", ({ enumerable: true, get: function () { return SpeechSynthesisBoundaryType_js_1.SpeechSynthesisBoundaryType; } }));
var SynthesisVoicesResult_js_1 = __webpack_require__(183);
Object.defineProperty(exports, "SynthesisVoicesResult", ({ enumerable: true, get: function () { return SynthesisVoicesResult_js_1.SynthesisVoicesResult; } }));
var VoiceInfo_js_1 = __webpack_require__(184);
Object.defineProperty(exports, "VoiceInfo", ({ enumerable: true, get: function () { return VoiceInfo_js_1.VoiceInfo; } }));
var SpeakerAudioDestination_js_1 = __webpack_require__(185);
Object.defineProperty(exports, "SpeakerAudioDestination", ({ enumerable: true, get: function () { return SpeakerAudioDestination_js_1.SpeakerAudioDestination; } }));
var ConversationTranscriptionCanceledEventArgs_js_1 = __webpack_require__(186);
Object.defineProperty(exports, "ConversationTranscriptionCanceledEventArgs", ({ enumerable: true, get: function () { return ConversationTranscriptionCanceledEventArgs_js_1.ConversationTranscriptionCanceledEventArgs; } }));
var MeetingTranscriptionCanceledEventArgs_js_1 = __webpack_require__(187);
Object.defineProperty(exports, "MeetingTranscriptionCanceledEventArgs", ({ enumerable: true, get: function () { return MeetingTranscriptionCanceledEventArgs_js_1.MeetingTranscriptionCanceledEventArgs; } }));
var PronunciationAssessmentGradingSystem_js_1 = __webpack_require__(188);
Object.defineProperty(exports, "PronunciationAssessmentGradingSystem", ({ enumerable: true, get: function () { return PronunciationAssessmentGradingSystem_js_1.PronunciationAssessmentGradingSystem; } }));
var PronunciationAssessmentGranularity_js_1 = __webpack_require__(189);
Object.defineProperty(exports, "PronunciationAssessmentGranularity", ({ enumerable: true, get: function () { return PronunciationAssessmentGranularity_js_1.PronunciationAssessmentGranularity; } }));
var PronunciationAssessmentConfig_js_1 = __webpack_require__(190);
Object.defineProperty(exports, "PronunciationAssessmentConfig", ({ enumerable: true, get: function () { return PronunciationAssessmentConfig_js_1.PronunciationAssessmentConfig; } }));
var PronunciationAssessmentResult_js_1 = __webpack_require__(191);
Object.defineProperty(exports, "PronunciationAssessmentResult", ({ enumerable: true, get: function () { return PronunciationAssessmentResult_js_1.PronunciationAssessmentResult; } }));
var LanguageIdMode_js_1 = __webpack_require__(152);
Object.defineProperty(exports, "LanguageIdMode", ({ enumerable: true, get: function () { return LanguageIdMode_js_1.LanguageIdMode; } }));
var AvatarConfig_js_1 = __webpack_require__(192);
Object.defineProperty(exports, "AvatarConfig", ({ enumerable: true, get: function () { return AvatarConfig_js_1.AvatarConfig; } }));
var AvatarEventArgs_js_1 = __webpack_require__(193);
Object.defineProperty(exports, "AvatarEventArgs", ({ enumerable: true, get: function () { return AvatarEventArgs_js_1.AvatarEventArgs; } }));
var AvatarSynthesizer_js_1 = __webpack_require__(194);
Object.defineProperty(exports, "AvatarSynthesizer", ({ enumerable: true, get: function () { return AvatarSynthesizer_js_1.AvatarSynthesizer; } }));
var AvatarVideoFormat_js_1 = __webpack_require__(196);
Object.defineProperty(exports, "AvatarVideoFormat", ({ enumerable: true, get: function () { return AvatarVideoFormat_js_1.AvatarVideoFormat; } }));
Object.defineProperty(exports, "Coordinate", ({ enumerable: true, get: function () { return AvatarVideoFormat_js_1.Coordinate; } }));
var AvatarWebRTCConnectionResult_js_1 = __webpack_require__(197);
Object.defineProperty(exports, "AvatarWebRTCConnectionResult", ({ enumerable: true, get: function () { return AvatarWebRTCConnectionResult_js_1.AvatarWebRTCConnectionResult; } }));
var Diagnostics_js_1 = __webpack_require__(198);
Object.defineProperty(exports, "Diagnostics", ({ enumerable: true, get: function () { return Diagnostics_js_1.Diagnostics; } }));
var LogLevel_js_1 = __webpack_require__(63);
Object.defineProperty(exports, "LogLevel", ({ enumerable: true, get: function () { return LogLevel_js_1.LogLevel; } }));



/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioOutputConfigImpl = exports.AudioConfigImpl = exports.AudioConfig = void 0;
const Exports_js_1 = __webpack_require__(60);
const Contracts_js_1 = __webpack_require__(64);
const Exports_js_2 = __webpack_require__(79);
const AudioFileWriter_js_1 = __webpack_require__(81);
const AudioInputStream_js_1 = __webpack_require__(83);
const AudioOutputStream_js_1 = __webpack_require__(84);
/**
 * Represents audio input configuration used for specifying what type of input to use (microphone, file, stream).
 * @class AudioConfig
 * Updated in version 1.11.0
 */
class AudioConfig {
    /**
     * Creates an AudioConfig object representing the default microphone on the system.
     * @member AudioConfig.fromDefaultMicrophoneInput
     * @function
     * @public
     * @returns {AudioConfig} The audio input configuration being created.
     */
    static fromDefaultMicrophoneInput() {
        const pcmRecorder = new Exports_js_1.PcmRecorder(true);
        return new AudioConfigImpl(new Exports_js_1.MicAudioSource(pcmRecorder));
    }
    /**
     * Creates an AudioConfig object representing a microphone with the specified device ID.
     * @member AudioConfig.fromMicrophoneInput
     * @function
     * @public
     * @param {string | undefined} deviceId - Specifies the device ID of the microphone to be used.
     * Default microphone is used the value is omitted.
     * @returns {AudioConfig} The audio input configuration being created.
     */
    static fromMicrophoneInput(deviceId) {
        const pcmRecorder = new Exports_js_1.PcmRecorder(true);
        return new AudioConfigImpl(new Exports_js_1.MicAudioSource(pcmRecorder, deviceId));
    }
    /**
     * Creates an AudioConfig object representing the specified file.
     * @member AudioConfig.fromWavFileInput
     * @function
     * @public
     * @param {File} fileName - Specifies the audio input file. Currently, only WAV / PCM is supported.
     * @returns {AudioConfig} The audio input configuration being created.
     */
    static fromWavFileInput(file, name = "unnamedBuffer.wav") {
        return new AudioConfigImpl(new Exports_js_1.FileAudioSource(file, name));
    }
    /**
     * Creates an AudioConfig object representing the specified stream.
     * @member AudioConfig.fromStreamInput
     * @function
     * @public
     * @param {AudioInputStream | PullAudioInputStreamCallback | MediaStream} audioStream - Specifies the custom audio input
     * stream. Currently, only WAV / PCM is supported.
     * @returns {AudioConfig} The audio input configuration being created.
     */
    static fromStreamInput(audioStream) {
        if (audioStream instanceof Exports_js_2.PullAudioInputStreamCallback) {
            return new AudioConfigImpl(new AudioInputStream_js_1.PullAudioInputStreamImpl(audioStream));
        }
        if (audioStream instanceof Exports_js_2.AudioInputStream) {
            return new AudioConfigImpl(audioStream);
        }
        if (typeof MediaStream !== "undefined" && audioStream instanceof MediaStream) {
            const pcmRecorder = new Exports_js_1.PcmRecorder(false);
            return new AudioConfigImpl(new Exports_js_1.MicAudioSource(pcmRecorder, null, null, audioStream));
        }
        throw new Error("Not Supported Type");
    }
    /**
     * Creates an AudioConfig object representing the default speaker.
     * @member AudioConfig.fromDefaultSpeakerOutput
     * @function
     * @public
     * @returns {AudioConfig} The audio output configuration being created.
     * Added in version 1.11.0
     */
    static fromDefaultSpeakerOutput() {
        return new AudioOutputConfigImpl(new Exports_js_2.SpeakerAudioDestination());
    }
    /**
     * Creates an AudioConfig object representing the custom IPlayer object.
     * You can use the IPlayer object to control pause, resume, etc.
     * @member AudioConfig.fromSpeakerOutput
     * @function
     * @public
     * @param {IPlayer} player - the IPlayer object for playback.
     * @returns {AudioConfig} The audio output configuration being created.
     * Added in version 1.12.0
     */
    static fromSpeakerOutput(player) {
        if (player === undefined) {
            return AudioConfig.fromDefaultSpeakerOutput();
        }
        if (player instanceof Exports_js_2.SpeakerAudioDestination) {
            return new AudioOutputConfigImpl(player);
        }
        throw new Error("Not Supported Type");
    }
    /**
     * Creates an AudioConfig object representing a specified output audio file
     * @member AudioConfig.fromAudioFileOutput
     * @function
     * @public
     * @param {PathLike} filename - the filename of the output audio file
     * @returns {AudioConfig} The audio output configuration being created.
     * Added in version 1.11.0
     */
    static fromAudioFileOutput(filename) {
        return new AudioOutputConfigImpl(new AudioFileWriter_js_1.AudioFileWriter(filename));
    }
    /**
     * Creates an AudioConfig object representing a specified audio output stream
     * @member AudioConfig.fromStreamOutput
     * @function
     * @public
     * @param {AudioOutputStream | PushAudioOutputStreamCallback} audioStream - Specifies the custom audio output
     * stream.
     * @returns {AudioConfig} The audio output configuration being created.
     * Added in version 1.11.0
     */
    static fromStreamOutput(audioStream) {
        if (audioStream instanceof Exports_js_2.PushAudioOutputStreamCallback) {
            return new AudioOutputConfigImpl(new AudioOutputStream_js_1.PushAudioOutputStreamImpl(audioStream));
        }
        if (audioStream instanceof Exports_js_2.PushAudioOutputStream) {
            return new AudioOutputConfigImpl(audioStream);
        }
        if (audioStream instanceof Exports_js_2.PullAudioOutputStream) {
            return new AudioOutputConfigImpl(audioStream);
        }
        throw new Error("Not Supported Type");
    }
}
exports.AudioConfig = AudioConfig;
/**
 * Represents audio input stream used for custom audio input configurations.
 * @private
 * @class AudioConfigImpl
 */
class AudioConfigImpl extends AudioConfig {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {IAudioSource} source - An audio source.
     */
    constructor(source) {
        super();
        this.privSource = source;
    }
    /**
     * Format information for the audio
     */
    get format() {
        return this.privSource.format;
    }
    /**
     * @member AudioConfigImpl.prototype.close
     * @function
     * @public
     */
    close(cb, err) {
        this.privSource.turnOff().then(() => {
            if (!!cb) {
                cb();
            }
        }, (error) => {
            if (!!err) {
                err(error);
            }
        });
    }
    /**
     * @member AudioConfigImpl.prototype.id
     * @function
     * @public
     */
    id() {
        return this.privSource.id();
    }
    /**
     * @member AudioConfigImpl.prototype.turnOn
     * @function
     * @public
     * @returns {Promise<void>} A promise.
     */
    turnOn() {
        return this.privSource.turnOn();
    }
    /**
     * @member AudioConfigImpl.prototype.attach
     * @function
     * @public
     * @param {string} audioNodeId - The audio node id.
     * @returns {Promise<IAudioStreamNode>} A promise.
     */
    attach(audioNodeId) {
        return this.privSource.attach(audioNodeId);
    }
    /**
     * @member AudioConfigImpl.prototype.detach
     * @function
     * @public
     * @param {string} audioNodeId - The audio node id.
     */
    detach(audioNodeId) {
        return this.privSource.detach(audioNodeId);
    }
    /**
     * @member AudioConfigImpl.prototype.turnOff
     * @function
     * @public
     * @returns {Promise<void>} A promise.
     */
    turnOff() {
        return this.privSource.turnOff();
    }
    /**
     * @member AudioConfigImpl.prototype.events
     * @function
     * @public
     * @returns {EventSource<AudioSourceEvent>} An event source for audio events.
     */
    get events() {
        return this.privSource.events;
    }
    setProperty(name, value) {
        Contracts_js_1.Contracts.throwIfNull(value, "value");
        if (undefined !== this.privSource.setProperty) {
            this.privSource.setProperty(name, value);
        }
        else {
            throw new Error("This AudioConfig instance does not support setting properties.");
        }
    }
    getProperty(name, def) {
        if (undefined !== this.privSource.getProperty) {
            return this.privSource.getProperty(name, def);
        }
        else {
            throw new Error("This AudioConfig instance does not support getting properties.");
        }
        return def;
    }
    get deviceInfo() {
        return this.privSource.deviceInfo;
    }
}
exports.AudioConfigImpl = AudioConfigImpl;
class AudioOutputConfigImpl extends AudioConfig {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {IAudioDestination} destination - An audio destination.
     */
    constructor(destination) {
        super();
        this.privDestination = destination;
    }
    set format(format) {
        this.privDestination.format = format;
    }
    write(buffer) {
        this.privDestination.write(buffer);
    }
    close() {
        this.privDestination.close();
    }
    id() {
        return this.privDestination.id();
    }
    setProperty() {
        throw new Error("This AudioConfig instance does not support setting properties.");
    }
    getProperty() {
        throw new Error("This AudioConfig instance does not support getting properties.");
    }
}
exports.AudioOutputConfigImpl = AudioOutputConfigImpl;



/***/ }),
/* 81 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioFileWriter = void 0;
const fs = __importStar(__webpack_require__(82));
const Contracts_js_1 = __webpack_require__(64);
class AudioFileWriter {
    constructor(filename) {
        Contracts_js_1.Contracts.throwIfNullOrUndefined(fs.openSync, "\nFile System access not available, please use Push or PullAudioOutputStream");
        this.privFd = fs.openSync(filename, "w");
    }
    set format(format) {
        Contracts_js_1.Contracts.throwIfNotUndefined(this.privAudioFormat, "format is already set");
        this.privAudioFormat = format;
        let headerOffset = 0;
        if (this.privAudioFormat.hasHeader) {
            headerOffset = this.privAudioFormat.header.byteLength;
        }
        if (this.privFd !== undefined) {
            this.privWriteStream = fs.createWriteStream("", { fd: this.privFd, start: headerOffset, autoClose: false });
        }
    }
    write(buffer) {
        Contracts_js_1.Contracts.throwIfNullOrUndefined(this.privAudioFormat, "must set format before writing.");
        if (this.privWriteStream !== undefined) {
            this.privWriteStream.write(new Uint8Array(buffer.slice(0)));
        }
    }
    close() {
        if (this.privFd !== undefined) {
            this.privWriteStream.on("finish", () => {
                if (this.privAudioFormat.hasHeader) {
                    this.privAudioFormat.updateHeader(this.privWriteStream.bytesWritten);
                    fs.writeSync(this.privFd, new Int8Array(this.privAudioFormat.header), 0, this.privAudioFormat.header.byteLength, 0);
                }
                fs.closeSync(this.privFd);
                this.privFd = undefined;
            });
            this.privWriteStream.end();
        }
    }
    id() {
        return this.privId;
    }
}
exports.AudioFileWriter = AudioFileWriter;



/***/ }),
/* 82 */
/***/ (() => {

/* (ignored) */

/***/ }),
/* 83 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PullAudioInputStreamImpl = exports.PullAudioInputStream = exports.PushAudioInputStreamImpl = exports.PushAudioInputStream = exports.AudioInputStream = void 0;
/* eslint-disable max-classes-per-file */
const Exports_js_1 = __webpack_require__(2);
const Exports_js_2 = __webpack_require__(4);
const Guid_js_1 = __webpack_require__(7);
const Exports_js_3 = __webpack_require__(79);
const AudioStreamFormat_js_1 = __webpack_require__(67);
/**
 * Represents audio input stream used for custom audio input configurations.
 * @class AudioInputStream
 */
class AudioInputStream {
    /**
     * Creates and initializes an instance.
     * @constructor
     */
    constructor() {
        return;
    }
    /**
     * Creates a memory backed PushAudioInputStream with the specified audio format.
     * @member AudioInputStream.createPushStream
     * @function
     * @public
     * @param {AudioStreamFormat} format - The audio data format in which audio will be
     * written to the push audio stream's write() method (Required if format is not 16 kHz 16bit mono PCM).
     * @returns {PushAudioInputStream} The audio input stream being created.
     */
    static createPushStream(format) {
        return PushAudioInputStream.create(format);
    }
    /**
     * Creates a PullAudioInputStream that delegates to the specified callback interface for read()
     * and close() methods.
     * @member AudioInputStream.createPullStream
     * @function
     * @public
     * @param {PullAudioInputStreamCallback} callback - The custom audio input object, derived from
     * PullAudioInputStreamCallback
     * @param {AudioStreamFormat} format - The audio data format in which audio will be returned from
     * the callback's read() method (Required if format is not 16 kHz 16bit mono PCM).
     * @returns {PullAudioInputStream} The audio input stream being created.
     */
    static createPullStream(callback, format) {
        return PullAudioInputStream.create(callback, format);
        // throw new Error("Oops");
    }
}
exports.AudioInputStream = AudioInputStream;
/**
 * Represents memory backed push audio input stream used for custom audio input configurations.
 * @class PushAudioInputStream
 */
class PushAudioInputStream extends AudioInputStream {
    /**
     * Creates a memory backed PushAudioInputStream with the specified audio format.
     * @member PushAudioInputStream.create
     * @function
     * @public
     * @param {AudioStreamFormat} format - The audio data format in which audio will be written to the
     * push audio stream's write() method (Required if format is not 16 kHz 16bit mono PCM).
     * @returns {PushAudioInputStream} The push audio input stream being created.
     */
    static create(format) {
        return new PushAudioInputStreamImpl(format);
    }
}
exports.PushAudioInputStream = PushAudioInputStream;
/**
 * Represents memory backed push audio input stream used for custom audio input configurations.
 * @private
 * @class PushAudioInputStreamImpl
 */
class PushAudioInputStreamImpl extends PushAudioInputStream {
    /**
     * Creates and initalizes an instance with the given values.
     * @constructor
     * @param {AudioStreamFormat} format - The audio stream format.
     */
    constructor(format) {
        super();
        if (format === undefined) {
            this.privFormat = AudioStreamFormat_js_1.AudioStreamFormatImpl.getDefaultInputFormat();
        }
        else {
            this.privFormat = format;
        }
        this.privEvents = new Exports_js_2.EventSource();
        this.privId = Guid_js_1.createNoDashGuid();
        this.privStream = new Exports_js_2.ChunkedArrayBufferStream(this.privFormat.avgBytesPerSec / 10);
    }
    /**
     * Format information for the audio
     */
    get format() {
        return Promise.resolve(this.privFormat);
    }
    /**
     * Writes the audio data specified by making an internal copy of the data.
     * @member PushAudioInputStreamImpl.prototype.write
     * @function
     * @public
     * @param {ArrayBuffer} dataBuffer - The audio buffer of which this function will make a copy.
     */
    write(dataBuffer) {
        this.privStream.writeStreamChunk({
            buffer: dataBuffer,
            isEnd: false,
            timeReceived: Date.now()
        });
    }
    /**
     * Closes the stream.
     * @member PushAudioInputStreamImpl.prototype.close
     * @function
     * @public
     */
    close() {
        this.privStream.close();
    }
    id() {
        return this.privId;
    }
    turnOn() {
        this.onEvent(new Exports_js_2.AudioSourceInitializingEvent(this.privId)); // no stream id
        this.onEvent(new Exports_js_2.AudioSourceReadyEvent(this.privId));
        return;
    }
    async attach(audioNodeId) {
        this.onEvent(new Exports_js_2.AudioStreamNodeAttachingEvent(this.privId, audioNodeId));
        await this.turnOn();
        const stream = this.privStream;
        this.onEvent(new Exports_js_2.AudioStreamNodeAttachedEvent(this.privId, audioNodeId));
        return {
            detach: async () => {
                this.onEvent(new Exports_js_2.AudioStreamNodeDetachedEvent(this.privId, audioNodeId));
                return this.turnOff();
            },
            id: () => audioNodeId,
            read: () => stream.read(),
        };
    }
    detach(audioNodeId) {
        this.onEvent(new Exports_js_2.AudioStreamNodeDetachedEvent(this.privId, audioNodeId));
    }
    turnOff() {
        return;
    }
    get events() {
        return this.privEvents;
    }
    get deviceInfo() {
        return Promise.resolve({
            bitspersample: this.privFormat.bitsPerSample,
            channelcount: this.privFormat.channels,
            connectivity: Exports_js_1.connectivity.Unknown,
            manufacturer: "Speech SDK",
            model: "PushStream",
            samplerate: this.privFormat.samplesPerSec,
            type: Exports_js_1.type.Stream,
        });
    }
    onEvent(event) {
        this.privEvents.onEvent(event);
        Exports_js_2.Events.instance.onEvent(event);
    }
    toBuffer(arrayBuffer) {
        const buf = Buffer.alloc(arrayBuffer.byteLength);
        const view = new Uint8Array(arrayBuffer);
        for (let i = 0; i < buf.length; ++i) {
            buf[i] = view[i];
        }
        return buf;
    }
}
exports.PushAudioInputStreamImpl = PushAudioInputStreamImpl;
/*
 * Represents audio input stream used for custom audio input configurations.
 * @class PullAudioInputStream
 */
class PullAudioInputStream extends AudioInputStream {
    /**
     * Creates and initializes and instance.
     * @constructor
     */
    constructor() {
        super();
    }
    /**
     * Creates a PullAudioInputStream that delegates to the specified callback interface for
     * read() and close() methods, using the default format (16 kHz 16bit mono PCM).
     * @member PullAudioInputStream.create
     * @function
     * @public
     * @param {PullAudioInputStreamCallback} callback - The custom audio input object,
     * derived from PullAudioInputStreamCustomCallback
     * @param {AudioStreamFormat} format - The audio data format in which audio will be
     * returned from the callback's read() method (Required if format is not 16 kHz 16bit mono PCM).
     * @returns {PullAudioInputStream} The push audio input stream being created.
     */
    static create(callback, format) {
        return new PullAudioInputStreamImpl(callback, format);
    }
}
exports.PullAudioInputStream = PullAudioInputStream;
/**
 * Represents audio input stream used for custom audio input configurations.
 * @private
 * @class PullAudioInputStreamImpl
 */
class PullAudioInputStreamImpl extends PullAudioInputStream {
    /**
     * Creates a PullAudioInputStream that delegates to the specified callback interface for
     * read() and close() methods, using the default format (16 kHz 16bit mono PCM).
     * @constructor
     * @param {PullAudioInputStreamCallback} callback - The custom audio input object,
     * derived from PullAudioInputStreamCustomCallback
     * @param {AudioStreamFormat} format - The audio data format in which audio will be
     * returned from the callback's read() method (Required if format is not 16 kHz 16bit mono PCM).
     */
    constructor(callback, format) {
        super();
        if (undefined === format) {
            this.privFormat = Exports_js_3.AudioStreamFormat.getDefaultInputFormat();
        }
        else {
            this.privFormat = format;
        }
        this.privEvents = new Exports_js_2.EventSource();
        this.privId = Guid_js_1.createNoDashGuid();
        this.privCallback = callback;
        this.privIsClosed = false;
        this.privBufferSize = this.privFormat.avgBytesPerSec / 10;
    }
    /**
     * Format information for the audio
     */
    get format() {
        return Promise.resolve(this.privFormat);
    }
    /**
     * Closes the stream.
     * @member PullAudioInputStreamImpl.prototype.close
     * @function
     * @public
     */
    close() {
        this.privIsClosed = true;
        this.privCallback.close();
    }
    id() {
        return this.privId;
    }
    turnOn() {
        this.onEvent(new Exports_js_2.AudioSourceInitializingEvent(this.privId)); // no stream id
        this.onEvent(new Exports_js_2.AudioSourceReadyEvent(this.privId));
        return;
    }
    async attach(audioNodeId) {
        this.onEvent(new Exports_js_2.AudioStreamNodeAttachingEvent(this.privId, audioNodeId));
        await this.turnOn();
        this.onEvent(new Exports_js_2.AudioStreamNodeAttachedEvent(this.privId, audioNodeId));
        return {
            detach: () => {
                this.privCallback.close();
                this.onEvent(new Exports_js_2.AudioStreamNodeDetachedEvent(this.privId, audioNodeId));
                return this.turnOff();
            },
            id: () => audioNodeId,
            read: () => {
                let totalBytes = 0;
                let transmitBuff;
                // Until we have the minimum number of bytes to send in a transmission, keep asking for more.
                while (totalBytes < this.privBufferSize) {
                    // Sizing the read buffer to the delta between the perfect size and what's left means we won't ever get too much
                    // data back.
                    const readBuff = new ArrayBuffer(this.privBufferSize - totalBytes);
                    const pulledBytes = this.privCallback.read(readBuff);
                    // If there is no return buffer yet defined, set the return buffer to the that was just populated.
                    // This was, if we have enough data there's no copy penalty, but if we don't we have a buffer that's the
                    // preferred size allocated.
                    if (undefined === transmitBuff) {
                        transmitBuff = readBuff;
                    }
                    else {
                        // Not the first bite at the apple, so fill the return buffer with the data we got back.
                        const intView = new Int8Array(transmitBuff);
                        intView.set(new Int8Array(readBuff), totalBytes);
                    }
                    // If there are no bytes to read, just break out and be done.
                    if (0 === pulledBytes) {
                        break;
                    }
                    totalBytes += pulledBytes;
                }
                return Promise.resolve({
                    buffer: transmitBuff.slice(0, totalBytes),
                    isEnd: this.privIsClosed || totalBytes === 0,
                    timeReceived: Date.now(),
                });
            },
        };
    }
    detach(audioNodeId) {
        this.onEvent(new Exports_js_2.AudioStreamNodeDetachedEvent(this.privId, audioNodeId));
    }
    turnOff() {
        return;
    }
    get events() {
        return this.privEvents;
    }
    get deviceInfo() {
        return Promise.resolve({
            bitspersample: this.privFormat.bitsPerSample,
            channelcount: this.privFormat.channels,
            connectivity: Exports_js_1.connectivity.Unknown,
            manufacturer: "Speech SDK",
            model: "PullStream",
            samplerate: this.privFormat.samplesPerSec,
            type: Exports_js_1.type.Stream,
        });
    }
    onEvent(event) {
        this.privEvents.onEvent(event);
        Exports_js_2.Events.instance.onEvent(event);
    }
}
exports.PullAudioInputStreamImpl = PullAudioInputStreamImpl;



/***/ }),
/* 84 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PushAudioOutputStreamImpl = exports.PushAudioOutputStream = exports.PullAudioOutputStreamImpl = exports.PullAudioOutputStream = exports.AudioOutputStream = void 0;
/* eslint-disable max-classes-per-file */
const Exports_js_1 = __webpack_require__(4);
const Contracts_js_1 = __webpack_require__(64);
const AudioOutputFormat_js_1 = __webpack_require__(85);
/**
 * Represents audio output stream used for custom audio output configurations.
 * @class AudioOutputStream
 */
class AudioOutputStream {
    /**
     * Creates and initializes an instance.
     * @constructor
     */
    constructor() {
        return;
    }
    /**
     * Creates a memory backed PullAudioOutputStream with the specified audio format.
     * @member AudioOutputStream.createPullStream
     * @function
     * @public
     * @returns {PullAudioOutputStream} The audio output stream being created.
     */
    static createPullStream() {
        return PullAudioOutputStream.create();
    }
}
exports.AudioOutputStream = AudioOutputStream;
/**
 * Represents memory backed push audio output stream used for custom audio output configurations.
 * @class PullAudioOutputStream
 */
class PullAudioOutputStream extends AudioOutputStream {
    /**
     * Creates a memory backed PullAudioOutputStream with the specified audio format.
     * @member PullAudioOutputStream.create
     * @function
     * @public
     * @returns {PullAudioOutputStream} The push audio output stream being created.
     */
    static create() {
        return new PullAudioOutputStreamImpl();
    }
}
exports.PullAudioOutputStream = PullAudioOutputStream;
/**
 * Represents memory backed push audio output stream used for custom audio output configurations.
 * @private
 * @class PullAudioOutputStreamImpl
 */
class PullAudioOutputStreamImpl extends PullAudioOutputStream {
    /**
     * Creates and initializes an instance with the given values.
     * @constructor
     */
    constructor() {
        super();
        this.privId = Exports_js_1.createNoDashGuid();
        this.privStream = new Exports_js_1.Stream();
    }
    /**
     * Sets the format information to the stream. For internal use only.
     * @param {AudioStreamFormat} format - the format to be set.
     */
    set format(format) {
        if (format === undefined || format === null) {
            this.privFormat = AudioOutputFormat_js_1.AudioOutputFormatImpl.getDefaultOutputFormat();
        }
        this.privFormat = format;
    }
    /**
     * Format information for the audio
     */
    get format() {
        return this.privFormat;
    }
    /**
     * Checks if the stream is closed
     * @member PullAudioOutputStreamImpl.prototype.isClosed
     * @property
     * @public
     */
    get isClosed() {
        return this.privStream.isClosed;
    }
    /**
     * Gets the id of the stream
     * @member PullAudioOutputStreamImpl.prototype.id
     * @property
     * @public
     */
    id() {
        return this.privId;
    }
    /**
     * Reads audio data from the internal buffer.
     * @member PullAudioOutputStreamImpl.prototype.read
     * @function
     * @public
     * @param {ArrayBuffer} dataBuffer - An ArrayBuffer to store the read data.
     * @returns {Promise<number>} - Audio buffer length has been read.
     */
    async read(dataBuffer) {
        const intView = new Int8Array(dataBuffer);
        let totalBytes = 0;
        if (this.privLastChunkView !== undefined) {
            if (this.privLastChunkView.length > dataBuffer.byteLength) {
                intView.set(this.privLastChunkView.slice(0, dataBuffer.byteLength));
                this.privLastChunkView = this.privLastChunkView.slice(dataBuffer.byteLength);
                return Promise.resolve(dataBuffer.byteLength);
            }
            intView.set(this.privLastChunkView);
            totalBytes = this.privLastChunkView.length;
            this.privLastChunkView = undefined;
        }
        // Until we have the minimum number of bytes to send in a transmission, keep asking for more.
        while (totalBytes < dataBuffer.byteLength && !this.privStream.isReadEnded) {
            const chunk = await this.privStream.read();
            if (chunk !== undefined && !chunk.isEnd) {
                let tmpBuffer;
                if (chunk.buffer.byteLength > dataBuffer.byteLength - totalBytes) {
                    tmpBuffer = chunk.buffer.slice(0, dataBuffer.byteLength - totalBytes);
                    this.privLastChunkView = new Int8Array(chunk.buffer.slice(dataBuffer.byteLength - totalBytes));
                }
                else {
                    tmpBuffer = chunk.buffer;
                }
                intView.set(new Int8Array(tmpBuffer), totalBytes);
                totalBytes += tmpBuffer.byteLength;
            }
            else {
                this.privStream.readEnded();
            }
        }
        return totalBytes;
    }
    /**
     * Writes the audio data specified by making an internal copy of the data.
     * @member PullAudioOutputStreamImpl.prototype.write
     * @function
     * @public
     * @param {ArrayBuffer} dataBuffer - The audio buffer of which this function will make a copy.
     */
    write(dataBuffer) {
        Contracts_js_1.Contracts.throwIfNullOrUndefined(this.privStream, "must set format before writing");
        this.privStream.writeStreamChunk({
            buffer: dataBuffer,
            isEnd: false,
            timeReceived: Date.now()
        });
    }
    /**
     * Closes the stream.
     * @member PullAudioOutputStreamImpl.prototype.close
     * @function
     * @public
     */
    close() {
        this.privStream.close();
    }
}
exports.PullAudioOutputStreamImpl = PullAudioOutputStreamImpl;
/*
 * Represents audio output stream used for custom audio output configurations.
 * @class PushAudioOutputStream
 */
class PushAudioOutputStream extends AudioOutputStream {
    /**
     * Creates and initializes and instance.
     * @constructor
     */
    constructor() {
        super();
    }
    /**
     * Creates a PushAudioOutputStream that delegates to the specified callback interface for
     * write() and close() methods.
     * @member PushAudioOutputStream.create
     * @function
     * @public
     * @param {PushAudioOutputStreamCallback} callback - The custom audio output object,
     * derived from PushAudioOutputStreamCallback
     * @returns {PushAudioOutputStream} The push audio output stream being created.
     */
    static create(callback) {
        return new PushAudioOutputStreamImpl(callback);
    }
}
exports.PushAudioOutputStream = PushAudioOutputStream;
/**
 * Represents audio output stream used for custom audio output configurations.
 * @private
 * @class PushAudioOutputStreamImpl
 */
class PushAudioOutputStreamImpl extends PushAudioOutputStream {
    /**
     * Creates a PushAudioOutputStream that delegates to the specified callback interface for
     * read() and close() methods.
     * @constructor
     * @param {PushAudioOutputStreamCallback} callback - The custom audio output object,
     * derived from PushAudioOutputStreamCallback
     */
    constructor(callback) {
        super();
        this.privId = Exports_js_1.createNoDashGuid();
        this.privCallback = callback;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    set format(format) { }
    write(buffer) {
        if (!!this.privCallback.write) {
            this.privCallback.write(buffer);
        }
    }
    close() {
        if (!!this.privCallback.close) {
            this.privCallback.close();
        }
    }
    id() {
        return this.privId;
    }
}
exports.PushAudioOutputStreamImpl = PushAudioOutputStreamImpl;



/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioOutputFormatImpl = void 0;
const SpeechSynthesisOutputFormat_js_1 = __webpack_require__(86);
const AudioStreamFormat_js_1 = __webpack_require__(67);
/**
 * @private
 * @class AudioOutputFormatImpl
 * Updated in version 1.17.0
 */
// eslint-disable-next-line max-classes-per-file
class AudioOutputFormatImpl extends AudioStreamFormat_js_1.AudioStreamFormatImpl {
    /**
     * Creates an instance with the given values.
     * @constructor
     * @param formatTag
     * @param {number} channels - Number of channels.
     * @param {number} samplesPerSec - Samples per second.
     * @param {number} avgBytesPerSec - Average bytes per second.
     * @param {number} blockAlign - Block alignment.
     * @param {number} bitsPerSample - Bits per sample.
     * @param {string} audioFormatString - Audio format string
     * @param {string} requestAudioFormatString - Audio format string sent to service.
     * @param {boolean} hasHeader - If the format has header or not.
     */
    constructor(formatTag, channels, samplesPerSec, avgBytesPerSec, blockAlign, bitsPerSample, audioFormatString, requestAudioFormatString, hasHeader) {
        super(samplesPerSec, bitsPerSample, channels, formatTag);
        this.formatTag = formatTag;
        this.avgBytesPerSec = avgBytesPerSec;
        this.blockAlign = blockAlign;
        this.priAudioFormatString = audioFormatString;
        this.priRequestAudioFormatString = requestAudioFormatString;
        this.priHasHeader = hasHeader;
    }
    static fromSpeechSynthesisOutputFormat(speechSynthesisOutputFormat) {
        if (speechSynthesisOutputFormat === undefined) {
            return AudioOutputFormatImpl.getDefaultOutputFormat();
        }
        return AudioOutputFormatImpl.fromSpeechSynthesisOutputFormatString(AudioOutputFormatImpl.SpeechSynthesisOutputFormatToString[speechSynthesisOutputFormat]);
    }
    static fromSpeechSynthesisOutputFormatString(speechSynthesisOutputFormatString) {
        switch (speechSynthesisOutputFormatString) {
            case "raw-8khz-8bit-mono-mulaw":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.MuLaw, 1, 8000, 8000, 1, 8, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "riff-16khz-16kbps-mono-siren":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.Siren, 1, 16000, 2000, 40, 0, speechSynthesisOutputFormatString, "audio-16khz-16kbps-mono-siren", true);
            case "audio-16khz-16kbps-mono-siren":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.Siren, 1, 16000, 2000, 40, 0, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "audio-16khz-32kbitrate-mono-mp3":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.MP3, 1, 16000, 32 << 7, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "audio-16khz-128kbitrate-mono-mp3":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.MP3, 1, 16000, 128 << 7, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "audio-16khz-64kbitrate-mono-mp3":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.MP3, 1, 16000, 64 << 7, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "audio-24khz-48kbitrate-mono-mp3":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.MP3, 1, 24000, 48 << 7, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "audio-24khz-96kbitrate-mono-mp3":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.MP3, 1, 24000, 96 << 7, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "audio-24khz-160kbitrate-mono-mp3":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.MP3, 1, 24000, 160 << 7, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "raw-16khz-16bit-mono-truesilk":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.SILKSkype, 1, 16000, 32000, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "riff-8khz-16bit-mono-pcm":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.PCM, 1, 8000, 16000, 2, 16, speechSynthesisOutputFormatString, "raw-8khz-16bit-mono-pcm", true);
            case "riff-24khz-16bit-mono-pcm":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.PCM, 1, 24000, 48000, 2, 16, speechSynthesisOutputFormatString, "raw-24khz-16bit-mono-pcm", true);
            case "riff-8khz-8bit-mono-mulaw":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.MuLaw, 1, 8000, 8000, 1, 8, speechSynthesisOutputFormatString, "raw-8khz-8bit-mono-mulaw", true);
            case "raw-16khz-16bit-mono-pcm":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.PCM, 1, 16000, 32000, 2, 16, speechSynthesisOutputFormatString, "raw-16khz-16bit-mono-pcm", false);
            case "raw-24khz-16bit-mono-pcm":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.PCM, 1, 24000, 48000, 2, 16, speechSynthesisOutputFormatString, "raw-24khz-16bit-mono-pcm", false);
            case "raw-8khz-16bit-mono-pcm":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.PCM, 1, 8000, 16000, 2, 16, speechSynthesisOutputFormatString, "raw-8khz-16bit-mono-pcm", false);
            case "ogg-16khz-16bit-mono-opus":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.OGG_OPUS, 1, 16000, 8192, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "ogg-24khz-16bit-mono-opus":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.OGG_OPUS, 1, 24000, 8192, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "raw-48khz-16bit-mono-pcm":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.PCM, 1, 48000, 96000, 2, 16, speechSynthesisOutputFormatString, "raw-48khz-16bit-mono-pcm", false);
            case "riff-48khz-16bit-mono-pcm":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.PCM, 1, 48000, 96000, 2, 16, speechSynthesisOutputFormatString, "raw-48khz-16bit-mono-pcm", true);
            case "audio-48khz-96kbitrate-mono-mp3":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.MP3, 1, 48000, 96 << 7, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "audio-48khz-192kbitrate-mono-mp3":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.MP3, 1, 48000, 192 << 7, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "ogg-48khz-16bit-mono-opus":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.OGG_OPUS, 1, 48000, 12000, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "webm-16khz-16bit-mono-opus":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.WEBM_OPUS, 1, 16000, 4000, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "webm-24khz-16bit-mono-opus":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.WEBM_OPUS, 1, 24000, 6000, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "webm-24khz-16bit-24kbps-mono-opus":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.WEBM_OPUS, 1, 24000, 3000, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "audio-16khz-16bit-32kbps-mono-opus":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.OPUS, 1, 16000, 4000, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "audio-24khz-16bit-48kbps-mono-opus":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.OPUS, 1, 24000, 6000, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "audio-24khz-16bit-24kbps-mono-opus":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.OPUS, 1, 24000, 3000, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "audio-24khz-16bit-mono-flac":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.FLAC, 1, 24000, 24000, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "audio-48khz-16bit-mono-flac":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.FLAC, 1, 48000, 30000, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "raw-24khz-16bit-mono-truesilk":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.SILKSkype, 1, 24000, 48000, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "raw-8khz-8bit-mono-alaw":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.ALaw, 1, 8000, 8000, 1, 8, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "riff-8khz-8bit-mono-alaw":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.ALaw, 1, 8000, 8000, 1, 8, speechSynthesisOutputFormatString, "raw-8khz-8bit-mono-alaw", true);
            case "raw-22050hz-16bit-mono-pcm":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.PCM, 1, 22050, 44100, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "riff-22050hz-16bit-mono-pcm":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.PCM, 1, 22050, 44100, 2, 16, speechSynthesisOutputFormatString, "raw-22050hz-16bit-mono-pcm", true);
            case "raw-44100hz-16bit-mono-pcm":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.PCM, 1, 44100, 88200, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "riff-44100hz-16bit-mono-pcm":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.PCM, 1, 44100, 88200, 2, 16, speechSynthesisOutputFormatString, "raw-44100hz-16bit-mono-pcm", true);
            case "amr-wb-16000h":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.AMR_WB, 1, 16000, 3052, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "g722-16khz-64kbps":
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.G722, 1, 16000, 8000, 2, 16, speechSynthesisOutputFormatString, speechSynthesisOutputFormatString, false);
            case "riff-16khz-16bit-mono-pcm":
            default:
                return new AudioOutputFormatImpl(AudioStreamFormat_js_1.AudioFormatTag.PCM, 1, 16000, 32000, 2, 16, "riff-16khz-16bit-mono-pcm", "raw-16khz-16bit-mono-pcm", true);
        }
    }
    static getDefaultOutputFormat() {
        return AudioOutputFormatImpl.fromSpeechSynthesisOutputFormatString((typeof window !== "undefined") ? "audio-24khz-48kbitrate-mono-mp3" : "riff-16khz-16bit-mono-pcm");
    }
    /**
     * Specifies if this audio output format has a header
     * @boolean AudioOutputFormatImpl.prototype.hasHeader
     * @function
     * @public
     */
    get hasHeader() {
        return this.priHasHeader;
    }
    /**
     * Specifies the header of this format
     * @ArrayBuffer AudioOutputFormatImpl.prototype.header
     * @function
     * @public
     */
    get header() {
        if (this.hasHeader) {
            return this.privHeader;
        }
        return undefined;
    }
    /**
     * Updates the header based on the audio length
     * @member AudioOutputFormatImpl.updateHeader
     * @function
     * @public
     * @param {number} audioLength - the audio length
     */
    updateHeader(audioLength) {
        if (this.priHasHeader) {
            const view = new DataView(this.privHeader);
            view.setUint32(4, audioLength + this.privHeader.byteLength - 8, true);
            view.setUint32(40, audioLength, true);
        }
    }
    /**
     * Specifies the audio format string to be sent to the service
     * @string AudioOutputFormatImpl.prototype.requestAudioFormatString
     * @function
     * @public
     */
    get requestAudioFormatString() {
        return this.priRequestAudioFormatString;
    }
    /**
     * Adds audio header
     * @param audio the raw audio without header
     * @returns the audio with header if applicable
     */
    addHeader(audio) {
        if (!this.hasHeader) {
            return audio;
        }
        this.updateHeader(audio.byteLength);
        const tmp = new Uint8Array(audio.byteLength + this.header.byteLength);
        tmp.set(new Uint8Array(this.header), 0);
        tmp.set(new Uint8Array(audio), this.header.byteLength);
        return tmp.buffer;
    }
}
exports.AudioOutputFormatImpl = AudioOutputFormatImpl;
AudioOutputFormatImpl.SpeechSynthesisOutputFormatToString = {
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Raw8Khz8BitMonoMULaw]: "raw-8khz-8bit-mono-mulaw",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Riff16Khz16KbpsMonoSiren]: "riff-16khz-16kbps-mono-siren",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Audio16Khz16KbpsMonoSiren]: "audio-16khz-16kbps-mono-siren",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Audio16Khz32KBitRateMonoMp3]: "audio-16khz-32kbitrate-mono-mp3",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Audio16Khz128KBitRateMonoMp3]: "audio-16khz-128kbitrate-mono-mp3",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Audio16Khz64KBitRateMonoMp3]: "audio-16khz-64kbitrate-mono-mp3",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Audio24Khz48KBitRateMonoMp3]: "audio-24khz-48kbitrate-mono-mp3",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Audio24Khz96KBitRateMonoMp3]: "audio-24khz-96kbitrate-mono-mp3",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3]: "audio-24khz-160kbitrate-mono-mp3",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Raw16Khz16BitMonoTrueSilk]: "raw-16khz-16bit-mono-truesilk",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Riff16Khz16BitMonoPcm]: "riff-16khz-16bit-mono-pcm",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Riff8Khz16BitMonoPcm]: "riff-8khz-16bit-mono-pcm",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Riff24Khz16BitMonoPcm]: "riff-24khz-16bit-mono-pcm",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Riff8Khz8BitMonoMULaw]: "riff-8khz-8bit-mono-mulaw",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Raw16Khz16BitMonoPcm]: "raw-16khz-16bit-mono-pcm",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Raw24Khz16BitMonoPcm]: "raw-24khz-16bit-mono-pcm",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Raw8Khz16BitMonoPcm]: "raw-8khz-16bit-mono-pcm",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Ogg16Khz16BitMonoOpus]: "ogg-16khz-16bit-mono-opus",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Ogg24Khz16BitMonoOpus]: "ogg-24khz-16bit-mono-opus",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Raw48Khz16BitMonoPcm]: "raw-48khz-16bit-mono-pcm",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Riff48Khz16BitMonoPcm]: "riff-48khz-16bit-mono-pcm",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Audio48Khz96KBitRateMonoMp3]: "audio-48khz-96kbitrate-mono-mp3",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Audio48Khz192KBitRateMonoMp3]: "audio-48khz-192kbitrate-mono-mp3",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Ogg48Khz16BitMonoOpus]: "ogg-48khz-16bit-mono-opus",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Webm16Khz16BitMonoOpus]: "webm-16khz-16bit-mono-opus",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Webm24Khz16BitMonoOpus]: "webm-24khz-16bit-mono-opus",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Webm24Khz16Bit24KbpsMonoOpus]: "webm-24khz-16bit-24kbps-mono-opus",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Raw24Khz16BitMonoTrueSilk]: "raw-24khz-16bit-mono-truesilk",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Raw8Khz8BitMonoALaw]: "raw-8khz-8bit-mono-alaw",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Riff8Khz8BitMonoALaw]: "riff-8khz-8bit-mono-alaw",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Audio16Khz16Bit32KbpsMonoOpus]: "audio-16khz-16bit-32kbps-mono-opus",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Audio24Khz16Bit48KbpsMonoOpus]: "audio-24khz-16bit-48kbps-mono-opus",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Audio24Khz16Bit24KbpsMonoOpus]: "audio-24khz-16bit-24kbps-mono-opus",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Raw22050Hz16BitMonoPcm]: "raw-22050hz-16bit-mono-pcm",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Riff22050Hz16BitMonoPcm]: "riff-22050hz-16bit-mono-pcm",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Raw44100Hz16BitMonoPcm]: "raw-44100hz-16bit-mono-pcm",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.Riff44100Hz16BitMonoPcm]: "riff-44100hz-16bit-mono-pcm",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.AmrWb16000Hz]: "amr-wb-16000hz",
    [SpeechSynthesisOutputFormat_js_1.SpeechSynthesisOutputFormat.G72216Khz64Kbps]: "g722-16khz-64kbps",
};



/***/ }),
/* 86 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpeechSynthesisOutputFormat = void 0;
/**
 * Define speech synthesis audio output formats.
 * @enum SpeechSynthesisOutputFormat
 * Updated in version 1.17.0
 */
var SpeechSynthesisOutputFormat;
(function (SpeechSynthesisOutputFormat) {
    /**
     * raw-8khz-8bit-mono-mulaw
     * @member SpeechSynthesisOutputFormat.Raw8Khz8BitMonoMULaw,
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Raw8Khz8BitMonoMULaw"] = 0] = "Raw8Khz8BitMonoMULaw";
    /**
     * riff-16khz-16kbps-mono-siren
     * @note Unsupported by the service. Do not use this value.
     * @member SpeechSynthesisOutputFormat.Riff16Khz16KbpsMonoSiren
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Riff16Khz16KbpsMonoSiren"] = 1] = "Riff16Khz16KbpsMonoSiren";
    /**
     * audio-16khz-16kbps-mono-siren
     * @note Unsupported by the service. Do not use this value.
     * @member SpeechSynthesisOutputFormat.Audio16Khz16KbpsMonoSiren
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Audio16Khz16KbpsMonoSiren"] = 2] = "Audio16Khz16KbpsMonoSiren";
    /**
     * audio-16khz-32kbitrate-mono-mp3
     * @member SpeechSynthesisOutputFormat.Audio16Khz32KBitRateMonoMp3
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Audio16Khz32KBitRateMonoMp3"] = 3] = "Audio16Khz32KBitRateMonoMp3";
    /**
     * audio-16khz-128kbitrate-mono-mp3
     * @member SpeechSynthesisOutputFormat.Audio16Khz128KBitRateMonoMp3
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Audio16Khz128KBitRateMonoMp3"] = 4] = "Audio16Khz128KBitRateMonoMp3";
    /**
     * audio-16khz-64kbitrate-mono-mp3
     * @member SpeechSynthesisOutputFormat.Audio16Khz64KBitRateMonoMp3
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Audio16Khz64KBitRateMonoMp3"] = 5] = "Audio16Khz64KBitRateMonoMp3";
    /**
     * audio-24khz-48kbitrate-mono-mp3
     * @member SpeechSynthesisOutputFormat.Audio24Khz48KBitRateMonoMp3
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Audio24Khz48KBitRateMonoMp3"] = 6] = "Audio24Khz48KBitRateMonoMp3";
    /**
     * audio-24khz-96kbitrate-mono-mp3
     * @member SpeechSynthesisOutputFormat.Audio24Khz96KBitRateMonoMp3
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Audio24Khz96KBitRateMonoMp3"] = 7] = "Audio24Khz96KBitRateMonoMp3";
    /**
     * audio-24khz-160kbitrate-mono-mp3
     * @member SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Audio24Khz160KBitRateMonoMp3"] = 8] = "Audio24Khz160KBitRateMonoMp3";
    /**
     * raw-16khz-16bit-mono-truesilk
     * @member SpeechSynthesisOutputFormat.Raw16Khz16BitMonoTrueSilk
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Raw16Khz16BitMonoTrueSilk"] = 9] = "Raw16Khz16BitMonoTrueSilk";
    /**
     * riff-16khz-16bit-mono-pcm
     * @member SpeechSynthesisOutputFormat.Riff16Khz16BitMonoPcm
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Riff16Khz16BitMonoPcm"] = 10] = "Riff16Khz16BitMonoPcm";
    /**
     * riff-8khz-16bit-mono-pcm
     * @member SpeechSynthesisOutputFormat.Riff8Khz16BitMonoPcm
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Riff8Khz16BitMonoPcm"] = 11] = "Riff8Khz16BitMonoPcm";
    /**
     * riff-24khz-16bit-mono-pcm
     * @member SpeechSynthesisOutputFormat.Riff24Khz16BitMonoPcm
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Riff24Khz16BitMonoPcm"] = 12] = "Riff24Khz16BitMonoPcm";
    /**
     * riff-8khz-8bit-mono-mulaw
     * @member SpeechSynthesisOutputFormat.Riff8Khz8BitMonoMULaw
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Riff8Khz8BitMonoMULaw"] = 13] = "Riff8Khz8BitMonoMULaw";
    /**
     * raw-16khz-16bit-mono-pcm
     * @member SpeechSynthesisOutputFormat.Raw16Khz16BitMonoPcm
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Raw16Khz16BitMonoPcm"] = 14] = "Raw16Khz16BitMonoPcm";
    /**
     * raw-24khz-16bit-mono-pcm
     * @member SpeechSynthesisOutputFormat.Raw24Khz16BitMonoPcm
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Raw24Khz16BitMonoPcm"] = 15] = "Raw24Khz16BitMonoPcm";
    /**
     * raw-8khz-16bit-mono-pcm
     * @member SpeechSynthesisOutputFormat.Raw8Khz16BitMonoPcm
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Raw8Khz16BitMonoPcm"] = 16] = "Raw8Khz16BitMonoPcm";
    /**
     * ogg-16khz-16bit-mono-opus
     * @member SpeechSynthesisOutputFormat.Ogg16Khz16BitMonoOpus
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Ogg16Khz16BitMonoOpus"] = 17] = "Ogg16Khz16BitMonoOpus";
    /**
     * ogg-24khz-16bit-mono-opus
     * @member SpeechSynthesisOutputFormat.Ogg24Khz16BitMonoOpus
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Ogg24Khz16BitMonoOpus"] = 18] = "Ogg24Khz16BitMonoOpus";
    /**
     * raw-48khz-16bit-mono-pcm
     * @member SpeechSynthesisOutputFormat.Raw48Khz16BitMonoPcm
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Raw48Khz16BitMonoPcm"] = 19] = "Raw48Khz16BitMonoPcm";
    /**
     * riff-48khz-16bit-mono-pcm
     * @member SpeechSynthesisOutputFormat.Riff48Khz16BitMonoPcm
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Riff48Khz16BitMonoPcm"] = 20] = "Riff48Khz16BitMonoPcm";
    /**
     * audio-48khz-96kbitrate-mono-mp3
     * @member SpeechSynthesisOutputFormat.Audio48Khz96KBitRateMonoMp3
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Audio48Khz96KBitRateMonoMp3"] = 21] = "Audio48Khz96KBitRateMonoMp3";
    /**
     * audio-48khz-192kbitrate-mono-mp3
     * @member SpeechSynthesisOutputFormat.Audio48Khz192KBitRateMonoMp3
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Audio48Khz192KBitRateMonoMp3"] = 22] = "Audio48Khz192KBitRateMonoMp3";
    /**
     * ogg-48khz-16bit-mono-opus
     * Added in version 1.16.0
     * @member SpeechSynthesisOutputFormat.Ogg48Khz16BitMonoOpus
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Ogg48Khz16BitMonoOpus"] = 23] = "Ogg48Khz16BitMonoOpus";
    /**
     * webm-16khz-16bit-mono-opus
     * Added in version 1.16.0
     * @member SpeechSynthesisOutputFormat.Webm16Khz16BitMonoOpus
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Webm16Khz16BitMonoOpus"] = 24] = "Webm16Khz16BitMonoOpus";
    /**
     * webm-24khz-16bit-mono-opus
     * Added in version 1.16.0
     * @member SpeechSynthesisOutputFormat.Webm24Khz16BitMonoOpus
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Webm24Khz16BitMonoOpus"] = 25] = "Webm24Khz16BitMonoOpus";
    /**
     * raw-24khz-16bit-mono-truesilk
     * Added in version 1.17.0
     * @member SpeechSynthesisOutputFormat.Raw24Khz16BitMonoTrueSilk
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Raw24Khz16BitMonoTrueSilk"] = 26] = "Raw24Khz16BitMonoTrueSilk";
    /**
     * raw-8khz-8bit-mono-alaw
     * Added in version 1.17.0
     * @member SpeechSynthesisOutputFormat.Raw8Khz8BitMonoALaw
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Raw8Khz8BitMonoALaw"] = 27] = "Raw8Khz8BitMonoALaw";
    /**
     * riff-8khz-8bit-mono-alaw
     * Added in version 1.17.0
     * @member SpeechSynthesisOutputFormat.Riff8Khz8BitMonoALaw
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Riff8Khz8BitMonoALaw"] = 28] = "Riff8Khz8BitMonoALaw";
    /**
     * webm-24khz-16bit-24kbps-mono-opus
     * Audio compressed by OPUS codec in a webm container, with bitrate of 24kbps, optimized for IoT scenario.
     * Added in version 1.19.0
     * @member SpeechSynthesisOutputFormat.Webm24Khz16Bit24KbpsMonoOpus
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Webm24Khz16Bit24KbpsMonoOpus"] = 29] = "Webm24Khz16Bit24KbpsMonoOpus";
    /**
     * audio-16khz-16bit-32kbps-mono-opus
     * Audio compressed by OPUS codec without container, with bitrate of 32kbps.
     * Added in version 1.20.0
     * @member SpeechSynthesisOutputFormat.Audio16Khz16Bit32KbpsMonoOpus
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Audio16Khz16Bit32KbpsMonoOpus"] = 30] = "Audio16Khz16Bit32KbpsMonoOpus";
    /**
     * audio-24khz-16bit-48kbps-mono-opus
     * Audio compressed by OPUS codec without container, with bitrate of 48kbps.
     * Added in version 1.20.0
     * @member SpeechSynthesisOutputFormat.Audio24Khz16Bit48KbpsMonoOpus
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Audio24Khz16Bit48KbpsMonoOpus"] = 31] = "Audio24Khz16Bit48KbpsMonoOpus";
    /**
     * audio-24khz-16bit-24kbps-mono-opus
     * Audio compressed by OPUS codec without container, with bitrate of 24kbps.
     * Added in version 1.20.0
     * @member SpeechSynthesisOutputFormat.Audio24Khz16Bit24KbpsMonoOpus
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Audio24Khz16Bit24KbpsMonoOpus"] = 32] = "Audio24Khz16Bit24KbpsMonoOpus";
    /**
     * raw-22050hz-16bit-mono-pcm
     * Raw PCM audio at 22050Hz sampling rate and 16-bit depth.
     * Added in version 1.22.0
     * @member SpeechSynthesisOutputFormat.Raw22050Hz16BitMonoPcm
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Raw22050Hz16BitMonoPcm"] = 33] = "Raw22050Hz16BitMonoPcm";
    /**
     * riff-22050hz-16bit-mono-pcm
     * PCM audio at 22050Hz sampling rate and 16-bit depth, with RIFF header.
     * Added in version 1.22.0
     * @member SpeechSynthesisOutputFormat.Riff22050Hz16BitMonoPcm
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Riff22050Hz16BitMonoPcm"] = 34] = "Riff22050Hz16BitMonoPcm";
    /**
     * raw-44100hz-16bit-mono-pcm
     * Raw PCM audio at 44100Hz sampling rate and 16-bit depth.
     * Added in version 1.22.0
     * @member SpeechSynthesisOutputFormat.Raw44100Hz16BitMonoPcm
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Raw44100Hz16BitMonoPcm"] = 35] = "Raw44100Hz16BitMonoPcm";
    /**
     * riff-44100hz-16bit-mono-pcm
     * PCM audio at 44100Hz sampling rate and 16-bit depth, with RIFF header.
     * Added in version 1.22.0
     * @member SpeechSynthesisOutputFormat.Riff44100Hz16BitMonoPcm
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["Riff44100Hz16BitMonoPcm"] = 36] = "Riff44100Hz16BitMonoPcm";
    /**
     * amr-wb-16000hz
     * AMR-WB audio at 16kHz sampling rate.
     * Added in version 1.38.0
     * @member SpeechSynthesisOutputFormat.AmrWb16000Hz
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["AmrWb16000Hz"] = 37] = "AmrWb16000Hz";
    /**
     * g722-16khz-64kbps
     * G.722 audio at 16kHz sampling rate and 64kbps bitrate.
     * Added in version 1.38.0
     */
    SpeechSynthesisOutputFormat[SpeechSynthesisOutputFormat["G72216Khz64Kbps"] = 38] = "G72216Khz64Kbps";
})(SpeechSynthesisOutputFormat = exports.SpeechSynthesisOutputFormat || (exports.SpeechSynthesisOutputFormat = {}));



/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CancellationReason = void 0;
/**
 * Defines the possible reasons a recognition result might be canceled.
 * @class CancellationReason
 */
var CancellationReason;
(function (CancellationReason) {
    /**
     * Indicates that an error occurred during speech recognition.
     * @member CancellationReason.Error
     */
    CancellationReason[CancellationReason["Error"] = 0] = "Error";
    /**
     * Indicates that the end of the audio stream was reached.
     * @member CancellationReason.EndOfStream
     */
    CancellationReason[CancellationReason["EndOfStream"] = 1] = "EndOfStream";
})(CancellationReason = exports.CancellationReason || (exports.CancellationReason = {}));



/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PullAudioInputStreamCallback = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
/**
 * An abstract base class that defines callback methods (read() and close()) for
 * custom audio input streams).
 * @class PullAudioInputStreamCallback
 */
class PullAudioInputStreamCallback {
}
exports.PullAudioInputStreamCallback = PullAudioInputStreamCallback;



/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PushAudioOutputStreamCallback = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
/**
 * An abstract base class that defines callback methods (write() and close()) for
 * custom audio output streams).
 * @class PushAudioOutputStreamCallback
 */
class PushAudioOutputStreamCallback {
}
exports.PushAudioOutputStreamCallback = PushAudioOutputStreamCallback;



/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeywordRecognitionModel = void 0;
const Contracts_js_1 = __webpack_require__(64);
/**
 * Represents a keyword recognition model for recognizing when
 * the user says a keyword to initiate further speech recognition.
 * @class KeywordRecognitionModel
 */
class KeywordRecognitionModel {
    /**
     * Create and initializes a new instance.
     * @constructor
     */
    constructor() {
        this.privDisposed = false;
        return;
    }
    /**
     * Creates a keyword recognition model using the specified filename.
     * @member KeywordRecognitionModel.fromFile
     * @function
     * @public
     * @param {string} fileName - A string that represents file name for the keyword recognition model.
     * Note, the file can point to a zip file in which case the model
     * will be extracted from the zip.
     * @returns {KeywordRecognitionModel} The keyword recognition model being created.
     */
    static fromFile(fileName) {
        Contracts_js_1.Contracts.throwIfFileDoesNotExist(fileName, "fileName");
        throw new Error("Not yet implemented.");
    }
    /**
     * Creates a keyword recognition model using the specified filename.
     * @member KeywordRecognitionModel.fromStream
     * @function
     * @public
     * @param {string} file - A File that represents file for the keyword recognition model.
     * Note, the file can point to a zip file in which case the model will be extracted from the zip.
     * @returns {KeywordRecognitionModel} The keyword recognition model being created.
     */
    static fromStream(file) {
        Contracts_js_1.Contracts.throwIfNull(file, "file");
        throw new Error("Not yet implemented.");
    }
    /**
     * Dispose of associated resources.
     * @member KeywordRecognitionModel.prototype.close
     * @function
     * @public
     */
    close() {
        if (this.privDisposed) {
            return;
        }
        this.privDisposed = true;
    }
}
exports.KeywordRecognitionModel = KeywordRecognitionModel;



/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionEventArgs = void 0;
/**
 * Defines content for session events like SessionStarted/Stopped, SoundStarted/Stopped.
 * @class SessionEventArgs
 */
class SessionEventArgs {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {string} sessionId - The session id.
     */
    constructor(sessionId) {
        this.privSessionId = sessionId;
    }
    /**
     * Represents the session identifier.
     * @member SessionEventArgs.prototype.sessionId
     * @function
     * @public
     * @returns {string} Represents the session identifier.
     */
    get sessionId() {
        return this.privSessionId;
    }
}
exports.SessionEventArgs = SessionEventArgs;



/***/ }),
/* 92 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecognitionEventArgs = void 0;
const Exports_js_1 = __webpack_require__(79);
/**
 * Defines payload for session events like Speech Start/End Detected
 * @class
 */
class RecognitionEventArgs extends Exports_js_1.SessionEventArgs {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {number} offset - The offset.
     * @param {string} sessionId - The session id.
     */
    constructor(offset, sessionId) {
        super(sessionId);
        this.privOffset = offset;
    }
    /**
     * Represents the message offset
     * @member RecognitionEventArgs.prototype.offset
     * @function
     * @public
     */
    get offset() {
        return this.privOffset;
    }
}
exports.RecognitionEventArgs = RecognitionEventArgs;



/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OutputFormat = void 0;
/**
 * Define Speech Recognizer output formats.
 * @class OutputFormat
 */
var OutputFormat;
(function (OutputFormat) {
    /**
     * @member OutputFormat.Simple
     */
    OutputFormat[OutputFormat["Simple"] = 0] = "Simple";
    /**
     * @member OutputFormat.Detailed
     */
    OutputFormat[OutputFormat["Detailed"] = 1] = "Detailed";
})(OutputFormat = exports.OutputFormat || (exports.OutputFormat = {}));



/***/ }),
/* 94 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntentRecognitionEventArgs = void 0;
const Exports_js_1 = __webpack_require__(79);
/**
 * Intent recognition result event arguments.
 * @class
 */
class IntentRecognitionEventArgs extends Exports_js_1.RecognitionEventArgs {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param result - The result of the intent recognition.
     * @param offset - The offset.
     * @param sessionId - The session id.
     */
    constructor(result, offset, sessionId) {
        super(offset, sessionId);
        this.privResult = result;
    }
    /**
     * Represents the intent recognition result.
     * @member IntentRecognitionEventArgs.prototype.result
     * @function
     * @public
     * @returns {IntentRecognitionResult} Represents the intent recognition result.
     */
    get result() {
        return this.privResult;
    }
}
exports.IntentRecognitionEventArgs = IntentRecognitionEventArgs;



/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecognitionResult = void 0;
/**
 * Defines result of speech recognition.
 * @class RecognitionResult
 */
class RecognitionResult {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {string} resultId - The result id.
     * @param {ResultReason} reason - The reason.
     * @param {string} text - The recognized text.
     * @param {number} duration - The duration.
     * @param {number} offset - The offset into the stream.
     * @param {string} language - Primary Language detected, if provided.
     * @param {string} languageDetectionConfidence - Primary Language confidence ("Unknown," "Low," "Medium," "High"...), if provided.
     * @param {string} errorDetails - Error details, if provided.
     * @param {string} json - Additional Json, if provided.
     * @param {PropertyCollection} properties - Additional properties, if provided.
     */
    constructor(resultId, reason, text, duration, offset, language, languageDetectionConfidence, errorDetails, json, properties) {
        this.privResultId = resultId;
        this.privReason = reason;
        this.privText = text;
        this.privDuration = duration;
        this.privOffset = offset;
        this.privLanguage = language;
        this.privLanguageDetectionConfidence = languageDetectionConfidence;
        this.privErrorDetails = errorDetails;
        this.privJson = json;
        this.privProperties = properties;
    }
    /**
     * Specifies the result identifier.
     * @member RecognitionResult.prototype.resultId
     * @function
     * @public
     * @returns {string} Specifies the result identifier.
     */
    get resultId() {
        return this.privResultId;
    }
    /**
     * Specifies status of the result.
     * @member RecognitionResult.prototype.reason
     * @function
     * @public
     * @returns {ResultReason} Specifies status of the result.
     */
    get reason() {
        return this.privReason;
    }
    /**
     * Presents the recognized text in the result.
     * @member RecognitionResult.prototype.text
     * @function
     * @public
     * @returns {string} Presents the recognized text in the result.
     */
    get text() {
        return this.privText;
    }
    /**
     * Duration of recognized speech in 100 nano second increments.
     * @member RecognitionResult.prototype.duration
     * @function
     * @public
     * @returns {number} Duration of recognized speech in 100 nano second increments.
     */
    get duration() {
        return this.privDuration;
    }
    /**
     * Offset of recognized speech in 100 nano second increments.
     * @member RecognitionResult.prototype.offset
     * @function
     * @public
     * @returns {number} Offset of recognized speech in 100 nano second increments.
     */
    get offset() {
        return this.privOffset;
    }
    /**
     * Primary Language detected.
     * @member RecognitionResult.prototype.language
     * @function
     * @public
     * @returns {string} language detected.
     */
    get language() {
        return this.privLanguage;
    }
    /**
     * Primary Language detection confidence (Unknown, Low, Medium, High).
     * @member RecognitionResult.prototype.languageDetectionConfidence
     * @function
     * @public
     * @returns {string} detection confidence strength.
     */
    get languageDetectionConfidence() {
        return this.privLanguageDetectionConfidence;
    }
    /**
     * In case of an unsuccessful recognition, provides details of the occurred error.
     * @member RecognitionResult.prototype.errorDetails
     * @function
     * @public
     * @returns {string} a brief description of an error.
     */
    get errorDetails() {
        return this.privErrorDetails;
    }
    /**
     * A string containing Json serialized recognition result as it was received from the service.
     * @member RecognitionResult.prototype.json
     * @function
     * @private
     * @returns {string} Json serialized representation of the result.
     */
    get json() {
        return this.privJson;
    }
    /**
     * The set of properties exposed in the result.
     * @member RecognitionResult.prototype.properties
     * @function
     * @public
     * @returns {PropertyCollection} The set of properties exposed in the result.
     */
    get properties() {
        return this.privProperties;
    }
}
exports.RecognitionResult = RecognitionResult;



/***/ }),
/* 96 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpeechRecognitionResult = void 0;
const Exports_js_1 = __webpack_require__(79);
/**
 * Defines result of speech recognition.
 * @class SpeechRecognitionResult
 */
class SpeechRecognitionResult extends Exports_js_1.RecognitionResult {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @public
     * @param {string} resultId - The result id.
     * @param {ResultReason} reason - The reason.
     * @param {string} text - The recognized text.
     * @param {number} duration - The duration.
     * @param {number} offset - The offset into the stream.
     * @param {string} language - Primary Language detected, if provided.
     * @param {string} languageDetectionConfidence - Primary Language confidence ("Unknown," "Low," "Medium," "High"...), if provided.
     * @param {string} speakerId - speaker id for conversation transcription, if provided.
     * @param {string} errorDetails - Error details, if provided.
     * @param {string} json - Additional Json, if provided.
     * @param {PropertyCollection} properties - Additional properties, if provided.
     */
    constructor(resultId, reason, text, duration, offset, language, languageDetectionConfidence, speakerId, errorDetails, json, properties) {
        super(resultId, reason, text, duration, offset, language, languageDetectionConfidence, errorDetails, json, properties);
        this.privSpeakerId = speakerId;
    }
    /**
     * speaker id from conversation transcription/id scenarios
     * @member SpeechRecognitionResult.prototype.speakerId
     * @function
     * @public
     * @returns {string} id of speaker in given result
     */
    get speakerId() {
        return this.privSpeakerId;
    }
}
exports.SpeechRecognitionResult = SpeechRecognitionResult;



/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntentRecognitionResult = void 0;
const Exports_js_1 = __webpack_require__(79);
/**
 * Intent recognition result.
 * @class
 */
class IntentRecognitionResult extends Exports_js_1.SpeechRecognitionResult {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param intentId - The intent id.
     * @param resultId - The result id.
     * @param reason - The reason.
     * @param text - The recognized text.
     * @param duration - The duration.
     * @param offset - The offset into the stream.
     * @param language - Primary Language detected, if provided.
     * @param languageDetectionConfidence - Primary Language confidence ("Unknown," "Low," "Medium," "High"...), if provided.
     * @param errorDetails - Error details, if provided.
     * @param json - Additional Json, if provided.
     * @param properties - Additional properties, if provided.
     */
    constructor(intentId, resultId, reason, text, duration, offset, language, languageDetectionConfidence, errorDetails, json, properties) {
        super(resultId, reason, text, duration, offset, language, languageDetectionConfidence, undefined, errorDetails, json, properties);
        this.privIntentId = intentId;
    }
    /**
     * A String that represents the intent identifier being recognized.
     * @member IntentRecognitionResult.prototype.intentId
     * @function
     * @public
     * @returns {string} A String that represents the intent identifier being recognized.
     */
    get intentId() {
        return this.privIntentId;
    }
}
exports.IntentRecognitionResult = IntentRecognitionResult;



/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LanguageUnderstandingModelImpl = exports.LanguageUnderstandingModel = void 0;
// eslint-disable-next-line max-classes-per-file
const Contracts_js_1 = __webpack_require__(64);
/**
 * Language understanding model
 * @class LanguageUnderstandingModel
 */
class LanguageUnderstandingModel {
    /**
     * Creates and initializes a new instance
     * @constructor
     */
    constructor() {
        return;
    }
    /**
     * Creates an language understanding model using the specified endpoint.
     * @member LanguageUnderstandingModel.fromEndpoint
     * @function
     * @public
     * @param {URL} uri - A String that represents the endpoint of the language understanding model.
     * @returns {LanguageUnderstandingModel} The language understanding model being created.
     */
    static fromEndpoint(uri) {
        Contracts_js_1.Contracts.throwIfNull(uri, "uri");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(uri.hostname, "uri");
        const langModelImp = new LanguageUnderstandingModelImpl();
        // Need to extract the app ID from the URL.
        // URL is in the format: https://<region>.api.cognitive.microsoft.com/luis/v2.0/apps/<Guid>?subscription-key=<key>&timezoneOffset=-360
        // Start tearing the string apart.
        // region can be extracted from the host name.
        const firstDot = uri.host.indexOf(".");
        if (-1 === firstDot) {
            throw new Error("Could not determine region from endpoint");
        }
        langModelImp.region = uri.host.substr(0, firstDot);
        // Now the app ID.
        const lastSegment = uri.pathname.lastIndexOf("/") + 1;
        if (-1 === lastSegment) {
            throw new Error("Could not determine appId from endpoint");
        }
        langModelImp.appId = uri.pathname.substr(lastSegment);
        // And finally the key.
        langModelImp.subscriptionKey = uri.searchParams.get("subscription-key");
        if (undefined === langModelImp.subscriptionKey) {
            throw new Error("Could not determine subscription key from endpoint");
        }
        return langModelImp;
    }
    /**
     * Creates an language understanding model using the application id of Language Understanding service.
     * @member LanguageUnderstandingModel.fromAppId
     * @function
     * @public
     * @param {string} appId - A String that represents the application id of Language Understanding service.
     * @returns {LanguageUnderstandingModel} The language understanding model being created.
     */
    static fromAppId(appId) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(appId, "appId");
        const langModelImp = new LanguageUnderstandingModelImpl();
        langModelImp.appId = appId;
        return langModelImp;
    }
    /**
     * Creates a language understanding model using hostname, subscription key and application
     * id of Language Understanding service.
     * @member LanguageUnderstandingModel.fromSubscription
     * @function
     * @public
     * @param {string} subscriptionKey - A String that represents the subscription key of
     * Language Understanding service.
     * @param {string} appId - A String that represents the application id of Language
     * Understanding service.
     * @param {LanguageUnderstandingModel} region - A String that represents the region
     * of the Language Understanding service (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @returns {LanguageUnderstandingModel} The language understanding model being created.
     */
    static fromSubscription(subscriptionKey, appId, region) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(subscriptionKey, "subscriptionKey");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(appId, "appId");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(region, "region");
        const langModelImp = new LanguageUnderstandingModelImpl();
        langModelImp.appId = appId;
        langModelImp.region = region;
        langModelImp.subscriptionKey = subscriptionKey;
        return langModelImp;
    }
}
exports.LanguageUnderstandingModel = LanguageUnderstandingModel;
/**
 * @private
 * @class LanguageUnderstandingModelImpl
 */
class LanguageUnderstandingModelImpl extends LanguageUnderstandingModel {
}
exports.LanguageUnderstandingModelImpl = LanguageUnderstandingModelImpl;



/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MeetingTranscriptionEventArgs = exports.ConversationTranscriptionEventArgs = exports.SpeechRecognitionEventArgs = void 0;
/* eslint-disable max-classes-per-file */
const Exports_js_1 = __webpack_require__(79);
/**
 * Defines contents of speech recognizing/recognized event.
 * @class SpeechRecognitionEventArgs
 */
class SpeechRecognitionEventArgs extends Exports_js_1.RecognitionEventArgs {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {SpeechRecognitionResult} result - The speech recognition result.
     * @param {number} offset - The offset.
     * @param {string} sessionId - The session id.
     */
    constructor(result, offset, sessionId) {
        super(offset, sessionId);
        this.privResult = result;
    }
    /**
     * Specifies the recognition result.
     * @member SpeechRecognitionEventArgs.prototype.result
     * @function
     * @public
     * @returns {SpeechRecognitionResult} the recognition result.
     */
    get result() {
        return this.privResult;
    }
}
exports.SpeechRecognitionEventArgs = SpeechRecognitionEventArgs;
/**
 * Defines contents of conversation transcribed/transcribing event.
 * @class ConversationTranscriptionEventArgs
 */
class ConversationTranscriptionEventArgs extends Exports_js_1.RecognitionEventArgs {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {ConversationTranscriptionResult} result - The conversation transcription result.
     * @param {number} offset - The offset.
     * @param {string} sessionId - The session id.
     */
    constructor(result, offset, sessionId) {
        super(offset, sessionId);
        this.privResult = result;
    }
    /**
     * Specifies the transcription result.
     * @member ConversationTranscription1EventArgs.prototype.result
     * @function
     * @public
     * @returns {ConversationTranscriptionResult} the recognition result.
     */
    get result() {
        return this.privResult;
    }
}
exports.ConversationTranscriptionEventArgs = ConversationTranscriptionEventArgs;
/**
 * Defines contents of meeting transcribed/transcribing event.
 * @class MeetingTranscriptionEventArgs
 */
class MeetingTranscriptionEventArgs extends SpeechRecognitionEventArgs {
}
exports.MeetingTranscriptionEventArgs = MeetingTranscriptionEventArgs;



/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpeechRecognitionCanceledEventArgs = void 0;
const CancellationEventArgsBase_js_1 = __webpack_require__(101);
class SpeechRecognitionCanceledEventArgs extends CancellationEventArgsBase_js_1.CancellationEventArgsBase {
}
exports.SpeechRecognitionCanceledEventArgs = SpeechRecognitionCanceledEventArgs;



/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CancellationEventArgsBase = void 0;
const Exports_js_1 = __webpack_require__(79);
/**
 * Defines content of a CancellationEvent.
 * @class CancellationEventArgsBase
 */
class CancellationEventArgsBase extends Exports_js_1.RecognitionEventArgs {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {CancellationReason} reason - The cancellation reason.
     * @param {string} errorDetails - Error details, if provided.
     * @param {number} offset - The offset.
     * @param {string} sessionId - The session id.
     */
    constructor(reason, errorDetails, errorCode, offset, sessionId) {
        super(offset, sessionId);
        this.privReason = reason;
        this.privErrorDetails = errorDetails;
        this.privErrorCode = errorCode;
    }
    /**
     * The reason the recognition was canceled.
     * @member CancellationEventArgsBase.prototype.reason
     * @function
     * @public
     * @returns {CancellationReason} Specifies the reason canceled.
     */
    get reason() {
        return this.privReason;
    }
    /**
     * The error code in case of an unsuccessful operation.
     * @return An error code that represents the error reason.
     */
    get errorCode() {
        return this.privErrorCode;
    }
    /**
     * In case of an unsuccessful operation, provides details of the occurred error.
     * @member CancellationEventArgsBase.prototype.errorDetails
     * @function
     * @public
     * @returns {string} A String that represents the error details.
     */
    get errorDetails() {
        return this.privErrorDetails;
    }
}
exports.CancellationEventArgsBase = CancellationEventArgsBase;



/***/ }),
/* 102 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TranslationRecognitionEventArgs = void 0;
const Exports_js_1 = __webpack_require__(79);
/**
 * Translation text result event arguments.
 * @class TranslationRecognitionEventArgs
 */
class TranslationRecognitionEventArgs extends Exports_js_1.RecognitionEventArgs {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {TranslationRecognitionResult} result - The translation recognition result.
     * @param {number} offset - The offset.
     * @param {string} sessionId - The session id.
     */
    constructor(result, offset, sessionId) {
        super(offset, sessionId);
        this.privResult = result;
    }
    /**
     * Specifies the recognition result.
     * @member TranslationRecognitionEventArgs.prototype.result
     * @function
     * @public
     * @returns {TranslationRecognitionResult} the recognition result.
     */
    get result() {
        return this.privResult;
    }
}
exports.TranslationRecognitionEventArgs = TranslationRecognitionEventArgs;



/***/ }),
/* 103 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TranslationSynthesisEventArgs = void 0;
const Exports_js_1 = __webpack_require__(79);
/**
 * Translation Synthesis event arguments
 * @class TranslationSynthesisEventArgs
 */
class TranslationSynthesisEventArgs extends Exports_js_1.SessionEventArgs {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {TranslationSynthesisResult} result - The translation synthesis result.
     * @param {string} sessionId - The session id.
     */
    constructor(result, sessionId) {
        super(sessionId);
        this.privResult = result;
    }
    /**
     * Specifies the translation synthesis result.
     * @member TranslationSynthesisEventArgs.prototype.result
     * @function
     * @public
     * @returns {TranslationSynthesisResult} Specifies the translation synthesis result.
     */
    get result() {
        return this.privResult;
    }
}
exports.TranslationSynthesisEventArgs = TranslationSynthesisEventArgs;



/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TranslationRecognitionResult = void 0;
const Exports_js_1 = __webpack_require__(79);
/**
 * Translation text result.
 * @class TranslationRecognitionResult
 */
class TranslationRecognitionResult extends Exports_js_1.SpeechRecognitionResult {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {Translations} translations - The translations.
     * @param {string} resultId - The result id.
     * @param {ResultReason} reason - The reason.
     * @param {string} text - The recognized text.
     * @param {number} duration - The duration.
     * @param {number} offset - The offset into the stream.
     * @param {string} language - Primary Language detected, if provided.
     * @param {string} languageDetectionConfidence - Primary Language confidence ("Unknown," "Low," "Medium," "High"...), if provided.
     * @param {string} errorDetails - Error details, if provided.
     * @param {string} json - Additional Json, if provided.
     * @param {PropertyCollection} properties - Additional properties, if provided.
     */
    constructor(translations, resultId, reason, text, duration, offset, language, languageDetectionConfidence, errorDetails, json, properties) {
        super(resultId, reason, text, duration, offset, language, languageDetectionConfidence, undefined, errorDetails, json, properties);
        this.privTranslations = translations;
    }
    static fromSpeechRecognitionResult(result) {
        return new TranslationRecognitionResult(undefined, result.resultId, result.reason, result.text, result.duration, result.offset, result.language, result.languageDetectionConfidence, result.errorDetails, result.json, result.properties);
    }
    /**
     * Presents the translation results. Each item in the dictionary represents
     * a translation result in one of target languages, where the key is the name
     * of the target language, in BCP-47 format, and the value is the translation
     * text in the specified language.
     * @member TranslationRecognitionResult.prototype.translations
     * @function
     * @public
     * @returns {Translations} the current translation map that holds all translations requested.
     */
    get translations() {
        return this.privTranslations;
    }
}
exports.TranslationRecognitionResult = TranslationRecognitionResult;



/***/ }),
/* 105 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TranslationSynthesisResult = void 0;
/**
 * Defines translation synthesis result, i.e. the voice output of the translated
 * text in the target language.
 * @class TranslationSynthesisResult
 */
class TranslationSynthesisResult {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {ResultReason} reason - The synthesis reason.
     * @param {ArrayBuffer} audio - The audio data.
     */
    constructor(reason, audio) {
        this.privReason = reason;
        this.privAudio = audio;
    }
    /**
     * Translated text in the target language.
     * @member TranslationSynthesisResult.prototype.audio
     * @function
     * @public
     * @returns {ArrayBuffer} Translated audio in the target language.
     */
    get audio() {
        return this.privAudio;
    }
    /**
     * The synthesis status.
     * @member TranslationSynthesisResult.prototype.reason
     * @function
     * @public
     * @returns {ResultReason} The synthesis status.
     */
    get reason() {
        return this.privReason;
    }
}
exports.TranslationSynthesisResult = TranslationSynthesisResult;



/***/ }),
/* 106 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResultReason = void 0;
/**
 * Defines the possible reasons a recognition result might be generated.
 * @class ResultReason
 */
var ResultReason;
(function (ResultReason) {
    /**
     * Indicates speech could not be recognized. More details
     * can be found in the NoMatchDetails object.
     * @member ResultReason.NoMatch
     */
    ResultReason[ResultReason["NoMatch"] = 0] = "NoMatch";
    /**
     * Indicates that the recognition was canceled. More details
     * can be found using the CancellationDetails object.
     * @member ResultReason.Canceled
     */
    ResultReason[ResultReason["Canceled"] = 1] = "Canceled";
    /**
     * Indicates the speech result contains hypothesis text.
     * @member ResultReason.RecognizedSpeech
     */
    ResultReason[ResultReason["RecognizingSpeech"] = 2] = "RecognizingSpeech";
    /**
     * Indicates the speech result contains final text that has been recognized.
     * Speech Recognition is now complete for this phrase.
     * @member ResultReason.RecognizedSpeech
     */
    ResultReason[ResultReason["RecognizedSpeech"] = 3] = "RecognizedSpeech";
    /**
     * Indicates the speech result contains a finalized acceptance of a provided keyword.
     * Speech recognition will continue unless otherwise configured.
     * @member ResultReason.RecognizedKeyword
     */
    ResultReason[ResultReason["RecognizedKeyword"] = 4] = "RecognizedKeyword";
    /**
     * Indicates the intent result contains hypothesis text and intent.
     * @member ResultReason.RecognizingIntent
     */
    ResultReason[ResultReason["RecognizingIntent"] = 5] = "RecognizingIntent";
    /**
     * Indicates the intent result contains final text and intent.
     * Speech Recognition and Intent determination are now complete for this phrase.
     * @member ResultReason.RecognizedIntent
     */
    ResultReason[ResultReason["RecognizedIntent"] = 6] = "RecognizedIntent";
    /**
     * Indicates the translation result contains hypothesis text and its translation(s).
     * @member ResultReason.TranslatingSpeech
     */
    ResultReason[ResultReason["TranslatingSpeech"] = 7] = "TranslatingSpeech";
    /**
     * Indicates the translation result contains final text and corresponding translation(s).
     * Speech Recognition and Translation are now complete for this phrase.
     * @member ResultReason.TranslatedSpeech
     */
    ResultReason[ResultReason["TranslatedSpeech"] = 8] = "TranslatedSpeech";
    /**
     * Indicates the synthesized audio result contains a non-zero amount of audio data
     * @member ResultReason.SynthesizingAudio
     */
    ResultReason[ResultReason["SynthesizingAudio"] = 9] = "SynthesizingAudio";
    /**
     * Indicates the synthesized audio is now complete for this phrase.
     * @member ResultReason.SynthesizingAudioCompleted
     */
    ResultReason[ResultReason["SynthesizingAudioCompleted"] = 10] = "SynthesizingAudioCompleted";
    /**
     * Indicates the speech synthesis is now started
     * @member ResultReason.SynthesizingAudioStarted
     */
    ResultReason[ResultReason["SynthesizingAudioStarted"] = 11] = "SynthesizingAudioStarted";
    /**
     * Indicates the voice profile is being enrolled and customers need to send more audio to create a voice profile.
     * @member ResultReason.EnrollingVoiceProfile
     */
    ResultReason[ResultReason["EnrollingVoiceProfile"] = 12] = "EnrollingVoiceProfile";
    /**
     * Indicates the voice profile has been enrolled.
     * @member ResultReason.EnrolledVoiceProfile
     */
    ResultReason[ResultReason["EnrolledVoiceProfile"] = 13] = "EnrolledVoiceProfile";
    /**
     * Indicates successful identification of some speakers.
     * @member ResultReason.RecognizedSpeakers
     */
    ResultReason[ResultReason["RecognizedSpeakers"] = 14] = "RecognizedSpeakers";
    /**
     * Indicates successfully verified one speaker.
     * @member ResultReason.RecognizedSpeaker
     */
    ResultReason[ResultReason["RecognizedSpeaker"] = 15] = "RecognizedSpeaker";
    /**
     * Indicates a voice profile has been reset successfully.
     * @member ResultReason.ResetVoiceProfile
     */
    ResultReason[ResultReason["ResetVoiceProfile"] = 16] = "ResetVoiceProfile";
    /**
     * Indicates a voice profile has been deleted successfully.
     * @member ResultReason.DeletedVoiceProfile
     */
    ResultReason[ResultReason["DeletedVoiceProfile"] = 17] = "DeletedVoiceProfile";
    /**
     * Indicates synthesis voices list has been successfully retrieved.
     * @member ResultReason.VoicesListRetrieved
     */
    ResultReason[ResultReason["VoicesListRetrieved"] = 18] = "VoicesListRetrieved";
    /**
     * Indicates the transcription result contains hypothesis text and its translation(s) for
     * other participants in the conversation.
     * @member ResultReason.TranslatingParticipantSpeech
     */
    ResultReason[ResultReason["TranslatingParticipantSpeech"] = 19] = "TranslatingParticipantSpeech";
    /**
     * Indicates the transcription result contains final text and corresponding translation(s)
     * for other participants in the conversation. Speech Recognition and Translation are now
     * complete for this phrase.
     * @member ResultReason.TranslatedParticipantSpeech
     */
    ResultReason[ResultReason["TranslatedParticipantSpeech"] = 20] = "TranslatedParticipantSpeech";
    /**
     * <summary>
     * Indicates the transcription result contains the instant message and corresponding
     * translation(s).
     * @member ResultReason.TranslatedInstantMessage
     */
    ResultReason[ResultReason["TranslatedInstantMessage"] = 21] = "TranslatedInstantMessage";
    /**
     * Indicates the transcription result contains the instant message for other participants
     * in the conversation and corresponding translation(s).
     * @member ResultReason.TranslatedParticipantInstantMessage
     */
    ResultReason[ResultReason["TranslatedParticipantInstantMessage"] = 22] = "TranslatedParticipantInstantMessage";
})(ResultReason = exports.ResultReason || (exports.ResultReason = {}));



/***/ }),
/* 107 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
/* eslint-disable max-classes-per-file */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpeechConfigImpl = exports.SpeechConfig = void 0;
const Exports_js_1 = __webpack_require__(2);
const Contracts_js_1 = __webpack_require__(64);
const Exports_js_2 = __webpack_require__(79);
/**
 * Speech configuration.
 * @class SpeechConfig
 */
class SpeechConfig {
    /**
     * Creates and initializes an instance.
     * @constructor
     */
    constructor() {
        return;
    }
    /**
     * Static instance of SpeechConfig returned by passing subscriptionKey and service region.
     * Note: Please use your LanguageUnderstanding subscription key in case you want to use the Intent recognizer.
     * @member SpeechConfig.fromSubscription
     * @function
     * @public
     * @param {string} subscriptionKey - The subscription key.
     * @param {string} region - The region name (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @returns {SpeechConfig} The speech factory
     */
    static fromSubscription(subscriptionKey, region) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(subscriptionKey, "subscriptionKey");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(region, "region");
        const speechImpl = new SpeechConfigImpl();
        speechImpl.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Region, region);
        speechImpl.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_IntentRegion, region);
        speechImpl.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Key, subscriptionKey);
        return speechImpl;
    }
    /**
     * Creates an instance of the speech config with specified endpoint and subscription key.
     * This method is intended only for users who use a non-standard service endpoint or parameters.
     * Note: Please use your LanguageUnderstanding subscription key in case you want to use the Intent recognizer.
     * Note: The query parameters specified in the endpoint URL are not changed, even if they are set by any other APIs.
     * For example, if language is defined in the uri as query parameter "language=de-DE", and also set by
     * SpeechConfig.speechRecognitionLanguage = "en-US", the language setting in uri takes precedence,
     * and the effective language is "de-DE". Only the parameters that are not specified in the
     * endpoint URL can be set by other APIs.
     * Note: To use authorization token with fromEndpoint, pass an empty string to the subscriptionKey in the
     * fromEndpoint method, and then set authorizationToken="token" on the created SpeechConfig instance to
     * use the authorization token.
     * @member SpeechConfig.fromEndpoint
     * @function
     * @public
     * @param {URL} endpoint - The service endpoint to connect to.
     * @param {string} subscriptionKey - The subscription key. If a subscription key is not specified, an authorization token must be set.
     * @returns {SpeechConfig} A speech factory instance.
     */
    static fromEndpoint(endpoint, subscriptionKey) {
        Contracts_js_1.Contracts.throwIfNull(endpoint, "endpoint");
        const speechImpl = new SpeechConfigImpl();
        speechImpl.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Endpoint, endpoint.href);
        if (undefined !== subscriptionKey) {
            speechImpl.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Key, subscriptionKey);
        }
        return speechImpl;
    }
    /**
     * Creates an instance of the speech config with specified host and subscription key.
     * This method is intended only for users who use a non-default service host. Standard resource path will be assumed.
     * For services with a non-standard resource path or no path at all, use fromEndpoint instead.
     * Note: Query parameters are not allowed in the host URI and must be set by other APIs.
     * Note: To use an authorization token with fromHost, use fromHost(URL),
     * and then set the AuthorizationToken property on the created SpeechConfig instance.
     * Note: Added in version 1.9.0.
     * @member SpeechConfig.fromHost
     * @function
     * @public
     * @param {URL} host - The service endpoint to connect to. Format is "protocol://host:port" where ":port" is optional.
     * @param {string} subscriptionKey - The subscription key. If a subscription key is not specified, an authorization token must be set.
     * @returns {SpeechConfig} A speech factory instance.
     */
    static fromHost(hostName, subscriptionKey) {
        Contracts_js_1.Contracts.throwIfNull(hostName, "hostName");
        const speechImpl = new SpeechConfigImpl();
        speechImpl.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Host, hostName.protocol + "//" + hostName.hostname + (hostName.port === "" ? "" : ":" + hostName.port));
        if (undefined !== subscriptionKey) {
            speechImpl.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Key, subscriptionKey);
        }
        return speechImpl;
    }
    /**
     * Creates an instance of the speech factory with specified initial authorization token and region.
     * Note: The caller needs to ensure that the authorization token is valid. Before the authorization token
     * expires, the caller needs to refresh it by calling this setter with a new valid token.
     * Note: Please use a token derived from your LanguageUnderstanding subscription key in case you want
     * to use the Intent recognizer. As configuration values are copied when creating a new recognizer,
     * the new token value will not apply to recognizers that have already been created. For recognizers
     * that have been created before, you need to set authorization token of the corresponding recognizer
     * to refresh the token. Otherwise, the recognizers will encounter errors during recognition.
     * @member SpeechConfig.fromAuthorizationToken
     * @function
     * @public
     * @param {string} authorizationToken - The initial authorization token.
     * @param {string} region - The region name (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @returns {SpeechConfig} A speech factory instance.
     */
    static fromAuthorizationToken(authorizationToken, region) {
        Contracts_js_1.Contracts.throwIfNull(authorizationToken, "authorizationToken");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(region, "region");
        const speechImpl = new SpeechConfigImpl();
        speechImpl.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Region, region);
        speechImpl.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_IntentRegion, region);
        speechImpl.authorizationToken = authorizationToken;
        return speechImpl;
    }
    /**
     * Closes the configuration.
     * @member SpeechConfig.prototype.close
     * @function
     * @public
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    close() { }
}
exports.SpeechConfig = SpeechConfig;
/**
 * @public
 * @class SpeechConfigImpl
 */
class SpeechConfigImpl extends SpeechConfig {
    constructor() {
        super();
        this.privProperties = new Exports_js_2.PropertyCollection();
        this.speechRecognitionLanguage = "en-US"; // Should we have a default?
        this.outputFormat = Exports_js_2.OutputFormat.Simple;
    }
    get properties() {
        return this.privProperties;
    }
    get endPoint() {
        return new URL(this.privProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Endpoint));
    }
    get subscriptionKey() {
        return this.privProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Key);
    }
    get region() {
        return this.privProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Region);
    }
    get authorizationToken() {
        return this.privProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceAuthorization_Token);
    }
    set authorizationToken(value) {
        this.privProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceAuthorization_Token, value);
    }
    get speechRecognitionLanguage() {
        return this.privProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_RecoLanguage);
    }
    set speechRecognitionLanguage(value) {
        this.privProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_RecoLanguage, value);
    }
    get autoDetectSourceLanguages() {
        return this.privProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_AutoDetectSourceLanguages);
    }
    set autoDetectSourceLanguages(value) {
        this.privProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_AutoDetectSourceLanguages, value);
    }
    get outputFormat() {
        return Exports_js_2.OutputFormat[this.privProperties.getProperty(Exports_js_1.OutputFormatPropertyName, undefined)];
    }
    set outputFormat(value) {
        this.privProperties.setProperty(Exports_js_1.OutputFormatPropertyName, Exports_js_2.OutputFormat[value]);
    }
    get endpointId() {
        return this.privProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_EndpointId);
    }
    set endpointId(value) {
        this.privProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_EndpointId, value);
    }
    setProperty(name, value) {
        Contracts_js_1.Contracts.throwIfNull(value, "value");
        this.privProperties.setProperty(name, value);
    }
    getProperty(name, def) {
        return this.privProperties.getProperty(name, def);
    }
    setProxy(proxyHostName, proxyPort, proxyUserName, proxyPassword) {
        this.setProperty(Exports_js_2.PropertyId[Exports_js_2.PropertyId.SpeechServiceConnection_ProxyHostName], proxyHostName);
        this.setProperty(Exports_js_2.PropertyId[Exports_js_2.PropertyId.SpeechServiceConnection_ProxyPort], proxyPort);
        this.setProperty(Exports_js_2.PropertyId[Exports_js_2.PropertyId.SpeechServiceConnection_ProxyUserName], proxyUserName);
        this.setProperty(Exports_js_2.PropertyId[Exports_js_2.PropertyId.SpeechServiceConnection_ProxyPassword], proxyPassword);
    }
    setServiceProperty(name, value) {
        const currentProperties = JSON.parse(this.privProperties.getProperty(Exports_js_1.ServicePropertiesPropertyName, "{}"));
        currentProperties[name] = value;
        this.privProperties.setProperty(Exports_js_1.ServicePropertiesPropertyName, JSON.stringify(currentProperties));
    }
    setProfanity(profanity) {
        this.privProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceResponse_ProfanityOption, Exports_js_2.ProfanityOption[profanity]);
    }
    enableAudioLogging() {
        this.privProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_EnableAudioLogging, "true");
    }
    requestWordLevelTimestamps() {
        this.privProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceResponse_RequestWordLevelTimestamps, "true");
        this.privProperties.setProperty(Exports_js_1.OutputFormatPropertyName, Exports_js_2.OutputFormat[Exports_js_2.OutputFormat.Detailed]);
    }
    enableDictation() {
        this.privProperties.setProperty(Exports_js_1.ForceDictationPropertyName, "true");
    }
    clone() {
        const ret = new SpeechConfigImpl();
        ret.privProperties = this.privProperties.clone();
        return ret;
    }
    get speechSynthesisLanguage() {
        return this.privProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_SynthLanguage);
    }
    set speechSynthesisLanguage(language) {
        this.privProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_SynthLanguage, language);
    }
    get speechSynthesisVoiceName() {
        return this.privProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_SynthVoice);
    }
    set speechSynthesisVoiceName(voice) {
        this.privProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_SynthVoice, voice);
    }
    get speechSynthesisOutputFormat() {
        return Exports_js_2.SpeechSynthesisOutputFormat[this.privProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_SynthOutputFormat, undefined)];
    }
    set speechSynthesisOutputFormat(format) {
        this.privProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_SynthOutputFormat, Exports_js_2.SpeechSynthesisOutputFormat[format]);
    }
}
exports.SpeechConfigImpl = SpeechConfigImpl;



/***/ }),
/* 108 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpeechTranslationConfigImpl = exports.SpeechTranslationConfig = void 0;
/* eslint-disable max-classes-per-file */
const Exports_js_1 = __webpack_require__(2);
const Contracts_js_1 = __webpack_require__(64);
const Exports_js_2 = __webpack_require__(79);
/**
 * Speech translation configuration.
 * @class SpeechTranslationConfig
 */
class SpeechTranslationConfig extends Exports_js_2.SpeechConfig {
    /**
     * Creates an instance of recognizer config.
     */
    constructor() {
        super();
    }
    /**
     * Static instance of SpeechTranslationConfig returned by passing a subscription key and service region.
     * @member SpeechTranslationConfig.fromSubscription
     * @function
     * @public
     * @param {string} subscriptionKey - The subscription key.
     * @param {string} region - The region name (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @returns {SpeechTranslationConfig} The speech translation config.
     */
    static fromSubscription(subscriptionKey, region) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(subscriptionKey, "subscriptionKey");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(region, "region");
        const ret = new SpeechTranslationConfigImpl();
        ret.properties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Key, subscriptionKey);
        ret.properties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Region, region);
        return ret;
    }
    /**
     * Static instance of SpeechTranslationConfig returned by passing authorization token and service region.
     * Note: The caller needs to ensure that the authorization token is valid. Before the authorization token
     * expires, the caller needs to refresh it by setting the property authorizationToken with a new
     * valid token. Otherwise, all the recognizers created by this SpeechTranslationConfig instance
     * will encounter errors during recognition.
     * As configuration values are copied when creating a new recognizer, the new token value will not apply
     * to recognizers that have already been created.
     * For recognizers that have been created before, you need to set authorization token of the corresponding recognizer
     * to refresh the token. Otherwise, the recognizers will encounter errors during recognition.
     * @member SpeechTranslationConfig.fromAuthorizationToken
     * @function
     * @public
     * @param {string} authorizationToken - The authorization token.
     * @param {string} region - The region name (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @returns {SpeechTranslationConfig} The speech translation config.
     */
    static fromAuthorizationToken(authorizationToken, region) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(authorizationToken, "authorizationToken");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(region, "region");
        const ret = new SpeechTranslationConfigImpl();
        ret.properties.setProperty(Exports_js_2.PropertyId.SpeechServiceAuthorization_Token, authorizationToken);
        ret.properties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Region, region);
        return ret;
    }
    /**
     * Creates an instance of the speech config with specified host and subscription key.
     * This method is intended only for users who use a non-default service host. Standard resource path will be assumed.
     * For services with a non-standard resource path or no path at all, use fromEndpoint instead.
     * Note: Query parameters are not allowed in the host URI and must be set by other APIs.
     * Note: To use an authorization token with fromHost, use fromHost(URL),
     * and then set the AuthorizationToken property on the created SpeechConfig instance.
     * Note: Added in version 1.9.0.
     * @member SpeechConfig.fromHost
     * @function
     * @public
     * @param {URL} host - The service endpoint to connect to. Format is "protocol://host:port" where ":port" is optional.
     * @param {string} subscriptionKey - The subscription key. If a subscription key is not specified, an authorization token must be set.
     * @returns {SpeechConfig} A speech factory instance.
     */
    static fromHost(hostName, subscriptionKey) {
        Contracts_js_1.Contracts.throwIfNull(hostName, "hostName");
        const speechImpl = new SpeechTranslationConfigImpl();
        speechImpl.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Host, hostName.protocol + "//" + hostName.hostname + (hostName.port === "" ? "" : ":" + hostName.port));
        if (undefined !== subscriptionKey) {
            speechImpl.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Key, subscriptionKey);
        }
        return speechImpl;
    }
    /**
     * Creates an instance of the speech translation config with specified endpoint and subscription key.
     * This method is intended only for users who use a non-standard service endpoint or paramters.
     * Note: The query properties specified in the endpoint URL are not changed, even if they are
     * set by any other APIs. For example, if language is defined in the uri as query parameter
     * "language=de-DE", and also set by the speechRecognitionLanguage property, the language
     * setting in uri takes precedence, and the effective language is "de-DE".
     * Only the properties that are not specified in the endpoint URL can be set by other APIs.
     * Note: To use authorization token with fromEndpoint, pass an empty string to the subscriptionKey in the
     * fromEndpoint method, and then set authorizationToken="token" on the created SpeechConfig instance to
     * use the authorization token.
     * @member SpeechTranslationConfig.fromEndpoint
     * @function
     * @public
     * @param {URL} endpoint - The service endpoint to connect to.
     * @param {string} subscriptionKey - The subscription key.
     * @returns {SpeechTranslationConfig} A speech config instance.
     */
    static fromEndpoint(endpoint, subscriptionKey) {
        Contracts_js_1.Contracts.throwIfNull(endpoint, "endpoint");
        Contracts_js_1.Contracts.throwIfNull(subscriptionKey, "subscriptionKey");
        const ret = new SpeechTranslationConfigImpl();
        ret.properties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Endpoint, endpoint.href);
        ret.properties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Key, subscriptionKey);
        return ret;
    }
}
exports.SpeechTranslationConfig = SpeechTranslationConfig;
/**
 * @private
 * @class SpeechTranslationConfigImpl
 */
class SpeechTranslationConfigImpl extends SpeechTranslationConfig {
    constructor() {
        super();
        this.privSpeechProperties = new Exports_js_2.PropertyCollection();
        this.outputFormat = Exports_js_2.OutputFormat.Simple;
    }
    /**
     * Gets/Sets the authorization token.
     * If this is set, subscription key is ignored.
     * User needs to make sure the provided authorization token is valid and not expired.
     * @member SpeechTranslationConfigImpl.prototype.authorizationToken
     * @function
     * @public
     * @param {string} value - The authorization token.
     */
    set authorizationToken(value) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(value, "value");
        this.privSpeechProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceAuthorization_Token, value);
    }
    /**
     * Sets the speech recognition language.
     * @member SpeechTranslationConfigImpl.prototype.speechRecognitionLanguage
     * @function
     * @public
     * @param {string} value - The authorization token.
     */
    set speechRecognitionLanguage(value) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(value, "value");
        this.privSpeechProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_RecoLanguage, value);
    }
    /**
     * Gets the speech recognition language.
     * @member SpeechTranslationConfigImpl.prototype.speechRecognitionLanguage
     * @function
     * @public
     * @return {string} The speechRecognitionLanguage.
     */
    get speechRecognitionLanguage() {
        return this.privSpeechProperties.getProperty(Exports_js_2.PropertyId[Exports_js_2.PropertyId.SpeechServiceConnection_RecoLanguage]);
    }
    /**
     * @member SpeechTranslationConfigImpl.prototype.subscriptionKey
     * @function
     * @public
     */
    get subscriptionKey() {
        return this.privSpeechProperties.getProperty(Exports_js_2.PropertyId[Exports_js_2.PropertyId.SpeechServiceConnection_Key]);
    }
    /**
     * Gets the output format
     * @member SpeechTranslationConfigImpl.prototype.outputFormat
     * @function
     * @public
     */
    get outputFormat() {
        // eslint-disable-next-line
        return Exports_js_2.OutputFormat[this.privSpeechProperties.getProperty(Exports_js_1.OutputFormatPropertyName, undefined)];
    }
    /**
     * Gets/Sets the output format
     * @member SpeechTranslationConfigImpl.prototype.outputFormat
     * @function
     * @public
     */
    set outputFormat(value) {
        this.privSpeechProperties.setProperty(Exports_js_1.OutputFormatPropertyName, Exports_js_2.OutputFormat[value]);
    }
    /**
     * Gets the endpoint id.
     * @member SpeechTranslationConfigImpl.prototype.endpointId
     * @function
     * @public
     */
    get endpointId() {
        return this.privSpeechProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_EndpointId);
    }
    /**
     * Gets/Sets the endpoint id.
     * @member SpeechTranslationConfigImpl.prototype.endpointId
     * @function
     * @public
     */
    set endpointId(value) {
        this.privSpeechProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_EndpointId, value);
    }
    /**
     * Add a (text) target language to translate into.
     * @member SpeechTranslationConfigImpl.prototype.addTargetLanguage
     * @function
     * @public
     * @param {string} value - The language such as de-DE
     */
    addTargetLanguage(value) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(value, "value");
        const languages = this.targetLanguages;
        if (!languages.includes(value)) {
            languages.push(value);
            this.privSpeechProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_TranslationToLanguages, languages.join(","));
        }
    }
    /**
     * Gets the (text) target language to translate into.
     * @member SpeechTranslationConfigImpl.prototype.targetLanguages
     * @function
     * @public
     * @param {string} value - The language such as de-DE
     */
    get targetLanguages() {
        if (this.privSpeechProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_TranslationToLanguages, undefined) !== undefined) {
            return this.privSpeechProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_TranslationToLanguages).split(",");
        }
        else {
            return [];
        }
    }
    /**
     * Gets the voice name.
     * @member SpeechTranslationConfigImpl.prototype.voiceName
     * @function
     * @public
     */
    get voiceName() {
        return this.getProperty(Exports_js_2.PropertyId[Exports_js_2.PropertyId.SpeechServiceConnection_TranslationVoice]);
    }
    /**
     * Gets/Sets the voice of the translated language, enable voice synthesis output.
     * @member SpeechTranslationConfigImpl.prototype.voiceName
     * @function
     * @public
     * @param {string} value - The name of the voice.
     */
    set voiceName(value) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(value, "value");
        this.privSpeechProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_TranslationVoice, value);
    }
    /**
     * Provides the region.
     * @member SpeechTranslationConfigImpl.prototype.region
     * @function
     * @public
     * @returns {string} The region.
     */
    get region() {
        return this.privSpeechProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_Region);
    }
    setProxy(proxyHostName, proxyPort, proxyUserName, proxyPassword) {
        this.setProperty(Exports_js_2.PropertyId[Exports_js_2.PropertyId.SpeechServiceConnection_ProxyHostName], proxyHostName);
        this.setProperty(Exports_js_2.PropertyId[Exports_js_2.PropertyId.SpeechServiceConnection_ProxyPort], proxyPort);
        this.setProperty(Exports_js_2.PropertyId[Exports_js_2.PropertyId.SpeechServiceConnection_ProxyUserName], proxyUserName);
        this.setProperty(Exports_js_2.PropertyId[Exports_js_2.PropertyId.SpeechServiceConnection_ProxyPassword], proxyPassword);
    }
    /**
     * Gets an arbitrary property value.
     * @member SpeechTranslationConfigImpl.prototype.getProperty
     * @function
     * @public
     * @param {string} name - The name of the property.
     * @param {string} def - The default value of the property in case it is not set.
     * @returns {string} The value of the property.
     */
    getProperty(name, def) {
        return this.privSpeechProperties.getProperty(name, def);
    }
    /**
     * Gets/Sets an arbitrary property value.
     * @member SpeechTranslationConfigImpl.prototype.setProperty
     * @function
     * @public
     * @param {string | PropertyId} name - The name of the property to set.
     * @param {string} value - The value of the property.
     */
    setProperty(name, value) {
        this.privSpeechProperties.setProperty(name, value);
    }
    /**
     * Provides access to custom properties.
     * @member SpeechTranslationConfigImpl.prototype.properties
     * @function
     * @public
     * @returns {PropertyCollection} The properties.
     */
    get properties() {
        return this.privSpeechProperties;
    }
    /**
     * Dispose of associated resources.
     * @member SpeechTranslationConfigImpl.prototype.close
     * @function
     * @public
     */
    close() {
        return;
    }
    setServiceProperty(name, value) {
        const currentProperties = JSON.parse(this.privSpeechProperties.getProperty(Exports_js_1.ServicePropertiesPropertyName, "{}"));
        currentProperties[name] = value;
        this.privSpeechProperties.setProperty(Exports_js_1.ServicePropertiesPropertyName, JSON.stringify(currentProperties));
    }
    setProfanity(profanity) {
        this.privSpeechProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceResponse_ProfanityOption, Exports_js_2.ProfanityOption[profanity]);
    }
    enableAudioLogging() {
        this.privSpeechProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_EnableAudioLogging, "true");
    }
    requestWordLevelTimestamps() {
        this.privSpeechProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceResponse_RequestWordLevelTimestamps, "true");
    }
    enableDictation() {
        this.privSpeechProperties.setProperty(Exports_js_1.ForceDictationPropertyName, "true");
    }
    get speechSynthesisLanguage() {
        return this.privSpeechProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_SynthLanguage);
    }
    set speechSynthesisLanguage(language) {
        this.privSpeechProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_SynthLanguage, language);
    }
    get speechSynthesisVoiceName() {
        return this.privSpeechProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_SynthVoice);
    }
    set speechSynthesisVoiceName(voice) {
        this.privSpeechProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_SynthVoice, voice);
    }
    get speechSynthesisOutputFormat() {
        // eslint-disable-next-line
        return Exports_js_2.SpeechSynthesisOutputFormat[this.privSpeechProperties.getProperty(Exports_js_2.PropertyId.SpeechServiceConnection_SynthOutputFormat, undefined)];
    }
    set speechSynthesisOutputFormat(format) {
        this.privSpeechProperties.setProperty(Exports_js_2.PropertyId.SpeechServiceConnection_SynthOutputFormat, Exports_js_2.SpeechSynthesisOutputFormat[format]);
    }
}
exports.SpeechTranslationConfigImpl = SpeechTranslationConfigImpl;



/***/ }),
/* 109 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropertyCollection = void 0;
const Exports_js_1 = __webpack_require__(79);
/**
 * Represents collection of properties and their values.
 * @class PropertyCollection
 */
class PropertyCollection {
    constructor() {
        this.privKeys = [];
        this.privValues = [];
    }
    /**
     * Returns the property value in type String.
     * Currently only String, int and bool are allowed.
     * If the name is not available, the specified defaultValue is returned.
     * @member PropertyCollection.prototype.getProperty
     * @function
     * @public
     * @param {string} key - The parameter name.
     * @param {string | number | boolean} def - The default value which is returned if the parameter
     * is not available in the collection.
     * @returns {string} value of the parameter.
     */
    getProperty(key, def) {
        let keyToUse;
        if (typeof key === "string") {
            keyToUse = key;
        }
        else {
            keyToUse = Exports_js_1.PropertyId[key];
        }
        for (let n = 0; n < this.privKeys.length; n++) {
            if (this.privKeys[n] === keyToUse) {
                return this.privValues[n];
            }
        }
        if (def === undefined) {
            return undefined;
        }
        return String(def);
    }
    /**
     * Sets the String value of the parameter specified by name.
     * @member PropertyCollection.prototype.setProperty
     * @function
     * @public
     * @param {string} key - The parameter name.
     * @param {string} value - The value of the parameter.
     */
    setProperty(key, value) {
        let keyToUse;
        if (typeof key === "string") {
            keyToUse = key;
        }
        else {
            keyToUse = Exports_js_1.PropertyId[key];
        }
        for (let n = 0; n < this.privKeys.length; n++) {
            if (this.privKeys[n] === keyToUse) {
                this.privValues[n] = value;
                return;
            }
        }
        this.privKeys.push(keyToUse);
        this.privValues.push(value);
    }
    /**
     * Clones the collection.
     * @member PropertyCollection.prototype.clone
     * @function
     * @public
     * @returns {PropertyCollection} A copy of the collection.
     */
    clone() {
        const clonedMap = new PropertyCollection();
        for (let n = 0; n < this.privKeys.length; n++) {
            clonedMap.privKeys.push(this.privKeys[n]);
            clonedMap.privValues.push(this.privValues[n]);
        }
        return clonedMap;
    }
    /**
     * Merges this set of properties into another, no overwrites.
     * @member PropertyCollection.prototype.mergeTo
     * @function
     * @public
     * @param {PropertyCollection}  destinationCollection - The collection to merge into.
     */
    mergeTo(destinationCollection) {
        this.privKeys.forEach((key) => {
            if (destinationCollection.getProperty(key, undefined) === undefined) {
                const value = this.getProperty(key);
                destinationCollection.setProperty(key, value);
            }
        });
    }
    /**
     * Get the keys in Property Collection.
     * @member PropertyCollection.prototype.keys
     * @function
     * @public
     * @returns {string []} Keys in the collection.
     */
    get keys() {
        return this.privKeys;
    }
}
exports.PropertyCollection = PropertyCollection;



/***/ }),
/* 110 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropertyId = void 0;
/**
 * Defines speech property ids.
 * @class PropertyId
 */
var PropertyId;
(function (PropertyId) {
    /**
     * The Cognitive Services Speech Service subscription Key. If you are using an intent recognizer, you need to
     * specify the LUIS endpoint key for your particular LUIS app. Under normal circumstances, you shouldn't
     * have to use this property directly.
     * Instead, use [[SpeechConfig.fromSubscription]].
     * @member PropertyId.SpeechServiceConnection_Key
     */
    PropertyId[PropertyId["SpeechServiceConnection_Key"] = 0] = "SpeechServiceConnection_Key";
    /**
     * The Cognitive Services Speech Service endpoint (url). Under normal circumstances, you shouldn't
     * have to use this property directly.
     * Instead, use [[SpeechConfig.fromEndpoint]].
     * NOTE: This endpoint is not the same as the endpoint used to obtain an access token.
     * @member PropertyId.SpeechServiceConnection_Endpoint
     */
    PropertyId[PropertyId["SpeechServiceConnection_Endpoint"] = 1] = "SpeechServiceConnection_Endpoint";
    /**
     * The Cognitive Services Speech Service region. Under normal circumstances, you shouldn't have to
     * use this property directly.
     * Instead, use [[SpeechConfig.fromSubscription]], [[SpeechConfig.fromEndpoint]], [[SpeechConfig.fromAuthorizationToken]].
     * @member PropertyId.SpeechServiceConnection_Region
     */
    PropertyId[PropertyId["SpeechServiceConnection_Region"] = 2] = "SpeechServiceConnection_Region";
    /**
     * The Cognitive Services Speech Service authorization token (aka access token). Under normal circumstances,
     * you shouldn't have to use this property directly.
     * Instead, use [[SpeechConfig.fromAuthorizationToken]], [[SpeechRecognizer.authorizationToken]],
     * [[IntentRecognizer.authorizationToken]], [[TranslationRecognizer.authorizationToken]], [[SpeakerRecognizer.authorizationToken]].
     * @member PropertyId.SpeechServiceAuthorization_Token
     */
    PropertyId[PropertyId["SpeechServiceAuthorization_Token"] = 3] = "SpeechServiceAuthorization_Token";
    /**
     * The Cognitive Services Speech Service authorization type. Currently unused.
     * @member PropertyId.SpeechServiceAuthorization_Type
     */
    PropertyId[PropertyId["SpeechServiceAuthorization_Type"] = 4] = "SpeechServiceAuthorization_Type";
    /**
     * The Cognitive Services Speech Service endpoint id. Under normal circumstances, you shouldn't
     * have to use this property directly.
     * Instead, use [[SpeechConfig.endpointId]].
     * NOTE: The endpoint id is available in the Speech Portal, listed under Endpoint Details.
     * @member PropertyId.SpeechServiceConnection_EndpointId
     */
    PropertyId[PropertyId["SpeechServiceConnection_EndpointId"] = 5] = "SpeechServiceConnection_EndpointId";
    /**
     * The list of comma separated languages (BCP-47 format) used as target translation languages. Under normal circumstances,
     * you shouldn't have to use this property directly.
     * Instead use [[SpeechTranslationConfig.addTargetLanguage]],
     * [[SpeechTranslationConfig.targetLanguages]], [[TranslationRecognizer.targetLanguages]].
     * @member PropertyId.SpeechServiceConnection_TranslationToLanguages
     */
    PropertyId[PropertyId["SpeechServiceConnection_TranslationToLanguages"] = 6] = "SpeechServiceConnection_TranslationToLanguages";
    /**
     * The name of the Cognitive Service Text to Speech Service Voice. Under normal circumstances, you shouldn't have to use this
     * property directly.
     * Instead, use [[SpeechTranslationConfig.voiceName]].
     * NOTE: Valid voice names can be found <a href="https://aka.ms/csspeech/voicenames">here</a>.
     * @member PropertyId.SpeechServiceConnection_TranslationVoice
     */
    PropertyId[PropertyId["SpeechServiceConnection_TranslationVoice"] = 7] = "SpeechServiceConnection_TranslationVoice";
    /**
     * Translation features.
     * @member PropertyId.SpeechServiceConnection_TranslationFeatures
     */
    PropertyId[PropertyId["SpeechServiceConnection_TranslationFeatures"] = 8] = "SpeechServiceConnection_TranslationFeatures";
    /**
     * The Language Understanding Service Region. Under normal circumstances, you shouldn't have to use this property directly.
     * Instead, use [[LanguageUnderstandingModel]].
     * @member PropertyId.SpeechServiceConnection_IntentRegion
     */
    PropertyId[PropertyId["SpeechServiceConnection_IntentRegion"] = 9] = "SpeechServiceConnection_IntentRegion";
    /**
     * The host name of the proxy server used to connect to the Cognitive Services Speech Service. Only relevant in Node.js environments.
     * You shouldn't have to use this property directly.
     * Instead use <see cref="SpeechConfig.SetProxy(string,int,string,string)"/>.
     * Added in version 1.4.0.
     */
    PropertyId[PropertyId["SpeechServiceConnection_ProxyHostName"] = 10] = "SpeechServiceConnection_ProxyHostName";
    /**
     * The port of the proxy server used to connect to the Cognitive Services Speech Service. Only relevant in Node.js environments.
     * You shouldn't have to use this property directly.
     * Instead use <see cref="SpeechConfig.SetProxy(string,int,string,string)"/>.
     * Added in version 1.4.0.
     */
    PropertyId[PropertyId["SpeechServiceConnection_ProxyPort"] = 11] = "SpeechServiceConnection_ProxyPort";
    /**
     * The user name of the proxy server used to connect to the Cognitive Services Speech Service. Only relevant in Node.js environments.
     * You shouldn't have to use this property directly.
     * Instead use <see cref="SpeechConfig.SetProxy(string,int,string,string)"/>.
     * Added in version 1.4.0.
     */
    PropertyId[PropertyId["SpeechServiceConnection_ProxyUserName"] = 12] = "SpeechServiceConnection_ProxyUserName";
    /**
     * The password of the proxy server used to connect to the Cognitive Services Speech Service. Only relevant in Node.js environments.
     * You shouldn't have to use this property directly.
     * Instead use <see cref="SpeechConfig.SetProxy(string,int,string,string)"/>.
     * Added in version 1.4.0.
     */
    PropertyId[PropertyId["SpeechServiceConnection_ProxyPassword"] = 13] = "SpeechServiceConnection_ProxyPassword";
    /**
     * The Cognitive Services Speech Service recognition Mode. Can be "INTERACTIVE", "CONVERSATION", "DICTATION".
     * This property is intended to be read-only. The SDK is using it internally.
     * @member PropertyId.SpeechServiceConnection_RecoMode
     */
    PropertyId[PropertyId["SpeechServiceConnection_RecoMode"] = 14] = "SpeechServiceConnection_RecoMode";
    /**
     * The spoken language to be recognized (in BCP-47 format). Under normal circumstances, you shouldn't have to use this property
     * directly.
     * Instead, use [[SpeechConfig.speechRecognitionLanguage]].
     * @member PropertyId.SpeechServiceConnection_RecoLanguage
     */
    PropertyId[PropertyId["SpeechServiceConnection_RecoLanguage"] = 15] = "SpeechServiceConnection_RecoLanguage";
    /**
     * The session id. This id is a universally unique identifier (aka UUID) representing a specific binding of an audio input stream
     * and the underlying speech recognition instance to which it is bound. Under normal circumstances, you shouldn't have to use this
     * property directly.
     * Instead use [[SessionEventArgs.sessionId]].
     * @member PropertyId.Speech_SessionId
     */
    PropertyId[PropertyId["Speech_SessionId"] = 16] = "Speech_SessionId";
    /**
     * The spoken language to be synthesized (e.g. en-US)
     * @member PropertyId.SpeechServiceConnection_SynthLanguage
     */
    PropertyId[PropertyId["SpeechServiceConnection_SynthLanguage"] = 17] = "SpeechServiceConnection_SynthLanguage";
    /**
     * The name of the TTS voice to be used for speech synthesis
     * @member PropertyId.SpeechServiceConnection_SynthVoice
     */
    PropertyId[PropertyId["SpeechServiceConnection_SynthVoice"] = 18] = "SpeechServiceConnection_SynthVoice";
    /**
     * The string to specify TTS output audio format
     * @member PropertyId.SpeechServiceConnection_SynthOutputFormat
     */
    PropertyId[PropertyId["SpeechServiceConnection_SynthOutputFormat"] = 19] = "SpeechServiceConnection_SynthOutputFormat";
    /**
     * The list of comma separated languages used as possible source languages
     * Added in version 1.13.0
     * @member PropertyId.SpeechServiceConnection_AutoDetectSourceLanguages
     */
    PropertyId[PropertyId["SpeechServiceConnection_AutoDetectSourceLanguages"] = 20] = "SpeechServiceConnection_AutoDetectSourceLanguages";
    /**
     * The requested Cognitive Services Speech Service response output format (simple or detailed). Under normal circumstances, you shouldn't have
     * to use this property directly.
     * Instead use [[SpeechConfig.outputFormat]].
     * @member PropertyId.SpeechServiceResponse_RequestDetailedResultTrueFalse
     */
    PropertyId[PropertyId["SpeechServiceResponse_RequestDetailedResultTrueFalse"] = 21] = "SpeechServiceResponse_RequestDetailedResultTrueFalse";
    /**
     * The requested Cognitive Services Speech Service response output profanity level. Currently unused.
     * @member PropertyId.SpeechServiceResponse_RequestProfanityFilterTrueFalse
     */
    PropertyId[PropertyId["SpeechServiceResponse_RequestProfanityFilterTrueFalse"] = 22] = "SpeechServiceResponse_RequestProfanityFilterTrueFalse";
    /**
     * The Cognitive Services Speech Service response output (in JSON format). This property is available on recognition result objects only.
     * @member PropertyId.SpeechServiceResponse_JsonResult
     */
    PropertyId[PropertyId["SpeechServiceResponse_JsonResult"] = 23] = "SpeechServiceResponse_JsonResult";
    /**
     * The Cognitive Services Speech Service error details (in JSON format). Under normal circumstances, you shouldn't have to
     * use this property directly. Instead use [[CancellationDetails.errorDetails]].
     * @member PropertyId.SpeechServiceResponse_JsonErrorDetails
     */
    PropertyId[PropertyId["SpeechServiceResponse_JsonErrorDetails"] = 24] = "SpeechServiceResponse_JsonErrorDetails";
    /**
     * The cancellation reason. Currently unused.
     * @member PropertyId.CancellationDetails_Reason
     */
    PropertyId[PropertyId["CancellationDetails_Reason"] = 25] = "CancellationDetails_Reason";
    /**
     * The cancellation text. Currently unused.
     * @member PropertyId.CancellationDetails_ReasonText
     */
    PropertyId[PropertyId["CancellationDetails_ReasonText"] = 26] = "CancellationDetails_ReasonText";
    /**
     * The Cancellation detailed text. Currently unused.
     * @member PropertyId.CancellationDetails_ReasonDetailedText
     */
    PropertyId[PropertyId["CancellationDetails_ReasonDetailedText"] = 27] = "CancellationDetails_ReasonDetailedText";
    /**
     * The Language Understanding Service response output (in JSON format). Available via [[IntentRecognitionResult]]
     * @member PropertyId.LanguageUnderstandingServiceResponse_JsonResult
     */
    PropertyId[PropertyId["LanguageUnderstandingServiceResponse_JsonResult"] = 28] = "LanguageUnderstandingServiceResponse_JsonResult";
    /**
     * The URL string built from speech configuration.
     * This property is intended to be read-only. The SDK is using it internally.
     * NOTE: Added in version 1.7.0.
     */
    PropertyId[PropertyId["SpeechServiceConnection_Url"] = 29] = "SpeechServiceConnection_Url";
    /**
     * The initial silence timeout value (in milliseconds) used by the service.
     * Added in version 1.7.0
     */
    PropertyId[PropertyId["SpeechServiceConnection_InitialSilenceTimeoutMs"] = 30] = "SpeechServiceConnection_InitialSilenceTimeoutMs";
    /**
     * The end silence timeout value (in milliseconds) used by the service.
     * Added in version 1.7.0
     */
    PropertyId[PropertyId["SpeechServiceConnection_EndSilenceTimeoutMs"] = 31] = "SpeechServiceConnection_EndSilenceTimeoutMs";
    /**
     * A duration of detected silence, measured in milliseconds, after which speech-to-text will determine a spoken
     * phrase has ended and generate a final Recognized result. Configuring this timeout may be helpful in situations
     * where spoken input is significantly faster or slower than usual and default segmentation behavior consistently
     * yields results that are too long or too short. Segmentation timeout values that are inappropriately high or low
     * can negatively affect speech-to-text accuracy; this property should be carefully configured and the resulting
     * behavior should be thoroughly validated as intended.
     *
     * For more information about timeout configuration that includes discussion of default behaviors, please visit
     * https://aka.ms/csspeech/timeouts.
     *
     * Added in version 1.21.0.
     */
    PropertyId[PropertyId["Speech_SegmentationSilenceTimeoutMs"] = 32] = "Speech_SegmentationSilenceTimeoutMs";
    /**
     * SegmentationMaximumTimeMs represents the maximum length of a spoken phrase when using the Time segmentation strategy.
     * As the length of a spoken phrase approaches this value, the @member Speech_SegmentationSilenceTimeoutMs will be reduced until either
     * the phrase silence timeout is reached or the phrase reaches the maximum length.
     *
     * Added in version 1.42.0.
     */
    PropertyId[PropertyId["Speech_SegmentationMaximumTimeMs"] = 33] = "Speech_SegmentationMaximumTimeMs";
    /**
     * SegmentationStrategy defines the strategy used to determine when a spoken phrase has ended and a final Recognized result should be generated.
     * Allowed values are "Default", "Time", and "Semantic".
     *
     * Valid values:
     * - "Default": Uses the default strategy and settings as determined by the Speech Service. Suitable for most situations.
     * - "Time": Uses a time-based strategy where the amount of silence between speech determines when to generate a final result.
     * - "Semantic": Uses an AI model to determine the end of a spoken phrase based on the phrase's content.
     *
     * Additional Notes:
     * - When using the Time strategy, @member Speech_SegmentationSilenceTimeoutMs can be adjusted to modify the required silence duration for ending a phrase,
     * and @member Speech_SegmentationMaximumTimeMs can be adjusted to set the maximum length of a spoken phrase.
     * - The Semantic strategy does not have any adjustable properties.
     *
     * Added in version 1.42.0.
     */
    PropertyId[PropertyId["Speech_SegmentationStrategy"] = 34] = "Speech_SegmentationStrategy";
    /**
     * A boolean value specifying whether audio logging is enabled in the service or not.
     * Audio and content logs are stored either in Microsoft-owned storage, or in your own storage account linked
     * to your Cognitive Services subscription (Bring Your Own Storage (BYOS) enabled Speech resource).
     * The logs will be removed after 30 days.
     * Added in version 1.7.0
     */
    PropertyId[PropertyId["SpeechServiceConnection_EnableAudioLogging"] = 35] = "SpeechServiceConnection_EnableAudioLogging";
    /**
     * The speech service connection language identifier mode.
     * Can be "AtStart" (the default), or "Continuous". See Language
     * Identification document https://aka.ms/speech/lid?pivots=programming-language-javascript
     * for more details.
     * Added in 1.25.0
     **/
    PropertyId[PropertyId["SpeechServiceConnection_LanguageIdMode"] = 36] = "SpeechServiceConnection_LanguageIdMode";
    /**
     * A string value representing the desired endpoint version to target for Speech Recognition.
     * Added in version 1.21.0
     */
    PropertyId[PropertyId["SpeechServiceConnection_RecognitionEndpointVersion"] = 37] = "SpeechServiceConnection_RecognitionEndpointVersion";
    /**
    /**
     * A string value the current speaker recognition scenario/mode (TextIndependentIdentification, etc.).
     * Added in version 1.23.0
     */
    PropertyId[PropertyId["SpeechServiceConnection_SpeakerIdMode"] = 38] = "SpeechServiceConnection_SpeakerIdMode";
    /**
     * The requested Cognitive Services Speech Service response output profanity setting.
     * Allowed values are "masked", "removed", and "raw".
     * Added in version 1.7.0.
     */
    PropertyId[PropertyId["SpeechServiceResponse_ProfanityOption"] = 39] = "SpeechServiceResponse_ProfanityOption";
    /**
     * A string value specifying which post processing option should be used by service.
     * Allowed values are "TrueText".
     * Added in version 1.7.0
     */
    PropertyId[PropertyId["SpeechServiceResponse_PostProcessingOption"] = 40] = "SpeechServiceResponse_PostProcessingOption";
    /**
     * A boolean value specifying whether to include word-level timestamps in the response result.
     * Added in version 1.7.0
     */
    PropertyId[PropertyId["SpeechServiceResponse_RequestWordLevelTimestamps"] = 41] = "SpeechServiceResponse_RequestWordLevelTimestamps";
    /**
     * The number of times a word has to be in partial results to be returned.
     * Added in version 1.7.0
     */
    PropertyId[PropertyId["SpeechServiceResponse_StablePartialResultThreshold"] = 42] = "SpeechServiceResponse_StablePartialResultThreshold";
    /**
     * A string value specifying the output format option in the response result. Internal use only.
     * Added in version 1.7.0.
     */
    PropertyId[PropertyId["SpeechServiceResponse_OutputFormatOption"] = 43] = "SpeechServiceResponse_OutputFormatOption";
    /**
     * A boolean value to request for stabilizing translation partial results by omitting words in the end.
     * Added in version 1.7.0.
     */
    PropertyId[PropertyId["SpeechServiceResponse_TranslationRequestStablePartialResult"] = 44] = "SpeechServiceResponse_TranslationRequestStablePartialResult";
    /**
     * A boolean value specifying whether to request WordBoundary events.
     * @member PropertyId.SpeechServiceResponse_RequestWordBoundary
     * Added in version 1.21.0.
     */
    PropertyId[PropertyId["SpeechServiceResponse_RequestWordBoundary"] = 45] = "SpeechServiceResponse_RequestWordBoundary";
    /**
     * A boolean value specifying whether to request punctuation boundary in WordBoundary Events. Default is true.
     * @member PropertyId.SpeechServiceResponse_RequestPunctuationBoundary
     * Added in version 1.21.0.
     */
    PropertyId[PropertyId["SpeechServiceResponse_RequestPunctuationBoundary"] = 46] = "SpeechServiceResponse_RequestPunctuationBoundary";
    /**
     * A boolean value specifying whether to request sentence boundary in WordBoundary Events. Default is false.
     * @member PropertyId.SpeechServiceResponse_RequestSentenceBoundary
     * Added in version 1.21.0.
     */
    PropertyId[PropertyId["SpeechServiceResponse_RequestSentenceBoundary"] = 47] = "SpeechServiceResponse_RequestSentenceBoundary";
    /**
     * Determines if intermediate results contain speaker identification.
     * Allowed values are "true" or "false". If set to "true", the intermediate results will contain speaker identification.
     * The default value if unset or set to an invalid value is "false".
     * This is currently only supported for scenarios using the ConversationTranscriber".
     * @member PropertyId.SpeechServiceResponse_DiarizeIntermediateResults
     * Adding in version 1.41.
     */
    PropertyId[PropertyId["SpeechServiceResponse_DiarizeIntermediateResults"] = 48] = "SpeechServiceResponse_DiarizeIntermediateResults";
    /**
     * Identifier used to connect to the backend service.
     * @member PropertyId.Conversation_ApplicationId
     */
    PropertyId[PropertyId["Conversation_ApplicationId"] = 49] = "Conversation_ApplicationId";
    /**
     * Type of dialog backend to connect to.
     * @member PropertyId.Conversation_DialogType
     */
    PropertyId[PropertyId["Conversation_DialogType"] = 50] = "Conversation_DialogType";
    /**
     * Silence timeout for listening
     * @member PropertyId.Conversation_Initial_Silence_Timeout
     */
    PropertyId[PropertyId["Conversation_Initial_Silence_Timeout"] = 51] = "Conversation_Initial_Silence_Timeout";
    /**
     * From Id to add to speech recognition activities.
     * @member PropertyId.Conversation_From_Id
     */
    PropertyId[PropertyId["Conversation_From_Id"] = 52] = "Conversation_From_Id";
    /**
     * ConversationId for the session.
     * @member PropertyId.Conversation_Conversation_Id
     */
    PropertyId[PropertyId["Conversation_Conversation_Id"] = 53] = "Conversation_Conversation_Id";
    /**
     * Comma separated list of custom voice deployment ids.
     * @member PropertyId.Conversation_Custom_Voice_Deployment_Ids
     */
    PropertyId[PropertyId["Conversation_Custom_Voice_Deployment_Ids"] = 54] = "Conversation_Custom_Voice_Deployment_Ids";
    /**
     * Speech activity template, stamp properties from the template on the activity generated by the service for speech.
     * @member PropertyId.Conversation_Speech_Activity_Template
     * Added in version 1.10.0.
     */
    PropertyId[PropertyId["Conversation_Speech_Activity_Template"] = 55] = "Conversation_Speech_Activity_Template";
    /**
     * Enables or disables the receipt of turn status messages as obtained on the turnStatusReceived event.
     * @member PropertyId.Conversation_Request_Bot_Status_Messages
     * Added in version 1.15.0.
     */
    PropertyId[PropertyId["Conversation_Request_Bot_Status_Messages"] = 56] = "Conversation_Request_Bot_Status_Messages";
    /**
     * Specifies the connection ID to be provided in the Agent configuration message, e.g. a Direct Line token for
     * channel authentication.
     * Added in version 1.15.1.
     */
    PropertyId[PropertyId["Conversation_Agent_Connection_Id"] = 57] = "Conversation_Agent_Connection_Id";
    /**
     * The Cognitive Services Speech Service host (url). Under normal circumstances, you shouldn't have to use this property directly.
     * Instead, use [[SpeechConfig.fromHost]].
     */
    PropertyId[PropertyId["SpeechServiceConnection_Host"] = 58] = "SpeechServiceConnection_Host";
    /**
     * Set the host for service calls to the Conversation Translator REST management and websocket calls.
     */
    PropertyId[PropertyId["ConversationTranslator_Host"] = 59] = "ConversationTranslator_Host";
    /**
     * Optionally set the the host's display name.
     * Used when joining a conversation.
     */
    PropertyId[PropertyId["ConversationTranslator_Name"] = 60] = "ConversationTranslator_Name";
    /**
     * Optionally set a value for the X-CorrelationId request header.
     * Used for troubleshooting errors in the server logs. It should be a valid guid.
     */
    PropertyId[PropertyId["ConversationTranslator_CorrelationId"] = 61] = "ConversationTranslator_CorrelationId";
    /**
     * Set the conversation token to be sent to the speech service. This enables the
     * service to service call from the speech service to the Conversation Translator service for relaying
     * recognitions. For internal use.
     */
    PropertyId[PropertyId["ConversationTranslator_Token"] = 62] = "ConversationTranslator_Token";
    /**
     * The reference text of the audio for pronunciation evaluation.
     * For this and the following pronunciation assessment parameters, see
     * https://docs.microsoft.com/azure/cognitive-services/speech-service/rest-speech-to-text#pronunciation-assessment-parameters for details.
     * Under normal circumstances, you shouldn't have to use this property directly.
     * Added in version 1.15.0
     */
    PropertyId[PropertyId["PronunciationAssessment_ReferenceText"] = 63] = "PronunciationAssessment_ReferenceText";
    /**
     * The point system for pronunciation score calibration (FivePoint or HundredMark).
     * Under normal circumstances, you shouldn't have to use this property directly.
     * Added in version 1.15.0
     */
    PropertyId[PropertyId["PronunciationAssessment_GradingSystem"] = 64] = "PronunciationAssessment_GradingSystem";
    /**
     * The pronunciation evaluation granularity (Phoneme, Word, or FullText).
     * Under normal circumstances, you shouldn't have to use this property directly.
     * Added in version 1.15.0
     */
    PropertyId[PropertyId["PronunciationAssessment_Granularity"] = 65] = "PronunciationAssessment_Granularity";
    /**
     * Defines if enable miscue calculation.
     * With this enabled, the pronounced words will be compared to the reference text,
     * and will be marked with omission/insertion based on the comparison. The default setting is False.
     * Under normal circumstances, you shouldn't have to use this property directly.
     * Added in version 1.15.0
     */
    PropertyId[PropertyId["PronunciationAssessment_EnableMiscue"] = 66] = "PronunciationAssessment_EnableMiscue";
    /**
     * The json string of pronunciation assessment parameters
     * Under normal circumstances, you shouldn't have to use this property directly.
     * Added in version 1.15.0
     */
    PropertyId[PropertyId["PronunciationAssessment_Json"] = 67] = "PronunciationAssessment_Json";
    /**
     * Pronunciation assessment parameters.
     * This property is intended to be read-only. The SDK is using it internally.
     * Added in version 1.15.0
     */
    PropertyId[PropertyId["PronunciationAssessment_Params"] = 68] = "PronunciationAssessment_Params";
    /**
     * Version of Speaker Recognition API to use.
     * Added in version 1.18.0
     */
    PropertyId[PropertyId["SpeakerRecognition_Api_Version"] = 69] = "SpeakerRecognition_Api_Version";
    /**
     * Specifies whether to allow load of data URL for web worker
     * Allowed values are "off" and "on". Default is "on".
     * Added in version 1.32.0
     */
    PropertyId[PropertyId["WebWorkerLoadType"] = 70] = "WebWorkerLoadType";
    /**
     * Talking avatar service WebRTC session description protocol.
     * This property is intended to be read-only. The SDK is using it internally.
     * Added in version 1.33.0
     */
    PropertyId[PropertyId["TalkingAvatarService_WebRTC_SDP"] = 71] = "TalkingAvatarService_WebRTC_SDP";
})(PropertyId = exports.PropertyId || (exports.PropertyId = {}));



/***/ }),
/* 111 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Recognizer = void 0;
const Exports_js_1 = __webpack_require__(2);
const Exports_js_2 = __webpack_require__(4);
const Contracts_js_1 = __webpack_require__(64);
const Exports_js_3 = __webpack_require__(79);
/**
 * Defines the base class Recognizer which mainly contains common event handlers.
 * @class Recognizer
 */
class Recognizer {
    /**
     * Creates and initializes an instance of a Recognizer
     * @constructor
     * @param {AudioConfig} audioInput - An optional audio input stream associated with the recognizer
     * @param {PropertyCollection} properties - A set of properties to set on the recognizer
     * @param {IConnectionFactory} connectionFactory - The factory class used to create a custom IConnection for the recognizer
     */
    constructor(audioConfig, properties, connectionFactory) {
        this.audioConfig = (audioConfig !== undefined) ? audioConfig : Exports_js_3.AudioConfig.fromDefaultMicrophoneInput();
        this.privDisposed = false;
        this.privProperties = properties.clone();
        this.privConnectionFactory = connectionFactory;
        this.implCommonRecognizerSetup();
    }
    /**
     * Dispose of associated resources.
     * @member Recognizer.prototype.close
     * @function
     * @public
     */
    close(cb, errorCb) {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposed);
        Exports_js_2.marshalPromiseToCallbacks(this.dispose(true), cb, errorCb);
    }
    /**
     * @Internal
     * Internal data member to support fromRecognizer* pattern methods on other classes.
     * Do not use externally, object returned will change without warning or notice.
     */
    get internalData() {
        return this.privReco;
    }
    /**
     * This method performs cleanup of resources.
     * The Boolean parameter disposing indicates whether the method is called
     * from Dispose (if disposing is true) or from the finalizer (if disposing is false).
     * Derived classes should override this method to dispose resource if needed.
     * @member Recognizer.prototype.dispose
     * @function
     * @public
     * @param {boolean} disposing - Flag to request disposal.
     */
    async dispose(disposing) {
        if (this.privDisposed) {
            return;
        }
        this.privDisposed = true;
        if (disposing) {
            if (this.privReco) {
                await this.privReco.audioSource.turnOff();
                await this.privReco.dispose();
            }
        }
    }
    /**
     * This method returns the current state of the telemetry setting.
     * @member Recognizer.prototype.telemetryEnabled
     * @function
     * @public
     * @returns true if the telemetry is enabled, false otherwise.
     */
    static get telemetryEnabled() {
        return Exports_js_1.ServiceRecognizerBase.telemetryDataEnabled;
    }
    /**
     * This method globally enables or disables telemetry.
     * @member Recognizer.prototype.enableTelemetry
     * @function
     * @public
     * @param enabled - Global setting for telemetry collection.
     * If set to true, telemetry information like microphone errors,
     * recognition errors are collected and sent to Microsoft.
     * If set to false, no telemetry is sent to Microsoft.
     */
    static enableTelemetry(enabled) {
        Exports_js_1.ServiceRecognizerBase.telemetryDataEnabled = enabled;
    }
    // Does the generic recognizer setup that is common across all recognizer types.
    implCommonRecognizerSetup() {
        let osPlatform = (typeof window !== "undefined") ? "Browser" : "Node";
        let osName = "unknown";
        let osVersion = "unknown";
        if (typeof navigator !== "undefined") {
            osPlatform = osPlatform + "/" + navigator.platform;
            osName = navigator.userAgent;
            osVersion = navigator.appVersion;
        }
        const recognizerConfig = this.createRecognizerConfig(new Exports_js_1.SpeechServiceConfig(new Exports_js_1.Context(new Exports_js_1.OS(osPlatform, osName, osVersion))));
        this.privReco = this.createServiceRecognizer(Recognizer.getAuthFromProperties(this.privProperties), this.privConnectionFactory, this.audioConfig, recognizerConfig);
    }
    async recognizeOnceAsyncImpl(recognitionMode) {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposed);
        const ret = new Exports_js_2.Deferred();
        await this.implRecognizerStop();
        await this.privReco.recognize(recognitionMode, ret.resolve, ret.reject);
        const result = await ret.promise;
        await this.implRecognizerStop();
        return result;
    }
    async startContinuousRecognitionAsyncImpl(recognitionMode) {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposed);
        await this.implRecognizerStop();
        await this.privReco.recognize(recognitionMode, undefined, undefined);
    }
    async stopContinuousRecognitionAsyncImpl() {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposed);
        await this.implRecognizerStop();
    }
    async implRecognizerStop() {
        if (this.privReco) {
            await this.privReco.stopRecognizing();
        }
        return;
    }
    static getAuthFromProperties(properties) {
        const subscriptionKey = properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_Key, undefined);
        const authentication = (subscriptionKey && subscriptionKey !== "") ?
            new Exports_js_1.CognitiveSubscriptionKeyAuthentication(subscriptionKey) :
            new Exports_js_1.CognitiveTokenAuthentication(() => {
                const authorizationToken = properties.getProperty(Exports_js_3.PropertyId.SpeechServiceAuthorization_Token, undefined);
                return Promise.resolve(authorizationToken);
            }, () => {
                const authorizationToken = properties.getProperty(Exports_js_3.PropertyId.SpeechServiceAuthorization_Token, undefined);
                return Promise.resolve(authorizationToken);
            });
        return authentication;
    }
}
exports.Recognizer = Recognizer;



/***/ }),
/* 112 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpeechRecognizer = void 0;
const Exports_js_1 = __webpack_require__(2);
const Exports_js_2 = __webpack_require__(4);
const Contracts_js_1 = __webpack_require__(64);
const Exports_js_3 = __webpack_require__(79);
/**
 * Performs speech recognition from microphone, file, or other audio input streams, and gets transcribed text as result.
 * @class SpeechRecognizer
 */
class SpeechRecognizer extends Exports_js_3.Recognizer {
    /**
     * SpeechRecognizer constructor.
     * @constructor
     * @param {SpeechConfig} speechConfig - an set of initial properties for this recognizer
     * @param {AudioConfig} audioConfig - An optional audio configuration associated with the recognizer
     */
    constructor(speechConfig, audioConfig) {
        const speechConfigImpl = speechConfig;
        Contracts_js_1.Contracts.throwIfNull(speechConfigImpl, "speechConfig");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(speechConfigImpl.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_RecoLanguage), Exports_js_3.PropertyId[Exports_js_3.PropertyId.SpeechServiceConnection_RecoLanguage]);
        super(audioConfig, speechConfigImpl.properties, new Exports_js_1.SpeechConnectionFactory());
        this.privDisposedRecognizer = false;
    }
    /**
     * SpeechRecognizer constructor.
     * @constructor
     * @param {SpeechConfig} speechConfig - an set of initial properties for this recognizer
     * @param {AutoDetectSourceLanguageConfig} autoDetectSourceLanguageConfig - An source language detection configuration associated with the recognizer
     * @param {AudioConfig} audioConfig - An optional audio configuration associated with the recognizer
     */
    static FromConfig(speechConfig, autoDetectSourceLanguageConfig, audioConfig) {
        const speechConfigImpl = speechConfig;
        autoDetectSourceLanguageConfig.properties.mergeTo(speechConfigImpl.properties);
        const recognizer = new SpeechRecognizer(speechConfig, audioConfig);
        return recognizer;
    }
    /**
     * Gets the endpoint id of a customized speech model that is used for speech recognition.
     * @member SpeechRecognizer.prototype.endpointId
     * @function
     * @public
     * @returns {string} the endpoint id of a customized speech model that is used for speech recognition.
     */
    get endpointId() {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedRecognizer);
        return this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_EndpointId, "00000000-0000-0000-0000-000000000000");
    }
    /**
     * Gets the authorization token used to communicate with the service.
     * @member SpeechRecognizer.prototype.authorizationToken
     * @function
     * @public
     * @returns {string} Authorization token.
     */
    get authorizationToken() {
        return this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceAuthorization_Token);
    }
    /**
     * Gets/Sets the authorization token used to communicate with the service.
     * @member SpeechRecognizer.prototype.authorizationToken
     * @function
     * @public
     * @param {string} token - Authorization token.
     */
    set authorizationToken(token) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(token, "token");
        this.properties.setProperty(Exports_js_3.PropertyId.SpeechServiceAuthorization_Token, token);
    }
    /**
     * Gets the spoken language of recognition.
     * @member SpeechRecognizer.prototype.speechRecognitionLanguage
     * @function
     * @public
     * @returns {string} The spoken language of recognition.
     */
    get speechRecognitionLanguage() {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedRecognizer);
        return this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_RecoLanguage);
    }
    /**
     * Gets the output format of recognition.
     * @member SpeechRecognizer.prototype.outputFormat
     * @function
     * @public
     * @returns {OutputFormat} The output format of recognition.
     */
    get outputFormat() {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedRecognizer);
        if (this.properties.getProperty(Exports_js_1.OutputFormatPropertyName, Exports_js_3.OutputFormat[Exports_js_3.OutputFormat.Simple]) === Exports_js_3.OutputFormat[Exports_js_3.OutputFormat.Simple]) {
            return Exports_js_3.OutputFormat.Simple;
        }
        else {
            return Exports_js_3.OutputFormat.Detailed;
        }
    }
    /**
     * The collection of properties and their values defined for this SpeechRecognizer.
     * @member SpeechRecognizer.prototype.properties
     * @function
     * @public
     * @returns {PropertyCollection} The collection of properties and their values defined for this SpeechRecognizer.
     */
    get properties() {
        return this.privProperties;
    }
    /**
     * Starts speech recognition, and stops after the first utterance is recognized.
     * The task returns the recognition text as result.
     * Note: RecognizeOnceAsync() returns when the first utterance has been recognized,
     * so it is suitable only for single shot recognition
     * like command or query. For long-running recognition, use StartContinuousRecognitionAsync() instead.
     * @member SpeechRecognizer.prototype.recognizeOnceAsync
     * @function
     * @public
     * @param cb - Callback that received the SpeechRecognitionResult.
     * @param err - Callback invoked in case of an error.
     */
    recognizeOnceAsync(cb, err) {
        Exports_js_2.marshalPromiseToCallbacks(this.recognizeOnceAsyncImpl(Exports_js_1.RecognitionMode.Interactive), cb, err);
    }
    /**
     * Starts speech recognition, until stopContinuousRecognitionAsync() is called.
     * User must subscribe to events to receive recognition results.
     * @member SpeechRecognizer.prototype.startContinuousRecognitionAsync
     * @function
     * @public
     * @param cb - Callback invoked once the recognition has started.
     * @param err - Callback invoked in case of an error.
     */
    startContinuousRecognitionAsync(cb, err) {
        Exports_js_2.marshalPromiseToCallbacks(this.startContinuousRecognitionAsyncImpl(Exports_js_1.RecognitionMode.Conversation), cb, err);
    }
    /**
     * Stops continuous speech recognition.
     * @member SpeechRecognizer.prototype.stopContinuousRecognitionAsync
     * @function
     * @public
     * @param cb - Callback invoked once the recognition has stopped.
     * @param err - Callback invoked in case of an error.
     */
    stopContinuousRecognitionAsync(cb, err) {
        Exports_js_2.marshalPromiseToCallbacks(this.stopContinuousRecognitionAsyncImpl(), cb, err);
    }
    /**
     * Starts speech recognition with keyword spotting, until
     * stopKeywordRecognitionAsync() is called.
     * User must subscribe to events to receive recognition results.
     * Note: Key word spotting functionality is only available on the
     * Speech Devices SDK. This functionality is currently not included in the SDK itself.
     * @member SpeechRecognizer.prototype.startKeywordRecognitionAsync
     * @function
     * @public
     * @param {KeywordRecognitionModel} model The keyword recognition model that
     * specifies the keyword to be recognized.
     * @param cb - Callback invoked once the recognition has started.
     * @param err - Callback invoked in case of an error.
     */
    startKeywordRecognitionAsync(model, cb, err) {
        Contracts_js_1.Contracts.throwIfNull(model, "model");
        if (!!err) {
            err("Not yet implemented.");
        }
    }
    /**
     * Stops continuous speech recognition.
     * Note: Key word spotting functionality is only available on the
     * Speech Devices SDK. This functionality is currently not included in the SDK itself.
     * @member SpeechRecognizer.prototype.stopKeywordRecognitionAsync
     * @function
     * @public
     * @param cb - Callback invoked once the recognition has stopped.
     * @param err - Callback invoked in case of an error.
     */
    stopKeywordRecognitionAsync(cb) {
        if (!!cb) {
            cb();
        }
    }
    /**
     * closes all external resources held by an instance of this class.
     * @member SpeechRecognizer.prototype.close
     * @function
     * @public
     */
    close(cb, errorCb) {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedRecognizer);
        Exports_js_2.marshalPromiseToCallbacks(this.dispose(true), cb, errorCb);
    }
    /**
     * Disposes any resources held by the object.
     * @member SpeechRecognizer.prototype.dispose
     * @function
     * @public
     * @param {boolean} disposing - true if disposing the object.
     */
    async dispose(disposing) {
        if (this.privDisposedRecognizer) {
            return;
        }
        if (disposing) {
            this.privDisposedRecognizer = true;
            await this.implRecognizerStop();
        }
        await super.dispose(disposing);
    }
    createRecognizerConfig(speechConfig) {
        return new Exports_js_1.RecognizerConfig(speechConfig, this.privProperties);
    }
    createServiceRecognizer(authentication, connectionFactory, audioConfig, recognizerConfig) {
        const configImpl = audioConfig;
        return new Exports_js_1.SpeechServiceRecognizer(authentication, connectionFactory, configImpl, recognizerConfig, this);
    }
}
exports.SpeechRecognizer = SpeechRecognizer;



/***/ }),
/* 113 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntentRecognizer = void 0;
const Exports_js_1 = __webpack_require__(2);
const Exports_js_2 = __webpack_require__(4);
const Contracts_js_1 = __webpack_require__(64);
const Exports_js_3 = __webpack_require__(79);
/**
 * Intent recognizer.
 * @class
 */
class IntentRecognizer extends Exports_js_3.Recognizer {
    /**
     * Initializes an instance of the IntentRecognizer.
     * @constructor
     * @param {SpeechConfig} speechConfig - The set of configuration properties.
     * @param {AudioConfig} audioConfig - An optional audio input config associated with the recognizer
     */
    constructor(speechConfig, audioConfig) {
        Contracts_js_1.Contracts.throwIfNullOrUndefined(speechConfig, "speechConfig");
        const configImpl = speechConfig;
        Contracts_js_1.Contracts.throwIfNullOrUndefined(configImpl, "speechConfig");
        super(audioConfig, configImpl.properties, new Exports_js_1.IntentConnectionFactory());
        this.privAddedIntents = [];
        this.privAddedLmIntents = {};
        this.privDisposedIntentRecognizer = false;
        this.privProperties = configImpl.properties;
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_RecoLanguage), Exports_js_3.PropertyId[Exports_js_3.PropertyId.SpeechServiceConnection_RecoLanguage]);
    }
    /**
     * Gets the spoken language of recognition.
     * @member IntentRecognizer.prototype.speechRecognitionLanguage
     * @function
     * @public
     * @returns {string} the spoken language of recognition.
     */
    get speechRecognitionLanguage() {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
        return this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_RecoLanguage);
    }
    /**
     * Gets the authorization token used to communicate with the service.
     * @member IntentRecognizer.prototype.authorizationToken
     * @function
     * @public
     * @returns {string} Authorization token.
     */
    get authorizationToken() {
        return this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceAuthorization_Token);
    }
    /**
     * Gets/Sets the authorization token used to communicate with the service.
     * Note: Please use a token derived from your LanguageUnderstanding subscription key for the Intent recognizer.
     * @member IntentRecognizer.prototype.authorizationToken
     * @function
     * @public
     * @param {string} value - Authorization token.
     */
    set authorizationToken(value) {
        this.properties.setProperty(Exports_js_3.PropertyId.SpeechServiceAuthorization_Token, value);
    }
    /**
     * The collection of properties and their values defined for this IntentRecognizer.
     * @member IntentRecognizer.prototype.properties
     * @function
     * @public
     * @returns {PropertyCollection} The collection of properties and their
     * values defined for this IntentRecognizer.
     */
    get properties() {
        return this.privProperties;
    }
    /**
     * Starts intent recognition, and stops after the first utterance is recognized.
     * The task returns the recognition text and intent as result.
     * Note: RecognizeOnceAsync() returns when the first utterance has been recognized,
     * so it is suitable only for single shot recognition like command or query.
     * For long-running recognition, use StartContinuousRecognitionAsync() instead.
     * @member IntentRecognizer.prototype.recognizeOnceAsync
     * @function
     * @public
     * @param cb - Callback that received the recognition has finished with an IntentRecognitionResult.
     * @param err - Callback invoked in case of an error.
     */
    recognizeOnceAsync(cb, err) {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
        if (Object.keys(this.privAddedLmIntents).length !== 0 || undefined !== this.privUmbrellaIntent) {
            const context = this.buildSpeechContext();
            this.privReco.speechContext.setSection("intent", context.Intent);
            this.privReco.dynamicGrammar.addReferenceGrammar(context.ReferenceGrammars);
            const intentReco = this.privReco;
            intentReco.setIntents(this.privAddedLmIntents, this.privUmbrellaIntent);
        }
        Exports_js_2.marshalPromiseToCallbacks(this.recognizeOnceAsyncImpl(Exports_js_1.RecognitionMode.Interactive), cb, err);
    }
    /**
     * Starts speech recognition, until stopContinuousRecognitionAsync() is called.
     * User must subscribe to events to receive recognition results.
     * @member IntentRecognizer.prototype.startContinuousRecognitionAsync
     * @function
     * @public
     * @param cb - Callback invoked once the recognition has started.
     * @param err - Callback invoked in case of an error.
     */
    startContinuousRecognitionAsync(cb, err) {
        if (Object.keys(this.privAddedLmIntents).length !== 0 || undefined !== this.privUmbrellaIntent) {
            const context = this.buildSpeechContext();
            this.privReco.speechContext.setSection("intent", context.Intent);
            this.privReco.dynamicGrammar.addReferenceGrammar(context.ReferenceGrammars);
            const intentReco = this.privReco;
            intentReco.setIntents(this.privAddedLmIntents, this.privUmbrellaIntent);
        }
        Exports_js_2.marshalPromiseToCallbacks(this.startContinuousRecognitionAsyncImpl(Exports_js_1.RecognitionMode.Conversation), cb, err);
    }
    /**
     * Stops continuous intent recognition.
     * @member IntentRecognizer.prototype.stopContinuousRecognitionAsync
     * @function
     * @public
     * @param cb - Callback invoked once the recognition has stopped.
     * @param err - Callback invoked in case of an error.
     */
    stopContinuousRecognitionAsync(cb, err) {
        Exports_js_2.marshalPromiseToCallbacks(this.stopContinuousRecognitionAsyncImpl(), cb, err);
    }
    /**
     * Starts speech recognition with keyword spotting, until stopKeywordRecognitionAsync() is called.
     * User must subscribe to events to receive recognition results.
     * Note: Key word spotting functionality is only available on the Speech Devices SDK.
     * This functionality is currently not included in the SDK itself.
     * @member IntentRecognizer.prototype.startKeywordRecognitionAsync
     * @function
     * @public
     * @param {KeywordRecognitionModel} model - The keyword recognition model that specifies the keyword to be recognized.
     * @param cb - Callback invoked once the recognition has started.
     * @param err - Callback invoked in case of an error.
     */
    startKeywordRecognitionAsync(model, cb, err) {
        Contracts_js_1.Contracts.throwIfNull(model, "model");
        if (!!err) {
            err("Not yet implemented.");
        }
    }
    /**
     * Stops continuous speech recognition.
     * Note: Key word spotting functionality is only available on the Speech Devices SDK.
     * This functionality is currently not included in the SDK itself.
     * @member IntentRecognizer.prototype.stopKeywordRecognitionAsync
     * @function
     * @public
     * @param cb - Callback invoked once the recognition has stopped.
     * @param err - Callback invoked in case of an error.
     */
    stopKeywordRecognitionAsync(cb, err) {
        if (!!cb) {
            try {
                cb();
            }
            catch (e) {
                if (!!err) {
                    err(e);
                }
            }
        }
    }
    /**
     * Adds a phrase that should be recognized as intent.
     * @member IntentRecognizer.prototype.addIntent
     * @function
     * @public
     * @param {string} intentId - A String that represents the identifier of the intent to be recognized.
     * @param {string} phrase - A String that specifies the phrase representing the intent.
     */
    addIntent(simplePhrase, intentId) {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(intentId, "intentId");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(simplePhrase, "simplePhrase");
        this.privAddedIntents.push([intentId, simplePhrase]);
    }
    /**
     * Adds an intent from Language Understanding service for recognition.
     * @member IntentRecognizer.prototype.addIntentWithLanguageModel
     * @function
     * @public
     * @param {string} intentId - A String that represents the identifier of the intent
     * to be recognized. Ignored if intentName is empty.
     * @param {string} model - The intent model from Language Understanding service.
     * @param {string} intentName - The intent name defined in the intent model. If it
     * is empty, all intent names defined in the model will be added.
     */
    addIntentWithLanguageModel(intentId, model, intentName) {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(intentId, "intentId");
        Contracts_js_1.Contracts.throwIfNull(model, "model");
        const modelImpl = model;
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(modelImpl.appId, "model.appId");
        this.privAddedLmIntents[intentId] = new Exports_js_1.AddedLmIntent(modelImpl, intentName);
    }
    /**
     * @summary Adds all intents from the specified Language Understanding Model.
     * @member IntentRecognizer.prototype.addAllIntents
     * @function
     * @public
     * @function
     * @public
     * @param {LanguageUnderstandingModel} model - The language understanding model containing the intents.
     * @param {string} intentId - A custom id String to be returned in the IntentRecognitionResult's getIntentId() method.
     */
    addAllIntents(model, intentId) {
        Contracts_js_1.Contracts.throwIfNull(model, "model");
        const modelImpl = model;
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(modelImpl.appId, "model.appId");
        this.privUmbrellaIntent = new Exports_js_1.AddedLmIntent(modelImpl, intentId);
    }
    /**
     * closes all external resources held by an instance of this class.
     * @member IntentRecognizer.prototype.close
     * @function
     * @public
     */
    close(cb, errorCb) {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedIntentRecognizer);
        Exports_js_2.marshalPromiseToCallbacks(this.dispose(true), cb, errorCb);
    }
    createRecognizerConfig(speechConfig) {
        return new Exports_js_1.RecognizerConfig(speechConfig, this.privProperties);
    }
    createServiceRecognizer(authentication, connectionFactory, audioConfig, recognizerConfig) {
        const audioImpl = audioConfig;
        return new Exports_js_1.IntentServiceRecognizer(authentication, connectionFactory, audioImpl, recognizerConfig, this);
    }
    async dispose(disposing) {
        if (this.privDisposedIntentRecognizer) {
            return;
        }
        if (disposing) {
            this.privDisposedIntentRecognizer = true;
            await super.dispose(disposing);
        }
    }
    buildSpeechContext() {
        let appId;
        let region;
        let subscriptionKey;
        const refGrammers = [];
        if (undefined !== this.privUmbrellaIntent) {
            appId = this.privUmbrellaIntent.modelImpl.appId;
            region = this.privUmbrellaIntent.modelImpl.region;
            subscriptionKey = this.privUmbrellaIntent.modelImpl.subscriptionKey;
        }
        // Build the reference grammer array.
        for (const intentId of Object.keys(this.privAddedLmIntents)) {
            const addedLmIntent = this.privAddedLmIntents[intentId];
            // validate all the same model, region, and key...
            if (appId === undefined) {
                appId = addedLmIntent.modelImpl.appId;
            }
            else {
                if (appId !== addedLmIntent.modelImpl.appId) {
                    throw new Error("Intents must all be from the same LUIS model");
                }
            }
            if (region === undefined) {
                region = addedLmIntent.modelImpl.region;
            }
            else {
                if (region !== addedLmIntent.modelImpl.region) {
                    throw new Error("Intents must all be from the same LUIS model in a single region");
                }
            }
            if (subscriptionKey === undefined) {
                subscriptionKey = addedLmIntent.modelImpl.subscriptionKey;
            }
            else {
                if (subscriptionKey !== addedLmIntent.modelImpl.subscriptionKey) {
                    throw new Error("Intents must all use the same subscription key");
                }
            }
            const grammer = "luis/" + appId + "-PRODUCTION#" + intentId;
            refGrammers.push(grammer);
        }
        return {
            Intent: {
                id: appId,
                key: (subscriptionKey === undefined) ? this.privProperties.getProperty(Exports_js_3.PropertyId[Exports_js_3.PropertyId.SpeechServiceConnection_Key]) : subscriptionKey,
                provider: "LUIS",
            },
            ReferenceGrammars: (undefined === this.privUmbrellaIntent) ? refGrammers : ["luis/" + appId + "-PRODUCTION"],
        };
    }
}
exports.IntentRecognizer = IntentRecognizer;



/***/ }),
/* 114 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VoiceProfileType = void 0;
/**
 * Output format
 * @class VoiceProfileType
 */
var VoiceProfileType;
(function (VoiceProfileType) {
    /**
     * Text independent speaker identification
     * @member VoiceProfileType.TextIndependentIdentification
     */
    VoiceProfileType[VoiceProfileType["TextIndependentIdentification"] = 0] = "TextIndependentIdentification";
    /**
     * Text dependent speaker verification
     * @member VoiceProfileType.TextDependentVerification
     */
    VoiceProfileType[VoiceProfileType["TextDependentVerification"] = 1] = "TextDependentVerification";
    /**
     * Text independent speaker verification
     * @member VoiceProfileType.TextIndependentVerification
     */
    VoiceProfileType[VoiceProfileType["TextIndependentVerification"] = 2] = "TextIndependentVerification";
})(VoiceProfileType = exports.VoiceProfileType || (exports.VoiceProfileType = {}));



/***/ }),
/* 115 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TranslationRecognizer = void 0;
const Exports_js_1 = __webpack_require__(2);
const Exports_js_2 = __webpack_require__(4);
const Connection_js_1 = __webpack_require__(116);
const Contracts_js_1 = __webpack_require__(64);
const Exports_js_3 = __webpack_require__(79);
/**
 * Translation recognizer
 * @class TranslationRecognizer
 */
class TranslationRecognizer extends Exports_js_3.Recognizer {
    /**
     * Initializes an instance of the TranslationRecognizer.
     * @constructor
     * @param {SpeechTranslationConfig} speechConfig - Set of properties to configure this recognizer.
     * @param {AudioConfig} audioConfig - An optional audio config associated with the recognizer
     * @param {IConnectionFactory} connectionFactory - An optional connection factory to use to generate the endpoint URIs, headers to set, etc...
     */
    constructor(speechConfig, audioConfig, connectionFactory) {
        const configImpl = speechConfig;
        Contracts_js_1.Contracts.throwIfNull(configImpl, "speechConfig");
        super(audioConfig, configImpl.properties, connectionFactory || new Exports_js_1.TranslationConnectionFactory());
        this.privDisposedTranslationRecognizer = false;
        if (this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_TranslationVoice, undefined) !== undefined) {
            Contracts_js_1.Contracts.throwIfNullOrWhitespace(this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_TranslationVoice), Exports_js_3.PropertyId[Exports_js_3.PropertyId.SpeechServiceConnection_TranslationVoice]);
        }
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_TranslationToLanguages), Exports_js_3.PropertyId[Exports_js_3.PropertyId.SpeechServiceConnection_TranslationToLanguages]);
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_RecoLanguage), Exports_js_3.PropertyId[Exports_js_3.PropertyId.SpeechServiceConnection_RecoLanguage]);
    }
    /**
     * TranslationRecognizer constructor.
     * @constructor
     * @param {SpeechTranslationConfig} speechTranslationConfig - an set of initial properties for this recognizer
     * @param {AutoDetectSourceLanguageConfig} autoDetectSourceLanguageConfig - An source language detection configuration associated with the recognizer
     * @param {AudioConfig} audioConfig - An optional audio configuration associated with the recognizer
     */
    static FromConfig(speechTranslationConfig, autoDetectSourceLanguageConfig, audioConfig) {
        const speechTranslationConfigImpl = speechTranslationConfig;
        autoDetectSourceLanguageConfig.properties.mergeTo(speechTranslationConfigImpl.properties);
        return new TranslationRecognizer(speechTranslationConfig, audioConfig);
    }
    /**
     * Gets the language name that was set when the recognizer was created.
     * @member TranslationRecognizer.prototype.speechRecognitionLanguage
     * @function
     * @public
     * @returns {string} Gets the language name that was set when the recognizer was created.
     */
    get speechRecognitionLanguage() {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
        return this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_RecoLanguage);
    }
    /**
     * Gets target languages for translation that were set when the recognizer was created.
     * The language is specified in BCP-47 format. The translation will provide translated text for each of language.
     * @member TranslationRecognizer.prototype.targetLanguages
     * @function
     * @public
     * @returns {string[]} Gets target languages for translation that were set when the recognizer was created.
     */
    get targetLanguages() {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
        return this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_TranslationToLanguages).split(",");
    }
    /**
     * Gets the name of output voice.
     * @member TranslationRecognizer.prototype.voiceName
     * @function
     * @public
     * @returns {string} the name of output voice.
     */
    get voiceName() {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
        return this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_TranslationVoice, undefined);
    }
    /**
     * The collection of properties and their values defined for this TranslationRecognizer.
     * @member TranslationRecognizer.prototype.properties
     * @function
     * @public
     * @returns {PropertyCollection} The collection of properties and their values defined for this TranslationRecognizer.
     */
    get properties() {
        return this.privProperties;
    }
    /**
     * Gets the authorization token used to communicate with the service.
     * @member TranslationRecognizer.prototype.authorizationToken
     * @function
     * @public
     * @returns {string} Authorization token.
     */
    get authorizationToken() {
        return this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceAuthorization_Token);
    }
    /**
     * Gets/Sets the authorization token used to communicate with the service.
     * @member TranslationRecognizer.prototype.authorizationToken
     * @function
     * @public
     * @param {string} value - Authorization token.
     */
    set authorizationToken(value) {
        this.properties.setProperty(Exports_js_3.PropertyId.SpeechServiceAuthorization_Token, value);
    }
    /**
     * Starts recognition and translation, and stops after the first utterance is recognized.
     * The task returns the translation text as result.
     * Note: recognizeOnceAsync returns when the first utterance has been recognized, so it is suitable only
     * for single shot recognition like command or query. For long-running recognition,
     * use startContinuousRecognitionAsync() instead.
     * @member TranslationRecognizer.prototype.recognizeOnceAsync
     * @function
     * @public
     * @param cb - Callback that received the result when the translation has completed.
     * @param err - Callback invoked in case of an error.
     */
    recognizeOnceAsync(cb, err) {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
        Exports_js_2.marshalPromiseToCallbacks(this.recognizeOnceAsyncImpl(Exports_js_1.RecognitionMode.Interactive), cb, err);
    }
    /**
     * Starts recognition and translation, until stopContinuousRecognitionAsync() is called.
     * User must subscribe to events to receive translation results.
     * @member TranslationRecognizer.prototype.startContinuousRecognitionAsync
     * @function
     * @public
     * @param cb - Callback that received the translation has started.
     * @param err - Callback invoked in case of an error.
     */
    startContinuousRecognitionAsync(cb, err) {
        Exports_js_2.marshalPromiseToCallbacks(this.startContinuousRecognitionAsyncImpl(Exports_js_1.RecognitionMode.Conversation), cb, err);
    }
    /**
     * Stops continuous recognition and translation.
     * @member TranslationRecognizer.prototype.stopContinuousRecognitionAsync
     * @function
     * @public
     * @param cb - Callback that received the translation has stopped.
     * @param err - Callback invoked in case of an error.
     */
    stopContinuousRecognitionAsync(cb, err) {
        Exports_js_2.marshalPromiseToCallbacks(this.stopContinuousRecognitionAsyncImpl(), cb, err);
    }
    /**
     * dynamically remove a language from list of target language
     * (can be used while recognition is ongoing)
     * @member TranslationRecognizer.prototype.removeTargetLanguage
     * @function
     * @param lang - language to be removed
     * @public
     */
    removeTargetLanguage(lang) {
        Contracts_js_1.Contracts.throwIfNullOrUndefined(lang, "language to be removed");
        if (this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_TranslationToLanguages, undefined) !== undefined) {
            const languages = this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_TranslationToLanguages).split(",");
            const index = languages.indexOf(lang);
            if (index > -1) {
                languages.splice(index, 1);
                this.properties.setProperty(Exports_js_3.PropertyId.SpeechServiceConnection_TranslationToLanguages, languages.join(","));
                this.updateLanguages(languages);
            }
        }
    }
    /**
     * dynamically add a language to list of target language
     * (can be used while recognition is ongoing)
     * @member TranslationRecognizer.prototype.addTargetLanguage
     * @function
     * @param lang - language to be added
     * @public
     */
    addTargetLanguage(lang) {
        Contracts_js_1.Contracts.throwIfNullOrUndefined(lang, "language to be added");
        let languages = [];
        if (this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_TranslationToLanguages, undefined) !== undefined) {
            languages = this.properties.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_TranslationToLanguages).split(",");
            if (!languages.includes(lang)) {
                languages.push(lang);
                this.properties.setProperty(Exports_js_3.PropertyId.SpeechServiceConnection_TranslationToLanguages, languages.join(","));
            }
        }
        else {
            this.properties.setProperty(Exports_js_3.PropertyId.SpeechServiceConnection_TranslationToLanguages, lang);
            languages = [lang];
        }
        this.updateLanguages(languages);
    }
    /**
     * closes all external resources held by an instance of this class.
     * @member TranslationRecognizer.prototype.close
     * @function
     * @public
     */
    close(cb, errorCb) {
        Contracts_js_1.Contracts.throwIfDisposed(this.privDisposedTranslationRecognizer);
        Exports_js_2.marshalPromiseToCallbacks(this.dispose(true), cb, errorCb);
    }
    /**
     * handles ConnectionEstablishedEvent for conversation translation scenarios.
     * @member TranslationRecognizer.prototype.onConnection
     * @function
     * @public
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onConnection() { }
    async dispose(disposing) {
        if (this.privDisposedTranslationRecognizer) {
            return;
        }
        this.privDisposedTranslationRecognizer = true;
        if (disposing) {
            await this.implRecognizerStop();
            await super.dispose(disposing);
        }
    }
    createRecognizerConfig(speechConfig) {
        return new Exports_js_1.RecognizerConfig(speechConfig, this.privProperties);
    }
    createServiceRecognizer(authentication, connectionFactory, audioConfig, recognizerConfig) {
        const configImpl = audioConfig;
        return new Exports_js_1.TranslationServiceRecognizer(authentication, connectionFactory, configImpl, recognizerConfig, this);
    }
    updateLanguages(languages) {
        const conn = Connection_js_1.Connection.fromRecognizer(this);
        if (!!conn) {
            conn.setMessageProperty("speech.context", "translationcontext", { to: languages });
            conn.sendMessageAsync("event", JSON.stringify({
                id: "translation",
                name: "updateLanguage",
                to: languages
            }));
        }
    }
}
exports.TranslationRecognizer = TranslationRecognizer;



/***/ }),
/* 116 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.md file in the project root for full license information.
//
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Connection = void 0;
const Exports_js_1 = __webpack_require__(2);
const Exports_js_2 = __webpack_require__(4);
const ConnectionMessage_js_1 = __webpack_require__(117);
const Contracts_js_1 = __webpack_require__(64);
const Exports_js_3 = __webpack_require__(79);
/**
 * Connection is a proxy class for managing connection to the speech service of the specified Recognizer.
 * By default, a Recognizer autonomously manages connection to service when needed.
 * The Connection class provides additional methods for users to explicitly open or close a connection and
 * to subscribe to connection status changes.
 * The use of Connection is optional, and mainly for scenarios where fine tuning of application
 * behavior based on connection status is needed. Users can optionally call Open() to manually set up a connection
 * in advance before starting recognition on the Recognizer associated with this Connection.
 * If the Recognizer needs to connect or disconnect to service, it will
 * setup or shutdown the connection independently. In this case the Connection will be notified by change of connection
 * status via Connected/Disconnected events.
 * Added in version 1.2.1.
 */
class Connection {
    /**
     * Gets the Connection instance from the specified recognizer.
     * @param recognizer The recognizer associated with the connection.
     * @return The Connection instance of the recognizer.
     */
    static fromRecognizer(recognizer) {
        const recoBase = recognizer.internalData;
        const ret = new Connection();
        ret.privInternalData = recoBase;
        ret.setupEvents();
        return ret;
    }
    /**
     * Gets the Connection instance from the specified synthesizer.
     * @param synthesizer The synthesizer associated with the connection.
     * @return The Connection instance of the synthesizer.
     */
    static fromSynthesizer(synthesizer) {
        const synthBase = synthesizer.internalData;
        const ret = new Connection();
        ret.privInternalData = synthBase;
        ret.setupEvents();
        return ret;
    }
    /**
     * Starts to set up connection to the service.
     * Users can optionally call openConnection() to manually set up a connection in advance before starting recognition on the
     * Recognizer associated with this Connection. After starting recognition, calling Open() will have no effect
     *
     * Note: On return, the connection might not be ready yet. Please subscribe to the Connected event to
     * be notified when the connection is established.
     */
    openConnection(cb, err) {
        Exports_js_2.marshalPromiseToCallbacks(this.privInternalData.connect(), cb, err);
    }
    /**
     * Closes the connection the service.
     * Users can optionally call closeConnection() to manually shutdown the connection of the associated Recognizer.
     *
     * If closeConnection() is called during recognition, recognition will fail and cancel with an error.
     */
    closeConnection(cb, err) {
        if (this.privInternalData instanceof Exports_js_1.SynthesisAdapterBase) {
            throw new Error("Disconnecting a synthesizer's connection is currently not supported");
        }
        else {
            Exports_js_2.marshalPromiseToCallbacks(this.privInternalData.disconnect(), cb, err);
        }
    }
    /**
     * Appends a parameter in a message to service.
     * Added in version 1.12.1.
     * @param path The path of the network message.
     * @param propertyName Name of the property
     * @param propertyValue Value of the property. This is a json string.
     */
    setMessageProperty(path, propertyName, propertyValue) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(propertyName, "propertyName");
        if (this.privInternalData instanceof Exports_js_1.ServiceRecognizerBase) {
            if (path.toLowerCase() !== "speech.context") {
                throw new Error("Only speech.context message property sets are currently supported for recognizer");
            }
            else {
                this.privInternalData.speechContext.setSection(propertyName, propertyValue);
            }
        }
        else if (this.privInternalData instanceof Exports_js_1.SynthesisAdapterBase) {
            if (path.toLowerCase() !== "synthesis.context") {
                throw new Error("Only synthesis.context message property sets are currently supported for synthesizer");
            }
            else {
                this.privInternalData.synthesisContext.setSection(propertyName, propertyValue);
            }
        }
    }
    /**
     * Sends a message to the speech service.
     * Added in version 1.13.0.
     * @param path The WebSocket path of the message
     * @param payload The payload of the message. This is a json string or a ArrayBuffer.
     * @param success A callback to indicate success.
     * @param error A callback to indicate an error.
     */
    sendMessageAsync(path, payload, success, error) {
        Exports_js_2.marshalPromiseToCallbacks(this.privInternalData.sendNetworkMessage(path, payload), success, error);
    }
    /**
     * Dispose of associated resources.
     */
    close() {
        /* eslint-disable no-empty */
    }
    setupEvents() {
        this.privEventListener = this.privInternalData.connectionEvents.attach((connectionEvent) => {
            if (connectionEvent.name === "ConnectionEstablishedEvent") {
                if (!!this.connected) {
                    this.connected(new Exports_js_3.ConnectionEventArgs(connectionEvent.connectionId));
                }
            }
            else if (connectionEvent.name === "ConnectionClosedEvent") {
                if (!!this.disconnected) {
                    this.disconnected(new Exports_js_3.ConnectionEventArgs(connectionEvent.connectionId));
                }
            }
            else if (connectionEvent.name === "ConnectionMessageSentEvent") {
                if (!!this.messageSent) {
                    this.messageSent(new Exports_js_3.ConnectionMessageEventArgs(new ConnectionMessage_js_1.ConnectionMessageImpl(connectionEvent.message)));
                }
            }
            else if (connectionEvent.name === "ConnectionMessageReceivedEvent") {
                if (!!this.messageReceived) {
                    this.messageReceived(new Exports_js_3.ConnectionMessageEventArgs(new ConnectionMessage_js_1.ConnectionMessageImpl(connectionEvent.message)));
                }
            }
        });
        this.privServiceEventListener = this.privInternalData.serviceEvents.attach((e) => {
            if (!!this.receivedServiceMessage) {
                this.receivedServiceMessage(new Exports_js_3.ServiceEventArgs(e.jsonString, e.name));
            }
        });
    }
}
exports.Connection = Connection;



/***/ }),
/* 117 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.md file in the project root for full license information.
//
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionMessageImpl = exports.ConnectionMessage = void 0;
// eslint-disable-next-line max-classes-per-file
const HeaderNames_js_1 = __webpack_require__(54);
const Exports_js_1 = __webpack_require__(4);
const PropertyCollection_js_1 = __webpack_require__(109);
const PropertyId_js_1 = __webpack_require__(110);
/**
 * ConnectionMessage represents implementation specific messages sent to and received from
 * the speech service. These messages are provided for debugging purposes and should not
 * be used for production use cases with the Azure Cognitive Services Speech Service.
 * Messages sent to and received from the Speech Service are subject to change without
 * notice. This includes message contents, headers, payloads, ordering, etc.
 * Added in version 1.11.0.
 */
class ConnectionMessage {
}
exports.ConnectionMessage = ConnectionMessage;
class ConnectionMessageImpl {
    constructor(message) {
        this.privConnectionMessage = message;
        this.privProperties = new PropertyCollection_js_1.PropertyCollection();
        if (!!this.privConnectionMessage.headers[HeaderNames_js_1.HeaderNames.ConnectionId]) {
            this.privProperties.setProperty(PropertyId_js_1.PropertyId.Speech_SessionId, this.privConnectionMessage.headers[HeaderNames_js_1.HeaderNames.ConnectionId]);
        }
        Object.keys(this.privConnectionMessage.headers).forEach((header) => {
            this.privProperties.setProperty(header, this.privConnectionMessage.headers[header]);
        });
    }
    /**
     * The message path.
     */
    get path() {
        return this.privConnectionMessage.headers[Object.keys(this.privConnectionMessage.headers).find((key) => key.toLowerCase() === "path".toLowerCase())];
    }
    /**
     * Checks to see if the ConnectionMessage is a text message.
     * See also IsBinaryMessage().
     */
    get isTextMessage() {
        return this.privConnectionMessage.messageType === Exports_js_1.MessageType.Text;
    }
    /**
     * Checks to see if the ConnectionMessage is a binary message.
     * See also GetBinaryMessage().
     */
    get isBinaryMessage() {
        return this.privConnectionMessage.messageType === Exports_js_1.MessageType.Binary;
    }
    /**
     * Gets the text message payload. Typically the text message content-type is
     * application/json. To determine other content-types use
     * Properties.GetProperty("Content-Type").
     */
    get TextMessage() {
        return this.privConnectionMessage.textBody;
    }
    /**
     * Gets the binary message payload.
     */
    get binaryMessage() {
        return this.privConnectionMessage.binaryBody;
    }
    /**
     * A collection of properties and their values defined for this <see cref="ConnectionMessage"/>.
     * Message headers can be accessed via this collection (e.g. "Content-Type").
     */
    get properties() {
        return this.privProperties;
    }
    /**
     * Returns a string that represents the connection message.
     */
    toString() {
        return "";
    }
}
exports.ConnectionMessageImpl = ConnectionMessageImpl;



/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Translations = void 0;
const Exports_js_1 = __webpack_require__(79);
/**
 * Represents collection of parameters and their values.
 * @class Translations
 */
class Translations {
    constructor() {
        // Use an PropertyCollection internally, just wrapping it to hide the | enum syntax it has.
        this.privMap = new Exports_js_1.PropertyCollection();
    }
    /**
     * Get the languages in the object in a String array.
     * @member Translations.prototype.languages
     * @function
     * @public
     * @returns {string[]} languages in translations object.
     */
    get languages() {
        return this.privMap.keys;
    }
    /**
     * Returns the parameter value in type String. The parameter must have the same type as String.
     * Currently only String, int and bool are allowed.
     * If the name is not available, the specified defaultValue is returned.
     * @member Translations.prototype.get
     * @function
     * @public
     * @param {string} key - The parameter name.
     * @param {string} def - The default value which is returned if the parameter is not available in the collection.
     * @returns {string} value of the parameter.
     */
    get(key, def) {
        return this.privMap.getProperty(key, def);
    }
    /**
     * Sets the String value of the parameter specified by name.
     * @member Translations.prototype.set
     * @function
     * @public
     * @param {string} key - The parameter name.
     * @param {string} value - The value of the parameter.
     */
    set(key, value) {
        this.privMap.setProperty(key, value);
    }
}
exports.Translations = Translations;



/***/ }),
/* 119 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoMatchReason = void 0;
/**
 * Defines the possible reasons a recognition result might not be recognized.
 * @class NoMatchReason
 */
var NoMatchReason;
(function (NoMatchReason) {
    /**
     * Indicates that speech was detected, but not recognized.
     * @member NoMatchReason.NotRecognized
     */
    NoMatchReason[NoMatchReason["NotRecognized"] = 0] = "NotRecognized";
    /**
     * Indicates that the start of the audio stream contained only silence,
     * and the service timed out waiting for speech.
     * @member NoMatchReason.InitialSilenceTimeout
     */
    NoMatchReason[NoMatchReason["InitialSilenceTimeout"] = 1] = "InitialSilenceTimeout";
    /**
     * Indicates that the start of the audio stream contained only noise,
     * and the service timed out waiting for speech.
     * @member NoMatchReason.InitialBabbleTimeout
     */
    NoMatchReason[NoMatchReason["InitialBabbleTimeout"] = 2] = "InitialBabbleTimeout";
})(NoMatchReason = exports.NoMatchReason || (exports.NoMatchReason = {}));



/***/ }),
/* 120 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoMatchDetails = void 0;
const Exports_js_1 = __webpack_require__(2);
const Exports_js_2 = __webpack_require__(79);
/**
 * Contains detailed information for NoMatch recognition results.
 * @class NoMatchDetails
 */
class NoMatchDetails {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {NoMatchReason} reason - The no-match reason.
     */
    constructor(reason) {
        this.privReason = reason;
    }
    /**
     * Creates an instance of NoMatchDetails object for the NoMatch SpeechRecognitionResults.
     * @member NoMatchDetails.fromResult
     * @function
     * @public
     * @param {SpeechRecognitionResult | IntentRecognitionResult | TranslationRecognitionResult}
     * result - The recognition result that was not recognized.
     * @returns {NoMatchDetails} The no match details object being created.
     */
    static fromResult(result) {
        const simpleSpeech = Exports_js_1.SimpleSpeechPhrase.fromJSON(result.json, 0); // Offset fixups are already done.
        let reason = Exports_js_2.NoMatchReason.NotRecognized;
        switch (simpleSpeech.RecognitionStatus) {
            case Exports_js_1.RecognitionStatus.BabbleTimeout:
                reason = Exports_js_2.NoMatchReason.InitialBabbleTimeout;
                break;
            case Exports_js_1.RecognitionStatus.InitialSilenceTimeout:
                reason = Exports_js_2.NoMatchReason.InitialSilenceTimeout;
                break;
            default:
                reason = Exports_js_2.NoMatchReason.NotRecognized;
                break;
        }
        return new NoMatchDetails(reason);
    }
    /**
     * The reason the recognition was canceled.
     * @member NoMatchDetails.prototype.reason
     * @function
     * @public
     * @returns {NoMatchReason} Specifies the reason canceled.
     */
    get reason() {
        return this.privReason;
    }
}
exports.NoMatchDetails = NoMatchDetails;



/***/ }),
/* 121 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TranslationRecognitionCanceledEventArgs = void 0;
/**
 * Define payload of speech recognition canceled result events.
 * @class TranslationRecognitionCanceledEventArgs
 */
class TranslationRecognitionCanceledEventArgs {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {string} sessionid - The session id.
     * @param {CancellationReason} cancellationReason - The cancellation reason.
     * @param {string} errorDetails - Error details, if provided.
     * @param {TranslationRecognitionResult} result - The result.
     */
    constructor(sessionid, cancellationReason, errorDetails, errorCode, result) {
        this.privCancelReason = cancellationReason;
        this.privErrorDetails = errorDetails;
        this.privResult = result;
        this.privSessionId = sessionid;
        this.privErrorCode = errorCode;
    }
    /**
     * Specifies the recognition result.
     * @member TranslationRecognitionCanceledEventArgs.prototype.result
     * @function
     * @public
     * @returns {TranslationRecognitionResult} the recognition result.
     */
    get result() {
        return this.privResult;
    }
    /**
     * Specifies the session identifier.
     * @member TranslationRecognitionCanceledEventArgs.prototype.sessionId
     * @function
     * @public
     * @returns {string} the session identifier.
     */
    get sessionId() {
        return this.privSessionId;
    }
    /**
     * The reason the recognition was canceled.
     * @member TranslationRecognitionCanceledEventArgs.prototype.reason
     * @function
     * @public
     * @returns {CancellationReason} Specifies the reason canceled.
     */
    get reason() {
        return this.privCancelReason;
    }
    /**
     * The error code in case of an unsuccessful recognition.
     * Added in version 1.1.0.
     * @return An error code that represents the error reason.
     */
    get errorCode() {
        return this.privErrorCode;
    }
    /**
     * In case of an unsuccessful recognition, provides details of the occurred error.
     * @member TranslationRecognitionCanceledEventArgs.prototype.errorDetails
     * @function
     * @public
     * @returns {string} A String that represents the error details.
     */
    get errorDetails() {
        return this.privErrorDetails;
    }
}
exports.TranslationRecognitionCanceledEventArgs = TranslationRecognitionCanceledEventArgs;



/***/ }),
/* 122 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntentRecognitionCanceledEventArgs = void 0;
const Exports_js_1 = __webpack_require__(79);
/**
 * Define payload of intent recognition canceled result events.
 * @class IntentRecognitionCanceledEventArgs
 */
class IntentRecognitionCanceledEventArgs extends Exports_js_1.IntentRecognitionEventArgs {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {CancellationReason} result - The result of the intent recognition.
     * @param {string} offset - The offset.
     * @param {IntentRecognitionResult} sessionId - The session id.
     */
    constructor(reason, errorDetails, errorCode, result, offset, sessionId) {
        super(result, offset, sessionId);
        this.privReason = reason;
        this.privErrorDetails = errorDetails;
        this.privErrorCode = errorCode;
    }
    /**
     * The reason the recognition was canceled.
     * @member IntentRecognitionCanceledEventArgs.prototype.reason
     * @function
     * @public
     * @returns {CancellationReason} Specifies the reason canceled.
     */
    get reason() {
        return this.privReason;
    }
    /**
     * The error code in case of an unsuccessful recognition.
     * Added in version 1.1.0.
     * @return An error code that represents the error reason.
     */
    get errorCode() {
        return this.privErrorCode;
    }
    /**
     * In case of an unsuccessful recognition, provides details of the occurred error.
     * @member IntentRecognitionCanceledEventArgs.prototype.errorDetails
     * @function
     * @public
     * @returns {string} A String that represents the error details.
     */
    get errorDetails() {
        return this.privErrorDetails;
    }
}
exports.IntentRecognitionCanceledEventArgs = IntentRecognitionCanceledEventArgs;



/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CancellationDetailsBase = void 0;
/**
 * Contains detailed information about why a result was canceled.
 * @class CancellationDetailsBase
 */
class CancellationDetailsBase {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {CancellationReason} reason - The cancellation reason.
     * @param {string} errorDetails - The error details, if provided.
     */
    constructor(reason, errorDetails, errorCode) {
        this.privReason = reason;
        this.privErrorDetails = errorDetails;
        this.privErrorCode = errorCode;
    }
    /**
     * The reason the recognition was canceled.
     * @member CancellationDetailsBase.prototype.reason
     * @function
     * @public
     * @returns {CancellationReason} Specifies the reason canceled.
     */
    get reason() {
        return this.privReason;
    }
    /**
     * In case of an unsuccessful recognition, provides details of the occurred error.
     * @member CancellationDetailsBase.prototype.errorDetails
     * @function
     * @public
     * @returns {string} A String that represents the error details.
     */
    get errorDetails() {
        return this.privErrorDetails;
    }
    /**
     * The error code in case of an unsuccessful recognition.
     * Added in version 1.1.0.
     * @return An error code that represents the error reason.
     */
    get ErrorCode() {
        return this.privErrorCode;
    }
}
exports.CancellationDetailsBase = CancellationDetailsBase;



/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CancellationDetails = void 0;
const Exports_js_1 = __webpack_require__(2);
const CancellationDetailsBase_js_1 = __webpack_require__(123);
const Exports_js_2 = __webpack_require__(79);
/**
 * Contains detailed information about why a result was canceled.
 * @class CancellationDetails
 */
class CancellationDetails extends CancellationDetailsBase_js_1.CancellationDetailsBase {
    constructor(reason, errorDetails, errorCode) {
        super(reason, errorDetails, errorCode);
    }
    /**
     * Creates an instance of CancellationDetails object for the canceled RecognitionResult.
     * @member CancellationDetails.fromResult
     * @function
     * @public
     * @param {RecognitionResult | SpeechSynthesisResult} result - The result that was canceled.
     * @returns {CancellationDetails} The cancellation details object being created.
     */
    static fromResult(result) {
        let reason = Exports_js_2.CancellationReason.Error;
        let errorCode = Exports_js_2.CancellationErrorCode.NoError;
        if (result instanceof Exports_js_2.RecognitionResult && !!result.json) {
            const simpleSpeech = Exports_js_1.SimpleSpeechPhrase.fromJSON(result.json, 0); // Offset fixups are already done.
            reason = Exports_js_1.EnumTranslation.implTranslateCancelResult(simpleSpeech.RecognitionStatus);
        }
        if (!!result.properties) {
            errorCode = Exports_js_2.CancellationErrorCode[result.properties.getProperty(Exports_js_1.CancellationErrorCodePropertyName, Exports_js_2.CancellationErrorCode[Exports_js_2.CancellationErrorCode.NoError])];
        }
        return new CancellationDetails(reason, result.errorDetails || Exports_js_1.EnumTranslation.implTranslateErrorDetails(errorCode), errorCode);
    }
}
exports.CancellationDetails = CancellationDetails;



/***/ }),
/* 125 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CancellationErrorCode = void 0;
/**
 * Defines error code in case that CancellationReason is Error.
 * Added in version 1.1.0.
 */
var CancellationErrorCode;
(function (CancellationErrorCode) {
    /**
     * Indicates that no error occurred during speech recognition.
     */
    CancellationErrorCode[CancellationErrorCode["NoError"] = 0] = "NoError";
    /**
     * Indicates an authentication error.
     */
    CancellationErrorCode[CancellationErrorCode["AuthenticationFailure"] = 1] = "AuthenticationFailure";
    /**
     * Indicates that one or more recognition parameters are invalid.
     */
    CancellationErrorCode[CancellationErrorCode["BadRequestParameters"] = 2] = "BadRequestParameters";
    /**
     * Indicates that the number of parallel requests exceeded the number of allowed
     * concurrent transcriptions for the subscription.
     */
    CancellationErrorCode[CancellationErrorCode["TooManyRequests"] = 3] = "TooManyRequests";
    /**
     * Indicates a connection error.
     */
    CancellationErrorCode[CancellationErrorCode["ConnectionFailure"] = 4] = "ConnectionFailure";
    /**
     * Indicates a time-out error when waiting for response from service.
     */
    CancellationErrorCode[CancellationErrorCode["ServiceTimeout"] = 5] = "ServiceTimeout";
    /**
     * Indicates that an error is returned by the service.
     */
    CancellationErrorCode[CancellationErrorCode["ServiceError"] = 6] = "ServiceError";
    /**
     * Indicates an unexpected runtime error.
     */
    CancellationErrorCode[CancellationErrorCode["RuntimeError"] = 7] = "RuntimeError";
    /**
     * Indicates an quota overrun on existing key.
     */
    CancellationErrorCode[CancellationErrorCode["Forbidden"] = 8] = "Forbidden";
})(CancellationErrorCode = exports.CancellationErrorCode || (exports.CancellationErrorCode = {}));



/***/ }),
/* 126 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.md file in the project root for full license information.
//
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionEventArgs = void 0;
const Exports_js_1 = __webpack_require__(79);
/**
 * Defines payload for connection events like Connected/Disconnected.
 * Added in version 1.2.0
 */
class ConnectionEventArgs extends Exports_js_1.SessionEventArgs {
}
exports.ConnectionEventArgs = ConnectionEventArgs;



/***/ }),
/* 127 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.md file in the project root for full license information.
//
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceEventArgs = void 0;
const Exports_js_1 = __webpack_require__(79);
/**
 * Defines payload for any Service message event
 * Added in version 1.9.0
 */
class ServiceEventArgs extends Exports_js_1.SessionEventArgs {
    /**
     * Creates and initializes an instance of this class.
     * @constructor
     * @param {string} json - json payload of the USP message.
     */
    constructor(json, name, sessionId) {
        super(sessionId);
        this.privJsonResult = json;
        this.privEventName = name;
    }
    get jsonString() {
        return this.privJsonResult;
    }
    get eventName() {
        return this.privEventName;
    }
}
exports.ServiceEventArgs = ServiceEventArgs;



/***/ }),
/* 128 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PhraseListGrammar = void 0;
/**
 * Allows additions of new phrases to improve speech recognition.
 *
 * Phrases added to the recognizer are effective at the start of the next recognition, or the next time the SpeechSDK must reconnect
 * to the speech service.
 */
class PhraseListGrammar {
    constructor(recogBase) {
        this.privGrammerBuilder = recogBase.dynamicGrammar;
    }
    /**
     * Creates a PhraseListGrammar from a given speech recognizer. Will accept any recognizer that derives from @class Recognizer.
     * @param recognizer The recognizer to add phrase lists to.
     */
    static fromRecognizer(recognizer) {
        const recoBase = recognizer.internalData;
        return new PhraseListGrammar(recoBase);
    }
    /**
     * Adds a single phrase to the current recognizer.
     * @param phrase Phrase to add.
     */
    addPhrase(phrase) {
        this.privGrammerBuilder.addPhrase(phrase);
    }
    /**
     * Adds multiple phrases to the current recognizer.
     * @param phrases Array of phrases to add.
     */
    addPhrases(phrases) {
        this.privGrammerBuilder.addPhrase(phrases);
    }
    /**
     * Clears all phrases added to the current recognizer.
     */
    clear() {
        this.privGrammerBuilder.clearPhrases();
    }
}
exports.PhraseListGrammar = PhraseListGrammar;



/***/ }),
/* 129 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DialogServiceConfigImpl = exports.DialogServiceConfig = void 0;
/* eslint-disable max-classes-per-file */
const Contracts_js_1 = __webpack_require__(64);
const Exports_js_1 = __webpack_require__(79);
/**
 * Class that defines base configurations for dialog service connector
 * @class DialogServiceConfig
 */
class DialogServiceConfig {
    /**
     * Creates an instance of DialogService config.
     * @constructor
     */
    constructor() {
        return;
    }
    /**
     * Sets the corresponding backend application identifier.
     * @member DialogServiceConfig.prototype.Conversation_ApplicationId
     * @function
     * @public
     * @param {string} value - The application identifier to set.
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    set applicationId(value) { }
    static get DialogTypes() {
        return {
            BotFramework: "bot_framework",
            CustomCommands: "custom_commands"
        };
    }
}
exports.DialogServiceConfig = DialogServiceConfig;
/**
 * Dialog Service configuration.
 * @class DialogServiceConfigImpl
 */
class DialogServiceConfigImpl extends DialogServiceConfig {
    /**
     * Creates an instance of dialogService config.
     */
    constructor() {
        super();
        this.privSpeechConfig = new Exports_js_1.SpeechConfigImpl();
    }
    /**
     * Provides access to custom properties.
     * @member DialogServiceConfigImpl.prototype.properties
     * @function
     * @public
     * @returns {PropertyCollection} The properties.
     */
    get properties() {
        return this.privSpeechConfig.properties;
    }
    /**
     * Gets the speech recognition language.
     * @member DialogServiceConfigImpl.prototype.speechRecognitionLanguage
     * @function
     * @public
     */
    get speechRecognitionLanguage() {
        return this.privSpeechConfig.speechRecognitionLanguage;
    }
    /**
     * Sets the speech recognition language.
     * @member DialogServiceConfigImpl.prototype.speechRecognitionLanguage
     * @function
     * @public
     * @param {string} value - The language to set.
     */
    set speechRecognitionLanguage(value) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(value, "value");
        this.privSpeechConfig.speechRecognitionLanguage = value;
    }
    get outputFormat() {
        return this.privSpeechConfig.outputFormat;
    }
    set outputFormat(value) {
        this.privSpeechConfig.outputFormat = value;
    }
    /**
     * Sets a named property as value
     * @member DialogServiceConfigImpl.prototype.setProperty
     * @function
     * @public
     * @param {PropertyId | string} name - The property to set.
     * @param {string} value - The value.
     */
    setProperty(name, value) {
        this.privSpeechConfig.setProperty(name, value);
    }
    /**
     * Sets a named property as value
     * @member DialogServiceConfigImpl.prototype.getProperty
     * @function
     * @public
     * @param {PropertyId | string} name - The property to get.
     * @param {string} def - The default value to return in case the property is not known.
     * @returns {string} The current value, or provided default, of the given property.
     */
    getProperty(name, def) {
        void def;
        return this.privSpeechConfig.getProperty(name);
    }
    /**
     * Sets the proxy configuration.
     * Only relevant in Node.js environments.
     * Added in version 1.4.0.
     * @param proxyHostName The host name of the proxy server, without the protocol scheme (http://)
     * @param proxyPort The port number of the proxy server.
     * @param proxyUserName The user name of the proxy server.
     * @param proxyPassword The password of the proxy server.
     */
    setProxy(proxyHostName, proxyPort, proxyUserName, proxyPassword) {
        this.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_ProxyHostName, proxyHostName);
        this.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_ProxyPort, `${proxyPort}`);
        if (proxyUserName) {
            this.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_ProxyUserName, proxyUserName);
        }
        if (proxyPassword) {
            this.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_ProxyPassword, proxyPassword);
        }
    }
    setServiceProperty(name, value, channel) {
        void channel;
        this.privSpeechConfig.setServiceProperty(name, value);
    }
    /**
     * Dispose of associated resources.
     * @member DialogServiceConfigImpl.prototype.close
     * @function
     * @public
     */
    close() {
        return;
    }
}
exports.DialogServiceConfigImpl = DialogServiceConfigImpl;



/***/ }),
/* 130 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BotFrameworkConfig = void 0;
const Contracts_js_1 = __webpack_require__(64);
const DialogServiceConfig_js_1 = __webpack_require__(129);
const Exports_js_1 = __webpack_require__(79);
/**
 * Class that defines configurations for the dialog service connector object for using a Bot Framework backend.
 * @class BotFrameworkConfig
 */
class BotFrameworkConfig extends DialogServiceConfig_js_1.DialogServiceConfigImpl {
    /**
     * Creates an instance of BotFrameworkConfig.
     */
    constructor() {
        super();
    }
    /**
     * Creates a bot framework configuration instance with the provided subscription information.
     * @member BotFrameworkConfig.fromSubscription
     * @function
     * @public
     * @param subscription Subscription key associated with the bot
     * @param region The region name (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @param botId Optional. Identifier for using a specific bot within an Azure resource group. Equivalent to the
     * resource name.
     * @returns {BotFrameworkConfig} A new bot framework configuration instance.
     */
    static fromSubscription(subscription, region, botId) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(subscription, "subscription");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(region, "region");
        const botFrameworkConfig = new DialogServiceConfig_js_1.DialogServiceConfigImpl();
        botFrameworkConfig.setProperty(Exports_js_1.PropertyId.Conversation_DialogType, DialogServiceConfig_js_1.DialogServiceConfig.DialogTypes.BotFramework);
        botFrameworkConfig.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_Key, subscription);
        botFrameworkConfig.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_Region, region);
        if (botId) {
            botFrameworkConfig.setProperty(Exports_js_1.PropertyId.Conversation_ApplicationId, botId);
        }
        return botFrameworkConfig;
    }
    /**
     * Creates a bot framework configuration instance for the specified authorization token and region.
     * Note: The caller must ensure that an authorization token is valid. Before an authorization token expires, the
     * caller must refresh it by setting the authorizationToken property on the corresponding
     * DialogServiceConnector instance created with this config. The contents of configuration objects are copied
     * when connectors are created, so setting authorizationToken on a DialogServiceConnector will not update the
     * original configuration's authorization token. Create a new configuration instance or set the
     * SpeechServiceAuthorization_Token property to update an existing instance if it will be used to create
     * further DialogServiceConnectors.
     * @member BotFrameworkConfig.fromAuthorizationToken
     * @function
     * @public
     * @param authorizationToken The authorization token associated with the bot
     * @param region The region name (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @param botId Optional. Identifier for using a specific bot within an Azure resource group. Equivalent to the
     * resource name.
     * @returns {BotFrameworkConfig} A new bot framework configuration instance.
     */
    static fromAuthorizationToken(authorizationToken, region, botId) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(authorizationToken, "authorizationToken");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(region, "region");
        const botFrameworkConfig = new DialogServiceConfig_js_1.DialogServiceConfigImpl();
        botFrameworkConfig.setProperty(Exports_js_1.PropertyId.Conversation_DialogType, DialogServiceConfig_js_1.DialogServiceConfig.DialogTypes.BotFramework);
        botFrameworkConfig.setProperty(Exports_js_1.PropertyId.SpeechServiceAuthorization_Token, authorizationToken);
        botFrameworkConfig.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_Region, region);
        if (botId) {
            botFrameworkConfig.setProperty(Exports_js_1.PropertyId.Conversation_ApplicationId, botId);
        }
        return botFrameworkConfig;
    }
    /**
     * Creates an instance of a BotFrameworkConfig.
     * This method is intended only for users who use a non-default service host. The standard resource path will be
     * assumed. For services with a non-standard resource path or no path at all, use fromEndpoint instead.
     * Note: Query parameters are not allowed in the host URI and must be set by other APIs.
     * Note: To use an authorization token with fromHost, use fromHost(URL) and then set the AuthorizationToken
     * property on the created BotFrameworkConfig instance.
     * Note: Added in version 1.15.0.
     * @member BotFrameworkConfig.fromHost
     * @function
     * @public
     * @param {URL | string} host - If a URL is provided, the fully-qualified host with protocol (e.g.
     * wss://your.host.com:1234) will be used. If a string is provided, it will be embedded in
     * wss://{host}.convai.speech.azure.us.
     * @param {string} subscriptionKey - The subscription key. If a subscription key is not specified, an authorization
     * token must be set.
     * @param botId Optional. Identifier for using a specific bot within an Azure resource group. Equivalent to the
     * resource name.
     * @returns {BotFrameworkConfig} A new bot framework configuration instance.
     */
    static fromHost(host, subscriptionKey, botId) {
        void botId;
        Contracts_js_1.Contracts.throwIfNullOrUndefined(host, "host");
        const resolvedHost = host instanceof URL ? host : new URL(`wss://${host}.convai.speech.azure.us`);
        Contracts_js_1.Contracts.throwIfNullOrUndefined(resolvedHost, "resolvedHost");
        const botFrameworkConfig = new DialogServiceConfig_js_1.DialogServiceConfigImpl();
        botFrameworkConfig.setProperty(Exports_js_1.PropertyId.Conversation_DialogType, DialogServiceConfig_js_1.DialogServiceConfig.DialogTypes.BotFramework);
        botFrameworkConfig.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_Host, resolvedHost.toString());
        if (undefined !== subscriptionKey) {
            botFrameworkConfig.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_Key, subscriptionKey);
        }
        return botFrameworkConfig;
    }
    /**
     * Creates an instance of a BotFrameworkConfig.
     * This method is intended only for users who use a non-standard service endpoint or parameters.
     * Note: The query parameters specified in the endpoint URL are not changed, even if they are set by any other APIs.
     * Note: To use authorization token with fromEndpoint, pass an empty string to the subscriptionKey in the
     * fromEndpoint method, and then set authorizationToken="token" on the created BotFrameworkConfig instance to
     * use the authorization token.
     * Note: Added in version 1.15.0.
     * @member BotFrameworkConfig.fromEndpoint
     * @function
     * @public
     * @param {URL} endpoint - The service endpoint to connect to.
     * @param {string} subscriptionKey - The subscription key. If a subscription key is not specified, an authorization
     * token must be set.
     * @returns {BotFrameworkConfig} - A new bot framework configuration instance using the provided endpoint.
     */
    static fromEndpoint(endpoint, subscriptionKey) {
        Contracts_js_1.Contracts.throwIfNull(endpoint, "endpoint");
        const botFrameworkConfig = new DialogServiceConfig_js_1.DialogServiceConfigImpl();
        botFrameworkConfig.setProperty(Exports_js_1.PropertyId.Conversation_DialogType, DialogServiceConfig_js_1.DialogServiceConfig.DialogTypes.BotFramework);
        botFrameworkConfig.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_Endpoint, endpoint.toString());
        if (undefined !== subscriptionKey) {
            botFrameworkConfig.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_Key, subscriptionKey);
        }
        return botFrameworkConfig;
    }
}
exports.BotFrameworkConfig = BotFrameworkConfig;



/***/ }),
/* 131 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomCommandsConfig = void 0;
const Contracts_js_1 = __webpack_require__(64);
const DialogServiceConfig_js_1 = __webpack_require__(129);
const Exports_js_1 = __webpack_require__(79);
/**
 * Class that defines configurations for the dialog service connector object for using a CustomCommands backend.
 * @class CustomCommandsConfig
 */
class CustomCommandsConfig extends DialogServiceConfig_js_1.DialogServiceConfigImpl {
    /**
     * Creates an instance of CustomCommandsConfig.
     */
    constructor() {
        super();
    }
    /**
     * Creates an instance of the bot framework config with the specified subscription and region.
     * @member CustomCommandsConfig.fromSubscription
     * @function
     * @public
     * @param applicationId Speech Commands application id.
     * @param subscription Subscription key associated with the bot
     * @param region The region name (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @returns {CustomCommandsConfig} A new bot framework config.
     */
    static fromSubscription(applicationId, subscription, region) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(applicationId, "applicationId");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(subscription, "subscription");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(region, "region");
        const customCommandsConfig = new DialogServiceConfig_js_1.DialogServiceConfigImpl();
        customCommandsConfig.setProperty(Exports_js_1.PropertyId.Conversation_DialogType, DialogServiceConfig_js_1.DialogServiceConfig.DialogTypes.CustomCommands);
        customCommandsConfig.setProperty(Exports_js_1.PropertyId.Conversation_ApplicationId, applicationId);
        customCommandsConfig.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_Key, subscription);
        customCommandsConfig.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_Region, region);
        return customCommandsConfig;
    }
    /**
     * Creates an instance of the bot framework config with the specified Speech Commands application id, authorization token and region.
     * Note: The caller needs to ensure that the authorization token is valid. Before the authorization token
     * expires, the caller needs to refresh it by calling this setter with a new valid token.
     * As configuration values are copied when creating a new recognizer, the new token value will not apply to recognizers that have already been created.
     * For recognizers that have been created before, you need to set authorization token of the corresponding recognizer
     * to refresh the token. Otherwise, the recognizers will encounter errors during recognition.
     * @member CustomCommandsConfig.fromAuthorizationToken
     * @function
     * @public
     * @param applicationId Speech Commands application id.
     * @param authorizationToken The authorization token associated with the application.
     * @param region The region name (see the <a href="https://aka.ms/csspeech/region">region page</a>).
     * @returns {CustomCommandsConfig} A new speech commands config.
     */
    static fromAuthorizationToken(applicationId, authorizationToken, region) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(applicationId, "applicationId");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(authorizationToken, "authorizationToken");
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(region, "region");
        const customCommandsConfig = new DialogServiceConfig_js_1.DialogServiceConfigImpl();
        customCommandsConfig.setProperty(Exports_js_1.PropertyId.Conversation_DialogType, DialogServiceConfig_js_1.DialogServiceConfig.DialogTypes.CustomCommands);
        customCommandsConfig.setProperty(Exports_js_1.PropertyId.Conversation_ApplicationId, applicationId);
        customCommandsConfig.setProperty(Exports_js_1.PropertyId.SpeechServiceAuthorization_Token, authorizationToken);
        customCommandsConfig.setProperty(Exports_js_1.PropertyId.SpeechServiceConnection_Region, region);
        return customCommandsConfig;
    }
    /**
     * Sets the corresponding backend application identifier.
     * @member CustomCommandsConfig.prototype.Conversation_ApplicationId
     * @function
     * @public
     * @param {string} value - The application identifier to set.
     */
    set applicationId(value) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(value, "value");
        this.setProperty(Exports_js_1.PropertyId.Conversation_ApplicationId, value);
    }
    /**
     * Gets the corresponding backend application identifier.
     * @member CustomCommandsConfig.prototype.Conversation_ApplicationId
     * @function
     * @public
     * @param {string} value - The application identifier to get.
     */
    get applicationId() {
        return this.getProperty(Exports_js_1.PropertyId.Conversation_ApplicationId);
    }
}
exports.CustomCommandsConfig = CustomCommandsConfig;



/***/ }),
/* 132 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DialogServiceConnector = void 0;
const DialogConnectorFactory_js_1 = __webpack_require__(133);
const Exports_js_1 = __webpack_require__(2);
const Exports_js_2 = __webpack_require__(4);
const Contracts_js_1 = __webpack_require__(64);
const Exports_js_3 = __webpack_require__(79);
const PropertyId_js_1 = __webpack_require__(110);
/**
 * Dialog Service Connector
 * @class DialogServiceConnector
 */
class DialogServiceConnector extends Exports_js_3.Recognizer {
    /**
     * Initializes an instance of the DialogServiceConnector.
     * @constructor
     * @param {DialogServiceConfig} dialogConfig - Set of properties to configure this recognizer.
     * @param {AudioConfig} audioConfig - An optional audio config associated with the recognizer
     */
    constructor(dialogConfig, audioConfig) {
        const dialogServiceConfigImpl = dialogConfig;
        Contracts_js_1.Contracts.throwIfNull(dialogConfig, "dialogConfig");
        super(audioConfig, dialogServiceConfigImpl.properties, new DialogConnectorFactory_js_1.DialogConnectionFactory());
        this.isTurnComplete = true;
        this.privIsDisposed = false;
        this.privProperties = dialogServiceConfigImpl.properties.clone();
        const agentConfig = this.buildAgentConfig();
        this.privReco.agentConfig.set(agentConfig);
    }
    /**
     * Starts a connection to the service.
     * Users can optionally call connect() to manually set up a connection in advance, before starting interactions.
     *
     * Note: On return, the connection might not be ready yet. Please subscribe to the Connected event to
     * be notified when the connection is established.
     * @member DialogServiceConnector.prototype.connect
     * @function
     * @public
     */
    connect(cb, err) {
        Exports_js_2.marshalPromiseToCallbacks(this.privReco.connect(), cb, err);
    }
    /**
     * Closes the connection the service.
     * Users can optionally call disconnect() to manually shutdown the connection of the associated DialogServiceConnector.
     *
     * If disconnect() is called during a recognition, recognition will fail and cancel with an error.
     */
    disconnect(cb, err) {
        Exports_js_2.marshalPromiseToCallbacks(this.privReco.disconnect(), cb, err);
    }
    /**
     * Gets the authorization token used to communicate with the service.
     * @member DialogServiceConnector.prototype.authorizationToken
     * @function
     * @public
     * @returns {string} Authorization token.
     */
    get authorizationToken() {
        return this.properties.getProperty(PropertyId_js_1.PropertyId.SpeechServiceAuthorization_Token);
    }
    /**
     * Sets the authorization token used to communicate with the service.
     * @member DialogServiceConnector.prototype.authorizationToken
     * @function
     * @public
     * @param {string} token - Authorization token.
     */
    set authorizationToken(token) {
        Contracts_js_1.Contracts.throwIfNullOrWhitespace(token, "token");
        this.properties.setProperty(PropertyId_js_1.PropertyId.SpeechServiceAuthorization_Token, token);
    }
    /**
     * The collection of properties and their values defined for this DialogServiceConnector.
     * @member DialogServiceConnector.prototype.properties
     * @function
     * @public
     * @returns {PropertyCollection} The collection of properties and their values defined for this DialogServiceConnector.
     */
    get properties() {
        return this.privProperties;
    }
    /** Gets the template for the activity generated by service from speech.
     * Properties from the template will be stamped on the generated activity.
     * It can be empty
     */
    get speechActivityTemplate() {
        return this.properties.getProperty(PropertyId_js_1.PropertyId.Conversation_Speech_Activity_Template);
    }
    /** Sets the template for the activity generated by service from speech.
     * Properties from the template will be stamped on the generated activity.
     * It can be null or empty.
     * Note: it has to be a valid Json object.
     */
    set speechActivityTemplate(speechActivityTemplate) {
        this.properties.setProperty(PropertyId_js_1.PropertyId.Conversation_Speech_Activity_Template, speechActivityTemplate);
    }
    /**
     * Starts recognition and stops after the first utterance is recognized.
     * @member DialogServiceConnector.prototype.listenOnceAsync
     * @function
     * @public
     * @param cb - Callback that received the result when the reco has completed.
     * @param err - Callback invoked in case of an error.
     */
    listenOnceAsync(cb, err) {
        if (this.isTurnComplete) {
            Contracts_js_1.Contracts.throwIfDisposed(this.privIsDisposed);
            const callbackHolder = async () => {
                await this.privReco.connect();
                await this.implRecognizerStop();
                this.isTurnComplete = false;
                const ret = new Exports_js_2.Deferred();
                await this.privReco.recognize(Exports_js_1.RecognitionMode.Conversation, ret.resolve, ret.reject);
                const e = await ret.promise;
                await this.implRecognizerStop();
                return e;
            };
            const retPromise = callbackHolder();
            retPromise.catch(() => {
                // Destroy the recognizer.
                // We've done all we can here.
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                this.dispose(true).catch(() => { });
            });
            Exports_js_2.marshalPromiseToCallbacks(retPromise.finally(() => {
                this.isTurnComplete = true;
            }), cb, err);
        }
    }
    sendActivityAsync(activity, cb, errCb) {
        Exports_js_2.marshalPromiseToCallbacks(this.privReco.sendMessage(activity), cb, errCb);
    }
    /**
     * closes all external resources held by an instance of this class.
     * @member DialogServiceConnector.prototype.close
     * @function
     * @public
     */
    close(cb, err) {
        Contracts_js_1.Contracts.throwIfDisposed(this.privIsDisposed);
        Exports_js_2.marshalPromiseToCallbacks(this.dispose(true), cb, err);
    }
    async dispose(disposing) {
        if (this.privIsDisposed) {
            return;
        }
        if (disposing) {
            this.privIsDisposed = true;
            await this.implRecognizerStop();
            await super.dispose(disposing);
        }
    }
    createRecognizerConfig(speechConfig) {
        return new Exports_js_1.RecognizerConfig(speechConfig, this.privProperties);
    }
    createServiceRecognizer(authentication, connectionFactory, audioConfig, recognizerConfig) {
        const audioSource = audioConfig;
        return new Exports_js_1.DialogServiceAdapter(authentication, connectionFactory, audioSource, recognizerConfig, this);
    }
    buildAgentConfig() {
        const communicationType = this.properties.getProperty("Conversation_Communication_Type", "Default");
        return {
            botInfo: {
                commType: communicationType,
                commandsCulture: undefined,
                connectionId: this.properties.getProperty(PropertyId_js_1.PropertyId.Conversation_Agent_Connection_Id),
                conversationId: this.properties.getProperty(PropertyId_js_1.PropertyId.Conversation_Conversation_Id, undefined),
                fromId: this.properties.getProperty(PropertyId_js_1.PropertyId.Conversation_From_Id, undefined),
                ttsAudioFormat: this.properties.getProperty(PropertyId_js_1.PropertyId.SpeechServiceConnection_SynthOutputFormat, undefined)
            },
            version: 0.2
        };
    }
}
exports.DialogServiceConnector = DialogServiceConnector;



/***/ }),
/* 133 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DialogConnectionFactory = void 0;
/* eslint-disable max-classes-per-file */
const Exports_js_1 = __webpack_require__(60);
const Exports_js_2 = __webpack_require__(2);
const Exports_js_3 = __webpack_require__(79);
const ConnectionFactoryBase_js_1 = __webpack_require__(134);
const Exports_js_4 = __webpack_require__(2);
const HeaderNames_js_1 = __webpack_require__(54);
const QueryParameterNames_js_1 = __webpack_require__(135);
class DialogConnectionFactory extends ConnectionFactoryBase_js_1.ConnectionFactoryBase {
    create(config, authInfo, connectionId) {
        const applicationId = config.parameters.getProperty(Exports_js_3.PropertyId.Conversation_ApplicationId, "");
        const dialogType = config.parameters.getProperty(Exports_js_3.PropertyId.Conversation_DialogType);
        const region = config.parameters.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_Region);
        const language = config.parameters.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_RecoLanguage, "en-US");
        const requestTurnStatus = config.parameters.getProperty(Exports_js_3.PropertyId.Conversation_Request_Bot_Status_Messages, "true");
        const queryParams = {};
        queryParams[HeaderNames_js_1.HeaderNames.ConnectionId] = connectionId;
        queryParams[QueryParameterNames_js_1.QueryParameterNames.Format] = config.parameters.getProperty(Exports_js_2.OutputFormatPropertyName, Exports_js_3.OutputFormat[Exports_js_3.OutputFormat.Simple]).toLowerCase();
        queryParams[QueryParameterNames_js_1.QueryParameterNames.Language] = language;
        queryParams[QueryParameterNames_js_1.QueryParameterNames.RequestBotStatusMessages] = requestTurnStatus;
        if (applicationId) {
            queryParams[QueryParameterNames_js_1.QueryParameterNames.BotId] = applicationId;
            if (dialogType === Exports_js_3.DialogServiceConfig.DialogTypes.CustomCommands) {
                queryParams[HeaderNames_js_1.HeaderNames.CustomCommandsAppId] = applicationId;
            }
        }
        const resourceInfix = dialogType === Exports_js_3.DialogServiceConfig.DialogTypes.CustomCommands ? "commands/"
            : "";
        const version = dialogType === Exports_js_3.DialogServiceConfig.DialogTypes.CustomCommands ? "v1"
            : dialogType === Exports_js_3.DialogServiceConfig.DialogTypes.BotFramework ? "v3"
                : "v0";
        const headers = {};
        if (authInfo.token != null && authInfo.token !== "") {
            headers[authInfo.headerName] = authInfo.token;
        }
        // The URL used for connection is chosen in a priority order of specification:
        //  1. If a custom endpoint is provided, that URL is used verbatim.
        //  2. If a custom host is provided (e.g. "wss://my.custom.endpoint.com:1123"), a URL is constructed from it.
        //  3. If no custom connection details are provided, a URL is constructed from default values.
        let endpoint = config.parameters.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_Endpoint, "");
        if (!endpoint) {
            const hostSuffix = ConnectionFactoryBase_js_1.ConnectionFactoryBase.getHostSuffix(region);
            const host = config.parameters.getProperty(Exports_js_3.PropertyId.SpeechServiceConnection_Host, `wss://${region}.${DialogConnectionFactory.BaseUrl}${hostSuffix}`);
            const standardizedHost = host.endsWith("/") ? host : host + "/";
            endpoint = `${standardizedHost}${resourceInfix}${DialogConnectionFactory.ApiKey}/${version}`;
        }
        this.setCommonUrlParams(config, queryParams, endpoint);
        const enableCompression = config.parameters.getProperty("SPEECH-EnableWebsocketCompression", "false") === "true";
        return new Exports_js_1.WebsocketConnection(endpoint, queryParams, headers, new Exports_js_4.WebsocketMessageFormatter(), Exports_js_1.ProxyInfo.fromRecognizerConfig(config), enableCompression, connectionId);
    }
}
exports.DialogConnectionFactory = DialogConnectionFactory;
DialogConnectionFactory.ApiKey = "api";
DialogConnectionFactory.BaseUrl = "convai.speech";



/***/ }),
/* 134 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionFactoryBase = void 0;
const Exports_js_1 = __webpack_require__(2);
const Exports_js_2 = __webpack_require__(79);
const QueryParameterNames_js_1 = __webpack_require__(135);
class ConnectionFactoryBase {
    static getHostSuffix(region) {
        if (!!region) {
            if (region.toLowerCase().startsWith("china")) {
                return ".azure.cn";
            }
            if (region.toLowerCase().startsWith("usgov")) {
                return ".azure.us";
            }
        }
        return ".microsoft.com";
    }
    setCommonUrlParams(config, queryParams, endpoint) {
        const propertyIdToParameterMap = new Map([
            [Exports_js_2.PropertyId.Speech_SegmentationSilenceTimeoutMs, QueryParameterNames_js_1.QueryParameterNames.SegmentationSilenceTimeoutMs],
            [Exports_js_2.PropertyId.SpeechServiceConnection_EnableAudioLogging, QueryParameterNames_js_1.QueryParameterNames.EnableAudioLogging],
            [Exports_js_2.PropertyId.SpeechServiceConnection_EndSilenceTimeoutMs, QueryParameterNames_js_1.QueryParameterNames.EndSilenceTimeoutMs],
            [Exports_js_2.PropertyId.SpeechServiceConnection_InitialSilenceTimeoutMs, QueryParameterNames_js_1.QueryParameterNames.InitialSilenceTimeoutMs],
            [Exports_js_2.PropertyId.SpeechServiceResponse_PostProcessingOption, QueryParameterNames_js_1.QueryParameterNames.Postprocessing],
            [Exports_js_2.PropertyId.SpeechServiceResponse_ProfanityOption, QueryParameterNames_js_1.QueryParameterNames.Profanity],
            [Exports_js_2.PropertyId.SpeechServiceResponse_RequestWordLevelTimestamps, QueryParameterNames_js_1.QueryParameterNames.EnableWordLevelTimestamps],
            [Exports_js_2.PropertyId.SpeechServiceResponse_StablePartialResultThreshold, QueryParameterNames_js_1.QueryParameterNames.StableIntermediateThreshold],
        ]);
        propertyIdToParameterMap.forEach((parameterName, propertyId) => {
            this.setUrlParameter(propertyId, parameterName, config, queryParams, endpoint);
        });
        const serviceProperties = JSON.parse(config.parameters.getProperty(Exports_js_1.ServicePropertiesPropertyName, "{}"));
        Object.keys(serviceProperties).forEach((value) => {
            queryParams[value] = serviceProperties[value];
        });
    }
    setUrlParameter(propId, parameterName, config, queryParams, endpoint) {
        const value = config.parameters.getProperty(propId, undefined);
        // FIXME: The .search() check will incorrectly match parameter name anywhere in the string
        //        including e.g. the path portion, or even as a substring of other query parameters
        if (value && (!endpoint || endpoint.search(parameterName) === -1)) {
            queryParams[parameterName] = value.toLocaleLowerCase();
        }
    }
}
exports.ConnectionFactoryBase = ConnectionFactoryBase;



/***/ }),
/* 135 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryParameterNames = void 0;
class QueryParameterNames {
}
exports.QueryParameterNames = QueryParameterNames;
QueryParameterNames.BotId = "botid";
QueryParameterNames.CustomSpeechDeploymentId = "cid";
QueryParameterNames.CustomVoiceDeploymentId = "deploymentId";
QueryParameterNames.EnableAudioLogging = "storeAudio";
QueryParameterNames.EnableLanguageId = "lidEnabled";
QueryParameterNames.EnableWordLevelTimestamps = "wordLevelTimestamps";
QueryParameterNames.EndSilenceTimeoutMs = "endSilenceTimeoutMs";
QueryParameterNames.SegmentationSilenceTimeoutMs = "segmentationSilenceTimeoutMs";
QueryParameterNames.SegmentationMaximumTimeMs = "segmentationMaximumTimeMs";
QueryParameterNames.SegmentationStrategy = "segmentationStra
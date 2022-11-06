"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllMessagesofUser = exports.getAllMessages = exports.createMessage = void 0;

var _API = _interopRequireDefault(require("./API"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createMessage = function createMessage(userPayload) {
  var response;
  return regeneratorRuntime.async(function createMessage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("userPayload ", userPayload);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_API.default.post("messages/", userPayload));

        case 4:
          response = _context.sent;

          if (!(response.status === 201)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 7:
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", {
            ok: false,
            err: _context.t0.data
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

exports.createMessage = createMessage;

var getAllMessages = function getAllMessages() {
  var response;
  return regeneratorRuntime.async(function getAllMessages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_API.default.get("messages/"));

        case 3:
          response = _context2.sent;

          if (!(response.status === 200)) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 6:
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", {
            ok: false,
            err: _context2.t0.data
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getAllMessages = getAllMessages;

var getAllMessagesofUser = function getAllMessagesofUser(email) {
  var response;
  return regeneratorRuntime.async(function getAllMessagesofUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_API.default.get("messages/".concat(email)));

        case 3:
          response = _context3.sent;

          if (!(response.status === 200)) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 6:
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", {
            ok: false,
            err: _context3.t0.data
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getAllMessagesofUser = getAllMessagesofUser;
//# sourceMappingURL=message.service.dev.js.map

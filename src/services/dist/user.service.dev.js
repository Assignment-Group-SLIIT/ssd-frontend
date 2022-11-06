"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllUsers = exports.loginUser = exports.registerUser = void 0;

var _token = require("../utils/token");

var _API = _interopRequireDefault(require("./API"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerUser = function registerUser(userPayload) {
  var response;
  return regeneratorRuntime.async(function registerUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_API.default.post("users/register", userPayload));

        case 3:
          response = _context.sent;

          if (!(response.status === 201)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 6:
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            ok: false,
            err: _context.t0.data
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.registerUser = registerUser;

var loginUser = function loginUser(user) {
  var response;
  return regeneratorRuntime.async(function loginUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_API.default.post("users/login", user));

        case 3:
          response = _context2.sent;

          if (!(response.status === 200)) {
            _context2.next = 7;
            break;
          }

          (0, _token.setUserSession)(response.data.token, response.data);
          return _context2.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 7:
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", {
            ok: false,
            err: _context2.t0.data
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.loginUser = loginUser;

var getAllUsers = function getAllUsers() {
  var response;
  return regeneratorRuntime.async(function getAllUsers$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_API.default.get("users/"));

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

exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user.service.dev.js.map

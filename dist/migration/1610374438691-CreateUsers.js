"use strict";

var _interopRequireDefault = require("F:/blog/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUsers1610374438691 = void 0;

var _regenerator = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var CreateUsers1610374438691 = /*#__PURE__*/function () {
  function CreateUsers1610374438691() {
    (0, _classCallCheck2["default"])(this, CreateUsers1610374438691);
  }

  (0, _createClass2["default"])(CreateUsers1610374438691, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return queryRunner.createTable(new _typeorm.Table({
                  name: 'users',
                  columns: [{
                    name: 'id',
                    isGenerated: true,
                    type: 'int',
                    generationStrategy: "increment",
                    isPrimary: true
                  }, {
                    name: 'username',
                    type: 'varchar',
                    isUnique: true
                  }, {
                    name: 'passwordDigest',
                    type: 'varchar'
                  }, {
                    name: 'createAt',
                    type: 'timestamp',
                    isNullable: false,
                    "default": 'now()'
                  }, {
                    name: 'updateAt',
                    type: 'timestamp',
                    isNullable: false,
                    "default": 'now()'
                  }]
                }));

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function up(_x) {
        return _up.apply(this, arguments);
      }

      return up;
    }()
  }, {
    key: "down",
    value: function () {
      var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryRunner) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return queryRunner.dropTable('users');

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function down(_x2) {
        return _down.apply(this, arguments);
      }

      return down;
    }()
  }]);
  return CreateUsers1610374438691;
}();

exports.CreateUsers1610374438691 = CreateUsers1610374438691;
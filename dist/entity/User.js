"use strict";

var _interopRequireDefault = require("F:/blog/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("F:/blog/node_modules/@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _Post = require("./Post");

var _Comment = require("./Comment");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;

// 用户
var User = (_dec = (0, _typeorm.Entity)('users'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)("increment"), _dec3 = (0, _typeorm.Column)("varchar"), _dec4 = (0, _typeorm.Column)("varchar"), _dec5 = (0, _typeorm.Column)({
  type: "timestamp"
}), _dec6 = (0, _typeorm.Column)({
  type: "timestamp"
}), _dec7 = (0, _typeorm.OneToMany)(function (type) {
  return _Post.Post;
}, function (post) {
  return post.author;
}), _dec8 = (0, _typeorm.OneToMany)(function (type) {
  return _Comment.Comment;
}, function (comment) {
  return comment.user;
}), _dec(_class = (_class2 = (_temp = function User() {
  (0, _classCallCheck2["default"])(this, User);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "username", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "passwordDigest", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "createAt", _descriptor4, this);
  (0, _initializerDefineProperty2["default"])(this, "updateAt", _descriptor5, this);
  (0, _initializerDefineProperty2["default"])(this, "post", _descriptor6, this);
  (0, _initializerDefineProperty2["default"])(this, "comment", _descriptor7, this);
}, _temp), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "username", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "passwordDigest", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "createAt", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "updateAt", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "post", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "comment", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.User = User;
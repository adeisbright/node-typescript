"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UsersDao = /** @class */ (function () {
    function UsersDao() {
        this.users = [];
        console.log("A new Instance");
    }
    UsersDao.prototype.addUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                user.id = String(new Date().valueOf());
                this.users.push(user);
                return [2 /*return*/, user];
            });
        });
    };
    UsersDao.prototype.getUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.users];
            });
        });
    };
    UsersDao.prototype.getUserById = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.users.find(function (user) { return user.id === userId; })];
            });
        });
    };
    UsersDao.prototype.putUserById = function (userId, user) {
        return __awaiter(this, void 0, void 0, function () {
            var objIndex;
            return __generator(this, function (_a) {
                objIndex = this.users.findIndex(function (obj) { return obj.id === userId; });
                this.users.splice(objIndex, 1, user);
                return [2 /*return*/, "".concat(user.id, " updated via put")];
            });
        });
    };
    UsersDao.prototype.patchUserById = function (userId, user) {
        return __awaiter(this, void 0, void 0, function () {
            var objIndex, currentUser, allowedPatchFields, _i, allowedPatchFields_1, field;
            return __generator(this, function (_a) {
                objIndex = this.users.findIndex(function (obj) { return obj.id === userId; });
                currentUser = this.users[objIndex];
                allowedPatchFields = [
                    'password',
                    'firstName',
                    'lastName',
                    'permissionLevel',
                ];
                for (_i = 0, allowedPatchFields_1 = allowedPatchFields; _i < allowedPatchFields_1.length; _i++) {
                    field = allowedPatchFields_1[_i];
                    if (field in user) {
                        // @ts-ignore
                        currentUser[field] = user[field];
                    }
                }
                this.users.splice(objIndex, 1, currentUser);
                return [2 /*return*/, "".concat(user.id, " patched")];
            });
        });
    };
    UsersDao.prototype.removeUserById = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var objIndex;
            return __generator(this, function (_a) {
                objIndex = this.users.findIndex(function (obj) { return obj.id === userId; });
                this.users.splice(objIndex, 1);
                return [2 /*return*/, "".concat(userId, " removed")];
            });
        });
    };
    UsersDao.prototype.getUserByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var objIndex, currentUser;
            return __generator(this, function (_a) {
                objIndex = this.users.findIndex(function (obj) { return obj.email === email; });
                currentUser = this.users[objIndex];
                if (currentUser) {
                    return [2 /*return*/, currentUser];
                }
                else {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/];
            });
        });
    };
    return UsersDao;
}());
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91c2VyL2Rhb3MvdXNlcnMuZGFvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0lBRUk7UUFEQSxVQUFLLEdBQTBCLEVBQUUsQ0FBQztRQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVLLDBCQUFPLEdBQWIsVUFBYyxJQUFtQjs7O2dCQUM3QixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixzQkFBTyxJQUFJLEVBQUM7OztLQUNmO0lBRUssMkJBQVEsR0FBZDs7O2dCQUNJLHNCQUFPLElBQUksQ0FBQyxLQUFLLEVBQUM7OztLQUNyQjtJQUVLLDhCQUFXLEdBQWpCLFVBQWtCLE1BQWM7OztnQkFDNUIsc0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFvQixJQUFLLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQWxCLENBQWtCLENBQUMsRUFBQzs7O0tBQ3hFO0lBRUssOEJBQVcsR0FBakIsVUFBa0IsTUFBYyxFQUFFLElBQWdCOzs7O2dCQUN4QyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ2pDLFVBQUMsR0FBbUIsSUFBSyxPQUFBLEdBQUcsQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFqQixDQUFpQixDQUM3QyxDQUFDO2dCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLHNCQUFPLFVBQUcsSUFBSSxDQUFDLEVBQUUscUJBQWtCLEVBQUM7OztLQUN2QztJQUVLLGdDQUFhLEdBQW5CLFVBQW9CLE1BQWMsRUFBRSxJQUFrQjs7OztnQkFDNUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUNqQyxVQUFDLEdBQW1CLElBQUssT0FBQSxHQUFHLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBakIsQ0FBaUIsQ0FDN0MsQ0FBQztnQkFDRSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakMsa0JBQWtCLEdBQUc7b0JBQ3ZCLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxVQUFVO29CQUNWLGlCQUFpQjtpQkFDcEIsQ0FBQztnQkFDRixXQUFvQyxFQUFsQix5Q0FBa0IsRUFBbEIsZ0NBQWtCLEVBQWxCLElBQWtCLEVBQUU7b0JBQTdCLEtBQUs7b0JBQ1YsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO3dCQUNmLGFBQWE7d0JBQ2IsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDcEM7aUJBQ0o7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDNUMsc0JBQU8sVUFBRyxJQUFJLENBQUMsRUFBRSxhQUFVLEVBQUM7OztLQUMvQjtJQUVLLGlDQUFjLEdBQXBCLFVBQXFCLE1BQWM7Ozs7Z0JBQ3pCLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDakMsVUFBQyxHQUFtQixJQUFLLE9BQUEsR0FBRyxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQWpCLENBQWlCLENBQzdDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixzQkFBTyxVQUFHLE1BQU0sYUFBVSxFQUFDOzs7S0FDOUI7SUFFSyxpQ0FBYyxHQUFwQixVQUFxQixLQUFhOzs7O2dCQUN4QixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ2pDLFVBQUMsR0FBc0IsSUFBSyxPQUFBLEdBQUcsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFuQixDQUFtQixDQUNsRCxDQUFDO2dCQUNFLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLFdBQVcsRUFBRTtvQkFDYixzQkFBTyxXQUFXLEVBQUM7aUJBQ3RCO3FCQUFNO29CQUNILHNCQUFPLElBQUksRUFBQztpQkFDZjs7OztLQUNKO0lBQ0wsZUFBQztBQUFELENBQUMsQUFwRUQsSUFvRUM7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFBIn0=
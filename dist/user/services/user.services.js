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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var users_daos_1 = __importDefault(require("../daos/users.daos"));
var UsersService = /** @class */ (function () {
    function UsersService() {
    }
    UsersService.prototype.create = function (resource) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_daos_1.default.addUser(resource)];
            });
        });
    };
    UsersService.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_daos_1.default.removeUserById(id)];
            });
        });
    };
    UsersService.prototype.list = function (limit, page) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_daos_1.default.getUsers()];
            });
        });
    };
    UsersService.prototype.patchById = function (id, resource) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_daos_1.default.updateUserById(id, resource)];
            });
        });
    };
    UsersService.prototype.readById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_daos_1.default.getUserById(id)];
            });
        });
    };
    UsersService.prototype.putById = function (id, resource) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_daos_1.default.updateUserById(id, resource)];
            });
        });
    };
    UsersService.prototype.getUserByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_daos_1.default.getUserByEmail(email)];
            });
        });
    };
    UsersService.prototype.getUserByEmailWithPassword = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, users_daos_1.default.getUserByEmailWithPassword(email)];
            });
        });
    };
    return UsersService;
}());
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91c2VyL3NlcnZpY2VzL3VzZXIuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBMEM7QUFRMUM7SUFBQTtJQWdDQSxDQUFDO0lBL0JTLDZCQUFNLEdBQVosVUFBYSxRQUF1Qjs7O2dCQUNoQyxzQkFBTyxvQkFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBQzs7O0tBQ3JDO0lBRUssaUNBQVUsR0FBaEIsVUFBaUIsRUFBVTs7O2dCQUN2QixzQkFBTyxvQkFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBQzs7O0tBQ3RDO0lBRUssMkJBQUksR0FBVixVQUFXLEtBQWMsRUFBRSxJQUFhOzs7Z0JBQ3BDLHNCQUFPLG9CQUFRLENBQUMsUUFBUSxFQUFFLEVBQUM7OztLQUM5QjtJQUVLLGdDQUFTLEdBQWYsVUFBZ0IsRUFBVSxFQUFFLFFBQXNCOzs7Z0JBQzlDLHNCQUFPLG9CQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBQzs7O0tBQ2hEO0lBRUssK0JBQVEsR0FBZCxVQUFlLEVBQVU7OztnQkFDckIsc0JBQU8sb0JBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUM7OztLQUNuQztJQUVLLDhCQUFPLEdBQWIsVUFBYyxFQUFVLEVBQUUsUUFBb0I7OztnQkFDMUMsc0JBQU8sb0JBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFDOzs7S0FDaEQ7SUFFSyxxQ0FBYyxHQUFwQixVQUFxQixLQUFhOzs7Z0JBQzlCLHNCQUFPLG9CQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFDOzs7S0FDekM7SUFFSyxpREFBMEIsR0FBaEMsVUFBaUMsS0FBYTs7O2dCQUMxQyxzQkFBTyxvQkFBUSxDQUFDLDBCQUEwQixDQUFDLEtBQUssQ0FBQyxFQUFDOzs7S0FDckQ7SUFDTCxtQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=
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
var user_services_1 = __importDefault(require("../services/user.services"));
var UsersController = /** @class */ (function () {
    function UsersController() {
    }
    UsersController.prototype.listUsers = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_services_1.default.list(100, 0)];
                    case 1:
                        users = _a.sent();
                        res.status(200).json(users);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersController.prototype.getUserById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_services_1.default.readById(req.body.id)];
                    case 1:
                        user = _a.sent();
                        res.status(200).send(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersController.prototype.createUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_services_1.default.create(req.body)];
                    case 1:
                        user = _a.sent();
                        res.status(201).json(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersController.prototype.partialUpdateUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_services_1.default.patchById(req.body.id, req.body)];
                    case 1:
                        _a.sent();
                        res.status(204).send();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersController.prototype.updateUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_services_1.default.putById(req.body.id, req.body)];
                    case 1:
                        _a.sent();
                        res.status(204).send();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersController.prototype.removeUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_services_1.default.deleteById(req.body.id)];
                    case 1:
                        _a.sent();
                        res.status(204).send("User Removed");
                        return [2 /*return*/];
                }
            });
        });
    };
    return UsersController;
}());
exports.default = new UsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91c2VyL2NvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSw0RUFBb0Q7QUFHcEQ7SUFBQTtJQStCQSxDQUFDO0lBOUJTLG1DQUFTLEdBQWYsVUFBZ0IsR0FBb0IsRUFBRSxHQUFxQjs7Ozs7NEJBQ3pDLHFCQUFNLHVCQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQTs7d0JBQXZDLEtBQUssR0FBRyxTQUErQjt3QkFDN0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0tBQy9CO0lBRUsscUNBQVcsR0FBakIsVUFBa0IsR0FBb0IsRUFBRSxHQUFxQjs7Ozs7NEJBQzVDLHFCQUFNLHVCQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUE7O3dCQUEvQyxJQUFJLEdBQUcsU0FBd0M7d0JBQ3JELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7OztLQUM5QjtJQUVLLG9DQUFVLEdBQWhCLFVBQWlCLEdBQW9CLEVBQUUsR0FBcUI7Ozs7OzRCQUMzQyxxQkFBTSx1QkFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUExQyxJQUFJLEdBQUcsU0FBbUM7d0JBQ2hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7OztLQUM5QjtJQUVLLDJDQUFpQixHQUF2QixVQUF3QixHQUFvQixFQUFFLEdBQXFCOzs7OzRCQUUvRCxxQkFBTSx1QkFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFuRCxTQUFtRCxDQUFDO3dCQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztLQUMxQjtJQUVLLG9DQUFVLEdBQWhCLFVBQWlCLEdBQW9CLEVBQUUsR0FBcUI7Ozs7NEJBQ3hELHFCQUFNLHVCQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQWpELFNBQWlELENBQUM7d0JBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0tBQzFCO0lBRUssb0NBQVUsR0FBaEIsVUFBaUIsR0FBb0IsRUFBRSxHQUFxQjs7Ozs0QkFDeEQscUJBQU0sdUJBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBQTs7d0JBQTFDLFNBQTBDLENBQUM7d0JBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzs7OztLQUN4QztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==
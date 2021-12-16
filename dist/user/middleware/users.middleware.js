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
var Middleware = /** @class */ (function () {
    function Middleware() {
        var _this = this;
        // Here we need to use an arrow function to bind `this` correctly
        this.validatePatchEmail = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.body.email) {
                    this.validateSameEmailBelongToSameUser(req, res, next);
                }
                else {
                    next();
                }
                return [2 /*return*/];
            });
        }); };
    }
    Middleware.prototype.validateRequiredUserBodyFields = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password;
            return __generator(this, function (_b) {
                _a = req.body, email = _a.email, password = _a.password;
                if (req.body && email && password) {
                    next();
                }
                else {
                    res.status(400).send({
                        error: "Missing required fields email and password",
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    Middleware.prototype.validateSameEmailDoesntExist = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_services_1.default.getUserByEmail(req.body.email)];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            res.status(400).send({ error: "User email already exists" });
                        }
                        else {
                            next();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Middleware.prototype.validateSameEmailBelongToSameUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_services_1.default.getUserByEmail(req.body.email)];
                    case 1:
                        user = _a.sent();
                        if (user && user.id === req.params.userId) {
                            next();
                        }
                        else {
                            res.status(400).send({ error: "Invalid email" });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Middleware.prototype.validateUserExists = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_services_1.default.readById(req.params.userId)];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            next();
                        }
                        else {
                            res.status(404).send({
                                error: "User ".concat(req.params.userId, " not found"),
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Middleware.prototype.extractUserId = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                req.body.id = req.params.userId;
                next();
                return [2 /*return*/];
            });
        });
    };
    return Middleware;
}());
exports.default = new Middleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91c2VyL21pZGRsZXdhcmUvdXNlcnMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDRFQUFxRDtBQUVyRDtJQUFBO1FBQUEsaUJBK0VDO1FBckNHLGlFQUFpRTtRQUNqRSx1QkFBa0IsR0FBRyxVQUNqQixHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCOztnQkFFbEIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDaEIsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzFEO3FCQUFNO29CQUNILElBQUksRUFBRSxDQUFDO2lCQUNWOzs7YUFDSixDQUFDO0lBMEJOLENBQUM7SUE5RVMsbURBQThCLEdBQXBDLFVBQ0ksR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjs7OztnQkFFWixLQUFxQixHQUFHLENBQUMsSUFBSSxFQUE1QixLQUFLLFdBQUEsRUFBRyxRQUFRLGNBQUEsQ0FBWTtnQkFDbkMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxRQUFRLEVBQUU7b0JBQy9CLElBQUksRUFBRSxDQUFDO2lCQUNWO3FCQUFNO29CQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNqQixLQUFLLEVBQUUsNENBQTRDO3FCQUN0RCxDQUFDLENBQUM7aUJBQ047Ozs7S0FDSjtJQUVLLGlEQUE0QixHQUFsQyxVQUNJLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0I7Ozs7OzRCQUVMLHFCQUFNLHVCQUFZLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUF4RCxJQUFJLEdBQUcsU0FBaUQ7d0JBQzlELElBQUksSUFBSSxFQUFFOzRCQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFLENBQUMsQ0FBQzt5QkFDaEU7NkJBQU07NEJBQ0gsSUFBSSxFQUFFLENBQUM7eUJBQ1Y7Ozs7O0tBQ0o7SUFFSyxzREFBaUMsR0FBdkMsVUFDSSxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCOzs7Ozs0QkFFTCxxQkFBTSx1QkFBWSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBeEQsSUFBSSxHQUFHLFNBQWlEO3dCQUM5RCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFOzRCQUN2QyxJQUFJLEVBQUUsQ0FBQzt5QkFDVjs2QkFBTTs0QkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO3lCQUNwRDs7Ozs7S0FDSjtJQWVLLHVDQUFrQixHQUF4QixVQUNJLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0I7Ozs7OzRCQUVMLHFCQUFNLHVCQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUFyRCxJQUFJLEdBQUcsU0FBOEM7d0JBQzNELElBQUksSUFBSSxFQUFFOzRCQUNOLElBQUksRUFBRSxDQUFDO3lCQUNWOzZCQUFNOzRCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dDQUNqQixLQUFLLEVBQUUsZUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sZUFBWTs2QkFDL0MsQ0FBQyxDQUFDO3lCQUNOOzs7OztLQUNKO0lBRUssa0NBQWEsR0FBbkIsVUFDSSxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCOzs7Z0JBRWxCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxJQUFJLEVBQUUsQ0FBQzs7OztLQUNWO0lBRUwsaUJBQUM7QUFBRCxDQUFDLEFBL0VELElBK0VDO0FBRUQsa0JBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQSJ9
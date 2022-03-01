"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var mongoose_service_1 = __importDefault(require("../../common/mongoose.service"));
var UsersDao = /** @class */ (function () {
    function UsersDao() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.userSchema = new this.Schema({
            _id: String,
            email: String,
            password: { type: String, select: false },
            firstName: String,
            lastName: String,
            permissionFlags: Number,
        }, { id: false });
        this.User = mongoose_service_1.default.getMongoose().model('Users', this.userSchema);
        console.log("A new Instance");
    }
    UsersDao.prototype.addUser = function (userFields) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = String(new Date().valueOf());
                        return [4 /*yield*/, this.User.create(__assign({ _id: userId, permissionFlags: 1 }, userFields))];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, userId];
                }
            });
        });
    };
    UsersDao.prototype.getUserByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.User.findOne({ email: email })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersDao.prototype.getUserById = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.User.findOne({ _id: userId })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersDao.prototype.getUsers = function (limit, page) {
        if (limit === void 0) { limit = 25; }
        if (page === void 0) { page = 0; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.User.find()
                            .skip(limit * page)
                            .limit(limit)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersDao.prototype.removeUserById = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.User.deleteOne({ _id: userId })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersDao.prototype.updateUserById = function (userId, userFields) {
        return __awaiter(this, void 0, void 0, function () {
            var existingUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.User.findOneAndUpdate({ _id: userId }, { $set: userFields }, { new: true, useFindAndModify: false })];
                    case 1:
                        existingUser = _a.sent();
                        return [2 /*return*/, existingUser];
                }
            });
        });
    };
    UsersDao.prototype.getUserByEmailWithPassword = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.User.findOne({ email: email })
                        .select('_id email permissionFlags +password')];
            });
        });
    };
    return UsersDao;
}());
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91c2VyL2Rhb3MvdXNlcnMuZGFvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsbUZBQTREO0FBRzVEO0lBYUk7UUFaQSxXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFFOUMsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixHQUFHLEVBQUUsTUFBTTtZQUNYLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ3pDLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLGVBQWUsRUFBRSxNQUFNO1NBQzFCLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUVsQixTQUFJLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVqRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVLLDBCQUFPLEdBQWIsVUFBYyxVQUF5Qjs7Ozs7O3dCQUM3QixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzt3QkFDL0IscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLFlBQ2hDLEdBQUcsRUFBRSxNQUFNLEVBRVgsZUFBZSxFQUFFLENBQUMsSUFDZixVQUFVLEVBQ2YsRUFBQTs7d0JBTEksSUFBSSxHQUFHLFNBS1g7d0JBRUYsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUssaUNBQWMsR0FBcEIsVUFBcUIsS0FBYTs7Ozs0QkFDdkIscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQTs0QkFBaEQsc0JBQU8sU0FBeUMsRUFBQzs7OztLQUNwRDtJQUVLLDhCQUFXLEdBQWpCLFVBQWtCLE1BQWM7Ozs7NEJBQ3JCLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUE7NEJBQS9DLHNCQUFPLFNBQXdDLEVBQUM7Ozs7S0FDbkQ7SUFFSywyQkFBUSxHQUFkLFVBQWUsS0FBVSxFQUFFLElBQVE7UUFBcEIsc0JBQUEsRUFBQSxVQUFVO1FBQUUscUJBQUEsRUFBQSxRQUFROzs7OzRCQUN4QixxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTs2QkFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7NkJBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBQTs0QkFGakIsc0JBQU8sU0FFVSxFQUFBOzs7O0tBRXBCO0lBRUssaUNBQWMsR0FBcEIsVUFBcUIsTUFBYzs7Ozs0QkFDeEIscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQTs0QkFBakQsc0JBQU8sU0FBMEMsRUFBQzs7OztLQUNyRDtJQUVLLGlDQUFjLEdBQXBCLFVBQ0ksTUFBYyxFQUNkLFVBQXFDOzs7Ozs0QkFFaEIscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FDakQsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQ2YsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQ3BCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBSSxnQkFBZ0IsRUFBQyxLQUFLLEVBQUMsQ0FDekMsRUFBQTs7d0JBSkssWUFBWSxHQUFHLFNBSXBCO3dCQUVELHNCQUFPLFlBQVksRUFBQzs7OztLQUN2QjtJQUNLLDZDQUEwQixHQUFoQyxVQUFpQyxLQUFhOzs7Z0JBQzFDLHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO3lCQUNyQyxNQUFNLENBQUMscUNBQXFDLENBQUMsRUFBQTs7O0tBRXJEO0lBQ0wsZUFBQztBQUFELENBQUMsQUFqRUQsSUFpRUM7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFBIn0=
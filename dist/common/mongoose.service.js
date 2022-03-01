"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var MongooseService = /** @class */ (function () {
    function MongooseService() {
        var _this = this;
        this.count = 0;
        this.mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        };
        this.connectWithRetry = function () {
            mongoose_1.default
                .connect('mongodb://localhost:27017/api-db', _this.mongooseOptions)
                .then(function () {
                console.log('MongoDB is connected');
            })
                .catch(function (err) {
                var retrySeconds = 5;
                console.log("MongoDB connection unsuccessful (will retry #".concat(++_this
                    .count, " after ").concat(retrySeconds, " seconds):"), err);
                setTimeout(_this.connectWithRetry, retrySeconds * 1000);
            });
        };
        this.connectWithRetry();
    }
    MongooseService.prototype.getMongoose = function () {
        return mongoose_1.default;
    };
    return MongooseService;
}());
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vbW9uZ29vc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUErQjtBQUUvQjtJQVFJO1FBQUEsaUJBRUM7UUFUTyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1Ysb0JBQWUsR0FBRztZQUN0QixlQUFlLEVBQUUsSUFBSTtZQUNyQixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLHdCQUF3QixFQUFFLElBQUk7U0FDakMsQ0FBQztRQVNGLHFCQUFnQixHQUFHO1lBQ2Ysa0JBQVE7aUJBQ0gsT0FBTyxDQUFDLGtDQUFrQyxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUM7aUJBQ2pFLElBQUksQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7Z0JBQ1AsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUNQLHVEQUFnRCxFQUFFLEtBQUk7cUJBQ2pELEtBQUssb0JBQVUsWUFBWSxlQUFZLEVBQzVDLEdBQUcsQ0FDTixDQUFDO2dCQUNGLFVBQVUsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDO1FBckJFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksT0FBTyxrQkFBUSxDQUFDO0lBQ3BCLENBQUM7SUFpQkwsc0JBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBQ0Qsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9
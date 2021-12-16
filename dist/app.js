"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var winston = __importStar(require("winston"));
var expressWinston = __importStar(require("express-winston"));
var cors_1 = __importDefault(require("cors"));
var debug_1 = __importDefault(require("debug"));
var users_routes_config_1 = require("./user/users.routes.config");
var app = (0, express_1.default)();
var server = (0, http_1.createServer)(app);
var PORT = 4300;
var routes = [];
var debugLog = (0, debug_1.default)("app");
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
var loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
};
if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}
// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));
// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
routes.push(new users_routes_config_1.UsersRoutes(app));
app.get("/", function (req, res) {
    res.status(200).json({ message: "Good one" });
});
server.listen(PORT, function () {
    routes.forEach(function (route) {
        debugLog("Routes configured for ".concat(route.getName()));
    });
    console.log("The app is running on http://localhost:".concat(PORT));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBNkI7QUFDN0IsNkJBQTJDO0FBQzNDLCtDQUFrQztBQUNsQyw4REFBaUQ7QUFDakQsOENBQXVCO0FBQ3ZCLGdEQUF5QjtBQUd6QixrRUFBd0Q7QUFFeEQsSUFBTSxHQUFHLEdBQXdCLElBQUEsaUJBQU8sR0FBRSxDQUFBO0FBQzFDLElBQU0sTUFBTSxHQUFZLElBQUEsbUJBQVksRUFBQyxHQUFHLENBQUMsQ0FBQTtBQUN6QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUE7QUFDakIsSUFBTSxNQUFNLEdBQThCLEVBQUUsQ0FBQTtBQUM1QyxJQUFNLFFBQVEsR0FBcUIsSUFBQSxlQUFLLEVBQUMsS0FBSyxDQUFDLENBQUE7QUFHL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUE7QUFFZiw2RUFBNkU7QUFDN0UsdUVBQXVFO0FBQ3ZFLElBQU0sYUFBYSxHQUFpQztJQUNoRCxVQUFVLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUMxQixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUNyQixPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUN6QztDQUNKLENBQUM7QUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7SUFDcEIsYUFBYSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxpREFBaUQ7Q0FDaEY7QUFFRCxxREFBcUQ7QUFDckQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFFOUMsa0RBQWtEO0FBQ2xELHVGQUF1RjtBQUN2RixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRWxDLEdBQUcsQ0FBQyxHQUFHLENBQUUsR0FBRyxFQUFHLFVBQUMsR0FBcUIsRUFBRyxHQUFzQjtJQUMxRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRyxVQUFVLEVBQUMsQ0FBQyxDQUFBO0FBQ2hELENBQUMsQ0FBQyxDQUFBO0FBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUc7SUFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQTBCO1FBQ3RDLFFBQVEsQ0FBQyxnQ0FBeUIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFFLENBQUMsQ0FBQTtJQUN4RCxDQUFDLENBQUMsQ0FBQTtJQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsaURBQTBDLElBQUksQ0FBRSxDQUFDLENBQUE7QUFDakUsQ0FBQyxDQUFDLENBQUEifQ==
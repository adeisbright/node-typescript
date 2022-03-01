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
var dotenv_1 = __importDefault(require("dotenv"));
var users_routes_config_1 = require("./user/users.routes.config");
var auth_routes_config_1 = require("./auth/auth.routes.config");
var mongoose_loader_1 = __importDefault(require("./loaders/mongoose-loader"));
dotenv_1.default.config();
// if (dotenvResult.error) {
//     throw dotenvResult.error;
// }
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
routes.push(new auth_routes_config_1.AuthRoutes(app));
app.get("/", function (req, res) {
    res.status(200).json({ message: "Good one" });
});
(0, mongoose_loader_1.default)();
server.listen(PORT, function () {
    routes.forEach(function (route) {
        debugLog("Routes configured for ".concat(route.getName()));
    });
    console.log("The app is running on http://localhost:".concat(PORT));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBNkI7QUFDN0IsNkJBQTJDO0FBQzNDLCtDQUFrQztBQUNsQyw4REFBaUQ7QUFDakQsOENBQXVCO0FBQ3ZCLGdEQUF5QjtBQUN6QixrREFBMkI7QUFFM0Isa0VBQXdEO0FBQ3hELGdFQUFzRDtBQUN0RCw4RUFBZ0Q7QUFDaEQsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQiw0QkFBNEI7QUFDNUIsZ0NBQWdDO0FBQ2hDLElBQUk7QUFFSixJQUFNLEdBQUcsR0FBd0IsSUFBQSxpQkFBTyxHQUFFLENBQUE7QUFDMUMsSUFBTSxNQUFNLEdBQVksSUFBQSxtQkFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3pDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtBQUNqQixJQUFNLE1BQU0sR0FBOEIsRUFBRSxDQUFBO0FBQzVDLElBQU0sUUFBUSxHQUFxQixJQUFBLGVBQUssRUFBQyxLQUFLLENBQUMsQ0FBQTtBQUcvQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUN2QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQTtBQUVmLDZFQUE2RTtBQUM3RSx1RUFBdUU7QUFDdkUsSUFBTSxhQUFhLEdBQWlDO0lBQ2hELFVBQVUsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQ3pDO0NBQ0osQ0FBQztBQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtJQUNwQixhQUFhLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLGlEQUFpRDtDQUNoRjtBQUVELHFEQUFxRDtBQUNyRCxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUU5QyxrREFBa0Q7QUFDbEQsdUZBQXVGO0FBQ3ZGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxpQ0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNoQyxHQUFHLENBQUMsR0FBRyxDQUFFLEdBQUcsRUFBRyxVQUFDLEdBQXFCLEVBQUcsR0FBc0I7SUFDMUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUcsVUFBVSxFQUFDLENBQUMsQ0FBQTtBQUNoRCxDQUFDLENBQUMsQ0FBQTtBQUVGLElBQUEseUJBQVEsR0FBRSxDQUFBO0FBRVYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUc7SUFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQTBCO1FBQ3RDLFFBQVEsQ0FBQyxnQ0FBeUIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFFLENBQUMsQ0FBQTtJQUN4RCxDQUFDLENBQUMsQ0FBQTtJQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsaURBQTBDLElBQUksQ0FBRSxDQUFDLENBQUE7QUFDakUsQ0FBQyxDQUFDLENBQUEifQ==
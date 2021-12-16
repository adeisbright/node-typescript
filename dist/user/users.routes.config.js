"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
var common_routes_config_1 = require("../common/common.routes.config");
var users_controller_1 = __importDefault(require("./controllers/users.controller"));
var users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
var createUser = users_controller_1.default.createUser, listUsers = users_controller_1.default.listUsers, getUserById = users_controller_1.default.getUserById, removeUser = users_controller_1.default.removeUser, updateUser = users_controller_1.default.updateUser, partialUpdateUser = users_controller_1.default.partialUpdateUser;
var validateRequiredUserBodyFields = users_middleware_1.default.validateRequiredUserBodyFields, validateSameEmailDoesntExist = users_middleware_1.default.validateSameEmailDoesntExist, extractUserId = users_middleware_1.default.extractUserId, validateUserExists = users_middleware_1.default.validateUserExists, validateSameEmailBelongToSameUser = users_middleware_1.default.validateSameEmailBelongToSameUser, validatePatchEmail = users_middleware_1.default.validatePatchEmail;
var UsersRoutes = /** @class */ (function (_super) {
    __extends(UsersRoutes, _super);
    function UsersRoutes(app) {
        return _super.call(this, app, "UserRoutes") || this;
    }
    UsersRoutes.prototype.configureRoutes = function () {
        this.app.route("/users")
            .get(listUsers)
            .post(validateRequiredUserBodyFields, validateSameEmailDoesntExist, createUser);
        this.app.param("userId", extractUserId);
        this.app.route("/users/:userId")
            .all(validateUserExists)
            .get(getUserById)
            .put(validateRequiredUserBodyFields, validateSameEmailBelongToSameUser, updateUser).patch(validatePatchEmail, partialUpdateUser)
            .delete(removeUser);
        return this.app;
    };
    return UsersRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQW9FO0FBRXBFLG9GQUE2RDtBQUM3RCxtRkFBdUQ7QUFHbkQsSUFBQSxVQUFVLEdBTVYsMEJBQWUsV0FOTCxFQUNWLFNBQVMsR0FLVCwwQkFBZSxVQUxOLEVBQ1QsV0FBVyxHQUlYLDBCQUFlLFlBSkosRUFDWCxVQUFVLEdBR1YsMEJBQWUsV0FITCxFQUNWLFVBQVUsR0FFViwwQkFBZSxXQUZMLEVBQ1YsaUJBQWlCLEdBQ2pCLDBCQUFlLGtCQURFLENBQ0Y7QUFHZixJQUFBLDhCQUE4QixHQU05QiwwQkFBVSwrQkFOb0IsRUFDOUIsNEJBQTRCLEdBSzVCLDBCQUFVLDZCQUxrQixFQUM1QixhQUFhLEdBSWIsMEJBQVUsY0FKRyxFQUNiLGtCQUFrQixHQUdsQiwwQkFBVSxtQkFIUSxFQUNsQixpQ0FBaUMsR0FFakMsMEJBQVUsa0NBRnVCLEVBQ2pDLGtCQUFrQixHQUNsQiwwQkFBVSxtQkFEUSxDQUNSO0FBQ2Q7SUFBaUMsK0JBQWtCO0lBQy9DLHFCQUFZLEdBQXlCO2VBQ2pDLGtCQUFNLEdBQUcsRUFBRyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRyxDQUFDLFNBQVMsQ0FBQzthQUNkLElBQUksQ0FDRCw4QkFBOEIsRUFDOUIsNEJBQTRCLEVBQzVCLFVBQVUsQ0FDYixDQUFBO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFHLGFBQWEsQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2FBQy9CLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQzthQUN2QixHQUFHLENBQUMsV0FBVyxDQUFDO2FBQ2hCLEdBQUcsQ0FDQSw4QkFBOEIsRUFDOUIsaUNBQWlDLEVBQ2pDLFVBQVUsQ0FDYixDQUFDLEtBQUssQ0FDSCxrQkFBa0IsRUFDbEIsaUJBQWlCLENBQ3BCO2FBQ0EsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRW5CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLEFBL0JELENBQWlDLHlDQUFrQixHQStCbEQ7QUEvQlksa0NBQVcifQ==
import { CommonRoutesConfig } from '../common/common.routes.config';
import authController from './auth.controller';
import AuthMiddleware from '../user/middleware/auth.middleware';
import jwtMiddleware from './jwt.middleware';
import express from 'express';

export class AuthRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }

    configureRoutes(): express.Application {
        this.app.post(`/auth`, 
            AuthMiddleware.verifyUserPassword,
            authController.createJWT,
        );

        this.app.post(`/auth/refresh-token`, [
            jwtMiddleware.validJWTNeeded,
            jwtMiddleware.verifyRefreshBodyField,
            jwtMiddleware.validRefreshNeeded,
            authController.createJWT,
        ]);
        return this.app;
    }
}
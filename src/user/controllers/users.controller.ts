import express from "express" 

import userServices from "../services/user.services" 


class UsersController {
    async listUsers(req: express.Request, res: express.Response) {
        const users = await userServices.list(100, 0);
        res.status(200).json(users);
    }

    async getUserById(req: express.Request, res: express.Response) {
        const user = await userServices.readById(req.body.id);
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response) {
        const user = await userServices.create(req.body);
        res.status(201).json(user);
    }

    async partialUpdateUser(req: express.Request, res: express.Response) {
        
        await userServices.patchById(req.body.id, req.body);
        res.status(204).send();
    }

    async updateUser(req: express.Request, res: express.Response) {
        await userServices.putById(req.body.id, req.body);
        res.status(204).send();
    }

    async removeUser(req: express.Request, res: express.Response) {
        await userServices.deleteById(req.body.id);
        res.status(204).send("User Removed");
    }
}

export default new UsersController();
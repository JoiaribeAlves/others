import "dotenv/config";
import express from "express";
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";

import "./database";

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();
const port = process.env.PORT || 4000;

const adminJS = new AdminJS({
	databases: [],
	rootPath: "/dashboard",
	resources: [],
});

const router = AdminJSExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath, router);

app.listen(port, () => console.log(`Server is running on PORT: ${port}`));

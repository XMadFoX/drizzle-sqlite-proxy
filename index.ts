import db from "./drizzle";
import { users } from "./schema";

db.select()
	.from(users)
	.then((rows) => {
		console.log(rows);
	});

import { drizzle } from 'drizzle-orm/neon-http';
import { usersTable } from './schema';
import { eq } from 'drizzle-orm';

export const db = drizzle(process.env.DATABASE_URL!);
async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: 'Dev',
    age: 26,
    email: 'Dev@gmail.com',
  };
  await db.insert(usersTable).values(user);
  console.log('New user created!')
  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
    console.log('User info updated!')
}
main();
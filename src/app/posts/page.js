import {revalidatePath} from "next/cache";
// easy to use the wrong import here
import {redirect} from "next/navigation";

import pg from "pg";
export default function posts() {
  async function handleSubmit(formData) {
    "use server";
    console.log("running on the server after submit");
    const db = new pg.Pool({
      connectionString: process.env.DB_CONN,
    });

    const data = Object.fromEntries(formData);
    const {name, country, class1, launchdate, img_url} = data;
    await db.query(
      `INSERT INTO ships (name, country, class1, launchdate, img_url) VALUES ($1, $2, $3, $4, $5)`,
      [name, country, class1, launchdate]
    );

    console.log(data);

    revalidatePath("/ships");

    redirect("/ships");
  }

  return (
    // the callback we give to action always get formData
    <form className="border border-blue-400 grd grid-col" action={handleSubmit}>
      <label htmlFor="title01">title</label>
      <input name="name" placeholder="name" required id="title01" />
      <input name="country" placeholder="country" required />
      <input name="class1" placeholder="class" required />
      <input type="date" name="launchdate" placeholder="launchdate" required />
      <input name="img_url" placeholder="img_url" />
      <button type="submit">submit</button>
    </form>
  );
}

import React from "react";
import {auth} from "@clerk/nextjs/server";
import {connect} from "@/utils/connect";


export default async function UserForm() {
  // get user id from clerk
  const {userId} = await auth();

  // server action to update my database
  async function handleSubmit(formData) {
    "use server";
    // turning form data into a normal object and destructuring into variables
    const {alias, name, surnname, bio, url, email, userId} = Object.fromEntries(formData);

    const db = connect();
    db.query(
      `INSERT INTO userprofile (alias, name, surnname, bio, url, email, clerk_id) VALUES ($1, $2, $3, $4. $5, $6, $7)`,
      [alias, name, surnname, bio, url, email, userId]
    );
  }

  return (
    <form action={handleSubmit}>
      <input name="alias" placeholder="User Name" />
      <input name="name" placeholder="Name" />
      <input name="surname" placeholder="Surname" />
      <input name="bio" placeholder="enter a bio" />
      <input name="url" placeholder="Image" />
      <input name="email" placeholder="Email" />
      <button type="submit">submit</button>
    </form>
  );
}

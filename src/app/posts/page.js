// /app/posts/new/page.js
import Link from "next/link";
import pg from "pg";
import Image from "next/image";
// import wrapperStyle from "../css/wrapper.module.css";
// import { db } from "@/utils/utilities.js";

export default async function Posts() {
  const db = new pg.Pool({
    connectionString: process.env.DB_CONN,
  });

  const data = await db.query(`SELECT * FROM cartoons`);
  const posts = data.rows;

  console.log(posts);

  return (
    <div>
      <div className="">
        <div className="">
          <h2>This is a post route</h2>
          {posts.map((post) => (
            <div key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <p>Name:{post.name}</p>
                <Image src={post.url} height={250} width={250} alt="eddy" />
                <p>Ran From:{post.started}</p>
                <p>to:{post.ended}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
{
  /* <Image src={post.url} height={250} width={250} alt="eddy" /> */
}
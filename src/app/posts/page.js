import Link from "next/link";
import Image from "next/image";
import pg from "pg";
import("next").NextConfig;

// images: {
//   formats: ["image/avif", "image/webp"], remotePatterns;
//   [
//     {
//       protocol: "https",
//       hostname: "s3-eu-central-1.amazonaws.com",
//       port: "",
//       pathname: "/mycompany-data-bucket-dev/**",
//     },
//   ];
// }

// /** @type {import('next').NextConfig} */
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "assets.vercel.com",
//         port: "",
//         pathname: "/image/upload/**",
//         search: "",
//       },
//     ],
//   },
// };

export default async function Posts() {
  const db = new pg.Pool({connectionString: process.env.DB_CONN});

  const data = await db.query(`SELECT * FROM ships`);
  const ships = data.rows;

  console.log(ships);
  return (
    <div>
      <h2>This is the ships route!</h2>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {ships.map((ships) => (
          <div key={ships.id}>
            <Link href={`/ships/${ships.id}`}>
              <p>{ships.name}</p>
              <Image
                height={500}
                width={350}
                alt={
                  "https://c8.alamy.com/zooms/9/0004e263e757453daff9ac04948695b3/dnmtwt.jpg"
                }
                src={ships.img_url}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
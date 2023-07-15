import Link from "next/link";
import { getProjects } from "../../../sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
          Yogi
        </span>
        !
      </h1>
      <p className="text-xl mt-3 text-gray-600">
        Hallo everyone! Checkout my projects!
      </p>
      <h2 className="text-3xl font-bold text-gray-700 mt-24">My projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {projects.map((project) => (
          <>
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="border border-gray-500 rounded-md p-4"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-md border border-gray-500"
                />
              )}
              <div className="font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                {project.name}
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

// export function getStaticPaths() {}

// export function getStaticProps() {
//   return {
//     props: {
//       projects: []
//     }
//   }
// }

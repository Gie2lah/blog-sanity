import React from "react";
import { getProject } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type ProjectPageProps = {
  params: { project: string };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <h1>{project.name}</h1>
      <div>
        <div>
          <PortableText value={project.content} />
        </div>
      </div>
    </div>
  );
}

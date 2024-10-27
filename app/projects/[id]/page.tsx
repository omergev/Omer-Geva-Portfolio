import React from "react";
import ProjectTemplate from "@/app/components/ProjectTemplate";
import { projects } from "@/utils/projects";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}
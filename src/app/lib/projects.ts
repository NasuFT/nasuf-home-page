import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getImage } from "./image";
import { StaticImageData } from "next/image";

const projectsDirectory = path.join(process.cwd(), "src", "app", "projects");

export interface Project {
  id: string;
  title: string;
  date: Date;
  link: string;
  skills: string[];
  description: string;
  img: StaticImageData;
}

export function getProjects() {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName, i) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
      img: getImage(id),
      description: matterResult.content,
    };
  }) as Project[];

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

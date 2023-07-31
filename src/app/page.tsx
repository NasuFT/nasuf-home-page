import { HomeComponent } from "./components/main";
import { getProjects } from "./lib/projects";

export default function Home() {
  const projects = getProjects();

  return <HomeComponent projects={projects} />;
}
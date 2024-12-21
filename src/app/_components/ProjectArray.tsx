// import ProjectCard from "../_components/ProjectCard";
// import { supabase } from "../lib/supabase";
// import { Project } from "../interfaces";

// interface ProjectDetailsProps {
//   projects: Project[];
// }

// export default function ProjectArray({ projects }: ProjectDetailsProps) {
//   return (
//     <div className="flex flex-col gap-4">
//       {projects.map((project, index) => (
//         <ProjectCard key={index} project={project} />
//       ))}
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const { data: projects, error } = await supabase.from("projects").select("*");

//   if (error) {
//     console.error("Error fetching projects:", error);
//     return {
//       props: {
//         projects: [],
//       },
//     };
//   }

//   // Type assertion to ensure the `projects` data is of type `Project[]`
//   return {
//     props: {
//       projects: projects as Project[], // Type assertion here
//     },
//   };
// }

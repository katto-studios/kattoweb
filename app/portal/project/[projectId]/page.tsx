import { TeamCard } from "@/components/project/team";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const { data: project } = await supabase
    .from("project")
    .select(`*`)
    .eq("project_id", params.projectId)
    .single();

  const { data: memberProjectRoles } = await supabase
    .from("project_role")
    .select("*")
    .eq("project_id", params.projectId);

  if (!project || !memberProjectRoles) {
    redirect("/portal");
  }

  return (
    <div className="container mx-auto p-8 space-y-4">
      <h1 className="text-5xl font-light text-slate-700">{project.name}</h1>
      <p>{project.description}</p>

      <div className="grid grid-cols-3 gap-4">
        {TeamCard.fromMemberProjectRoles({ members: memberProjectRoles })}
      </div>
    </div>
  );
}

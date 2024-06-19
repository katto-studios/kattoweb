import ResourcesCard from "@/components/project/dash/resources";
import { TeamCard } from "@/components/project/dash/team";
import StatusBadge from "@/components/project/status-badge";
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
    .select(`*`)
    .eq("project_id", params.projectId);

  if (!project || !memberProjectRoles) {
    redirect("/portal");
  }

  const { data: members } = await supabase
    .from("profile")
    .select(`*`)
    .in(
      "user_id",
      memberProjectRoles.map((role) => role.user_id)
    );

  console.log(members);

  const memberProjectRolesWithProfile = memberProjectRoles.map((role) => {
    const profile = members?.find((member) => member.user_id === role.user_id);
    return { ...role, profile };
  });

  console.log(memberProjectRolesWithProfile);

  return (
    <div className="container mx-auto p-8 space-y-4 min-h-[70vh]">
      <h1 className="text-5xl font-light text-slate-700">{project.name}</h1>
      <StatusBadge status={project.status} />
      <p className="text-lg font-medium text-slate-500">
        {project.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {memberProjectRoles &&
          TeamCard.fromMemberProjectRoles({
            members: memberProjectRolesWithProfile,
          })}

        {project.resources && (
          <ResourcesCard
            className="col-span-2"
            resources={project.resources as Record<string, string>}
          />
        )}
      </div>
    </div>
  );
}

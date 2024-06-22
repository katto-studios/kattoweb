import BackButton from "@/components/navigation/back";
import ResourcesCard from "@/components/project/dash/resources";
import { TeamCard } from "@/components/project/dash/team";
import TransactionsCard from "@/components/project/dash/transactions";
import StatusBadge from "@/components/project/status-badge";
import { createClient } from "@/utils/supabase/server";
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

  const [projectResponse, memberProjectRolesResponse] = await Promise.all([
    supabase
      .from("project")
      .select(`*`)
      .eq("project_id", params.projectId)
      .single(),
    supabase
      .from("project_role")
      .select(`*`)
      .eq("project_id", params.projectId),
  ]);

  const { data: project } = projectResponse;
  const { data: memberProjectRoles } = memberProjectRolesResponse;

  if (!project || !memberProjectRoles) {
    redirect("/portal");
  }

  const [memberResponse, transactionResponse] = await Promise.all([
    supabase
      .from("profile")
      .select(`*`)
      .in(
        "user_id",
        memberProjectRoles.map((role) => role.user_id)
      ),
    supabase.from("transaction").select(`*`).eq("project_id", params.projectId),
  ]);

  const { data: members } = memberResponse;
  const { data: transactions } = transactionResponse;

  const memberProjectRolesWithProfile = memberProjectRoles.map((role) => {
    const profile = members?.find((member) => member.user_id === role.user_id);
    return { ...role, profile };
  });

  return (
    <div className="page-container space-y-4">
      <BackButton />
      <h1 className="text-5xl font-light text-slate-700">{project.name}</h1>
      <StatusBadge status={project.status} />
      <p className="text-lg font-medium text-slate-500">
        {project.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {memberProjectRoles && (
          <TeamCard.FromMemberProjectRoles
            className="col-span-1"
            members={memberProjectRolesWithProfile}
          />
        )}

        {project.resources && (
          <ResourcesCard
            className="col-span-1 md:col-span-1 lg:col-span-2"
            projectId={project.project_id}
            resources={project.resources as Record<string, string>}
          />
        )}

        {transactions && (
          <TransactionsCard.FromTransactionsDto
            className="col-span-1 md:col-span-2 lg:col-span-3"
            transactions={transactions}
            memberProjectRolesWithProfile={memberProjectRolesWithProfile}
          />
        )}
      </div>
    </div>
  );
}

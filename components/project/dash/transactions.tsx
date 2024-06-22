import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";
import { DashCard, DashCardProps, DashCardTitle } from "./card";
import { Database } from "@/utils/supabase/types";
import Input from "@/components/input";
import MemberCard, { MemberCardProps } from "../member-card";
import { PROJECT_ROLE_MAP } from "@/utils/project-role";
import { Badge } from "@/components/shadcn/ui/badge";
import { Label } from "@/components/shadcn/ui/label";

export type TransactionsCardProps = DashCardProps & {
  totalExpenses: string;
  totalRevenue: string;
  transactions: {
    id: string;
    amount: string;
    createdAt: string;
    type: string;
    description?: string;
    due?: string;
    status?: string;
    from?: MemberCardProps;
    to?: MemberCardProps;
  }[];
};

function TransactionTypeBadge({ type }: { type: string }) {
  switch (type) {
    case "EXPENSE":
      return <Badge variant="destructive">Expense</Badge>;
    case "REVENUE":
      return <Badge variant="default">Revenue</Badge>;
    default:
      return <Badge variant="secondary">{type}</Badge>;
  }
}

function TransactionStatusBadge({ status }: { status?: string }) {
  if (!status) {
    return <>-</>;
  }
  switch (status) {
    case "PENDING":
      return <Badge variant="outline">Pending</Badge>;
    case "PAID":
      return <Badge variant="default">Paid</Badge>;
    case "FAILED":
      return <Badge variant="destructive">Failed</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}

function TransactionsCard({ transactions, ...props }: TransactionsCardProps) {
  if (transactions.length === 0) {
    return (
      <DashCard {...props}>
        <DashCardTitle>Transactions</DashCardTitle>
        <p className="text-center text-lg text-slate-500">
          No transactions found
        </p>
      </DashCard>
    );
  }

  return (
    <DashCard {...props}>
      <DashCardTitle>Transactions</DashCardTitle>
      <div className="flex space-x-6">
        <div className="flex flex-col gap-2">
          <Label>Project Revenue</Label>
          <span className="text-2xl font-light">{props.totalRevenue}</span>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Project Expenses</Label>
          <span className="text-2xl font-light">{props.totalExpenses}</span>
        </div>
      </div>
      <Table>
        <TableCaption>All transactions related to the project</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Due</TableHead>
            <TableHead>From</TableHead>
            <TableHead>To</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>
                <Input value={transaction.id} readOnly={true} />
              </TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.createdAt}</TableCell>
              <TableCell>
                <TransactionTypeBadge type={transaction.type} />
              </TableCell>

              <TableCell>
                <TransactionStatusBadge status={transaction.status} />
              </TableCell>

              <TableCell>{transaction.description ?? "-"}</TableCell>
              <TableCell>{transaction.due ?? "-"}</TableCell>
              <TableCell>
                {transaction.from ? <MemberCard {...transaction.from} /> : "-"}
              </TableCell>
              <TableCell>
                {transaction.to ? <MemberCard {...transaction.to} /> : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DashCard>
  );
}

type TransactionDto = Database["public"]["Tables"]["transaction"]["Row"];
TransactionsCard.FromTransactionsDto = function FromTransactionsDto({
  transactions,
  memberProjectRolesWithProfile,
  ...props
}: {
  transactions: TransactionDto[];
  memberProjectRolesWithProfile: {
    user_id: string;
    role: Database["public"]["Enums"]["role_title"] | null;
    profile?: {
      display_name: string | null;
      org_name: string | null;
      email: string | null;
    };
  }[];
} & DashCardProps) {
  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "EXPENSE")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalRevenue = transactions
    .filter((transaction) => transaction.type === "REVENUE")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const transactionsWithMembers = transactions.map((transaction) => {
    const from = memberProjectRolesWithProfile.find(
      (role) => role.user_id === transaction.from_user_id
    );
    const to = memberProjectRolesWithProfile.find(
      (role) => role.user_id === transaction.to_user_id
    );
    return {
      ...transaction,
      from: from
        ? {
            name: from.profile?.display_name ?? from.user_id,
            email: from.profile?.email ?? undefined,
            roleName: PROJECT_ROLE_MAP[from.role ?? "MEMBER"].shortHand,
            color: PROJECT_ROLE_MAP[from.role ?? "MEMBER"].color,
          }
        : undefined,
      to: to
        ? {
            name: to.profile?.display_name ?? to.user_id,
            email: to.profile?.email ?? undefined,
            roleName: PROJECT_ROLE_MAP[to.role ?? "MEMBER"].shortHand,
            color: PROJECT_ROLE_MAP[to.role ?? "MEMBER"].color,
          }
        : undefined,
    };
  });
  return (
    <TransactionsCard
      totalExpenses={`$${totalExpenses / 100}`}
      totalRevenue={`$${totalRevenue / 100}`}
      transactions={transactionsWithMembers.map((transaction) => ({
        id: transaction.transaction_id,
        amount: `$${transaction.amount / 100}`,
        createdAt: new Date(
          Date.parse(transaction.created_at)
        ).toLocaleString(),
        type: transaction.type,
        description: transaction.description ?? undefined,
        due: transaction.due ?? undefined,
        status: transaction.status,
        from: transaction.from,
        to: transaction.to,
      }))}
      {...props}
    />
  );
};

export default TransactionsCard;

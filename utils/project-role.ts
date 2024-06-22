import { Database } from "./supabase/types";

export const PROJECT_ROLE_MAP = {
  PRODUCT_OWNER: {
    displayName: "Product Owner",
    shortHand: "PO",
    color: "hsla(307, 50%, 80%, 1)",
  },
  PROJECT_MANAGER: {
    displayName: "Project Manager",
    shortHand: "PM",
    color: "hsla(360, 50%, 80%, 1)",
  },
  DEVELOPER: {
    displayName: "Developer",
    shortHand: "DEV",
    color: "hsla(180, 50%, 80%, 1)",
  },
  UIUX: {
    displayName: "UI/UX",
    shortHand: "UI/UX",
    color: "hsla(270, 50%, 80%, 1)",
  },
  INFRA: {
    displayName: "Infrastructure",
    shortHand: "INFRA",
    color: "hsla(90, 50%, 80%, 1)",
  },
  QA: {
    displayName: "Quality Assurance",
    shortHand: "QA",
    color: "hsla(135, 50%, 80%, 1)",
  },
  MEMBER: {
    displayName: "Member",
    shortHand: "MEM",
    color: "hsla(0, 0%, 80%, 1)",
  },
} satisfies ProjectRoleMap & {
  [key: string]: {
    displayName: string;
    shortHand: string;
    color: string;
  };
};

type ProjectRoleMap = Record<
  Database["public"]["Enums"]["role_title"],
  {
    displayName: string;
    shortHand: string;
    color: string; //in hex
  }
>;

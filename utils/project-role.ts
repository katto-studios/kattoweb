import { Database } from "./supabase/types";

export const PROJECT_ROLE_MAP = {
  PRODUCT_OWNER: {
    displayName: "Product Owner",
    shortHand: "PO",
    color: "#FFFF00",
  },
  PROJECT_MANAGER: {
    displayName: "Project Manager",
    shortHand: "PM",
    color: "#FFA500",
  },
  DEVELOPER: {
    displayName: "Developer",
    shortHand: "DEV",
    color: "#FF0000",
  },
  UIUX: {
    displayName: "UI/UX",
    shortHand: "UI/UX",
    color: "#0000FF",
  },
  INFRA: {
    displayName: "Infrastructure",
    shortHand: "INFRA",
    color: "#00FF00",
  },
  QA: {
    displayName: "Quality Assurance",
    shortHand: "QA",
    color: "#800080",
  },
} satisfies ProjectRoleMap;

type ProjectRoleMap = Record<
  Database["public"]["Enums"]["role_title"],
  {
    displayName: string;
    shortHand: string;
    color: string; //in hex
  }
>;

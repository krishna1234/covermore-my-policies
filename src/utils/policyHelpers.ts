import type { Policy } from "../types/policy";

export const getActivePolicies = (
  policies: Policy[]
): Policy[] => {
  return policies.filter((policy) => policy.status === "Active");
}

export const sortPoliciesByStartDate = (
  policies: Policy[]
): Policy[] => {
  return [...policies].sort((a,b) => new Date(a.policyStart).getTime() - new Date(b.policyStart).getTime());
}
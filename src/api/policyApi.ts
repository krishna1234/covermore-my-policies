import policies from '../data/policies.json';

import type { Policy } from '../types/policy';

export const fetchPolicies = async (): Promise<Policy[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

  return policies as Policy[];
}
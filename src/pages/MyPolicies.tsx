import { useEffect, useState } from "react";
import { fetchPolicies } from "../api/policyApi";
import type { Policy } from "../types/policy";  
import { getActivePolicies, sortPoliciesByStartDate } from "../utils/policyHelpers";

function MyPolicies() {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);

  const activePolicies = getActivePolicies(policies);
  const sortedPolicies = sortPoliciesByStartDate(activePolicies);

  useEffect(() => {
    const loadPolicies = async () => {
      setLoading(true);
      const data = await fetchPolicies();
      setPolicies(data);
      setLoading(false);
    };
    loadPolicies();
  },[])

  if(loading) {
    return <div className="p-8">Loading...</div>
  }

  return(
    <div className="p-8">
      Total Policies: {sortedPolicies.length}
      <>
        {sortedPolicies.map((policy) => {
          return <div key={policy.policyNumber}>
            {policy.policyStart}
          </div>
        })}
      </>
    </div>  
  )
}

export default MyPolicies;
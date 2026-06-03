import { useEffect, useState } from "react";
import { fetchPolicies } from "../api/policyApi";
import type { Policy } from "../types/policy";  
import { getActivePolicies, sortPoliciesByStartDate } from "../utils/policyHelpers";
import PolicyCard from "../components/PolicyCard";

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
    <div className="max-w-6xl mx-auto p-8">      
      <>
        {sortedPolicies.map((policy) => {
          return <PolicyCard 
            key={policy.policyNumber} 
            policy={policy}
          />
        })}
      </>
    </div>  
  )
}

export default MyPolicies;
import { useEffect, useState } from "react";
import { fetchPolicies } from "../api/policyApi";
import type { Policy } from "../types/policy";  

function MyPolicies() {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);

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
      Total Policies: {policies.length}
    </div>  
  )
}

export default MyPolicies;
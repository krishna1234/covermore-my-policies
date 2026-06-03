import { useEffect, useState } from "react";
import { fetchPolicies } from "../api/policyApi";
import type { Policy } from "../types/policy";  
import { getActivePolicies, sortPoliciesByStartDate } from "../utils/policyHelpers";
import PolicyCard from "../components/PolicyCard";

function MyPolicies() {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const activePolicies = getActivePolicies(policies);
  const sortedPolicies = sortPoliciesByStartDate(activePolicies);
  
  
  const policiesPerPage = 3;
  const startIndex = (currentPage - 1) * policiesPerPage;
  const paginatedPolicies = sortedPolicies.slice(startIndex, startIndex + policiesPerPage);

  const totalPages = Math.ceil(sortedPolicies.length / policiesPerPage)

  const pageNumbers  = Array.from({ length: totalPages }, (_, i) => i + 1);

  

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
        {paginatedPolicies.map((policy) => {
          return <PolicyCard 
            key={policy.policyNumber} 
            policy={policy}
          />
        })}

        {/* pagination */}

        <div className="flex justify-center items-center gap-3 mt-10">
          {/* Previous */}
          <button 
            type="button" 
            disabled={currentPage === 1} 
            onClick={() => setCurrentPage(currentPage - 1)} 
            className="px-3 py-2 w-10 h-10 border rounded-full disabled:opacity:50 disabled:cursor-not-allowed">
            {" < "}
          </button>
          {pageNumbers.map((page) => {
            return(
              <button key={page} type="button" onClick={() => setCurrentPage(page)} className={`w-10 h-10 rounded-full border ${currentPage === page ? "bg-blue-700 text-white" : "bg-white"} mx-1 focus:outline focus:outline-2 focus:outline-blue-500`}>
                {page}
              </button>
            )
          })}
          {/* Next */}
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="
                px-3 py-2
                w-10 h-10
                border
                rounded-full
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >{" > "}</button>
        </div>
      </>
    </div>  
  )
}

export default MyPolicies;
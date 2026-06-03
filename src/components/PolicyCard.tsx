import type { Policy } from '../types/policy';
import { formatDate } from '../utils/dateFormatter';

type PolicyCardProps = {
  policy: Policy;
}

function PolicyCard({ policy }: PolicyCardProps) {
  return (
    <div className='bg-white rounded-2xl p-8 mb-8'>
      <div className='mb-6'>
        <h2 className='text-2xl'>
          <span className='font-bold text-blue-700'>
            Policy Number: 
          </span>&nbsp;&nbsp;
          {policy.policyNumber}
        </h2>
      </div>
      <div className='flex justify-between gap-10'>
        <div className='flex-1 p-2'>
          <div className='grid grid-cols-2 gap-10'>
    
            {/* Left Column */}
            <div className='pr-8 border-r border-gray-300'>

              <div className="mb-4">
                <span className="font-bold">
                  Destination:
                </span>{" "}
                <span>
                  {policy.destinations[0]?.name}
                </span>
              </div>

              {policy.type === "Single Trip" ? (
                <div className='mb-4'>
                  <span className='font-bold'>
                    Travel Date:
                  </span>{" "}
                  <span>
                    {formatDate(policy.policyStart)} - {formatDate(policy.policyEnd)}
                  </span>
                </div>
              ) : (
                <div className='mb-4'>
                  <span className='font-bold'>
                    Policy start date:
                  </span>{" "}
                  <span>
                    {formatDate(policy.policyStart)}
                  </span>
                </div>
              )}

              {policy.type === "Annual" && (
                <div className='mb-4'>
                  <span className='font-bold'>
                    Maximum trip duration:
                  </span>{" "}
                  <span>
                    Up to {policy.maxTripDuration} days
                  </span>
                </div>
              )}

            </div>

            {/* Right Column */}
            <div>
              <div className="mb-4">
                <span className="font-bold">
                  Plan:
                </span>{" "}
                <span>
                  {policy.planName}
                </span>
              </div>

              <div className="mb-4">
                <span className="font-bold">
                  Excess:
                </span>{" "}
                <span>
                  ${policy.excess}
                </span>
              </div>
            </div>
          </div>

          {/* footer for links */}

          <div className="mt-6 flex gap-6">
            <a
              href="#"
              className="
                underline
                focus:outline
                focus:outline-2
                focus:outline-blue-500
              "
            >
              View PDS
            </a>

            <a
              href="#"
              className="
                underline
                focus:outline
                focus:outline-2
                focus:outline-blue-500
              "
            >
              Certificate of Insurance
            </a>
          </div>

        </div>
        
        {/* Buttons Area */}

        <div className='w-64 p-4'>
          <button
            type='button'
            className='w-full px-6 py-3 rounded-full border-2 border-blue-700 bg-yellow-300 text-blue-700 text-center font-medium focus:outline focus:outline-2 focus:outline-blue-500'
            onClick={()  => {}}
          >
            Make a claim
          </button>
          <button
            type="button"
            className="
              w-full
              mt-4
              px-6
              py-3
              rounded-full
              border-2
              border-blue-700
              bg-white
              text-center
              text-blue-700
              font-medium
              focus:outline
              focus:outline-2
              focus:outline-blue-500
            "
            onClick={() => {}}
          >
            Manage my policy
          </button>
        </div>
      </div>
    </div>
  )
}

export default PolicyCard;
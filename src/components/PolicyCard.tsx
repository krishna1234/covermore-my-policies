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
        <div className='flex-1 border border-dashed p-4'>
          <div className='grid grid-cols-2 gap-10'>
    
            {/* Left Column */}
            <div>

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
        </div>
        <div className='w-64 border border-dashed p-4'>
          Buttons Area
        </div>
      </div>
    </div>
  )
}

export default PolicyCard;
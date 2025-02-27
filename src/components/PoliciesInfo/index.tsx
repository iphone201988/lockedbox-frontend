const PoliciesInfo = ({ listing }: { listing: any }) => {
  console.log("listing here", listing);
  return (
    <div>
      {/* Policies */}
      <div className="py-[16px] border-b border-[#EEEEEE]">
        <p className="text-[18px] font-semibold mb-[6px]">Policies</p>
        <ul className="list-disc list-inside flex flex-col gap-[6px]">
          {listing.policies.split(".").map((policy: string) => (
            <li>{policy}</li>
          ))}
          {/* <li>Hazardous materials, explosives, or flammables are prohibited</li>
          <li>No perishable goods or live animals</li>
          <li>No illegal items or contrabands</li> */}
        </ul>
      </div>

      {/* Cancellation policy */}
      <div className="py-[16px] border-b border-[#EEEEEE]">
        <p className="text-[18px] font-semibold mb-[6px]">
          Cancellation policy
        </p>
        <p>
          Confirmed bookings cancelled 5 days or earlier or more are refunded
          100%. Bookings that are cancelled within 4 days are refunded 75% minus
          service fee. Cancellations of ongoing rentals must be completed before
          the monthly continuation date for 100% refund.{" "}
          <a className="text-[#235370] underline" href="">
            Learn more
          </a>
        </p>
      </div>

      {/* Access */}
      <div className="py-[16px] border-b border-[#EEEEEE]">
        <p className="text-[18px] font-semibold mb-[6px]">Access</p>
        <ul className="list-disc list-inside flex flex-col gap-[6px]">
          <li>{listing.accessPolicy}</li>
          <li>Frequency is {listing.frequency}.</li>
        </ul>
      </div>
    </div>
  );
};

export default PoliciesInfo;

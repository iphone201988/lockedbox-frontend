import { useEffect } from "react";
import ProfileNavbar from "../../components/ProfileNavbar";

const TermsAndConditions = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
         <ProfileNavbar />
    <div className="px-[40px] max-lg:px-[20px] max-w-[1180px] mx-auto py-[24px]">
    <div className="pt-[24px]">
        <h4 className='text-[36px] font-semibold max-lg:text-[28px]'>TERMS & CONDITIONS</h4>
        <h5 className="my-[4px]">Lockedbox Storage Sharing Inc. </h5>
        <h5 className="text-[#235370] cursor-pointer">lockedbox.ca</h5>
        <p className='text-[16px] mt-[24px]'>Lockedbox Storage Sharing Inc. (“Lockedbox”), a peer-to-peer storage sharing platform connecting individuals and businesses seeking storage solutions with Hosts offering available Spaces. By accessing or using the LockedBox platform, you agree to comply with these Terms and Conditions, which govern the rights and responsibilities of all Users, including both Renters and Hosts.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>1. DEFINITIONS </h6>
        <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A]">
            <li><b className="text-black">"LockedBox," "we," "us," "our":</b> Refers to LockedBox Storage Sharing Inc., its website, and 
            services. </li>
            <li><b className="text-black">"User":</b> Any individual or entity accessing or using the LockedBox.</li>
            <li><b className="text-black">"Host":</b> A User who lists and offers a storage Space for rent.a</li>
            <li><b className="text-black">"Renter":</b> A User who rents a storage Space from a Host. </li>
            <li><b className="text-black">"Space":</b> The physical location listed for storage rental.</li>
            <li><b className="text-black">"Listing":</b> The detailed description, terms, and conditions provided by a Host. </li>
            <li><b className="text-black">“Account”:</b> The personal or business profile registered by the User on Lockedbox. </li>
            <li><b className="text-black">“Items”:</b> The belongings, goods, or material stored in a storage Space rented on 
            Lockedbox. </li>
            <li><b className="text-black">"Booking":</b> An agreement between a Host and a Renter for the rental of a storage Space.</li>
        </ul>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>2. ACCEPTANCE OF TERMS</h6>
        <p className='text-[16px] text-[#7A7A7A]'>By accessing and using the LockedBox platform, you acknowledge that you have read, 
understood, and agree to be bound by these Terms and Conditions. If you do not agree to these 
Terms, you must discontinue use of the platform immediately. These Terms constitute a legally 
binding agreement between you and LockedBox. Your continued use of the platform following 
any updates or modifications to these Terms indicates your acceptance of such changes. It is 
your responsibility to periodically review the Terms to stay informed about any updates. </p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>3. ELIGIBILITY & REGISTRATION</h6>
        <p className='text-[16px] text-[#7A7A7A]'> The LockedBox platform is intended for individuals who are at least eighteen (18) years old. By 
registering an Account or using the platform, you confirm that you meet this eligibility 
requirement. LockedBox reserves the right to request age verification at any time and may 
suspend or terminate Accounts found to be in violation of this policy. Users must provide 
accurate and truthful information during registration, and LockedBox may require additional 
identity verification measures at its discretion. Users who are registering on behalf of a business 
or other legal entity must have the authority to bind that entity to these Terms. By creating an 
Account, you affirm that all information provided is accurate, current, and complete. Failure to 
comply with these requirements may result in Account suspension or permanent termination.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'> LockedBox does not assume responsibility for verifying User credentials beyond the provided 
verification process. However, LockedBox reserves the right to conduct further background 
checks if deemed necessary to maintain the integrity of the platform. If LockedBox suspects that a User is underage or has misrepresented their identity, the Account will be suspended pending 
further investigation. Misrepresentation of eligibility may result in the forfeiture of any associated 
funds, penalties, and legal action where applicable. </p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'> Our services are intended for use <b className="text-black">exclusively within the provinces of Ontario and British 
        Columbia</b>, Canada. We are incorporated and operate solely under the laws of these jurisdictions. 
By using our services, you acknowledge and agree that we do not offer, promote, or accept any 
liability for the use of our services outside of Ontario and British Columbia. Any access or use of 
our services from other jurisdictions is strictly at your own risk, and we make no representations 
or warranties regarding compliance with any laws or regulations outside of Ontario and British 
Columbia </p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>4. BOOKING AND CHECK-IN POLICY</h6>
        <p className='text-[16px] text-[#7A7A7A]'>Renters are allowed to cancel their Booking request free of charge within 24 hours before a Host has accepted the request. Once a Host has accepted a Booking, standard cancellation fees may apply, as outlined in our cancellation policy. Hosts retain the right to conduct a reasonable inspection of the Renter’s Items upon arrival at the Host property to ensure compliance with our Prohibited Items Policy. Renters and Hosts must complete a check-in process to confirm that both the storage Space and the stored Items meet the terms and conditions of the platform.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>As part of the check-in process, both the Renter and the Host are required to upload at least two (2) images of the stored Items in the designated Space. These images will serve as a reference for any potential disputes regarding the condition, quantity, or presence of stored Items. Failure to comply with the check-in process may impact the ability to resolve disputes effectively and could result in limitations on claims related to stored Items. Hosts and Renters are encouraged to document any pre-existing conditions or concerns at the time of check-in to ensure a smooth storage experience. </p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>5. RENTER RESPONSIBILITIES</h6>
        <p className='text-[16px] text-[#7A7A7A]'> Renters must comply with all applicable rules regarding the types of Items that may be stored in a rented Space. Prohibited Items include hazardous materials, illegal substances, weapons, and perishable goods, among others as outlined in the Section 9. Renters must ensure that their Items are properly packed and secured to minimize the risk of damage. They are responsible for ensuring the Items they store do not exceed the value limits set by the platform. Renters must remove all Items at the end of their rental period, failing which the Host has the right to charge additional fees or dispose of the Items in accordance with the Abandoned Property Policy. Renters are required to upload at least two images of their stored Items during the check-in process to facilitate dispute resolution. Renters who fail to adhere to the rental terms may face additional fees, penalties, or Account suspension.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>6. HOST RESPONSIBILITIES </h6>
        <p className='text-[16px] text-[#7A7A7A]'>Hosts using the LockedBox platform must either own the storage Space they list or have legal authorization to rent it out. Each Host is responsible for ensuring that their Space is safe, secure, and in compliance with all relevant laws and regulations (additional details in Safe Storage Policy below). Hosts must provide an accurate and truthful description of the Space, including size, security features, and any applicable restrictions. The Space must remain in the condition described in the Listing, and any substantial modifications must be communicated to Renters in advance. Hosts must accept rental requests within 24 hours; otherwise, the request is automatically canceled, and the Renter is fully refunded. </p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Hosts have the ability to establish and enforce their own policies for their individual Listing Spaces, provided that such policies do not conflict with or violate this platform's Terms of Agreement. These policies may cover access rules, storage guidelines, and other reasonable conditions specific to the Host's Space. Users are responsible for reviewing and complying with any Listing-specific policies.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Security measures such as locks and restricted access must be maintained to protect stored Items. Hosts must allow Renters to access their Items according to the agreed-upon schedule. Periodic inspections may be conducted, provided that Renters are given prior notice.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Additionally, Hosts have a reasonable right to open stored boxes if they have a justified suspicion that Items violate platform policies or legal restrictions. Suspicion may arise from visual, audio, or sensory indicators (e.g., unusual smells, sounds, or visible contraband). If a violation is confirmed, Hosts must report the issue to LockedBox support for further action. Any failure to adhere to these responsibilities may result in penalties, Listing removal, or Account termination.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>7. MINIMUM RENTAL DURATION</h6>
        <p className='text-[16px] text-[#7A7A7A]'>All rental agreements, unless explicitly stated otherwise in a specific Listing, shall have a minimum term of one month from the start date of the rental period. Renters are obligated to pay for the full duration of the initial one-month term regardless of early termination or non-use of the storage Space during that period.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>8. PAYMENT, FEES AND LATE PAYMENTS</h6>
        <p className='text-[16px] text-[#7A7A7A]'></p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'></p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'></h6>
        <p className='text-[16px] text-[#7A7A7A]'>All financial transactions must be processed through the LockedBox platform to ensure compliance with service policies. Upon submitting a Booking Request, an authorization hold is placed on the Renter’s card to verify fund availability. If the Host does not respond within 24 hours, the Booking request is automatically canceled, and the hold is released.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>LockedBox collects essential details such as name, address, and credit card information. This information is securely processed through our third-party payment provider to facilitate transactions. Users are encouraged to review the third-party payment processor’s Privacy Policy for details on how their information is handled. Renters are billed on a monthly basis, with payments due on the anniversary date of their Booking. The minimum rental duration is one month. </p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Payments made outside the LockedBox platform are considered a violation of these terms and may result in Account termination. LockedBox reserves the right to place an authorization hold on payment methods to verify fund availability. </p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Late payments will incur an additional 10% fee if not settled within fourteen days. Renters who overstay beyond the agreed rental period will be charged a 25% late fee on the first day, followed by a 10% weekly penalty until they vacate. If a Renter fails to remove their belongings within thirty days after the contract ends, the Items will be considered abandoned and may be disposed of by the Host.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>9. PROHIBITED ITEMS & ACTIVITIES</h6>
        <p className='text-[16px] text-[#7A7A7A]'>The storage of certain Items is strictly prohibited on the LockedBox platform. These include, but are not limited to, the following items:</p>
        <p className='text-[16px] text-[#000] mt-[10px]'>1.	Hazardous Materials & Flammable Materials
            <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>Flammable, combustible, or explosive materials (e.g., gasoline, fireworks, propane tanks, solvents). </li>
                <li>Toxic chemicals, solvents, or substances that can cause environmental or health harm.</li>
                <li>Radioactive materials.</li>
                <li>Asbestos or other harmful fibers.</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#000] mt-[10px]'>2.	Perishable Items
            <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>Food or beverages that can spoil, rot, or produce an odor which could attract pests</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#000] mt-[10px]'>3.	Illegal or Stolen Property
            <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>Any item that is illegal to possess, transport, or store under local, state, or federal law.</li>
                <li>Stolen goods, counterfeit products, or materials obtained through unlawful means.</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#000] mt-[10px]'>4.	Weapons and Dangerous Goods
            <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>Firearms, ammunition, explosives, and other illegal weapons.</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#000] mt-[10px]'>5.	Drugs and Controlled Substances
            <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>Any illegal drugs, controlled substances, or substances banned by law or for which the storage is illegal.</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#000] mt-[10px]'>6.	Biohazardous Materials
            <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>Medical waste, bodily fluids, or any items that could potentially carry infections or diseases.</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#000] mt-[10px]'>7.	Large or Bulky Items
            <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>Items that exceed the maximum weight of 1000 lbs (excluding vehicles). Hosts have authority to set further restrictions on large or bulky items.</li>
                <li>Any item that could obstruct passageways, create tripping hazards, or cause damage to the storage space.</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#000] mt-[10px]'>8.	Items that Pose a Threat to Security
            <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>Unlocked or unsecured items that may be at risk for theft or vandalism. </li>
                <li>Items that are a potential security risk, including but not limited to keys, access cards, or sensitive documents.</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#000] mt-[10px]'>9.	Live Plants, Animals, or Insects
            <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>Bugs, pets, and house plants</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#000] mt-[10px]'>10.	Items that are Obscene
            <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>Items that are obscene, offensive, or inappropriate</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#000] mt-[10px]'>11.	Valuables 
            <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>High value items and jewelry, or antiques are restricted.</li>
                <li>Limit for non-vehicle items are $10,000.</li>
                <li>Limit for vehicles are $45,000.</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Hosts have the right to inspect storage Spaces periodically to ensure compliance with the prohibited Items policy, provided they give reasonable notice to the Renter. If a Host suspects that a Renter has stored prohibited Items, they must notify LockedBox immediately. LockedBox reserves the right to remove, confiscate, or report prohibited Items to authorities without prior notice to the Renter if such Items are discovered.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Users engaging in illegal activities, storing prohibited Items, or attempting to circumvent the policies set forth herein may face immediate termination of their rental agreement, forfeiture of fees, financial penalties, and potential legal action. Additionally, Renters found storing prohibited Items may be liable for damages caused to the Host’s property or surrounding Spaces, and such costs will be deducted from any security deposits or charged directly to the Renter.</p>
        <p className='text-[16px] text-[#000] mt-[10px]'>By using our services, you further agree not to engage in the following prohibited activities: 
            <ul className="flex flex-col gap-[6px] list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>1.	Refrain from copying, storing, or accessing site data for unlawful purposes or those that breach these Terms of Service.</li>
                <li>2.	Do not create multiple Accounts or create an Account on behalf of another person.</li>
                <li>3.	Respect the intellectual property, privacy, publicity, and contractual rights of others.</li>
                <li>4.	Transactions must be completed through the platform, and attempts to bypass platform fees are prohibited.</li>
                <li>5.	Hosts must not submit Listings with misleading pricing or terms they do not intend to honor.</li>
                <li>6.	Do not attempt to attack the site through the use of viruses, harmful code, denial-of-service attacks, or similar technologies.</li>
                <li>7.	Falsifying your identity or misrepresenting your affiliation with any person or organization is not permitted.</li>
                <li>8.	Reverse engineering, decompiling, or disassembling any software or systems associated with the site is prohibited.</li>
                <li>9.	Content that infringes intellectual property, violates laws, or promotes discrimination, violence, or illegal activities is strictly prohibited.</li>
                <li>10.	Accessing or tampering with non-public areas of the site or testing the security of systems without authorization is prohibited.</li>
                <li>11.	Contacting Hosts or Renters for purposes unrelated to transactions or Bookings is prohibited.</li>
                <li>12.	Using bots or similar tools to systematically collect site data for creating databases or directories is not allowed.</li>
                <li>13.	Do not attempt to bypass, disable, or impair security measures designed to protect the site and services.</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Further, Users are strictly prohibited from using Artificial Intelligence (AI) in any manner that violates ethical, legal, or platform integrity standards, including generating, manipulating, or altering images, videos, or documents for fraudulent purposes such as fake identification or misrepresentation, using AI-driven bots or automated tools to manipulate reviews, ratings, or feedback, deploying AI chatbots or scripts for deceptive communication, or utilizing AI to bypass security measures or verification processes. Additionally, the creation, distribution, or storage of AI-generated content that is misleading, harmful, illegal, or infringes on intellectual property rights is strictly forbidden. LockedBox reserves the right to suspend or terminate accounts violating this policy and may report unlawful activities to authorities, with users subject to potential financial penalties, legal action, and permanent removal from the platform.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>10. RENTER RIGHTS</h6>
        <p className='text-[16px] text-[#7A7A7A]'>Renters using the LockedBox platform have the right to accurate, safe, and secure storage Spaces as described in the Listing. To ensure a fair and transparent experience, Hosts must provide complete and truthful information about their storage Space, including size, location, and accessibility, security features (e.g., locks, restricted access), and any special conditions or restrictions.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Hosts must own or have the legal right to list the Space. LockedBox retains the right to request proof of ownership at any time. Misleading or inaccurate descriptions may result in Listing removal, and repeated violations may lead to Account termination.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'><b>Safe Storage Policy</b> - Renters have the right to refuse storage if any of the following conditions are present:
            <ul className="flex flex-col gap-[6px] list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>1.	Active leaks, puddles, or standing water in the storage area.</li>
                <li>2.	Structural damage such as broken walls, roofs, or floors.</li>
                <li>3.	Strong unpleasant smells (e.g., mold, chemicals, or decay).</li>
                <li>4.	Presence of chemicals or chemical spills that could damage stored Items.</li>
                <li>5.	Pest infestations, including insects, mice, raccoons, or other vermin.</li>
                <li>6.	Unreasonable difficulty in accessing the unit due to poor road access, narrow or obstructed entrances.</li>
                <li>7.	The Space is smaller than advertised, preventing Items from fitting as expected.</li>
                <li>8.	Lack of a proper locking mechanism or easy access by the general public.</li>
                <li>9.	Promised additional features (e.g., climate control, shelving) are not present.</li>
                <li>10.	The Space is inhabited by another person, despite no such indication in the Listing.</li>
                <li>11.	Storage shelves are present but unsafe, unable to support common storage Items.</li>
                <li>12.	The location does not match the advertised address.</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>If any of these conditions are found, Renters may cancel the rental without penalty, and LockedBox may take action against the Host, including Listing removal.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>11. DAMAGES TO PROPERTY</h6>
        <p className='text-[16px] text-[#7A7A7A]'>Renters are solely responsible for any damage, deterioration, or loss caused to a Host’s property during the rental period, whether directly or indirectly resulting from their use of the storage Space. If damage occurs, the Renter must notify the Host immediately and take all reasonable steps to mitigate further loss or harm. Hosts may document the damage and file claims through LockedBox’s dispute resolution process, providing photographic evidence and detailed descriptions of the incident. Renters are required to cooperate in good faith during the resolution process and may be asked to provide additional information or make direct restitution. If a Renter fails to compensate for property damage, LockedBox reserves the right to charge the Renter’s registered payment method, deduct funds from any security deposit if applicable, or take further actions, including Account suspension, restriction from future Bookings, or legal recourse. In cases of significant damage that impacts the usability of the storage Space, Renters may be held responsible for loss of rental income and any necessary repairs, replacements, or restoration costs. LockedBox disclaims liability for mediating disputes beyond its outlined resolution process and strongly encourages Renters to obtain appropriate insurance coverage to protect against potential liability. Hosts are also advised to maintain adequate insurance policies to safeguard against property damage. </p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>12. RENTER INSURANCE</h6>
        <p className='text-[16px] text-[#7A7A7A]'>LockedBox does not provide renters insurance or any form of coverage for stored items. Renters are solely responsible for obtaining appropriate insurance coverage from a third-party provider to protect their belongings against risks such as theft, damage, fire, flooding, or other potential losses. It is the renter's responsibility to verify coverage, limitations, and exclusions with their insurance provider before using LockedBox's services. LockedBox assumes no liability for any loss, theft, damage, or claims arising from the storage of items on the platform, and renters agree that any claims must be pursued through their own insurance provider. By using the platform, renters acknowledge that they assume all risks associated with storing their belongings and that LockedBox does not offer any compensation or reimbursement for losses.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>13. HOST INSURANCE</h6>
        <p className='text-[16px] text-[#7A7A7A]'>LockedBox does not provide hosts with insurance or any form of coverage for their storage spaces or any claims arising from their use. Hosts are solely responsible for obtaining appropriate property and liability insurance from a third-party provider to protect against risks such as theft, damage, fire, flooding, or other potential losses related to the storage of renter items. It is the host's responsibility to verify coverage, limitations, and exclusions with their insurance provider before offering storage space through LockedBox. LockedBox assumes no liability for any loss, theft, damage, or claims arising from the use of a host's storage space, and hosts agree that any claims must be pursued through their own insurance provider. By listing storage space on the platform, hosts acknowledge that they assume all risks associated with providing storage and that LockedBox does not offer any compensation, reimbursement, or protection for liabilities arising from their storage space.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>By using the LockedBox platform, Hosts acknowledge and agree that LockedBox assumes no liability for damages, losses, or injuries that may arise from the use of storage Spaces. Hosts are encouraged to review their personal insurance policies to ensure adequate coverage for their storage activities.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>14. RENTER CANCELLATIONS & REFUNDS</h6>
        <p className='text-[16px] text-[#7A7A7A]'>A Renter may cancel their Booking without penalty if the cancellation occurs at least five days before the scheduled start date. Cancellations made within four days of the scheduled start date will result in a 75% refund, less any service fees, which will not be refunded. Once a rental period has commenced, cancellations for upcoming months must be made before the next monthly renewal date to avoid being charged for the subsequent period. If a Renter fails to cancel within this time frame, they will be charged for the following month, with no refund available.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>15. ABANDONED PROPERTY POLICY</h6>
        <p className='text-[16px] text-[#7A7A7A]'>If a Renter fails to retrieve their stored Items within 30 days after the end of their Booking, and after receiving written notice from the Host regarding applicable late fees and the consequences of non-retrieval, the Items will be considered abandoned. Once the 30-day period has lapsed, the Host has the right to auction, sell, donate, or dispose of the abandoned Items at their discretion. The Renter forfeits any claims to the property after this period, and the Host will not be liable for any losses resulting from the disposal of abandoned Items. LockedBox bears no responsibility for enforcing or overseeing the disposal process.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>16. HOST CANCELLATION</h6>
        <p className='text-[16px] text-[#7A7A7A]'>Hosts who cancel a Booking after it has been accepted must provide at least 30 days’ notice to the Renter. If a Host cancels within this 30-day period, they forfeit their payout for that month, and the Renter will receive a full refund for the affected period. Repeated cancellations without proper notice may result in additional termination fees of up to $50 and potential Listing penalties, including removal from the platform. Hosts who frequently cancel Bookings, even with proper notice, may appear lower on the recommended Host list. If a Host must cancel due to an emergency, penalties may be waived on a case-by-case basis. Hosts may submit a dispute for review at dispute@lockedbox.ca, where our team will assess the situation and determine if penalties should apply.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Before canceling, Hosts must notify Renters in advance and provide a reasonable time frame for Renters to retrieve their stored Items. If a Renter is unable to retrieve their belongings due to legitimate reasons, the Host must make reasonable efforts to store the Items at an alternate location with a similar environment, ensuring no undue inconvenience to the Renter. Despite offering a 30-day notice, Hosts who cancel Bookings post-acceptance—even for legitimate reasons—may receive lower visibility on the platform’s recommended Host list.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'></h6>
        <p className='text-[16px] text-[#7A7A7A]'>Hosts will receive payouts after the anniversary date of the Renter’s Booking, typically within 5 business days. Payments are processed securely using Stripe and are subject to the following conditions:
            <ul className="flex flex-col gap-[6px] list-inside text-[16px] text-[#7A7A7A] pt-[6px]">
                <li>1.	Payout Timing – Payouts are only completed after the Renter has completed one full month of renting. This ensures that any necessary refunds, adjustments, or disputes are resolved before the Host receives payment.</li>
                <li>2.	Payment Processing – All transactions are processed through Stripe, and LockedBox does not assume liability for processing delays caused by Stripe or the Host’s financial institution.</li>
                <li>3.	Updating Payout Methods – Hosts may update their payout method (including deposit location or banking details) through their Account settings at any time. However, changes may take effect only for future transactions.</li>
                <li>4.	Refund Adjustments – If a refund or chargeback occurs before the payout is issued, LockedBox reserves the right to deduct or adjust the payout amount accordingly.</li>
            </ul>
        </p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Hosts are responsible for ensuring that their banking details are accurate and up to date to avoid payout delays. LockedBox reserves the right to withhold payments in cases of suspected fraud, policy violations, or pending disputes.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>18. TAXATION</h6>
        <p className='text-[16px] text-[#7A7A7A]'>Hosts are solely responsible for reporting any income earned from renting out storage Space as part of their taxable income. If a Host is registered as a business, they must declare this income on their tax return and may be required to charge, collect, and remit GST/HST if their total annual revenue from all sources exceeds 30,000 CAD, in accordance with Canadian tax regulations. Hosts are strongly advised to maintain accurate financial records of their rental earnings and expenses to ensure compliance with tax obligations. LockedBox does not provide tax advice and will not be responsible for any tax-related matters. Hosts should consult a tax professional for specific guidance regarding income reporting, GST/HST registration, and any other applicable tax obligations.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>19. TRADEMARK</h6>
        <p className='text-[16px] text-[#7A7A7A]'>The trademarks, including but not limited to the phrases "Making Space for You," "Store Here, There, Everywhere," and the LockedBox logo, are the exclusive property of LockedBox. Users are strictly prohibited from using, copying, reproducing, distributing, displaying, or modifying any of these trademarks without the prior written consent of LockedBox. Any unauthorized use may lead to legal consequences.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Any references to LockedBoxs trademarks in third-party materials, whether digital or print, must include clear acknowledgment of LockedBox. as the rightful trademark owner. Accessing the platform does not grant any rights or licenses to use these trademarks for any purpose beyond what is explicitly authorized in writing by LockedBox.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>20. INTELLECTUAL PROPERTY</h6>
        <p className='text-[16px] text-[#7A7A7A]'>All content available on the LockedBox platform, including but not limited to text, graphics, images, software, designs, icons, logos, trade names, trademarks, service marks, and any other intellectual property, whether registered or unregistered, is the exclusive property of LockedBox or its licensors. Such content is protected under applicable copyright, trademark, and other intellectual property laws. Users are strictly prohibited from copying, reproducing, modifying, distributing, transmitting, displaying, selling, or otherwise exploiting any part of the platform’s intellectual property without the express prior written consent of LockedBox. Unauthorized use of LockedBox’s intellectual property may result in legal action, including but not limited to injunctive relief, monetary damages, and attorney fees. </p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Users are granted a limited, revocable, non-exclusive, non-transferable license to access and use the platform and its content solely for personal, non-commercial purposes. This license does not grant any ownership rights, and any unauthorized use will constitute a material breach of these Terms. LockedBox reserves all rights not expressly granted herein. Any feedback, ideas, suggestions, or other submissions provided by Users regarding the platform shall be deemed non-confidential, and LockedBox shall have the unrestricted right to use, modify, or commercialize such feedback without any obligation to compensate the User providing it.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>21. NO ENDORSEMENT</h6>
        <p className='text-[16px] text-[#7A7A7A]'>LockedBox provides a neutral platform that facilitates connections between Hosts and Renters for storage purposes but does not own, manage, or control any of the Spaces listed on the platform. LockedBox does not endorse, verify, or guarantee the quality, legality, safety, or suitability of any Users, storage Spaces, or stored Items. The responsibility for ensuring compliance with all applicable laws and suitability of the storage arrangement rests solely with the Host and Renter. Hosts and Renters are encouraged to conduct their own due diligence before entering into any agreement, including but not limited to inspecting the storage Space, verifying the identity of the other party, and obtaining any necessary insurance. LockedBox does not conduct background checks on Users, nor does it confirm the accuracy of any information provided in Listings or User profiles. Any reliance on User-generated content, representations, or third-party verifications is at the sole risk of the relying party.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>By using the platform, Users acknowledge and accept that LockedBox is not responsible for any misrepresentations, disputes, damages, or losses resulting from interactions between Users. LockedBox shall not be liable for any claims, liabilities, injuries, or damages arising from a User's decision to engage with another User on the platform. In cases of disputes between Hosts and Renters, LockedBox may, at its sole discretion, offer dispute resolution guidance but is not obligated to mediate, arbitrate, or enforce any agreements between Users. LockedBox reserves the right, but has no obligation, to review, remove, or modify Listings, User content, or interactions that violate these Terms, legal requirements, or LockedBox’s policies. However, such actions do not constitute an endorsement, validation, or assumption of responsibility for any User or storage Space listed on the platform. </p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>22. DISCLAIMER</h6>
        <p className='text-[16px] text-[#7A7A7A]'>USERS ARE SOLELY RESPONSIBLE FOR ALL COMMUNICATIONS AND INTERACTIONS WITH HOSTS, RENTERS, AND ANY OTHER INDIVIDUALS THEY ENGAGE WITH THROUGH THE LOCKEDBOX PLATFORM AND SERVICES. USERS SHOULD EXERCISE CAUTION AND DISCRETION WHEN CHOOSING TO MEET OTHERS IN PERSON. LOCKEDBOX DOES NOT GUARANTEE THE ACCURACY, LEGALITY, OR AVAILABILITY OF ANY LISTED STORAGE SPACE AND MAKES NO REPRESENTATIONS REGARDING OWNERSHIP RIGHTS OR A HOST’S LEGAL AUTHORITY TO RENT A SPACE. LOCKEDBOX DOES NOT WARRANT THE AVAILABILITY, SECURITY, OR UNINTERRUPTED OPERATION OF THE PLATFORM OR SERVICES. USERS SHOULD NOT RELY ON THE SITE TO BE ERROR-FREE, VIRUS-FREE, OR IMMUNE TO DISRUPTIONS. NO EXPRESS OR IMPLIED WARRANTIES ARE PROVIDED FOR THE SERVICES OFFERED THROUGH LOCKEDBOX. LOCKEDBOX BEARS NO RESPONSIBILITY FOR THE ACTIONS, BEHAVIORS, OR CONDUCT OF ANY USERS, HOSTS, RENTERS, OR THIRD PARTIES. USERS MUST ENGAGE WITH OTHERS ON THE PLATFORM IN A RESPECTFUL, PROFESSIONAL, AND BUSINESSLIKE MANNER TO MAINTAIN ACCESS TO OUR SERVICES. LOCKEDBOX ASSUMES NO LIABILITY FOR ANY DAMAGES, DISPUTES, OR ISSUES ARISING FROM INTERACTIONS AMONG USERS, HOSTS, RENTERS, OR THIRD PARTIES. USERS ACKNOWLEDGE THAT LOCKEDBOX IS NOT RESPONSIBLE FOR ANY PROBLEMS CAUSED BY OTHER INDIVIDUALS USING THE SITE OR SERVICES. PLATFORM AND SERVICE USE IS ENTIRELY AT THE USER’S OWN RISK. THE CONTENT PROVIDED ON OUR WEBSITE, BLOG, AND OTHER MATERIALS IS INTENDED FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY; IT DOES NOT CONSTITUTE PROFESSIONAL ADVICE. WHILE WE STRIVE TO PROVIDE ACCURATE AND USEFUL INFORMATION, WE CANNOT GUARANTEE ITS APPLICABILITY TO EVERY SITUATION. USERS ARE ULTIMATELY RESPONSIBLE FOR HOW THEY UTILIZE THIS INFORMATION, AND LOCKEDBOX DISCLAIMS ANY LIABILITY ARISING FROM RELIANCE ON IT. BY USING OUR SITE AND CONTENT, USERS AGREE TO THESE TERMS. WHILE WE AIM TO FACILITATE A SMOOTH AND SECURE EXPERIENCE, LOCKEDBOX DOES NOT VERIFY, ENDORSE, OR GUARANTEE THE ACCURACY, COMPLETENESS, OR RELIABILITY OF USER-PROVIDED INFORMATION, INCLUDING STORAGE LISTINGS, AVAILABILITY, OR DESCRIPTIONS</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>23. THIRD PARTY LINKS</h6>
        <p className='text-[16px] text-[#7A7A7A]'>The LockedBox platform may contain links to third-party websites for informational purposes, User convenience, or business collaborations. These links do not imply any endorsement, sponsorship, or affiliation between LockedBox and the third-party entities. LockedBox has no control over the content, privacy policies, security measures, or practices of third-party websites and assumes no responsibility for their accuracy, legality, or reliability. Users acknowledge that they access and interact with third-party websites at their own risk. LockedBox encourages Users to review the terms, conditions, and privacy policies of any third-party website before engaging with its services or providing any personal or financial information. Any transactions, agreements, or interactions made with third-party websites are solely between the User and the third-party entity, and LockedBox shall not be liable for any damages, disputes, losses, or obligations arising from such engagements. If a third-party link is found to be misleading, fraudulent, or otherwise in violation of User trust, Users are encouraged to report it to LockedBox for further review.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>24. LIMITATIONS OF LIABILITY</h6>
        <p className='text-[16px] text-[#7A7A7A]'>To the fullest extent permitted by law, LockedBox shall not be liable for any direct, indirect, incidental, consequential, punitive, or special damages arising from or related to your use of the platform, including but not limited to loss of profits, business interruption, reputational harm, data loss, personal injury, or property damage, whether arising in contract, tort, negligence, strict liability, or otherwise. LockedBox provides the platform "as is" and "as available" without any warranties or guarantees, express or implied, including but not limited to merchantability, fitness for a particular purpose, non-infringement, security, accuracy, or uninterrupted operation.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>LockedBox is not responsible for errors, defects, disruptions, unauthorized access, cyberattacks, security breaches, or technical failures that may occur on the platform, including issues related to third-party integrations. Users acknowledge that their interactions, transactions, and engagements on the platform are at their own risk. LockedBox does not warrant that the platform will be error-free or continuously available and shall not be responsible for any disruptions, delays, or failures in service.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>By using the platform, Users agree to release LockedBox from any liability related to any injury occurring to any person or property as a result of the use, occupancy, travel to or from, or entry or exit from any Space. LockedBox is also not responsible for any disputes between Users of the platform, including but not limited to disagreements between Hosts and Renters regarding Bookings, property damage, access to stored goods, or terms of a rental agreement. Furthermore, LockedBox disclaims liability for any consequences arising from a User's interactions with others on the platform, including but not limited to damages, injuries, or losses due to a Booking, Listing, or rental of a Space. Additionally, LockedBox shall not be responsible for any copyright or intellectual property infringement claims arising from a User’s actions on the platform, including content uploaded, stored, or shared by Users.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>In jurisdictions where limitations on liability are restricted, LockedBox’s total aggregate liability, regardless of the cause of action, shall not exceed the total amount paid by the User to LockedBox in the twelve (12) months preceding the claim or $100 USD, whichever is lower. Some jurisdictions do not allow limitations on implied warranties or exclusion of liability for incidental or consequential damages, so some of the above limitations may not apply to all Users.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Users agree that LockedBox shall not be liable for any third-party conduct, content, services, or disputes arising between Users, including claims related to misrepresentations, breach of contract, property damage, or violations of applicable laws by Hosts or Renters. Users acknowledge and accept that LockedBox does not verify the legality, condition, safety, or suitability of listed Spaces and is not responsible for enforcing agreements between Users. Users assume full responsibility for their use of the platform and agree that their sole remedy for dissatisfaction is to discontinue using the platform.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>25. INDEMNIFICATION</h6>
        <p className='text-[16px] text-[#7A7A7A]'>By using the LockedBox platform, you agree to indemnify, defend, and hold harmless LockedBox, its officers, directors, employees, agents, affiliates, and licensors from and against any and all claims, demands, liabilities, losses, damages, costs, and expenses, including but not limited to reasonable attorneys' fees and legal expenses, arising out of or related to your use of the platform, violation of these Terms, breach of any representations or warranties, infringement of intellectual property or other rights of any third party, or any harm caused to other Users or third parties as a result of your conduct. You agree to cooperate fully with LockedBox in the defense of any claim and acknowledge that LockedBox reserves the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which case you agree to provide full cooperation and assistance. This indemnification obligation shall survive the termination of your Account and continue in effect beyond your cessation of use of the platform. LockedBox shall not be liable for any settlements made without its prior written consent.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>26. NON-DISCRIMINATION POLICY</h6>
        <p className='text-[16px] text-[#7A7A7A]'>LockedBox is committed to fostering an inclusive and equitable platform where all Users, including Renters and Hosts, are treated with respect and dignity. Discrimination of any kind is strictly prohibited. Users may not refuse service, deny access, impose different terms, or otherwise discriminate against any individual on the basis of race, ethnicity, national origin, religion, gender, gender identity, sexual orientation, disability, age, marital status, family status, or any other protected characteristic under applicable laws.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Hosts and Renters are responsible for ensuring that their interactions, listings, and communications comply with all anti-discrimination laws. Any reports of discriminatory behavior, including refusal to rent or host based on a protected characteristic, may result in account suspension, removal from the platform, or legal consequences. LockedBox reserves the right to investigate complaints and take appropriate action, including but not limited to warnings, account restrictions, or permanent removal from the platform.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>27. MODIFICATIONS TO WEBSITE AND THESE TERMS</h6>
        <p className='text-[16px] text-[#7A7A7A]'>LockedBox reserves the right to modify, suspend, or discontinue any aspect of the platform at any time without prior notice, including changes to features, functionality, design, or availability. We may also update these Terms periodically to reflect changes in business operations, regulatory requirements, or industry best practices. It is the User's responsibility to review these Terms regularly for any modifications, as continued use of the platform after such updates constitutes acceptance of the revised Terms. LockedBox is not liable for any inconvenience or loss caused by modifications, interruptions, or discontinuation of services. We may, at our discretion, notify Users of significant changes via email or platform notifications, but it remains the User’s duty to remain informed of the latest version of these Terms. If any modification is deemed unacceptable, your only recourse is to discontinue use of the platform. Failure to do so will be considered acceptance of the modifications. </p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>28. DISPUTE RESOLUTION</h6>
        <p className='text-[16px] text-[#7A7A7A]'>Users experiencing disputes should first attempt to resolve them independently through direct communication. If a resolution cannot be reached, LockedBox may, at its discretion, facilitate mediation but is under no obligation to enforce agreements between Users. Disputes that remain unresolved through independent efforts may be escalated through the platform’s formal dispute resolution process.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>LockedBox enables Hosts to dispute Bookings due to Renter behavior if done so in good faith and based on legitimate reasons. However, before initiating a dispute, the Host must demonstrate that all reasonable steps were taken to resolve the issue directly with the Renter. The platform may request proof of these efforts—such as message exchanges, photos, or other supporting documentation—before launching a formal investigation. Disputes of this nature are handled on a case-by-case basis, in accordance with LockedBox’s Terms & Conditions, and generally require 5-10 business days for review. Hosts are encouraged to provide unaltered images or other relevant proof to strengthen their case. Depending on the findings of the investigation, possible outcomes include refunds, penalties, Account suspension, removal from the platform, or in serious cases, escalation to local authorities or governing bodies.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>Similarly, Renters have the right to dispute Bookings if a Host’s behavior is inappropriate or if the rented storage Space is found to be defective or misrepresented. Renters must first attempt to resolve the issue directly with the Host before escalating the dispute to LockedBox. As with Host disputes, Renters may be required to submit proof of their attempts to address concerns before an investigation is launched. Each case is reviewed individually, and the standard review process generally takes 5-10 business days. Renters are encouraged to provide evidence such as unaltered images, messages, or documentation demonstrating the issue. Possible outcomes include full or partial refunds, penalties against the Host, Listing removal, suspension from the platform, or in serious instances, escalation to local authorities or governing bodies.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>If a formal dispute remains unresolved after internal review, the matter shall be settled through binding arbitration under the rules of the ADR Institute of Canada. By using the LockedBox platform, Users waive their right to participate in class-action lawsuits related to LockedBox’s services. Decisions rendered through arbitration are final and legally binding on all parties.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'>29. TERMINATION POLICY</h6>
        <p className='text-[16px] text-[#7A7A7A]'>LockedBox may suspend or terminate User Accounts for violations of these Terms and Conditions. Engaging in prohibited activities, committing fraud, failing to adhere to payment policies, or conducting transactions outside the LockedBox platform may result in permanent Account suspension. Users found to be in repeated violation of Host or Renter policies will be removed from the platform without notice. LockedBox also reserves the right to deactivate or remove inactive Accounts after a period of prolonged non-use. In severe cases, legal action may be taken against individuals engaging in fraudulent or unlawful activities. LockedBox retains the right to modify these Terms and Conditions at any time. If significant changes are made, Users will be notified through email or platform notifications. Continued use of the platform following any updates constitutes acceptance of the revised terms. It is the responsibility of Users to regularly review these terms to remain informed of their rights and obligations.</p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'>For further inquiries, please contact us at <a className="text-[#235370]" href="mailto:help@lockedbox.ca">help@lockedbox.ca</a>. By using LockedBox, you acknowledge and agree to abide by these Terms and Conditions.</p>

        <h6 className='text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]'></h6>
        <p className='text-[16px] text-[#7A7A7A]'></p>
        <p className='text-[16px] text-[#7A7A7A] mt-[10px]'></p>






    </div>
     </div>
     </div>
  )
}

export default TermsAndConditions;

import { useEffect } from "react";
import ProfileNavbar from "../../components/ProfileNavbar";

const SupportCentre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProfileNavbar />
      <div className="px-[40px] max-lg:px-[20px] max-w-[1180px] mx-auto py-[24px]">
        <div className="pt-[24px]">
          <h4 className="text-[36px] font-semibold max-lg:text-[28px]">
            SUPPORT CENTER
          </h4>
          <h5 className="my-[4px]">Lockedbox Storage Sharing Inc. </h5>
          <h5 className="text-[#235370]">lockedbox.ca</h5>

          <h6 className="text-[26px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            General
          </h6>
          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            How does the peer-to-peer storage platform work?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            LockedBox peer-to-peer storage operates by connecting individuals or
            businesses with available storage space (hosts) to those seeking
            extra storage (renters). Hosts can list their unused spaces—such as
            garages, basements, or commercial units—on the platform, along with
            details like size, accessibility, features, and pricing. Renters
            then browse the platform, filtering options based on their specific
            needs and availability. The platform facilitates the entire
            transaction, managing the booking process, securing payments, and
            offering support in case of disputes.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            What safety measures are in place for both hosts and renters?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            To ensure a safe experience for all users, LockedBox implements user
            verification for individuals who sign up and utilize our service.
            This process helps confirm the identity of each user on the platform
            and ensure only verified users can host or rent.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            How are disputes between hosts and renters resolved?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            At LockedBox, we take disputes between hosts and renters seriously.
            When a renter drops off their items, they must complete a check-in
            process. During this step, both the host and renter confirm their
            satisfaction with the storage space and the condition of the items,
            with a photo upload serving as documentation. If a dispute arises,
            LockedBox will mediate and resolve the issue on a case-by-case
            basis, guided by our <a href="">Terms and Conditions</a> and{" "}
            <a href="">Safe Storage Policy</a>.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            Is there customer support available if something goes wrong with my
            booking?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            Yes, customer support is available for both hosts and renters. You
            can reach us by sending a message through the “Contact Us” page on
            our website or by emailing us at help@lockedbox.ca. If your inquiry
            is related to a dispute, please refer to our dispute resolution
            process for more information.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            How is my personal information used on the platform?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            We may share your personal information with trusted third parties
            when necessary for things like processing payments, verifying
            identity, ensuring security, or meeting legal obligations. For
            example, Stripe handles our payments and ID checks, and may store
            some of your info to help prevent fraud or resolve disputes. We may
            also share information with law enforcement or government agencies
            if legally required. Other service providers help us with things
            like cloud storage, cybersecurity, and system performance, but they
            can only use your data to support our platform and must keep it
            secure. Please refer to our Privacy Policy for more information.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            Can I leave a review for a host or renter?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            Yes. Once the rental period is complete, you’ll have the opportunity
            to leave a review—renters can review hosts, and hosts can review
            renters. To do so, click on your profile picture on the homepage and
            select the “Reviews” link from the dropdown menu.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            How can I verify the legitimacy of a host or renter?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            All users—both hosts and renters—must verify their identity before
            they can create or book a listing. We use a trusted third-party
            service, Stripe, to securely handle the ID verification process.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            What should I do if I suspect fraudulent activity or a scam?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            If you suspect any fraudulent activity or a scam, please notify us
            immediately at <a href="help@lockedbox.ca">help@lockedbox.ca</a>.
            You can also reach us through the “Contact Us” link at the bottom of
            our homepage. If you believe the situation requires it, we recommend
            contacting your local authorities as well.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            How do I update my profile or contact information?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            To update your profile or contact information, click your profile
            picture in the top right corner of the homepage. Then, select the
            “Account” tab from the dropdown menu to make changes.
          </p>

          <h6 className="text-[26px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            Renters
          </h6>
          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            How do I find available storage spaces near me?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            To find storage near you, click the “Find Storage” button and enter
            your address. You’ll see a map and list of all available listings in
            your area. You can also refine your search by using filters to
            select specific types of storage or features that meet your needs.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            What types of storage spaces are available? (e.g., indoor, outdoor,
            climate-controlled)
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            Hosts can list a variety of storage types, including indoor or
            outdoor spaces, as well as garages, rooms, or closets. Some listings
            may offer additional features such as climate control, camera
            security, garage access, proximity to public transit, RV parking,
            and frequent access. To filter your search by these features, click
            the icon with the circle and bars in the top right corner of the
            search page.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            How do I book a storage space?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            When you find a storage space that meets your needs, you can request
            to book it for your desired dates. After selecting the dates, click
            “Start Request” on the listing to proceed to the payment and summary
            page. Only available dates will be shown.
          </p>
          <p className="text-[16px] text-[#7A7A7A]">
            Next, you’ll need to enter your card details to submit the booking
            request, but you won’t be charged unless the host accepts it. You’ll
            also have the option to message the host directly from this page.
          </p>
          <p className="text-[16px] text-[#7A7A7A]">
            Once submitted, the host has 24 hours to accept your request. If
            they don’t respond in time, your card will not be charged, and
            you’ll need to submit a new booking request—either for the same
            listing or a different one.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            What happens if I need to extend my rental period?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            If you need to extend your rental, please contact the host to
            confirm their availability and willingness to continue the booking.
            If the host is unable to accommodate the extension, you’ll need to
            create a new booking, either with the same storage space or a
            different one.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            How do I communicate with the host of the storage space?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            Once you make a booking, you’ll have the option to send a message to
            the host. This messaging feature can be used throughout the booking
            period—from before it starts until it ends. Use it to share any
            necessary details or updates about the booking. To access the
            messaging feature, click your profile picture in the top right of
            the home page and then click the “Messages” tab. Please remember to
            follow our <a href="">Terms and Conditions</a> when using the
            messaging feature.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            What if the storage space doesn't meet my needs when I arrive?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            Upon arrival at the storage space to drop off your items, you’ll be
            prompted to “Check-in” and confirm whether you’re satisfied with the
            storage space. If you’re not satisfied for any reason, we recommend
            discussing the issue directly with the host first. If the issue
            can’t be resolved, you have the option to dispute the booking
            instead of checking in, which will initiate our dispute process.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            Are my items or vehicles covered by insurance while stored?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            LockedBox does not currently offer insurance for items stored in
            listings on our platform. We recommend that you have personal
            insurance (such as renters insurance) for all items you wish to
            store. However, we are working with various partners to introduce
            insurance options in the future—stay tuned for updates!
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            Can I store any type of item, or are there restrictions?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            For the safety and well-being of all users and their storage spaces,
            there are restrictions on what can be stored. Please refer to our
            Safe Storage Policy for full details. If a host finds that your
            items violate this policy, they have the right to refuse storage and
            cancel the booking, following the standard cancellation procedure.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            How do I retrieve my items at the end of the rental period?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            Coordinate with the host to arrange a suitable pick-up time and
            procedure. Be considerate and make sure to retrieve your items on or
            before your check-out date, as other renters may have booked the
            space after you. Please note that if you fail to retrieve your items
            within 30 days after the check-out date, the host has the right to
            dispose of them in whatever manner they see fit.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            Can I schedule access to my items during the rental period?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            Yes, you can schedule access by communicating with the host through
            the messaging feature to coordinate a time. Some listings will
            indicate whether frequent access is allowed. If you expect to need
            access to your items multiple times during the rental period, be
            sure to look for listings that include the “frequent access”
            feature.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            What happens if I need to move my items out earlier than planned?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            If you need to move your items out early, please coordinate with the
            host to arrange a pickup time. You may then choose to cancel your
            booking, and may be eligible for a partial refund in accordance with
            our cancellation policy.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            What if I can't access the storage space during the rental period
            after scheduling a time with the host?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            If you’re unable to access the storage space as scheduled, first try
            to communicate with the host with our messaging feature to resolve
            the issue—unexpected situations can sometimes arise. If you're
            unable to reach a resolution, please contact LockedBox at
            help@lockedbox.ca or initiate a dispute through our standard dispute
            process.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            Are there any hidden fees for using the platform?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            No, there are no hidden fees on LockedBox. The price you see at the
            time of booking—including our clearly displayed service fee—is the
            total amount you’ll pay.
          </p>

          <h6 className="text-[26px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            For Hosts
          </h6>
          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            How do I list my storage space?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            To list your storage space, click “Host Your Space” on the homepage.
            Then, select “Create New Listing” to begin setting up your listing.
            For first time listings, you will need to connect your bank account
            and complete ID verification through our secure, third party Stripe.
            Just follow the prompts to provide details about your space and make
            it available to renters.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            What information do I need to provide to create a listing?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            When creating a listing, you’ll need to provide the following
            details:
          </p>
          <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A]">
            <li>
              <b>Address</b> of the storage space (note: this will not be shown
              publicly and is only shared with the renter after a booking is
              confirmed)
            </li>
            <li>
              <b>Type of space</b> (e.g., garage, room, closet, indoor, outdoor)
            </li>
            <li>
              <b>Features</b> such as climate control, camera security, garage
              access, etc.
            </li>
            <li>
              <b>Types of items</b> that can be stored (renters can filter
              listings by item type)
            </li>
            <li>
              <b>Size</b> of the space (in feet)
            </li>
            <li>
              <b>Monthly price</b>
            </li>
          </ul>
          <p className="text-[16px] text-[#7A7A7A]">
            You’ll also need to upload photos of your storage space. Be sure to
            clean the area and take clear pictures from different angles to help
            your listing stand out.
          </p>
          <p className="text-[16px] text-[#7A7A7A]">
            For first time listings, you will need to connect your bank account
            and complete ID verification through our secure, third-party Stripe.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            How do I set the price for my storage space?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            See below (similar question already given answer){" "}
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            Can I set different prices for different types of items?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            No, you cannot adjust the price based on the type of item a renter
            wants to store. However, you can specify which types of items you're
            willing to accept from potential renters and set your price
            accordingly.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            How do I manage availability and update my listing?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            LockedBox automatically manages your space’s availability, showing
            only available dates to potential renters during their search.
          </p>
          <p className="text-[16px] text-[#7A7A7A]">
            To update your listing, go to your Host Dashboard by clicking your
            profile picture and selecting any item from the dropdown menu. Then,
            navigate to the “Listings” section, where you can click on any of
            your active listings to edit details such as the price, features, or
            photos.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            Do I need to offer insurance for the items stored in my space?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            No, as a host, you are not responsible for insuring the items stored
            in your space. If renters wish to have insurance coverage, it is
            their responsibility to arrange it.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            What happens if a renter damages my property or the space{" "}
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            Please also notify us at damages@lockedbox.ca with requested amount
            and proof of repair costs (eg. contractor quotes). We will work
            alongside you to facilitate the reimbursement.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            What if a renter doesn't show up at the agreed-upon time?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            If a renter misses the agreed-upon time for check-in or check-out,
            try reaching out to them through the messaging feature to resolve
            the issue. If you're unable to make contact or the situation remains
            unresolved, you may choose to continue or cancel the booking in
            accordance with our cancellation policy.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            Can I modify or delete my listing after it's been posted?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            Yes, you can modify or delete your listing at any time by going to
            “My Listings” in the Host Dashboard. However, if your listing is
            currently booked and you choose to delete it, all ongoing or
            upcoming bookings will be canceled and subject to our cancellation
            policy. As a courtesy, please try to communicate with any confirmed
            renters in advance if you’re no longer able to host them.
          </p>
          <p className="text-[16px] text-[#7A7A7A]">
            Please note that any changes made to your listing (such as pricing)
            will not affect existing confirmed bookings, including those that
            are already in progress.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            What happens if my storage space is unavailable for the agreed
            rental period?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            If your storage space becomes unavailable during the rental period,
            you must inform the renter as soon as possible. We encourage you to
            work with the renter to find a solution for managing their items. If
            the renter decides to retrieve their items and cancel the booking,
            you may not receive the full amount of your payment, following our
            cancellation policy.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            Are there any fees for listing my storage space?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            No, there are no fees to list your storage space on LockedBox! It’s
            completely free for hosts to create a listing. Enjoy earning extra
            income from your unused space—no strings attached!
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            Can I offer a discount for long-term storage bookings?
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            Currently, we don’t offer a built-in feature to provide discounts to
            renters. However, since LockedBox is focused on long-term storage
            (over 1 month), you’re welcome to set your own policy that
            prioritizes long-term renters and adjust the price of your listing
            accordingly.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            Renter Example Permitted Items{" "}
          </h6>
          <p className="text-[18px] ">Household & Furniture</p>
          <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A]">
            <li>Clothing</li>
            <li>Books</li>
            <li>Seasonal decorations</li>
            <li>Toys & games</li>
            <li>Small appliances (e.g., toasters, microwaves)</li>
            <li>Kitchenware (e.g., dishes, pots)</li>
            <li>Bedding & linens</li>
            <li>Luggage & bags</li>
            <li>Electronics (e.g., TVs, laptops, stereos)</li>
            <li>Artwork & framed photos</li>
            <li>Sofas & couches</li>
            <li>Chairs</li>
            <li>Tables (e.g., coffee tables, dining tables)</li>
            <li>Desks</li>
            <li>Bed frames & mattresses</li>
            <li>Dressers & wardrobes</li>
            <li>Bookshelves</li>
            <li>Nightstands</li>
            <li>Armoires</li>
          </ul>
          <p className="text-[18px] mt-[16px]">Auto-Parts</p>
          <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A]">
            <li>Tires</li>
            <li>Wheels</li>
            <li>Car seats</li>
            <li>Car batteries</li>
            <li>Car mats</li>
            <li>Engine parts (e.g., alternators, starters)</li>
            <li>Suspension components</li>
            <li>Bumpers</li>
            <li>Side mirrors</li>
            <li>Exhaust systems</li>
            <li>Windshield wipers</li>
            <li>Oil filters</li>
            <li>Car covers</li>
          </ul>
          <p className="text-[18px] mt-[16px]">Seasonal & Recreation</p>
          <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A]">
            <li>
              Holiday decorations (e.g., Christmas trees, lights, ornaments)
            </li>
            <li>Winter gear (e.g., coats, snow boots, scarves, gloves)</li>
            <li>Summer gear (e.g., beach chairs, sunscreen, coolers)</li>
            <li>Camping equipment (e.g., tents, sleeping bags, backpacks)</li>
            <li>Ski/snowboard equipment</li>
            <li>Holiday lights</li>
            <li>Patio furniture</li>
            <li>Fireplace accessories (e.g., logs, fire pits)</li>
            <li>Grills & outdoor cooking equipment</li>
            <li>Pool supplies (e.g., floats, pool covers, cleaning tools)</li>
            <li>Bicycles</li>
            <li>Kayaks & paddleboards</li>
            <li>Fishing gear (e.g., rods, tackle boxes)</li>
            <li>Golf clubs & accessories</li>
            <li>Camping gear (e.g., camp stoves, lanterns, folding chairs)</li>
            <li>
              Sporting equipment (e.g., footballs, soccer balls, tennis rackets)
            </li>
            <li>Hiking gear (e.g., boots, trekking poles, backpacks)</li>
            <li>Tennis rackets</li>
            <li>Skateboards & rollerblades</li>
            <li>Bowls & lawn games (e.g., cornhole, croquet sets)</li>
          </ul>
          <p className="text-[18px] mt-[16px]">Appliances</p>
          <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A]">
            <li>Microwaves</li>
            <li>Toasters & toaster ovens</li>
            <li>Blenders & food processors</li>
            <li>Coffee makers</li>
            <li>Electric kettles</li>
            <li>Vacuum cleaners</li>
            <li>Hair dryers & straighteners</li>
            <li>Iron & ironing board</li>
            <li>Space heaters</li>
            <li>Fans & air purifiers</li>
            <li>Electric grills & sandwich makers</li>
            <li>Refrigerators</li>
            <li>Washing machines & dryers</li>
            <li>Dishwashers</li>
            <li>Freezers</li>
            <li>Ovens & stoves</li>
            <li>Air conditioners</li>
            <li>Dehumidifiers</li>
          </ul>
          <p className="text-[18px] mt-[16px]">School / Office / Business</p>
          <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A]">
            <li>Textbooks</li>
            <li>Notebooks & binders</li>
            <li>Backpacks</li>
            <li>Stationery supplies (e.g., pens, pencils, markers)</li>
            <li>Laptops & tablets</li>
            <li>Scientific calculators</li>
            <li>Art supplies (e.g., sketchbooks, paint, brushes)</li>
            <li>Sports equipment (e.g., gym bags, athletic shoes)</li>
            <li>Musical instruments (e.g., guitars, keyboards, violins)</li>
            <li>Board games & educational toys</li>
            <li>Desks & chairs</li>
            <li>Filing cabinets & document organizers</li>
            <li>Computers & monitors</li>
            <li>Printers & scanners</li>
            <li>Office supplies (e.g., paper, pens, staplers)</li>
            <li>Office decor (e.g., artwork, plants)</li>
            <li>Lamps & lighting</li>
            <li>Phones & headsets</li>
            <li>Whiteboards & corkboards</li>
            <li>Inventory (retail products, packaging)</li>
            <li>Display equipment (e.g., shelves, racks, mannequins)</li>
            <li>Marketing materials (e.g., brochures, banners)</li>
            <li>Tools & machinery (e.g., hand tools, power tools)</li>
            <li>Event supplies (e.g., tables, chairs, tents)</li>
            <li>Shipping supplies (e.g., boxes, bubble wrap, tape)</li>
          </ul>
          <p className="text-[18px] mt-[16px]">
            Vehicles - Value limit of 45,000 CAD
          </p>
          <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A]">
            <li>Sedans</li>
            <li>SUVs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupportCentre;

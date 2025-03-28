import { useEffect } from "react";
import ProfileNavbar from "../../components/ProfileNavbar";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProfileNavbar />
      <div className="px-[40px] max-lg:px-[20px] max-w-[1180px] mx-auto py-[24px]">
        <div className="pt-[24px]">
          <h4 className="text-[36px] font-semibold max-lg:text-[28px]">
            PRIVACY POLICY
          </h4>
          <h5 className="my-[4px]">Lockedbox Storage Sharing Inc. </h5>
          <h5 className="text-[#235370]">lockedbox.ca</h5>
          <p className="text-[16px] mt-[24px]">
            LockedBox Storage Sharing Inc. ("LockedBox," "we," "us," or "our")
            is committed to protecting the privacy of its users ("you," "your").
            This Privacy Policy outlines how we collect, use, disclose, and
            protect your personal information when you access or use the
            LockedBox platform, including our website and related services (the
            "Platform"). By using the Platform, you agree to the collection,
            use, and disclosure of your personal information as described in
            this Privacy Policy. If you do not agree with our policies and
            practices, you must discontinue using the Platform immediately.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            1. COLLECTION OF PERSONAL INFORMATION
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            We collect personal information to verify user identity, process
            transactions, enhance security, and comply with legal obligations.
            Personal information is gathered when users interact with the
            Platform, whether by registering an account, listing storage spaces,
            making payments, or communicating with other users. The data
            collected includes but is not limited to:
            <ul className="flex flex-col gap-[6px] list-disc list-inside text-[16px] text-[#7A7A7A]">
              <li>
                1. Identity & Contact Information: Name, email address, phone
                number, mailing address, username, and password.
              </li>
              <li>
                2. Government Identification: Driver’s license, passport, or
                other government-issued ID (verified via Stripe Identity for
                fraud prevention and regulatory compliance)
              </li>
              <li>
                3. Financial Information: Credit card details and payment
                transaction data processed through Stripe Payments.
              </li>
              <li>
                4. Account & Transaction Data: Booking history, messages, and
                activity logs within the Platform.
              </li>
              <li>
                5. Device & Usage Data: IP address, device information, browser
                type, operating system, referral sources, and interactions with
                the Platform.
              </li>
              <li>
                6. Cookies & Tracking Technologies: We use cookies, web beacons,
                and similar technologies to track your activity, personalize
                your experience, and improve Platform functionality.
              </li>
            </ul>
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            This information is necessary to create and manage user accounts,
            facilitate communication between hosts and renters, and provide
            necessary notifications regarding Platform activities. To further
            ensure security, government-issued identification, such as driver’s
            licenses and passports, is required for verification. Government IDs
            are processed through Stripe Identity to confirm the authenticity of
            users and prevent fraudulent activities.
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            Financial information, including credit card details and transaction
            records, is processed securely through Stripe Payments to facilitate
            payments and maintain an accurate record of transactions. The
            Platform also retains account and transaction data, which includes
            booking history, communication logs, and other relevant activity
            records. This information is crucial in ensuring compliance with
            Platform policies and assisting with dispute resolution should any
            issues arise between users.
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            In addition to direct user inputs, we collect device and usage data,
            including IP addresses, browser types, operating systems, referral
            sources, and user interactions with the Platform. This data is
            primarily used for security, troubleshooting, and improving user
            experience. Cookies and other tracking technologies are employed to
            personalize user experiences, optimize the Platform’s functionality,
            and provide insights into browsing behavior. While users may choose
            to disable certain tracking technologies through browser settings,
            doing so may limit Platform performance and access to certain
            features.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            2. HOW WE COLLECT PERSONAL INFORMATION
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            Personal information is collected through multiple channels,
            including direct user submissions, system-generated data collection,
            and third-party verification processes. When users register for an
            account, they are required to provide identity information,
            including full name, email address, phone number, and a secure
            password. This data is necessary to create an account, verify user
            authenticity, and facilitate communication between renters and
            hosts. During profile updates, users may voluntarily provide
            additional details such as residential addresses and payment
            preferences, which are securely stored and encrypted. Payment
            transactions on the Platform require users to submit financial
            information, which is processed through Stripe Payments. This
            ensures that all financial transactions are handled securely and
            comply with financial regulatory requirements. When users create
            storage listings, they provide detailed descriptions of their
            available spaces, including the location, access protocols, and
            security measures in place. This information is essential to
            ensuring transparency between hosts and renters and establishing
            trust in the Platform.
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            Automated tracking technologies such as cookies, web beacons, and
            analytics software collect browsing and interaction data. These
            tools monitor user activity, track engagement with various Platform
            features, and optimize overall user experience. Additionally,
            cookies help retain user preferences and improve login security.
            Users have the option to adjust their cookie settings through their
            browser preferences; however, disabling cookies may affect certain
            Platform functionalities.
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            Messages exchanged between users on the Platform are automatically
            recorded to facilitate dispute resolution and ensure compliance with
            Platform policies. These records are essential in investigating
            complaints, identifying policy violations, and assisting users in
            case of misunderstandings or fraudulent activities. Additionally,
            system logs and access records are maintained to prevent
            unauthorized access, detect potential security breaches, and improve
            platform stability. In certain cases, LockedBox may conduct
            additional identity verification using third-party services to
            validate government-issued IDs and detect fraudulent activities,
            ensuring a secure and compliant environment for all users.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            3. USE OF PERSONAL INFORMATION
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            We use personal information to facilitate account verification,
            maintain security protocols, process transactions, and comply with
            legal obligations. This information is essential for ensuring that
            only legitimate users access our Platform and for preventing
            fraudulent activities, unauthorized access, and security breaches.
            We also use personal data to optimize Platform performance, improve
            system functionality, and provide a personalized user experience by
            offering tailored recommendations, targeted notifications, and
            relevant Platform updates. Users may receive communications from us,
            including security alerts, service updates, event notifications, and
            marketing materials. These communications are designed to keep users
            informed about Platform developments, new features, promotional
            campaigns, and policy changes. Users who prefer not to receive
            marketing communications may opt out at any time through their
            account settings or by following the instructions provided in our
            emails.
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            Financial information is used exclusively for processing payments,
            verifying transactions, and ensuring compliance with financial
            regulatory requirements. This includes monitoring for fraudulent
            payment activity, enforcing anti-money laundering regulations, and
            preventing chargeback fraud. All transactions are securely processed
            through Stripe Payments, and we do not store full credit card
            details on our servers. Government-issued identification is
            collected for identity verification purposes, ensuring compliance
            with regulatory standards and enhancing Platform security. This
            information helps us authenticate users, prevent identity theft, and
            deter fraudulent activities. Stripe Identity handles the
            verification process to ensure secure and compliant validation of
            user credentials.
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            Additionally, personal information may be used to investigate and
            resolve disputes, enforce Platform policies, and address violations
            of our terms of service. In cases where illegal activity is
            suspected, we may provide relevant data to regulatory authorities or
            law enforcement agencies, as required by law. LockedBox does not
            sell, rent, or trade personal information to third parties for their
            independent marketing purposes. All collected data is used strictly
            in accordance with this Privacy Policy and applicable laws.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            4. DISCLOSURE OF PERSONAL INFORMATION
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            We may share personal information with third parties under specific
            circumstances necessary for operational, security, regulatory, and
            legal purposes. Our payment processors, including Stripe Payments
            and Stripe Identity, handle financial transactions and identity
            verification services to ensure secure and compliant processing.
            Stripe may collect and store certain user information for fraud
            prevention, transaction authentication, and dispute resolution
            purposes.
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            Regulatory bodies such as the Local Police Services, Ontario
            Provincial Police (OPP), the Royal Canadian Mounted Police (RCMP),
            and the Canada Revenue Agency (CRA) may receive personal data when
            required by law, such as in response to legal investigations,
            subpoenas, tax compliance, anti-money laundering measures, or other
            government-mandated obligations. We comply with all applicable legal
            requirements and cooperate with law enforcement agencies in cases
            where user information is legally requested.
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            We also engage third-party service providers for IT security, cloud
            storage, and analytics support. These service providers may access
            user information solely for the purpose of providing essential
            platform services such as data storage, fraud detection,
            cybersecurity monitoring, and system performance optimization. Such
            providers are contractually obligated to maintain data
            confidentiality and comply with relevant privacy laws.
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            In the event of a business transfer, such as a merger, acquisition,
            sale of assets, or corporate restructuring, user information may be
            transferred as part of the transaction to ensure continuity of
            services. In such cases, users will be notified of any material
            changes affecting their personal information.
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            Additionally, we take reasonable measures to ensure that all
            third-party partners adhere to high standards of data protection,
            confidentiality, and security. All external entities receiving user
            data must comply with applicable legal and regulatory requirements,
            including industry best practices for information security and data
            handling.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            5. USER RIGHTS AND DATA ACCESS
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            Users have the right to access, update, and correct their personal
            information through their account settings. Requests for account
            deletion must be submitted in accordance with our data retention
            policies. Users who wish to opt out of marketing communications can
            do so by following the instructions in our emails. For inquiries
            related to personal data, users can contact{" "}
            <a className="text-[#235370]" href="mailto:privacy@lockedbox.ca">
              privacy@lockedbox.ca
            </a>
            .{" "}
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            6. DATA RETENTION POLICY
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            We retain personal information only as long as necessary to fulfill
            service obligations, comply with legal requirements, and support
            operational needs. The retention period varies depending on the type
            of data collected and its intended purpose.
          </p>
          <table className="w-[50%] border border-[#EEEEEE] text-sm text-left text-gray-500 mt-[16px]">
            <thead className="text-black uppercase bg-[#EEEEEE]">
              <tr>
                <th className="px-6 py-3">Data Type</th>
                <th className="px-6 py-3">Retention Period</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-[#EEEEEE]">
                <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                  Payment Information (via Stripe)
                </th>
                <td className="px-6 py-2">5 years</td>
              </tr>
              <tr className="bg-white border-b border-[#EEEEEE]">
                <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                  Biometric Data (via Stripe)
                </th>
                <td className="px-6 py-2">1 year</td>
              </tr>
              <tr className="bg-white border-b border-[#EEEEEE]">
                <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                  Non-Biometric Identification (via Stripe)
                </th>
                <td className="px-6 py-2">3 years</td>
              </tr>
              <tr className="bg-white border-b border-[#EEEEEE]">
                <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                  Address
                </th>
                <td className="px-6 py-2">8 years</td>
              </tr>
              <tr className="bg-white border-b border-[#EEEEEE]">
                <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                  Username
                </th>
                <td className="px-6 py-2">Indefinitely</td>
              </tr>
              <tr className="bg-white border-b border-[#EEEEEE]">
                <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                  Password
                </th>
                <td className="px-6 py-2">Until account deletion</td>
              </tr>
              <tr className="bg-white border-b border-[#EEEEEE]">
                <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                  Phone & Email
                </th>
                <td className="px-6 py-2">8 years</td>
              </tr>
            </tbody>
          </table>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            Upon the expiration of the applicable retention period, we take
            appropriate measures to securely delete or anonymize personal data.
            Deletion processes involve the permanent removal of data from active
            databases, while anonymization ensures that any remaining data
            cannot be linked back to an identifiable individual. Certain data
            may be retained beyond the standard retention period if required by
            law, regulatory authorities, or for the purpose of resolving
            disputes, enforcing agreements, or addressing security concerns. In
            such cases, access to retained data is strictly controlled and used
            only for legally permissible purposes.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            7. PROTECTION OF INFORMATION
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            We implement industry-standard security measures to safeguard
            personal information. Data is encrypted during transmission, and all
            sensitive information is stored securely on cloud-based servers. We
            enforce multi-factor authentication for user logins and high-risk
            transactions. Secure Socket Layer (SSL) encryption protects all
            website interactions, while firewalls and access controls prevent
            unauthorized access to our servers. Despite these efforts, no
            digital platform is entirely immune to security risks, and users
            should exercise caution when sharing personal information online.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            8. CHILDREN'S PRIVACY
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            The Platform is not intended for individuals under the age of
            eighteen. We do not knowingly collect personal information from
            minors. If we discover that a minor has provided personal
            information, we will take steps to delete such data immediately.
            Parents or legal guardians who believe their child has provided
            personal information should contact us at{" "}
            <a className="text-[#235370]" href="mailto:privacy@lockedbox.ca">
              privacy@lockedbox.ca
            </a>
            .{" "}
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            If a parent or legal guardian becomes aware that their child has
            registered for an account or submitted personal information on the
            Platform, they should contact us at{" "}
            <a className="text-[#235370]" href="mailto:privacy@lockedbox.ca">
              privacy@lockedbox.ca
            </a>{" "}
            to request its removal. We will work promptly to verify the claim
            and take necessary actions to ensure that the child’s personal
            information is deleted in compliance with applicable data protection
            laws.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            9. COOKIES AND TRACKING TECHNOLOGIES
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            We use cookies and other tracking technologies to enhance user
            experience, improve Platform functionality, and ensure security.
            Essential cookies are fundamental for the operation of core Platform
            features, such as authentication, maintaining session integrity, and
            enabling secure transactions. Without these cookies, users may not
            be able to fully utilize critical aspects of the Platform. Analytics
            cookies are used to collect information about how users interact
            with the Platform, such as which pages are visited most frequently,
            how long users stay on certain sections, and how they navigate
            through different features. This information helps us improve site
            performance, optimize user experience, and resolve technical issues
            by understanding common behavior patterns.
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            Advertising cookies and similar tracking technologies may be used to
            deliver personalized content and targeted advertisements that are
            relevant to user interests. These cookies help in tracking user
            preferences and measuring the effectiveness of marketing campaigns.
            Users have the option to manage their cookie preferences through
            their browser settings and can disable certain types of cookies at
            their discretion. However, restricting cookies may impact the
            availability and functionality of some features, including login
            processes, saved preferences, and personalized recommendations. We
            also employ third-party tracking technologies, such as web beacons
            and pixel tags, which assist in analyzing traffic patterns and
            preventing fraudulent activities. These tools are used strictly in
            compliance with applicable privacy regulations, and users are
            encouraged to review their settings to align with their privacy
            preferences.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            10. THIRD-PARTY LINKS AND EXTERNAL WEBSITES
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            The Platform may contain links to third-party websites that provide
            additional services, content, or resources that may be of interest
            to users. These external websites operate independently from
            LockedBox and may have their own terms of use and privacy policies.
            We do not own, control, endorse, or assume responsibility for the
            privacy practices, security measures, or data handling of
            third-party entities. Users are advised to carefully review the
            privacy policies of any external websites they visit before sharing
            personal information, as their data protection practices may differ
            from ours.
          </p>
          <p className="text-[16px] text-[#7A7A7A] mt-[10px]">
            LockedBox is not liable for any issues that arise from a user’s
            interaction with third-party websites, including but not limited to
            security breaches, misuse of personal data, unauthorized
            transactions, or misleading content. Users who choose to access
            third-party links do so at their own risk. If a third-party website
            linked on our Platform is found to be engaging in fraudulent,
            deceptive, or unlawful activities, we encourage users to report the
            issue so that we may assess whether the link should be removed from
            our Platform.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            11. CHANGES TO THIS PRIVACY POLICY
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            We may update this Privacy Policy periodically to reflect changes in
            business operations, regulatory requirements, or security practices.
            Updated policies will be posted on the Platform, and users may be
            notified via email or system alerts. Continued use of the Platform
            following an update constitutes acceptance of the revised Privacy
            Policy. Users are encouraged to review this document regularly to
            stay informed about our data practices.
          </p>

          <h6 className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
            12. CONTACT INFORMATION
          </h6>
          <p className="text-[16px] text-[#7A7A7A]">
            For privacy-related inquiries, users may contact LockedBox Storage
            Sharing Inc. at{" "}
            <a className="text-[#235370]" href="mailto:privacy@lockedbox.ca">
              privacy@lockedbox.ca
            </a>
            . Additional correspondence can be directed to our official company
            address. This Privacy Policy is incorporated into and subject to the
            LockedBox Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

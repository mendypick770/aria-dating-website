"use client";

import React from "react";

export default function PrivacyClient() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
      {/* Black background for the top 64px to hide scrolling text under the transparent navbar */}
      <div className="fixed top-0 left-0 right-0 h-[64px] bg-black z-40 pointer-events-none" />

      <div className="w-full mb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 py-4 sticky top-[64px] z-40 bg-black space-y-2 md:space-y-0">
        <h1 className="text-4xl md:text-5xl font-bold text-white m-0 p-0 leading-none">
          Privacy Policy
        </h1>
        <span className="text-sm md:text-base text-gray-400 font-normal m-0 p-0 leading-none">
          Last update: December 8, 2025
        </span>
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed text-lg text-center w-full">
        <p>
          Ringle Dating Ltd., an Israeli company, company registration number
          516697034 (the &ldquo;Company&rdquo; or &ldquo;we&rdquo;), based at 4
          Abba Even St. Jerusalem respects your right to privacy. Your ability
          to make informed decisions about the use of your information is
          important to us.
        </p>
        <p>
          The Company serves as the data controller for the database referenced
          in this privacy policy. Should you wish to contact us, you may do so
          through the methods provided in the &ldquo;Contact Us&rdquo; section
          of the website.
        </p>
        <p>
          The purpose of this privacy policy (the &ldquo;Privacy Policy&rdquo;)
          is to explain the Company&rsquo;s procedures in relation to the
          Personal Information (as defined below) collected when you use our
          website, application and Services (as defined below) and how the
          Company collects, uses, transfers and secures the Personal Information
          collected by it.
        </p>
        <p>
          Our website and application (the &ldquo;Platform&rdquo;) are designed
          to help Black individuals seeking meaningful, long-term relationships
          and marriage. The Platform, together with all related features and
          offerings, are referred to collectively as the &ldquo;Services.&rdquo;
        </p>
        <p>
          In order to connect to the application and use the Services, you will
          be asked to confirm the Terms of Use (as defined below) and the
          Privacy Policy. If you do not agree to that, you may not use the
          Services.
        </p>
        <p>
          Terms in this document that are not expressly defined will be
          interpreted in accordance with the definitions given to them in the
          Terms of Use, published at [Terms of Use] (&ldquo;Terms of
          Use&rdquo;). The terms &ldquo;you&rdquo; or &ldquo;you are&rdquo;
          appearing in this document refer to every user of the Services.
        </p>
        <p>
          For any questions or problems related to the Privacy Policy, please
          contact:{" "}
          <a
            href="mailto:support@aria.dating"
            className="text-white underline hover:opacity-80 transition-opacity"
          >
            support@aria.dating
          </a>
        </p>

        <p className="text-justify pt-4">
          &ldquo;Personal Information&rdquo; is information related to a person
          such as a name, address, phone number or email address or as defined
          by law. You are not under any legal obligation to provide us with
          Personal Information; the provision of Personal Information is done
          with your consent only. If you do not agree to provide Personal
          Information, some or all of the Services may not be available to you.
          Regarding the information collected under this policy, we act as the
          database owner/controllers of the Personal Information.
        </p>
        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            1. Information we collect and legal basis.
          </h2>
          <p>
            We collect information if necessary and in accordance with your use
            of the Services. Therefore, the collection and processing of
            Personal Information depends on the type of Services you use, as
            follows:
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            1.1. Inquiries and/or Contact.
          </h3>
          <p>
            When you contact us with a request and/or question, we may record
            our communication with you and thereby any information you provide
            us, such as your name, contact details, including phone, e-mail, and
            the content of the request or question.
          </p>
          <p className="ml-4 md:ml-8 pl-4 border-l-2 border-white/20">
            1.1.1. We process this information to fulfill the agreement with
            you.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            1.2. Sign up and Login.
          </h3>
          <p>
            To access the Services, you must sign up to the Services. If you
            choose direct sign up, you will be required to provide us with at
            least your phone number and email address, along with some basic
            details necessary for our Services to function, such as your gender,
            date of birth, and the types of connections you are interested in.
            Alternatively, you may sign up using your account with third-party
            providers (e.g., Google or Apple). By signing up through a
            third-party, you consent to their terms of use. In this case, we may
            receive information about you from the third party, so we recommend
            reviewing their policies to understand what information will be
            shared with us. You can also upload information to us, including
            photos from your camera.
          </p>
          <p className="ml-4 md:ml-8 pl-4 border-l-2 border-white/20">
            1.2.1. When we process your sign-up information to provide you with
            our Services, we do so to fulfill our agreement with you,
            specifically our Terms of Use. When we process your sign-up
            information to maintain our Services &ndash; such as preventing
            fraud, protecting security and addressing any issues &ndash; we do
            so based on our legitimate interest in safeguarding our assets.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            1.3. Materials Uploaded to the Services.
          </h3>
          <p>
            You can also share additional information with us, such as biography
            details and interests, or upload photos or videos. To add certain
            content, such as photos or videos, we may get access to your camera
            or photo library.
          </p>
          <p className="ml-4 md:ml-8 pl-4 border-l-2 border-white/20">
            1.3.1. We process this information to fulfill our agreement with
            you, specifically our Terms of Use.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            1.4. The Content of Chats with Other Users.
          </h3>
          <p>
            We have access to and process the content that comes up in chats
            with other users.
          </p>
          <p className="ml-4 md:ml-8 pl-4 border-l-2 border-white/20">
            1.4.1. We process this information based on our legitimate interest
            in safeguarding our assets.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            1.5. Participation in Promotions, Events or Contests.
          </h3>
          <p>We collect the information you used to sign up or enter.</p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            1.6. Payment Services.
          </h3>
          <p>
            When purchasing a subscription to a paid service or when making a
            purchase directly from us (and not through a platform such as iOS or
            Android), we receive details related to the purchases you made.
            Additionally, our payment service provider receives details from you
            such as your credit or debit card number or financial information.
            Information we receive may include credit card number, validity,
            full name and identification number of the cardholder, and email
            address for sending invoices.
          </p>
          <p className="ml-4 md:ml-8 pl-4 border-l-2 border-white/20">
            1.6.1. We process this information to fulfill our agreement with
            you, specifically our Terms of Use.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            1.7. Information Collected Automatically.
          </h3>
          <p>
            Certain information is automatically collected about your device,
            browser, operating system, IP address, Device ID of the mobile
            device, app settings and properties, app crashes, advertising
            identifiers (randomly generated numbers that you can reset by going
            to your device settings, and in some cases disable completely), and
            identifiers related to cookies or other technologies that may
            uniquely identify a device or browser. We also collect information
            about your use of the Services, for example, login times, features
            you used, actions you performed, information presented to you, the
            addresses of the websites that referred you to us and ads you
            clicked on, as well as your interactions with other members (for
            example, members with whom you have a relationship, the dates of
            creating a match and the dates of correspondence between you).
          </p>
          <div className="ml-4 md:ml-8 pl-4 border-l-2 border-white/20 space-y-4">
            <p>
              1.7.1. We process this information based on our legitimate
              interests to develop and improve our products and Services, and to
              prevent fraud.
            </p>
            <p>1.7.2. We process this information based on your consent.</p>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            1.8. Location.
          </h3>
          <p>
            Subject to your consent, we will collect information about your
            location (geographic coordinates) from your device. It is your
            responsibility to decide whether to display the last location from
            which you were active, or a residential address, and change the
            settings accordingly. The collection of your geographic data may
            occur in the background, even when you are not using the Services,
            provided that the consent you have given us expressly permits this.
            If we do not receive permission from you to collect your precise
            geographic location, we will not collect it, and our Services that
            rely on precise geographic location may not be available to you.
          </p>
          <p className="ml-4 md:ml-8 pl-4 border-l-2 border-white/20">
            1.8.1. We process this information based on your consent. You may
            withdraw your consent by changing your mobile settings.
          </p>
          <p className="italic mt-4 opacity-80">
            Information we receive from other users: Other users may provide us
            with information about you in connection with your use of our
            Services, for example if they interact with you or if they submit a
            report related to you.
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            2. How We Use Information.
          </h2>
          <p>
            You agree and confirm that the Company is entitled to retain in its
            databases the details provided by you, along with any additional
            Personal Information that may accumulate about you. The Company may
            use these databases in accordance with legal provisions and the
            Privacy Policy, including for the purposes detailed below:
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            2.1. Services and Adaptations.
          </h3>
          <p>
            We and/or our service providers may use your Personal Information
            for the following purposes: (1) providing access to the Services;
            (2) helping you connect with other users, including recommending you
            to other users and recommending other users to you, including
            displaying users&rsquo; profiles to each other; (3) providing
            support and assistance in solving problems that you or other users
            may encounter; (4) contacting you if necessary; (5) examining
            questions that arise, including through the Services, and providing
            a response accordingly; and (6) preventing fraudulent or illegal
            activities, safeguarding the security of the Services, and
            addressing any issues related to their use. If a user submits a
            report about another user, we will use that information to maintain
            the safety of the Services and protect the users, at our sole
            discretion. We may update the complaining user regarding the status
            of their report, and any action taken.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            2.2. Internal Needs.
          </h3>
          <p>
            We may use your Personal Information for internal purposes,
            including diagnosing operational problems, conducting reviews and
            evaluations for the development of new services and/or content,
            improving and customizing the Services to meet specific needs (both
            ours and users&rsquo;), developing new products, analysing scope of
            activity, performing financial assessments and forecasts, evaluating
            potential customer usage, utilizing information for research,
            development and testing, and adjusting server capacities to
            accommodate the expected workload.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            2.3. Statistics and Analytical Tools.
          </h3>
          <p>
            We and/or our service providers use analytical tools, including
            &ldquo;Google Analytics&rdquo; to collect and analyse information
            about the use of the Services, such as the frequency of visits to
            the Services by users, the pages visited, and any websites or
            applications accessed before visiting the Services. By analysing the
            data we collect, we may compile statistical information across a
            variety of platforms and users, which helps us improve our Services,
            understand trends and customer needs, consider new products and
            services, and adapt existing products and services to customer
            desires. The information we collect is aggregated and not linked to
            Personal Information. We may share the aggregate data with our
            partners, without limitation, on commercial terms determined at our
            sole discretion. For more details on how Google collects information
            you can control such use can be found on Googles&rsquo; policy page:{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              className="text-white underline hover:opacity-80"
            >
              https://policies.google.com/technologies/partner-sites
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            2.4. Advertising.
          </h3>
          <p>
            We may use your Personal Information to deliver targeted offers
            and/or advertisements from third parties based on your personal
            preferences. If you do not wish to continue receiving these offers,
            you can change your user settings in the Services and thus stop the
            use of your Personal Information for the purpose of receiving these
            offers.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            2.5. Access to Information.
          </h3>
          <p>
            Currently, Aria employees in the positions of CEO, VP R&amp;D, CTO,
            as well as employees in support positions, have access to your
            information. The types of positions may change from time to time.
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            3. Artificial intelligence.
          </h2>
          <p>
            We process certain personal information using artificial
            intelligence algorithms, specifically Google Vision AI. We use these
            algorithms to process the images that users like you upload to our
            Services, to help us ensure that the images meet the Terms of Use of
            our Services, and to ensure that our Services are safe for other
            users. For any question or problem related to this you can contact:{" "}
            <a
              href="mailto:support@aria.dating"
              className="text-white underline hover:opacity-80"
            >
              support@aria.dating
            </a>
            .
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            4. Sharing Your Personal Information.
          </h2>
          <p>
            You agree that we will share your Personal Information in accordance
            with the following:
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            4.1. Service Providers and Third Parties.
          </h3>
          <div className="ml-4 md:ml-8 pl-4 border-l-2 border-white/20 space-y-4">
            <p>
              4.1.1. We may share information, including Personal Information,
              with service providers of the following types: storage and server
              services, infrastructure, databases and marketing service
              providers (&ldquo;Third Party Providers&rdquo;). These providers
              may use the information to: (1) help us provide and/or operate the
              Services; (2) assist us in understanding how the Services are
              used; and (3) tailor the advertisements shown to you in the
              application based on your personal preferences across our Services
              and other websites and/or applications you visit.
            </p>
            <p>
              4.1.2. Third Party Providers may be located in countries outside
              the State of Israel. Some of these countries may have different
              levels of protection for Personal Information or other information
              than those provided in Israel. You consent to the transfer of your
              Personal Information to these countries.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            4.2. Transfer of Ownership.
          </h3>
          <p>
            We may disclose and/or transfer our databases that contain your
            Personal Information as part of or during negotiations for a merger,
            sale of Company assets or acquisition (including in cases of
            liquidation). In such instances, your Personal Information will
            remain subject to the terms of this Privacy Policy, in accordance
            with applicable law.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            4.3. Complaints and Reports.
          </h3>
          <p>
            If someone submits a report related to you (such as an allegation
            that you violated our Terms of Use), we may forward to the reporter
            information about actions taken in response to their report, if any.
            However, we do not undertake to provide any information to a user
            who has reported another user.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            4.4. Advertisers.
          </h3>
          <p>
            When you click on an advertisement on our Services or on our
            advertisement displayed on another website or application, the
            advertiser will know that someone has clicked on their
            advertisement, and they may be able to identify you through certain
            methods, such as cookies. We may share your Personal Information
            with advertisers in our application: (a) with your consent, (b) when
            it pertains to encrypted IP addresses and/or device identifiers, or
            (c) when it pertains to Personal Information that is visible to all
            users of our Services, such as profile information.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            4.5. Transfer of Information Required by Law.
          </h3>
          <p>
            We will cooperate with law enforcement authorities or any judicial
            order that requires or instructs us to disclose the identity,
            behavior, digital content, or any other Personal Information of any
            user suspected of actions deemed illegal or in violation of the law.
            We may also share your Personal Information with third parties if we
            believe in good faith that the disclosure of the information is
            appropriate and intended to protect our rights, assets or safety
            (including the enforcement of the Privacy Policy) or the rights,
            property or safety of third parties.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            4.6. Sharing Additional Information.
          </h3>
          <p>
            We will transfer your Personal Information to relevant third parties
            in the following cases: (1) if the Company discovers that your
            actions within the Services violate the Terms of Use or were
            intended to commit fraud of any kind; or (2) if the Company faces
            legal action (criminal or civil) as a result of actions you
            performed using the Services.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            4.7. Security.
          </h3>
          <p>
            We implement and maintain technical and organizational measures,
            policies and procedures designed to reduce the risk of accidental
            destruction or loss, or unauthorized disclosure or access to
            Personal Information in a manner inappropriate to the nature of that
            information. The measures we take include:
          </p>
          <div className="ml-4 md:ml-8 pl-4 border-l-2 border-white/20 space-y-4">
            <p>
              4.7.1. Protection Measures - The physical, electronic and
              procedural measures we use to protect your Personal Information
              include secure servers, firewalls, antivirus, and SSL encryption
              of the data.
            </p>
            <p>
              4.7.2. Access Control - We strive to properly manage a dedicated
              login system and limit access only to authorized staff based on
              specific needs according to the basic authorization rules. We
              periodically review permissions and revoke access immediately upon
              the conclusion of each employee&rsquo;s employment.
            </p>
            <p>
              4.7.3. Internal Policy - We maintain and frequently review our
              privacy and information security policy.
            </p>
            <p>
              4.7.4. Personnel - We require each new employee to maintain
              confidentiality in accordance with applicable laws and accepted
              industry practices.
            </p>
            <p>
              4.7.5. Encryption - We encrypt data in transit using secure HTTPS
              protocols.
            </p>
            <p>
              4.7.6. Database Backup - Our databases are backed up on a periodic
              basis for certain data and verified regularly. The backups are
              encrypted and stored in the production environment to maintain
              their confidentiality and integrity, are regularly tested to
              ensure availability, and are only accessible by authorized
              personnel.
            </p>
            <p>
              4.7.7. However, no method of Internet transfer or electronic
              storage is completely secure. Therefore, while we strive to employ
              commercially acceptable measures to protect your Personal
              Information, we cannot guarantee its absolute security.
            </p>
            <p>
              4.7.8. Since information security partly depends on the security
              of the device you use to communicate with us and the measures you
              take to protect your usernames and passwords, you must take
              appropriate steps to safeguard this information.
            </p>
          </div>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            5. International Transfers.
          </h2>
          <p>
            5.1. We hire subcontractors and service providers located in other
            countries and transfer the information we receive, including
            Personal Information, to them. We carry out these international
            transfers to achieve the goals mentioned above. We will ensure that
            these third parties are bound by written agreements that provide the
            same level of privacy and data protection as outlined in this
            Privacy Policy, including appropriate legal remedies in the event of
            a breach of your data protection rights in the third country.
          </p>
          <p>
            5.2. When we transfer the Personal Information of users located in
            the European Economic Area (&ldquo;EEA&rdquo;) to third parties
            located outside the EEA and where required by applicable law, we
            will ensure that the information is accorded a similar level of
            protection by providing one of the following protections:
          </p>
          <div className="ml-4 md:ml-8 pl-4 border-l-2 border-white/20 space-y-4">
            <p>
              5.2.1. We will transfer your Personal Information only to
              countries recognized as providing an appropriate level of
              protection for Personal Information by the European Commission
              (adequacy ruling).
            </p>
            <p>
              5.2.2. When we use certain service providers that are not located
              in countries with a level of protection that meets the conditions
              of the European Commission, we may use certain contracts approved
              by the European Commission which give Personal Information the
              same protection as it would receive in EEA countries.
            </p>
            <p>
              5.2.3. Contact us at{" "}
              <a
                href="mailto:support@aria.dating"
                className="text-white underline hover:opacity-80"
              >
                support@aria.dating
              </a>{" "}
              if you wish to receive more information about the mechanism we use
              when we transfer Personal Information outside the EEA.
            </p>
          </div>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
          <p className="italic opacity-80 mb-4">
            How to access and limit our use of specific Personal Information.
          </p>
          <p>
            Subject to applicable law and certain exemptions, and in some cases
            depending on the processing activity we perform, you have certain
            rights in relation to your Personal Information that we or other
            controllers hold about you, as detailed below. For any request to
            exercise these rights in relation to information held by other
            controllers, please contact the relevant controller directly. If you
            would like us to notify all other controllers, please state this
            request when you contact us to exercise your rights. We will
            investigate and attempt to address complaints and disputes and will
            make every reasonable effort to respect your desire to exercise your
            rights as quickly as possible and, in any case, within the time
            frames provided by applicable data protection laws. We reserve the
            right to request reasonable evidence to verify your identity before
            we provide you with any information and/or respond to any of your
            requests, as detailed below:
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            6.1. Right of Access.
          </h3>
          <p>
            You have a right to know what Personal Information we collect about
            you, and in some cases, even have this information provided to you.
            Pursuant to Sections 13 and 14 of the Privacy Protection Law,
            5571-1981, you are entitled to review your Personal Information
            either personally, through an authorized representative with written
            authorization, or via a legal guardian, as applicable. If you
            request to review this information, we will facilitate access in
            accordance with the conditions set forth by law and subject to any
            applicable legal requirements. In cases where the information is
            held by a third party (the &ldquo;Holder&rdquo;), we will direct you
            to the Holder and instruct the Holder to allow the review. Should
            you determine after reviewing the information that it is inaccurate,
            incomplete, unclear, or outdated, you have the right to contact us
            (or, if you are a foreign resident, the Holder) to request
            correction or deletion of the information. Subject to applicable
            law, we may charge you a fee. Please note that we may not be able to
            provide you with all the information you request, in which case we
            will try to explain why.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            6.2. Right of Data Portability.
          </h3>
          <p>
            If the processing is based on performance of a contract with you and
            is carried out by automated means, you may be entitled (to ask us)
            to provide you or another party with a copy of the Personal
            Information you have provided to us in a structured, commonly used
            and machine-readable format.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            6.3. Right to Correct Personal Information.
          </h3>
          <p>
            Subject to applicable law, you may request that we update, complete,
            correct or delete inaccurate, incomplete or outdated Personal
            Information. This right exists in accordance with Section 14 of the
            Privacy Protection Law, 5571-1981.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            6.4. Deletion of Personal Data (&ldquo;Right to Be
            Forgotten&rdquo;).
          </h3>
          <p>
            If you are a resident of the European Union, you have the right to
            request the deletion of your Personal Information under the
            following circumstances: (i) it is no longer necessary for the
            purpose for which it was collected, (ii) you have successfully
            exercised your right to object (see below), (iii) the processing was
            unlawful, or (iv) we are required to delete it to comply with a
            legal obligation. We will not be able to recover information after
            it has been deleted. Please note that to ensure that we do not
            collect additional Personal Information, you must clear your cookies
            from any device where you used our Services. We may retain certain
            Personal Information (including after your request for deletion) for
            auditing and record-keeping purposes or as otherwise permitted
            and/or required by applicable law.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            6.5. Right to Restrict Processing.
          </h3>
          <p>
            If you are a resident of the European Union, you may request that we
            restrict the processing of your Personal Information under any of
            the following conditions: (i) you have contested the accuracy of the
            information and requested a restriction until it has been verified;
            (ii) the processing is unlawful, but you do not wish us to delete
            the Personal Information; (iii) it is no longer needed for the
            purposes for which it was collected, but we still need it to
            establish, exercise or defend a legal claim; (iv) you have exercised
            your right to object (below), and we are in the process of verifying
            our permitted grounds for processing. We may continue to use your
            Personal Information after a restriction request under certain
            circumstances.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            6.6. Right to Object.
          </h3>
          <p>
            If you are a resident of the European Union, you can object to any
            processing of your Personal Information for which our legitimate
            interests are the legal basis, if you believe that your fundamental
            rights and freedoms outweigh those interests. If you raise an
            objection, we will have the opportunity to demonstrate that we have
            compelling legitimate interests that override your rights and
            freedoms.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">
            6.7. Right to Lodge a Complaint with Your Local Supervisory
            Authority.
          </h3>
          <p>
            If you are a resident of the European Union, you may have the right
            to lodge a complaint with the relevant supervisory authority for the
            protection of Personal Information if you have concerns about how we
            process your Personal Information. However, we kindly ask that you
            first attempt to resolve these concerns with us directly.
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            7. Data Retention.
          </h2>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">7.1.</h3>
          <p>
            Subject to applicable law, we retain Personal Information as
            necessary and for the purposes listed above. We may delete
            information from our systems without prior notice when we believe
            that information is no longer needed for these purposes. Data
            retention by each of our processors may vary based on the
            processor&rsquo;s specific retention policy.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">7.2.</h3>
          <p>
            In certain circumstances, we may retain your Personal Information
            extended periods, such as when required by law, regulations, tax,
            audit, or accounting rules and in order to maintain an accurate
            record of your transactions in the event of a complaint or if we
            believe litigation regarding your Personal Information or
            transactions is likely. To determine the appropriate retention
            period, we take into account the amount, nature and sensitivity of
            the Personal Information, the potential risk of harm from
            unauthorized use or disclosure of your information, the purposes for
            which we process it, and whether these purposes can be achieved by
            other means, alongside legal requirements.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-2">7.3.</h3>
          <p>
            Please contact us at{" "}
            <a
              href="mailto:support@aria.dating"
              className="text-white underline hover:opacity-80"
            >
              support@aria.dating
            </a>{" "}
            if you would like to receive details regarding the data retention
            periods for the various types of Personal Information.
          </p>
        </div>

        {/* Section 8 - Cookies with anchor so Footer can link here */}
        <div
          id="cookies"
          className="text-left w-full space-y-4 pt-10 scroll-mt-[150px]"
        >
          <h2 className="text-2xl font-bold text-white mb-4">8. Cookies</h2>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">8.1.</h3>
          <p>
            Cookies are short text files that are sent to or accessed from your
            device via your browser or your device&rsquo;s memory. There are
            several types of similar technologies, such as web beacons, pixel
            tags, device IDs, and we will include them all in the definition of
            &ldquo;cookies&rdquo;.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">8.2.</h3>
          <p>
            There are first-party and third-party cookies. First-party cookies
            are placed directly on your device by us. For example, we use
            first-party cookies to adapt our Services to your browser&rsquo;s
            language preferences and to better understand how you use our
            Services. Third-party cookies are placed on your device by our
            partners and service providers. You can learn more about these
            partners and service providers through our Services and the consent
            management tools within the app.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">8.3.</h3>
          <p>
            We use cookies to provide, secure and improve our Services,
            including by remembering your preferences, identifying you when you
            visit our Services, measuring the success of our marketing campaigns
            and personalizing advertisements to match your interests. To achieve
            these goals, we may also link information from cookies with other
            Personal Information we have about you.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">8.4.</h3>
          <p>
            Third parties we work with, such as service providers or business
            partners, may set cookies in your browser to collect information in
            connection with advertisements displayed on third-party websites.
            Third parties that are advertising companies may participate in
            self-regulatory programs that allow you to opt out of interest-based
            ads associated with them. Opting out does not mean you will stop
            seeing ads, but you will no longer see personalized ads from
            companies participating in these opt-out programs. In addition, if
            you delete cookies from your device after opting out, you will need
            to opt out again. For more information, you can visit the
            applications/websites of the following: Digital Advertising
            Alliance; Interactive Digital Advertising Alliance; Appchoices;
            (apps only).
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2">8.5.</h3>
          <p>
            There are several options for managing cookies. Please note that
            changes made by you to your cookie preferences may make your
            experience less satisfactory because they will make it less
            personalized. In some cases, it may even be impossible to use some
            or all of our Services.
          </p>
          <div className="ml-4 md:ml-8 pl-4 border-l-2 border-white/20 space-y-6">
            <div>
              <p className="font-semibold text-white mb-2">
                8.5.1. Browser and device management.
              </p>
              <p>
                Some web browsers provide settings that allow you to control
                cookies, reject them or receive a notification when a cookie is
                placed on your device/browser. The procedure for managing cookie
                files varies slightly between web browsers and/or devices. You
                can check the specific steps in the help menu of the browser
                and/or device used.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">8.5.2.</p>
              <p>
                It may be possible to reset device identifiers or opt out of the
                collection or processing of identifiers by using the appropriate
                setting on your mobile device. The procedures for managing
                identifiers vary slightly from device to device. You can check
                the specific steps in your device&rsquo;s help or settings menu.
                The cookies we use may change from time to time. In any case,
                the types of cookies we will use usually fall into one of the
                following types:
              </p>
              <ul className="mt-4 space-y-3 list-none">
                <li>
                  <span className="font-semibold text-white">Essential</span>{" "}
                  &ndash; These cookies are essential for the proper operation
                  of the Services. They allow you to access the Services,
                  navigate within the Services, and use various features, such
                  as enabling you to log in to an account.
                </li>
                <li>
                  <span className="font-semibold text-white">Operational</span>{" "}
                  &ndash; These remember your preferences between visits.
                </li>
                <li>
                  <span className="font-semibold text-white">Safety</span>{" "}
                  &ndash; These help us identify you and prevent other users
                  from changing your username and password and other safety
                  actions of this type.
                </li>
                <li>
                  <span className="font-semibold text-white">Analytical</span>{" "}
                  &ndash; These cookies help us understand how all users use our
                  services. This information helps us improve the Services, such
                  as which pages or features are popular, and which are less so.
                </li>
                <li>
                  <span className="font-semibold text-white">Advertising</span>{" "}
                  &ndash; These cookies are intended to provide you with
                  advertisements that may be relevant to you. This helps
                  advertisers show you targeted ads or ads you haven&rsquo;t
                  already seen. They help make sure ads are showing correctly
                  for advertisers, choose ads that are relevant to you, and
                  measure the number of ads shown and their performance, for
                  example how many people clicked on a given ad.
                </li>
              </ul>
              <p className="mt-4">
                In addition, we may use cookies from social networks or third
                parties for advertising purposes.
              </p>
            </div>
          </div>
          <p className="mt-4">
            If you have any questions regarding our cookie policy, you can
            contact us at{" "}
            <a
              href="mailto:support@aria.dating"
              className="text-white underline hover:opacity-80"
            >
              support@aria.dating
            </a>
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            9. Third Party Services.
          </h2>
          <p>
            Some of our Services include the use of third-party services and
            applications. Any use of these services is at your own risk and
            subject to the terms of use and privacy policy related to that
            service.
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">10. Children.</h2>
          <p>
            To register, you must be eighteen (18) years of age or older. The
            Company does not knowingly collect Personal Information on children
            under the age of eighteen (18). If you become aware that an
            individual under the age of eighteen (18) is using the Services, or
            a case where Personal Information of a minor has been uploaded as
            content to the Services, we ask that you notify us as soon as
            possible.
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            11. Communications and Notices.
          </h2>
          <p>
            We reserve the right to send you Service-related notices via email,
            including service notices and administrative notices relating to
            your account without offering you the option to opt-out unless you
            close your account.
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10 pb-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            12. Changes to the Privacy Policy.
          </h2>
          <p>
            Our Privacy Policy may change from time to time. If substantial
            changes are made to the Privacy Policy, a notice will be posted on
            this page.
          </p>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";

export default function TermsClient() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
      {/* Black background for the top 64px to hide scrolling text under the transparent navbar */}
      <div className="fixed top-0 left-0 right-0 h-[64px] bg-black z-40 pointer-events-none" />

      <div className="w-full mb-8 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 py-4 sticky top-[64px] z-40 bg-black space-y-2 md:space-y-0">
        <h1 className="text-4xl md:text-5xl font-bold text-white m-0 p-0 leading-none">
          Terms of Use
        </h1>
        <span className="text-sm md:text-base text-gray-400 font-normal m-0 p-0 leading-none">
          Last update: October 16, 2025
        </span>
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed text-lg text-center w-full">
        <p>Welcome to Aria.</p>
        <p>
          These Terms of Use constitute an agreement between you and Ringle
          Dating Ltd. (company registration number: 516697034), based at Abba
          Even 4, Jerusalem, Israel. The terms "we", "us", the "Company" or
          "Aria" refer to Ringle Dating Ltd.
        </p>
        <p>
          The Company offers a dedicated platform for Black singles who value
          culture, commitment, and intentional love. to find a suitable match
          through the Aria Mobile Application (the "App"), website -
          Ariadating.com (the "Website"), and other services provided by us
          (collectively referred to as the "Services" or the "Service").
        </p>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            1. Acceptance of Terms of Use
          </h2>
          <p>
            Creating a Aria account, using a mobile device and/or mobile
            application constitutes your agreement (1) to these Terms of Use,
            and (2) our privacy policy, cookies policy, and community guidelines
            (at the bottom of these Terms of Use), which are incorporated into
            the agreement by virtue of their mention in this agreement,
            (collectively, this "Agreement"). Without acceptance of the terms of
            this Agreement, the Service cannot be used. The "User" or "you" is
            the user of the services.
          </p>
          <p>
            We may, from time to time, affect changes to this Agreement and
            Service. The changes may be implemented for different reasons, inter
            alia, legal requirements or changes to the law, new features or
            changes in business methods. The most recent version of the
            Agreement will be published under "Settings" and on our Website, and
            you should check regularly what the latest version is. The most
            recent version is the valid version. If the changes include material
            changes that affect your rights or obligations, use of the service
            after the changes take effect constitutes acceptance of the changes
            in the Agreement.
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
          <p>
            You are not authorized to create an account, access, or use the
            Service or its underlying systems unless you comply with Aria's
            Community Rules, as outlined in Section 7 below, and meet the
            following two conditions:
          </p>
          <ul className="list-disc ml-8 space-y-2">
            <li>You are 18 years of age or older</li>
            <li>
              You are able to enter into a binding contract with Aria and agree
              to comply with the Agreement and all applicable laws, rules, and
              regulations.
            </li>
          </ul>
          <p>
            Additionally, you have no criminal record, including offenses of a
            sexual nature or violence, and you are neither required to register
            nor registered as a sex offender in any local, state, or federal
            registry of any country.
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            3. Your Account
          </h2>
          <p>
            There are several ways to sign up for the Service. For more
            information on the data we collect from you and how it is used,
            please refer to our Privacy Policy. The privacy of your account
            sign-in information is solely your responsibility, including any
            activities associated with it and safeguarding your means of access.
            If you suspect someone has gained unauthorized access to your
            account, you must immediately contact us at{" "}
            <a
              href="mailto:support@Ringledating.com"
              className="text-white underline hover:opacity-80"
            >
              support@Ringledating.com
            </a>
            . Your account is at risk if you allow someone to use it improperly.
            Your account may be terminated if you or anyone else uses it in
            violation of this Agreement. If your account is terminated, you will
            not be permitted to open a new account without explicit consent from
            the Company.
          </p>
          <p>
            The Company will not be liable for any loss or damage resulting from
            unauthorized use of your account or password. You undertake to
            indemnify the Company for any illegal or improper use of your
            account and for any debt or taxes applicable to it, unless you have
            notified us at{" "}
            <a
              href="mailto:support@Ringledating.com"
              className="text-white underline hover:opacity-80"
            >
              support@Ringledating.com
            </a>{" "}
            that your account has been compromised and requested it be blocked.
            The Company does not monitor such cases and cannot guarantee that it
            will know or be able to prevent every improper use of your account,
            the Website, or the Services.
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            4. Change or Termination of Service
          </h2>
          <p>
            At Aria, we aspire to always improve the Service and provide
            additional features that may interest and benefit you. As such, we
            may occasionally add or remove features (tools or attributes). We
            may also suspend the Service altogether. All updates will be
            available on our Service. Additionally, any software we provide may
            automatically download and install updates, upgrades, or other new
            features.
          </p>
          <p>
            The easiest way to close your account at any time, for any reason,
            is through "Settings" in the Service. Aria may terminate your
            account at any time without prior notice if we suspect a violation
            of the terms of this Agreement. In such cases, you will not be
            reimbursed for any purchases. If you used third-party services for
            payment, you must follow the instructions within the third-party
            account to stop the renewal of your subscription.
          </p>
          <p>
            After your account is closed, this Agreement will terminate, except
            for Sections 4, 5, 8-12, and 15-20, which will remain in effect.
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            5. Safety; Interacting with other Aria Users
          </h2>
          <p>
            At Aria, we strive to foster a respectful experience through
            features such as our "mutual agreement" feature, which allows Users
            to communicate only when both parties have expressed interest.
            However, we are not responsible for the actions or behavior of
            Users, whether within the service or outside of it. You agree to
            conduct yourself responsibly in all interactions with other Users,
            particularly if you choose to communicate outside the service or
            meet in person. You also agree not to share financial information
            (such as credit card or bank account details) or send money to other
            Users in any manner.
          </p>
          <p>
            You are solely responsible for your interactions with other Users.
            It is important to understand that Aria does not conduct criminal or
            other background checks and does not investigate its Users' past in
            any way. Aria does not take responsibility for the level of
            compatibility between Users or their behavior.
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            6. Limited Rights Granted by Aria
          </h2>
          <p>
            Aria grants you a personal, global, non-transferable, non-exclusive
            license to use the Service. This license is revocable and cannot be
            sublicensed. Its sole purpose is to allow you to use and benefit
            from the Service as permitted under this Agreement.
          </p>
        </div>

        <div className="text-left w-full space-y-4 pt-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            7. Purpose of the Service, Usage Restrictions, and Community Rules
          </h2>
          <p>
            The purpose of the Service is to assist users in finding a suitable
            match in accordance with its meaning. Some of our guidelines reflect
            this objective.
          </p>
          <p>
            For the avoidance of doubt, the following actions are strictly
            prohibited. This license, along with all permissions to access
            and/or use the Service, will be automatically revoked if you engage
            in any of the following:
          </p>

          <ul className="list-disc ml-4 md:ml-8 space-y-3 opacity-80 mt-4 leading-relaxed">
            <li>Opening an account in violation of Section 2 above.</li>
            <li>
              Providing false information during sign up or afterward, including
              regarding payments.
            </li>
            <li>
              Encouraging illegal activities and/or actions that could harm
              other Users and/or any third party.
            </li>
            <li>
              Using the Service or any of its content for commercial purposes
              without our written consent.
            </li>
            <li>
              Copying, modifying, transferring, distributing, renting,
              broadcasting, publicly displaying, publishing, distribution,
              creating derivative works, making any other use of, or reproducing
              in any way the material, images, trademarks, trade names, service
              marks, intellectual property, content, or other proprietary
              information protected by copyrights, which are accessible through
              the Service, without prior written consent from Aria.
            </li>
            <li>
              Using a robot, bot, spider, scanner, scraper, spyware, website
              retrieval/search application, proxy server, or any manual or
              automated device, method, or process to access, retrieve, index,
              “data mine”, or in any way duplicate or bypass the navigation
              structure or the display of the Service or its content.
            </li>
            <li>Mirroring or framing the Service.</li>
            <li>
              Using the Service in any manner that may interfere with, disrupt,
              or negatively impact the Service, its servers, or related
              networks.
            </li>
            <li>
              Uploading viruses, malicious code, or otherwise compromising the
              security of the Service.
            </li>
            <li>
              Forging titles or altering identifiers in any way to disguise the
              source of information transmitted to or through the Service.
            </li>
            <li>
              “Framing” or “mirroring” any part of the Service without Aria’s
              prior written consent.
            </li>
            <li>
              Using meta tags, code or other devices that reference Aria or the
              Service (or any Aria trademark, trade name, service mark, logo, or
              slogan) to direct any person to another website for any purpose.
            </li>
            <li>
              Modifying, adapting, manipulating, sublicensing, translating,
              selling, reverse engineering, deciphering, decompiling or
              disassembling any part of, or any attempt to discover the source
              code of, the software underlying the Services. This includes
              creating and using any means to compile, collect or build a
              database containing content from the Service or its code.
              Additionally, causing others to perform one of these actions is
              prohibited and may lead to termination of the license to use the
              Services.
            </li>
            <li>
              Using or developing third-party applications or bots that interact
              with the Service or other User content or information without our
              written consent.
            </li>
            <li>
              Using Aria’s application programming interface (API), for the
              purpose of accessing it or publishing it without our written
              consent.
            </li>
            <li>
              Examining, scanning and/or testing the vulnerabilities of our
              Service or any system or network.
            </li>
            <li>
              Attempting to disable or bypass any security mechanisms of the
              Service.
            </li>
            <li>
              Encouraging or promoting activities that violate this Agreement.
            </li>
          </ul>

          <p className="mt-8 font-semibold">
            Both in your relationship with Aria and under Aria’s community
            rules, the following actions are expressly prohibited. Engaging in
            any of these will result in automatic termination of this license
            and all permissions to access and/or use the Service:
          </p>

          <ul className="list-disc ml-4 md:ml-8 space-y-3 opacity-80 mt-4 leading-relaxed">
            <li>
              Uploading content, conversations, or communications that do not
              adhere to the Service’s standards of modesty and respect. These
              standards include using clean and respectful language, posting
              real and modest photos (which must not infringe on any third-party
              rights, including privacy rights), and avoiding expressions that
              may harm or humiliate other Users. Additionally, you may not
              attempt to send inappropriate messages, provide false information,
              use the Service in bad faith, or engage in illegal activities,
              including harmful, questionable, or prohibited purposes as
              outlined in this Agreement.
            </li>
            <li>
              Expressly or impliedly representing to other Users or any person
              that Aria endorses any of your statements.
            </li>
            <li>
              Attempting to obtain another User’s password or personal details,
              or falsely using them. This includes soliciting passwords for any
              purpose, soliciting personal identifying details for commercial or
              illegal purposes, or distributing another person’s personal
              information without their consent.
            </li>
            <li>
              Attempting to solicit or receive money or valuables from other
              Users, or defrauding them.
            </li>
            <li>
              Impersonating another User or person (whether real or fictitious),
              or misrepresenting your identity, including posting photos of
              others without their permission.
            </li>
            <li>
              Violating the individual and legal rights of third parties,
              including by publishing content that violates or infringes the
              rights of any other person, including rights of publicity,
              privacy, copyright, moral rights, trademark, intellectual
              property, or other contractual rights of another User or third
              party.
            </li>
            <li>
              Defaming, slandering, intimidating, badgering, harassing, or
              stalking other Users or any person.
            </li>
            <li>
              Publishing any violent content that spreads hatred, threats, or
              contains graphic violence, death, or descriptions of violent acts
              (against humans or animals), the use of weapons, or any content
              that incites violence or that encourages or glorifies self-harm.
            </li>
            <li>Spamming.</li>
            <li>
              Publishing content that encourages racism, prejudice, hatred, or
              physical harm of any kind towards any group or individual.
            </li>
            <li>
              Using another User’s account, sharing an account with another
              User, or maintaining more than one account.
            </li>
            <li>
              Creating a new or replacement account after your account has been
              closed by us, unless you have received explicit permission from us
              to do so.
            </li>
            <li>
              Posting or sharing content involving minors on the Service,
              including minors under your custody and pictures of yourself from
              when you were younger.
            </li>
            <li>
              Advertising, promoting, or sharing nicknames on social media for
              the purpose of gaining followers, selling things, collecting
              donations, or conducting campaigns is not permitted.
            </li>
          </ul>
        </div>

        <div className="text-left w-full space-y-4 pt-10 pb-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            8. Child Safety and Protection
          </h2>
          <p>
            The Company is committed to maintaining a safe environment, free
            from any illegal or harmful activity. The Services are intended for
            adults only (18 years of age or older), and the use of the
            application by minors is strictly prohibited.
          </p>
          <p>
            The Company maintains a zero-tolerance policy toward any form of
            child sexual abuse material or exploitation ("CSAM") or any activity
            that promotes, depicts, or facilitates such conduct.
          </p>
          <p>
            Any user, content, or activity of this nature will be immediately
            removed, and where appropriate, reported to the relevant law
            enforcement authorities, in full compliance with applicable child
            protection and online safety laws.
          </p>
          <p>
            The Application includes an in-app reporting and feedback mechanism
            that allows users to report inappropriate content, suspicious
            behavior, or any potential violation of these standards directly
            within the app.
          </p>
          <p>
            The Company continuously reviews and updates its internal policies
            and monitoring practices to ensure full compliance with applicable
            laws and international standards designed to prevent child
            exploitation and abuse.
          </p>
        </div>
      </div>
    </div>
  );
}

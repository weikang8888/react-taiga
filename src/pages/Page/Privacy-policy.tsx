import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerImage from "../../static/assets/about/about-taiga.png";
import Loader from "../../components/Loader/Loader";
const PrivacyPolicy = () => {
  return (
    <>
      <Loader />
      <Banner
        bannerImage={BannerImage}
        bannerTitle={"Privacy Policy"}
        bannerTarget={"Privacy Policy"}
        bannerPreviousTarget={"Pages"}
        showChevron={true}
      />
      <section className="privacy-area pt-100">
        <div className="container">
          <div className="privacy-item">
            <h2>Privacy Policy</h2>
            <p>
              This privacy notice for Taiga Auto Service (“we”, “us,” or “our”),
              describes how and why we might collect, store, use, and/or share
              (“process”) your information when you use our services
              (“Sevices”), such as when you:
            </p>
            <p>
              • Visit our website at{" "}
              <a href="https://www.taiga-auto.com/" className="text-main">
                https://www.taiga-auto.com/
              </a>
              , or any websites of ours that links to this privacy notice.
            </p>
            <p>
              • Engage with us in other related ways, including any sales,
              marketing, or events
            </p>
          </div>
          <div className="privacy-item">
            <h2>Questions or concerns? </h2>
            <p>
              Reading this privacy notice will help you understand your privacy
              rights and choices. If you do not agree with our policies and
              practices, please do not use our Services. If you still have any
              questions or concerns, please contact us at{" "}
              <a href="mailto:taigaautoservice@gmail.com" className="text-main">
                taigaautoservice@gmail.com
              </a>
            </p>
          </div>
          <div className="privacy-item">
            <h2>SUMMARY OF KEY POINTS</h2>
            <h4 className="fw-bolder fst-italic">
              This summary provides key points from our privacy notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our table of
              contents below to find the section you are looking for.
            </h4>
            <div className="privacy-item">
              <h2>What personal information do we process? </h2>
              <p>
                When you visit, use or navigate our service, we may process
                personal information depending on how you interact with us and
                the services, the choices you make and the products and features
                you use. Learn more about personal information you disclose to
                use.
              </p>
            </div>
            <div className="privacy-item">
              <h2>Do we process any sensitive personal information? </h2>
              <p>We do not process sensitive personal information.</p>
            </div>{" "}
            <div className="privacy-item">
              <h2>Do we receive any information from third parties? </h2>
              <p>
                We may receive information from public databases, marketing
                partners, social media platforms, and other outside sources.
                Learn more about information collected from other sources.
              </p>
            </div>{" "}
            <div className="privacy-item">
              <h2>How do we process your information? </h2>
              <p>
                We process your information to provide, improve and administer
                services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your
                information for other purposes with your consent. We process
                your information only when we have a valid legal reason to do
                so. Learn more about how we process your information.
              </p>
            </div>{" "}
            <div className="privacy-item">
              <h2>
                In what situations and with which types of parties do we share
                personal information?{" "}
              </h2>
              <p>
                We may share information in specific situations and with
                specific categories of third parties. Learn more about when and
                with whom we share your personal information.
              </p>
            </div>
            <div className="privacy-item">
              <h2>How do we keep your information safe?</h2>
              <p>
                We have organizational and technical processes and procedures in
                place to protect your personal information. However, no
                electronic transmission over the internet or information storage
                technology can be guaranteed to be 100% secure, so we cannot
                promise or guarantee that hackers, cybercriminals, or other
                unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information. Learn more about how we keep your information safe.
              </p>
            </div>{" "}
            <div className="privacy-item">
              <h2>What are your rights?</h2>
              <p>
                Depending on how you are located geographically, the applicable
                privacy law may mean you have certain rights regarding your
                personal information. Learn more about your privacy rights.
              </p>
            </div>{" "}
            <div className="privacy-item">
              <h2>How do you exercise your rights?</h2>
              <p>
                The easiest way to exercise your rights is by visiting{" "}
                <a href="https://www.taiga-auto.com/" className="text-main">
                  https://www.taiga-auto.com/
                </a>
                , or by contacting us at{" "}
                <a href="tel:+60127256601" className="text-main">
                  +60 12-725 6601
                </a>
                . We will consider and act upon any request in accordance with
                applicable data protection laws. Want to learn more about what
                we do with any information we collect? Review the privacy notice
                in full
              </p>
            </div>
            <div className="privacy-item">
              <h2>TABLE OF CONTENTS</h2>
              <p className="fw-bold">1. WHAT INFORMATION DO WE COLLECT?</p>
              <p className="fw-bold">2. HOW DO WE PROCESS YOUR INFORMATION?</p>
              <p className="fw-bold">
                3. WHEN AND WITH WHOM WE SHARE YOUR PERSONAL INFORMATION
              </p>
              <p className="fw-bold">4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</p>
              <p className="fw-bold">
                5. HOW LONG DO WE KEEP YOUR INFORMATION?
              </p>
              <p className="fw-bold">
                6. HOW DO WEE KEEP YOUR INFORMATION SAFE?
              </p>
              <p className="fw-bold">
                7. DO WE COLLECT INFROMATION FROM MINORS?
              </p>
              <p className="fw-bold">8. WHAT ARE YOUR PRIVACY RIGHTS?</p>
              <p className="fw-bold">9. CONTROL FOR DO-NOT-TRACK FEATURES</p>
              <p className="fw-bold">10. DO WE KEEP UPDATES TO THIS NOTICE?</p>
              <p className="fw-bold">
                11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </p>
              <p className="fw-bold">
                12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </p>
            </div>
            <div className="privacy-item">
              <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
              <p className="fw-bold">Personal information you disclose to us</p>
              <p>
                In Short: We collect personal information that you provide to
                us. We collect personal information that you voluntarily provide
                to us when you register on the services, express an interest in
                obtaining information about us or our products and services,
                when you participate in activities on the services of otherwise
                when you contact us.
              </p>
              <p className="fw-bold">Personal Information Provided by You. </p>
              <p>
                The personal information that we collect depends on the context
                of your interactions with us and the services, the choices you
                make and the product and features you use. The personal
                information we collect may include the following:
              </p>
              <p className="fw-bold">• Names</p>
              <p className="fw-bold">• Phone numbers</p>
              <p className="fw-bold">• Email addresses </p>
              <p className="fw-bold">• Mailing addresses</p>
              <p className="fw-bold">• Contact preferences</p>
              <p className="fw-bold">• Contact or authentication data</p>
              <p className="fw-bold">• Billing addresses</p>
              <p className="fw-bold">Sensitive information. </p>
              <p>We do not process sensitive information</p>
              <p className="fw-bold">Social Media Login Data. </p>
              <p>
                We may provide you with the option to register with us using
                your existing social media account details, like your Facebook,
                Twitter or other social media account. If you choose to register
                in this way, we will collect the information describes in the
                section called “HOW DO WE HANDLE YOUR SOCIAL LOGINS?” below. All
                personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
              </p>{" "}
              <p className="fw-bold">Information automatically collected </p>
              <p className="fst-italic">
                <strong>In Short:</strong>Some information – such as you
                Internet Protocol (IP) address and/or browser and devices
                characteristics – is collected automatically when you visit our
                Services.
              </p>
              <p>
                We automatically collect certain information when you visit,
                use, or navigate the services. This information does not reveal
                your specific identity (like your name or contact information)
                but may include device and usage information, such as your IP
                address, browser and devices characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our services,
                and other technical information. This information is primarily
                needed to maintain the security and operation of our services,
                and for our internal analytics and reporting purposes.
              </p>
              <p>The information we collect includes:</p>
              <p>
                • Log and Usage Data. Log and usage data is service-related,
                diagnostic, usage, and performance information our servers
                automatically collect when you access or use our services and we
                record in log files. Depending on how you interact with us, this
                log data may include your IP address, device information,
                browser type, and settings and information about your activity
                in the service (such as the date/time stamps associated with
                your usage, pages and files viewed, searches, and other actions
                you take such as which features you use), device event
                information (such as system activity, error reports (sometimes
                called “crash dumps”) and hardware settings)
              </p>
              <p>
                • Device Data. We collect device data such as information about
                your computer, phone, tablet, or other device you use to access
                the services. Depending on the device used, this device data may
                include information such as you IP address (or proxy server),
                device and application identification numbers, location, browser
                type, hardware model, Internet service provider and/or mobile
                carrier, operation system, and system configuration information.
              </p>
              <p>
                • Location data. We collect location data such as information
                about your device’s location, which can be either precise or
                imprecise. How much information we collect depends on the type
                and settings of the device you use to access the services. For
                example. We use GPS and other technologies to collect
                geolocation data that tells us your current location (based in
                your IP address). You can opt out of allowing us to collect this
                information either by refusing access to the information or by
                disabling your location setting on your device. However, if you
                choose to opt out, you may not be able to use certain aspects of
                the services.
              </p>
              <p className="fw-bold">
                Information collected from other sources
              </p>
              <p className="fst-italic">
                <strong>In Short:</strong>We may collect limited data from
                public databases, marketing partners, social media platforms and
                other outside sources.
              </p>
              <p className="mb-2">
                In order to enhance our ability to provide relevant marketing,
                offers, and services to you and update our records, we may
                obtain information about you from other sources, such as public
                databases, joint marketing partners, affiliate programs, data
                providers, social media platforms and other third parties. This
                information includes mailing addresses, job titles, email
                addresses, phone numbers, intent data (or user behavior data),
                Internet Protocol (IP) addresses, social media profiles, social
                media URLs, and custom profiles, for purposes of targeted
                advertising and event promotion. If you interact with us on a
                social media platform using your social media account (e.g.,
                Facebook or Twitter), we receive personal information about you
                such as your name, email address, and gender. Any personal
                information that we collect from your social media account
                depends on your social media account’s privacy settings.
              </p>
              <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
              <p className="fst-italic">
                <strong>In Short:</strong> We process your information to
                provide, improve, and administer our services, communicate with
                you, for security and fraud prevention, and to comply with law.
                We may also process your information for other purposes with
                your consent.
              </p>
              <p className="fw-bold">
                We process your personal information for a variety of reasons,
                depending on how you interact with our services, including:
              </p>
              <p>
                <strong>
                  • To facilitate account creation and authentication and
                  otherwise manage user accounts.
                </strong>{" "}
                We may process your information so you can create and log in to
                your account, as well as keep your account in working order.
              </p>
              <p>
                <strong>
                  • To deliver and facilitate delivery of services to the user.
                </strong>{" "}
                We may process your information to provide you with the
                requested service.
              </p>
              <p>
                <strong>
                  • To respond to user inquiries/offer support to users.
                </strong>{" "}
                We may process your information to respond to your inquiries and
                solve any potential issues you might have with the requested
                service.
              </p>{" "}
              <p>
                <strong>• To send administrative information to you.</strong> We
                may process your information to send you details about our
                products and services, changes to our terms and policies, and
                other similar information.
              </p>{" "}
              <p>
                <strong>• To fulfil and manage your orders.</strong>We may
                process your information to fulfil and manage your orders,
                payments, returns, and exchanges made through the services.
              </p>{" "}
              <p>
                <strong>• To enable user-to-user communications.</strong> We may
                process your information if you choose to use any of our
                offerings that allow for communication with another user.
              </p>{" "}
              <p>
                <strong>• To request feedback.</strong> We may process your
                information when necessary to request feedback and to contact
                you about your use of our services.
              </p>{" "}
              <p>
                <strong>
                  • To send you marketing and promotional communications.
                </strong>{" "}
                We may process the personal information you send to us for our
                marketing purposes, if this is in accordance with your marketing
                preferences. You can opt out of our marketing emails at any
                time. For more information, see “WHAT ARE YOUR PRIVACY RIGHTS?”
                below.
              </p>{" "}
              <p>
                <strong>• To deliver targeted advertising to you.</strong> We
                may process your information to develop and display personalized
                content and advertising tailored to your interests, location,
                and more.
              </p>{" "}
              <p>
                <strong>• To post testimonials.</strong> We post testimonials on
                our services that may contain personal information.
              </p>{" "}
              <p>
                <strong>• To administer prize draws and competitions.</strong>{" "}
                We may process your information to administer prize draws and
                competitions.
              </p>{" "}
              <p>
                <strong>
                  • To evaluate and improve our services, products, marketing
                  and your experience.
                </strong>{" "}
                We may process your information when we believe it is necessary
                to identify usage rends, determine the effectiveness of our
                promotional campaigns, and to evaluate and improve our services,
                products, marketing and your experience.
              </p>{" "}
              <p>
                <strong>• To identify usage trends.</strong> We may process
                information about how you use our services to better understand
                how they are being used so we can improve them.
              </p>{" "}
              <p className="mb-2">
                <strong>
                  • To determine the effectiveness of our marketing and
                  promotional campaigns.
                </strong>{" "}
                We may process your information to better understand how to
                provide marketing and promotional campaigns that are most
                relevant to you.
              </p>
              <h2>3. WHEN AND WITH WHOM WE SHARE YOUR PERSONAL INFORMATION</h2>
              <p className="fst-italic">
                <strong>In short:</strong> We may share information in specific
                situations describes in this section and/or with the following
                categories of third parties.
              </p>
              <p>
                <strong>
                  Branches, Dealer Shops and Other Third-Party Service
                  Providers.
                </strong>
                We may share your data with third-party vendors, service
                providers, contractors, or agents (“third parties”) who perform
                services for us on our behalf and require access to such
                information to do that work. We have contracts in place with our
                third parties, which are designed to help safeguard your
                personal information. This means that they cannot do anything
                with your personal information unless we have instructed them to
                do it. They will also not share your personal information with
                any organization apart from us. They also commit to protect the
                data they hold on our behalf and to retain it for the period we
                instruct. The categories of third party we may share personal
                information with are as follows:
              </p>
              <p>• Social Networks</p>
              <p>• Payment Processors</p>
              <p>• Order Fulfillment Service Providers</p>
              <p>• Ad Networks</p>
              <p>• Affiliate Marketing Programs</p>
              <p>
                We also may need to share your personal information in the
                following situations:
              </p>
              <p>
                <strong>• Business Transfers. </strong>We may share or transfer
                your information in connection with, or during negotiations of,
                any merger, sale od company assets, financing, or acquisition of
                all or a portion of our business to another company.
              </p>
              <p>
                <strong>• Affiliates.</strong> We may share your information
                with our affiliates, in which case we will require those
                affiliated to honor this privacy notice. Affiliates include our
                parent company and any subsidiaries, joint venture partners, or
                other companies that we control or that are under common control
                with us.
              </p>
              <p className="mb-2">
                <strong> • Business Partners.</strong> We may share your
                information with our business partners to offer you certain
                products, services or promotions.
              </p>
              <h2>4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
              <p className="fst-italic">
                <strong>In Short: </strong>If you choose to register or log in
                to our services using a social media account, we may have access
                to certain information about you.{" "}
              </p>
              <p>
                Our services offer you the ability to register and log in using
                third-party social media account details (like your Facebook
                logins). Where you choose to do this, we will receive certain
                profile information about you from your social media provider
                concerned, but will often include your name, email address,
                friend list, and profile picture, as well as other information
                you choose to make public in such a social media platform.
              </p>
              <p className="mb-2">
                We will use the information we receive only for the purposes
                that are described in this privacy notice or that are otherwise
                made clear to you on the relevant services. Please note that we
                do not control, and are not responsible for, other uses of your
                personal information by your third-party social media provider.
                We recommend that you review their privacy notice to understand
                how they collect, use, and share your personal information, and
                how you can set your privacy preferences on their sites and
                apps.
              </p>
              <h2>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
              <p className="fst-italic">
                <strong>In Short:</strong> We keep your information for as long
                as necessary to fulfil the purposes outlined in this privacy
                notice unless otherwise required by law.
              </p>
              <p>
                We will only keep your information for as long as it is
                necessary for the purposes set out in this privacy notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting, or other legal requirements). No
                purpose in this notice will require us keeping your personal
                information for longer than the period of tome in which users
                have an account with us.{" "}
              </p>
              <p className="mb-2">
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible for example, because
                your personal information and isolate it from any further
                processing until deletion is possible.
              </p>
              <h2>6. HOW DO WEE KEEP YOUR INFORMATION SAFE?</h2>
              <p className="fst-italic">
                <strong>In Short:</strong> We aim to protect your personal
                information through a system of organizational and technical
                security measures.
              </p>
              <p className="mb-2">
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the
                security of any personal information we process. However,
                despite our safeguards and efforts to secure your information,
                no electronic transmission over the internet or information
                storage technology can be guaranteed to be 100% secure, so we
                cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal or modify your
                information. Although we will do our best to protect your
                personal information, transmission of personal information to
                and from our services is at your own risk. You should only
                access the services within a secure environment.
              </p>
              <h2>7. DO WE COLLECT INFROMATION FROM MINORS?</h2>
              <p className="fst-italic">
                <strong>In Short:</strong> We do not knowingly collect data from
                or market to children under 18 years of age.
              </p>
              <p className="mb-2">
                We do not knowingly solicit data from or market to children
                under 18 years age. By using the services, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent’s use of the
                services. If we learn that personal information from users less
                than 18 years of age has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data, we may
                have collected from children under age 18, please contact us at
                <a href="tel:+60127256601" className="text-main">
                  +60 12-725 6601
                </a>
              </p>
              <h2>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
              <p className="fst-italic">
                <strong>In Short:</strong> You may review, change, or terminate
                your account at any time.
              </p>
              <p>
                <strong> Withdrawing your consent:</strong> If we are relying on
                your consent to process your personal information, which may be
                express and/or implied consent depending on the applicable law,
                you have the right to withdraw your consent at any time. You can
                withdraw your consent at any time by contacting by using the
                contact details provided in the section “HOW CAN YOU CONTACT US
                ABOUT THIS NOTICE?” below. However, please note that this will
                not affect the lawfulness of the processing before its
                withdrawal nor, when applicable law allows, will it affect the
                processing of your personal information conducted in reliance on
                lawful processing grounds other than consent.
              </p>
              <p>
                <strong>
                  Opting out of marketing and promotional communications:
                </strong>{" "}
                You can unsubscribe from our marketing and promotional
                communications at any time by clicking on the unsubscribe link
                in the emails that we send, or by contacting us using the
                details provided in the section “HOW CAN YOU CONTACT US ABOUT
                THIS NOTICE?” below. You will then be removed from marketing
                lists. However, we may still communicate with you – for example,
                to send you service-related messages that are necessary for the
                administration and use of your account, to respond to service
                requests, or for other non-marketing purposes.
              </p>
              <p>
                <strong>Account Information</strong>
              </p>
              <p>
                If you would at any time like to review or change the
                information in your account or terminate your account, you can:
              </p>
              <p>• Log in to your account settings and update user account.</p>
              <p>• Contact us using the contact information provided.</p>
              <p>
                Upon your request to terminate your account, we will deactivate
                or delete your account and information from active databases.
                However, we may retain some information in our files to prevent
                fraud, troubleshoot problems, assist with any investigations,
                enforce our legal terms and/or comply with applicable legal
                requirements.
              </p>
              <p className="mb-2">
                If you have questions or comments about your privacy rights, you
                may email us at{" "}
                <a
                  href="mailto:taigaautoservice@gmail.com"
                  className="text-main">
                  taigaautoservice@gmail.com
                </a>
              </p>
              <h2>9. CONTROL FOR DO-NOT-TRACK FEATURES</h2>
              <p className="mb-2">
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track (“DNT”) feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in future, we will inform you about
                that practice in a revised version of this privacy notice.
              </p>
              <h2>10. DO WE KEEP UPDATES TO THIS NOTICE?</h2>
              <p className="fst-italic">
                <strong>In Short: </strong>Yes, we will update this notice as
                necessary to stay compliant with relevant laws.
              </p>
              <p className="mb-2">
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated “Revised” date and the
                updated version will be effective as soon as it is accessible.
                If we make material changes of by directly sending you a
                notification. We encourage you to review this privacy notice
                frequently to be informed of how we are protecting your
                information.
              </p>
              <h2>11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
              <p>
                .If you have questions or comments about this notice, you may
                email us at{" "}
                <a
                  href="mailto:taigaautoservice@gmail.com"
                  className="text-main">
                  taigaautoservice@gmail.com
                </a>
                or contact us by post at:
              </p>
              <p>Taiga Auto Service</p>
              <p>101G, Jalan Bestari 1/5, </p>
              <p>Taman Nusa Bestari,</p>
              <p>79150, Nusajaya, Johor</p>
              <p className="mb-2">Malaysia</p>
              <h2>
                12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </h2>
              <p>
                Based on the applicable laws of your country, you may have the
                right to request access to the personal information we collect
                from you, change that information or delete it. To request to
                review, update, or delete your personal information, please
                visit:{" "}
                <a
                  href="mailto:taigaautoservice@gmail.com"
                  className="text-main">
                  taigaautoservice@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;

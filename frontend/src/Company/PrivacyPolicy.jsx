import React, { useState, useEffect } from "react";

const PrivacyPolicy = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {!isMobile && (
        <div className="flex justify-center items-center w-full h-auto flex-col mb-50 bg-dark-white gap-20 mt-25">
          <div className="flex justify-center items-center w-80 h-full">
            <span className="font-poppins text-main-color text-36 font-700 tracking-1">
              Privacy Policy
            </span>
          </div>
          <div className="flex w-80 h-auto min-h-400 flex-col p-20 gap-50">
            <div className="flex w-full h-auto flex-col gap-20">
              <p className="font-poppins text-dark-grey text-18 font-500">
                At ModaZen, we are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and protect the
                information you provide to us when using our website or
                services.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-20">
              <span className="font-poppins text-main-color text-22 font-700 tracking-1">
                Information We Collect:
              </span>
              <p className="font-poppins text-dark-grey text-18 font-500">
                <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
                  1. Personal Information:
                </h3>{" "}
                When you create an account, place an order, or contact customer
                support, we may collect personal information such as your name,
                email address, phone number, shipping address, and payment
                details.
              </p>
              <p className="font-poppins text-dark-grey text-18 font-500">
                <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
                  2. Usage Information:
                </h3>{" "}
                We may collect information about your interactions with our
                website, including your browsing history, IP address, device
                information, and cookies.
              </p>
              <p className="font-poppins text-dark-grey text-18 font-500">
                <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
                  3. Communications:
                </h3>{" "}
                If you contact us via email, phone, or other communication
                channels, we may retain records of your correspondence for
                customer support and training purposes.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-20">
              <span className="font-poppins text-main-color text-22 font-700 tracking-1">
                How We Use Your Information:
              </span>
              <p className="font-poppins text-dark-grey text-18 font-500">
                <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
                  1. Order Processing:
                </h3>{" "}
                We use your personal information to process orders, deliver
                products, and provide customer support related to your
                purchases.
              </p>
              <p className="font-poppins text-dark-grey text-18 font-500">
                <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
                  2. Account Management:
                </h3>{" "}
                Your information helps us manage and secure your account,
                personalize your experience, and communicate important updates
                and promotions.
              </p>
              <p className="font-poppins text-dark-grey text-18 font-500">
                <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
                  3. Analytics and Improvements:
                </h3>{" "}
                We analyze usage data to improve our website, services, and
                marketing strategies, ensuring a better user experience for our
                customers.
              </p>
              <p className="font-poppins text-dark-grey text-18 font-500">
                <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
                  4. Legal Compliance:
                </h3>{" "}
                We may use and disclose your information as required by law,
                regulation, or legal process, or to protect our rights,
                property, or safety and those of others.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-20">
              <span className="font-poppins text-main-color text-22 font-700 tracking-1">
                Information Sharing and Disclosure:
              </span>
              <p className="font-poppins text-dark-grey text-18 font-500">
                <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
                  1. Third-Party Service Providers:
                </h3>{" "}
                We may share your information with trusted third-party service
                providers who assist us in operating our website, processing
                payments, delivering orders, and conducting business operations.
              </p>
              <p className="font-poppins text-dark-grey text-18 font-500">
                <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
                  2. Business Transfers:
                </h3>{" "}
                In the event of a merger, acquisition, or sale of assets, your
                information may be transferred as part of the transaction. We
                will notify you via email or prominent notice on our website if
                such a change occurs.
              </p>
              <p className="font-poppins text-dark-grey text-18 font-500">
                <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
                  3. Legal Requirements:
                </h3>{" "}
                We may disclose your information if required to comply with
                applicable laws, regulations, legal processes, or government
                requests.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-20">
              <span className="font-poppins text-main-color text-22 font-700 tracking-1">
                Data Security:
              </span>
              <p className="font-poppins text-dark-grey text-18 font-500">
                We take reasonable measures to protect your information from
                unauthorized access, use, or disclosure. Our website is secured
                with SSL encryption, and we implement industry-standard security
                practices to safeguard your data.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-20">
              <span className="font-poppins text-main-color text-22 font-700 tracking-1">
                Your Choices and Rights:
              </span>
              <p className="font-poppins text-dark-grey text-18 font-500">
                <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
                  1. Account Management:
                </h3>{" "}
                You can review and update your account information,
                communication preferences, and marketing subscriptions by
                logging into your ModaZen account.
              </p>
              <p className="font-poppins text-dark-grey text-18 font-500">
                <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
                  2. Cookies:
                </h3>{" "}
                You can manage cookies and tracking technologies through your
                browser settings. However, disabling cookies may affect certain
                features and functionality of our website.
              </p>
              <p className="font-poppins text-dark-grey text-18 font-500">
                <h3 className="font-poppins text-main-color text-18 font-600 mb-15">
                  3. Data Access and Deletion:
                </h3>{" "}
                Upon request, we will provide access to your personal
                information and allow you to update or delete it, subject to
                legal and operational requirements.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-20">
              <span className="font-poppins text-main-color text-22 font-700 tracking-1">
                Updates to Privacy Policy:
              </span>
              <p className="font-poppins text-dark-grey text-18 font-500">
                We may update this Privacy Policy periodically to reflect
                changes in our practices or legal requirements. We encourage you
                to review this policy regularly for updates.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-20">
              <span className="font-poppins text-main-color text-22 font-700 tracking-1">
                Contact Us:
              </span>
              <p className="font-poppins text-dark-grey text-18 font-500">
                If you have any questions, concerns, or requests regarding your
                privacy or this Privacy Policy, please contact us at
                modaZen@support.com
              </p>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex justify-center items-center w-full h-auto flex-col mb-100 bg-dark-white gap-20 mt-70">
          <div className="flex justify-center items-center w-80 h-full">
            <span className="font-poppins text-main-color text-22 font-700 tracking-1">
              Privacy Policy
            </span>
          </div>
          <div className="flex w-90 h-auto min-h-400 flex-col p-10 gap-30">
            <div className="flex w-full h-auto flex-col gap-10">
              <p className="font-poppins text-dark-grey text-14 font-500">
                At ModaZen, we are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and protect the
                information you provide to us when using our website or
                services.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-10">
              <span className="font-poppins text-main-color text-16 font-700 tracking-1">
                Information We Collect:
              </span>
              <p className="font-poppins text-dark-grey text-14 font-500">
                <h3 className="font-poppins text-main-color text-14 font-600 mb-15">
                  1. Personal Information:
                </h3>{" "}
                When you create an account, place an order, or contact customer
                support, we may collect personal information such as your name,
                email address, phone number, shipping address, and payment
                details.
              </p>
              <p className="font-poppins text-dark-grey text-14 font-500">
                <h3 className="font-poppins text-main-color text-14 font-600 mb-15">
                  2. Usage Information:
                </h3>{" "}
                We may collect information about your interactions with our
                website, including your browsing history, IP address, device
                information, and cookies.
              </p>
              <p className="font-poppins text-dark-grey text-14 font-500">
                <h3 className="font-poppins text-main-color text-14 font-600 mb-15">
                  3. Communications:
                </h3>{" "}
                If you contact us via email, phone, or other communication
                channels, we may retain records of your correspondence for
                customer support and training purposes.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-10">
              <span className="font-poppins text-main-color text-16 font-700 tracking-1">
                How We Use Your Information:
              </span>
              <p className="font-poppins text-dark-grey text-14 font-500">
                <h3 className="font-poppins text-main-color text-14 font-600 mb-15">
                  1. Order Processing:
                </h3>{" "}
                We use your personal information to process orders, deliver
                products, and provide customer support related to your
                purchases.
              </p>
              <p className="font-poppins text-dark-grey text-14 font-500">
                <h3 className="font-poppins text-main-color text-14 font-600 mb-15">
                  2. Account Management:
                </h3>{" "}
                Your information helps us manage and secure your account,
                personalize your experience, and communicate important updates
                and promotions.
              </p>
              <p className="font-poppins text-dark-grey text-14 font-500">
                <h3 className="font-poppins text-main-color text-14 font-600 mb-15">
                  3. Analytics and Improvements:
                </h3>{" "}
                We analyze usage data to improve our website, services, and
                marketing strategies, ensuring a better user experience for our
                customers.
              </p>
              <p className="font-poppins text-dark-grey text-14 font-500">
                <h3 className="font-poppins text-main-color text-14 font-600 mb-15">
                  4. Legal Compliance:
                </h3>{" "}
                We may use and disclose your information as required by law,
                regulation, or legal process, or to protect our rights,
                property, or safety and those of others.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-10">
              <span className="font-poppins text-main-color text-16 font-700 tracking-1">
                Information Sharing and Disclosure:
              </span>
              <p className="font-poppins text-dark-grey text-14 font-500">
                <h3 className="font-poppins text-main-color text-14 font-600 mb-15">
                  1. Third-Party Service Providers:
                </h3>{" "}
                We may share your information with trusted third-party service
                providers who assist us in operating our website, processing
                payments, delivering orders, and conducting business operations.
              </p>
              <p className="font-poppins text-dark-grey text-14 font-500">
                <h3 className="font-poppins text-main-color text-14 font-600 mb-15">
                  2. Business Transfers:
                </h3>{" "}
                In the event of a merger, acquisition, or sale of assets, your
                information may be transferred as part of the transaction. We
                will notify you via email or prominent notice on our website if
                such a change occurs.
              </p>
              <p className="font-poppins text-dark-grey text-14 font-500">
                <h3 className="font-poppins text-main-color text-14 font-600 mb-15">
                  3. Legal Requirements:
                </h3>{" "}
                We may disclose your information if required to comply with
                applicable laws, regulations, legal processes, or government
                requests.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-10">
              <span className="font-poppins text-main-color text-16 font-700 tracking-1">
                Data Security:
              </span>
              <p className="font-poppins text-dark-grey text-14 font-500">
                We take reasonable measures to protect your information from
                unauthorized access, use, or disclosure. Our website is secured
                with SSL encryption, and we implement industry-standard security
                practices to safeguard your data.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-10">
              <span className="font-poppins text-main-color text-16 font-700 tracking-1">
                Your Choices and Rights:
              </span>
              <p className="font-poppins text-dark-grey text-14 font-500">
                <h3 className="font-poppins text-main-color text-14 font-600 mb-15">
                  1. Account Management:
                </h3>{" "}
                You can review and update your account information,
                communication preferences, and marketing subscriptions by
                logging into your ModaZen account.
              </p>
              <p className="font-poppins text-dark-grey text-14 font-500">
                <h3 className="font-poppins text-main-color text-14 font-600 mb-15">
                  2. Cookies:
                </h3>{" "}
                You can manage cookies and tracking technologies through your
                browser settings. However, disabling cookies may affect certain
                features and functionality of our website.
              </p>
              <p className="font-poppins text-dark-grey text-14 font-500">
                <h3 className="font-poppins text-main-color text-14 font-600 mb-15">
                  3. Data Access and Deletion:
                </h3>{" "}
                Upon request, we will provide access to your personal
                information and allow you to update or delete it, subject to
                legal and operational requirements.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-10">
              <span className="font-poppins text-main-color text-16 font-700 tracking-1">
                Updates to Privacy Policy:
              </span>
              <p className="font-poppins text-dark-grey text-14 font-500">
                We may update this Privacy Policy periodically to reflect
                changes in our practices or legal requirements. We encourage you
                to review this policy regularly for updates.
              </p>
            </div>
            <div className="flex w-full h-auto flex-col gap-10">
              <span className="font-poppins text-main-color text-16 font-700 tracking-1">
                Contact Us:
              </span>
              <p className="font-poppins text-dark-grey text-14 font-500">
                If you have any questions, concerns, or requests regarding your
                privacy or this Privacy Policy, please contact us at
                modaZen@support.com
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyPolicy;

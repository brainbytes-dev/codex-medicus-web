import { Metadata } from "next";
import { Stethoscope } from "lucide-react";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | MedSynIQ",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-6">
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gold-dim">
              <Stethoscope className="h-4 w-4 text-gold" />
            </div>
            <span className="font-serif text-lg tracking-wide">MedSynIQ</span>
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl flex-1 px-6 py-16">
        <article className="prose prose-sm max-w-none dark:prose-invert prose-headings:font-serif prose-headings:tracking-tight prose-headings:text-foreground prose-h1:text-3xl prose-h2:mt-10 prose-h2:text-xl prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-gold prose-a:underline-offset-2 prose-strong:text-foreground">
          <h1>Privacy Policy</h1>

          <h2 id="m716">Preamble</h2>
          <p>
            With the following privacy policy, we would like to inform you about the types of your personal data (hereinafter also referred to as &ldquo;data&rdquo;) that we process, for what purposes, and to what extent. This privacy policy applies to all processing of personal data carried out by us, both in the context of providing our services and in particular on our websites, in mobile applications, and within external online presences, such as our social media profiles (hereinafter collectively referred to as &ldquo;Online Offering&rdquo;).
          </p>
          <p>The terms used are not gender-specific.</p>
          <p className="text-muted-foreground">Last updated: March 15, 2026</p>

          <h2>Table of Contents</h2>
          <ul className="index">
            <li><a className="index-link" href="#m716">Preamble</a></li>
            <li><a className="index-link" href="#m3">Controller</a></li>
            <li><a className="index-link" href="#mOverview">Overview of Processing Activities</a></li>
            <li><a className="index-link" href="#m2427">Applicable Legal Bases</a></li>
            <li><a className="index-link" href="#m27">Security Measures</a></li>
            <li><a className="index-link" href="#m25">Transmission of Personal Data</a></li>
            <li><a className="index-link" href="#m24">International Data Transfers</a></li>
            <li><a className="index-link" href="#m12">General Information on Data Storage and Deletion</a></li>
            <li><a className="index-link" href="#m10">Rights of Data Subjects</a></li>
            <li><a className="index-link" href="#m317">Business Services</a></li>
            <li><a className="index-link" href="#m326">Payment Procedures</a></li>
            <li><a className="index-link" href="#m225">Provision of the Online Offering and Web Hosting</a></li>
            <li><a className="index-link" href="#m134">Use of Cookies</a></li>
            <li><a className="index-link" href="#m367">Registration, Login, and User Account</a></li>
            <li><a className="index-link" href="#m104">Blogs and Publication Media</a></li>
            <li><a className="index-link" href="#m182">Contact and Inquiry Management</a></li>
            <li><a className="index-link" href="#m17">Newsletter and Electronic Notifications</a></li>
            <li><a className="index-link" href="#m638">Promotional Communication via Email, Mail, Fax, or Telephone</a></li>
            <li><a className="index-link" href="#m263">Web Analytics, Monitoring, and Optimization</a></li>
            <li><a className="index-link" href="#m264">Online Marketing</a></li>
            <li><a className="index-link" href="#m135">Affiliate Programs and Affiliate Links</a></li>
            <li><a className="index-link" href="#m299">Customer Reviews and Rating Procedures</a></li>
            <li><a className="index-link" href="#m136">Presences in Social Networks (Social Media)</a></li>
            <li><a className="index-link" href="#m328">Plugins and Embedded Functions and Content</a></li>
            <li><a className="index-link" href="#m15">Changes and Updates</a></li>
            <li><a className="index-link" href="#m42">Definitions</a></li>
          </ul>

          <h2 id="m3">Controller</h2>
          <p>
            ProFlow Labs AI (HR Online Consulting LLC, doing business as ProFlow Labs AI)
            <br />
            550 Kings Mountain, Kings Mountain, NC 28086
          </p>
          <p>Authorized representatives: Henrik R&uuml;he</p>
          <p>
            Email address:{" "}
            <a href="mailto:legal@proflowlabsai.com">legal@proflowlabsai.com</a>
          </p>
          <p>
            Imprint:{" "}
            <a href="https://medsyniq.com/imprint" target="_blank" rel="noopener noreferrer">
              https://medsyniq.com/imprint
            </a>
          </p>

          <h2 id="mOverview">Overview of Processing Activities</h2>
          <p>
            The following overview summarizes the types of data processed and the purposes of their processing and refers to the data subjects.
          </p>

          <h3>Types of Data Processed</h3>
          <ul>
            <li>Inventory data.</li>
            <li>Payment data.</li>
            <li>Contact data.</li>
            <li>Content data.</li>
            <li>Contract data.</li>
            <li>Usage data.</li>
            <li>Meta, communication, and procedural data.</li>
            <li>Log data.</li>
          </ul>

          <h3>Categories of Data Subjects</h3>
          <ul>
            <li>Service recipients and clients.</li>
            <li>Prospective customers.</li>
            <li>Communication partners.</li>
            <li>Users.</li>
            <li>Business and contractual partners.</li>
          </ul>

          <h3>Purposes of Processing</h3>
          <ul>
            <li>Provision of contractual services and fulfillment of contractual obligations.</li>
            <li>Communication.</li>
            <li>Security measures.</li>
            <li>Direct marketing.</li>
            <li>Reach measurement.</li>
            <li>Tracking.</li>
            <li>Office and organizational procedures.</li>
            <li>Remarketing.</li>
            <li>Conversion measurement.</li>
            <li>Audience building.</li>
            <li>Affiliate tracking.</li>
            <li>Organizational and administrative procedures.</li>
            <li>Feedback.</li>
            <li>Marketing.</li>
            <li>Profiles with user-related information.</li>
            <li>Provision of our online offering and user-friendliness.</li>
            <li>Information technology infrastructure.</li>
            <li>Public relations.</li>
            <li>Sales promotion.</li>
            <li>Business processes and business management procedures.</li>
          </ul>

          <h2 id="m2427">Applicable Legal Bases</h2>
          <p>
            <strong>Applicable legal bases under the Swiss Data Protection Act: </strong>If you are located in Switzerland, we process your data on the basis of the Federal Act on Data Protection (referred to as the &ldquo;Swiss DPA&rdquo;). Unlike the GDPR, for example, the Swiss DPA does not generally require a legal basis for processing personal data to be stated, and the processing of personal data is carried out in good faith, lawfully, and proportionately (Art. 6 para. 1 and 2 of the Swiss DPA). Furthermore, personal data is only collected by us for a specific purpose that is recognizable to the data subject and is only processed in a manner compatible with that purpose (Art. 6 para. 3 of the Swiss DPA).
          </p>

          <h2 id="m27">Security Measures</h2>
          <p>
            We take appropriate technical and organizational measures in accordance with legal requirements, taking into account the state of the art, the costs of implementation, and the nature, scope, circumstances, and purposes of processing, as well as the varying likelihood and severity of the threat to the rights and freedoms of natural persons, to ensure a level of protection appropriate to the risk.
          </p>
          <p>
            The measures include, in particular, ensuring the confidentiality, integrity, and availability of data by controlling physical and electronic access to data, as well as access, input, disclosure, ensuring availability, and separation of data. We have also established procedures to ensure the exercise of data subject rights, the deletion of data, and responses to data threats. Furthermore, we take the protection of personal data into account from the development or selection of hardware, software, and procedures, in accordance with the principle of data protection by design and by default.
          </p>
          <p>
            IP address truncation: Where IP addresses are processed by us or by the service providers and technologies we use and the processing of a full IP address is not necessary, the IP address is truncated (also referred to as &ldquo;IP masking&rdquo;). The last two digits or the last part of the IP address after a period are removed or replaced by placeholders. The purpose of truncating the IP address is to prevent or substantially hinder the identification of a person by their IP address.
          </p>
          <p>
            Securing online connections through TLS/SSL encryption technology (HTTPS): To protect the data of users transmitted through our online services from unauthorized access, we use TLS/SSL encryption technology. Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are the cornerstones of secure data transmission on the internet. These technologies encrypt the information transmitted between the website or app and the user&apos;s browser (or between two servers), thereby protecting the data from unauthorized access. TLS, as the more advanced and secure version of SSL, ensures that all data transmissions meet the highest security standards. When a website is secured by an SSL/TLS certificate, this is indicated by the display of HTTPS in the URL. This serves as an indicator to users that their data is transmitted securely and in encrypted form.
          </p>

          <h2 id="m25">Transmission of Personal Data</h2>
          <p>
            In the course of our processing of personal data, it may happen that the data is transmitted to or disclosed to other entities, companies, legally independent organizational units, or persons. The recipients of this data may include, for example, service providers entrusted with IT tasks or providers of services and content integrated into a website. In such cases, we comply with the legal requirements and in particular conclude appropriate contracts or agreements that serve to protect your data with the recipients of your data.
          </p>

          <h2 id="m24">International Data Transfers</h2>
          <p>
            Disclosure of personal data abroad: In accordance with the Swiss DPA, we only disclose personal data abroad if an adequate level of protection for the data subjects is ensured (Art. 16 Swiss DPA). If the Federal Council has not determined an adequate level of protection (list:{" "}
            <a href="https://www.bj.admin.ch/bj/de/home/staat/datenschutz/internationales/anerkennung-staaten.html" target="_blank" rel="noopener noreferrer">
              https://www.bj.admin.ch/bj/de/home/staat/datenschutz/internationales/anerkennung-staaten.html
            </a>
            ), we take alternative security measures.
          </p>
          <p>
            For data transfers to the USA, we primarily rely on the Data Privacy Framework (DPF), which was recognized as a secure legal framework by an adequacy decision of Switzerland on September 15, 2024. In addition, we have concluded Standard Contractual Clauses with the respective providers, which have been approved by the Federal Data Protection and Information Commissioner (FDPIC) and establish contractual obligations to protect your data.
          </p>
          <p>
            This dual safeguard ensures comprehensive protection of your data: The DPF forms the primary level of protection, while the Standard Contractual Clauses serve as additional security. Should changes occur within the DPF framework, the Standard Contractual Clauses serve as a reliable fallback option. In this way, we ensure that your data always remains adequately protected, even in the event of political or legal changes.
          </p>
          <p>
            For individual service providers, we inform you whether they are certified under the DPF and whether Standard Contractual Clauses are in place. The list of certified companies and further information about the DPF can be found on the website of the U.S. Department of Commerce at{" "}
            <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer">
              https://www.dataprivacyframework.gov/
            </a>{" "}
            (in English).
          </p>
          <p>
            For data transfers to other third countries, corresponding security measures apply, including international treaties, specific guarantees, Standard Contractual Clauses approved by the FDPIC, or internal corporate data protection regulations previously recognized by the FDPIC or a competent data protection authority of another country.
          </p>

          <h2 id="m12">General Information on Data Storage and Deletion</h2>
          <p>
            We delete personal data that we process in accordance with legal provisions as soon as the underlying consents are revoked or there are no further legal bases for processing. This applies to cases in which the original processing purpose ceases to apply or the data is no longer needed. Exceptions to this rule exist if legal obligations or special interests require longer retention or archiving of the data.
          </p>
          <p>
            In particular, data that must be retained for commercial or tax law reasons, or whose storage is necessary for legal prosecution or for the protection of the rights of other natural or legal persons, must be archived accordingly.
          </p>
          <p>
            Our privacy notices contain additional information on the retention and deletion of data that applies specifically to certain processing operations.
          </p>
          <p>
            Where there are multiple entries for the retention period or deletion deadlines for a given datum, the longest period shall always prevail. Data that is no longer required for the originally intended purpose but is retained due to legal requirements or other reasons will be processed exclusively for the reasons justifying its retention.
          </p>
          <p>
            Retention and deletion of data: The following general periods apply to the retention and archiving under Swiss law:
          </p>
          <ul>
            <li>
              10 years &ndash; Retention period for books and records, annual financial statements, inventories, management reports, opening balance sheets, accounting vouchers and invoices, as well as all necessary work instructions and other organizational documents (Art. 958f of the Swiss Code of Obligations (CO)).
            </li>
            <li>
              10 years &ndash; Data necessary for consideration of potential claims for damages or similar contractual claims and rights, as well as for processing related inquiries, based on past business experience and standard industry practices, are stored for the statutory limitation period of ten years unless a shorter period of five years applies, which is relevant in certain cases (Art. 127, 130 CO). Claims for rent, lease, and capital interest, as well as other periodic payments, for the supply of food, for board and lodging expenses, and for tradesmen&apos;s work, retail sale of goods, medical care, professional work by lawyers, legal agents, procurators, and notaries, as well as from the employment relationship of employees, are subject to a limitation period of five years (Art. 128 CO).
            </li>
          </ul>
          <p>
            Commencement of the period at year-end: Where a period does not expressly commence on a specific date and is at least one year, it shall automatically begin at the end of the calendar year in which the event triggering the period occurred. In the case of ongoing contractual relationships in which data is stored, the event triggering the period is the date on which the termination or other termination of the legal relationship takes effect.
          </p>

          <h2 id="m10">Rights of Data Subjects</h2>
          <p>
            Rights of data subjects under the GDPR: As a data subject, you are entitled to various rights under the GDPR, which arise in particular from Art. 15 to 21 GDPR:
          </p>
          <ul>
            <li>
              <strong>
                Right to object: You have the right to object at any time, on grounds relating to your particular situation, to the processing of personal data concerning you which is based on Art. 6(1)(e) or (f) GDPR; this also applies to profiling based on those provisions. Where personal data concerning you is processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for such marketing; this also applies to profiling insofar as it is related to such direct marketing.
              </strong>
            </li>
            <li>
              <strong>Right to withdraw consent:</strong> You have the right to withdraw consent at any time.
            </li>
            <li>
              <strong>Right of access:</strong> You have the right to obtain confirmation as to whether data concerning you is being processed and to access such data, as well as further information and a copy of the data in accordance with legal requirements.
            </li>
            <li>
              <strong>Right to rectification:</strong> You have the right, in accordance with legal requirements, to request the completion of data concerning you or the rectification of inaccurate data concerning you.
            </li>
            <li>
              <strong>Right to erasure and restriction of processing:</strong> You have the right, in accordance with legal requirements, to request that data concerning you be deleted without undue delay, or alternatively, to request restriction of the processing of the data in accordance with legal requirements.
            </li>
            <li>
              <strong>Right to data portability:</strong> You have the right to receive data concerning you, which you have provided to us, in a structured, commonly used, and machine-readable format in accordance with legal requirements, or to request its transmission to another controller.
            </li>
            <li>
              <strong>Right to lodge a complaint with a supervisory authority:</strong> Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a supervisory authority, in particular in the Member State of your habitual residence, your place of work, or the place of the alleged infringement, if you consider that the processing of personal data concerning you infringes the provisions of the GDPR.
            </li>
          </ul>

          <p>Rights of data subjects under the Swiss DPA:</p>
          <p>
            As a data subject, you are entitled to the following rights under the Swiss DPA:
          </p>
          <ul>
            <li>
              <strong>Right of access: </strong>You have the right to obtain confirmation as to whether personal data concerning you is being processed and to receive the information necessary for you to exercise your rights under this law and to ensure transparent data processing.
            </li>
            <li>
              <strong>Right to data disclosure or transfer: </strong>You have the right to request the disclosure of your personal data that you have provided to us in a commonly used electronic format.
            </li>
            <li>
              <strong>Right to rectification:</strong> You have the right to request the rectification of inaccurate personal data concerning you.
            </li>
            <li>
              <strong>Right to object, erasure, and destruction: </strong>You have the right to object to the processing of your data and to request that the personal data concerning you be deleted or destroyed.
            </li>
          </ul>

          <h2 id="m317">Business Services</h2>
          <p>
            We process personal data of our contractual and business partners, such as customers, clients, prospective customers, suppliers, and other cooperation partners (collectively referred to as &ldquo;contractual partners&rdquo;), for the initiation, execution, and administration of contractual relationships and comparable legal relationships. This also includes pre-contractual measures taken upon request, as well as communication in connection with the respective contractual relationship.
          </p>
          <p>
            The processing serves in particular the fulfillment of our primary and secondary contractual obligations. These include the provision of agreed services, any update and information obligations, the handling of warranty and other performance disruptions, the processing of withdrawals, terminations of ongoing contractual obligations, reversals, refunds, and the handling of other contract-related declarations and inquiries. This covers both one-time contracts and ongoing contractual relationships.
          </p>
          <p>
            The data processed includes, in particular, inventory data such as name, address, and, where applicable, company name, contact data such as email address and telephone number, contract and service data such as the subject matter of the contract, contract duration, order or transaction number, usage and service data, payment and billing data, and communication content and histories. Where necessary, we also process data disclosed or transmitted to us in the course of carrying out an assignment.
          </p>
          <p>
            Furthermore, we process the data to safeguard our rights and to fulfill legal obligations. This includes, in particular, commercial and tax law retention obligations, documentation obligations, and, where applicable, obligations to provide evidence and accountability. In addition, processing takes place on the basis of our legitimate interests in proper business management, internal administration, risk management, and IT security, as well as the protection of our business operations and our contractual partners against misuse, threats to data, secrets, and other legal interests. This may also include the involvement of external service providers such as IT and telecommunications providers, transport and logistics companies, payment service providers, banks, tax and legal advisors, or other agents, insofar as this is necessary for contract performance or to fulfill legal obligations.
          </p>
          <p>
            Personal data is only disclosed to third parties insofar as this is necessary for contract performance, the execution of pre-contractual measures, the safeguarding of legitimate interests, or the fulfillment of legal obligations. We provide separate information about any further processing, in particular for marketing purposes, within the scope of this privacy policy.
          </p>
          <p>
            We communicate to contractual partners in the course of data collection which data is required in each individual case, for example in online forms through corresponding labeling or in personal contact.
          </p>
          <p>
            The data is deleted as soon as it is no longer required for the aforementioned purposes and no legal retention obligations apply. Legal retention periods, particularly under commercial and tax law, may require longer storage. Data transmitted in the context of a specific assignment is deleted upon completion of the assignment and expiry of any applicable retention periods, provided there are no further legal or contractual obligations to store it.
          </p>
          <p>
            The legal basis for processing is Art. 6(1)(b) GDPR for the execution of pre-contractual measures and the fulfillment of the respective contractual relationship, as well as Art. 6(1)(c) GDPR for the fulfillment of legal obligations. Where the processing is based on legitimate interests, it is carried out on the basis of Art. 6(1)(f) GDPR. Where the processing is based on Art. 6(1)(f) GDPR, it serves to safeguard our legitimate interests in proper and efficient business organization, internal administration and documentation of business transactions, the enforcement and defense of legal claims, the assurance of IT and data security, the prevention of misuse and fraud, as well as the economic management and further development of our business operations. These interests exist in particular in ensuring a secure and legally compliant business operation, as well as in safeguarding our entrepreneurial capacity to act.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Inventory data (e.g., full name, residential address, contact information, customer number, etc.); Payment data (e.g., bank details, invoices, payment history); Contact data (e.g., postal and email addresses or telephone numbers); Contract data (e.g., subject matter of contract, duration, customer category); Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features). Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, persons involved).
            </li>
            <li>
              <strong>Data subjects:</strong> Service recipients and clients; Prospective customers. Business and contractual partners.
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Provision of contractual services and fulfillment of contractual obligations; Security measures; Communication; Office and organizational procedures; Organizational and administrative procedures. Business processes and business management procedures.
            </li>
            <li>
              <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section &ldquo;General Information on Data Storage and Deletion.&rdquo;
            </li>
            <li>
              <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR); Legal obligation (Art. 6(1)(c) GDPR). Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>
          <p>
            <strong>Further information on processing operations, procedures, and services:</strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Online shop, order forms, e-commerce, and service fulfillment: </strong>We process the data of our customers to enable them to select, acquire, or order the chosen products, goods, and related services, as well as their payment and delivery or execution. Where required for the execution of an order, we engage service providers, in particular postal, shipping, and delivery companies, to carry out the delivery or execution on behalf of our customers. For the processing of payment transactions, we use the services of banks and payment service providers. The required information is identified as such in the context of the ordering or comparable acquisition process and includes the information needed for delivery, provisioning, and billing, as well as contact information for any follow-up communication; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR).
            </li>
            <li>
              <strong>Agency services: </strong>We process the data of our customers in the context of our contractual services, which may include, for example, conceptual and strategic consulting, campaign planning, software and design development/consulting or maintenance, implementation of campaigns and processes, handling, server administration, data analysis/consulting services, and training services; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR).
            </li>
            <li>
              <strong>Project and development services: </strong>We process the data of our customers and clients (hereinafter uniformly referred to as &ldquo;customers&rdquo;) to enable them to select, acquire, or commission the chosen services or works, as well as related activities, and their payment and provisioning, execution, or delivery.
              <br />
              <br />
              The required information is identified as such in the context of the assignment, order, or comparable contract conclusion and includes the information needed for service provision and billing, as well as contact information for any follow-up communication. Insofar as we gain access to information of end customers, employees, or other persons, we process it in accordance with legal and contractual requirements; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR).
            </li>
            <li>
              <strong>Provision of software and platform services: </strong>We process the data of our users, registered users, and any test users (hereinafter uniformly referred to as &ldquo;users&rdquo;) to fulfill our contractual obligations to them and on the basis of legitimate interests to ensure the security of our offering and to further develop it. The required information is identified as such in the context of the assignment, order, or comparable contract conclusion and includes the information needed for service provision and billing, as well as contact information for any follow-up communication; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR).
            </li>
          </ul>

          <h2 id="m326">Payment Procedures</h2>
          <p>
            In the context of contractual and other legal relationships, due to legal obligations, or otherwise on the basis of our legitimate interests, we offer data subjects efficient and secure payment options and use banks, credit institutions, and other service providers for this purpose (collectively &ldquo;payment service providers&rdquo;). Payment transactions are conducted exclusively via encrypted connections in accordance with the state of the art, so that the data entered is protected from unauthorized access during transmission.
          </p>
          <p>
            The data processed by the payment service providers includes inventory data, such as name and address, bank data, such as account numbers or credit card numbers, passwords, TANs, and checksums, as well as contract, sum, and recipient-related information. This information is necessary to carry out the transactions. However, the data entered is only processed and stored by the payment service providers. This means that we do not receive any account or credit card-related information, but only information confirming or denying the payment. Under certain circumstances, the data may be transmitted by the payment service providers to credit agencies. This transmission is intended for identity and creditworthiness checks. In this regard, we refer to the terms and conditions and the privacy notices of the payment service providers.
          </p>
          <p>
            The terms and conditions and privacy notices of the respective payment service providers, which are accessible within the respective websites or transaction applications, apply to payment transactions. We also refer to these for further information and the exercise of rights of withdrawal, access, and other data subject rights.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Inventory data (e.g., full name, residential address, contact information, customer number, etc.); Payment data (e.g., bank details, invoices, payment history); Contract data (e.g., subject matter of contract, duration, customer category); Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features); Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, persons involved). Contact data (e.g., postal and email addresses or telephone numbers).
            </li>
            <li>
              <strong>Data subjects:</strong> Service recipients and clients; Business and contractual partners. Prospective customers.
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Provision of contractual services and fulfillment of contractual obligations. Business processes and business management procedures.
            </li>
            <li>
              <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section &ldquo;General Information on Data Storage and Deletion.&rdquo;
            </li>
            <li>
              <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR). Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>
          <p>
            <strong>Further information on processing operations, procedures, and services:</strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Apple Pay: </strong>Payment services (technical integration of online payment methods); <strong>Service provider:</strong> Apple Inc., Infinite Loop, Cupertino, CA 95014, USA; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR); <strong>Website:</strong>{" "}
              <a href="https://www.apple.com/apple-pay/" target="_blank" rel="noopener noreferrer">
                https://www.apple.com/apple-pay/
              </a>
              . <strong>Privacy policy:</strong>{" "}
              <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer">
                https://www.apple.com/legal/privacy/en-ww/
              </a>
              .
            </li>
            <li>
              <strong>Google Pay: </strong>Payment services (technical integration of online payment methods); <strong>Service provider:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR); <strong>Website:</strong>{" "}
              <a href="https://pay.google.com/intl/en/about/" target="_blank" rel="noopener noreferrer">
                https://pay.google.com/intl/en/about/
              </a>
              . <strong>Privacy policy:</strong>{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy
              </a>
              .
            </li>
            <li>
              <strong>PayPal: </strong>Payment services (technical integration of online payment methods) (e.g., PayPal, PayPal Plus, Braintree); <strong>Service provider:</strong> PayPal (Europe) S.&agrave; r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR); <strong>Website:</strong>{" "}
              <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
                https://www.paypal.com
              </a>
              . <strong>Privacy policy:</strong>{" "}
              <a href="https://www.paypal.com/legalhub/paypal/privacy-full" target="_blank" rel="noopener noreferrer">
                https://www.paypal.com/legalhub/paypal/privacy-full
              </a>
              .
            </li>
            <li>
              <strong>Stripe: </strong>Payment services (technical integration of online payment methods); <strong>Service provider:</strong> Stripe, Inc., 510 Townsend Street, San Francisco, CA 94103, USA; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR); <strong>Website:</strong>{" "}
              <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">
                https://stripe.com
              </a>
              ; <strong>Privacy policy:</strong>{" "}
              <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
                https://stripe.com/privacy
              </a>
              . <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), Data Privacy Framework (DPF).
            </li>
          </ul>

          <h2 id="m225">Provision of the Online Offering and Web Hosting</h2>
          <p>
            We process user data to provide our online services. For this purpose, we process the user&apos;s IP address, which is necessary to deliver the content and functions of our online services to the user&apos;s browser or device.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features); Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, persons involved). Log data (e.g., log files concerning logins or data retrieval or access times).
            </li>
            <li>
              <strong>Data subjects:</strong> Users (e.g., website visitors, users of online services).
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Provision of our online offering and user-friendliness; Information technology infrastructure (operation and provision of information systems and technical devices (computers, servers, etc.)). Security measures.
            </li>
            <li>
              <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section &ldquo;General Information on Data Storage and Deletion.&rdquo;
            </li>
            <li>
              <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>
          <p>
            <strong>Further information on processing operations, procedures, and services:</strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Provision of online offering on rented storage space: </strong>For the provision of our online offering, we use storage space, computing capacity, and software that we rent or otherwise obtain from a corresponding server provider (also called a &ldquo;web host&rdquo;); <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
            <li>
              <strong>Collection of access data and log files: </strong>Access to our online offering is logged in the form of so-called &ldquo;server log files.&rdquo; Server log files may include the address and name of the web pages and files accessed, the date and time of access, the volume of data transferred, notification of successful access, browser type and version, the user&apos;s operating system, referrer URL (the previously visited page), and, as a rule, IP addresses and the requesting provider. The server log files may be used for security purposes, e.g., to prevent server overload (especially in the case of abusive attacks, so-called DDoS attacks), and to ensure the utilization and stability of the servers; <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR). <strong>Deletion of data:</strong> Log file information is stored for a maximum of 30 days and then deleted or anonymized. Data whose further retention is necessary for evidentiary purposes is exempt from deletion until final resolution of the respective incident.
            </li>
            <li>
              <strong>Content Delivery Network: </strong>We use a &ldquo;Content Delivery Network&rdquo; (CDN). A CDN is a service that enables the content of an online offering, in particular large media files such as graphics or program scripts, to be delivered more quickly and securely using regionally distributed servers connected via the internet; <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>

          <h2 id="m134">Use of Cookies</h2>
          <p>
            The term &ldquo;cookies&rdquo; refers to functions that store and read information on users&apos; devices. Cookies may also be used for various purposes, such as the functionality, security, and convenience of online offerings, as well as the analysis of visitor traffic. We use cookies in accordance with legal requirements. To do so, we obtain the consent of users in advance where required. If consent is not necessary, we rely on our legitimate interests. This applies when the storage and reading of information is essential to provide expressly requested content and functions. This includes, for example, the storage of settings and ensuring the functionality and security of our online offering. Consent can be withdrawn at any time. We clearly inform users of the scope and which cookies are used.
          </p>
          <p>
            <strong>Notes on data protection legal bases: </strong>Whether we process personal data using cookies depends on consent. If consent is given, it serves as the legal basis. Without consent, we rely on our legitimate interests, which are explained above in this section and in the context of the respective services and procedures.
          </p>
          <p>
            <strong>Storage duration: </strong>With regard to storage duration, the following types of cookies are distinguished:
          </p>
          <ul>
            <li>
              <strong>Temporary cookies (also: session cookies):</strong> Temporary cookies are deleted at the latest after a user has left an online offering and closed their device (e.g., browser or mobile application).
            </li>
            <li>
              <strong>Permanent cookies:</strong> Permanent cookies remain stored even after the device is closed. For example, the login status can be saved and preferred content can be displayed directly when a user revisits a website. Likewise, user data collected with the help of cookies can be used for reach measurement. Unless we provide users with explicit information about the type and storage duration of cookies (e.g., when obtaining consent), users should assume that cookies are permanent and the storage duration can be up to two years.
            </li>
          </ul>
          <p>
            <strong>General information on withdrawal and objection (opt-out): </strong>Users can withdraw their consent at any time and also declare an objection to processing in accordance with legal requirements, including through the privacy settings of their browser.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, persons involved).
            </li>
            <li>
              <strong>Data subjects:</strong> Users (e.g., website visitors, users of online services).
            </li>
            <li>
              <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR). Consent (Art. 6(1)(a) GDPR).
            </li>
          </ul>
          <p>
            <strong>Further information on processing operations, procedures, and services:</strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Processing of cookie data based on consent: </strong>We use a consent management solution in which the consent of users to the use of cookies or to the procedures and providers mentioned in the consent management solution is obtained. This procedure serves to obtain, log, manage, and withdraw consent, particularly regarding the use of cookies and comparable technologies used for storing, reading, and processing information on users&apos; devices. As part of this procedure, user consent is obtained for the use of cookies and the associated processing of information, including the specific processing and providers mentioned in the consent management procedure. Users also have the option to manage and withdraw their consents. Consent declarations are stored to avoid re-prompting and to be able to provide proof of consent in accordance with legal requirements. Storage occurs server-side and/or in a cookie (so-called opt-in cookie) or using comparable technologies to associate consent with a specific user or their device. Unless specific information about the providers of consent management services is available, the following general information applies: The consent is stored for a period of up to two years. A pseudonymous user identifier is created and stored together with the time of consent, information about the scope of consent (e.g., which categories of cookies and/or service providers are concerned), and information about the browser, system, and device used; <strong>Legal bases:</strong> Consent (Art. 6(1)(a) GDPR).
            </li>
          </ul>

          <h2 id="m367">Registration, Login, and User Account</h2>
          <p>
            Users may create a user account. As part of the registration process, users are informed of the required mandatory information, which is processed for the purpose of providing the user account on the basis of contractual obligation fulfillment. The data processed includes, in particular, login information (username, password, and an email address).
          </p>
          <p>
            In the context of using our registration and login functions and the use of the user account, we store the IP address and the timestamp of each user action. Storage is based on our legitimate interests as well as those of the users in protection against misuse and other unauthorized use. This data is generally not disclosed to third parties unless it is necessary for the pursuit of our claims or there is a legal obligation to do so.
          </p>
          <p>
            Users may be informed by email about events relevant to their user account, such as technical changes.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Inventory data (e.g., full name, residential address, contact information, customer number, etc.); Contact data (e.g., postal and email addresses or telephone numbers); Content data (e.g., textual or visual messages and posts, and information relating to them, such as information about authorship or the time of creation); Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features). Log data (e.g., log files concerning logins or data retrieval or access times).
            </li>
            <li>
              <strong>Data subjects:</strong> Users (e.g., website visitors, users of online services).
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Provision of contractual services and fulfillment of contractual obligations; Security measures; Organizational and administrative procedures. Provision of our online offering and user-friendliness.
            </li>
            <li>
              <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section &ldquo;General Information on Data Storage and Deletion.&rdquo; Deletion upon termination.
            </li>
            <li>
              <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR). Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>
          <p>
            <strong>Further information on processing operations, procedures, and services:</strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Registration with pseudonyms: </strong>Users may use pseudonyms as usernames instead of their real names; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR).
            </li>
            <li>
              <strong>User profiles are not public: </strong>User profiles are not publicly visible or accessible.
            </li>
            <li>
              <strong>Two-factor authentication: </strong>Two-factor authentication provides an additional layer of security for your user account and ensures that only you can access your account, even if someone else knows your password. For this purpose, you must perform an additional authentication step in addition to your password (e.g., enter a code sent to a mobile device). We will inform you about the procedure we use; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR).
            </li>
            <li>
              <strong>Deletion of data upon termination: </strong>When users have terminated their user account, their data related to the user account will be deleted, subject to legal permission, obligation, or consent of the users; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR).
            </li>
            <li>
              <strong>No obligation to retain data: </strong>It is the users&apos; responsibility to secure their data before the end of the contract in the event of termination. We are entitled to irretrievably delete all data of the user stored during the term of the contract; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR).
            </li>
          </ul>

          <h2 id="m104">Blogs and Publication Media</h2>
          <p>
            We use blogs or comparable means of online communication and publication (hereinafter &ldquo;publication medium&rdquo;). The data of readers is processed for the purposes of the publication medium only to the extent necessary for its presentation and communication between authors and readers, or for security reasons. For further information, we refer to the information on the processing of visitors to our publication medium within the scope of this privacy policy.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Inventory data (e.g., full name, residential address, contact information, customer number, etc.); Contact data (e.g., postal and email addresses or telephone numbers); Content data (e.g., textual or visual messages and posts, and information relating to them, such as information about authorship or the time of creation); Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features). Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, persons involved).
            </li>
            <li>
              <strong>Data subjects:</strong> Users (e.g., website visitors, users of online services).
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Feedback (e.g., collecting feedback via online forms); Provision of our online offering and user-friendliness; Security measures. Organizational and administrative procedures.
            </li>
            <li>
              <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section &ldquo;General Information on Data Storage and Deletion.&rdquo;
            </li>
            <li>
              <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>
          <p>
            <strong>Further information on processing operations, procedures, and services:</strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Comments and posts: </strong>When users leave comments or other posts, their IP addresses may be stored on the basis of our legitimate interests. This is done for our security, in case someone leaves unlawful content in comments and posts (insults, prohibited political propaganda, etc.). In such a case, we ourselves may be held liable for the comment or post and are therefore interested in the identity of the author.
              <br />
              <br />
              Furthermore, we reserve the right, on the basis of our legitimate interests, to process users&apos; information for the purpose of spam detection.
              <br />
              <br />
              On the same legal basis, we reserve the right, in the case of surveys, to store users&apos; IP addresses for the duration thereof and to use cookies to avoid multiple voting.
              <br />
              <br />
              The personal information provided in the context of comments and posts, any contact and website information, as well as the content information, is stored by us permanently until the user objects; <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>

          <h2 id="m182">Contact and Inquiry Management</h2>
          <p>
            When contacting us (e.g., by mail, contact form, email, telephone, or via social media) as well as in the context of existing user and business relationships, the information of the inquiring persons is processed insofar as this is necessary to respond to the contact inquiries and any requested measures.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Contact data (e.g., postal and email addresses or telephone numbers); Content data (e.g., textual or visual messages and posts, and information relating to them, such as information about authorship or the time of creation). Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, persons involved).
            </li>
            <li>
              <strong>Data subjects:</strong> Communication partners.
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Communication; Organizational and administrative procedures; Feedback (e.g., collecting feedback via online forms). Provision of our online offering and user-friendliness.
            </li>
            <li>
              <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section &ldquo;General Information on Data Storage and Deletion.&rdquo;
            </li>
            <li>
              <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR). Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR).
            </li>
          </ul>
          <p>
            <strong>Further information on processing operations, procedures, and services:</strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Contact form: </strong>When contacting us via our contact form, by email, or other communication channels, we process the personal data transmitted to us to respond to and handle the respective inquiry. This generally includes information such as name, contact information, and, where applicable, further information communicated to us that is necessary for appropriate handling. We use this data exclusively for the stated purpose of contact and communication; <strong>Legal bases:</strong> Contract performance and pre-contractual inquiries (Art. 6(1)(b) GDPR), Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>

          <h2 id="m17">Newsletter and Electronic Notifications</h2>
          <p>
            We send newsletters, emails, and other electronic notifications (hereinafter &ldquo;newsletter&rdquo;) exclusively with the consent of the recipients or on a legal basis. If the contents of the newsletter are specifically described in the context of newsletter registration, they are decisive for the user&apos;s consent. Normally, providing your email address is sufficient to sign up for our newsletter. However, to provide you with a personalized service, we may ask for your name for personal addressing in the newsletter or for further information if this is necessary for the purpose of the newsletter.
          </p>
          <p>
            Deletion and restriction of processing: We may store unsubscribed email addresses for up to three years on the basis of our legitimate interests before deleting them, in order to be able to demonstrate previously given consent. The processing of this data is limited to the purpose of potential defense against claims. An individual deletion request is possible at any time, provided that the former existence of consent is confirmed at the same time. In the case of obligations to permanently observe objections, we reserve the right to store the email address solely for this purpose in a blocklist.
          </p>
          <p>
            The logging of the registration process is carried out on the basis of our legitimate interests for the purpose of demonstrating its proper conduct. If we commission a service provider to send emails, this is done on the basis of our legitimate interests in an efficient and secure sending system.
          </p>
          <p>
            <strong>Contents:</strong> Information about us, our services, promotions, and offers.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Inventory data (e.g., full name, residential address, contact information, customer number, etc.); Contact data (e.g., postal and email addresses or telephone numbers); Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, persons involved). Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features).
            </li>
            <li>
              <strong>Data subjects:</strong> Communication partners. Users (e.g., website visitors, users of online services).
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Direct marketing (e.g., by email or postal mail). Provision of contractual services and fulfillment of contractual obligations.
            </li>
            <li>
              <strong>Legal bases:</strong> Consent (Art. 6(1)(a) GDPR).
            </li>
            <li>
              <strong>Right to object (opt-out): </strong>You can cancel the receipt of our newsletter at any time, i.e., withdraw your consent or object to further receipt. You will find a link to cancel the newsletter either at the end of each newsletter, or you may use one of the contact options listed above, preferably email, for this purpose.
            </li>
          </ul>
          <p>
            <strong>Further information on processing operations, procedures, and services:</strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Measurement of open and click rates: </strong>The newsletters contain a so-called &ldquo;web beacon,&rdquo; i.e., a pixel-sized file that is retrieved from our server, or from the server of a sending service provider if we use one, when the newsletter is opened. In the course of this retrieval, technical information such as details about the browser and your system, as well as your IP address and the time of retrieval, are initially collected. This information is used for the technical improvement of our newsletter based on technical data or the target groups and their reading behavior based on their retrieval locations. For detailed information about newsletter tracking metrics, please contact us; <strong>Legal bases:</strong> Consent (Art. 6(1)(a) GDPR).
            </li>
            <li>
              <strong>Prerequisite for using free services: </strong>Consent to receive mailings may be made a prerequisite for using free services (e.g., access to certain content or participation in certain promotions). If users wish to use the free service without subscribing to the newsletter, we ask you to contact us.
            </li>
          </ul>

          <h2 id="m638">Promotional Communication via Email, Mail, Fax, or Telephone</h2>
          <p>
            We process personal data for the purpose of promotional communication, which may take place via various channels, such as email, telephone, mail, or fax, in accordance with legal requirements.
          </p>
          <p>
            Recipients have the right to withdraw consent at any time or to object to promotional communication at any time free of charge via the contact options listed above.
          </p>
          <p>
            After withdrawal or objection, we store the data required to prove the previous authorization for contact or mailing for up to three years after the end of the year of withdrawal or objection on the basis of our legitimate interests. The processing of this data is limited to the purpose of potential defense against claims. On the basis of the legitimate interest in permanently observing the withdrawal or objection of users, we also store the data necessary to avoid renewed contact (e.g., depending on the communication channel, the email address, telephone number, name).
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Inventory data (e.g., full name, residential address, contact information, customer number, etc.); Contact data (e.g., postal and email addresses or telephone numbers). Content data (e.g., textual or visual messages and posts, and information relating to them, such as information about authorship or the time of creation).
            </li>
            <li>
              <strong>Data subjects:</strong> Communication partners.
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Direct marketing (e.g., by email or postal mail); Marketing. Sales promotion.
            </li>
            <li>
              <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section &ldquo;General Information on Data Storage and Deletion.&rdquo;
            </li>
            <li>
              <strong>Legal bases:</strong> Consent (Art. 6(1)(a) GDPR). Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>

          <h2 id="m263">Web Analytics, Monitoring, and Optimization</h2>
          <p>
            Web analytics (also referred to as &ldquo;reach measurement&rdquo;) is used to evaluate the visitor flows of our online offering and may include behavior, interests, or demographic information about visitors, such as age or gender, as pseudonymous values. With the help of reach analysis, we can, for example, recognize at what time our online offering or its functions or content are most frequently used or invite reuse. Likewise, we can identify which areas require optimization.
          </p>
          <p>
            In addition to web analytics, we may also use testing procedures to test and optimize different versions of our online offering or its components, for example.
          </p>
          <p>
            Unless otherwise stated below, profiles, i.e., data aggregated for a usage process, may be created for these purposes and information may be stored in a browser or on a device and then read out. The data collected includes, in particular, websites visited and elements used there, as well as technical information such as the browser used, the computer system used, and information about usage times. If users have consented to the collection of their location data by us or by the providers of the services we use, location data may also be processed.
          </p>
          <p>
            In addition, the IP addresses of users are stored. However, we use an IP masking procedure (i.e., pseudonymization by truncating the IP address) to protect users. In general, no clear-text user data (such as email addresses or names) is stored in the context of web analytics, A/B testing, and optimization, but rather pseudonyms. This means that neither we nor the providers of the software used know the actual identity of the users, but only the information stored in their profiles for the purposes of the respective procedures.
          </p>
          <p>
            Notes on legal bases: Where we ask users for their consent to use third-party providers, the legal basis for data processing is consent. Otherwise, user data is processed on the basis of our legitimate interests (i.e., interest in efficient, economical, and recipient-friendly services). In this context, we would also like to draw your attention to the information on the use of cookies in this privacy policy.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features). Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, persons involved).
            </li>
            <li>
              <strong>Data subjects:</strong> Users (e.g., website visitors, users of online services).
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Reach measurement (e.g., access statistics, recognition of returning visitors); Profiles with user-related information (creation of user profiles); Remarketing. Provision of our online offering and user-friendliness.
            </li>
            <li>
              <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section &ldquo;General Information on Data Storage and Deletion.&rdquo; Cookie storage of up to 2 years (unless otherwise stated, cookies and similar storage methods may be stored on users&apos; devices for a period of two years).
            </li>
            <li>
              <strong>Security measures:</strong> IP masking (pseudonymization of the IP address).
            </li>
            <li>
              <strong>Legal bases:</strong> Consent (Art. 6(1)(a) GDPR). Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>
          <p>
            <strong>Further information on processing operations, procedures, and services:</strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Google Analytics: </strong>We use Google Analytics to measure and analyze the use of our online offering based on a pseudonymous user identification number. This identification number does not contain unique data such as names or email addresses. It is used to associate analytics information with a device to identify what content users accessed within one or more usage sessions, what search terms they used, revisited, or interacted with our online offering. Likewise, the time of use and its duration are stored, as well as the sources of users who refer to our online offering and technical aspects of their devices and browsers.
              <br />
              Pseudonymous profiles of users with information from the use of various devices are created, whereby cookies may be used. Google Analytics does not log or store individual IP addresses for EU users. Analytics does, however, provide coarse geographic location data by deriving the following metadata from IP addresses: city (and the derived latitude and longitude of the city), continent, country, region, subcontinent (and ID-based counterparts). For EU traffic, IP address data is used solely for this derivation of geolocation data before being immediately deleted. It is not logged, is not accessible, and is not used for any further purpose. When Google Analytics collects measurement data, all IP queries are performed on EU-based servers before traffic is forwarded to Analytics servers for processing; <strong>Service provider:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland; <strong>Legal bases:</strong> Consent (Art. 6(1)(a) GDPR); <strong>Website:</strong>{" "}
              <a href="https://marketingplatform.google.com/intl/en/about/analytics/" target="_blank" rel="noopener noreferrer">
                https://marketingplatform.google.com/intl/en/about/analytics/
              </a>
              ; <strong>Security measures:</strong> IP masking (pseudonymization of the IP address); <strong>Privacy policy:</strong>{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy
              </a>
              ; <strong>Data processing agreement:</strong>{" "}
              <a href="https://business.safety.google/adsprocessorterms/" target="_blank" rel="noopener noreferrer">
                https://business.safety.google/adsprocessorterms/
              </a>
              ; <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), Standard Contractual Clauses (
              <a href="https://business.safety.google/adsprocessorterms" target="_blank" rel="noopener noreferrer">
                https://business.safety.google/adsprocessorterms
              </a>
              ), Data Privacy Framework (DPF), Standard Contractual Clauses (
              <a href="https://business.safety.google/adsprocessorterms" target="_blank" rel="noopener noreferrer">
                https://business.safety.google/adsprocessorterms
              </a>
              ); <strong>Right to object (opt-out):</strong> Opt-out plugin:{" "}
              <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer">
                https://tools.google.com/dlpage/gaoptout?hl=en
              </a>
              , Settings for ad display:{" "}
              <a href="https://myadcenter.google.com/personalizationoff" target="_blank" rel="noopener noreferrer">
                https://myadcenter.google.com/personalizationoff
              </a>
              . <strong>Further information:</strong>{" "}
              <a href="https://business.safety.google/adsservices/" target="_blank" rel="noopener noreferrer">
                https://business.safety.google/adsservices/
              </a>{" "}
              (types of processing and data processed).
            </li>
            <li>
              <strong>Google Tag Manager: </strong>We use Google Tag Manager, software by Google that enables us to manage so-called website tags centrally via a user interface. Tags are small code elements on our website that serve to capture and analyze visitor activities. This technology helps us improve our website and the content offered on it. Google Tag Manager itself does not create user profiles, does not store cookies with user profiles, and does not perform any independent analyses. Its function is limited to simplifying and making the integration and management of tools and services that we use on our website more efficient. However, when using Google Tag Manager, the IP address of users is transmitted to Google, which is technically necessary to implement the services we use. Cookies may also be set. However, this data processing only takes place when services are integrated via the Tag Manager. For more detailed information about these services and their data processing, we refer to the further sections of this privacy policy; <strong>Service provider:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland; <strong>Legal bases:</strong> Consent (Art. 6(1)(a) GDPR); <strong>Website:</strong>{" "}
              <a href="https://marketingplatform.google.com" target="_blank" rel="noopener noreferrer">
                https://marketingplatform.google.com
              </a>
              ; <strong>Privacy policy:</strong>{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy
              </a>
              ; <strong>Data processing agreement:</strong>{" "}
              <a href="https://business.safety.google/adsprocessorterms" target="_blank" rel="noopener noreferrer">
                https://business.safety.google/adsprocessorterms
              </a>
              . <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), Standard Contractual Clauses (
              <a href="https://business.safety.google/adsprocessorterms" target="_blank" rel="noopener noreferrer">
                https://business.safety.google/adsprocessorterms
              </a>
              ), Data Privacy Framework (DPF), Standard Contractual Clauses (
              <a href="https://business.safety.google/adsprocessorterms" target="_blank" rel="noopener noreferrer">
                https://business.safety.google/adsprocessorterms
              </a>
              ).
            </li>
            <li>
              <strong>Matomo: </strong>Matomo is software used for web analytics and reach measurement purposes. In the context of using Matomo, cookies are generated and stored on the user&apos;s device. The user data collected in the context of using Matomo is only processed by us and is not shared with third parties. Cookies are stored for a maximum period of 13 months:{" "}
              <a href="https://matomo.org/faq/general/faq_146/" target="_blank" rel="noopener noreferrer">
                https://matomo.org/faq/general/faq_146/
              </a>
              ; <strong>Legal bases:</strong> Consent (Art. 6(1)(a) GDPR). <strong>Deletion of data:</strong> Cookies have a maximum storage period of 13 months.
            </li>
          </ul>

          <h2 id="m264">Online Marketing</h2>
          <p>
            We process personal data for the purpose of online marketing, which may include, in particular, the marketing of advertising space or the display of advertising and other content (collectively referred to as &ldquo;content&rdquo;) based on the potential interests of users, as well as the measurement of their effectiveness.
          </p>
          <p>
            For these purposes, so-called user profiles are created and stored in a file (the so-called &ldquo;cookie&rdquo;) or similar procedures are used, by means of which information relevant to the display of the aforementioned content about the user is stored. This may include, for example, content viewed, websites visited, online networks used, as well as communication partners and technical information such as the browser used, the computer system used, and information about usage times and functions used. If users have consented to the collection of their location data, this may also be processed.
          </p>
          <p>
            In addition, the IP addresses of users are stored. However, we use available IP masking procedures (i.e., pseudonymization by truncating the IP address) to protect users. In general, no clear-text user data (such as email addresses or names) is stored in the online marketing process, but rather pseudonyms. This means that neither we nor the providers of the online marketing procedures know the actual identity of the users, but only the information stored in their profiles.
          </p>
          <p>
            The information in the profiles is generally stored in cookies or by means of similar procedures. These cookies can later generally also be read on other websites that use the same online marketing procedures and analyzed for the purpose of displaying content, supplemented with further data, and stored on the server of the online marketing procedure provider.
          </p>
          <p>
            Exceptionally, it may be possible to associate clear-text data with profiles, primarily when users are, for example, members of a social network whose online marketing procedures we use and the network links the user profiles with the aforementioned information. We ask that users note that they may enter into additional agreements with the providers, for example through consent during registration.
          </p>
          <p>
            We generally only receive access to aggregated information about the success of our advertisements. However, in the context of so-called conversion measurements, we can verify which of our online marketing procedures led to a so-called conversion, i.e., for example, to a contract conclusion with us. Conversion measurement is used solely for the success analysis of our marketing measures.
          </p>
          <p>
            Unless otherwise stated, please assume that cookies used are stored for a period of two years.
          </p>
          <p>
            <strong>Notes on legal bases:</strong> Where we ask users for their consent to use third-party providers, the legal basis for data processing is the permission granted. Otherwise, user data is processed on the basis of our legitimate interests (i.e., interest in efficient, economical, and recipient-friendly services). In this context, we would also like to draw your attention to the information on the use of cookies in this privacy policy.
          </p>
          <p>
            <strong>Notes on withdrawal and objection:</strong>
          </p>
          <p>
            We refer to the privacy notices of the respective providers and the objection options (so-called &ldquo;opt-out&rdquo;) indicated for the providers. If no explicit opt-out option has been provided, you have the option of deactivating cookies in your browser settings. However, this may restrict the functionality of our online offering. We therefore additionally recommend the following opt-out options, which are offered in summary for the respective regions:
          </p>
          <p>
            a) Europe:{" "}
            <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer">
              https://www.youronlinechoices.eu
            </a>
          </p>
          <p>
            b) Canada:{" "}
            <a href="https://youradchoices.ca/" target="_blank" rel="noopener noreferrer">
              https://youradchoices.ca/
            </a>
          </p>
          <p>
            c) USA:{" "}
            <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">
              https://optout.aboutads.info/
            </a>
          </p>
          <p>
            d) Cross-regional:{" "}
            <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">
              https://optout.aboutads.info
            </a>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features). Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, persons involved).
            </li>
            <li>
              <strong>Data subjects:</strong> Users (e.g., website visitors, users of online services).
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Reach measurement (e.g., access statistics, recognition of returning visitors); Tracking (e.g., interest/behavior-based profiling, use of cookies); Audience building; Marketing; Profiles with user-related information (creation of user profiles). Conversion measurement (measurement of the effectiveness of marketing measures).
            </li>
            <li>
              <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section &ldquo;General Information on Data Storage and Deletion.&rdquo; Cookie storage of up to 2 years (unless otherwise stated, cookies and similar storage methods may be stored on users&apos; devices for a period of two years).
            </li>
            <li>
              <strong>Security measures:</strong> IP masking (pseudonymization of the IP address).
            </li>
            <li>
              <strong>Legal bases:</strong> Consent (Art. 6(1)(a) GDPR). Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>
          <p>
            <strong>Further information on processing operations, procedures, and services:</strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Google Ads and conversion measurement: </strong>Online marketing procedure for the purpose of placing content and ads within the advertising network of the service provider (e.g., in search results, in videos, on web pages, etc.) so that they are displayed to users who have a presumed interest in the ads. In addition, we measure the conversion of the ads, i.e., whether users have used them as an occasion to interact with the ads and use the advertised offers (so-called conversions). However, we only receive anonymous information and no personal information about individual users; <strong>Service provider:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland; <strong>Legal bases:</strong> Consent (Art. 6(1)(a) GDPR), Legitimate interests (Art. 6(1)(f) GDPR); <strong>Website:</strong>{" "}
              <a href="https://marketingplatform.google.com" target="_blank" rel="noopener noreferrer">
                https://marketingplatform.google.com
              </a>
              ; <strong>Privacy policy:</strong>{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy
              </a>
              ; <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), Data Privacy Framework (DPF); <strong>Further information:</strong> Types of processing and data processed:{" "}
              <a href="https://business.safety.google/adsservices/" target="_blank" rel="noopener noreferrer">
                https://business.safety.google/adsservices/
              </a>
              . Data processing terms between controllers and Standard Contractual Clauses for third-country data transfers:{" "}
              <a href="https://business.safety.google/adscontrollerterms" target="_blank" rel="noopener noreferrer">
                https://business.safety.google/adscontrollerterms
              </a>
              .
            </li>
            <li>
              <strong>LinkedIn Insight Tag: </strong>Code that is loaded when a user visits our online offering and tracks the user&apos;s behavior and conversions and stores them in a profile (possible use cases: measurement of campaign performance, optimization of ad delivery, building of custom and lookalike audiences); <strong>Service provider:</strong> LinkedIn Ireland Unlimited Company, Wilton Plaza, Dublin 2, Ireland; <strong>Legal bases:</strong> Consent (Art. 6(1)(a) GDPR); <strong>Website:</strong>{" "}
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com
              </a>
              ; <strong>Privacy policy:</strong>{" "}
              <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/legal/privacy-policy
              </a>
              , Cookie policy:{" "}
              <a href="https://www.linkedin.com/legal/cookie_policy" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/legal/cookie_policy
              </a>
              ; <strong>Data processing agreement:</strong>{" "}
              <a href="https://www.linkedin.com/legal/l/dpa" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/legal/l/dpa
              </a>
              ; <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), Standard Contractual Clauses (
              <a href="https://legal.linkedin.com/dpa" target="_blank" rel="noopener noreferrer">
                https://legal.linkedin.com/dpa
              </a>
              ), Data Privacy Framework (DPF), Standard Contractual Clauses (
              <a href="https://legal.linkedin.com/dpa" target="_blank" rel="noopener noreferrer">
                https://legal.linkedin.com/dpa
              </a>
              ). <strong>Right to object (opt-out):</strong>{" "}
              <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
              </a>
              .
            </li>
          </ul>

          <h2 id="m135">Affiliate Programs and Affiliate Links</h2>
          <p>
            We integrate so-called affiliate links or other references (which may include, e.g., search forms, widgets, or discount codes) to the offers and services of third-party providers into our online offering (collectively referred to as &ldquo;affiliate links&rdquo;). When users follow the affiliate links or subsequently take up the offers, we may receive a commission or other benefits from these third-party providers (collectively referred to as &ldquo;commission&rdquo;).
          </p>
          <p>
            In order to track whether users have taken up the offers of an affiliate link used by us, it is necessary for the respective third-party providers to learn that the users have followed an affiliate link used within our online offering. The assignment of affiliate links to the respective business transactions or other actions (e.g., purchases) serves solely the purpose of commission accounting and is canceled as soon as it is no longer required for this purpose.
          </p>
          <p>
            For the purposes of the aforementioned assignment, affiliate links may be supplemented with certain values that are a component of the link or may be stored elsewhere, e.g., in a cookie. The values may include, in particular, the originating website (referrer), the time, an online identifier of the operators of the website on which the affiliate link was located, an online identifier of the respective offer, the type of link used, the type of offer, and an online identifier of the user.
          </p>
          <p>
            <strong>Notes on legal bases:</strong> Where we ask users for their consent to use third-party providers, the legal basis for data processing is consent. Otherwise, user data is processed on the basis of our legitimate interests (i.e., interest in efficient, economical, and recipient-friendly services). In this context, we would also like to draw your attention to the information on the use of cookies in this privacy policy.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Contract data (e.g., subject matter of contract, duration, customer category); Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features). Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, persons involved).
            </li>
            <li>
              <strong>Data subjects:</strong> Prospective customers. Users (e.g., website visitors, users of online services).
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Affiliate tracking.
            </li>
            <li>
              <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section &ldquo;General Information on Data Storage and Deletion.&rdquo;
            </li>
            <li>
              <strong>Legal bases:</strong> Consent (Art. 6(1)(a) GDPR). Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>

          <h2 id="m299">Customer Reviews and Rating Procedures</h2>
          <p>
            We participate in review and rating procedures to evaluate, optimize, and promote our services. When users rate us through the participating rating platforms or procedures or otherwise provide feedback, the general terms and conditions or terms of use and privacy notices of the providers also apply. As a rule, the rating also requires registration with the respective providers.
          </p>
          <p>
            To ensure that the reviewing persons have actually used our services, we transmit, with the consent of the customers, the data necessary for this purpose regarding the customer and the service used to the respective rating platform (including name, email address, and order number or article number). This data is used solely for the verification of the authenticity of the user.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Contract data (e.g., subject matter of contract, duration, customer category); Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features). Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, persons involved).
            </li>
            <li>
              <strong>Data subjects:</strong> Service recipients and clients. Users (e.g., website visitors, users of online services).
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Feedback (e.g., collecting feedback via online forms). Marketing.
            </li>
            <li>
              <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>
          <p>
            <strong>Further information on processing operations, procedures, and services:</strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Rating widget: </strong>We integrate so-called &ldquo;rating widgets&rdquo; into our online offering. A widget is a functional and content element integrated into our online offering that displays changeable information. It may be displayed, for example, in the form of a seal or comparable element, sometimes also called a &ldquo;badge.&rdquo; The corresponding content of the widget is displayed within our online offering but is retrieved at that moment from the servers of the respective widget provider. Only in this way can the current content always be shown, especially the respective current rating. For this purpose, a data connection must be established from the website accessed within our online offering to the server of the widget provider, and the widget provider receives certain technical data (access data, including IP address), which is necessary for the content of the widget to be delivered to the user&apos;s browser. Furthermore, the widget provider receives information that users have visited our online offering. This information may be stored in a cookie and used by the widget provider to identify which online offerings participating in the rating procedure have been visited by the user. The information may be stored in a user profile and used for advertising or market research purposes; <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>

          <h2 id="m136">Presences in Social Networks (Social Media)</h2>
          <p>
            We maintain online presences within social networks and process user data in this context in order to communicate with users active there or to offer information about us.
          </p>
          <p>
            We point out that user data may be processed outside the European Union. This may entail risks for users because, for example, the enforcement of user rights could be made more difficult.
          </p>
          <p>
            Furthermore, user data within social networks is generally processed for market research and advertising purposes. For example, usage profiles can be created based on the usage behavior and resulting interests of users. These may in turn be used, for example, to place advertisements within and outside the networks that presumably correspond to the interests of the users. For these purposes, cookies are generally stored on the users&apos; computers, in which the usage behavior and interests of the users are stored. Furthermore, data may be stored in the usage profiles independently of the devices used by the users (in particular when they are members of the respective platforms and are logged in to them).
          </p>
          <p>
            For a detailed description of the respective forms of processing and the objection options (opt-out), we refer to the privacy policies and information provided by the operators of the respective networks.
          </p>
          <p>
            Also in the case of access requests and the assertion of data subject rights, we point out that these can most effectively be asserted with the providers. Only the providers have access to the user data and can take appropriate measures and provide information directly. Should you nevertheless need assistance, you can contact us.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Contact data (e.g., postal and email addresses or telephone numbers); Content data (e.g., textual or visual messages and posts, and information relating to them, such as information about authorship or the time of creation); Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features); Inventory data (e.g., full name, residential address, contact information, customer number, etc.). Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, persons involved).
            </li>
            <li>
              <strong>Data subjects:</strong> Users (e.g., website visitors, users of online services).
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Communication; Feedback (e.g., collecting feedback via online forms); Public relations; Provision of our online offering and user-friendliness. Information technology infrastructure (operation and provision of information systems and technical devices (computers, servers, etc.)).
            </li>
            <li>
              <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section &ldquo;General Information on Data Storage and Deletion.&rdquo;
            </li>
            <li>
              <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>
          <p>
            <strong>Further information on processing operations, procedures, and services:</strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Instagram: </strong>Social network enabling the sharing of photos and videos, commenting on and favoriting posts, messaging, subscribing to profiles and pages; <strong>Service provider:</strong> Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Ireland; <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR); <strong>Website:</strong>{" "}
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                https://www.instagram.com
              </a>
              ; <strong>Privacy policy:</strong>{" "}
              <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer">
                https://privacycenter.instagram.com/policy/
              </a>
              . <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), Data Privacy Framework (DPF).
            </li>
            <li>
              <strong>Facebook Pages: </strong>Profiles within the social network Facebook &ndash; The controller is jointly responsible with Meta Platforms Ireland Limited for the collection and transmission of data from visitors to our Facebook page (&ldquo;fan page&rdquo;). This includes, in particular, information about user behavior (e.g., content viewed or interacted with, actions taken), and device information (e.g., IP address, operating system, browser type, language settings, cookie data). Further details can be found in the Facebook Data Policy:{" "}
              <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/privacy/policy/
              </a>
              . Facebook also uses this data to provide us with statistical evaluations through the &ldquo;Page Insights&rdquo; service, which provide insight into how people interact with our page and its content. This is based on an agreement with Facebook (&ldquo;Information about Page Insights&rdquo;:{" "}
              <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/legal/terms/page_controller_addendum
              </a>
              ), which, among other things, governs security measures and the exercise of data subject rights. Further information can be found here:{" "}
              <a href="https://www.facebook.com/legal/terms/information_about_page_insights_data" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/legal/terms/information_about_page_insights_data
              </a>
              . Users may therefore direct access or deletion requests directly to Facebook. Users&apos; rights (in particular access, deletion, objection, complaint to a supervisory authority) remain unaffected. The joint controllership is limited solely to the collection of data by Meta Platforms Ireland Limited (EU). Meta Platforms Ireland Limited is solely responsible for further processing, including any transmission to Meta Platforms Inc. in the USA; <strong>Service provider:</strong> Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Ireland; <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR); <strong>Website:</strong>{" "}
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com
              </a>
              ; <strong>Privacy policy:</strong>{" "}
              <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/privacy/policy/
              </a>
              . <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), Standard Contractual Clauses (
              <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/legal/EU_data_transfer_addendum
              </a>
              ), Data Privacy Framework (DPF), Standard Contractual Clauses (
              <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/legal/EU_data_transfer_addendum
              </a>
              ).
            </li>
            <li>
              <strong>LinkedIn: </strong>Social network &ndash; We are jointly responsible with LinkedIn Ireland Unlimited Company for the collection (but not the further processing) of data of visitors that is used to create the &ldquo;Page Insights&rdquo; (statistics) of our LinkedIn profiles. This data includes information about the types of content that users view or interact with, as well as the actions they take. It also captures details about the devices used, such as IP addresses, operating system, browser type, language settings, and cookie data, as well as information from user profiles such as job function, country, industry, seniority level, company size, and employment status. Privacy information about the processing of user data by LinkedIn can be found in LinkedIn&apos;s privacy notices:{" "}
              <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/legal/privacy-policy
              </a>
              .
              <br />
              We have entered into a specific agreement with LinkedIn Ireland (&ldquo;Page Insights Joint Controller Addendum,&rdquo;{" "}
              <a href="https://legal.linkedin.com/pages-joint-controller-addendum" target="_blank" rel="noopener noreferrer">
                https://legal.linkedin.com/pages-joint-controller-addendum
              </a>
              ), which in particular governs the security measures that LinkedIn must observe and in which LinkedIn has agreed to fulfill the rights of data subjects (i.e., users can, for example, direct access or deletion requests directly to LinkedIn). Users&apos; rights (in particular the right to access, deletion, objection, and complaint to the competent supervisory authority) are not restricted by the agreements with LinkedIn. The joint controllership is limited to the collection and transmission of data to LinkedIn Ireland Unlimited Company, a company based in the EU. The further processing of data is solely the responsibility of LinkedIn Ireland Unlimited Company, in particular with regard to the transmission of data to the parent company LinkedIn Corporation in the USA; <strong>Service provider:</strong> LinkedIn Ireland Unlimited Company, Wilton Plaza, Dublin 2, Ireland; <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR); <strong>Website:</strong>{" "}
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com
              </a>
              ; <strong>Privacy policy:</strong>{" "}
              <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/legal/privacy-policy
              </a>
              ; <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), Standard Contractual Clauses (
              <a href="https://legal.linkedin.com/dpa" target="_blank" rel="noopener noreferrer">
                https://legal.linkedin.com/dpa
              </a>
              ), Data Privacy Framework (DPF), Standard Contractual Clauses (
              <a href="https://legal.linkedin.com/dpa" target="_blank" rel="noopener noreferrer">
                https://legal.linkedin.com/dpa
              </a>
              ). <strong>Right to object (opt-out):</strong>{" "}
              <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
              </a>
              .
            </li>
            <li>
              <strong>Pinterest: </strong>Social network enabling the sharing of photos, commenting, favoriting, and curating posts, messaging, subscribing to profiles; <strong>Service provider:</strong> Pinterest Europe Limited, 2nd Floor, Palmerston House, Fenian Street, Dublin 2, Ireland; <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR); <strong>Website:</strong>{" "}
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                https://www.pinterest.com
              </a>
              . <strong>Privacy policy:</strong>{" "}
              <a href="https://policy.pinterest.com/en/privacy-policy" target="_blank" rel="noopener noreferrer">
                https://policy.pinterest.com/en/privacy-policy
              </a>
              .
            </li>
            <li>
              <strong>Threads: </strong>Social network; <strong>Service provider:</strong> Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Ireland; <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR); <strong>Website:</strong>{" "}
              <a href="https://www.threads.com/" target="_blank" rel="noopener noreferrer">
                https://www.threads.com/
              </a>
              . <strong>Privacy policy:</strong>{" "}
              <a href="https://help.instagram.com/515230437301944" target="_blank" rel="noopener noreferrer">
                https://help.instagram.com/515230437301944
              </a>
              .
            </li>
            <li>
              <strong>X: </strong>Social network; <strong>Service provider:</strong> X Internet Unlimited Company, One Cumberland Place, Fenian Street, Dublin 2 D02 AX07, Ireland; <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR); <strong>Website:</strong>{" "}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                https://x.com
              </a>
              . <strong>Privacy policy:</strong>{" "}
              <a href="https://x.com/en/privacy" target="_blank" rel="noopener noreferrer">
                https://x.com/en/privacy
              </a>
              .
            </li>
            <li>
              <strong>YouTube: </strong>Social network and video platform; <strong>Service provider:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland; <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR); <strong>Privacy policy:</strong>{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy
              </a>
              ; <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), Data Privacy Framework (DPF). <strong>Right to object (opt-out):</strong>{" "}
              <a href="https://myadcenter.google.com/personalizationoff" target="_blank" rel="noopener noreferrer">
                https://myadcenter.google.com/personalizationoff
              </a>
              .
            </li>
          </ul>

          <h2 id="m328">Plugins and Embedded Functions and Content</h2>
          <p>
            We integrate functional and content elements into our online offering that are sourced from the servers of their respective providers (hereinafter referred to as &ldquo;third-party providers&rdquo;). These may include, for example, graphics, videos, or city maps (hereinafter uniformly referred to as &ldquo;content&rdquo;).
          </p>
          <p>
            The integration always requires that the third-party providers of this content process the IP address of the users, since without the IP address they would not be able to send the content to the users&apos; browsers. The IP address is therefore required for the display of this content or these functions. We endeavor to use only content whose respective providers use the IP address solely for the delivery of the content. Third-party providers may also use so-called pixel tags (invisible graphics, also referred to as &ldquo;web beacons&rdquo;) for statistical or marketing purposes. Through the &ldquo;pixel tags,&rdquo; information such as visitor traffic on the pages of this website can be evaluated. The pseudonymous information may also be stored in cookies on the user&apos;s device and may contain, among other things, technical information about the browser and operating system, referring websites, visit times, and further information about the use of our online offering, as well as be linked with such information from other sources.
          </p>
          <p>
            <strong>Notes on legal bases:</strong> Where we ask users for their consent to use third-party providers, the legal basis for data processing is the permission granted. Otherwise, user data is processed on the basis of our legitimate interests (i.e., interest in efficient, economical, and recipient-friendly services). In this context, we would also like to draw your attention to the information on the use of cookies in this privacy policy.
          </p>
          <ul className="m-elements">
            <li>
              <strong>Data types processed:</strong> Usage data (e.g., page views and dwell time, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features). Meta, communication, and procedural data (e.g., IP addresses, timestamps, identification numbers, persons involved).
            </li>
            <li>
              <strong>Data subjects:</strong> Users (e.g., website visitors, users of online services).
            </li>
            <li>
              <strong>Purposes of processing and legitimate interests:</strong> Provision of our online offering and user-friendliness.
            </li>
            <li>
              <strong>Retention and deletion:</strong> Deletion in accordance with the information in the section &ldquo;General Information on Data Storage and Deletion.&rdquo; Cookie storage of up to 2 years (unless otherwise stated, cookies and similar storage methods may be stored on users&apos; devices for a period of two years).
            </li>
            <li>
              <strong>Legal bases:</strong> Consent (Art. 6(1)(a) GDPR). Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
          </ul>
          <p>
            <strong>Further information on processing operations, procedures, and services:</strong>
          </p>
          <ul className="m-elements">
            <li>
              <strong>Integration of third-party software, scripts, or frameworks (e.g., jQuery): </strong>We integrate software into our online offering that we retrieve from servers of other providers (e.g., function libraries that we use for the display or user-friendliness of our online offering). In doing so, the respective providers collect the IP address of the users and can process it for the purposes of transmitting the software to the users&apos; browsers, as well as for security purposes and for the evaluation and optimization of their offering. We integrate software into our online offering that we retrieve from servers of other providers (e.g., function libraries that we use for the display or user-friendliness of our online offering). In doing so, the respective providers collect the IP address of the users and can process it for the purposes of transmitting the software to the users&apos; browsers, as well as for security purposes and for the evaluation and optimization of their offering; <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR).
            </li>
            <li>
              <strong>Google Fonts (retrieval from Google server): </strong>Retrieval of fonts (and symbols) for the purpose of a technically secure, maintenance-free, and efficient use of fonts and symbols with regard to timeliness and loading times, their uniform display, and consideration of possible licensing restrictions. The font provider is informed of the user&apos;s IP address so that the fonts can be made available in the user&apos;s browser. In addition, technical data (language settings, screen resolution, operating system, hardware used) is transmitted, which is necessary for the provision of fonts depending on the devices used and the technical environment. This data may be processed on a server of the font provider in the USA. When visiting our online offering, users&apos; browsers send their browser HTTP requests to the Google Fonts Web API (i.e., a software interface for retrieving the fonts). The Google Fonts Web API provides users with the Cascading Style Sheets (CSS) of Google Fonts and then the fonts specified in the CSS. These HTTP requests include (1) the IP address used by the respective user to access the internet, (2) the requested URL on the Google server, and (3) the HTTP headers, including the user agent, which describes the browser and operating system versions of the website visitors, as well as the referral URL (i.e., the web page on which the Google font is to be displayed). IP addresses are neither logged nor stored on Google servers and are not analyzed. The Google Fonts Web API logs details of HTTP requests (requested URL, user agent, and referral URL). Access to this data is restricted and strictly controlled. The requested URL identifies the font families for which the user wishes to load fonts. This data is logged so that Google can determine how often a particular font family is requested. For the Google Fonts Web API, the user agent must adapt the font generated for the respective browser type. The user agent is primarily logged and used for debugging and to generate aggregated usage statistics that measure the popularity of font families. These aggregated usage statistics are published on the Google Fonts &ldquo;Analytics&rdquo; page. Finally, the referral URL is logged so that the data can be used for production maintenance and an aggregated report on top integrations based on the number of font requests can be generated. According to Google, it does not use any of the information collected by Google Fonts to create profiles of end users or to serve targeted advertisements; <strong>Service provider:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland; <strong>Legal bases:</strong> Legitimate interests (Art. 6(1)(f) GDPR); <strong>Website:</strong>{" "}
              <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">
                https://fonts.google.com/
              </a>
              ; <strong>Privacy policy:</strong>{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy
              </a>
              ; <strong>Basis for third-country transfers:</strong> Data Privacy Framework (DPF), Data Privacy Framework (DPF). <strong>Further information:</strong>{" "}
              <a href="https://developers.google.com/fonts/faq/privacy?hl=en" target="_blank" rel="noopener noreferrer">
                https://developers.google.com/fonts/faq/privacy?hl=en
              </a>
              .
            </li>
          </ul>

          <h2 id="m15">Changes and Updates</h2>
          <p>
            We ask you to regularly inform yourself about the content of our privacy policy. We adapt the privacy policy as soon as changes in the data processing carried out by us make this necessary. We will inform you as soon as the changes require an act of participation on your part (e.g., consent) or other individual notification.
          </p>
          <p>
            Where we provide addresses and contact information of companies and organizations in this privacy policy, please note that the addresses may change over time and please verify the information before contacting them.
          </p>

          <h2 id="m42">Definitions</h2>
          <p>
            In this section, you will find an overview of the terms used in this privacy policy. Where the terms are legally defined, their legal definitions apply. The following explanations, however, are primarily intended to aid understanding.
          </p>
          <ul>
            <li><strong>Affiliate Tracking:</strong> In the context of affiliate tracking, links through which the linking websites refer users to websites with product or other offers are logged. The operators of the respective linking websites may receive a commission if users follow these so-called affiliate links and subsequently take up the offers (e.g., purchase goods or use services). For this purpose, it is necessary for the providers to be able to track whether users who are interested in certain offers subsequently take them up at the instigation of the affiliate links. Therefore, for the functionality of affiliate links, it is necessary that they are supplemented by certain values that become part of the link or are otherwise stored, e.g., in a cookie. These values include in particular the source website (referrer), the time, an online identifier of the website operator on which the affiliate link was located, an online identifier of the respective offer, an online identifier of the user, as well as tracking-specific values such as advertising material ID, partner ID, and categorizations.</li>
            <li><strong>Master Data:</strong> Master data includes essential information necessary for the identification and management of contractual partners, user accounts, profiles, and similar assignments. This data may include personal and demographic details such as names, contact information (addresses, phone numbers, email addresses), dates of birth, and specific identifiers (user IDs). Master data forms the basis for any formal interaction between persons and services, facilities, or systems by enabling unambiguous assignment and communication.</li>
            <li><strong>Content Data:</strong> Content data includes information generated in the course of creating, editing, and publishing content of all kinds. This category of data may include texts, images, videos, audio files, and other multimedia content published on various platforms and media. Content data is not limited to the actual content but also includes metadata that provides information about the content itself, such as tags, descriptions, author information, and publication dates.</li>
            <li><strong>Contact Data:</strong> Contact data is essential information that enables communication with persons or organizations. It includes, among other things, telephone numbers, postal addresses, and email addresses, as well as communication means such as social media handles and instant messaging identifiers.</li>
            <li><strong>Conversion Measurement:</strong> Conversion measurement (also referred to as &ldquo;visit action evaluation&rdquo;) is a method used to determine the effectiveness of marketing measures. For this purpose, a cookie is typically stored on the devices of users within the websites on which the marketing measures take place, and then retrieved again on the target website. For example, this allows us to track whether the ads we placed on other websites were successful.</li>
            <li><strong>Meta, Communication, and Process Data:</strong> Meta, communication, and process data are categories that contain information about how data is processed, transmitted, and managed. Meta data, also known as data about data, includes information describing the context, origin, and structure of other data. Communication data captures the exchange of information between users across various channels, such as email traffic, call logs, messages on social networks, and chat histories, including the parties involved, timestamps, and transmission paths. Process data describes the processes and procedures within systems or organizations, including workflow documentation, transaction and activity logs, and audit logs used for tracking and verification of operations.</li>
            <li><strong>Usage Data:</strong> Usage data refers to information that captures how users interact with digital products, services, or platforms. This data encompasses a wide range of information showing how users use applications, which features they prefer, how long they spend on certain pages, and through which paths they navigate through an application. Usage data may also include frequency of use, timestamps of activities, IP addresses, device information, and location data.</li>
            <li><strong>Personal Data:</strong> &ldquo;Personal data&rdquo; means any information relating to an identified or identifiable natural person (hereinafter &ldquo;data subject&rdquo;); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier (e.g., cookie) or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person.</li>
            <li><strong>Profiles with User-Related Information:</strong> The processing of &ldquo;profiles with user-related information,&rdquo; or simply &ldquo;profiles,&rdquo; includes any form of automated processing of personal data that consists of using such personal data to analyze, evaluate, or predict certain personal aspects relating to a natural person (depending on the type of profiling, this may include various information concerning demographics, behavior, and interests, such as interaction with websites and their content). Cookies and web beacons are frequently used for profiling purposes.</li>
            <li><strong>Log Data:</strong> Log data is information about events or activities that have been logged in a system or network. This data typically contains information such as timestamps, IP addresses, user actions, error messages, and other details about the use or operation of a system. Log data is often used for analyzing system problems, security monitoring, or generating performance reports.</li>
            <li><strong>Reach Measurement:</strong> Reach measurement (also known as web analytics) is used to evaluate the visitor flows of an online offering and may include the behavior or interests of visitors in certain information, such as website content. With the help of reach analysis, operators of online offerings can recognize, for example, at what time users visit their websites and what content they are interested in. This allows them to better adapt the content of their websites to the needs of their visitors. Pseudonymous cookies and web beacons are frequently used for reach analysis purposes to recognize returning visitors and thus obtain more precise analyses of the use of an online offering.</li>
            <li><strong>Remarketing:</strong> &ldquo;Remarketing&rdquo; or &ldquo;retargeting&rdquo; refers to the practice of noting, for advertising purposes, which products a user was interested in on a website, in order to remind the user of these products on other websites, e.g., in advertisements.</li>
            <li><strong>Tracking:</strong> &ldquo;Tracking&rdquo; refers to the ability to trace the behavior of users across multiple online offerings. As a rule, behavioral and interest information is stored in cookies or on the servers of the tracking technology providers (so-called profiling) with regard to the online offerings used. This information can then be used, for example, to display advertisements to users that are likely to correspond to their interests.</li>
            <li><strong>Controller:</strong> The &ldquo;controller&rdquo; is the natural or legal person, public authority, agency, or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data.</li>
            <li><strong>Processing:</strong> &ldquo;Processing&rdquo; means any operation or set of operations which is performed on personal data, whether or not by automated means. The term is broad and covers practically any handling of data, be it collection, evaluation, storage, transmission, or deletion.</li>
            <li><strong>Contract Data:</strong> Contract data is specific information relating to the formalization of an agreement between two or more parties. It documents the conditions under which services or products are provided, exchanged, or sold. This data category is essential for the management and fulfillment of contractual obligations and includes both the identification of the contracting parties and the specific terms and conditions of the agreement.</li>
            <li><strong>Payment Data:</strong> Payment data includes all information required for the processing of payment transactions between buyers and sellers. This data is of crucial importance for electronic commerce, online banking, and any other form of financial transaction. It includes details such as credit card numbers, bank details, payment amounts, transaction data, verification numbers, and billing information. Payment data may also contain information about payment status, chargebacks, authorizations, and fees.</li>
            <li><strong>Audience Building:</strong> Audience building (also known as &ldquo;Custom Audiences&rdquo;) refers to the determination of target groups for advertising purposes, e.g., the display of advertisements. For example, based on a user&rsquo;s interest in certain products or topics on the internet, it may be inferred that this user is interested in advertisements for similar products or the online shop in which they viewed the products. &ldquo;Lookalike Audiences&rdquo; (or similar audiences) refers to content deemed suitable being displayed to users whose profiles or interests presumably correspond to the users for whom the profiles were created. Cookies and web beacons are typically used for the purpose of creating Custom Audiences and Lookalike Audiences.</li>
          </ul>
          <p className="text-xs text-muted-foreground/50 mt-8">
            Created with the free{" "}
            <a href="https://datenschutz-generator.de/" target="_blank" rel="noopener noreferrer nofollow">
              Privacy Policy Generator by Dr. Thomas Schwenke
            </a>.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}

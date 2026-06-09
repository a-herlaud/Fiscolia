import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function PrivacyPolicy () {

    return (
        <div className="start-body-style">
                <h1>Privacy Policy for Fiscolia</h1>
                <p><strong>Last Updated: June 09, 2026</strong></p>
                <p>The Fiscolia Team is committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access and use Fiscolia, our intelligent personal finance management platform.</p>
                <p>Please read this Privacy Policy carefully. By using Fiscolia, you agree to the collection and use of your information as described in this policy. If you do not agree with our privacy practices, please do not use Fiscolia.</p>
                
                <h2>1. Interpretation and Definitions</h2>
                <p><strong>Capitalized terms</strong> used in this Privacy Policy have the meanings defined below. These definitions apply whether such terms appear in singular or plural form.</p>

                <h2>2. Definitions</h2>
                <p>
                <strong>Fiscolia Team</strong> (referred to as "the Company", "We", "Us", "Our", or "Fiscolia") refers to the organization providing Fiscolia.<br/>
                <strong>Account</strong> means a unique account created for you to access our Service or parts of our Service.<br/>
                <strong>Personal Data</strong> (or "Personal Information") is any information that relates to an identified or identifiable individual.<br/>
                <strong>Service</strong> refers to the Fiscolia platform including our website, web application, chatbot service, profile management, file upload functionality, and all related services.<br/>
                <strong>Device</strong> means any device that can access the Service such as a computer, cell phone, tablet, or mobile device.<br/>
                <strong>Usage Data</strong> refers to data collected automatically when using Fiscolia, including IP addresses, browser type, pages visited, and time spent on pages.<br/>
                <strong>Cookies</strong> are small files placed on your Device containing browsing history and other information.<br/>
                <strong>AI Processing</strong> refers to our machine learning and artificial intelligence model training and inference activities.<br/>
                <strong>Financial Profile Data</strong> refers to information you provide about your civil status, family situation, specific circumstances, income (RNI), and social-professional category (CSP).<br/>
                <strong>Country</strong> refers to: France<br/>
                <strong>You</strong> or <strong>Your</strong> means the individual accessing or using Fiscolia.
                </p>
                
                <h2>3. Collecting and Using Your Personal Data</h2>
                <p><strong>Types of Data We Collect:</strong></p>
                
                <h3>3.1 Personal Data (Directly Provided by You)</h3>
                <p>When you create an account or interact with Fiscolia, we may collect:
                <ul>
                <li><strong>Authentication Data:</strong> Email address, password hash, phone number</li>
                <li><strong>Profile Information:</strong> First name, last name, date of birth</li>
                <li><strong>Financial Profile Data:</strong> Civil status (married, single, divorced, widowed), family situation (number of dependents), specific life circumstances, annual net income (RNI), social-professional category (CSP)</li>
                <li><strong>Contact Information:</strong> Address, city, postal code, country</li>
                <li><strong>Uploaded Content:</strong> Financial documents, bank statements, invoices, tax documents, and other files you upload</li>
                <li><strong>Communication Data:</strong> Messages sent through our chatbot (Fiscopain), support inquiries, and feedback</li>
                </ul>
                </p>

                <h3>3.2 Usage Data (Collected Automatically)</h3>
                <p>We automatically collect information about how you interact with Fiscolia:
                <ul>
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, browser type, mobile network information</li>
                <li><strong>Access Information:</strong> IP address, pages visited, time and duration of visits, click patterns, referral sources</li>
                <li><strong>Interaction Data:</strong> Features used, searches performed, AI model queries, file uploads, profile updates</li>
                <li><strong>Performance Data:</strong> Error logs, system performance, technical diagnostics</li>
                <li><strong>Location Data:</strong> Approximate location based on IP address (not GPS-based)</li>
                </ul>
                </p>

                <h3>3.3 Tracking Technologies and Cookies</h3>
                <p><strong>What are Cookies?</strong> Cookies are small files placed on your Device that help us remember your preferences and improve your experience.

                <strong>Types of Cookies We Use:</strong>
                <ul>
                <li><strong>Essential Cookies:</strong> Required for authentication, security, and core functionality. These cannot be disabled.</li>
                <li><strong>Performance Cookies:</strong> Help us understand how you use Fiscolia to improve our platform.</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences such as language and display settings.</li>
                <li><strong>Analytical Cookies:</strong> Track website usage patterns and performance through services like Elasticsearch/Kibana.</li>
                </ul>

                <strong>Cookie Management:</strong> You can control cookies through your browser settings. However, disabling cookies may limit Fiscolia functionality. Essential cookies cannot be refused.

                <strong>Web Beacons and Tracking Pixels:</strong> We may use web beacons to track page visits and email engagement.

                <strong>Session vs. Persistent Cookies:</strong>
                <ul>
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for extended periods to remember your preferences</li>
                </ul>
                </p>

                <h2>4. How We Use Your Personal Data</h2>
                <p>The Fiscolia Team uses your Personal Data for the following purposes:

                <h3>4.1 Service Provision and Enhancement</h3>
                <ul>
                <li>Provide, maintain, and improve Fiscolia services</li>
                <li>Process financial data to generate personalized insights and recommendations</li>
                <li>Enable the chatbot (Fiscopain) to provide financial guidance and support</li>
                <li>Monitor platform usage and performance</li>
                <li>Troubleshoot technical issues and provide support</li>
                </ul>

                <h3>4.2 Machine Learning and AI Services</h3>
                <ul>
                <li>Train and improve our machine learning models for better financial recommendations</li>
                <li>Analyze financial patterns to provide more accurate insights</li>
                <li>Develop new features based on usage patterns</li>
                <li>Improve natural language processing for our chatbot</li>
                </ul>

                <h3>4.3 Account Management</h3>
                <ul>
                <li>Manage your user account and access to Fiscolia</li>
                <li>Process registration and account updates</li>
                <li>Handle password resets and security verification</li>
                <li>Verify your identity and prevent fraud</li>
                </ul>

                <h3>4.4 Communication</h3>
                <ul>
                <li>Send service-related announcements and updates</li>
                <li>Respond to support inquiries</li>
                <li>Send notifications about account activity or security alerts</li>
                <li>Send promotional content (only with your consent)</li>
                </ul>

                <h3>4.5 Security and Legal Compliance</h3>
                <ul>
                <li>Protect against fraud and unauthorized access (ModSecurity monitoring)</li>
                <li>Comply with legal obligations and regulatory requirements</li>
                <li>Enforce our Terms and Conditions</li>
                <li>Detect and prevent security threats and attacks</li>
                <li>Maintain audit logs for compliance purposes</li>
                </ul>

                <h3>4.6 Analytics and Business Intelligence</h3>
                <ul>
                <li>Understand how users interact with Fiscolia</li>
                <li>Identify usage trends and patterns</li>
                <li>Measure feature effectiveness and user satisfaction</li>
                <li>Improve marketing and user experience</li>
                </ul>
                </p>

                <h2>5. Sharing Your Personal Data</h2>
                <p><strong>When Do We Share Your Data?</strong> The Fiscolia Team may share your Personal Data in the following circumstances:

                <h3>5.1 Service Providers</h3>
                <p>We may share your data with third-party service providers who:
                <ul>
                <li>Help us provide and maintain Fiscolia</li>
                <li>Perform analytics and monitoring (Elasticsearch, Kibana)</li>
                <li>Provide customer support</li>
                <li>Process payments (if applicable)</li>
                <li>Manage security and fraud detection</li>
                </ul>

                Service providers are contractually required to protect your data and use it only for specified purposes.
                </p>

                <h3>5.2 Business Transfers</h3>
                <p>If Fiscolia is involved in a merger, acquisition, bankruptcy, or sale of assets, your Personal Data may be transferred as part of that transaction. We will notify you of any such change.
                </p>

                <h3>5.3 Legal Compliance</h3>
                <p>We may disclose your Personal Data if required by:
                <ul>
                <li>French or European law</li>
                <li>Court orders or legal process</li>
                <li>Government agencies or regulatory authorities</li>
                <li>To protect our legal rights and defend against claims</li>
                </ul>
                </p>

                <h3>5.4 Public Areas</h3>
                <p>Any information you voluntarily post in public areas of Fiscolia may be viewed by all users and publicly distributed.
                </p>

                <h3>5.5 With Your Consent</h3>
                <p>We may share your Personal Data for other purposes only with your explicit consent.
                </p>

                <strong>Data We Do NOT Share:</strong> We do not sell, trade, or rent your Personal Data to third parties for their marketing purposes. Financial profile data and uploaded documents are kept confidential except as described above.
                </p>

                <h2>6. Retention of Your Personal Data</h2>
                <p>The Fiscolia Team retains your Personal Data only as long as necessary to provide services and comply with legal obligations.

                <h3>6.1 Retention Periods by Data Type</h3>
                <ul>
                <li><strong>Account Information:</strong> Retained for the duration of your account relationship plus 24 months after account closure for legal and dispute resolution purposes</li>
                <li><strong>Financial Profile Data:</strong> Retained for the duration of your account relationship plus 24 months after closure, unless you request deletion</li>
                <li><strong>Uploaded Documents:</strong> Retained for the duration of your account relationship plus 24 months after closure, then securely deleted</li>
                <li><strong>Chatbot/Support Conversations:</strong> Retained for 24 months for quality assurance, training, and support purposes</li>
                <li><strong>Usage Data and Analytics:</strong> Retained for up to 24 months for performance analysis and security purposes</li>
                <li><strong>Server Logs (IP addresses, access times):</strong> Retained for up to 24 months for security monitoring and troubleshooting</li>
                <li><strong>Marketing Communications Data:</strong> Retained until you unsubscribe</li>
                <li><strong>Anonymized/Aggregated Data:</strong> May be retained indefinitely for research, analytics, and model improvement</li>
                </ul>

                <h3>6.2 Extended Retention</h3>
                <p>We may retain Personal Data beyond the above periods if:
                <ul>
                <li>Required by law (tax records, financial regulations)</li>
                <li>Necessary to establish, exercise, or defend legal claims</li>
                <li>You explicitly request retention</li>
                <li>Data exists in backup systems scheduled for routine deletion</li>
                </ul>
                </p>

                <h3>6.3 Data Deletion Process</h3>
                <p>When retention periods expire or upon your request:
                <ul>
                <li><strong>Permanent Deletion:</strong> Personal Data is securely removed from active systems using cryptographic erasure or overwriting methods</li>
                <li><strong>Backup Retention:</strong> Residual copies may remain in encrypted backups for 90 days to support disaster recovery, then deleted</li>
                <li><strong>Anonymization:</strong> In some cases, data is converted to anonymous statistical data unlinked to your identity, which may be retained indefinitely</li>
                </ul>
                </p>
                </p>

                <h2>7. Transfer of Your Personal Data</h2>
                <p>Your Personal Data is primarily processed in France. However, your information may be transferred to and processed in other locations where:
                <ul>
                <li>Our service providers and cloud infrastructure are located</li>
                <li>We maintain backup systems</li>
                <li>Regulatory compliance requires</li>
                </ul>

                <strong>International Transfers:</strong> Where required by law, we ensure international data transfers are protected by:
                <ul>
                <li>Standard Data Protection Clauses (DPC) approved by European authorities</li>
                <li>Binding Corporate Rules or similar mechanisms</li>
                <li>Your explicit consent where applicable</li>
                </ul>

                By using Fiscolia, you consent to the transfer, storage, and processing of your Personal Data outside France where necessary.
                </p>

                <h2>8. Your Privacy Rights and Data Subject Requests</h2>
                <p><strong>Under GDPR and French Law, you have the following rights:</strong>

                <h3>8.1 Right of Access</h3>
                <p>You have the right to request access to all Personal Data we hold about you. We will provide this information in a structured, commonly used, and machine-readable format.
                </p>

                <h3>8.2 Right to Correction (Rectification)</h3>
                <p>You may request correction of inaccurate or incomplete Personal Data. You can update much of your information directly in your account settings.
                </p>

                <h3>8.3 Right to Deletion (Right to be Forgotten)</h3>
                <p>You may request deletion of your Personal Data, except where:
                <ul>
                <li>We have a legal obligation to retain it</li>
                <li>It's necessary to establish, exercise, or defend legal claims</li>
                <li>You have explicitly requested retention</li>
                </ul>

                Upon deletion request, we will remove your data from active systems within 30 days. Backups may retain data for up to 90 days.
                </p>

                <h3>8.4 Right to Data Portability</h3>
                <p>You may request a copy of your Personal Data in a structured, commonly used, machine-readable format (e.g., JSON, CSV) for transfer to another service provider.
                </p>

                <h3>8.5 Right to Restrict Processing</h3>
                <p>You may request limitation of how we process your Personal Data, though this may affect service functionality.
                </p>

                <h3>8.6 Right to Object</h3>
                <p>You may object to:
                <ul>
                <li>Marketing and promotional communications (you can unsubscribe anytime)</li>
                <li>Processing for analytics or profiling purposes</li>
                <li>Processing based on legitimate interests</li>
                </ul>
                </p>

                <h3>8.7 Right to Withdraw Consent</h3>
                <p>For processing based on your consent, you may withdraw it at any time. This does not affect the lawfulness of processing before withdrawal.
                </p>

                <strong>How to Exercise Your Rights:</strong> Contact the Fiscolia Team with your request. We will respond within 30 days (or as required by law). You may be asked to verify your identity.
                </p>

                <h2>9. Security of Your Personal Data</h2>
                <p>The Fiscolia Team implements comprehensive security measures to protect your Personal Data:

                <h3>9.1 Technical Security Measures</h3>
                <ul>
                <li><strong>Encryption:</strong> Data in transit is encrypted using TLS/SSL; data at rest is encrypted using AES-256 or similar standards</li>
                <li><strong>Authentication:</strong> Secure authentication mechanisms including Hashicorp Vault for credential management</li>
                <li><strong>Access Control:</strong> Role-based access control (RBAC) restricts employee access to only necessary data</li>
                <li><strong>Web Application Firewall:</strong> ModSecurity WAF protects against common web attacks (SQL injection, XSS, etc.)</li>
                <li><strong>Intrusion Detection:</strong> Continuous monitoring for suspicious activity</li>
                <li><strong>Database Security:</strong> Secure database configuration with authentication and access controls</li>
                </ul>

                <h3>9.2 Operational Security Measures</h3>
                <ul>
                <li><strong>Logging and Monitoring:</strong> Elasticsearch and Kibana for security event logging and analysis</li>
                <li><strong>Vulnerability Management:</strong> Regular security assessments and penetration testing</li>
                <li><strong>Incident Response:</strong> Documented procedures for security breach response and notification</li>
                <li><strong>Employee Training:</strong> Security awareness training for all staff handling personal data</li>
                <li><strong>Data Backup:</strong> Regular encrypted backups for disaster recovery</li>
                </ul>

                <h3>9.3 Limitations</h3>
                <p>Despite these measures, no security system is 100% secure. We cannot guarantee absolute protection against all threats. You use Fiscolia at your own risk. Report any suspected security incidents immediately to our support team.
                </p>
                </p>

                <h2>10. Children's Privacy</h2>
                <p>Fiscolia is not designed for and does not knowingly collect information from children under 16 years of age. If we become aware that we have collected Personal Data from a child under 16, we will:
                <ul>
                <li>Delete such information promptly</li>
                <li>Not use this information for any purpose</li>
                <li>Notify parents/guardians as required</li>
                </ul>

                If you are a parent or guardian and believe your child has provided information to Fiscolia, please contact us immediately.

                For children 16-18 in the EU, parental consent may be required. We will verify consent where applicable.
                </p>

                <h2>11. Third-Party Links and Services</h2>
                <p>Fiscolia may contain links to third-party websites, financial services, or applications. The Fiscolia Team:
                <ul>
                <li>Does not control third-party sites or services</li>
                <li>Does not endorse their content, privacy practices, or policies</li>
                <li>Is not responsible for third-party privacy practices or data handling</li>
                <li>Recommends reviewing third-party privacy policies before sharing information with them</li>
                </ul>

                Your use of third-party services is governed by their terms and policies, not by this Privacy Policy.
                </p>

                <h2>12. Cookies and Tracking Technologies Policy</h2>
                <p><strong>Cookie Preferences:</strong> You may manage your cookie preferences through:
                <ul>
                <li>Browser settings and controls</li>
                <li>Our cookie preferences tool (if available on the platform)</li>
                <li>Device-level privacy settings</li>
                </ul>

                <strong>Impact of Disabling Cookies:</strong> Disabling cookies may limit functionality such as:
                <ul>
                <li>Automatic login functionality</li>
                <li>Personalized recommendations</li>
                <li>Language and preference remembering</li>
                </ul>

                Essential cookies for security and functionality cannot be disabled.
                </p>

                <h2>13. Do Not Track (DNT) Signals</h2>
                <p>Some browsers include a "Do Not Track" feature. Fiscolia does not currently respond to DNT signals. However, you can control tracking through your browser settings and our privacy controls.
                </p>

                <h2>14. Marketing Communications and Opt-Out</h2>
                <p><strong>Email Communications:</strong> We may send you:
                <ul>
                <li>Service-related announcements (transactional emails - cannot be opted out)</li>
                <li>Feature updates and educational content (with your consent)</li>
                <li>Promotional offers and newsletters (only with your consent)</li>
                </ul>

                <strong>Unsubscribe:</strong> Each promotional email includes an "Unsubscribe" link. Click it to opt-out. You will receive a confirmation of your unsubscribe preference.

                <strong>Preferences:</strong> Manage your communication preferences in your Account Settings anytime.
                </p>

                <h2>15. Your California Privacy Rights (CCPA - if applicable)</h2>
                <p>If you are a California resident, you have the right to:
                <ul>
                <li>Know what personal information is collected, used, shared, or sold</li>
                <li>Delete personal information (with exceptions)</li>
                <li>Opt-out of the sale or sharing of personal information</li>
                <li>Non-discrimination for exercising your CCPA rights</li>
                </ul>

                To exercise these rights, contact the Fiscolia Team. We will respond within 45 days.
                </p>

                <h2>16. Changes to This Privacy Policy</h2>
                <p>The Fiscolia Team may update this Privacy Policy periodically. We will notify you of material changes by:
                <ul>
                <li>Posting the updated Privacy Policy on Fiscolia with a new "Last Updated" date</li>
                <li>Sending you an email notification (if you have provided an email)</li>
                <li>Displaying a prominent notice on the platform</li>
                </ul>

                Your continued use of Fiscolia after changes indicates your acceptance of the updated Privacy Policy.
                </p>

                <h2>17. Data Protection Officer (DPO)</h2>
                <p>The Fiscolia Team has appointed a Data Protection Officer responsible for ensuring GDPR and privacy law compliance. For privacy inquiries or complaints, you may contact the DPO or write to us at the address provided in the Contact section below.
                </p>

                <h2>18. Contact Us - Data Subject Requests and Privacy Questions</h2>
                <p>If you have questions about this Privacy Policy, wish to exercise your privacy rights, or report a privacy concern, please contact the Fiscolia Team:

                <ul>
                <li><strong>Platform Support:</strong> Available through the Fiscolia platform support pages</li>
                <li><strong>Website:</strong> https://localhost:8083/</li>
                <li><strong>Privacy Concerns:</strong> Submit through our contact form on the website</li>
                <li><strong>Data Subject Requests:</strong> Specify your request (access, deletion, portability, etc.) and include your email or account identifier</li>
                </ul>

                <strong>Response Time:</strong> We will respond to all requests within 30 days, or as required by applicable law.

                <strong>Dispute Resolution:</strong> If you are not satisfied with our response, you have the right to lodge a complaint with your local Data Protection Authority (in France, the CNIL - Commission Nationale de l'Informatique et des Libertés).
                </p>

                <h2>19. Compliance with French and EU Data Protection Laws</h2>
                <p>This Privacy Policy complies with:
                <ul>
                <li><strong>GDPR (Regulation (EU) 2016/679):</strong> European General Data Protection Regulation</li>
                <li><strong>French Data Protection Law (Loi Informatique et Libertés):</strong> French implementation of GDPR</li>
                <li><strong>ePrivacy Directive (2002/58/EC):</strong> Governs electronic communications privacy</li>
                </ul>

                The Fiscolia Team is committed to meeting all obligations under these regulations.
                </p>

                <h2>20. Acknowledgment</h2>
                <p>By using Fiscolia, you acknowledge that you have read, understood, and accept this Privacy Policy. You consent to the collection, use, and disclosure of your Personal Data as described herein. If you do not agree with our privacy practices, please do not use Fiscolia.
                </p>

            </div>
    )

}

export default PrivacyPolicy
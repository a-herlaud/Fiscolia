import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function TermsOfService () {

    return (
        <div className="start-body-style">
                <h1>Terms and Conditions for Fiscolia</h1>
                <p><strong>Last Updated: June 09, 2026</strong></p>
                <p>Welcome to Fiscolia, an intelligent platform for personal finance management and AI-powered financial insights. These Terms and Conditions ("Terms") are provided by the Fiscolia Team and govern your use of our Service. Please read these terms carefully before using Fiscolia. By accessing or using Fiscolia, you agree to be bound by these Terms.</p>

                <h2>1. Interpretation and Definitions</h2>
                <p><strong>Capitalized terms</strong> used in these Terms have the meanings defined below. These definitions apply whether such terms appear in singular or plural form.</p>

                <h2>2. Definitions</h2>
                <p>
                <strong>Fiscolia Team</strong> (referred to as "the Company", "We", "Us", "Our", or "Fiscolia") refers to the organization providing Fiscolia, a comprehensive financial management platform.<br/>
                <strong>Country</strong> refers to: France<br/>
                <strong>Device</strong> means any device that can access the Service such as a computer, cell phone, tablet, or mobile device.<br/>
                <strong>Service</strong> refers to the Fiscolia platform including our website, web application, chatbot service, user profile management, file upload functionality, and all related services.<br/>
                <strong>AI Services</strong> refers to our artificial intelligence and machine learning features, including the conversational chatbot (Fiscopain), recommendation engine, and financial analysis tools.<br/>
                <strong>Personal Data</strong> means information about an identified or identifiable individual, as more fully defined in our Privacy Policy.<br/>
                <strong>User Account</strong> means a unique account created for you to access the Service or parts of the Service.<br/>
                <strong>User Content</strong> means any data, documents, files, profiles, or other information you upload, create, or submit through Fiscolia.<br/>
                <strong>Third-Party Service</strong> means any services provided by third parties that are integrated with or linked to through Fiscolia.<br/>
                <strong>You</strong> or <strong>Your</strong> means the individual or entity accessing or using Fiscolia, as applicable.
                </p>

                <h2>3. Acknowledgment and Acceptance</h2>
                <p>By accessing or using Fiscolia, you acknowledge that:
                <ul>
                <li>You have read, understood, and agree to be bound by these Terms and Conditions.</li>
                <li>You are at least 18 years of age. Fiscolia does not permit those under 18 to use the Service.</li>
                <li>Your use of Fiscolia is subject to our Privacy Policy, which governs how we collect, use, and protect your personal information.</li>
                <li>You have the authority to enter into this agreement and comply with all applicable laws and regulations.</li>
                <li>If you do not agree to these Terms, you may not access or use Fiscolia.</li>
                </ul>
                </p>

                <h2>4. User Account and Responsibilities</h2>
                <p>When you create a User Account on Fiscolia, you are responsible for:
                <ul>
                <li>Providing accurate, current, and complete information during registration.</li>
                <li>Maintaining the confidentiality of your login credentials and password.</li>
                <li>Notifying us immediately of any unauthorized access or security breach.</li>
                <li>All activities conducted through your account, whether authorized or unauthorized.</li>
                <li>Ensuring your profile information (civil status, family situation, specific situation, RNI, CSP) is truthful and kept up-to-date for accurate financial insights.</li>
                <li>Complying with all applicable laws and these Terms while using Fiscolia.</li>
                </ul>
                </p>

                <h2>5. User Content and Intellectual Property</h2>
                <p><strong>Your Rights:</strong> You retain all rights to any User Content you upload or create on Fiscolia.
                
                <strong>License to Fiscolia Team:</strong> By uploading or submitting User Content, you grant the Fiscolia Team a worldwide, non-exclusive, royalty-free license to:
                <ul>
                <li>Store, process, and analyze your content to provide AI-powered insights and recommendations.</li>
                <li>Use your data for machine learning model training and improvement of our financial analysis tools.</li>
                <li>Display aggregated, anonymized insights based on your data for analytical purposes.</li>
                <li>Maintain backups of your content for security and recovery purposes.</li>
                </ul>

                <strong>Restrictions:</strong> You may not upload content that:
                <ul>
                <li>Violates intellectual property rights or privacy of others.</li>
                <li>Contains malware, viruses, or harmful code.</li>
                <li>Is illegal, fraudulent, or used for unauthorized purposes.</li>
                <li>Infringes on third-party rights.</li>
                </ul>
                </p>

                <h2>6. AI Services and Chatbot (Fiscopain)</h2>
                <p>Fiscolia provides AI-powered services including our intelligent chatbot assistant "Fiscopain" for financial guidance and support.
                
                <strong>Disclaimer:</strong> The Fiscolia Team does not provide professional financial, legal, or tax advice. Our AI services are tools designed to provide general financial insights and recommendations based on the information you provide. You should:
                <ul>
                <li>Verify all recommendations with professional advisors before making financial decisions.</li>
                <li>Understand that AI-generated insights are based on patterns and may contain errors or inaccuracies.</li>
                <li>Not rely solely on our chatbot for critical financial decisions.</li>
                <li>Consult with qualified professionals (accountants, financial advisors, lawyers) for complex financial matters.</li>
                </ul>

                <strong>Service Availability:</strong> While we strive to maintain 24/7 availability, the Fiscolia Team does not guarantee uninterrupted service. AI models may require periodic updates or maintenance that could temporarily affect chatbot functionality.
                </p>

                <h2>7. File Upload and Data Security</h2>
                <p>Fiscolia provides functionality for uploading financial documents and personal information.
                
                <strong>Your Responsibilities:</strong>
                <ul>
                <li>Ensure you have the right to upload all content.</li>
                <li>Do not upload sensitive government IDs, passwords, or security codes.</li>
                <li>Understand that uploads are subject to size limitations and format restrictions.</li>
                <li>Keep backups of critical documents outside of Fiscolia.</li>
                </ul>

                <strong>Fiscolia Team Responsibilities:</strong> We implement security measures including encryption, ModSecurity protections, and secure authentication (Vault integration) to protect your data. However, no security system is 100% secure, and we cannot guarantee absolute protection against all threats.
                </p>

                <h2>8. Prohibited Conduct</h2>
                <p>You agree not to:
                <ul>
                <li>Attempt to gain unauthorized access to Fiscolia systems or other users' accounts.</li>
                <li>Transmit malware, viruses, or any harmful code.</li>
                <li>Engage in fraud, deception, or misrepresentation.</li>
                <li>Harassment, abuse, or threatening behavior toward other users or the Fiscolia Team.</li>
                <li>Violate intellectual property, privacy, or other legal rights.</li>
                <li>Reverse engineer, decompile, or attempt to derive source code or proprietary methods.</li>
                <li>Perform security testing without explicit written permission from the Fiscolia Team.</li>
                <li>Use automated tools (bots, scrapers) without authorization to access Fiscolia.</li>
                <li>Sell, transfer, or resell access to Fiscolia services.</li>
                <li>Violate applicable laws or regulations in your jurisdiction or elsewhere.</li>
                </ul>
                </p>

                <h2>9. Modification and Termination</h2>
                <p><strong>Service Modifications:</strong> The Fiscolia Team reserves the right to modify, suspend, or discontinue Fiscolia (or any part thereof) at any time with or without notice.

                <strong>Account Termination:</strong> The Fiscolia Team may terminate or suspend your account immediately, without prior notice, for:
                <ul>
                <li>Violation of these Terms or any applicable laws.</li>
                <li>Unauthorized access or security breach attempts.</li>
                <li>Fraudulent or abusive behavior.</li>
                <li>Non-payment of any applicable fees.</li>
                <li>Prolonged inactivity as determined by the Fiscolia Team.</li>
                </ul>

                Upon termination, your right to use Fiscolia will cease immediately. You remain responsible for any outstanding obligations.
                </p>

                <h2>10. Data Deletion and Privacy</h2>
                <p>You have the right to request deletion of your User Account and associated data. Upon deletion:
                <ul>
                <li>Your personal information will be removed from active systems within 30 days.</li>
                <li>Backup and archived data may remain for up to 24 months for security, legal, and recovery purposes.</li>
                <li>Anonymized data used for model training may be retained indefinitely.</li>
                <li>You should maintain personal backups of any data you wish to preserve.</li>
                </ul>

                Please refer to our Privacy Policy for complete information about data retention, deletion, and your rights.
                </p>

                <h2>11. Third-Party Links and Services</h2>
                <p>Fiscolia may contain links to third-party websites or services for additional financial data, market information, or banking integrations. The Fiscolia Team:
                <ul>
                <li>Does not endorse or assume responsibility for third-party content, privacy policies, or practices.</li>
                <li>Is not liable for any damage or loss caused by your access to third-party services.</li>
                <li>Recommends reviewing third-party privacy policies before sharing information with them.</li>
                </ul>

                Your use of third-party services is governed by their terms and policies, not by these Terms.
                </p>

                <h2>12. Limitation of Liability</h2>
                <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                <ul>
                <li>The Fiscolia Team shall not be liable for any special, incidental, indirect, consequential, or punitive damages, including but not limited to loss of profits, data loss, business interruption, or personal injury, arising from your use of or inability to use Fiscolia.</li>
                <li>The total liability of the Fiscolia Team shall not exceed the amount you have actually paid to us in the past 12 months, or €100 if you have not made any payments.</li>
                <li>Some jurisdictions do not allow the exclusion of certain types of liability, so the above limitation may not fully apply to you.</li>
                </ul>
                </p>

                <h2>13. "AS IS" and "AS AVAILABLE" Disclaimer</h2>
                <p>Fiscolia is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. The Fiscolia Team:
                <ul>
                <li>Makes no representations that Fiscolia is error-free, uninterrupted, or meets your specific requirements.</li>
                <li>Does not warrant the accuracy, reliability, or currency of financial data or AI-generated insights.</li>
                <li>Disclaims all implied warranties including merchantability, fitness for a particular purpose, and non-infringement.</li>
                <li>Does not guarantee that the Fiscolia platform, servers, or data are free from viruses, malware, or harmful components.</li>
                <li>Is not responsible for loss of data, unauthorized access, or service interruptions beyond our reasonable control.</li>
                </ul>

                Use of Fiscolia is at your own risk.
                </p>

                <h2>14. Governing Law and Dispute Resolution</h2>
                <p><strong>Governing Law:</strong> These Terms are governed by the laws of France, without regard to conflicts of law principles.

                <strong>Dispute Resolution:</strong> If you have any concerns or disputes regarding Fiscolia:
                <ul>
                <li>First, contact the Fiscolia Team through our support channels to attempt informal resolution.</li>
                <li>If the dispute cannot be resolved informally, you agree to submit to the exclusive jurisdiction of French courts.</li>
                <li>You waive any objection to venue and inconvenient forum.</li>
                </ul>
                </p>

                <h2>15. Regulatory Compliance</h2>
                <p><strong>EU Compliance:</strong> If you are a European Union resident, you benefit from mandatory consumer protections under EU law. The Fiscolia Team complies with GDPR and other EU data protection regulations.

                <strong>GDPR Rights:</strong> You have the right to access, correct, delete, or request portability of your personal data as outlined in our Privacy Policy.

                <strong>Security and Data Protection:</strong> The Fiscolia Team implements security measures including:
                <ul>
                <li>Encrypted data transmission and storage.</li>
                <li>ModSecurity Web Application Firewall protection.</li>
                <li>Hashicorp Vault for secure credential management.</li>
                <li>Regular security monitoring through Elasticsearch and Kibana logging.</li>
                <li>Authentication security protocols.</li>
                </ul>
                </p>

                <h2>16. Severability</h2>
                <p>If any provision of these Terms is found to be unenforceable or invalid, such provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force and effect.</p>

                <h2>17. Waiver</h2>
                <p>The failure of the Fiscolia Team to enforce any provision of these Terms does not constitute a waiver of such provision or the right to enforce it at any time in the future. Any waiver must be in writing and signed by an authorized representative of the Fiscolia Team.</p>

                <h2>18. Entire Agreement</h2>
                <p>These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and the Fiscolia Team regarding your use of Fiscolia and supersede all prior agreements and understandings.</p>

                <h2>19. Changes to These Terms</h2>
                <p>The Fiscolia Team reserves the right to modify these Terms at any time. We will notify you of material changes by:
                <ul>
                <li>Posting the updated Terms on this page with a new "Last Updated" date.</li>
                <li>Sending you an email notification (if you have provided an email address).</li>
                <li>Displaying a prominent notice on the Fiscolia platform.</li>
                </ul>

                Your continued use of Fiscolia after changes become effective constitutes your acceptance of the updated Terms. If you do not agree to the new terms, please stop using Fiscolia.
                </p>

                <h2>20. Contact Us</h2>
                <p>If you have any questions about these Terms and Conditions, please contact the Fiscolia Team:
                <ul>
                <li><strong>Website:</strong> https://localhost:8083/</li>
                <li><strong>Support Pages:</strong> Available through the Fiscolia platform</li>
                <li><strong>Jurisdiction:</strong> France</li>
                </ul>
                </p>
        </div>
    )

}

export default TermsOfService
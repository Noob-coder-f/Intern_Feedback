import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../public/GraphuraLogo.png";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("definitions");

  const sections = [
    { id: "definitions", title: "1. Definitions" },
    { id: "scope", title: "2. Internship Scope and Responsibilities" },
    { id: "duration", title: "3. Duration and Schedule" },
    { id: "stipend", title: "4. Stipend" },
    { id: "ip", title: "5. Intellectual Property" },
    { id: "confidentiality", title: "6. Confidentiality" },
    { id: "conduct", title: "7. Conduct and Compliance" },
    { id: "termination", title: "8. Termination" },
    { id: "warranties", title: "9. Warranties and Representations" },
    { id: "liability", title: "10. Limitation of Liability" },
    { id: "indemnification", title: "11. Indemnification" },
    { id: "force-majeure", title: "12. Force Majeure" },
    { id: "governing-law", title: "13. Governing Law and Dispute Resolution" },
    { id: "miscellaneous", title: "14. Miscellaneous" },
    { id: "acknowledgment", title: "15. Acknowledgment" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Graphura Logo"
              className="w-32 h-auto object-contain"
            />
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/signup"
              className="px-6 py-2 font-semibold border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 font-semibold bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-500 max-w-3xl mx-auto">
              These Terms and Conditions govern the internship program offered by Graphura India Private Limited.
              By accepting an internship offer or participating in our program, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-32 bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Quick Navigation</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id);
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-purple-100 text-purple-700 font-semibold border-l-4 border-purple-600'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                {/* Introduction */}
                <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-gray-700">
                    These Terms and Conditions ("Terms") govern the internship program offered by 
                    <strong> Graphura India Private Limited</strong> ("Graphura," "we," "us," or "our"), 
                    a digital marketing agency with its principal place of business at Gurgaon, Haryana, 
                    to individuals accepted as interns ("Intern," "you," or "your").
                  </p>
                </div>

                {/* Terms Content */}
                <div className="prose prose-lg max-w-none">
                  {/* Section 1: Definitions */}
                  <section id="definitions" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">1. Definitions</h2>
                    <div className="space-y-4 text-gray-700">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <strong>1.1 Internship:</strong> The temporary, unpaid, or paid (as specified in the Offer Letter) work experience program provided by Graphura, involving tasks related to digital marketing, logo design, website development, or administrative support.
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <strong>1.2 Offer Letter:</strong> The document issued by Graphura outlining the internship's scope, duration, stipend (if any), and other specific terms.
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <strong>1.3 Confidential Information:</strong> Any non-public information disclosed to the Intern by Graphura, including but not limited to client data, business strategies, marketing plans, proprietary methods, and project details.
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <strong>1.4 Work Product:</strong> Any materials, designs, code, content, or deliverables created by the Intern during the Internship, whether individually or collaboratively.
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <strong>1.5 Ideas:</strong> Any concepts, designs, strategies, or creative proposals developed or presented by Graphura or the Intern during the Internship.
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Internship Scope */}
                  <section id="scope" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">2. Internship Scope and Responsibilities</h2>
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">2.1 Scope:</h3>
                        <p>Graphura shall provide the Intern with training and work experience in areas such as social media management (e.g., content creation for platforms like Instagram, LinkedIn), logo design, website development, or other tasks as outlined in the Offer Letter.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">2.2 Intern Responsibilities:</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Perform assigned tasks diligently, professionally, and in accordance with Graphura's instructions.</li>
                          <li>Adhere to Graphura's policies, work hours, and workplace guidelines.</li>
                          <li>Maintain regular communication with the assigned supervisor and report progress as required.</li>
                          <li>Use Graphura's equipment, software, and resources solely for internship-related tasks.</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">2.3 No Employment Relationship:</h3>
                        <p>The Internship does not constitute an employment relationship. The Intern is not entitled to employee benefits, including but not limited to salary, leave, insurance, or provident fund contributions, unless otherwise specified in the Offer Letter.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">2.4 Training and Supervision:</h3>
                        <p>Graphura shall provide reasonable training and supervision to support the Intern's learning objectives, but the Internship is primarily for educational purposes.</p>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Duration */}
                  <section id="duration" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">3. Duration and Schedule</h2>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong>3.1 Duration:</strong> The Internship shall commence on the date mentioned in the Offer Letter and continue for the period specified in the Offer Letter, unless terminated earlier in accordance with Section 8.
                      </div>
                      <div>
                        <strong>3.2 Schedule:</strong> The Intern shall work the hours and days specified in the Offer Letter, subject to reasonable adjustments by Graphura. Any remote work arrangements must be pre-approved in writing.
                      </div>
                      <div>
                        <strong>3.3 Extensions:</strong> Any extension of the Internship requires mutual written agreement between Graphura and the Intern.
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Stipend */}
                  <section id="stipend" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">4. Stipend (if applicable)</h2>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong>4.1 Stipend:</strong> If a stipend is offered, it shall be as specified in the Offer Letter, payable monthly via bank transfer to the Intern's designated account as per the bank details provided by the Intern to Graphura.
                      </div>
                      <div>
                        <strong>4.2 Taxes:</strong> The Intern is responsible for all taxes applicable to the stipend, and Graphura may deduct taxes as required by law.
                      </div>
                      <div>
                        <strong>4.3 No Additional Compensation:</strong> The Intern shall not be entitled to overtime pay, bonuses, or other compensation beyond the stipulated stipend (if any).
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Intellectual Property */}
                  <section id="ip" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">5. Intellectual Property</h2>
                    <div className="space-y-4 text-gray-700">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <strong>5.1 Ownership of Work Product:</strong> All Work Product created by the Intern during the Internship, whether individually or collaboratively, shall be the sole and exclusive property of Graphura. The Intern hereby assigns all rights, title, and interest in the Work Product, including copyrights, trademarks, and other intellectual property rights, to Graphura.
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <strong>5.2 Protection of Graphura's Ideas:</strong> All Ideas developed or presented by Graphura, or by the Intern in connection with the Internship, remain the exclusive property of Graphura. The Intern shall not use, reproduce, modify, disclose, or exploit such Ideas without Graphura's prior written consent. Unauthorized use of Graphura's Ideas constitutes a material breach of these Terms, entitling Graphura to seek injunctive relief, damages, and other legal remedies.
                      </div>
                      <div>
                        <strong>5.3 Pre-Existing Materials:</strong> If the Intern incorporates any pre-existing materials into the Work Product, the Intern grants Graphura a perpetual, royalty-free, worldwide license to use such materials for Graphura's business purposes. The Intern warrants that such materials do not infringe third-party rights.
                      </div>
                      <div>
                        <strong>5.4 Portfolio Use:</strong> Graphura may include the Intern's Work Product in its portfolio or marketing materials, subject to confidentiality obligations. The Intern may not use or display Work Product or Graphura's Ideas in their portfolio without Graphura's prior written consent.
                      </div>
                    </div>
                  </section>

                  {/* Section 6: Confidentiality */}
                  <section id="confidentiality" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">6. Confidentiality</h2>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong>6.1 Obligation:</strong> The Intern shall maintain the confidentiality of all Confidential Information and shall not disclose it to third parties or use it for any purpose other than performing internship tasks, without Graphura's prior written consent.
                      </div>
                      <div>
                        <strong>6.2 Duration:</strong> This obligation shall survive the termination of the Internship for a period of 3 years.
                      </div>
                      <div>
                        <strong>6.3 Exceptions:</strong> Confidential Information does not include information that is publicly available through no fault of the Intern, independently developed, or lawfully received from a third party without restriction.
                      </div>
                      <div>
                        <strong>6.4 Return of Materials:</strong> Upon termination or at Graphura's request, the Intern shall return or destroy all Confidential Information and Graphura property, including documents, devices, and digital files.
                      </div>
                    </div>
                  </section>

                  {/* Section 7: Conduct and Compliance */}
                  <section id="conduct" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">7. Conduct and Compliance</h2>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong>7.1 Professional Conduct:</strong> The Intern shall act professionally, refrain from discriminatory or harassing behavior, and comply with Graphura's code of conduct and workplace policies.
                      </div>
                      <div>
                        <strong>7.2 Compliance with Laws:</strong> The Intern shall comply with all applicable laws, including those related to intellectual property, data protection, and workplace safety.
                      </div>
                      <div>
                        <strong>7.3 No Solicitation:</strong> During the Internship and for 1 year after termination, the Intern shall not solicit Graphura's clients, employees, or other interns for business or employment opportunities without Graphura's written consent.
                      </div>
                      <div>
                        <strong>7.4 Data Protection:</strong> The Intern shall handle any personal data accessed during the Internship in accordance with Graphura's data protection policies and applicable laws, including the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023.
                      </div>
                    </div>
                  </section>

                  {/* Section 8: Termination */}
                  <section id="termination" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">8. Termination</h2>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong>8.1 Termination by Graphura:</strong> Graphura may terminate the Internship immediately, with or without notice, for reasons including but not limited to:
                        <ul className="list-disc list-inside ml-6 mt-2">
                          <li>Material breach of these Terms, including unauthorized use of Ideas or breach of confidentiality.</li>
                          <li>Unsatisfactory performance, unprofessional conduct, or failure to follow instructions.</li>
                          <li>Violation of Graphura's policies or applicable laws.</li>
                          <li>Graphura's operational needs, such as project cancellation or resource constraints.</li>
                        </ul>
                      </div>
                      <div>
                        <strong>8.2 Termination by Intern:</strong> The Intern may terminate the Internship by providing 30 days' written notice to Graphura, unless otherwise specified in the Offer Letter.
                      </div>
                      <div>
                        <strong>8.3 Post-Termination Obligations:</strong> Upon termination, the Intern shall:
                        <ul className="list-disc list-inside ml-6 mt-2">
                          <li>Return all Graphura property and Confidential Information.</li>
                          <li>Cease using Graphura's resources, Ideas, or Work Product.</li>
                          <li>Comply with ongoing confidentiality and non-solicitation obligations.</li>
                        </ul>
                      </div>
                      <div>
                        <strong>8.4 No Compensation for Termination:</strong> The Intern shall not be entitled to compensation or damages for termination, except for any earned but unpaid stipend up to the termination date (if applicable).
                      </div>
                    </div>
                  </section>

                  {/* Section 9: Warranties and Representations */}
                  <section id="warranties" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">9. Warranties and Representations</h2>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong>9.1 Intern's Warranties:</strong> The Intern warrants that:
                        <ul className="list-disc list-inside ml-6 mt-2">
                          <li>They have the legal capacity to enter into these Terms.</li>
                          <li>All information provided to Graphura (e.g., educational qualifications) is accurate.</li>
                          <li>Their participation in the Internship does not violate any agreement with a third party.</li>
                          <li>Any materials provided by the Intern do not infringe third-party rights or violate applicable laws.</li>
                        </ul>
                      </div>
                      <div>
                        <strong>9.2 Disclaimer:</strong> Graphura provides the Internship on an "as-is" basis and does not guarantee specific outcomes, such as future employment, skill certification, or project completion.
                      </div>
                    </div>
                  </section>

                  {/* Section 10: Limitation of Liability */}
                  <section id="liability" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">10. Limitation of Liability</h2>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong>10.1 Cap on Liability:</strong> To the fullest extent permitted by law, Graphura's liability for any claim arising from or related to the Internship, whether in contract, tort, or otherwise, shall be limited to the total stipend paid to the Intern (if any).
                      </div>
                      <div>
                        <strong>10.2 Exclusion of Damages:</strong> Graphura shall not be liable for any indirect, consequential, incidental, special, or punitive damages, including but not limited to loss of opportunities, reputation, or data, even if advised of their possibility.
                      </div>
                      <div>
                        <strong>10.3 Third-Party Actions:</strong> Graphura shall not be liable for any claims arising from the Intern's actions, including but not limited to intellectual property infringement or misuse of client data.
                      </div>
                    </div>
                  </section>

                  {/* Section 11: Indemnification */}
                  <section id="indemnification" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">11. Indemnification</h2>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong>11.1 Intern Indemnity:</strong> The Intern shall indemnify, defend, and hold harmless Graphura, its officers, directors, employees, and agents from any claims, damages, liabilities, costs, or expenses (including reasonable legal fees) arising from:
                        <ul className="list-disc list-inside ml-6 mt-2">
                          <li>The Intern's breach of these Terms.</li>
                          <li>The Intern's negligence, willful misconduct, or violation of laws.</li>
                          <li>Any materials provided by the Intern that infringe third-party rights or contain unlawful content.</li>
                        </ul>
                      </div>
                      <div>
                        <strong>11.2 Procedure:</strong> Graphura shall promptly notify the Intern of any claim and allow the Intern to control the defense, provided Graphura may participate at its own expense.
                      </div>
                    </div>
                  </section>

                  {/* Section 12: Force Majeure */}
                  <section id="force-majeure" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">12. Force Majeure</h2>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong>12.1 Excused Performance:</strong> Graphura shall not be liable for delays or failure to provide the Internship due to events beyond its reasonable control, including but not limited to natural disasters, government actions, internet outages, or third-party platform failures.
                      </div>
                      <div>
                        <strong>12.2 Termination for Prolonged Force Majeure:</strong> If a force majeure event continues for more than 30 days, either party may terminate the Internship with written notice, without liability.
                      </div>
                    </div>
                  </section>

                  {/* Section 13: Governing Law and Dispute Resolution */}
                  <section id="governing-law" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">13. Governing Law and Dispute Resolution</h2>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong>13.1 Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of India.
                      </div>
                      <div>
                        <strong>13.2 Dispute Resolution:</strong> Any dispute arising from or in connection with these Terms shall be resolved through good-faith negotiations within 30 days. If unresolved, disputes shall be submitted to arbitration in Haryana, India, under the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted by a single arbitrator appointed by mutual agreement or, failing agreement, by the High Court. The arbitrator's decision shall be final and binding. Each party shall bear its own arbitration costs, and Graphura's liability shall be limited to the stipend paid to the Intern (if any). This clause does not prevent Graphura from seeking injunctive relief for equitable remedies.
                      </div>
                    </div>
                  </section>

                  {/* Section 14: Miscellaneous */}
                  <section id="miscellaneous" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">14. Miscellaneous</h2>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong>14.1 Entire Agreement:</strong> These Terms, together with the Offer Letter, constitute the entire agreement between Graphura and the Intern, superseding any prior agreements or understandings.
                      </div>
                      <div>
                        <strong>14.2 Amendments:</strong> Graphura may amend these Terms with 15 days' written notice to the Intern. Continued participation in the Internship constitutes acceptance of the amended Terms.
                      </div>
                      <div>
                        <strong>14.3 Severability:</strong> If any provision of these Terms is found invalid or unenforceable, the remaining provisions shall remain in effect.
                      </div>
                      <div>
                        <strong>14.4 Assignment:</strong> The Intern may not assign their rights or obligations under these Terms without Graphura's prior written consent. Graphura may assign its rights with notice to the Intern.
                      </div>
                      <div>
                        <strong>14.5 Notices:</strong> All notices shall be in writing and sent via email to Official@Graphura.in for Graphura and [Insert Intern's Email] for the Intern, or by registered post to the addresses provided. Notices are deemed received 24 hours after email transmission or 3 days after posting.
                      </div>
                      <div>
                        <strong>14.6 No Waiver:</strong> No waiver of any breach of these Terms shall constitute a waiver of any subsequent breach.
                      </div>
                      <div>
                        <strong>14.7 Survival:</strong> Sections 5 (Intellectual Property), 6 (Confidentiality), 7.3 (No Solicitation), 10 (Limitation of Liability), 11 (Indemnification), and 13 (Governing Law and Dispute Resolution) shall survive termination of the Internship.
                      </div>
                    </div>
                  </section>

                  {/* Section 15: Acknowledgment */}
                  <section id="acknowledgment" className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">15. Acknowledgment</h2>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                      <p className="text-gray-700 mb-4">
                        By signing below, the Intern acknowledges that they have read, understood, and agree to be bound by these Rules, Code of Conduct, Terms and Conditions.
                      </p>
                      <div className="border-t border-green-200 pt-4 mt-4">
                        <p className="text-sm text-gray-600">
                          <strong>Intern Signature:</strong> _________________________
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          <strong>Date:</strong> _________________________
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Important Notice */}
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mt-8">
                    <h3 className="font-bold text-purple-900 mb-2">Important Notice</h3>
                    <p className="text-purple-800 text-sm">
                      These terms are legally binding. Please read them carefully before accepting any internship offer. 
                      If you have any questions, contact us at <strong>Official@Graphura.in</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img
                src={logo}
                alt="Graphura Logo"
                className="w-28 h-auto object-contain"
              />
            </div>
            <div className="flex space-x-6">
              <Link to="/signup" className="text-gray-400 hover:text-white transition-colors">
                Sign In
              </Link>
              <Link to="/register" className="text-gray-400 hover:text-white transition-colors">
                Register
              </Link>
              <Link to="/feedback" className="text-gray-400 hover:text-white transition-colors">
                Feedback
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Graphura India Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
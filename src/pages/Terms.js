import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { HelmetProvider } from 'react-helmet-async';
import $ from 'jquery';
import Main from '../layouts/Main';
import media_query_values from '../data/MediaQuery';
import NavigationLight from '../components/Template/NavigationLight';
import Footer from '../components/Template/Footer';


class Terms extends Component {

    constructor(props) {
        super(props);
        this.screenImageLetter = '';
    }


    render()
    {
        const {isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isPortrait,isRetina} = JSON.parse(this.props.deviceType);

        if (isMobile && isPortrait) this.screenImageLetter = '_m';
        else if (isMobile && !isPortrait) this.screenImageLetter = '_d';

        else if (isTablet && isPortrait) this.screenImageLetter = '_t';
        else if (isTablet && !isPortrait) this.screenImageLetter = '_d';

        else if (isDesktopOrLaptop) this.screenImageLetter = '_d';
        else this.screenImageLetter = '_b';

        return <Main title={"Terms and Conditions"} description={"A bank of you"} >
            <HelmetProvider>
                <div className="row container-fluid">
                    <div className="layer-wrapper">
                        <NavigationLight />

                          <div className="terms-layer-1">
                            <div className="terms-group">

                              <div className="terms-section-1">
                                <div className="terms-nav-box-wrapper">
                                  <div className="terms-nav-box">
                                          <label>Content</label>
                                          <div>1. Terms of use</div>
                                          <div>2. Features of the VPD app</div>
                                          <div>3. Prohibited activities</div>
                                          <div>4. Privacy & confidential information</div>
                                          <div>5. Fees for using VPD app</div>
                                          <div>6. Transaction limitations</div>
                                          <div>7. Communication</div>
                                          <div>8. Our copyrighted materials & infringement claims</div>
                                          <div>9. Trademarks</div>
                                          <div>10. Right to preserve and disclose</div>
                                          <div>11. Issuance of passwords</div>
                                          <div>12. Transaction charge / rate</div>
                                          <div>13. Ownership of usage data</div>
                                          <div>14. Technology limitations and modifications</div>
                                          <div>15. Eligibility</div>
                                          <div>16. Dispute Resolution</div>
                                          <div>17. Entire Agreement</div>
                                  </div>
                                 </div>
                              </div>

                              <div className="terms-section-2">
                                  <div className="terms-section-2-tabs">
                                      <label><Link to="/privacy" >Privacy Policy</Link></label>
                                      <label>Terms and Conditions</label>
                                  </div>

                                  <label className="terms-section-2-header">Terms and Conditions</label>

                                  <div className="terms-section-2-content">
                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-1">1. Terms of use</label>
                                          <label>
                                              <span>Agreement</span>
                                              Please read the following information carefully before using the VPD Mobile Application (VPD App). VPD reserves the right, in its sole discretion, to modify, alter or otherwise update these Terms of Use at any time, and, by continuing to use the App, you accept the TERMS AND ANY MODIFICATION. Any changes will be effective only after the effective date of the change and will not affect any dispute arising prior to the effective date of the change.
                                              <span>Administration</span>
                                              VPD is a digital bank built to serve both local and diaspora’s personal and business financial needs, covering basic digital bank account set up to developer platform integrations. VPD is creating a unified banking platform that is both secure and accessible regardless of region. Users enjoy the best rate, zero multi-layer charges, borderless banking, and personalized access to fast FX service and assorted savings/investment products on-the-go real life and time. The VPD App is administered by VPD TECHNOLOGY LIMITED (herein known as VPD) a company duly incorporated under the Companies and Allied Matters Act, Laws of Federation, 1990 with RC NO: 1740403 whose registered address is located at 33A, Abba Johnson Crescent, Akora Villas, off Adeniyi Jones Ikeja, Lagos, Nigeria.
                                              <span>Disclaimer of Warranties; Limitation of Liability</span>
                                              THIS SITE, THE VPD APPLICATION AND ITS CONTENTS ARE PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. These warranties are hereby excluded to the fullest extent permissible by law. UNDER NO CIRCUMSTANCES SHALL VPD, , ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS OR LICENSORS BE LIABLE FOR ANY DIRECT OR INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES (including, without limitation, damages for lost profits, revenue, sales, goodwill, use or content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) THAT MAY ARISE FROM YOUR USE OF, OR INABILITY TO USE, THIS SITE OR THE VPD APPLICATION EVEN IF VPD HAS BEEN ADVISED AS TO THE POSSIBILITY OF SUCH DAMAGES OR COULD HAVE FORESEEN SUCH DAMAGES.
                                              <span>Indemnification</span>
                                              You agree to indemnify and hold VPD and its affiliates, directors, officers, employees, and agents harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys’ fees, incurred in connection with or arising from any third-party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the VPD App or Services or any wilful misconduct on your part.
                                              <span>Risk</span>
                                              Before using the VDP App, you should ensure that that you understand the risks involved in buying, selling or trading Digital Assets as such markets are known to be volatile and prices can fluctuate significantly, which could result in sudden and significant increases or decreases in the value of your assets. You should carefully assess whether your financial situation and risk tolerance is suitable for buying, selling or trading Digital Assets. You accept and agree that you are solely responsible for any decision to buy, sell, trade or otherwise hold or deal with cryptocurrency. Under no circumstances does any information contained on the VPD App, or provided to you through your VPD Account or by any employee, agent or affiliate of VPD, constitute financial, investment or other professional advice. You are solely responsible for any decision to store, buy or sell cryptocurrency, and such decisions should take into account your risk tolerance and financial circumstances.
                                              <span>Platform Usage</span>
                                              To use the VPD App, an account will need to be created by you on a mobile device running an operating system supported by us. Our Technical Support and Customer service team will proceed to verify the account to ensure due legal compliance and adequate Customer due diligence and Enhanced due diligence procedure. You agree to complete account verification procedures upon our request. If you refuse to complete your account verification process, your account may be suspended regardless of any or all pending or unsettled transactions. When creating and managing your account, all information provided must be true, accurate and complete. Providing false information of any kind may result in the freezing or termination of your account. You must update all account information when a change occurs. You are responsible for all activities carried out on the platform and all activities that occur under the account and any other actions taken in connection with it. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind suffered as a result of such acts or omissions. To log back into the VPD App, you will need to enter a unique PIN or biometric authentication. You may be notified about changes in the security information.
                                          </label>
                                      </div>

                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-2">2. Features of the VPD app </label>
                                         <label>
                                             <span>Exclusive Deals and Accounts </span>
                                             VPD is able to offer you deals and rewards that are specially tailored to your spending habits and aspirations. VPD sends users personalized push notifications of novel deals and offers based on the users’ account history, activities and search. With this, users do not miss out on any exciting opportunities in the financial marketplace.
                                             <span>Supervised Accounts/Sub-accounts</span>
                                             VPD provides a platform that enables the monitoring of accounts and gives customers the ability to create an account to manage their spending. We understand that customers might need a helping hand with their finances, with our supervised accounts, you will be able to track spending in real-time whilst being able to block spending on other unwanted transactions.
                                             <span>Budgets, Manage and Track</span>
                                             With the ability to set tailored budgets and with our real-time tracking and push notification you can always be in control and manage your spending and disbursements. VPD helps Users meet their financial goals.
                                             <span>Borderless Transactions </span>
                                             With a VPD virtual Card, you can spend and transact from different areas effortlessly without hindrances. VPD offers you the ability to hold up to 25 different currencies at any time, giving you the flexibility, you need.
                                             <span>Investment Marketplace</span>
                                             Our marketplace gives you the ability to choose the best product or service that suits your needs from our list of renowned banking partners across the world. VPD provides users on-the-go access to investment/savings products of local & international financial houses, disrupting the traditional KYC, barriers and proprietary exercise & cost associated with these kinds of investment products. The Users can easily switch and opt-out of any investment products and pick any new choice of their or decides not to participate anymore.
                                             <span>Wallet to Wallet Transfers </span>
                                             Paying one VPD User to another can be done at the touch of a button. The funds are free to send, even to friend overseas, and receive instantly. VPD wallet Users can make a transfer to other Users’ of VPD real-time and real-life, in ease with no barrier and multiple fees.
                                             <span>Instant Currency Exchange</span>
                                             Transparently exchange currencies at the best rates, eliminating unreasonable, hidden FX fees and commissions. FX is made easy for Users of VPD account, because they get the best rate and exchange real-time, anywhere in the world, with a personalized experience and security.
                                             <span>Multi-Currency Accounts</span>
                                             VPD offers its users ability to hold up to 25 currencies, with actual GBP, EUR, & USD bank accounts. With VPD account Users access any esoteric currencies globally and can as well have an account in any of these currencies as wish and convert back at their most convenience.
                                         </label>
                                      </div>

                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-3">3. Prohibited activities </label>
                                          <label>
                                              VPD enforces a strict policy against money laundering, terrorism, funding and conducting of businesses with entities/individuals situated in territories subject to trade sanction and/or individually subject to such sanctions. In addition to other prohibitions as set forth in this Agreement, you are prohibited from using the Platform or its services in any of the following scenarios;
                                              <br/><br/>
                                              For any unlawful purpose;<br/>
                                              To solicit others to perform or participate in any unlawful acts;<br/>
                                              To violate any international, federal, state or local government regulations, rules, laws, or local ordinances;<br/>
                                              To infringe upon or violate our intellectual property rights or the intellectual property rights of others;<br/>
                                              To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability;<br/>
                                              To submit false or misleading information; To upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related mobile application, other mobile applications, or the Internet;<br/>
                                              To collect or track the personal information of others;<br/>
                                              To spam, phish, pharm, pretext, spider, crawl, or scrape;<br/>
                                              For any obscene or immoral purpose; or<br/>
                                              To interfere with or circumvent the security features of the Service or any related mobile application, other mobile applications, or the Internet.<br/>
                                              Report of unauthorized or unusual credit card or bank account use to your issuing bank or other issuing authority, including but not limited to chargebacks, Complaint of fraudulent transaction or claims, abusing the reversal process by a Buyer through their bank. Consistently failing to follow the Resolutions process before filing a complaint with their issuing bank or other issuing authority. Sending unsolicited email using the VPD account to facilitate fraudulent activity. Violating this Terms of use in any way. Returning an incoming Electronic Funds Transfer due to insufficient funds in the bank account or an incorrect bank routing/institution and/or account number. Using an anonymizing proxy. Receiving excessive complaints about your account, business or service. Submitting altered verification documents.
                                              <br/><br/>
                                              We reserve the right to terminate your use of the Service or any related mobile application for violating any of the prohibited uses.
                                              <br/><br/>
                                              You furthermore agree that any amounts paid to us by you shall not be proceeds from illegal activities. Should it be suspected and or/ proven by us that the Service is being used for any of the activities outlined above, we reserve the right to immediately suspend or terminate the Services available to you with or without notice and additionally reserve the right to report your conduct to the relevant legal authorities for investigation and possible prosecution.
                                              <br/><br/>
                                              You agree that we will not be responsible or liable to you or any third party for discontinuing the service or for terminating or suspending your access to the Service.
                                          </label>
                                      </div>

                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-4">4. Privacy and confidential information</label>
                                          <label>
                                              VPD’s policy is to protect the confidentiality of the individually identifiable information that you provide, and we limit access to that information only to those with a need to know. The collection of information is covered by the provisions of the Constitution of the Federal Republic of Nigeria 1999 (As amended) and other extant laws and regulations regulating the use and management of personal data, inclusive but not limited to the Nigeria Data Protection Regulation (“Data Protection Regulations”). VPD deem it fit to inform it’s users of the use of any details availed by the user in others to provide payment services, manage your account, conduct research, and analysis, to prevent and detect fraud and to comply with our regulatory obligations. We adhere strictly to the Nigerian Data and Anti Money Laundering policy and in compliance, our operators keep record of merchant data, for not more than 5 years and as well have a data protection officer who ensures that Users’ records are kept in line with all relevant data protection policies.
                                              <br/><br/>
                                              In line with the Regulatory Guidеlinеѕ on Intеrnаtiоnаl Money Trаnѕfеr Sеrviсеѕ, you may need to provide the following documents for KYC/verification purposes;
                                              <br/><br/>
                                              Your name, address, phone, email and other contact details and similar information; Your age and occupation;
                                              Financial information (for example, information about your Bank Verification Number and full bank account numbers);
                                              Documents to verify your identity, occupation and income, such as photographs or copies of government IDs and other similar materials; and
                                              Date of Incorporation/ Registration of the company/ business for companies/ businesses as customers,
                                              Statement of account/ liquidity status,
                                              Source of funds of the business (if required)
                                              For cross border transactions, international legal regulations require for the users to provide the following additional documents:
                                              <br/><br/>
                                              A government-issued ID (like your driver’s license or passport)<br/>
                                              Proof of address (like a recent utility bill or bank statement)<br/>
                                              The reason for the transfer<br/>
                                              SSN (Social Security Number)<br/>
                                              Users should note that VPD reserves the right to request for any other additional documents when required or deemed necessary.
                                              <br/><br/>
                                              VPD’s policy is to prohibit the unlawful disclosure of your individually identifiable information. VPD will not release your name or otherwise publicize any information unless: (a) you grant VPD permission to do so; or (b) VPD is requested or required to do so by law.
                                              <br/><br/>
                                              To learn more about how VPD protects your individually identifiable information, such as your name and address, please contact us at: legal@vpd.money
                                         </label>
                                      </div>

                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-5">5. Fees for using VPD app</label>
                                          <label>
                                              Creating an Account on the VPD App is free. VPD charges fees for Services, notice of applicable charges will be sent to you for using any Service to which a fee applies. See table below for further details. Our fees are subject to change and VPD reserves the right to adjust its pricing and fees and at any time.


                                          </label>
                                      </div>


                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-6">6. Transaction limitations</label>
                                          <label>
                                              For local transfers, our Users shall not exceed transaction limits expected of them the regulated allowable limit of the outbound money transfer of US$2,000 or its equivalent per transaction, subject to periodic review by the Central Bank of Nigeria. All in-bound money transfers to Nigeria shall only be disbursed to beneficiaries through bank accounts or mobile money wallets.
                                              <br/><br/>
                                              For international transfers, the maximum amount allowed to be transferred varies according to jurisdictions. In most regions, to prevent and discourage crime and tax avoidance, large transfers such as funds above $10,000 may be reported to the appropriate regulatory authority such as the IRS in case of the USA for regulatory checks.
                                          </label>
                                      </div>


                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-7"> 7. Communication</label>
                                          <label>
                                              You consent to receiving electronic communication from VPD relating to your account. We may communicate with you via e-mail, text message (SMS), push notifications in the platform or through other methods. You may opt out of receiving non-transactional communications, by following the directions in our e-mail to “Unsubscribe” from our mailing list, or by sending an e-mail request to us.
                                          </label>
                                      </div>


                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-8">8. Our copyrighted materials & infringement claims</label>
                                          <label>
                                              The copyrights in all text, images, screens and other materials provided on this Site (collectively, the “Materials”) are owned by VPD and/or by third parties. Except as provided below, none of the Materials may be copied, distributed, displayed, downloaded, or transmitted in any form or by any means without the prior written permission of VPD or the copyright owner. Unauthorized use of any Materials contained on this Site may violate copyright laws, trademark laws, and/or other regulations and statutes.
                                          </label>
                                      </div>

                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-9"> 9. Trademarks</label>
                                          <label>
                                              Trademarks and service marks that may be referred to on this Site are the property of VPD or their respective owners. Nothing on this Site should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademark without our written permission.
                                          </label>
                                      </div>

                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-10"> 10. Right to preserve and disclose</label>
                                          <label>
                                              VPD may preserve all information you provide. VPD may also disclose information you provide if required to do so by law or in the good faith belief that such preservation or disclosure is reasonably necessary to: (a) complete your transaction; (b) comply with legal process; (c) enforce these Terms of Use; (d) respond to claims that any materials on this Site violate your rights or the rights of third parties.
                                          </label>
                                      </div>

                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-11"> 11. Issuance of passwords</label>
                                          <label>
                                              When these Terms of Use has been accepted and agreed to by you, a password that you create will enable you to access the features in the App. Passwords may not be shared or used by more than one individual. It is each individual user’s responsibility to remember and protect such password and not to disclose it to any other person.
                                          </label>
                                      </div>

                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-12">12. Transaction charge / rate </label>
                                          <label>
                                              VPD transaction rate will be seen on the dashboard and may be updated from time to time in accordance with the prevailing market price and also, as determined by the vendors performing various services. With respect to transactions in which remittance requests were made, the users may retrieve their past transaction history by logging into the VDP App.
                                          </label>
                                      </div>

                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-13"> 13. Ownership of usage data
                                          </label>
                                          <label>
                                              <table>
                                                  <thead>
                                                  <tr><th>Personal Data</th><th>Fee Charged</th></tr>
                                                  </thead>
                                              <tbody>
                                                  <tr>
                                                      <td>Funding via card</td>
                                                      <td>1% capped at N80</td>
                                                  </tr>

                                                  <tr>
                                                      <td>Funding via USSD</td>
                                                      <td>Free</td>
                                                  </tr>

                                                  <tr>
                                                      <td>Funding via Bank Transfer</td>
                                                      <td>Free</td>
                                                  </tr>

                                                  <tr>
                                                      <td>Transfer to Bank account</td>
                                                      <td>Free (for personal accounts)</td>
                                                  </tr>

                                                  <tr>
                                                      <td>Virtual Card request</td>
                                                      <td>Free</td>
                                                  </tr>

                                                  <tr>
                                                      <td>Request payment</td>
                                                      <td>Free</td>
                                                  </tr>

                                                  <tr>
                                                      <td>SMS charge</td>
                                                      <td>N3.50 / SMS</td>
                                                  </tr>

                                                  <tr>
                                                      <td>Account maintenance fee</td>
                                                      <td>N10 / Month</td>
                                                  </tr>

                                                  <tr>
                                                      <td>Convenience fee</td>
                                                      <td>N100</td>
                                                  </tr>

                                                  <tr>
                                                      <td>Stamp duties</td>
                                                      <td>N50 on every funding received from N10,000 and above (except from a VPD account)</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                          </label>
                                      </div>

                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-14">14. Technology limitations and modifications</label>
                                          <label>
                                              VPD will make reasonable efforts to keep the VPD App operational. However, certain technical difficulties or maintenance may, from time to time, result in temporary interruptions. VPD reserves the right, periodically and at any time, to modify or discontinue, temporarily or permanently, functions and features of the VPD App, with or without notice, all without liability to you for any interruption, modification, or discontinuation of the VPD App and its Services or any function or feature thereof. You understand and agree that we have no obligation to maintain, support, upgrade, or update the Service, or to provide all or any specific content through the VPD App.
                                          </label>
                                      </div>

                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-15"> 15. Eligibility</label>
                                          <label>
                                              VPD requires that users must be of legal age to enter into agreements (typically, at least eighteen (18) years of age or older).
                                          </label>
                                      </div>

                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-16"> 16. Dispute Resolution</label>
                                          <label>
                                              Parties shall use their best endeavours to amicably settle any dispute or difference of opinion arising from or in connection with this Agreement through mutual discussions.
                                              <br/><br/>
                                              Where the Parties are unable to resolve the dispute through mutual agreement within 30 days from receiving the Notice of Dispute, the dispute shall be submitted to arbitration in the English language in accordance with the Arbitration and Conciliation Act Cap. A18, Laws of the Federation of Nigeria 2004, or any amendment thereto.
                                              <br/><br/>
                                              The place of arbitration shall be Lagos State, Nigeria and there shall be a sole arbitrator who shall be appointed jointly by the parties. Where the parties fail or are unable to jointly agree on the appointment, they shall approach the Lagos Court of International Arbitration to appoint a sole arbitrator who shall be competent to adjudicate on the issue in dispute. The arbitral award shall be final and binding between the Parties.
                                          </label>
                                      </div>

                                      <div className="terms-section-2-content-pod">
                                          <label id="terms-17"> 17. Entire Agreement</label>
                                          <label>
                                              You acknowledge that you have read and understood these Terms of Use and that you agree to be bound by its terms and conditions. You further agree that these Terms of Use, together with the Privacy Policy, which is hereby incorporated into these Terms of Use, constitute the complete and exclusive statement of the agreement between you and VPD and supersedes all other proposals or prior agreements oral or written, and any other communications relating to the subject matter of these Terms of Use. If any provision of these Terms of Use is found unenforceable, it shall not affect the validity of these Terms of Use, which shall remain valid and enforceable according to its terms. Contact Us. For further information, or inquiries about these Terms of Use, please contact legal@vpd.money.
                                          </label>
                                      </div>

                                  </div>
                              </div>

                            </div>
                          </div>

                        <Footer />
                    </div>
                </div>
            </HelmetProvider>
        </Main>;
    }

    componentDidMount()
    {
        $(document).on("click",".terms-nav-box div",function () {
            let index = $(this).index();
            $('html, body').animate({
                scrollTop: $(".terms-section-2-content #terms-"+index).offset().top-15
            });
        });

    }

};




function attachDeviceTypeHook(Component) {
    return function WrappedComponent(props) {
        const isBigScreen = useMediaQuery(media_query_values.bigscreen)
        const isDesktopOrLaptop = useMediaQuery(media_query_values.desktop)
        const isTablet = useMediaQuery(media_query_values.tablet)
        const isMobile = useMediaQuery(media_query_values.mobile)
        const isPortrait = useMediaQuery(media_query_values.portrait)
        const isRetina = useMediaQuery(media_query_values.retina)
        let objVals = JSON.stringify({isBigScreen, isDesktopOrLaptop, isTablet, isMobile, isPortrait, isRetina});

        return <Component {...props} deviceType={objVals} />;
    }
}

export default attachDeviceTypeHook(Terms);

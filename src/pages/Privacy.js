import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { HelmetProvider } from 'react-helmet-async';
import $ from 'jquery';
import Main from '../layouts/Main';
import media_query_values from '../data/MediaQuery';
import NavigationLight from '../components/Template/NavigationLight';
import Footer from '../components/Template/Footer';


class Privacy extends Component {

    constructor(props) {
        super(props);
        this.screenImageLetter = '';
    }


    render()
    {
        const {isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isPortrait,isRetina} = JSON.parse(this.props.deviceType);

        if (isMobile && isPortrait) this.screenImageLetter = '_m';
        else if (isMobile && !isPortrait) this.screenImageLetter = '_d';

        else if (isTablet && isPortrait) this.screenImageLetter = '_m';
        else if (isTablet && !isPortrait) this.screenImageLetter = '_d';

        else if (isDesktopOrLaptop) this.screenImageLetter = '_d';
        else this.screenImageLetter = '_b';

        return <Main title={"Privacy Policy"} description={"A bank of you"} >
            <HelmetProvider>
                <div className="row container-fluid">
                    <div className="layer-wrapper">
                        <NavigationLight />

                        <div className="privacy-layer-1">
                            <div className="privacy-group">

                                <div className="privacy-section-1">
                                    <div className="privacy-nav-box-wrapper">
                                        <div className="privacy-nav-box">
                                            <label>Content</label>
                                            <div>1. Introduction</div>
                                            <div>2. How we obtain your personal data</div>
                                            <div>3. Why do we retain your personal data</div>
                                            <div>4. Use of your personal data</div>
                                            <div>5. Sharing your personal data</div>
                                            <div>6. How does VPD protect customer personal data?</div>
                                            <div>7. What about cookies?</div>
                                            <div>8. Non-personally identifiable data.</div>
                                            <div>9. Data sharing</div>
                                            <div>10. Your choices and rights</div>
                                            <div>11. Accuracy and access</div>
                                            <div>12. Changes to this privacy policy</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="privacy-section-2">
                                    <div className="privacy-section-2-tabs">
                                        <label>Privacy Policy</label>
                                        <label><Link to="/terms" >Terms and Conditions</Link></label>
                                    </div>

                                    <label className="privacy-section-2-header">Privacy Policy</label>

                                    <div className="privacy-section-2-content">
                                        <div className="privacy-section-2-content-pod">
                                            <label id="privacy-1">1. Introduction</label>
                                            <label>
                                                The purpose of this privacy and data protection policy is to provide you with information concerning our services, the types of personal data we are provided or obtain ourselves through visits to or use of our Website, how we use that information, whether we disclose the information provided to us to others and the options you have with regard to the use of and correction of that information. VPD provides its partners and suppliers with a variety of fulfillment, support and E-commerce related services. Some of these services may be provided through sites bearing our partners and suppliers names and trademarks. VPD, its subsidiaries, marketing partners and affiliated companies respect the privacy of our partners and suppliers of products or services, clients and their customers.
                                                <br/><br/>
                                                This privacy and data protection policy does not apply to websites or services that is not own or control by VPD, including websites or services of other VPD users. Our goal in handling personal data provided to us in connection with the processing of transactions on our Website is to comply with applicable data privacy and protection laws and to offer users of our website notice, choice, consent, security, data integrity, access and enforcement with regard to personal data provided to us by individuals in conjunction with those transactions. BY CHOOSING TO CONTINUE TO USE OUR SERVICES, YOU ARE CONSENTING TO USE OF YOUR PERSONAL DATA AS CONTAINED IN OUR PRIVACY AND DATA PROTECTION POLICY. YOU CAN WITHDRAW YOUR CONSENT AT ANYTIME ON YOUR ACCOUNT SETTING PAGE.
                                            </label>
                                        </div>

                                        <div className="privacy-section-2-content-pod">
                                            <label id="privacy-2">2. How we obtain your personal data </label>
                                            <label>
                                                We may obtain your personal data when you use our services through the following: Registration and Verification: While registering on our site to establish an account, we will request for the necessary personal data to avail the services requested. Such personal data may include; name, website, telephone number, address, electronic mail address, business registration/incorporation certificates, identity card. We may as well request for additional personal data as you use our services. Transaction Data: When you transact using our services, we will request for the transaction details and all reasonable information regarding the transaction. This information may include; account name, account number, transaction amount, device usage, geolocation, IP, Email address, participant/recipient data. Third Party Sources: Depending on the nature of the services provided by VPD to our partners or suppliers, VPD may receive personal data either from you directly or from our partner or supplier who provides us with the personal data to fulfill a service to you on their behalf. Customer Support: When interacting with our customer service, you may be asked to provide us with additional personal data.
                                            </label>
                                        </div>

                                        <div className="privacy-section-2-content-pod">
                                            <label id="privacy-3">3. Why do we retain your personal data</label>
                                            <label>
                                                We retain your personal data to fulfill our legal and regulatory obligations. In the event that your account is closed, we reserve the right to retain and access the data for as long as required to comply with applicable laws.
                                            </label>
                                        </div>

                                        <div className="privacy-section-2-content-pod">
                                            <label id="privacy-4">4. Use of your personal data</label>
                                            <label>
                                                Some of the ways in which we will use the personal data provided us includes: to take, process or deliver your order, process or obtain payment or notify you of the status of your order; in connection with keys, access codes or other information as may be required to permit you to access our partners’ sites to receive products, updates or services; to provide it to industry and credit related organizations for security, credit or fraud prevention purposes; to register your purchase with the manufacturer or service provider for warranty, technical support or similar purposes; to pass to partner marketing affiliates in which you have requested enrollment during the purchase process; to facilitate the renewal of subscriptions for products or services; to provide you with technical support; to monitor service or purchasing patterns; to manage risk and protect the site.; to communicate to you; to provide you with service updates, announcements, and other product offerings; to send you, with your consent, newsletters or promotional emails or undertake other promotional activities; and to permit you to participate in online surveys and polls, assuming you voluntarily agree to provide such information in connection with these surveys and polls. The personal data we receive may as well be transferred to other countries or regions for processing. We will undertake to obligate any person or entity receiving such information to process any such information in accordance with this Privacy and data protection policy and in accordance with applicable laws. By submitting your order either to our partner or to us, you consent to the use of your personal data as set forth above and the transfer of that data as outlined.
                                            </label>
                                        </div>

                                        <div className="privacy-section-2-content-pod">
                                            <label id="privacy-5">5. Sharing your personal data</label>
                                            <label>
                                                We may share your personal data for the following reasons: In some circumstances, we may share your personal data with our partners or suppliers in order for them to fulfill a service to us for your benefit or directly to you. The personal data may include but not limited to your name, mailing address, phone number, and other data required to provide you with the products, services or support requested. We will share your personal data subject to your consent and/or direction with third parties. We may share your personal data with the companies/organizations we engage to provide services to us in connection with your transaction. Such engagement includes: to process credit card payments, deliver packages, send mail, analyze data, provide marketing aid and assistance, provide customer service, and otherwise provide services to us to enable us to serve you and enhance our services. These companies/organizations may have access to personal data as required to permit them to perform their obligations to us. We will require these companies/organizations to undertake to protect such personal data and to only use it in accordance with applicable laws and for the purposes for which they are specifically engaged. We may also provide links from our Website to third party websites who may provide services to you directly and/or on our behalf.
                                                <br/><br/>
                                                <span>THE PRIVACY POLICIES OF THESE THIRD PARTY SITES MAY BE DIFFERENT FROM OUR PRIVACY POLICIES AND WILL GOVERN ANY TRANSACTIONS UNDERTAKEN ON THAT SITE. VPD AND SUCH THIRD PARTY SITES HAVE THEIR INDEPENDENT DETERMINED PRIVACY AND DATA PROTECTION POLICIES, NOTICES AND PROCEDURES FOR PERSONAL DATA THEY HOLD AND ARE EACH INDEPENDENT DATA CONTROLLER AND NOT JOINT DATA CONTROLLERS.</span>
                                                <br/><br/>
                                                We therefore urge you to review the privacy policy of any site to which you are linked. The personal data we receive may be transferred other countries or regions for processing. We will undertake to obligate any person or entity receiving such personal data to process any such data in accordance with this privacy and data protection policy and in accordance with applicable laws. VPD will not share or use your personal data in ways unrelated to the purpose for which you provided us the personal data, without providing you the opportunity to consent to such unrelated uses. At the time you provide your personal data, we will offer you a choice as to whether or not you wish to receive further communications about special offers, product information or other marketing messages. We may provide this data to our business partners and suppliers. If you choose not to receive these communications, we will not use your personally identifiable data for this purpose.
                                                <br/><br/>
                                                <span>Will VPD Give Me Notice of Requests for My Personal Data Made By Law Enforcement or Governmental Agencies?</span>
                                                <br/><br/>
                                                No. VPD may be required to respond to subpoenas, court orders or be asked to respond to other legitimate requests for your personal data from appropriate law enforcement or governmental authorities. In such situations, we will release personally identifiable data to third parties and organizations when we believe it is appropriate for us to do so in order to comply with the law or to protect against fraud, money laundering or terrorism financing. We will also release such personal data/information: to cooperate with law enforcement or other governmental investigations (without necessarily requiring the law enforcement or government agency requesting the information to formally serve us with a subpoena), to comply with all valid court orders or subpoenas, to protect our legal rights and those of our users; and/or when we believe it is needed for fraud protection and/or credit risk reduction. VPD also reserves the right to report to such entities any activities that we believe to be unlawful. Any report made to under this paragraph will be made without prior notice to you. In the event VPD merges with another entity, is acquired by another entity, or enters into a business combination with another entity, VPD may be required to disclose some or all of your personally identifiable data to that entity to continue serving you.
                                            </label>
                                        </div>


                                        <div className="privacy-section-2-content-pod">
                                            <label id="privacy-6">6. How does VPD protect customer personal data?</label>
                                            <label>
                                                Customers who use the VPD system are on a secure server which encrypts all of a customer’s personal data. This makes it difficult, if not impossible, for a third party to access or use your personal data in an unauthorized manner. VPD has developed its service with security as a top priority. We use firewalls to prevent access to information in our system and Secure Socket Layers (“SSL”) to encrypt your personal data and protect it from disclosure, destruction, modification or use.
                                            </label>
                                        </div>


                                        <div className="privacy-section-2-content-pod">
                                            <label id="privacy-7"> 7. What about cookies?</label>
                                            <label>
                                                If you do not want cookies in your browser, you may set your browser to reject cookies or to notify you when a website attempts to place a cookie in your browser.
                                            </label>
                                        </div>


                                        <div className="privacy-section-2-content-pod">
                                            <label id="privacy-8">8. Non-personally identifiable data.</label>
                                            <label>
                                                We may also collect other information which does not in and of itself identify a specific individual. This information includes IP addresses, search terms, domain names, and browser types or other similar information . We use this information to track usage and other patterns on our Websites
                                            </label>
                                        </div>

                                        <div className="privacy-section-2-content-pod">
                                            <label id="privacy-9"> 9. Data sharing</label>
                                            <label>
                                                VPD does not sell, trade or rent personal information to anyone. We will not use or share your personally identifiable data with others except those individuals or entities listed below which we have engaged to provide services to you, for those purposes set forth above and/or with third parties subject to your consent.
                                            </label>
                                        </div>

                                        <div className="privacy-section-2-content-pod">
                                            <label id="privacy-10"> 10. Your choices and rights</label>
                                            <label>
                                                Your choices regarding your personal data and the privacy practices includes: You may decline to provide your personal data when it is requested by VPD, certain services or all the services may however be unavailable to you. You may review your account settings and update your personal data directly or by contacting us. You have a choice as to whether or not you wish to receive further communications about special offers, product information or other marketing messages. You have the right to withdraw consent to our privacy and data protection policy. Please contact us if you wish to exercise any of your choices and/ or rights at
                                                support@vpd.money
                                                or
                                                digitalmedia@vpd.money
                                            </label>
                                        </div>

                                        <div className="privacy-section-2-content-pod">
                                            <label id="privacy-11"> 11. Accuracy and access</label>
                                            <label>
                                                VPD will provide you with the ability to access your personal data maintained on our system and permit you to review and correct that personal data or change your choices or preferences with regard to that personal data; for instance, whether or not you wish to be contacted about specials or new products. We reserve the right to protect our own or other’s confidential or personal data in connection with your review and correction and further reserve the right to charge you a reasonable fee for access to your personal data dependent on the nature and scope of your request and the difficulty in complying with your request. Note that if you wish to access all your personal data, certain security checks will be performed to ascertain your identity
                                            </label>
                                        </div>

                                        <div className="privacy-section-2-content-pod">
                                            <label id="privacy-12">12. Changes to this privacy policy</label>
                                            <label>
                                                VPD may revise this privacy and data protection policy from time-to-time. The revised privacy and data protection policy will become effective as of the published effective date. In the event that the revised version includes a substantial change, we will provide you with 30days prior notice via mail or phone numbers linked to users account.
                                                <span>List of third parties with whom VPD share your personal data</span>
                                                <table>
                                                    <thead>
                                                    <tr>
                                                        <th>Personal data</th>
                                                        <th>Purpose</th>
                                                        <th>Third-parties/Receiver</th>
                                                        <th>Reason</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Users name, business name, sponsors name, customers name</td>
                                                        <td>Communication</td>
                                                        <td>Estore SMS Limited</td>
                                                        <td>Sending transaction information and other SMS based communication.</td>
                                                    </tr>

                                                    <tr>
                                                        <td>User’s name; Purpose for payment;Bank account name;Bank account number;ATM cardless</td>
                                                        <td>Payment Services; Bank Funding; Withdrawal/Settlement</td>
                                                        <td>Banks; United Bank for Africa Plc, Guarantee Trust Bank Plc, WEMA Bank Plc, First City Monument Bank Plc, International Banks, Interswitch Limited. etc</td>
                                                        <td>Receipt of payments from users via non card payment options; For withdrawal processing and settlement services.</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Bank Verification Number (BVN); Drivers license details</td>
                                                        <td>ID Verification</td>
                                                        <td>Nigeria Inter-Bank Settlement Sysytem Plc</td>
                                                        <td>Identity verification for sponsors and businesses.</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Card details; IP; Email address</td>
                                                        <td>Transaction processing</td>
                                                        <td>Schemes- Master card and Visa; Unified payments- Interswitch; Acquirers, Gateways, Team-Apt, (Monnify), Nairabox and other Payment Processors.</td>
                                                        <td>For transaction processing and issues related to master card and visa card.</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Business registration/incorporation certificate details</td>
                                                        <td></td>
                                                        <td>Banks; United Bank for Africa Plc, Guarantee Trust Bank Plc, WEMA Bank Plc, First City Monument Bank Plc; Corporate Affairs Commission; Federal Road Safety Commission, and other local issuing authorities.</td>
                                                        <td></td>
                                                    </tr>

                                                    <tr>
                                                        <td>Card details; Name; IP; Device information; Bank account details; Email address; Phone number; Address; Bank Verification Number (BVN); Identity card; GPS; Co-ordinates, Browser information; Other transaction details.</td>
                                                        <td>Reporting</td>
                                                        <td>Nigerian Financial Intelligent Unit (NFIU); Economic and Financial Crimes Commission (EFCC); International Crimnal Police Organization (INTERPOL); Nigeria Police.</td>
                                                        <td>Reporting of suspicious fraudulent activities and breach/violation of regulatory provisions.</td>
                                                    </tr>


                                                    </tbody>
                                                </table>
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
        $(document).on("click",".privacy-nav-box div",function () {
            let index = $(this).index();
            $('html, body').animate({
                scrollTop: $(".privacy-section-2-content #privacy-"+index).offset().top-15
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

export default attachDeviceTypeHook(Privacy);

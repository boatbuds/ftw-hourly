import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Yogatime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Enjoy the nature</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Enjoy the nature.</p>
            </div>

            <div className={css.contentMain}>
              <h3>Our Purpose</h3>
              <p>
                 From a young age our founding team has always been passionate about the outdoors. From camping and fishing in the Caribbean islands to hunting, kayaking, and boating in North America, we love it ALL! We also love sharing experiences and teaching our friends and family about the outdoors. 
              </p>

              <p>
              We started to provide our own kayak and snorkeling tours, fishing charters and others; however, we were always faced with the costs and time to build and design a website,  search engine optimization (SEO), and ongoing maintenance issues. There was always something to fix when we would rather be outside!
              </p>

             {/* <!-- <h3 className={css.subtitle}>Are you a yoga teacher?</h3> --> */}

              <p>
              We have also traveled a bit and noticed challenges when searching for tours, activities and gear:
              <li>Outdoor activities and gear are not cheap and its hard to price compare online.</li>
              <li>Too many websites to dig and sift through for the right outdoor tour, guide, class or rental within our budget.</li>
              <li>Finding outdoor fun and gear in a convenient location.</li>
              </p>

              <p>
              <li>That is when the OwnOutdoors idea was born and we built the platform to help startups, small businesses, hotels, travel agents, and others for FREE along with improving the user experience for finding activities, tours and rentals:</li>             
               <li>No subscription, listing, or membership fees!</li>
              <li>Start FAST: Setup your store / profile and begin transacting globally in minutes and gain online presence immediately. </li>
              <li>No website required to get started:  reduce your upfront costs and time to build a website, design and maintenance issues. </li>
              <li>Online bookings: it’s important to have a “Book Now” option especially when you are away or doing tours and cannot pick up the phone.</li>
              <li>Secure online payment processing: we have partnered with Stripe a PCI compliant industry leader in processing online payments. Stripe & OwnOutdoors</li>
              <li>Need insurance: visit our partners at Outdoor Insurance Group.</li>
              <li>Generate additional niche customer traffic to your store and website.</li>
              <li>Electronic rental agreements and waivers.</li>
              <li>And much more!</li>
              </p>
              <h3>Our Purpose</h3>
              <p>Connecting people to the Outdoors, encouraging active and healthy lifestyles, and providing businesses a FREE platform for marketing, transacting and increase their visibility to customers.
              We strive daily to be the best "one-stop shop" for Outdoor Activities, Adventure & Gear - Anywhere! Our goal is to provide the community a FREE online marketplace that anyone can conveniently Rent, Buy and/or Sell outdoor activities, experiences, tours, services (e.g. guides, captains, etc.), classes and equipment. 
Hotels, Travel Agents, Visitor Centers and others are provided a FREE concierge portal and earn 10% on each booking!
We provide individuals, startups, and small businesses a FREE platform to help with profit margins and generating traffic. With this in mind, our sellers can typically offer our customers a better price.
We also believe an active community is a healthy community. We love to see the younger generation getting outdoors and taking a break from the internet and video games to enjoy the Outdoors and bond with their friends and family!</p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;

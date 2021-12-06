import React from 'react';

import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';
import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from './AboutPage.module.css';
import image from './pexels-arthouse-studio-4530462.jpg'; 



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
        description: 'About Notebased',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>NoteBased is revolutionizing how you buy your produce.</h1>
          <img className={css.coverImage} src={image}/>

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>"We've built NoteBased to help people connect with home-grown harvest."</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Connecting people with harvest grown right in their backyard! Whether you are a casual buyer or buying in high volume, you can find the right product on Notebased.             
                </h2>

              <p>
                Buying produce can be stressful: you don't know where it's from, what preservatives and additives have been added. With NoteBased, we want to make sure you're transaction will go smoothly: from browsing and checking the stock, to making the order and payment, to the review of the sellers. And we hope you'll be so convinced that you'll soon start selling your produce to make new buyers happy!
              </p>

              <h3 className={css.subtitle}>Do you have produce to sell?</h3>

              <p>
                NoteBased offers you a great way to earn some extra cash! If you're growing your own produce, 
                why not sell them to your community? And if you already have laid your eyes on a different product you want next, selling something from your garden is a great way to get money to support your community and local farmers!
              </p>

              <h3 id="contact" className={css.subtitle}>
                Why we created NoteBased?
              </h3>
              <p>
               NoteBased was created by farmers, we realized the problem with large corporations. NoteBased's goal is to 
               connect people in their community with each other. Revolutionizing how people buy and sell produce. 
               With NoteBased, you know exactly where your food is coming from. 
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
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

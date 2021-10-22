
import React from 'react';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';


import StaticPage from '../../containers/StaticPage/StaticPage';
import TopbarContainer from '../../containers/TopbarContainer/TopbarContainer';

import css from '/Users/baldevgill/notebased.com/ftw-product/src/containers/FAQPage/FAQPage.module.css';

const FAQPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>
          <h1>Frequently Asked Questions</h1>

            <div>
            <h3>What is NoteBased?</h3>
            <p>Answer: Lorem ipsum</p>
            <h3>Why did we create NoteBased?</h3>
            <p>Answer: </p>
            <h3>Who is NoteBased for?</h3>
            <p>Answer: </p>
            <h3>How does NoteBased work?</h3>
            <p>Answer: </p>
            </div>

        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;
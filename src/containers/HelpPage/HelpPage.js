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

import css from './HelpPage.module.css';

const HelpPage = () => {
    // prettier-ignore
    return (
      <StaticPage>
        <LayoutSingleColumn>
          <LayoutWrapperTopbar>
            <TopbarContainer />
          </LayoutWrapperTopbar>
  
          <LayoutWrapperMain className={css.mainWrapper}>
            <h1>NoteBased is here to help!</h1>
  
            <div>
              <h2>How can our team help you</h2>
              <p>If you are having any issues or have any concerns you would like addressed, please don't hesitate to contact help@notebased.com.
                Our team would love to assist you!
              </p>
            </div>
          </LayoutWrapperMain>
  
          <LayoutWrapperFooter>
            <Footer />
          </LayoutWrapperFooter>
        </LayoutSingleColumn>
      </StaticPage>
    );
  };
  
  export default HelpPage;
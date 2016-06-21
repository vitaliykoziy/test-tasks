import React, { PropTypes } from 'react';
import { ItemTemplate } from './itemTemplate';

export const AppContent = ({ items }) => (
  <div className="content">
    <section className="content-width">
      {
        items.map((item, index) => <ItemTemplate {...item} key={index} />)
      }
    </section>
  </div>
);

AppContent.propTypes = {
  items: PropTypes.array.isRequired,
};

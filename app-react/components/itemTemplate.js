import React, { PropTypes } from 'react';

export const ItemTemplate = ({
  row,
  column,
  color,
  order,
}) => (
  <div
    className="item"
    style={{ backgroundColor: color, order }}
  >
    <div className="context">
      Hello test {row}.{column}
    </div>
  </div>
 );

ItemTemplate.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
};

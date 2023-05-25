import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './lp-item.module.css';

const Li = ({ children, className }) => {
  return <li className={cn(styles.li, className)}>{children}</li>;
};

Li.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Li;

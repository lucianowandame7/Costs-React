import styles from './Container.module.css';
import { Outlet } from 'react-router-dom';

function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      <Outlet /> {props.children}
    </div>
  );
}

export default Container;

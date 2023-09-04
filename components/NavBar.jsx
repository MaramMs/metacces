import React from 'react';
import styles from '../styles/components/subMenu.module.css'
import SubMenu from './SubMenu';

const NavBar = ({IconsRight,IconsLeft}) => {

    console.log(IconsLeft , 'left');
    console.log(IconsRight , 'right');

  return (
<ul className={styles.navList}>
  {IconsLeft?.map((icon, index) => {
    return (
      <li key={index} className={`${styles.icon} ${styles[icon.position]}`}>
        <div
          className={styles.iconContainer}
          style={{
            background: 'rgb(112 112 112 / 34%)',
            width: '62.61px',
            height: '62.61px',
            opacity: '100%',
            borderRadius: '50%', // Use 50% for a perfect circle
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #707070',
          }}
        >
          <img src={icon.image} alt="" />
        </div>
      </li>
    );
  })}

{IconsRight?.map((icon, index) => {
    return (
      <li key={index} className={`${styles.icon} ${styles[icon.position]}`}>
        <div
          className={styles.iconContainer}
          style={{
            background: 'rgb(112 112 112 / 34%)',
            width: '62.61px',
            height: '62.61px',
            opacity: '100%',
            borderRadius: '50%', // Use 50% for a perfect circle
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #707070',
          }}
        >
          <img src={icon.image} alt="" />
        </div>
      </li>
    );
  })}
</ul>

  )
}

export default NavBar
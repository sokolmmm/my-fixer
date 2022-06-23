/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Profile.module.scss';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import AccountInfo from './AccountInfo/AccountInfo';

function Profile() {
  const [activeTab, setActiveTab] = React.useState(true);
  const setPersonalInfo = () => {
    if (activeTab === false) {
      setActiveTab(true);
    }
  };

  const setAccauntInfo = () => {
    if (activeTab === true) {
      setActiveTab(false);
    }
  };

  return (
    <section className={styles.profileWrapper}>
      <div className={styles.toggleTab}>
        <button
          onClick={setPersonalInfo}
          type="button"
          className={activeTab ? styles.activeTab : null}

        >
          PERSONAL INFORMATION
        </button>
        <button
          onClick={setAccauntInfo}
          type="button"
          className={activeTab ? null : styles.activeTab}
        >
          ACCOUNT INFORMATION
        </button>
      </div>
      { activeTab ? <PersonalInfo /> : <AccountInfo />}
    </section>
  );
}

export default Profile;

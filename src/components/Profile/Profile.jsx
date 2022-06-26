/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Profile.module.scss';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import AccountInfo from './AccountInfo/AccountInfo';

function Profile() {
  const [activeTab, setActiveTab] = React.useState(true);

  const setPersonalInfoActive = () => {
    if (!activeTab) {
      setActiveTab(true);
    }
  };

  const setAccauntInfoActive = () => {
    if (activeTab) {
      setActiveTab(false);
    }
  };

  return (
    <section className={styles.profileWrapper}>
      <div className={styles.toggleTab}>
        <button
          onClick={setPersonalInfoActive}
          type="button"
          className={activeTab ? styles.activeTab : null}
        >
          Personal Information
        </button>
        <button
          onClick={setAccauntInfoActive}
          type="button"
          className={!activeTab ? styles.activeTab : null}
        >
          Account Information
        </button>
      </div>
      {activeTab ? <PersonalInfo /> : <AccountInfo />}
    </section>
  );
}

export default Profile;

import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import CountryList from 'country-list-with-dial-code-and-flag';
import avatar from '../../../assets/images/avatar.png';
import styles from './PersonalInfo.module.scss';
import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import searchTitle from '../../../helpers/constants/searchTitle';

const initialValues = {
  photo: '',
  firstName: '',
  lastName: '',
  title: '',
  country: '',
  dialCode: '',
  mobilePhone: '',
  company: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

function PersonalInfo() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {() => (
        <Form className={styles.personalInformation}>
          <div className={styles.firstColumn}>
            <img className={styles.avatar} src={avatar} alt="avatar" />

            <FormikControl
              control="inputFile"
              label="Change photo"
              name="photo"
            />
          </div>
          <div className={styles.secondColumn}>
            <FormikControl
              control="inputWithLabel"
              type="text"
              label="First name"
              name="firstName"
            />

            <FormikControl
              control="inputWithLabel"
              type="text"
              label="Last name"
              name="lastName"
            />

            <FormikControl
              control="selectWithLabel"
              label="Title"
              name="title"
              options={searchTitle}
              optionValue="value"
              optionKey="id"
            />
          </div>
          <div className={styles.thirdColumn}>
            <FormikControl
              control="selectWithLabel"
              label="Country"
              name="country"
              options={CountryList}
              optionValue="name"
              optionKey="code"
            />
            <div className={styles.numberBlock}>
              <span> Phone Number</span>
              <FormikControl
                control="dependentSelect"
                label="Phone"
                name="dialCode"
                options={CountryList}
                optionKey="code"
                optionValue="flag"
                mainField="country"
                mainFieldKey="name"

              />

              <FormikControl
                control="dependentInput"
                type="tel"
                name="mobilePhone"
                items={CountryList}
                mainField="dialCode"
                mainFieldKey="flag"
                dependentFieldKey="dial_code"
              />
            </div>

            <FormikControl
              control="inputWithLabel"
              type="text"
              label="Company"
              name="company"
            />

            <GreenButton textBody="Save" />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PersonalInfo;

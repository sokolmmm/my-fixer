/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
import React from 'react';
import CountryList from 'country-list-with-dial-code-and-flag';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import avatar from '../../../assets/images/avatar.png';
import styles from './PersonalInfo.module.scss';
import searchTitle from '../../../helpers/constants/searchTitle';

import Base64 from '../../../helpers/base64';
import { updatePersonalInfo } from '../../../redux/user/asyncActions';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

function PersonalInfo() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  const initialValues = {
    photo: '',
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    country: userData.country || '',
    phoneNumber: userData.phoneNumber || '',
    title: userData.title || searchTitle[0],
    dialCode: '',
  };

  const onSubmit = async (values, actions) => {
    const { photo, dialCode, ...payload } = values;
    dispatch(updatePersonalInfo(payload));

    // if (photo) {
    //   const base64Photo = await Base64.encode(photo);
    //   dispatch(updatePhoto({ photo: base64Photo }));
    // }
  };

  return (
    <Formik enableReinitialize onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className={styles.personalInformation}>
          <div className={styles.firstColumn}>
            <img
              className={styles.avatar}
              alt="avatar"
              src={formik.values.photo[0] || userData.photo || avatar}
            />

            <FormikControl
              control="inputFile"
              label="Change photo"
              name="photo"
              setFieldValue={formik.setFieldValue}
            />
          </div>
          <div className={styles.secondColumn}>
            <FormikControl
              control="inputWithLabel"
              type="text"
              label="First name"
              name="firstName"
            />

            <FormikControl control="inputWithLabel" type="text" label="Last name" name="lastName" />

            <FormikControl
              control="selectWithLabel"
              label="Title"
              name="title"
              options={searchTitle}
              optionValue="value"
              optionKey="value"
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
                name="phoneNumber"
                items={CountryList}
                mainField="dialCode"
                mainFieldKey="flag"
                dependentFieldKey="dial_code"
                initialValue={userData.phoneNumber}
              />
            </div>

            <FormikControl control="inputWithLabel" type="email" label="E-mail" name="email" />
            {/* {error ? <div>{error}</div> : null} */}
            <GreenButton textBody="Save" />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PersonalInfo;

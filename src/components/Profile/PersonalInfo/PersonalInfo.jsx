import React from 'react';
import CountryList from 'country-list-with-dial-code-and-flag';

import { Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import DoubleServerError from '../../common/Forms/Errors/DoubleServerError/DoubleServerError';
import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import defaultAvatar from '../../../assets/images/avatar.png';
import searchTitle from '../../../helpers/constants/searchTitle';
import styles from './PersonalInfo.module.scss';

import { updatePersonalInfo, updatePhoto } from '../../../redux/user/asyncActions';
import { selectUser } from '../../../redux/user/selectors';
import Avatar from '../../common/Avatar/Avatar';

function PersonalInfo() {
  const dispatch = useDispatch();

  const { userData, errors, statuses } = useSelector(selectUser);

  const { updatePhotoStatus } = statuses;
  const { updatePersonalInfoError, updatePhotoError } = errors;

  const [base64Photo, setBase64Photo] = React.useState();
  const [dialCodeValue, setDialCodeValue] = React.useState('');

  React.useEffect(() => {
    const code = CountryList.find((el) => el.name === userData.country);
    if (code) {
      setDialCodeValue(code.flag);
    }
  }, [userData.phoneNumber]);

  const initialValues = {
    photo: userData.photo,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    country: userData.country,
    phoneNumber: userData.phoneNumber,
    title: userData.title,
    dialCode: dialCodeValue,
  };

  const onSubmit = async (values) => {
    const { photo, dialCode, ...payload } = values;

    if (
      initialValues.firstName !== values.firstName
      || initialValues.lastName !== values.lastName
      || initialValues.email !== values.email
      || initialValues.country !== values.country
      || initialValues.phoneNumber !== values.phoneNumber
      || initialValues.title !== values.title
    ) {
      await dispatch(updatePersonalInfo(payload));
    }

    if (base64Photo) {
      await dispatch(updatePhoto({ photo: base64Photo }));
      setBase64Photo('');
    }
  };

  return (
    <Formik initialValues={initialValues}>
      {(formik) => (
        <Form className={styles.personalInformation}>
          <div className={styles.firstColumn}>
            <div className={styles.avatarBlock}>
              <Avatar
                visibleCondition={updatePhotoStatus === 'loading'}
                imageSrc={base64Photo || userData.photo || defaultAvatar}
              />
            </div>

            <FormikControl
              control="inputFile"
              label="Change photo"
              name="photo"
              setFieldValue={formik.setFieldValue}
              setBase64Photo={setBase64Photo}
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
                additionalField="country"
              />
            </div>

            <FormikControl control="inputWithLabel" type="email" label="E-mail" name="email" />

            <GreenButton textBody="Save" onButtonClick={onSubmit} values={formik.values} />

            <DoubleServerError
              firstError={updatePersonalInfoError}
              secondError={updatePhotoError}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PersonalInfo;

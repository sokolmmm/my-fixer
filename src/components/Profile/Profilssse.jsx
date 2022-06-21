// /* eslint-disable max-len */
// /* eslint-disable no-unused-vars */
// import React from 'react';
// import {
//   ErrorMessage, Field, Form, Formik,
// } from 'formik';
// import * as Yup from 'yup';
// import styles from './Profile.module.scss';
// import avatar from '../../assets/images/avatar.png';
// import TextError from '../common/form/TextError/TextError';
// import Navbar from '../common/Navbar/Navbar';
// import MainHeader from '../common/Headers/MainHeader/MainHeader';

// const select = [
//   { name: 'red', color: 'red' },
//   { name: 'green', color: 'green' },
// ];

// const initialValues = {
//   email: '',
// };

// const validationSchema = Yup.object({
//   email: Yup.string().email('Invalid email address').required('Required'),
// });

// function Profile() {
//   return (
//     <div className={styles.profileWrapper}>
//       <MainHeader />
//       <main>
//         <section>
//           {/* <div className={styles.toggle}>
//             <a href="s">PERSONAL INFORMATION </a>
//             <a href="s">ACCOUNT INFORMATION</a>
//             </div>
//             <div>
//             <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             >
//             {(formik) => (
//               <Form className={styles.passRecoveryForm}>
//               <div>
//               <Field type="file" id="file" name="file" />
//               </div>
//               <div>
//               <Field
//               type="text"
//               id="firstName"
//               name="firstName"
//               placeholder="First name"
//               />
//                     <Field
//                       type="text"
//                       id="lastName"
//                       name="lastName"
//                       placeholder="Last name"
//                       />

//                       <Field as="select" id="title" name="title">
//                       <option value="mr">Mr</option>
//                       <option value="mrs">Mrs</option>
//                       </Field>
//                       </div>
//                   <div>
//                   <Field as="select" id="title" name="title">
//                   <option value="mr">Mr</option>
//                   <option value="mrs">Mrs</option>
//                   </Field>
//                   <Field as="select" id="color" name="color">
//                   {select.map((el) => (
//                         <option value={el.color}>{el.name}</option>
//                         ))}
//                         </Field>
//                         </div>
//                         1
//                         <div>
//                         <ErrorMessage name="email" component={TextError} />
//                         </div>
//                         </Form>
//                         )}
//                         </Formik>
//                       </div> */}
//         </section>
//       </main>
//       <Navbar className={styles.navbar} />
//     </div>
//   );
// }

// export default Profile;

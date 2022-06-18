import React from 'react';
import styles from './Profile.module.scss';

function Profile() {
  return (
    <div className={styles.profileWrapper}>
      <header>
        <div>
          <a href="/home">Home</a>
          <a href="/profile">My Profile</a>
        </div>
        <h5>Faruh Bernandez</h5>
      </header>
      <nav>
        <a href="/home">
          <svg
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.645 10.6461L7.84532 16.5296C7.81877 16.5391 7.79271 16.55 7.76748 16.5625C7.71176 16.5903 7.66063 16.6251 7.61475 16.6656C7.52167 16.7481 7.44924 16.856 7.40876 16.9821C7.39565 17.0234 7.38598 17.0662 7.38041 17.11C7.36353 17.2391 7.38237 17.3663 7.42973 17.48C7.44973 17.5281 7.4748 17.5735 7.5043 17.6158C7.50528 17.6158 7.50446 17.6161 7.50462 17.6161C7.60016 17.7526 7.74322 17.8557 7.91627 17.8968H7.9166C7.91709 17.8969 7.91742 17.8969 7.91775 17.8969C7.91824 17.8971 7.9184 17.8973 7.91873 17.8973C7.91955 17.8974 7.91972 17.8974 7.92021 17.8976L15.6445 19.6866L24.3826 10.8112C24.1896 10.615 23.9015 10.5506 23.645 10.6461"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.3061 10.9354L15.568 19.8108L17.3295 27.6565C17.3295 27.657 17.3296 27.6572 17.3298 27.6578C17.3298 27.6583 17.3298 27.6585 17.33 27.659C17.33 27.6593 17.3301 27.6595 17.3303 27.6602C17.3303 27.6603 17.3303 27.6603 17.3303 27.6603C17.3708 27.8363 17.472 27.9816 17.6064 28.0786C17.6066 28.0788 17.6067 28.0779 17.6069 28.0789C17.6484 28.1089 17.6933 28.1344 17.7406 28.1547C17.8526 28.2029 17.9776 28.2219 18.1048 28.2048C18.1479 28.1991 18.1901 28.1893 18.2308 28.1758C18.3548 28.1349 18.4612 28.0613 18.5425 27.9666C18.5821 27.9201 18.6164 27.8682 18.6437 27.8116C18.656 27.786 18.667 27.7595 18.6762 27.7326L24.4686 11.6846C24.5627 11.4241 24.4994 11.1315 24.3061 10.9354"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.4807 3.49153C24.1614 1.12264 20.0949 0.00393702 16.0305 0.341827C11.918 0.683545 8.04382 2.50632 5.12195 5.47409C-0.863851 11.554 -1.7019 21.0801 3.12958 28.1249C3.41194 28.5365 3.86373 28.7572 4.32307 28.7572C4.60969 28.7572 4.89925 28.6713 5.15227 28.4922C5.31401 28.3777 5.44544 28.2357 5.5454 28.0771C5.85267 27.5894 5.8602 26.9421 5.5141 26.4376C1.48839 20.5675 2.18764 12.6289 7.17693 7.56119C9.61225 5.0876 12.8407 3.56859 16.2676 3.2838C19.6569 3.00184 23.0453 3.93345 25.81 5.90669C26.3024 6.25807 26.9356 6.25557 27.4161 5.95064C27.5759 5.8491 27.719 5.71411 27.8342 5.54766C28.2955 4.88071 28.1372 3.96008 27.4807 3.49153"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.7673 7.73266C31.3048 7.06653 30.3984 6.90707 29.7423 7.37712C29.5784 7.49464 29.4455 7.64028 29.3459 7.80307C29.0468 8.29143 29.0455 8.93425 29.3922 9.43376C31.3423 12.2424 32.2646 15.6876 31.9898 19.1345C31.7117 22.6198 30.2157 25.9033 27.7776 28.3799C24.9642 31.2373 21.2336 32.7091 17.4781 32.7089C14.6438 32.7087 11.7952 31.8702 9.31774 30.1562C8.81776 29.8104 8.18111 29.8245 7.7044 30.1409C7.54872 30.2443 7.41009 30.3795 7.29882 30.5451C6.84702 31.2189 7.01859 32.137 7.68179 32.5959C10.6563 34.6535 14.074 35.6602 17.4767 35.6599C21.9814 35.6595 26.4582 33.8943 29.8324 30.4672C32.7577 27.4957 34.5526 23.5557 34.8863 19.3729C35.2161 15.2386 34.1083 11.1047 31.7673 7.73266"
              fill="white"
            />
            <mask
              id="mask0_1_226"
              style={{ masktype: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="26"
              height="27"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.11133 15.1025V2.19818H27.5678V15.1025V28.0069H2.11133V15.1025Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_1_226)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.66591 26.3675C1.64003 20.4976 2.33944 12.5588 7.32873 7.49112C9.76405 5.01753 12.9924 3.49835 16.4194 3.21356C19.8087 2.9316 23.1971 3.86337 25.9618 5.83645C26.4542 6.18816 27.0873 6.18533 27.5678 5.88056C24.8743 3.58274 21.4005 2.19806 17.6079 2.19806C9.0494 2.19806 2.11133 9.24515 2.11133 17.9381C2.11133 21.7681 3.45853 25.2778 5.69737 28.0069C6.00447 27.5193 6.01201 26.8722 5.66591 26.3675"
                fill="white"
              />
            </g>
          </svg>
        </a>
        <div>
          <ul>
            <li>
              <a href="/search">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5595 15.4322L13.6491 11.5219C13.6283 11.5011 13.6039 11.4866 13.5822 11.4672C14.3516 10.3001 14.8007 8.90292 14.8007 7.40043C14.8007 3.31327 11.4874 0 7.40036 0C3.31327 0 0 3.31327 0 7.40036C0 11.4874 3.31319 14.8007 7.40028 14.8007C8.90285 14.8007 10.2999 14.3516 11.4671 13.5822C11.4864 13.6038 11.5009 13.6282 11.5217 13.649L15.4322 17.5595C16.0196 18.1468 16.972 18.1468 17.5595 17.5595C18.1468 16.972 18.1468 16.0197 17.5595 15.4322ZM7.40036 12.2352C4.73004 12.2352 2.5654 10.0706 2.5654 7.40036C2.5654 4.73004 4.73011 2.5654 7.40036 2.5654C10.0705 2.5654 12.2352 4.73011 12.2352 7.40036C12.2352 10.0706 10.0705 12.2352 7.40036 12.2352Z"
                    fill="#8089A6"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/profile" className={styles.activeLink}>
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00024 9.59594C11.229 9.59594 13.0361 7.4478 13.0361 4.79795C13.0361 1.12334 11.2291 0 9.00024 0C6.77125 0 4.96442 1.12334 4.96442 4.79795C4.96446 7.4478 6.7713 9.59594 9.00024 9.59594Z"
                    fill="white"
                  />
                  <path
                    d="M17.912 16.6586L15.8758 11.9998C15.7827 11.7866 15.6191 11.6098 15.4155 11.5021L12.2555 9.83135C12.1858 9.79458 12.1015 9.80173 12.0388 9.8499C11.1451 10.5365 10.0942 10.8994 9.00004 10.8994C7.90565 10.8994 6.8549 10.5365 5.96116 9.8499C5.89834 9.80173 5.81396 9.79458 5.74428 9.83135L2.58455 11.5021C2.38083 11.6098 2.2174 11.7866 2.12418 11.9998L0.088054 16.6586C-0.0523244 16.9798 -0.0235536 17.3473 0.16504 17.6419C0.353546 17.9364 0.672575 18.1122 1.01848 18.1122H16.9815C17.3274 18.1122 17.6465 17.9363 17.835 17.6418C18.0235 17.3473 18.0524 16.9797 17.912 16.6586Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/messages">
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.9196 5.31729C2.1726 5.49863 2.93522 6.03719 4.20752 6.9327C5.47985 7.82821 6.45455 8.51773 7.13164 9.0013C7.20603 9.05431 7.36408 9.16953 7.60585 9.34713C7.84767 9.52485 8.0486 9.66847 8.20848 9.77801C8.36848 9.88752 8.5619 10.0104 8.78894 10.1464C9.0159 10.2822 9.22985 10.3844 9.43074 10.4521C9.63167 10.5203 9.81766 10.5541 9.98876 10.5541H9.99998H10.0112C10.1823 10.5541 10.3684 10.5203 10.5693 10.4521C10.7702 10.3844 10.9843 10.2821 11.2111 10.1464C11.4379 10.0102 11.6314 9.88748 11.7914 9.77801C11.9514 9.66847 12.1521 9.52485 12.394 9.34713C12.6358 9.16937 12.794 9.05431 12.8684 9.0013C13.5528 8.51773 15.294 7.28961 18.0915 5.31705C18.6347 4.93179 19.0884 4.46693 19.453 3.92277C19.8178 3.37885 20 2.80824 20 2.21127C20 1.71242 19.8232 1.28539 19.4697 0.930225C19.1163 0.574983 18.6977 0.397461 18.2142 0.397461H1.78564C1.21276 0.397461 0.771891 0.593922 0.463111 0.986845C0.15437 1.37985 0 1.87108 0 2.4605C0 2.93661 0.20468 3.45254 0.613846 4.00797C1.02297 4.56345 1.45837 4.99993 1.9196 5.31729Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M18.8838 6.5299C16.4435 8.20748 14.5906 9.51124 13.3259 10.4409C12.9018 10.7582 12.5578 11.0059 12.2936 11.1833C12.0294 11.3609 11.678 11.5423 11.2389 11.7274C10.8 11.9127 10.3909 12.0051 10.0114 12.0051H10H9.9888C9.60934 12.0051 9.20006 11.9127 8.76115 11.7274C8.32224 11.5423 7.97061 11.3609 7.70647 11.1833C7.44241 11.0059 7.09826 10.7582 6.6742 10.4409C5.66968 9.69278 3.82075 8.38894 1.12734 6.5299C0.703129 6.24291 0.327387 5.91395 0 5.5437V14.5443C0 15.0434 0.174776 15.4702 0.524523 15.8254C0.874192 16.1807 1.29465 16.3583 1.78575 16.3583H18.2144C18.7053 16.3583 19.1258 16.1807 19.4755 15.8254C19.8253 15.47 20 15.0434 20 14.5443V5.5437C19.68 5.90629 19.3081 6.23525 18.8838 6.5299Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="/calendar">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9792 4.34873C15.7576 4.34873 16.388 3.72254 16.388 2.94421V1.47277C16.388 0.693732 15.7576 0.0654297 14.9792 0.0654297C14.2016 0.0654297 13.5733 0.693732 13.5733 1.47277V2.94421C13.5733 3.72254 14.2016 4.34873 14.9792 4.34873Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M19.9796 2.50064H17.1473V3.21699C17.1473 4.39752 16.1872 5.3604 15.0039 5.3604C13.8191 5.3604 12.8619 4.39752 12.8619 3.21699V2.50064H7.14447V3.21699C7.14447 4.39752 6.18441 5.3604 5.00106 5.3604C3.81771 5.3604 2.85905 4.39682 2.85905 3.21629V2.50064L1.59539e-09 2.46472V20.3572H1.42918H18.5736L20 20.353L19.9796 2.50064ZM18.5736 18.9323H1.42918V7.5017H18.5736V18.9323Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M4.97838 4.34873C5.75671 4.34873 6.38572 3.72254 6.38572 2.94421V1.47277C6.38572 0.693732 5.75742 0.0654297 4.97838 0.0654297C4.20145 0.0654297 3.57245 0.693732 3.57245 1.47277V2.94421C3.57245 3.72254 4.20145 4.34873 4.97838 4.34873Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M9.39983 9.03589H7.14935V11.0229H9.39983V9.03589Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M5.87792 9.03589H3.62744V11.0229H5.87792V9.03589Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M13.0428 9.03589H10.7895V11.0229H13.0428V9.03589Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M16.416 9.03589H14.1655V11.0229H16.416V9.03589Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M9.39983 12.3356H7.14935V14.3212H9.39983V12.3356Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M13.0428 12.3356H10.7895V14.3212H13.0428V12.3356Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M16.416 12.3356H14.1655V14.3212H16.416V12.3356Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M9.39983 15.7013H7.14935V17.6869H9.39983V15.7013Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M5.82152 12.3356H3.57245V14.3212H5.82152V12.3356Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M5.82152 15.7013H3.57245V17.6869H5.82152V15.7013Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M13.0428 15.7013H10.7895V17.6869H13.0428V15.7013Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M16.416 15.7013H14.1655V17.6869H16.416V15.7013Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main> </main>
    </div>
  );
}

export default Profile;
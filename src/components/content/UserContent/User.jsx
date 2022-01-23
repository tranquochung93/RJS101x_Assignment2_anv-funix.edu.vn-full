import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AboutUser from "./AboutUser";
import styles from "./user.module.css";
import { STAFFS } from "../../dataUser/staffs";
function User({ STAFFS }) {

  return (
    <div className={styles.user}>
      <div style={{marginTop:'70px'}}>
        <h2>Nhân Viên</h2>
      </div>

      {/* render ui */}
      <div className={styles.aboutUser}>
        <ul className={styles.listItem}>
          {STAFFS &&
            STAFFS.map((user, index) => {
              return (
                <Link
                  to={`/staffs/${user.id}`}
                  key={index}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    className={styles.itemUser}
                    // onClick={() => handleGetAboutUser(user)}
                  >
                    <img
                      className={styles.avatarUser}
                      src="http://www.livedemolink.com/cric-profile/img/img1.jpg"
                    />
                    <div className={styles.nameUser}>
                      <h4>{user.name}</h4>
                    </div>
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
      {/* render about item */}
     
    </div>
  );
}

export default User;

import { useState, useEffect } from "react";

const UserInfo = () => {

   const name = localStorage.getItem('user_name')
   const email = localStorage.getItem('user_email')
   const picture = localStorage.getItem('user_picture')



     
     return(
        <div>
          <p>{name}</p>
          <p>{email}</p>
          <p>{picture}</p>

        </div>
     )


}

export default UserInfo
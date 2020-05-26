 import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import { IStore } from '../../app/models/store';
// import { IUser } from '../../app/models/user';

//  const Profile:React.FC= ()=> {
//     const [users, setUser] = useState<IUser>();
//     let currentUser =  useSelector((store: IStore) => store.currentUser);
//     console.log('currentUser profile' + currentUser)
//     useEffect(() => {
//         if(currentUser !== undefined && currentUser !== null){
//             var users:IUser ={ 
//                 displayName: currentUser.displayName,
//                 userName: currentUser.userName,
//                 token: currentUser.token,
//                 organisation: currentUser.organisation
//                 error: currentUser.error;
                
//             }
//             console.log('users' + {users})
//              setUser(users);
//         }
//     }, [])
// console.log('profile' + users)

//     return (
//         <div>
//        <p>Username:{users?.userName}</p> 
            
//         </div>
//     )
// }

// export default Profile

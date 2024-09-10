import { initializeApp } from "firebase/app";
import { Children, createContext, useEffect, useState } from "react";
const AuthContext = createContext{} ,

function AuthContextPRovider(Children){
    const [user,setuser] = useState({
        islogin:false,
        userinfo:{},
    })

    const [loading,setLoading] = useState(true)

    function onAuthChanged(user){
      setuser(user);
      if(initializing) setLoading(false)
       
    }
    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthChanged);
        return subscriber
    },[])
    return(
       <AuthContextPRovider value={{user,setuser}}>
        {loading?(
          <div className="w-full h-96 flex justify-center items-center"><Spinner /></div>
       ):(
        Children
       )
    }
    </AuthContextPRovider> 
    )
}
export default AuthContextPRovider
import React, { useState } from "react";
import { Bbutton } from "../../components/B2BButton";
import { BInput } from "../../components/B2BInput";
import { AuthWrapper } from "../../templates/AuthWrapper";
import './index.css'
interface authProps {
    className?: string;
}

interface formDataProps{
    bzNm:string 
    usrNm:string 
    pwd:string
}
export const AuthPage: React.FC<authProps> = ({ className }) => {
   const [bzNm, setBzNm] = useState<string>('')
   const [usrNm, setusrNm] = useState<string>('')
   const [pwd, setPwd] = useState<string>('')
   const NextFunction = ()=>{
      const parms:formDataProps ={
        bzNm:bzNm,
        usrNm:usrNm,
        pwd:pwd
      }
      console.log(parms)
   }
    return (
        <AuthWrapper title="b2b_login" className={`${className}`}>
            <form className='flex w-full justify-center items-center content-center space-y-2 flex-col'>
               <BInput id='bzNm' name="bzNm" value={bzNm} setValue={setBzNm} placeHolder='Enter business name' type='text' label="Business Name"  />
               <BInput id='usrNm' name="usrNm" value={usrNm} setValue={setusrNm} placeHolder='Enter user name' type='text' label="User Name"  />
               <BInput id='pwd' name="pwd" value={pwd} setValue={setPwd} placeHolder='Enter password' type='password' label="Password"  />
               <Bbutton block disabled={usrNm===''||bzNm===''||pwd===''}  title="Login" NextFunction={()=>{NextFunction()}} />
            </form>
        </AuthWrapper>
    )
}
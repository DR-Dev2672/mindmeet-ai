import { Suspense } from "react";

const SignInPage = ()=>{
   return (
    <Suspense fallback={<div>Loading...</div>}>
        sign-in
    </Suspense>
   )
}

export default SignInPage;
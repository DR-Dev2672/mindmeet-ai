
import { Suspense } from "react";

const SignUpPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      Signup
    </Suspense>
  );
};

export default SignUpPage;
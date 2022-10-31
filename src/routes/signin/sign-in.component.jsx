import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoggleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef =await createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div>
      <h1>Sign-up</h1>
      <button onClick={logGoggleUser}>sign in with gogle pop up</button>
      <SignUpForm/>
    </div>
  );
};  

export default Signin;

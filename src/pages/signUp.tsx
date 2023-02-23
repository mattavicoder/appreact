import { NextPage } from "next"
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const SignUp: NextPageWithLayout = () => {

    return (
        <div>
            SignUp
        </div>
    )
}

export default SignUp;

SignUp.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <p>SignUpLayout</p>
            <div>
                {page}
            </div>
        </>
    )
}
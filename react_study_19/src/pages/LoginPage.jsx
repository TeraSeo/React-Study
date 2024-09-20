import LoginForm from "../components/forms/LoginForm";
import AuthContainer from "../components/containers/AuthContainer";

function LoginPage() {
    return (
        <AuthContainer>
            <LoginForm />
        </AuthContainer>
    );
}

export default LoginPage;
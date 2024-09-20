import EmailTextField from "../inputs/EmailTextField";
import PasswordTextField from "../inputs/PasswordTextField";
import CheckboxWithLabel from "../inputs/CheckboxWithLabel";
import { Button, Grid } from "@mui/material";
import LinkButton from "../buttons/LinkButton";
import HeaderText from "../texts/HeaderText";
import { useForm } from "react-hook-form"
import SignInSucceededDialog from "../dialog/SignInSucceededDialog";
import { useState } from "react";


function LoginForm() {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [isDialogOpen, setDialogOpen] = useState(false);

    const emailValidation = register(
        "email",
        {required: "이메일은 필수입니다", pattern: {value: /\S+@\S+\.\S/, message: "이메일 형식에 맞지 않습니다!"}}
    );
    
    const passwordValidation = register(
        "password",
        {required: "패스워드는 필수입니다", minLength: {value: 8, message: "패스워드는 8자 이상이어야 합니다"}}
    )

    const onSubmit = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <form onSubmit={handleSubmit((data) => {
            onSubmit();
        })}>
            <HeaderText />
            <EmailTextField validation={emailValidation} errors={errors} />
            <PasswordTextField validation={passwordValidation} errors={errors} />
            <CheckboxWithLabel label={"Remember me"}/>
            <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>
                Sign in
            </Button>
            <Grid container>
                <Grid item xs>
                    <LinkButton text={"Forgot password?"}/>
                </Grid>
                <Grid item>
                    <LinkButton text={"Sign Up"}/>
                </Grid>
            </Grid>

            <SignInSucceededDialog open={isDialogOpen} onClose={handleCloseDialog} />
        </form>
    );
}

export default LoginForm;
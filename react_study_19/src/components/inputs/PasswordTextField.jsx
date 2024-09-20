import { TextField } from "@mui/material";

function PasswordTextField(props) {
    const { validation, errors } = props;

    return (
        <div>
            <TextField
                label="Password" 
                variant="outlined" 
                required
                fullWidth
                margin="normal"
                type="password"
                {
                    ...validation
                }
            />
            {errors.password && <small style={{color: "red"}}>{errors.password.message}</small>}
        </div>
    );
}   

export default PasswordTextField;
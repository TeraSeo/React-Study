import { TextField } from "@mui/material";

function EmailTextField(props) {
    const { validation, errors } = props;
    
    return (
        <div>
            <TextField
                label="Email Address" 
                variant="outlined" 
                required
                fullWidth
                margin="normal"
                type="email"
                placeholder="ex@gmail.com"
                { ...validation }
            />
            {errors.email && <small style={{color: "red"}}>{errors.email.message}</small>}
        </div>
    );
}

export default EmailTextField;
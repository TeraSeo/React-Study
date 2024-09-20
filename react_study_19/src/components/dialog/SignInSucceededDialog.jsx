import { Dialog, DialogTitle } from "@mui/material";

function SignInSucceededDialog(props) {
    const { open, onClose } = props;
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Sign in successful</DialogTitle>
        </Dialog>
    );
}

export default SignInSucceededDialog;
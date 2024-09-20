import { Checkbox, FormControlLabel } from '@mui/material';

function CheckboxWithLabel(props) {
    const { label } = props;

    return (
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />} 
            label={label}
        />
    );
}

export default CheckboxWithLabel;
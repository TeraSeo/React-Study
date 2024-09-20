import { Link } from "@mui/material";

function LinkButton(props) {
    const { text } = props;
    
    return (
        <Link>
            { text }
        </Link>
    );
}

export default LinkButton;
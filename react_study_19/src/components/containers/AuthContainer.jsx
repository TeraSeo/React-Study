import { Box, Container } from "@mui/material";

function AuthContainer({ children }) {
    return (
        <Container component="main" maxWidth="xs">
            <Box sx={
              {
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }
            }>
              { children }
            </Box>
        </Container>
    );
}

export default AuthContainer;
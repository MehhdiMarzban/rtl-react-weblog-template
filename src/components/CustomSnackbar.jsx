import {forwardRef } from "react";
import { Alert as MuiAlert, Button, Snackbar, Stack } from "@mui/material";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar = ({openState, setOpenState}) => {

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenState(false);
    };
    return (
        <>
            <Stack spacing={2} sx={{ width: "100%" }}>
                <Snackbar
                    open={openState}
                    autoHideDuration={3000}
                    onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: "100%" }}>
                        با موفقیت ثبت شد!
                    </Alert>
                </Snackbar>
            </Stack>
        </>
    );
};
export default CustomSnackbar;

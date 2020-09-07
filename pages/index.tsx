import React from 'react';
import { Container, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';

const Page = () => {
    const { enqueueSnackbar } = useSnackbar();
    return (
        <Container maxWidth="lg">
            <Button
                color="primary"
                variant="contained"
                onClick={() =>
                    enqueueSnackbar('This is a snackbar', {
                        variant: 'success',
                    })
                }
            >
                Open Snackbar
            </Button>
        </Container>
    );
};

export default Page;

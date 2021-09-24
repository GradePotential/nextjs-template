import React, { useState } from 'react';
import { Container, Button, Box } from '@mui/material';
import Message from '@mui/icons-material/Message';
import Download from '@mui/icons-material/Download';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';

const Page = () => {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    return (
        <Container maxWidth="lg">
            <Box mt={3} textAlign="center">
                <Button
                    color="success"
                    variant="contained"
                    endIcon={<Message />}
                    onClick={() =>
                        enqueueSnackbar('This is a snackbar', {
                            variant: 'success',
                        })
                    }
                >
                    Open Snackbar
                </Button>
            </Box>
            <Box mt={3} textAlign="center">
                <LoadingButton
                    loading={loading}
                    loadingPosition="end"
                    color="success"
                    variant="contained"
                    endIcon={<Download />}
                    onClick={() => setLoading(true)}
                >
                    Download
                </LoadingButton>
            </Box>
        </Container>
    );
};

export default Page;

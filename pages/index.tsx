import React from 'react';
import { Container, Button, Box } from '@mui/material';
import Message from '@mui/icons-material/Message';
import Download from '@mui/icons-material/Download';
import { useSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import { trpc } from 'lib/trpc';

const Page = () => {
    const { enqueueSnackbar } = useSnackbar();
    const hello = trpc.useQuery(['hello']);
    return (
        <Container maxWidth="lg">
            <Box mt={3} textAlign="center">
                {hello.isSuccess ? hello.data : '...'} (As of{' '}
                {new Date(hello.dataUpdatedAt).toLocaleTimeString()})
            </Box>
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
                    loading={hello.isRefetching}
                    loadingPosition="end"
                    color="success"
                    variant="contained"
                    endIcon={<Download />}
                    onClick={async () => hello.refetch()}
                >
                    Refetch
                </LoadingButton>
            </Box>
        </Container>
    );
};

export default Page;

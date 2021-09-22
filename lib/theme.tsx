import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';

export function createEmotionCache() {
    return createCache({ key: 'css' });
}

const theme = createTheme({});

export default theme;

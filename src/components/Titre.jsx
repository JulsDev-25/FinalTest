import { Grid2 as Grid} from '@mui/material';
import React from 'react';

const Titre = () => {
    return (
        <Grid 
        size={12}
            sx={{
                mt: 8,
                mb: 5,
                textAlign: "center",
            }}
        >
            <p style={{textTransform: "uppercase"}}>Desde cualquier</p>
            <h2>Dispositivo</h2>
        </Grid>
    );
}

export default Titre;

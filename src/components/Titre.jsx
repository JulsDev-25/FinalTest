import { Grid2 as Grid} from '@mui/material';
import React from 'react';

const Titre = ({titre, sousTitre}) => {
    return (
        <Grid 
        size={12}
            sx={{
                mt: 8,
                mb: 5,
                textAlign: "center",
            }}
        >
            <p style={{textTransform: "uppercase"}}>{sousTitre}</p>
            <h2>{titre}</h2>
        </Grid>
    );
}

export default Titre;

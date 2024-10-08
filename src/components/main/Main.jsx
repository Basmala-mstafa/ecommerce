import { Box, Container, Stack, Typography, useTheme } from "@mui/material"
import { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Main =() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (
      event ,newAlignment
    ) => {
      setAlignment(newAlignment);
    };  

    const theme =useTheme()
    return(
        <Container sx={{mt:9}}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}> 
                <Box>
                    <Typography variant="h6"> Selected Products</Typography>
                    <Typography fontWeight={300} variant="body1">All our arrivais in a exclusive brand selection </Typography>
                </Box>

                <ToggleButtonGroup
                color="error"
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                sx={{
                    ".Mui-selected" : {
                        border:"1px solid rgpa(233,69,96,0.5) !important",
                        color:"#e94560",
                        backgroundColor:"initial",
                    },
                }}
    >
    <ToggleButton sx={{color:theme.palette.text.primary}} 
    className="myButton" value="left" aria-label="left aligned">
        All Product
    </ToggleButton>
    <ToggleButton sx={{mx:"16px !important", color:theme.palette.text.primary}} className="myButton" value="center" aria-label="centered">
        Men category
    </ToggleButton>
    <ToggleButton sx={{color:theme.palette.text.primary}} 
    className="myButton" value="right" aria-label="right aligned">
        women category
    </ToggleButton>
    </ToggleButtonGroup>

            </Stack>


            <Stack></Stack>
        </Container>
    )
}
export default Main;
import { Box, Button, Typography } from "@mui/material"

const Footer = () =>{
    return(
        <Box sx={{
            bgcolor:"#283445",
            py: 1.3,
            borderTopLeftRadius:8,
            borderTopRightRadius:8,
        }}>
            <Typography variant="h6" 
            sx={{
                justifyContent:"center",
                display:"flex",
                alignItems:"center",
                color:"HighlightText",
                fontSize:18
            }}>
                Designed and develaped by
                <Button 
                sx={{
                    mx:0.5,
                    fontSize:"17px",
                    textTransform:"capitalize",
                    color:"#ff7790"
                }} 
                variant="text" 
                color="primary"
                >
                    4MEMBER
                </Button>
                @2024
            </Typography>
        </Box>
    );
}
export default Footer;
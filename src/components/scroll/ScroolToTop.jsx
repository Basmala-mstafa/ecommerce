import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";

const ScroolToTop =()=>{
    return(
        <Zoom in={useScrollTrigger({threshold:50})}>
        <Fab
        sx={{position:"fixed", bottom:33, right:33}}
          onClick={()=>{
            window.scrollTo(0,0)
          }}
          color="primary"
          size="small"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
        </Zoom>

    )
}
export default ScroolToTop;
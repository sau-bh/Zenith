import { Typography } from "@mui/material"
import "./Logo.css"

export default function Logo() {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1,
                 display: { xs: 'none', sm: 'block' }
                 }} 
            className="logo"
        >
            Zenith
        </Typography>
    )
}
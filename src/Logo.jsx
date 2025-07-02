import { Typography } from "@mui/material"

export default function Logo() {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
            Zenith
        </Typography>
    )
}
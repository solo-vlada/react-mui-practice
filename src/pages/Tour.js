import { Typography, Box } from "@mui/material"
import Container from "@mui/material/Container"
import ImageCollage from "../components/ImageCollage"
import SimpleAccordion from "../components/Accordion"

const Tour = () => {

    return (
        <Container sx={{width: 900}}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Explore the world in pictures
            </Typography>
            <Box marginTop={3} sx={{
                display: "flex"
            }}>
                <img src="https://tourscanner.com/blog/wp-content/uploads/2020/07/Things-to-do-in-Las-Vegas-1.jpg"
                alt="Las Vegas"
                height={400}
                />
                <ImageCollage />
            </Box>
            <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tincidunt aliquam. Donec sed mi orci. Integer non sapien a mauris porta fringilla eu et velit. Donec maximus massa et consectetur scelerisque.
            </Typography>
            </Box>
            <Box>
            <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                Frequently Asked Questions
            </Typography>
            <SimpleAccordion />
            </Box>
        </Container>

    )
}

export default Tour

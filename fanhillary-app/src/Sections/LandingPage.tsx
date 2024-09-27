import styled from '@emotion/styled';
import { Box, Text } from "@chakra-ui/react"

export const LandingPage = () => {
    return (
        <Box bg="#F5E8D0" width="100%" height="800px" padding="30px">
            <Text color="#6B4F3D" fontSize={64} fontWeight="bold">
                Hello
            </Text>
            <Text fontSize={64} fontWeight="bold">
                I'm Hillary
            </Text>
            <Text color="#FFF9F4" fontSize={64} fontWeight="bold">
                A Frontend Software Engineer
            </Text>
            <Text color="#A3B18A" fontSize={32} fontWeight="bold">
                who loves... all things cozy like anime, sewing, coffee, matcha, notion, lifestyle, travelling, productivity, self growth, pilates, yoga, 
            </Text>
            <Text color="#A3B18A" fontSize={32} fontWeight="bold">
                what can I get you?
            </Text>
        </Box>
    )
}
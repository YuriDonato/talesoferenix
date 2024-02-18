import { Spinner, Box } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      w="100%"
      p={4}
      color="white"
    >
      <Spinner size="xl" />
    </Box>
  )
}

export default Loading

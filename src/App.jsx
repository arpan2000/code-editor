import { Box } from '@chakra-ui/react';
import CodeEditor from './components/CodeEditor';

function App() {
  return (
    <Box minH="100vh" bg="#FFFFFF" color="black" px={8} py={8}>
      <CodeEditor/>
    </Box>
  );
}

export default App;

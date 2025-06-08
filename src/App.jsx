import { Box } from '@chakra-ui/react';
import CodeEditor from './components/CodeEditor';

function App() {
  return (
    <Box minH="100vh" bg="#29272b" color="green.500" px={8} py={8}>
      <CodeEditor/>
    </Box>
  );
}

export default App;

import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useState, useRef } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef(); //to keep focus on the editor on mount
  const [value, setValue] = useState(""); //to store values that we are typing in the code editor
  const [language, setLanguage] = useState("javascript"); //to set the editor with the language I select

  const onMount = (editor) => {
    editorRef.current = editor; //editor is stored inside editorRef.current so that it can be used outside this func.
    editor.focus(); //editor stores the entire Monaco Editer object like getValue, setValue, focus etc.
  };

  //function to change language state using setLanguage
  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector onSelect={onSelect} />
          <Box border='1px' borderColor='black'>
          <Editor
            height="75vh"
            theme="vs"
            language={language}
            defaultValue={CODE_SNIPPETS["javascript"]}
            value={value}
            onMount={onMount}
            onChange={(value) => setValue(value)}
          /></Box>
        </Box>
        <Output editorRef={editorRef} language={language}/>
      </HStack>
    </Box>
  );
};

export default CodeEditor;

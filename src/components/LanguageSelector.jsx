import {
  Box,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import { LANGUAGE_VERSION } from "../constants";

const languages = Object.entries(LANGUAGE_VERSION); //returns array of key-value pairs from an object
const ACTIVE_COLOR = "blue.400";

const LanguageSelector = ({ onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Tabs isLazy variant='enclosed'>
        <TabList>
          {languages.map(([lang]) => (
            <Tab key={lang} onClick={() => onSelect(lang)}>
              {lang}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  );
};

export default LanguageSelector;

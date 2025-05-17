import { Switch } from "@chakra-ui/react"
import { useLanguage } from "../../context/LanguageContext"

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Switch.Root colorPalette="cyan" size="md" checked={language === "tr"} onCheckedChange={toggleLanguage}>
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator fallback={<h1><strong>EN</strong></h1>}>
          <h1><strong>TR</strong></h1>
        </Switch.Indicator>
      </Switch.Control>
    </Switch.Root>
  );
};

export default LanguageSwitch;
import { Button, styled, Typography, useTheme } from "@mui/material";
import './App.css';

/*
  Genom att använda styled() från @mui/material kan vi skapa egna komponenter
  som använder Material UIs styling system. EmotionExampleDiv är en sådan
  komponent. Det är en div som är 100 bred och 100 hög med en röd bakgrund.
*/
const EmotionExampleDiv = styled('div')({
  width: 100,
  height: 100,
  backgroundColor: 'red',
});

/*
  Vi kan också modifiera Materialui komponenter detta görs genom att använda styled() från @mui/material.
  och sedan skicka in den komponenten vi vill modifiera som första argument till styled().
  EmotionTextExample är en sådan komponent. Det är en Typography (text komponent).
*/
const EmotionTextExample = styled(Typography)({
  marginTop: 32,
  color: 'blue',
  fontSize: 12,
});

/*
  Båda exemplena ovan är skrivna med Emotion. Det finns även andra sätt att skriva
  CSS i React.
*/
function App() {
  const theme = useTheme();
  /* theme.palette.primary.main är en färg som är definierad i Material UIs tema.
   genom att använda useTheme() kan vi få tillgång till det aktuella temat.
   Vi kan även skapa egna färger i temat. Genom att använda createTheme() från @mui/material.
   palette är färgen... Den består av primary, secondary, error, warning, info, success, grey, mode.
   primary är en färg som består av main, light, dark, contrastText.
   Anger man en färg som primary.main så kommer MUI att generera resterande färger för primary.dark och primary.light. osv... 
   const theme = createTheme({
      palette: {
        primary: {
          main: purple[500],
      },
        secondary: {
          main: green[500],
      },
    },
  });
  */

  // Kolla på vad som finns på theme i konsolen.
  console.log(theme);


  return (
    <div>
      <Typography variant={"h4"}>
        Aloma CV
      </Typography>
      <EmotionExampleDiv>
        Emotion Example
      </EmotionExampleDiv>

      <EmotionTextExample>
        Emotion Text Example
      </EmotionTextExample>

      <div className={"cssExample"}>
        Css Example
      </div>

      {/*Exemple med SX, sx är en prop som finns på alla MUI komponenter.
       Om man bara vill ändra en specifik komponent kan sx vara nice. De flest propsen som backgroundColor, color osv...
       funkar precis som vanligt, men vissa props har nice förkortningar. Exempelvis mt = marginTop, ml = marginLeft. pt = paddingTop 
       ml: 2 innebär inte 2px utan 16px. Det är 8px * 2. Detta är för att det ska vara enklare att skala upp och ner.
       sx känner också till appens tema... se färgerna på knapparna nedan.*/}
      <Button sx={{ mt: 2, marginLeft: 1 }} variant={'contained'}>
        Sx Example
      </Button>
      <Button sx={{ mt: 2, marginLeft: 1, backgroundColor: 'primary.light' }} variant={'contained'}>
        Sx Example
      </Button>
    </div>
  );
}

export default App;

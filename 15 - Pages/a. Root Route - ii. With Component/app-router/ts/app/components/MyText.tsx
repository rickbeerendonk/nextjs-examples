/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

interface MyTextProps {
  text: string;
}

function MyText({ text }: MyTextProps) {
  return <i>{text}</i>;
}

export default MyText;

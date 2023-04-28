
export const Paragraph = (props) => {
  console.log(props);
  return <p className={props.className}> {props.children}, I'm React</p>;
};


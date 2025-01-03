 
function App() {
  const [input, setInput] = React.useState("# H1\n"+ "## H2\n" +
"\`printf('goodbye world!')\`\n"+
"\`\`\` \n printf('goodbye world!') \n \`\`\` \n"+ "[title](https://www.example.com) \n" +  
"1. First item 2. Second item 3. Third item \n "+" 'span' \n " + " 	> blockquote  \n"+"![alt text](https://www.w3schools.com/images/lamp.jpg)  "+ " **bold text**  ") 
  let handleInput=(event)=>{
    setInput(event.target.value)
  }  
  let getMarkdownText=()=> {
    var rawMarkup = marked(input);
    console.log({rawMarkup})
    return { __html: rawMarkup };
  }
  return (
    <div style={{width: '40%', margin: 'auto'}}>
    <textarea name="" id="editor" cols="30" rows="10" onChange={handleInput}>{input}</textarea>
    <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
    </div>
  );
}
ReactDOM.render( <App /> ,
	document.getElementById('root')
	);

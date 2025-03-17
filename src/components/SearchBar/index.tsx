import { useState } from 'react';
import './style.css'

type Props = {
    onSearch: Function;
}
export default function SerachBar({onSearch} : Props) {

    /*useState*/

    const [text, setText] = useState("");

    /* limpar formulário quando clicar no x */

        function handleResetClick(event: any) {
            event.preventDefault();
            setText("");
          //  onSearch(text);
        }

    /* função para popular a variavel formData quando for preenchida*/

    function handleInputChange(event: any) {
        /*const value = event.target.value;
        const name = event.target.name;*/
        setText(event.target.value);

    }

    /*Função para dectar que o click no botão*/
 
    function handleFormSubmit(event: any) {
        event.preventDefault(); // para não  recarregar a página quando eu aperta o boã
        onSearch(text); // informar o texto que é nome que está informado na caixinha
        setText("");
    }

    return (
      
        <form  onSubmit={handleFormSubmit}
                className="dsc-search-bar dsc-mt20">
            <button type="submit">🔎︎</button>
            <input value={text}  type="text" placeholder="Código de barras" 
            onChange={handleInputChange} /> 
            <button  name="reset" onClick={handleResetClick}>🗙</button>
        </form>
    
 
    );
}
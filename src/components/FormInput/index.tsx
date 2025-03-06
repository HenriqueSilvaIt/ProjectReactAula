
export default function FormInput(props: any) { /* n colocamos
     o prop em cima com type, porque vamos passar dados variados aqui dentro, text,
     que são as coias que estavam dentro do input*/
    const { validation, invalid, ...inputProps } = props; /* tiramos o validation e invalid do objeto input para n fazer
    parte da props */
  
    return (
      <input {...inputProps} data-invalid={invalid}/> /*nesse input vamos passar os props acima
      tiramos o invalid do objeto e craimos um atributo data-invalid para receber o invalid, 
       o correto quando criar atributo no elemento é você colocar data-alguma, que ai você cria seu data set */
      ); 
  
  
    };
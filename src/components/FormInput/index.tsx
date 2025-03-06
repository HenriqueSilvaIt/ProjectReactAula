
export default function FormInput(props: any) { /* n colocamos
     o prop em cima com type, porque vamos passar dados variados aqui dentro, text,
     que são as coias que estavam dentro do input*/
    const { validation, ...inputProps } = props; /* tiramos o validation do objeto input para n fazer
    parte da props */
  
    return (
      <input {...inputProps} /> /*nesse input vamos passar os props acima */
      ); 
  
  
    };
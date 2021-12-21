import sQuery, { fnQuery as sq } from 'squery';

export class Main extends sQuery.virtual {
  
  // script virtualization
  virtualScript(){
    sq('#myinput').on('keyup',()=>{
      var newtext = sq('#myinput').val()
      sq('#myresult').val(newtext)
    })
  }
  
  // dom virtualization
  virtualDOM(){
    return(
      <div>
        <input s-id="myinput"></input>
        <span s-id="myresult"></span>
      </div>
    )
  }
  
  // we borrow react render style
  render(){virtualDOM()}
}

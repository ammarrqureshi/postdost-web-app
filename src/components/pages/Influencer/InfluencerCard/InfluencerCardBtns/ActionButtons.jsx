import classes from './ActionButtons.module.css';
import Button from "../../../../UI/Button";

function ActionButtons(){
    return (
         <div className={classes.actionButtons}>
            <Button color='red' 
            borderRadius='10px'
            fontSize='15px'
            Padding= '12px 10px'
            Color='#5E17EB'
            fontWeight='bold'
            >Buy now $20
            </Button>
            <Button
            color='red' 
            borderRadius='10px'
            fontSize='15px'
            Padding= '12px 10px'
            textColor=''
            Color='#5E17EB'
            fontWeight='bold'
            >Message
            </Button>
         </div>
    )
}

export default ActionButtons;
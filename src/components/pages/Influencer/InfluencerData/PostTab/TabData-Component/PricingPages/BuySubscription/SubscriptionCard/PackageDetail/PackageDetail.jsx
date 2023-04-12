import classes from './PackageDetail.module.css';

function PackageDetail(props){
 const details=[props.detail1,props.detail2,props.detail3,
 props.detail4,props.detail5,props.detail5];
    return(
        <section className={classes.packageDetails}>
        {details.map((detail,index)=>  <h1 key={index}>&#10003; {detail}</h1> )}
        </section>  
    )
}

export default PackageDetail;
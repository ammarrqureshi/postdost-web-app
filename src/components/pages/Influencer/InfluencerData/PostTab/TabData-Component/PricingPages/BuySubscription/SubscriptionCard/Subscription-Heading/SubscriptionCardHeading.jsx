import classes from './SubscriptionCardHeading.module.css';

function SubscriptionCardHeading(props){
    return(
        <section className={classes.subsHeading}>
            <h1>{props.packageName}</h1>
            <p>{props.description}</p>
            <label>{props.price}<span>/post</span></label>
            <h2>Includes</h2>
        </section>

    )
}

export default SubscriptionCardHeading
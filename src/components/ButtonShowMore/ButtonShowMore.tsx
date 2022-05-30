import classes from './ButtonShowMore.module.scss';

const ButtonShowMore = () => {
    return (
        <button type="button" className={classes['show-more']}>
            Показать еще 5 билетов
        </button>
    )
}

export default ButtonShowMore;
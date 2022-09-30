import styles from './FormattedTime.module.scss';

const FormattedTime = props => {
  return (
    <div className={styles.formattedTime}>
      <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((props.time / 6000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((props.time / 100) % 60)).slice(-2)}.</span>
      <span>{("0" + (props.time / 10) % 100).slice(-2)}</span>
    </div>
	);
};
export default FormattedTime;
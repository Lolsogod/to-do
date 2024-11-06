import { IProps } from "./props";
import styles from './styles.module.scss'

const Input = (props: IProps) => {
  const { className, ...rest } = props;
  return <input className={`${styles.input} ${className}`} {...rest} />;
};  

export default Input;

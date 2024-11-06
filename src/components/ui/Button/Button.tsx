import { IProps } from './props';
import styles from './styles.module.scss'

const Button = (props: IProps) => {
  const { children, className, variant = 'primary', ...rest } = props;

  return <button className={`${styles.button} ${styles[variant]} ${className} `} {...rest}>{children}</button>;
};

export default Button;


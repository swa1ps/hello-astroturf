import * as React from 'react';
import { css } from 'astroturf';

type ButtonProps = {
  children: React.ReactNode | React.ReactNode[],
};

const styles = css`
  .button{
    color: red;

    &:hover{
      color: blue;
    }
  }
`;

const Button = ({ children }: ButtonProps) => <button className={styles.button}>{children}</button>;

export default Button;

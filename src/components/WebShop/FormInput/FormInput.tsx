import React, { FC, InputHTMLAttributes } from 'react';
import { FormInputLabel, Group, Input } from './FormInput.styles';

type FormInpurProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInpurProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

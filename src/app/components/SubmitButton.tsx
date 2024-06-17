'use client';
import styles from './SubmitButton.module.css';

import React from 'react';

type Props = {
  busy: boolean;
};

const SubmitButton = ({ busy }: Props) => {
  return (
    <button
      disabled={busy}
      className={styles.button}
      type='submit'>
      {busy ? 'Loading...' : 'Submit'}
    </button>
  );
};

export default SubmitButton;
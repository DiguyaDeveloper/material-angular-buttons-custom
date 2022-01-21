import { CeccoffButtonColor, CeccoffButtonType } from './ceccoff-buttons.type';

export interface CeccoffButton {
  label: string;
  ariaLabel: string;
  color: CeccoffButtonColor;
  type: CeccoffButtonType;
  icon?: string;
  disabled?: boolean;
  hidden?: boolean;
  close?: boolean;
}

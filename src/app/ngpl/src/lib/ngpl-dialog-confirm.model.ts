export interface NgplDialogConfirmModel {
  title?: string;
  message?: string;
  showCancel?: boolean;
  showIcon?: boolean;
  actionText?: string;
  iconType?: 'small' | 'normal' | null;
}

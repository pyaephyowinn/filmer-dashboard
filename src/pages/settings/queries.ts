import { useMutation } from '@tanstack/react-query';
import { ChangePassword } from '../auth/types';
import { changePassword } from '@/services/auth';
import { showNotification } from '@mantine/notifications';

export const useChangePassword = ({ resetForm }: { resetForm: () => void }) => {
  return useMutation({
    mutationFn: (values: Omit<ChangePassword, 'confirmPassword'>) =>
      changePassword(values),

    onSuccess: () => {
      resetForm();
      showNotification({
        message: 'Password changed successfully',
        color: 'green',
      });
    },

    onError: (err: any) => {
      showNotification({
        message: err?.response.data.message,
        color: 'red',
      });
    },
  });
};

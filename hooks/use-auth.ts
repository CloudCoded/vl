import AuthService from "@/services/api/auth/auth.service";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";


export const useSignInUser = () => {
  const {
    isPending,
    mutate: loginMutate,
    error,
    isError,
    isSuccess,
    data,
  } = useMutation({
    mutationFn: (payload: { email: string; password: string }) =>
      AuthService.signInUser(payload),
    mutationKey: ["user-login"],
    // onSuccess(data: AxiosResponse) {
    //   console.log(data);
    // },
    onError: (error: {
      response: { data: { message: string; status: string } };
    }) => {
      console.log(error);
    },
  });

  return {
    isPending,
    loginMutate,
    error,
    isError,
    isSuccess,
    data,
  };
};

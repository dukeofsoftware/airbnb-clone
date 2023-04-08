"use client";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "./Modal";
import { Button, Heading, Input } from "@/components/ui";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Login successful");
        router.refresh();
        loginModal.onClose();
      }
      if (callback?.error) {
        toast.error("something went wrong");
      }
    });
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account!" />
      <Input
        id="email"
        label="Email"
        type="email"
        disabled={isLoading}
        register={register}
        errors={errors}
      />

      <Input
        id="password"
        label="password"
        type="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
    </div>
  );

  const footerContent = (
    <div className=" mt-3 flex flex-col gap-4">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div className="text-cneter mt-4 font-light text-neutral-500">
        <div
          className="flex flex-row items-center justify-center gap-2"
          onClick={loginModal.onClose}
        >
          <div>Already have an account?</div>
          <div className="cursor-pointer text-neutral-800 hover:underline">
            login
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Login"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;

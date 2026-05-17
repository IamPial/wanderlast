"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
  toast,
} from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { IoImagesOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      email: userData.email,
      name: userData.name,
      image: userData.image,
      password: userData.password,
    });
    if (data) {
      redirect("/");
    }
    if (error) {
      toast.danger(error);
    }
  };

  return (
    <div className="py-10">
      <h2 className="text-center text-4xl">Create Account</h2>
      <p className="text-center text-gray-500 my-2 text-lg">
        Start your adventure with Wanderlust
      </p>

      <Form
        onSubmit={handleSubmit}
        className=" shadow-md flex border p-5  max-w-md mx-auto flex-col gap-4"
      >
        <TextField isRequired name="name" type="name">
          <Label>Full Name</Label>
          <div className="border border-gray-200 w-full flex focus-within:border-blue-500 focus-within:border-2 items-center relative px-2">
            <BiUser className=" text-gray-600 shrink-0 " />
            <Input
              className="rounded-none focus:ring-0 focus-visible:right-0  border-0 outline-0 w-full shadow-none  mt-0.5"
              placeholder="Enter your name"
            />
          </div>
          <FieldError />
        </TextField>
        <TextField isRequired name="image" type="url">
          <Label>Image Url</Label>
          <div className="border border-gray-200 w-full flex focus-within:border-blue-500 focus-within:border-2 items-center relative px-2">
            <IoImagesOutline className=" text-gray-600 shrink-0 " />
            <Input
              className="rounded-none focus:ring-0 focus-visible:right-0  border-0 outline-0 w-full shadow-none  mt-0.5"
              placeholder="https://images.glacier.jpg"
            />
          </div>
          <FieldError />
        </TextField>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <div className="border border-gray-200 w-full flex focus-within:border-blue-500 focus-within:border-2 items-center relative px-2">
            <MdOutlineEmail className=" text-gray-600 shrink-0 " />
            <Input
              className="rounded-none focus:ring-0 focus-visible:right-0  border-0 outline-0 w-full shadow-none  mt-0.5"
              placeholder="john@example.com"
            />
          </div>
          <FieldError />
        </TextField>

        <TextField isRequired minLength={8} name="password" type="password">
          <Label>Password</Label>
          <div className="border border-gray-200 w-full flex focus-within:border-blue-500 focus-within:border-2 items-center relative px-2">
            <TbLockPassword className=" text-gray-600 shrink-0 " />
            <Input
              className="rounded-none focus:ring-0 focus-visible:right-0  border-0 outline-0 w-full shadow-none  mt-0.5"
              placeholder="create a password"
            />
          </div>

          <FieldError />
        </TextField>

        <div className="mb-2">
          <Button type="submit" className="w-full rounded-none bg-sky-400 ">
            Create Account
          </Button>
          <p className="text-center text-gray-500 my-2">Or sign up with</p>
          <Button
            type="submit"
            className="w-full   rounded-none bg-white border text-neutral-900 border-gray-200 "
          >
            <FcGoogle className="mb-2" />
            Sign Up With Google
          </Button>
        </div>
        <Separator />
        <div className="text-center text-gray-500">
          Already have an account?{" "}
          <Link href="#" className="text-sky-400">
            Sing In
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;

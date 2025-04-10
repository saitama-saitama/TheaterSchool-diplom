"use server"

import { getUserSession } from "@/lib/get-user-session";
import { prisma } from "@/prisma/prisma-client";
import { Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";
import { signIn } from "next-auth/react";

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
    try {
      const currentUser = await getUserSession();
  
      if (!currentUser) {
        throw new Error('Пользователь не найден');
      }
  
      const findUser = await prisma.user.findFirst({
        where: {
          id: Number(currentUser.id),
        },
      });
  
      await prisma.user.update({
        where: {
          id: Number(currentUser.id),
        },
        data: {
          fullName: body.fullName,
          email: body.email,
          password: body.password ? hashSync(body.password as string, 10) : findUser?.password,
        },
      });
    } catch (err) {
      console.log('Error [UPDATE_USER]', err);
      throw err;
    }
}


export async function registerUser(body: Prisma.UserCreateInput) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          login: body.login,
        },
      });
  
      if (user) {
                if (!user.verified) {
                  throw new Error('Логин не подтвержден');
                }
  
        throw new Error('Пользователь уже существует');
      }
  
      const createdUser = await prisma.user.create({
        data: {
          login: body.login,  
          fullName: body.fullName,
          email: body.email,
          password: hashSync(body.password, 10),
          verified: true,
        },
      });
  
                /*const code = Math.floor(100000 + Math.random() * 900000).toString();
            
                await prisma.verificationCode.create({
                  data: {
                    code,
                    userId: createdUser.id,
                  },
                });
            
                await sendEmail(
                  createdUser.email,
                  'Next Pizza / 📝 Подтверждение регистрации',
                  VerificationUserTemplate({
                    code,
                  }),
                );*/

      return { success: true, redirectUrl: "/" };
    } catch (err) {
      console.log('Error [CREATE_USER]', err);
      throw err;
    }
  }


    /*export async function registerUser(body: Prisma.UserCreateInput) {
      try {
          const existingUser = await prisma.user.findFirst({
              where: {
                  OR: [
                      { login: body.login },
                      { email: body.email },
                  ],
              },
          });
  
          if (existingUser) {
              throw new Error('Пользователь с таким логином или email уже существует');
          }
  
          const createdUser = await prisma.user.create({
              data: {
                  login: body.login,
                  fullName: body.fullName,
                  email: body.email,
                  password: hashSync(body.password, 10),
                  verified: true,
              },
          });
  
          console.log('User created successfully:', createdUser);

          const result = await signIn("credentials", {
              redirect: false, 
              login: body.login,
              password: body.password,
          });
  
          if (result?.error) {
              throw new Error('Ошибка при входе в систему');
          }

          return { success: true, redirectUrl: "/profile" };
  
      } catch (err) {
          console.error('Error [CREATE_USER]:', err);
          throw new Error('Ошибка при регистрации пользователя');
      }
}*/
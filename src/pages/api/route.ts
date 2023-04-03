import {NextResponse, NextRequest} from 'next/server';
import {prisma} from '~/server/db';

export async function GET(request: NextRequest) {

  const users = await prisma.user.findMany();

  // const User = await prisma.user.create({
  //   data: {
  //     name: 'Dragomir Angelov',
  //     email: 'a.dragomir1996@gmail.com',
  //     password: 'password',
  //     passwordSalt: '123231',
  //   },
  // });

  return NextResponse.json({users});
}

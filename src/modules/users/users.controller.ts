import { UsersService } from './users.service';
import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUser() {
    const userId = 45;
    return { user_id: userId };
  }

  // Admin Guard
  @Get()
  async getUsers() {
    const page = 1;
    return { page };
  }

  // POST: CreateUser()

  @Patch()
  async updateUser() {
    return '';
  }

  @Delete()
  async deleteUser() {
    const userId = 45;
    return { user_id: userId };
  }
}

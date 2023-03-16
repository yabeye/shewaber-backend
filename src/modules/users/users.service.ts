import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}

  async fetchUser(id: string) {
    return { id, message: 'User data' };
  }

  async fetchUsers(page: number) {
    return { page: `${page} - Paginated users list` };
  }

  async setProfile() {
    return { id: 'userId', message: 'Set profile data' };
  }

  async setAddress() {
    return { id: 'addressId', message: 'Set address!' };
  }

  async createUser() {
    //take some userDtoData

    // Set user table
    // Set profile table
    // Set user address and region name table
    // Set profile image table

    return { id: 'userId', message: 'User data' };
  }

  async updateProfile() {
    return { id: 'userId', message: 'Updated profile data' };
  }

  async updateAddress() {
    return { id: 'addressId', message: 'Updated address!' };
  }

  async updateUser() {
    // Update user table
    // Update profile table
    // Update user address and region name table
    // Update profile image table

    return { id: 'userId', message: 'Updated user data!' };
  }

  async deleteUser() {
    return { id: 'userId', message: 'Deleted user!' };
  }
}

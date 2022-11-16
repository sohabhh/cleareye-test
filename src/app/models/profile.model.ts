export class Profile {
  name: string = "";
  address: string = "";
  dob: string = "";
  role: string = "";
  phone: string = "";
  gender: string = "";

  constructor(iUser: any) {
    if (iUser !== undefined) {
      this.name = iUser.email;
      this.address = iUser.first_name;
      this.dob = iUser.last_name;
      this.role = iUser.role;
      this.phone = iUser.phone;
      this.gender = iUser.gender;
    }
  }
}

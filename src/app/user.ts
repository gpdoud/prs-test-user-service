export class User {
	Id: number;
	Username: string;
	Password: string;
	Firstname: string;
	Lastname: string;
	Phone: string;
	Email: string;
	Admin: boolean;
	Reviewer: boolean;
	Active: boolean;

	constructor(username: string, password: string, firstname: string, lastname: string, phone: string, email: string, admin: boolean, reviewer: boolean, active: boolean) {
		this.Username = username;
		this.Password = password;
		this.Firstname = firstname;
		this.Lastname = lastname;
		this.Phone = phone;
		this.Email = email;
		this.Admin = admin;
		this.Reviewer = reviewer;
		this.Active = active;
	}
}

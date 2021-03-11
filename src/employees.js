import faker from "faker";

const employees = [
	{
		id: 1,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: "fake@testo.com",
		dob: "09/23/93",
	},
	{
		id: 2,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "02/23/92",
	},
	{
		id: 3,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "08/13/01",
	},
	{
		id: 4,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "11/02/98",
	},
	{
		id: 5,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "01/28/83",
	},
	{
		id: 6,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "09/26/91",
	},
	{
		id: 7,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "06/11/89",
	},
	{
		id: 8,
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "05/17/99",
	},
];

export default employees;
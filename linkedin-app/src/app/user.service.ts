import { User } from "./_model/user";
export class UserService {
  private Users: User[] = [
    {
      id: 1,
      firstName: "eman",
      lastName: "el-sayed",
      profileImg: "assets/images/emy.png",
      coverImg: "assets/images/1.jpeg",
      jobTitle: "FrontEnd Developer",
      jobAndEducation: "FrontEnd Developer",
      address: "cairo",
      about: "hamadaaaaaaaaaaaaaaaaaaaaaaaa",
      expriences: ["1 year exprience"],
      skills: ["team lead", "Presentation"],
      connectionIds: [1, 8, 2, 3, 4, 5]
    },
    {
      id: 2,
      firstName: "farah",
      lastName: "mahmoud",
      profileImg: "assets/images/img.jpg",
      coverImg: "assets/images/1.jpeg",
      jobTitle: "FrontEnd Developer",
      jobAndEducation: "iti",
      address: "cairo",
      about: "hamadaaaaaaaaaaaaaaaaaaaaaaaa",
      expriences: ["1 year exprience"],
      skills: ["team lead", "JavaScript"],
      connectionIds: [2, 3, 4, 5]
    },
    {
      id: 3,
      firstName: "mai",
      lastName: "eltayb",
      profileImg: "assets/images/2.jpeg",
      coverImg: "assets/images/1.jpeg",
      jobTitle: "FrontEnd Developer",
      jobAndEducation: "FrontEnd Developer",
      address: "cairo",
      about: "hamadaaaaaaaaaaaaaaaaaaaaaaaa",
      expriences: ["1 year exprience"],
      skills: ["JavaScript", "active team member"],
      connectionIds: [2, 3, 4, 5]
    },
    {
      id: 4,
      firstName: "nada",
      lastName: "ahmed",
      profileImg: "assets/images/2.jpeg",
      coverImg: "assets/images/1.jpeg",
      jobTitle: "FrontEnd Developer",
      jobAndEducation: "FrontEnd Developer",
      address: "cairo",
      about: "hamadaaaaaaaaaaaaaaaaaaaaaaaa",
      expriences: ["1 year exprience"],
      skills: ["team lead", "active team member", "Presentation"],
      connectionIds: [2, 3, 4, 5]
    },
    {
      id: 5,
      firstName: "hala",
      lastName: "nazmi",
      profileImg: "",
      coverImg: "",
      jobTitle: "FrontEnd Developer",
      jobAndEducation: "FrontEnd Developer",
      address: "cairo",
      about: "hamadaaaaaaaaaaaaaaaaaaaaaaaa",
      expriences: ["1 year exprience"],
      skills: ["team lead", "active team member"],
      connectionIds: [2, 3, 4, 5]
    }
  ];

  getAllUsers(): User[] {
    return this.Users.slice();
  }
  getById(id: number): User {
    return this.Users.find(user => user.id === id);
  }

  update(user: User) {
    const index = this.Users.findIndex(a => a.id === user.id);
    this.Users[index] = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      profileImg: user.profileImg,
      coverImg: user.coverImg,
      jobTitle: user.jobTitle,
      jobAndEducation: user.jobAndEducation,
      address: user.address,
      about: user.about,
      expriences: user.expriences,
      skills: user.skills,
      connectionIds: user.connectionIds
    };
  }

  add(user: User) {
    const newUser: User = {
      id: this.Users.length,
      firstName: user.firstName,
      lastName: user.lastName,
      profileImg: user.profileImg,
      coverImg: user.coverImg,
      jobTitle: user.jobTitle,
      jobAndEducation: user.jobAndEducation,
      address: user.address,
      about: user.address,
      expriences: user.expriences,
      skills: user.skills,
      connectionIds: user.connectionIds
    };

    this.Users.push(newUser);
  }
}

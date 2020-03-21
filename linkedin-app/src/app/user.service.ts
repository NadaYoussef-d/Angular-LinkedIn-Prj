import { User } from "./_model/user";
export class UserService {
  private Users: User[] = [
    {
      id: 1,
      name: "eman el-sayed",
      profileImg: "",
      coverImg: "",
      jobTitle: "FrontEnd Developer",
      jobAndEducation: "FrontEnd Developer",
      address: "cairo",
      about: "hamadaaaaaaaaaaaaaaaaaaaaaaaa",
      expriences: ["1 year exprience"],
      skills: ["team lead", "active team member"],
      connectionIds: [2, 3, 4, 5]
    },
    {
      id: 2,
      name: "farah mahmoud",
      profileImg: "",
      coverImg: "",
      jobTitle: "FrontEnd Developer",
      jobAndEducation: "FrontEnd Developer",
      address: "cairo",
      about: "hamadaaaaaaaaaaaaaaaaaaaaaaaa",
      expriences: ["1 year exprience"],
      skills: ["team lead", "active team member"],
      connectionIds: [2, 3, 4, 5]
    },
    {
      id: 3,
      name: "mai eltayb",
      profileImg: "",
      coverImg: "",
      jobTitle: "FrontEnd Developer",
      jobAndEducation: "FrontEnd Developer",
      address: "cairo",
      about: "hamadaaaaaaaaaaaaaaaaaaaaaaaa",
      expriences: ["1 year exprience"],
      skills: ["team lead", "active team member"],
      connectionIds: [2, 3, 4, 5]
    },
    {
      id: 4,
      name: "nada ahmed",
      profileImg: "",
      coverImg: "",
      jobTitle: "FrontEnd Developer",
      jobAndEducation: "FrontEnd Developer",
      address: "cairo",
      about: "hamadaaaaaaaaaaaaaaaaaaaaaaaa",
      expriences: ["1 year exprience"],
      skills: ["team lead", "active team member"],
      connectionIds: [2, 3, 4, 5]
    },
    {
      id: 5,
      name: "hala nazmi",
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
  GetAllUsers(): User[] {
    return this.Users.slice();
  }
  getById(id: number): User {
    return this.Users.find(user => user.id === id);
  }

  update(user: User) {
    const index = this.Users.findIndex(a => a.id === user.id);
    this.Users[index] = {
      id: user.id,
      name: user.name,
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
  }

  add(user: User) {
    const newUser: User = {
      id: this.Users.length,
      name: user.name,
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

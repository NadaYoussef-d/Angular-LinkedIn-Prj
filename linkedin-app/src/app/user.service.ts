import { User } from "./_model/user";
//import{Experience} from ""
import { from } from "rxjs";
import { Experience } from "./_model/experience";
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
      expriences: [
        {
          experienceId: 1,
          expTitle: "web-dev",
          expEmploymentType: "partTime",
          expCompanyName: "lin-dev",
          expStartDate: "2014- 1- 3",
          expEndDate: "2004-11-31"
        }
      ],
      skills: ["team lead", "active team member"],
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
      expriences: [
        {
          experienceId: 1,
          expTitle: "web-dev",
          expEmploymentType: "partTime",
          expCompanyName: "lin-dev",
          expStartDate: "2019- 11- 3",
          expEndDate: "2020-11-3"
        },
        {
          experienceId: 2,
          expTitle: "mobile-dev",
          expEmploymentType: "partTime",
          expCompanyName: "lin-dev",
          expStartDate: "2019- 11- 3",
          expEndDate: "2020-11-3"
        }
      ],

      skills: ["team lead", "active team member"],
      connectionIds: [1, 4]
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
      expriences: [
        {
          experienceId: 1,
          expTitle: "web-dev",
          expEmploymentType: "partTime",
          expCompanyName: "lin-dev",
          expStartDate: "2015- 11- 3",
          expEndDate: "2015-11-3"
        }
      ],

      skills: ["team lead", "active team member"],
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
      expriences: [
        {
          experienceId: 1,
          expTitle: "web-dev",
          expEmploymentType: "partTime",
          expCompanyName: "lin-dev",
          expStartDate: "2016- 11- 3",
          expEndDate: "2017-11-3"
        }
      ],

      skills: ["team lead", "active team member"],
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
      expriences: [
        {
          experienceId: 1,
          expTitle: "web-dev",
          expEmploymentType: "partTime",
          expCompanyName: "lin-dev",
          expStartDate: "2013- 11 -3",
          expEndDate: "2012-11-3"
        }
      ],

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

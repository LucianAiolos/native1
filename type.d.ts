
interface IUser {
  // id: string
  name: string
  email: string
  password: string
}

type UserAction = {
  type: string
  user: IUser
}

type UserState = {
  user: IUser
}

type DispatchType = (args: ArticleAction) => ArticleAction
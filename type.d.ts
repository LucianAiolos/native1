
interface IUser {
  id: string
  name: string
}

type UserAction = {
  type: string
  user: IUser
}

type UserState = {
  user: IUser
}

type DispatchType = (args: ArticleAction) => ArticleAction
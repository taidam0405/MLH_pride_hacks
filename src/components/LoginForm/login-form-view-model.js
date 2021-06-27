import { makeAutoObservable } from "mobx";
import { loginAPI } from "../../apis/auth";
import { STATUS_CODE } from "../../constants";

class LoginFormViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  static sharedInstance() {
    if (!LoginFormViewModel.instance) {
      LoginFormViewModel.instance = new LoginFormViewModel();
    }
    return LoginFormViewModel.instance;
  }

  async login(userData) {
    const resp = await loginAPI(userData);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }
}

export const loginFormViewModel = LoginFormViewModel.sharedInstance();

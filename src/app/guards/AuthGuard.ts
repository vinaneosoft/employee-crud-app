import { inject } from "@angular/core";
import { UseraccountService } from "../customservices/useraccount.service";


export function authGuard():boolean{
    //if we want to inject service in class then : DI : constructor
    // if we want to inject the service in function then following
    const account =inject(UseraccountService);
    if(account.loginFlag)
        return true;
    else{
        window.alert("Please login first....")
        return false;
    }
}
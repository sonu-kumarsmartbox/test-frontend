import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { take} from 'rxjs/operators';
import { Observable,of  } from 'rxjs';
// import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private userService:UserService){

    }
    canActivate():Observable<boolean>{
        return this.userService.isAuthenticated.pipe(take(1));
        // return of(false);
    }
}
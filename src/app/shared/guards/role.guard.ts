import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = this.auth.getUserType();
    const roleRoutes = next.data['roleRoutes'] as Array<{ role: string; route: string }>;
    const allowedRoles = next.data['allowedRoles'] as Array<string>;

    if (allowedRoles) {
      const matchedRole = allowedRoles.find((allowedRole) => allowedRole.toLowerCase() === role.toLowerCase());

      if (!matchedRole) {
        // User does not match any of the allowed roles, redirect to "Not found" page.
        return this.router.parseUrl('/not-found');
      }
    }

    // Looks for a match in roleRoutes.
    if (roleRoutes) {
      const matchedRoleRoute = roleRoutes.find((route) => route.role.toLowerCase() === role.toLowerCase());
      // user has access and url match return true
    
      // If there is a match, navigates to the route.
      if (matchedRoleRoute) {
        if (state.url === matchedRoleRoute.route) {
          return true;
        }
        return this.router.parseUrl(matchedRoleRoute.route);
      }
    }

    // Otherwise just let the user to continue.
    return true;
  }
}

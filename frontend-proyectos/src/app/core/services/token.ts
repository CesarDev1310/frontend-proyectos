import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {

  private readonly TOKEN_KEY = '';
  private readonly _token = signal<string | null>(this.getTokenFromStorage());
  readonly isAuthenticated = computed(() => !!this._token());

  saveToken(token: string):void{
    localStorage.setItem(this.TOKEN_KEY, token)    
  }

  getToken(): string | null{
    return this._token()
  }

  removeToken(){
    localStorage.removeItem(this.TOKEN_KEY);
    this._token.set(null);
  }

  private getTokenFromStorage(): string | null{
    return localStorage.getItem(this.TOKEN_KEY);
  }
  
}

import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { HttpClient } from '@angular/common/http';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private _loadingBar: SlimLoadingBarService, private _http: HttpClient, private _router: Router) {
    // subscribe to our router's event here
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  /**
   * we are using http://slowwly.robertomurray.co.uk/ to automate delay(8000ms) with our main json test server
   * https://jsonplaceholder.typicode.com/posts/1
   *
   */

  activate() {
    this._http.get('http://slowwly.robertomurray.co.uk/delay/8000/url/https://jsonplaceholder.typicode.com/posts/1\n' +
      '\n')
      .subscribe(
      data => {
        alert('Success, check your console');
        console.log(data);
      },
      err => console.log(err)
      );
  }

  /**
   * here the endpoint is not existing
   */
  activateWtihError() {
    this._http.get('http://slowwly.robertomurray.co.uk/delay/8000/url/https://not-existing.com/p\n' +
      '\n')
      .subscribe(
      data => console.log(data),
      err => {
        alert('With error, check your console');
        console.log(err);
      }
      );
  }




  /**
 * This is used to intercept and show Loading bar based on the current state of our
 * Router navigation
 * @param {Event} event
 */
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }

    // Set loading state to false in both of the below events to hide the loader in case a request fails
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }
}

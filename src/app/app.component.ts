import { Component } from '@angular/core'
import { timer } from 'rxjs'
import { LoaderComponent } from './loader/loader.component'

@Component({
  selector: 'app-root',
  imports: [LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
  id est laborum.
  `
  data = ''
  isLoading = false

  loadData(): void {
    this.isLoading = true
    timer(3000).subscribe(() => {
      this.data = this.lorem
      this.isLoading = false
    })
  }

  clear(): void {
    this.data = ''
  }
}

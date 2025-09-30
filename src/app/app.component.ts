import { Component, signal } from '@angular/core'
import { timer } from 'rxjs'
import { LoaderComponent } from './loader/loader.component'

@Component({
  selector: 'app-root',
  imports: [LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
  id est laborum.
  `
  protected readonly data = signal('')
  protected readonly isLoading = signal(false)

  loadData(): void {
    this.isLoading.set(true)
    timer(3000).subscribe(() => {
      this.data.set(this.lorem)
      this.isLoading.set(false)
    })
  }

  clear(): void {
    this.data.set('')
  }
}

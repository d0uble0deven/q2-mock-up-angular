import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title/title.component'

describe('AppComponent', () => {

  let component: AppComponent;
  // let fixture: ComponentFixture<AppComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TitleComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-component-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-component-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-component-testing app is running!');
  });


  // // app.component.spec.ts
  // it('should correctly render the passed @Input value', () => {
  //   component.message = 'Enter a new title'; // 1
  //   fixture.detectChanges(); // 2
  //   const compiled = fixture.debugElement.nativeElement; // 2
  //   expect(compiled.querySelector('p').textContent).toBe('Enter a new title'); // 3
  // });


});

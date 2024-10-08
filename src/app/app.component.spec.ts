import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance
    fixture.detectChanges();
  });

  it(`should have a test method`, () => {
    const element = fixture.nativeElement.querySelector('#button');
    element.click()
  });

  it(`should have a test method`, () => {
    component.title = 'test';
    const element = fixture.nativeElement.querySelector('#button');
    element.click()
  });

  it(`should have a test2 method`, () => {
    const element = fixture.nativeElement.querySelector('#button2');
    element.click()
  });
});

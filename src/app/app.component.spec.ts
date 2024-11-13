import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


describe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>;
  let app : AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app= fixture.componentInstance;
  });



  it('should create the app', () => {
        expect(app).toBeTruthy();
  });

  it(`should have the 'BusinessManageFront' title`, () => {
    expect(app.title).not.toBeInstanceOf(Boolean);
    expect(app.title).toBe('BusinessManageFront');

  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('title')?.textContent).toContain('Business Manager');
  });
});
 
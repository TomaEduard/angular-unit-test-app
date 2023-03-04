import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppRoutingModule } from "src/app/app-routing.module";
import { StudentService } from './services/student.service';
import { StudentComponent } from "./student.component";


describe('StudentComponent', () => {

  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      providers: [
        StudentService
      ],
      imports: [
        AppRoutingModule,
        HttpClientModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('SpyOn', () => {
  //   spyOn(component, 'calculate');
  //   component.saveData();

  //   expect(component.calculate).toHaveBeenCalled();
  // });

});
